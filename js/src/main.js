import Vue from "vue";
import Client from './Client.vue';

// register
Vue.component('client', Client)

// create a root instance
new Vue({
  el: 'body',

})
