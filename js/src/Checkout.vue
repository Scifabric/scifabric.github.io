<template>
<button type="button" id="checkout" class="btn btn-default" v-on:click="increment"><img class="rolling" src="/assets/img/rolling.svg"/><span class="product">Review cart</span></button>
</template>

<script>
import { incrementCounter } from './vuex/actions'

export default {
    methods: {
        checkout: function(event) {
            console.log("HOLA");
        }
    },
    vuex: {
        actions: {
            increment: incrementCounter
        }
    }

}
</script>
