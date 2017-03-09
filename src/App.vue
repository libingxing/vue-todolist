<template>
  <div id="app" v-bind:class="[active,disactive]">
  <span>{{title}}</span>
  <ul  v-if="seen">
  <li v-for="item in items" v-bind:class="{finished:item.isFinished}" v-on:click="change(item)">{{item.label}}</li>
  </ul>
  <input v-model="newItem" v-on:keyup.enter="addNew">
  <p>son tell me:{{message}}</p>
  <component-a  messagefromfather="you are my son" v-on:child-tell-me-something="listenToSon">
  </component-a>
  </div>
</template>
 
 
 
<script>
import Store from './store';
import componentA from './components/componentA';
export default {
  data:function(){
  return {
     title:"this is a todo list",
	 seen:true,
	 items:Store.fetch(),
	 newItem:" ",
	 message:"",
	 active:"aaa",
	 disactive:"bbb"
    }
  },
  components:{componentA},
  watch:{
   items:{
    handler:function(items){
    Store.save(items);
    },
    deep:true
  }
  },
  methods:{
change(item){
item.isFinished=!item.isFinished;
},
listenToSon:function(msg){
this.message=msg;
},
addNew(){
this.items.push({
label:this.newItem,
"isFinished":false
})
this.newItem=""
}
  }
}
</script>





<style>
.finished{
text-decoration:underline
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button{
background-color:red;
}
</style>
