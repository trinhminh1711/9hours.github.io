<template>
  <div id="app">

  <app2-component></app2-component>
  </div>
</template>

<script>
import app2 from './app2.vue';
export default {
  data() 
    {
    return {
      message: 'Hello World',
    };
    },
      components : 
    {
        'app2-component' :  app2
    },
    props: ['postTitle'],
    methods :
    {
      test : function()
      {
        console.log(this.postTitle);
      }
    }
};
</script>

<style>
#app {
  font-size: 18px;
  font-family: 'Roboto', sans-serif;

}

</style>