import Vue from "vue"
import App from "./components/App.vue"
import Buefy from 'buefy'

Vue.use(Buefy)
Vue.config.debug = true
Vue.config.devtools = true

new Vue({
    el: '#pricing',
    components: { App },
})
