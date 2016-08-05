<template>
<button type="button" id="checkout" class="btn btn-default" v-on:click="increment"><img class="rolling" src="/assets/img/rolling.svg"/><span class="product">Next</span></button>
<button type="button" id="checkout" class="btn btn-default" v-on:click="decrement"><img class="rolling" src="/assets/img/rolling.svg"/><span class="product">Previous</span></button>
</template>

<script>
import { incrementCounter, decrementCounter } from './vuex/actions'

export default {
    methods: {
        checkout: function(event) {
            console.log("HOLA");
        }
    },
    vuex: {
        actions: {
            increment: incrementCounter,
            decrement: decrementCounter,
        }
    }

}
</script>
