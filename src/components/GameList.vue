<template>
  <div>
    <h1>Game List</h1>
    <button v-on:click="logout">Logout</button>
    <button v-on:click="createNew">Create new</button>
    <table>
      <tr>
        <th>Game name</th>
        <th>Edit</th>
        <th>Play</th>
        <th>Delete</th>
      </tr>
      <tr>
        <td>Game name 1</td>
        <td><button>Edit</button></td>
        <td><button>Play</button></td>
        <td><button>Delete</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'gameList',
  data () {
    return {}
  },
  methods: {
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    },
    createNew: function () {
      this.$router.replace('create-new')
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
