// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyDlb70qnZxNILBX2tlHrT-Mc1l82_uTcdI',
  authDomain: 'boarding-engine.firebaseapp.com',
  databaseURL: 'https://boarding-engine.firebaseio.com',
  projectId: 'boarding-engine',
  storageBucket: 'boarding-engine.appspot.com',
  messagingSenderId: '339411805565'
}

firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
