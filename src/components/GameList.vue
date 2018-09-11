<template>
  <div>
    <h1>Game List</h1>
    <button v-on:click="logout">Logout</button>
    <button v-on:click="show">Create new</button>
    <modal name="example"
         :width="300"
         :height="300"
         @before-open="beforeOpen">
      <input type="text" v-model="gameName" placeholder="Game name">
      <button v-on:click="addGame">Add game</button>
  </modal>
    <table>
      <tr>
        <th>Game name</th>
        <th>Edit</th>
        <th>Play</th>
        <th>Delete</th>
      </tr>
      <tr :key="index" v-for="(game, index) in gameList">
        <td>{{index + 1}}. {{game.gameName}}</td>
        <td><button v-on:click="edit(game.id)">Edit {{game.id}}</button><router-link to="/edit/123">Edit link</router-link></td>
        <td><button>Play</button></td>
        <td><button v-on:click="removeGame(game.id)">Delete</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
import firebase from 'firebase'
import uuid from 'uuid/v4'

export default {
  name: 'gameList',
  data () {
    return {
      gameName: '',
      gameList: []
    }
  },
  mounted: function () {
    const uid = firebase.auth().currentUser.uid
    firebase.database()
      .ref('/users/')
      .child(uid)
      .child('games')
      .once('value')
      .then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          this.gameList.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          })
        })
      })
  },
  methods: {
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    },
    edit: function (gid) {
      this.$router.replace('edit/' + gid)
    },
    beforeOpen () {
      this.gameName = ''
    },
    show () {
      this.$modal.show('example')
    },
    hide () {
      this.$modal.hide('example')
    },
    addGame: function () {
      const uid = firebase.auth().currentUser.uid

      let gameUUID = uuid()
      firebase.database()
        .ref('users')
        .child(uid)
        .child('games')
        .child(gameUUID)
        .set({
          gameName: this.gameName
        })
        .then(() => {
          alert('Game added')
          this.getGameList()
          this.$modal.hide('example')
        })
        .catch((e) => {
          console.log('This failed ' + e)
        })
    },
    getGameList: function () {
      const uid = firebase.auth().currentUser.uid
      this.gameList = []
      firebase.database()
        .ref('/users/')
        .child(uid)
        .child('games')
        .once('value')
        .then((snapshot) => {
          snapshot.forEach((childSnapshot) => {
            this.gameList.push({
              id: childSnapshot.key,
              ...childSnapshot.val()
            })
          })
        })
    },
    removeGame: function (gameId) {
      const uid = firebase.auth().currentUser.uid
      firebase.database()
        .ref('/users/')
        .child(uid)
        .child('games')
        .child(gameId)
        .remove()
        .then(() => {
          alert('Game deleted')
          this.getGameList()
        })
        .catch((e) => { console.log('Game error' + e) })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
