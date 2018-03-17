<template>
<div class="footer-container">
  <footer class="footer">
    <div class="company-name">Double.</div>
    <div class="footer-social">
      <span class="fa fa-twitter-square fa-lg"></span>
      <span class="fa fa-facebook-square fa-lg"></span>
      <span class="fa fa-youtube-square fa-lg"></span>
      <span class="fa fa-linkedin-square fa-lg"></span>
    </div>
    <h3 class="footer-text">&copy; Copyright Double 2018</h3>
  </footer>
</div>
</template>

<script>

export default {
  name: 'footer-section',

  data(){
    return {
      
    }
  }
}

</script>

<style>
.footer-container {
  
}
.footer {
  background-color: #333;
  position: relative;
  height: 200px;
}
.company-name {
  top: 1em;
  left: 1em;
  font-size: 1.3em;
}
.footer-text {
  position: absolute;
  bottom: 3.5em;
  left: 50%;
  transform: translateX(-50%);
  color: #eee;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 0.9em;
  font-weight: 400;
  text-transform: uppercase;
}
.footer-social {
  position: absolute;
  bottom: 2em;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: #eee;
}
.footer-social .fa-lg {
  font-size: 1.5em;
}
.footer-social .fa {
  margin: 0 0.1em;
}
</style>