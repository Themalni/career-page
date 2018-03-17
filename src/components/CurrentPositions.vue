<template>
    <transition name="fade">
    <div class="positions-container" id="positions-container">
        <h1 class="positions-header">{{ header }}</h1>
        <div class="positions-list">
            
                <div v-for="item in positions" class="positions-list-item">
                    <router-link v-bind:to="'/position-view/' + item.id + '#offer-container'" exact>
                        <div class="job-icon-container">
                            <span class="job-icon">{{ item.icon }}</span>
                        </div>
                        <div class="job-item-container">
                            <span class="job-item job-item-header">{{ item.position }}</span>
                            <span class="job-item job-item-subheader">{{ item.location }}</span>
                            <span class="job-item">Level: {{ item.level }}</span>
                            <span class="job-item">Employment: {{ item.employment }}</span>
                            <span class="job-item">Payment: {{ item.salary }}</span>
                            <span class="job-item job-item-tag-container" v-for="(value, key) in item.skills" > 
                                <span class="job-item-tag">{{ value }}</span>
                            </span>    
                        </div>
                    </router-link>
                </div>
            
        </div>
    </div>
    </transition>
</template>

<script>


export default {
    name: 'current-positions',
    data() {
        return {
            header: "Current Positions",
            positions: [],
            items: [
                {
                    position: "Frontend Developer",
                    level: "Junior",
                    location: "100% Remote",
                    payment: "10k-20k",
                    image: "F",
                    description: "Once you have overall knowledge in these you have to get your hands dirty by designing / developing sites till you get through knowledge of the core concepts. If you are attending an interview nowadays its mandatory to have a github profile and a website of your own which boosts the chance of success.",
                    skills: [
                        {skillName: "HTML"},
                        {skillName: "CSS"},
                        {skillName: "JavaScript"},
                        {skillName: "Sass"},
                        {skillName: "Vue.js"}
                    ],
                    employment: "Contract"
                },
                {
                    position: "Full-stack Developer",
                    level: "Mid",
                    location: "London, 50% Remote",
                    payment: "25k-40k",
                    image: "S",
                    description: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",
                    skills: [
                        {skillName: "HTML"},
                        {skillName: "CSS"},
                        {skillName: "JavaScript"},
                        {skillName: "Node.js"},
                        {skillName: "PHP"}
                    ],
                    employment: "Contract"
                },
                {
                    position: "Backend Developer",
                    level: "Senior",
                    location: "London, stationary",
                    payment: "40k-80k",
                    image: "B",
                    description: "Identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",
                    skills: [
                        {skillName: "C#"},
                        {skillName: "ASP.NET"},
                        {skillName: "Java"}
                    ],
                    employment: "Contract"
                },
                {
                    position: "Designer",
                    level: "Senior",
                    location: "London, 10% remote",
                    payment: "40k-80k",
                    image: "D",
                    description: "Hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",
                    skills: [
                        {skillName: "UI/UX"},
                        {skillName: "Photoshop"},
                        {skillName: "InVision"}
                    ],
                    employment: "B2B"
                },
                {
                    position: "Frontend Developer",
                    level: "Senior",
                    location: "100% remote",
                    payment: "40k-80k",
                    image: "F",
                    description: "Focusing on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",
                    skills: [
                        {skillName: "HTML"},
                        {skillName: "CSS"},
                        {skillName: "JavaScript"},
                        {skillName: "Sass"},
                        {skillName: "Angular"},
                        {skillName: "React"}
                    ],
                    employment: "B2B"
                }
            ]
        }
    },
    methods: {
        
    },
    created() {
        this.$http.get('https://vue-career-page.firebaseio.com/positions.json').then(function(data){
            return data.json();
        }).then(function(data){
            var positionArr = [];
            
            for(let key in data){
                data[key].id = key;
                positionArr.push(data[key]);
            }
            this.positions = positionArr;    
        });
        
    }
}
</script>

<style>
.positions-container {
  max-width: 100%;
  padding: 1.5em;
  box-sizing: border-box;
  background-color: #FF5D73;
}
.positions-header {
    font-size: 2em;
    font-family: 'Playfair Display', serif;
    font-weight: 900;
    text-transform: uppercase;
    color: #fff;
    border-bottom: 1px solid #fff;
    padding: 0 1.5em 0.5em 0;
    display: inline-block;
}
.positions-list {
    margin: 0 auto 0 0.5em;
    padding: 0;
    text-align: left;
    display: flex;
    justify-content: start;
    flex-wrap: wrap;   
}
.positions-list a {
    max-width: 100%;
    display: flex;
    text-decoration: none;
    color: #666;
}
.positions-list-item {
    width: 100%;
    margin: 0.5em 0;
    font-family: 'Roboto', sans-serif;
    font-size: 1em;
    color: #666;
    line-height: 1.3;
    list-style-type: none;
    box-shadow: 0 5px 15px -10px #333;
    background-color: #fff;
    box-sizing: border-box;
    display: flex;
    cursor: pointer;
}
.job-item-container {
    width: 90%;
    padding: 0.7em 1em 0.9em;
}
.job-icon-container {
    width: 150px;
    margin-left: -0.5em;
    align-self: center;
}
.job-icon {
    width: 150px;
    height: 150px;
    background: linear-gradient(to left, #615591 0%, #a69fc6 100%);
    display: block;
    font-family: 'Playfair Display', serif;
    font-weight: 900;
    color: #fff;
    font-size: 7em;
    text-align: center;
    line-height: 1.25;
    text-shadow: 0 3px 2px #666;
}
.job-item {
    display: block;
}
.job-item-header {
    font-weight: 900;
    text-transform: uppercase;
    color: #666;
    text-align: right;
}
.job-item-subheader {
    border-bottom: 1px solid #666;
    padding-bottom: 5px;
    text-align: right;
    margin-bottom: 0.5em;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 0.8em;
    color: #999;
}
.job-item-icon {
    width: 30px;
    height: auto;
}
.job-item-tag-container {
    display: none;
    margin: 0.6em 0.4em 0.1em 0;
}
.job-item-tag {
    height: 20px;
    padding: 5px 15px;
    background-color: #968DBC;
    border-radius: 20px;
    color: #fff;
    font-size: 0.85em;
    box-shadow: 0 1px 0px 0px rgba(255,255,255,0.6), 0 4px 5px -4px #333;
}

@media (min-width: 320px) and (max-width: 530px) {
    .positions-container {
        width: 100%;
        padding: 1.5em;
    }
    .positions-list-item {
        width: 100%;
        margin-left: -0.5em;
        flex-direction: column;
        margin-bottom: 2em;
        border-bottom: 5px solid #968DBC;
    }
    .positions-list a {
        width: 100%;
    }
    .job-icon-container {
        width: 100%;
        margin-left: initial;
    }
    .job-icon {
        width: 90%;
        height: 100px;
        margin: -0.17em auto 0;
        font-size: 4.5em;
        border-top: 2px solid #fff;
    }
    .job-item-container {
        width: initial;
    }
    
    .job-item-subheader {
        padding-bottom: 1em;
    }
}

@media (min-width: 768px) {
    .positions-container {
        width: 60%;
        padding: 2em;
    }
    .positions-header {
        font-size: 2.5em;
    }
    .positions-list-item {
        width: 100%;
    }
}

@media (min-width: 1024px) {
    .positions-container {
        width: 65%;
        padding: 3em;
    }
    .job-item-tag-container {
        display: inline-block;
    }
    .job-item-container {
        width: 550px;
    }
}

</style>