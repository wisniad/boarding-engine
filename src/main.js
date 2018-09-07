// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import VModal from 'vue-js-modal'

Vue.use(VModal)
Vue.config.productionTip = false

let app
const config = {
  apiKey: 'AIzaSyDlb70qnZxNILBX2tlHrT-Mc1l82_uTcdI',
  authDomain: 'boarding-engine.firebaseapp.com',
  databaseURL: 'https://boarding-engine.firebaseio.com',
  projectId: 'boarding-engine',
  storageBucket: 'boarding-engine.appspot.com',
  messagingSenderId: '339411805565'
}

firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(function (user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
