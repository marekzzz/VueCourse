<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="s in servers">
                <server-tag :myServer="s"
                            ></server-tag>
            </li>
        </ul>
    </div>
</template>

<script>
    import Server from './Server.vue';
    import {eventBus} from '../../main';
    export default {
        components: {
            serverTag : Server
        },
        data: function () {
            return {
                servers: [
                    {id: 1, status: 'Normal'},
                    {id: 2, status: 'Critical'},
                    {id: 3, status: 'Unknown'},
                    {id: 4, status: 'Normal'},
                    {id: 5, status: 'Normal'}
                ]
            };
        },
      methods: {
        changeStatus(id, destinationStatus) {
          for(var i=0; i<this.servers.length;i++) {
            if(this.servers[i].id === id) {
              this.servers[i].status = destinationStatus;
            }
          }
        }
      },
      created() {
        eventBus.$on('busChangeStatusE', (id, status) => {
          console.log('busChangeStatusE:' + id + ' ' + status);
          this.changeStatus(id, status);
        });
      }
    }
</script>

<style>

</style>
