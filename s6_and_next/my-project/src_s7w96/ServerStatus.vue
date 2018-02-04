<template>
  <div>
    <p>Server Status: {{status}}</p>
    <hr>
    <button @click="changeStatus2">Change Status</button>
  </div>
</template>

<script>
  export default {
    data : function () {
      return {
        status : 'Critical'
      };
    },
    methods : {
      //EC5
      changeStatus : function () {

      },
      //EC6
      changeStatus2() {
        this.status = 'Normal';
      }
    }
  }

</script>
