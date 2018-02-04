<template>
    <div class="container">
        <page-header></page-header>
        <hr>
        <page-content></page-content>
        <hr>
        <page-footer></page-footer>
    </div>
</template>

<script>
    import PageHeader from './PageHeader.vue';
    import PageContent from './PageContent.vue';
    import PageFooter from './PageFooter.vue';
    export default {
        components: {
            'page-header' : PageHeader,
            'page-content' : PageContent,
            'page-footer' : PageFooter
        }
    }
</script>

<style>

</style>
