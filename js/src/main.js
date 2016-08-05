import Vue from "vue";
import Client from './Client.vue';
import Checkout from './Checkout.vue';
import store from  './vuex/store.js';

// register
//Vue.component('client', Client)
//Vue.component('checkout', Checkout)

// create a root instance
new Vue({
  el: 'body',
  components: {
      Client, Checkout
  },
  store: store

})

$(".btn-shoppingcart").off('click').on('click', function(evt){
    $("#newclient").modal("show");
});
