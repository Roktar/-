<template>
  <div>
    {{mayorList.black.name}} : {{mayorList.black.vote}} <button id="black" class="btn btn-primary btn-sm" @click="vote($event)"> Vote </button> <br><br>
    {{mayorList.pink.name}} : {{mayorList.pink.vote}} <button id="pink" class="btn btn-primary btn-sm" @click="vote($event)"> Vote </button> <br><br>
    {{mayorList.white.name}} : {{mayorList.white.vote}} <button id="white" class="btn btn-primary btn-sm" @click="vote($event)"> Vote </button> <br><br>
    {{mayorList.brown.name}} : {{mayorList.brown.vote}} <button id="brown" class="btn btn-primary btn-sm" @click="vote($event)"> Vote </button> <br><br>
    <input type="text" @keyup.delete="reset" placeholder="press 'delete' to reset"  />
    <h1 v-show="top != 'none'"> Our mayor is Mr. {{ top }} ! </h1>
  </div>
</template>

<script>
export default {
  name: 'chap5_ex1',
  data () {
    return {
      mayorList: {
        black:{
          name:"Black",
          vote:0
        },
        pink:{
          name:"Pink",
          vote:0
        },
        white:{
          name:"White",
          vote:0
        },      
        brown:{
          name:"Brown",
          vote:0
        }
      }
    }
  },
  methods: {
    vote:function(event) {
      this.mayorList[event.currentTarget.id].vote++
    },
    reset:function() {
      for(let mayor in this.mayorList)
        this.mayorList[mayor].vote = 0
    }
  },
  computed: {
    top: function() {
      let maxVote = {name:"none", vote:0};

      for(let mayor in this.mayorList) {
          if(this.mayorList[mayor].vote > maxVote.vote)
            maxVote = this.mayorList[mayor]
      }
      return maxVote.name
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
