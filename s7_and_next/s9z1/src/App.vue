<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="loadBlue">Load Blue Template</button>
                <button class="btn btn-success" @click="loadGreen">Load Green Template</button>
                <button class="btn btn-danger" @click="loadRed">Load Red Template</button>
                <hr>
                <!--<app-blue>Blue content</app-blue>-->
                <!--<app-green>Green content</app-green>-->
                <!--<app-red>Red content</app-red>-->
                <component :is="selectedComponent">
                    shared content
                </component>
            </div>
        </div>
    </div>
</template>

<script>
  import Blue from './components/Blue.vue';
  import Green from './components/Green.vue';
  import Red from './components/Red.vue';

  export default {
    components: {
      appBlue: Blue,
      appGreen: Green,
      appRed: Red
    },
    data : function () {
        return {
          selectedComponent: 'appBlue'
        } ;
    },
    methods: {
      loadBlue() {
        this.selectedComponent = 'appBlue';
      },
      loadGreen() {
        this.selectedComponent = 'appGreen';
      },
      loadRed() {
        this.selectedComponent = 'appRed';
      }
    }
  }
</script>

<style>
</style>
