<template>
    <div>
     <span v-color ='color'>   {{giveSon}} {{msg}} {{name}}</span>
     <input type="button" @click='sayHi' value='传值'>
      son
    </div>
</template>

<script>
export default {
  name:'son',
  data() {
    return {
      msg: "welcome"
    };
  },
  methods:{
    sayHi(){
          this.$emit('sendMsg','I want send this something to father components')
    }
  },
  props:['name','color','giveSon']
};
</script>
