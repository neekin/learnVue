<template>
    <div>
       <span v-color='color'>{{msg}}</span>
       <son ref='son' :name='myName' :color='color' @sendMsg ='getMsg' :giveSon='sendGiveSon'></son>
       <input type="button" @click='getMsg1' value='调用子组件的方法'>
    </div>
</template>


<script>
import son from './son'
    export default{
      data () {
         return {
              msg:'这是一个测试组件',
              color:'blue',
              myName:'NeeKin',
         }
      },
      methods:{
        getMsg(value){
          this.$emit('sendMsg',value);
        },
        getMsg1(){
          // console.log();
          this.$refs.son.sayHi()
          // this.$refs.son.sayHi();
        }
      },
      components:{son},
      props:['sendGiveSon']
    }
</script>