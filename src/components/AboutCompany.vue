<template>
<div class="about-container">
  <h1 class="about-header">{{ headerText }}</h1>
  <p class="about-description">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative      approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
  <p class="about-description">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
  <h3 class="about-subheader">{{ subheaderText }}</h3>
  <ul>
      <li v-for="benefit in benefits" :key="benefit.id" class="benefits">{{ benefit.text }}</li>
  </ul>
</div>
</template>

<script>

export default {
  name: 'about-company',

  data(){
    return {
      headerText: "About Us",
      subheaderText: "What we offer",
      benefits: [
        {text: "Etiam aenean cras laoreet integer sed. Scelerisque lacinia cursus arcu proin suspendisse."},
        {text: "Itaque sensibus rationem adiunxit et ratione effecta sensus non reliquit. "},
        {text: "Atque haec ita iustitiae propria sunt, ut sint virtutum reliquarum communia. Perturbationes autem nulla naturae vi commoventur, omniaque ea sunt opiniones ac iudicia levitatis."},
        {text: "Num igitur dubium est, quin, si in re ipsa nihil peccatur."},
        {text: "Sed emolumenta communia esse dicuntur, recte autem facta et peccata non habentur communia."},
        {text: "Profectus in exilium Tubulus statim nec respondere ausus."}
      ]
    }
  }
}

</script>

<style>
.about-container {
  width: 35%;
  padding: 3em;
  background-color: #968dbc;
  box-sizing: border-box;
}
.about-header {
  font-size: 2.5em;
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  text-transform: uppercase;
  color: #fff;
  border-bottom: 1px solid #fff;
  padding: 0 1.5em 0.5em 0;
  display: inline-block;
}
.about-description {
  font-size: 1.1em;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #fff;
  margin-top: 0;
}
.about-subheader {
    font-family: 'Playfair Display', serif;
    font-size: 1.5em;
    color: #fff;
    font-weight: 900;
    text-transform: uppercase;
}
.benefits {
    font-size: 1.1em;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    color: #fff;
    margin-bottom: 0.3em;
    margin-left: -1em;
}

@media (min-width: 320px) and (max-width: 767px) {
  .about-container {
    width: 100%;
    padding: 1.5em;
  }
  .about-header {
    font-size: 2em;
  }
}

@media (min-width: 768px) {
  .about-container {
    width: 40%;
    padding: 2em;
  }
}

@media (min-width: 1024px) {
  .about-container {
    width: 35%;
    padding: 3em;
  }
}
</style>