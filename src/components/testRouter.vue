<template>
  <div>
      test Router{{msg}}
      <router-link to="/">回到首页</router-link>
  </div>
  
</template>

<script>
 export default{
         data(){
             return {
                 msg:'this is route msg'
             }
         } 
      }
</script>
