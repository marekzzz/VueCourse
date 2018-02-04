<template>
    <div class="row">
        <servers-list></servers-list>
        <server-details></server-details>
    </div>
</template>

<script>
    import ServersList from './ServersList.vue';
    import ServerDetails from './ServerDetails.vue';
    export default {
        components : {
            "servers-list" : ServersList,
            'server-details' : ServerDetails
        }
    }
</script>