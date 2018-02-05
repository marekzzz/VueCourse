<template>
    <div>
        Server id: {{ myServer.id }}, status: {{myServer.status}}
        <button @click="showDetailLocal">Show details</button>
    </div>
</template>

<script>
  import {eventBus} from '../../main';
    export default {
        props:['myServer'],
        methods: {
            showDetailLocal() {
              console.log("showDetailLocal: " + this.myServer);
              eventBus.busShowServerDetail(this.myServer);
            }
        }
    }
</script>

<style scoped>

</style>