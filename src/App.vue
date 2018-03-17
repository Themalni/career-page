<template>
  <div id="app">
    <header-section></header-section>
    <main class="main" id="main">
      <about-company></about-company>
      <router-view></router-view>
    </main>
    <footer-section></footer-section>
  </div>
</template>

<script>

import firebase from 'firebase'
import HeaderSection from './components/HeaderSection'
import search from './components/search'
import CurrentPositions from './components/CurrentPositions'
import AboutCompany from './components/AboutCompany'
import PositionView from './components/PositionView'
import FooterSection from './components/FooterSection'

var config = {
    apiKey: "AIzaSyC66Tq4YpHU-zSwgGgU508IGXa8NTjBifI",
    authDomain: "vue-career-page.firebaseapp.com",
    databaseURL: "https://vue-career-page.firebaseio.com",
    projectId: "vue-career-page",
    storageBucket: "vue-career-page.appspot.com",
    messagingSenderId: "49331372894"
  };

var app = firebase.initializeApp(config);
var db = app.database();
var positionsRef = db.ref('positions');


export default {
  name: 'App',
  firebase: {
    positions: positionsRef,
    asObject: true
  },
  components: {
    HeaderSection,
    search,
    CurrentPositions,
    AboutCompany,
    PositionView,
    FooterSection
  },
  data(){
    return {
      
    }
  }
}
</script>

<style>
.main {
  display: flex;
  flex-wrap: wrap;
  
} 

@media (min-width: 320px) and (max-width: 768px) {
  .main {
    flex-direction: column;
  }
}
</style>
