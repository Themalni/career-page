webpackJsonp([1],{0:function(t,e){},"7WpO":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),a=i("Sazm"),n=i.n(a),o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("header",{staticClass:"header"},[i("router-link",{attrs:{to:"/"}},[i("div",{staticClass:"company-name"},[t._v("Double.")])]),t._v(" "),i("h1",{staticClass:"header-text"},[t._v(t._s(t.headerText))]),t._v(" "),i("h3",{staticClass:"header-text-description"},[t._v(t._s(t.headerTextDescription))]),t._v(" "),i("button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#positions-container",expression:"'#positions-container'"}],staticClass:"button button-main"},[t._v("Check jobs")])],1)])},staticRenderFns:[]};var r=i("VU/8")({name:"header-section",data:function(){return{headerText:"We are hiring",headerTextDescription:"Become a part of our awesome team."}}},o,!1,function(t){i("TbJB")},null,null).exports,l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"search-container"},[i("form",{staticClass:"search-form"},[i("div",{staticClass:"input-container"},[i("label",{attrs:{for:"position"}},[t._v("Position")]),t._v(" "),i("input",{attrs:{type:"text",id:"position",placeholder:"Enter position name"}})]),t._v(" "),i("div",{staticClass:"input-container"},[i("label",{attrs:{for:"level"}},[t._v("Level")]),t._v(" "),i("input",{attrs:{type:"text",id:"level",placeholder:"Enter level"}})]),t._v(" "),i("div",{staticClass:"input-container"},[i("label",{attrs:{for:"location"}},[t._v("Location")]),t._v(" "),i("input",{attrs:{type:"text",id:"location",placeholder:"Enter location"}})]),t._v(" "),i("input",{staticClass:"button button-main",attrs:{type:"submit",value:"Search"}})])])}]};var c=i("VU/8")({name:"search",data:function(){return{}}},l,!1,function(t){i("uk2D")},null,null).exports,u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"fade"}},[i("div",{staticClass:"positions-container",attrs:{id:"positions-container"}},[i("h1",{staticClass:"positions-header"},[t._v(t._s(t.header))]),t._v(" "),i("div",{staticClass:"positions-list"},t._l(t.positions,function(e){return i("div",{staticClass:"positions-list-item"},[i("router-link",{attrs:{to:"/position-view/"+e.id+"#offer-container",exact:""}},[i("div",{staticClass:"job-icon-container"},[i("span",{staticClass:"job-icon"},[t._v(t._s(e.icon))])]),t._v(" "),i("div",{staticClass:"job-item-container"},[i("span",{staticClass:"job-item job-item-header"},[t._v(t._s(e.position))]),t._v(" "),i("span",{staticClass:"job-item job-item-subheader"},[t._v(t._s(e.location))]),t._v(" "),i("span",{staticClass:"job-item"},[t._v("Level: "+t._s(e.level))]),t._v(" "),i("span",{staticClass:"job-item"},[t._v("Employment: "+t._s(e.employment))]),t._v(" "),i("span",{staticClass:"job-item"},[t._v("Payment: "+t._s(e.salary))]),t._v(" "),t._l(e.skills,function(e,s){return i("span",{staticClass:"job-item job-item-tag-container"},[i("span",{staticClass:"job-item-tag"},[t._v(t._s(e))])])})],2)])],1)}))])])},staticRenderFns:[]};var p=i("VU/8")({name:"current-positions",data:function(){return{header:"Current Positions",positions:[],items:[{position:"Frontend Developer",level:"Junior",location:"100% Remote",payment:"10k-20k",image:"F",description:"Once you have overall knowledge in these you have to get your hands dirty by designing / developing sites till you get through knowledge of the core concepts. If you are attending an interview nowadays its mandatory to have a github profile and a website of your own which boosts the chance of success.",skills:[{skillName:"HTML"},{skillName:"CSS"},{skillName:"JavaScript"},{skillName:"Sass"},{skillName:"Vue.js"}],employment:"Contract"},{position:"Full-stack Developer",level:"Mid",location:"London, 50% Remote",payment:"25k-40k",image:"S",description:"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",skills:[{skillName:"HTML"},{skillName:"CSS"},{skillName:"JavaScript"},{skillName:"Node.js"},{skillName:"PHP"}],employment:"Contract"},{position:"Backend Developer",level:"Senior",location:"London, stationary",payment:"40k-80k",image:"B",description:"Identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",skills:[{skillName:"C#"},{skillName:"ASP.NET"},{skillName:"Java"}],employment:"Contract"},{position:"Designer",level:"Senior",location:"London, 10% remote",payment:"40k-80k",image:"D",description:"Hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",skills:[{skillName:"UI/UX"},{skillName:"Photoshop"},{skillName:"InVision"}],employment:"B2B"},{position:"Frontend Developer",level:"Senior",location:"100% remote",payment:"40k-80k",image:"F",description:"Focusing on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",skills:[{skillName:"HTML"},{skillName:"CSS"},{skillName:"JavaScript"},{skillName:"Sass"},{skillName:"Angular"},{skillName:"React"}],employment:"B2B"}]}},methods:{},created:function(){this.$http.get("https://vue-career-page.firebaseio.com/positions.json").then(function(t){return t.json()}).then(function(t){var e=[];for(var i in t)t[i].id=i,e.push(t[i]);this.positions=e})}},u,!1,function(t){i("PGlW")},null,null).exports,v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about-container"},[i("h1",{staticClass:"about-header"},[t._v(t._s(t.headerText))]),t._v(" "),i("p",{staticClass:"about-description"},[t._v("Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative      approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.")]),t._v(" "),i("p",{staticClass:"about-description"},[t._v("Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.")]),t._v(" "),i("h3",{staticClass:"about-subheader"},[t._v(t._s(t.subheaderText))]),t._v(" "),i("ul",t._l(t.benefits,function(e){return i("li",{key:e.id,staticClass:"benefits"},[t._v(t._s(e.text))])}))])},staticRenderFns:[]};var d=i("VU/8")({name:"about-company",data:function(){return{headerText:"About Us",subheaderText:"What we offer",benefits:[{text:"Etiam aenean cras laoreet integer sed. Scelerisque lacinia cursus arcu proin suspendisse."},{text:"Itaque sensibus rationem adiunxit et ratione effecta sensus non reliquit. "},{text:"Atque haec ita iustitiae propria sunt, ut sint virtutum reliquarum communia. Perturbationes autem nulla naturae vi commoventur, omniaque ea sunt opiniones ac iudicia levitatis."},{text:"Num igitur dubium est, quin, si in re ipsa nihil peccatur."},{text:"Sed emolumenta communia esse dicuntur, recte autem facta et peccata non habentur communia."},{text:"Profectus in exilium Tubulus statim nec respondere ausus."}]}}},v,!1,function(t){i("7WpO")},null,null).exports,m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"slide-fade"}},[i("div",{staticClass:"offer-container",attrs:{id:"offer-container"}},[i("router-link",{attrs:{to:"/current-positions#positions-container"}},[i("button",{staticClass:"button button-secondary button-secondary-left"},[i("span",{staticClass:"lnr lnr-arrow-left"})])]),t._v(" "),i("h1",{staticClass:"offer-title"},[t._v(t._s(t.positionInfo.position))]),t._v(" "),i("div",{staticClass:"offer-details-container"},[i("span",{staticClass:"offer-details"},[i("strong",[t._v("Level: ")]),t._v(t._s(t.positionInfo.level))]),t._v(" "),i("span",{staticClass:"offer-details"},[i("strong",[t._v("Location: ")]),t._v(t._s(t.positionInfo.location))]),t._v(" "),i("span",{staticClass:"offer-details"},[i("strong",[t._v("Experience: ")]),t._v(t._s(t.positionInfo.experience))]),t._v(" "),i("span",{staticClass:"offer-details"},[i("strong",[t._v("Job type: ")]),t._v(t._s(t.positionInfo.type))]),t._v(" "),i("span",{staticClass:"offer-details"},[i("strong",[t._v("Employment: ")]),t._v(t._s(t.positionInfo.employment))]),t._v(" "),i("span",{staticClass:"offer-details"},[i("strong",[t._v("Salary: ")]),t._v(t._s(t.positionInfo.salary))])]),t._v(" "),i("h3",{staticClass:"skills-title"},[t._v("Must have")]),t._v(" "),i("div",{staticClass:"skills-container"},t._l(t.positionInfo.skills,function(e,s){return i("div",[i("div",{staticClass:"skill"},[i("span",{staticClass:"skill-text-top"},[t._v(t._s(e))])])])})),t._v(" "),i("div",{staticClass:"description-container"},[i("h3",{staticClass:"description-title"},[t._v("Description")]),t._v(" "),i("p",{staticClass:"description-text"},[t._v(t._s(t.positionInfo.description))]),t._v(" "),i("h3",{staticClass:"description-title"},[t._v("What you'll be doing")]),t._v(" "),i("ul",t._l(t.positionInfo.responsibilities,function(e,s){return i("li",{staticClass:"responsibilities"},[t._v(t._s(e))])})),t._v(" "),i("h3",{staticClass:"description-title"},[t._v("Job requirements")]),t._v(" "),i("ul",t._l(t.positionInfo.requirements,function(e,s){return i("li",{staticClass:"requirements"},[t._v(t._s(e))])})),t._v(" "),i("h3",{staticClass:"description-title"},[t._v("Nice to have")]),t._v(" "),i("ul",t._l(t.positionInfo.additionals,function(e,s){return i("li",{staticClass:"additionals"},[t._v(t._s(e))])})),t._v(" "),i("p",{staticClass:"description-text"},[t._v("Interested in this position? Send us your CV on e-mail: "),i("span",{staticClass:"description-email"},[t._v("job@double.com")])])])],1)])},staticRenderFns:[]};var h=i("VU/8")({name:"position-view",data:function(){return{id:this.$route.params.id,positionInfo:{}}},created:function(){this.$http.get("https://vue-career-page.firebaseio.com/positions/"+this.id+".json").then(function(t){return t.json()}).then(function(t){this.positionInfo=t})}},m,!1,function(t){i("zcGa")},null,null).exports,f={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer-container"},[e("footer",{staticClass:"footer"},[e("div",{staticClass:"company-name"},[this._v("Double.")]),this._v(" "),e("div",{staticClass:"footer-social"},[e("span",{staticClass:"fa fa-twitter-square fa-lg"}),this._v(" "),e("span",{staticClass:"fa fa-facebook-square fa-lg"}),this._v(" "),e("span",{staticClass:"fa fa-youtube-square fa-lg"}),this._v(" "),e("span",{staticClass:"fa fa-linkedin-square fa-lg"})]),this._v(" "),e("h3",{staticClass:"footer-text"},[this._v("© Copyright Double 2018")])])])}]};var _=i("VU/8")({name:"footer-section",data:function(){return{}}},f,!1,function(t){i("qr1l")},null,null).exports,g={name:"App",firebase:{positions:n.a.initializeApp({apiKey:"AIzaSyC66Tq4YpHU-zSwgGgU508IGXa8NTjBifI",authDomain:"vue-career-page.firebaseapp.com",databaseURL:"https://vue-career-page.firebaseio.com",projectId:"vue-career-page",storageBucket:"vue-career-page.appspot.com",messagingSenderId:"49331372894"}).database().ref("positions"),asObject:!0},components:{HeaderSection:r,search:c,CurrentPositions:p,AboutCompany:d,PositionView:h,FooterSection:_},data:function(){return{}}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("header-section"),this._v(" "),e("main",{staticClass:"main",attrs:{id:"main"}},[e("about-company"),this._v(" "),e("router-view")],1),this._v(" "),e("footer-section")],1)},staticRenderFns:[]};var C=i("VU/8")(g,b,!1,function(t){i("S/nt")},null,null).exports,y=i("8+8L"),k=i("/ocq"),w=i("bm7V"),x=i.n(w),N=[{path:"/",component:p},{path:"/position-view/:id",component:h},{path:"/current-positions",component:p}];s.a.use(y.a),s.a.use(k.a),s.a.use(x.a);var S=new k.a({routes:N,mode:"history",scrollBehavior:function(t,e,i){if(t.hash)return{selector:t.hash}}});s.a.config.productionTip=!1,new s.a({el:"#app",components:{App:C},template:"<App/>",router:S})},PGlW:function(t,e){},"S/nt":function(t,e){},TbJB:function(t,e){},qr1l:function(t,e){},uk2D:function(t,e){},zcGa:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a2032a49ea558950b67a.js.map