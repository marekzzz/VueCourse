<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
              <button @click="selectedComponent='appQuote'">Quote</button>
              <button @click="selectedComponent='appAuthor'">Author</button>
              <button @click="selectedComponent='appNew'">New</button>
              <hr>
              <p>{{selectedComponent}}</p>
              <keep-alive>
                <component :is="selectedComponent">
                  <p>Default Content</p>
                </component>
              </keep-alive>
               <!--<app-quote>-->
                   <!--<h1 slot="title">{{quoteTitle}}</h1>-->
                   <!--<p>A wonderful Quote</p>-->
               <!--</app-quote>-->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import appAuthor from './components/Author.vue';
    import appNew from './components/New.vue';
    export default {
      data : function () {
        return {
          quoteTitle: 'The Quote3',
          selectedComponent: 'appQuote'
        };
      },
      components: {
        appQuote: Quote,
        appAuthor,
        appNew
      }

    }
</script>

<style>
</style>
