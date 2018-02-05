<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="server===null">Server Details are currently not updated</p>
        <template v-else>
            <p>ID {{server.id}}, Status {{server.status}}</p>
            <button @click="changeStatus">Change status</button>
        </template>
    </div>

</template>

<script>
  import {eventBus} from '../../main';

  export default {
    data: function () {
      return {
        server: null
      };
    },
    methods: {
      changeStatus() {
        eventBus.busChangeStatus(this.server.id,'NormalC');
      }
    },
    created() {
      eventBus.$on('busShowServerDetailE', (selectedServer) => {
        console.log('busShowServerDetailE:' + selectedServer);
        console.log(selectedServer);
        this.server = selectedServer;
      });
    }
  }
</script>

<style>

</style>
