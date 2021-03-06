import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import BuyModalComponent from '@/components/Shared/BuyModal'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.component('app-buy-modal', BuyModalComponent)

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

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })

    this.$store.dispatch('fetchAds')
  }
})
