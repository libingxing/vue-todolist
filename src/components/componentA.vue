<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
        <h1>{{ messagefromfather }}</h1>
    <button v-on:click="clickMe">open mouse!</button>
  </div>
</template>


<script>
export default {
data:function(){
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props:['messagefromfather'],
  methods:{
  clickMe(){
  console.log(this.messagefromfather)
  this.$emit("child-tell-me-something",this.msg);
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
