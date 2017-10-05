import Vue from "vue"
import App from "./components/App.vue"
import Buefy from 'buefy'

Vue.use(Buefy)
Vue.config.debug = true
Vue.config.devtools = true


var app = new Vue({
    data() {
        return {visibility: 'all'}
    },
    el: '#projects',
    components: { App },
})

// handle routing
function onHashChange () {
  var visibility = window.location.hash.replace(/#\/?/, '')
  app.visibility = decodeURI(visibility).toLowerCase()
}

window.addEventListener('hashchange', onHashChange)
onHashChange()
