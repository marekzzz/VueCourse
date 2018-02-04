<template>
    <div>
        Server id: {{ myServer.id }}, status: {{myServer.status}}
        <button @click="showDetail">Show details</button>
    </div>
</template>

<script>
    export default {
        props:['myServer'],
        methods: {
            showDetail() {

            }
        }
    }
</script>

<style scoped>

</style>