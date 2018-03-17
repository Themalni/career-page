<template>
<transition name="slide-fade">
    <div class="offer-container" id="offer-container">
        <router-link to="/current-positions#positions-container">
            <button class="button button-secondary button-secondary-left"><span class="lnr lnr-arrow-left"></span></button>
        </router-link>
        <h1 class="offer-title">{{ positionInfo.position }}</h1>
        <div class="offer-details-container">
            <span class="offer-details"><strong>Level: </strong>{{ positionInfo.level }}</span>
            <span class="offer-details"><strong>Location: </strong>{{ positionInfo.location }}</span>
            <span class="offer-details"><strong>Experience: </strong>{{ positionInfo.experience }}</span>
            <span class="offer-details"><strong>Job type: </strong>{{ positionInfo.type }}</span>
            <span class="offer-details"><strong>Employment: </strong>{{ positionInfo.employment }}</span>
            <span class="offer-details"><strong>Salary: </strong>{{ positionInfo.salary }}</span>
        </div>
        <h3 class="skills-title">Must have</h3>
        <div class="skills-container">
            
                <div v-for="(value, key) in positionInfo.skills">
                    <div class="skill">
                        <span class="skill-text-top">{{ value }}</span>
                    </div>
                </div>
                
        </div>
        <div class="description-container">
            <h3 class="description-title">Description</h3>
            <p class="description-text">{{ positionInfo.description }}</p>
            <h3 class="description-title">What you'll be doing</h3>
            <ul>
                <li v-for="(value, key) in positionInfo.responsibilities" class="responsibilities">{{ value }}</li>
            </ul>
            <h3 class="description-title">Job requirements</h3>
            <ul>
                <li v-for="(value, key) in positionInfo.requirements" class="requirements">{{ value }}</li>
            </ul>
            <h3 class="description-title">Nice to have</h3>
            <ul>
                <li v-for="(value, key) in positionInfo.additionals" class="additionals">{{ value }}</li>
            </ul>
            <p class="description-text">Interested in this position? Send us your CV on e-mail: <span class="description-email">job@double.com</span></p>
        </div>
    </div>
</transition>
</template>

<script>

export default {
    name: 'position-view',
    data() {
        return {
            id: this.$route.params.id,
            positionInfo: {}        
        }
    },
    created() {
        this.$http.get('https://vue-career-page.firebaseio.com/positions/' + this.id + '.json').then(function(data){
            return data.json();    
        }).then(function(data){
            this.positionInfo = data;
        });  
    }
}

</script>

<style>
.offer-container {
    width: 100%;
    padding: 1.5em;
    background-color: #fff;
    box-sizing: border-box;
    flex-direction: column;
    position: relative;
}
.offer-title {
    font-size: 2em;
    font-family: 'Playfair Display', serif;
    font-weight: 900;
    text-transform: uppercase;
    color: #FF5D73;
    border-bottom: 1px solid #ccc;
    padding: 0 1.5em 0.5em 0;
    display: inline-block;
    min-height: 1.4em;
}
.offer-details-container {
    display: flex;
    flex-wrap: wrap;
    item-justify: start;
}
.offer-details {
    margin: 0.05em 0;
    font-family: 'Roboto', sans-serif;
    font-size: 1em;
    color: #666;
    font-weight: 400;
}
.offer-container .button {
    margin-top: 0;
    box-shadow: none;
    position: absolute;
    top: 0.5em;
    left: 0.5em;
    color: #fff;
    font-size: 1.5em;
    padding: 8px;
    line-height: 1;
}
.skills-container {
    margin: 2em auto;
    display: flex;
    flex-wrap: wrap;
}
.skills-title,
.description-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.5em;
    color: #FF5D73;
    font-weight: 900;
    text-transform: uppercase;
}
.skill {
    display: inline-block;
    margin: 0.15em;
    padding: 25px 10px;
    background: linear-gradient(to top right, #968DBC 20%, #d2cfe3 100%);
    background-color: #968DBC;
    color: #fff;
    text-align: center;
    border-radius: 3px;
}
.skill-text-top,
.skill-text-bottom  {
    font-family: 'Roboto', sans-serif;
    display: block;
}
.skill-text-top {
    padding-bottom: 0.2em;
    font-weight: 900;
    font-size: 1em;
}
.skill-text-bottom {
    border-top: 1px solid #fff;
    padding-top: 0.2em;
    font-weight: 400;
    font-size: 0.9em;
}
.description-text {
    font-size: 1em;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    color: #333;
    margin-top: 0;
}
.description-email {
    font-family: 'Playfair Display', serif;
    font-size: 1.3em;
    color: #FF5D73;
}
.responsibilities,
.requirements,
.additionals {
    font-size: 1em;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    color: #333;
    margin-bottom: 0.3em;
    margin-left: 1em;
}

@media (min-width: 320px) and (max-width: 639px) {
    .offer-title {
        font-size: 2em;
    }
    .offer-details {
        width: 100%;
        margin: 0.2em 0;
    }
    .skill {
        width: 48%;
        padding: 15px 10px;
        box-sizing: border-box;
    }
    .skill:last-child {
        width: 98%

    }
    .responsibilities, 
    .requirements, 
    .additionals {
        margin-left: initial;
    }
}

@media (min-width: 640px) {
    .offer-details {
        width: 45%;
    }
    .skill {
        width: 80px;
    }
}
@media (min-width: 768px) {
    .offer-container {
        width: 65%;
        padding: 3em 3em 1.5em;
        flex-direction: row;
    }
    .offer-title {
        font-size: 2.5em;
    }
    .offer-details {
        width: 40%;
    }
}

</style>