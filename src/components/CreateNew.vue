  <template>
  <div>
    <h2>Create new game</h2>
    <span>Go back to <router-link to="/game-list">game list</router-link></span><br>
    <input type="text" v-model="gameName" placeholder="Game name">
    <button v-on:click="test">Test</button>
    <button v-on:click="test2">Test2</button>
  </div>
</template>

<script>
import firebase from 'firebase'
import uuid from 'uuid/v4'

export default {
  name: 'createNew',
  data: function () {
    return {
      gameName: ''
    }
  },
  methods: {
    test: function () {
      console.log(firebase.auth().currentUser.uid)
      let uid = firebase.auth().currentUser.uid
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
          console.log('Data is saved')
        })
        .catch((e) => {
          console.log('This failed ' + e)
        })
    },
    test2: function () {
      console.log(this.gameName)
    }
  }
}
</script>

<!-- Global CSS -->
<style>
.signUp {
    margin-top: 40px;
}
input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
}
button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
}
span {
    margin-top: 10px;
    width: 10%;
    cursor: pointer;
}
</style>
