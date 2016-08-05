import Vue from "vue";
import Client from './Client.vue';
import Checkout from './Checkout.vue';

// register
Vue.component('client', Client)
Vue.component('checkout', Checkout)

// create a root instance
new Vue({
  el: 'body',

})

$(".btn-shoppingcart").off('click').on('click', function(evt){
    $("#newclient").modal("show");
});

