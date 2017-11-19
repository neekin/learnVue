<template>
    <div class="hello">
       <h1>{{ msg }}</h1>
        <first @sendMsg ='getMsg' :sendGiveSon='giveson'></first>
        <input @click="sendGiveSon" value='给儿子传值' type='button'>
    </div>
   
</template>

<script>
import first from './First'
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      giveson:''
    };
  },
  components:{first},
  methods:{
    getMsg(value){
      this.msg = value;
    },
    sendGiveSon(){
      this.giveson = '给儿子的';
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
