<script>

import AppHeader from './components/AppHeader.vue';
import AppJumbo from './components/AppJumbo.vue';
import AppSkills from './components/AppSkills.vue';
import MyInfo from './components/MyInfo.vue';
import AppFooter from './components/AppFooter.vue';


export default {
   components: { 
      AppHeader,
      AppJumbo,
      AppSkills,
      MyInfo,
      AppFooter,
   },

    data() {
        return {

        }
    },

    mounted() {

    },

    methods: {

    },
}
</script>

<template>

   <div id="my-app">

      <AppHeader></AppHeader>
      <AppJumbo></AppJumbo>
   
      <AppSkills></AppSkills>
         
      <router-view></router-view>
   
      <MyInfo></MyInfo>
   
      <AppFooter></AppFooter>

   </div>



</template>

<style lang="scss">

#my-app{
   background-color: #101010;
   color: white;
}

</style>
