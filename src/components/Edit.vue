<template>
  <div>
    <h1>ID gry: {{gid}}</h1>
    <h3  class="details">{{details}} </h3>
    <div class="flex-container">
      <table>
        <tr :key="indexY" v-for="(cellY, indexY) in gridY">
          <td :key="indexX" v-for="(cellX, indexX) in gridX">
            <div
            @mouseover="showDetails(indexX, indexY)"
            @mouseleave="details = ''"
            v-on:click="select(indexX,indexY)"
            >
              {{indexX}}<br>{{indexY}}
            </div>
          </td>
        </tr>
      </table>
      <div>
        <p>Wielkosc planszy X: {{gridX}}, Y: {{gridY}}</p>
        <button v-on:click="changeGridX(1)">Plus X</button> <button v-on:click="changeGridX(-1)">Minus X</button>
        <button v-on:click="changeGridY(1)">Plus Y</button> <button v-on:click="changeGridY(-1)">Minus Y</button>
      </div>
    </div>
    <p>This X is selected {{selectedX}} this Y is selected {{selectedY}} </p>
  </div>
</template>

<script>
export default {
  name: 'edit',
  data () {
    return {
      gameName: '',
      game: [],
      gid: '',
      gridX: 12,
      gridY: 12,
      details: '',
      selectedX: 0,
      selectedY: 0,
      isActive: false
    }
  },
  mounted: function () {
    console.log(this)
    this.gid = this.$route.params.gid
  },
  methods: {
    changeGridX: function (value) {
      if (this.gridX < 64 && value > 0) {
        this.gridX += value
      }
      if (this.gridX > 1 && value < 0) {
        this.gridX += value
      }
    },
    changeGridY: function (value) {
      if (this.gridY < 64 && value > 0) {
        this.gridY += value
      }
      if (this.gridY > 1 && value < 0) {
        this.gridY += value
      }
    },
    showDetails (x, y) {
      this.details = 'Current details: This is X' + x + ' and this is Y ' + y
    },
    select (selectX, selectY) {
      this.selectedX = selectX
      this.selectedY = selectY
      this.active = true
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
.details {
  height: 100px;
}
td {
  height: 35px;
  width: 35px;
  text-align: center;
  font-size: 0.6em;
}
td:hover {
  background-color: coral
}
selectedCell {
  background-color: blue
}
.flex-container {
  display: flex;
  align-items: center;
}
</style>
