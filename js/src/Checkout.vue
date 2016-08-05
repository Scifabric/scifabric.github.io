<template>
<button type="button" id="checkout" class="btn btn-default" v-on:click="checkout"><img class="rolling" src="/assets/img/rolling.svg"/><span class="product">Review cart</span></button>
</template>

<script>
export default {
    methods: {
        checkout: function(event) {
            console.log("HOLA");
        }
    }
}
</script>
