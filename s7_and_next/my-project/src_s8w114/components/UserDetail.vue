<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age {{localAge}}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn()">Reset Name Fn</button>
    </div>
</template>

<script>
    import {eventBus} from '../main';
    export  default {
        props : {
            //'myName':String
            //'myName':[String,Array]
            'myName':{
                    type: String
                },
            resetFn : Function,
            userAge : Number
        },
        data: function () {
            return {
                localAge: this.userAge
            };
        },
        methods : {
            switchName() {
                return this.myName.split("").reverse().join("");
            },
            resetName() {
                this.$emit('nameWasReset', 'Max');
            }
        },
        created() {
            eventBus.$on('ageWasEdited', (age) => {
                this.localAge = age;
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
