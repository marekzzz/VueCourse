<template>
  <div>
    <h3>New Quote</h3>
    <button @click="counter++">Inrease!</button>
    <p>{{counter}}</p>
  </div>
</template>

<script>
  export default {
    name: "new",
    data : function () {
      return {
        counter:0
      };
    },
    destroyed() {
      console.log('Destroyed');
    },
    deactivated() {
      console.log('Deactivated');
    },
    activated() {
      console.log('Activated');
    }
  }
</script>

<style scoped>

</style>