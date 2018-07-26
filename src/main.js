import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
// import fb from 'firebase/app'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyD-BM47N8MRwyiFkwsMOsM_8NyCMJJeAkY',
      authDomain: 'vue-ads-693f6.firebaseapp.com',
      databaseURL: 'https://vue-ads-693f6.firebaseio.com',
      projectId: 'vue-ads-693f6',
      storageBucket: 'vue-ads-693f6.appspot.com',
      messagingSenderId: '254715257870'
    })
  }
})
