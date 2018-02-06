<template>
  <div class="row">
    <form action="">
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
          <label for="">Quote</label>
          <textarea class="form-controll" name="" id="" cols="30" rows="3" v-model="quote"></textarea>
      </div>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <button class="btn btn-primary" @click.prevent="createNew">Add quote</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: "new-quote",
    data: function () {
      return {
        quote: ''
      };
    },
    methods: {
      createNew() {

      }
    }
  }
</script>

<style scoped>

</style>