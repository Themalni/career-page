<template>
<div>
    <header class="header">
      <router-link to="/">
        <div class="company-name">Double.</div>
      </router-link>
      <h1 class="header-text">{{headerText}}</h1>
      <h3 class="header-text-description">{{headerTextDescription}}</h3>
      <button v-scroll-to="'#positions-container'" class="button button-main">Check jobs</button>
    </header>
</div>
</template>

<script>

export default {
  name: 'header-section',

  data(){
    return {
      headerText: "We are hiring",
      headerTextDescription: "Become a part of our awesome team."
    }
  }
}

</script>

<style>
.header {
  position: relative;
  background-image: url(../assets/header.jpg);
  height: 500px;
  background-size: cover;
  background-position-y: top;
  text-align: center;
}
.header-text, 
.header-text-description {
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translateX(-50%);
  text-transform: uppercase;
  font-size: 4em;
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  color: #fff;
  display: block;
  width: 100%;
  text-shadow: 0 3px 2px #666;
}
.header-text-description {
  top: 42%;
  font-size: 1.6em;
  text-transform: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
}
.company-name {
  position: absolute;
  left: 0.5em;
  top: 0.5em;
  padding: 0 10px;
  font-size: 2em;
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  color: #fff;
  text-transform: uppercase;
  border: 3px solid #fff;
}
.header .button {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
  margin-top: 4em;
}

@media (min-width: 320px) and (max-width: 479px) {
  .header {
    height: 500px;  
  }
  .header-text {
    max-width: 80%;
    font-size: 3em;
    line-height: 1;
  }
  .header-text-description {
    top: 45%;
    font-size: 1.4em;
    max-width: 60%;
  }
  .header .button {
    margin-top: 6em;
    width: 120px;
  }
}
</style>