import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    busShowServerDetail(selectedServer) {
      console.log('busShowServerDetail:' + selectedServer);
      this.$emit('busShowServerDetailE',selectedServer);
    },
    busChangeStatus(id, status) {
      this.$emit('busChangeStatusE',id, status);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
