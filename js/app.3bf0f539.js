(function(e){function t(t){for(var c,s,a=t[0],i=t[1],l=t[2],d=0,b=[];d<a.length;d++)s=a[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&b.push(o[s][0]),o[s]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);u&&u(t);while(b.length)b.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(c=!1)}c&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var c={},o={app:0},r=[];function s(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=c,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)s.d(n,c,function(t){return e[t]}.bind(null,c));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=i;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1b37":function(e,t,n){},"1d52":function(e,t,n){},"1e69":function(e,t,n){"use strict";n("1b37")},"4b4e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),o=(n("15f5"),n("7051"),n("ad3d")),r=n("ecee"),s=n("c074"),a=n("6c02"),i=(n("b0c0"),function(e){return Object(c["w"])("data-v-2db0abcc"),e=e(),Object(c["u"])(),e}),l=i((function(){return Object(c["f"])("h1",{class:"title"},"Plane deine Module",-1)})),u=Object(c["h"])(" Letztes erfolgreich abgeschlossenes Semester "),d={class:"columns"},b={class:"column add-semester"},f={class:"columns"},m={class:"column"},O=i((function(){return Object(c["f"])("h2",{class:"subtitle"},"Overview ECTS",-1)})),j={style:{"vertical-align":"bottom","padding-right":"1em","text-align":"end"}},p={style:{"padding-top":"8px"}},h=i((function(){return Object(c["f"])("tr",null,[Object(c["f"])("td",{class:"p-2"},"Total: TODO")],-1)})),g={class:"column"},v=i((function(){return Object(c["f"])("h2",{class:"subtitle"},"Course focus",-1)})),_={class:"columns is-multiline"};function y(e,t,n,o,r,s){var a=Object(c["A"])("Semester"),i=Object(c["A"])("BeautifulProgressIndicator"),y=Object(c["A"])("Focus");return Object(c["t"])(),Object(c["e"])(c["a"],null,[l,Object(c["f"])("label",null,[u,Object(c["J"])(Object(c["f"])("select",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.lastSemesterNumber=e})},[(Object(c["t"])(!0),Object(c["e"])(c["a"],null,Object(c["z"])(r.semesters,(function(e){return Object(c["t"])(),Object(c["e"])("option",{key:e.number},Object(c["C"])(e.number),1)})),128))],512),[[c["E"],r.lastSemesterNumber]])]),Object(c["f"])("div",d,[(Object(c["t"])(!0),Object(c["e"])(c["a"],null,Object(c["z"])(r.semesters,(function(e){return Object(c["t"])(),Object(c["e"])("div",{class:"column semester",key:e.name},[Object(c["i"])(a,{number:e.number,modules:e.modules,"onUpdate:modules":function(t){return e.modules=t},"all-modules":r.modules},null,8,["number","modules","onUpdate:modules","all-modules"])])})),128)),Object(c["f"])("div",b,[Object(c["f"])("button",{class:"p-2 add-semester-btn has-text-weight-bold",onClick:t[1]||(t[1]=function(){return s.addSemester&&s.addSemester.apply(s,arguments)})},"+")])]),Object(c["f"])("div",f,[Object(c["f"])("div",m,[Object(c["f"])("article",null,[O,Object(c["f"])("table",null,[Object(c["f"])("tbody",null,[(Object(c["t"])(!0),Object(c["e"])(c["a"],null,Object(c["z"])(s.mappedCategories,(function(e){return Object(c["t"])(),Object(c["e"])("tr",{key:e.name,class:Object(c["o"])(e.categoryClass)},[Object(c["f"])("td",j,Object(c["C"])(e.name),1),Object(c["f"])("td",p,[Object(c["i"])(i,{required:e.required_ects,earned:e.earnedCredits,planned:e.plannedCredits,color:e.color},null,8,["required","earned","planned","color"])])],2)})),128)),h])])])]),Object(c["f"])("div",g,[Object(c["f"])("article",null,[v,Object(c["f"])("div",_,[(Object(c["t"])(!0),Object(c["e"])(c["a"],null,Object(c["z"])(s.mappedFocuses,(function(e){return Object(c["t"])(),Object(c["e"])("div",{key:e.name,class:"column is-full"},[Object(c["i"])(y,{name:e.name,allModules:e.modules,filteredModules:e.filteredModules},null,8,["name","allModules","filteredModules"])])})),128))])])])])],64)}var M=n("5530"),C=(n("d81d"),n("d3b7"),n("25f0"),n("5db7"),n("73d9"),n("4de4"),n("caad"),n("2532"),n("2ca0"),n("ac1f"),n("1276"),n("fb6a"),n("7db0"),n("a15b"),n("a434"),function(e){return Object(c["w"])("data-v-e795cef6"),e=e(),Object(c["u"])(),e}),S={class:"columns is-flex is-flex-direction-column has-text-centered"},A=["onClick"],P=C((function(){return Object(c["f"])("i",{class:"remove-module fab fa fa-times"},null,-1)})),I=[P],E=C((function(){return Object(c["f"])("label",{for:"additionalModule"},"Select additional module",-1)})),w={id:"allModules"},k=["value"],F={class:"column"};function x(e,t,n,o,r,s){return Object(c["t"])(),Object(c["e"])("div",S,[Object(c["f"])("h2",null,"Semester "+Object(c["C"])(n.number),1),(Object(c["t"])(!0),Object(c["e"])(c["a"],null,Object(c["z"])(n.modules,(function(e){return Object(c["t"])(),Object(c["e"])("div",{class:Object(c["o"])(["column module mt-1",e.moduleClass]),key:e.name},[Object(c["f"])("button",{class:"is-pulled-right",onClick:function(t){return s.removeModule(e.name)}},I,8,A),Object(c["f"])("h3",null,Object(c["C"])(e.name),1),Object(c["f"])("p",null,Object(c["C"])(e.ects)+" ECTS",1)],2)})),128)),Object(c["f"])("div",{class:Object(c["o"])(["column",{"is-hidden":r.isAddingNewModule}])},[Object(c["f"])("button",{class:"p-2 button-add",onClick:t[0]||(t[0]=function(e){return r.isAddingNewModule=!0})},"Add")],2),Object(c["f"])("div",{class:Object(c["o"])(["column",{"is-hidden":!r.isAddingNewModule}])},[E,Object(c["J"])(Object(c["f"])("input",{id:"additionalModule",type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.additionalModule=e}),list:"allModules",onChange:t[2]||(t[2]=function(){return s.addModule&&s.addModule.apply(s,arguments)})},null,544),[[c["F"],r.additionalModule]]),Object(c["f"])("datalist",w,[(Object(c["t"])(!0),Object(c["e"])(c["a"],null,Object(c["z"])(n.allModules,(function(e){return Object(c["t"])(),Object(c["e"])("option",{key:e.name,value:e.name},Object(c["C"])(e.name),9,k)})),128))])],2),Object(c["f"])("div",F,[Object(c["f"])("p",null,"Total ECTS: "+Object(c["C"])(s.getTotalEcts),1)])])}n("a9e3"),n("99af"),n("159b");var B={"Aufbau (I_Auf)":"category-1","Engineering Practice (I_EP)":"category-2","Gesellschaft, Wirtschaft und Recht (I-gwr)":"category-3","Informatik (I_Inf)":"category-4","Kommunikation und Englisch (I_KomEng)":"category-5","Mathematik und Physik (Kat_MaPh)":"category-6","Rahmenausbildung (Kat_RA)":"category-7","Studien- Bachelorarbeit (I_SaBa)":"category-8"},N={name:"Semester",props:{number:{type:Number},modules:{type:Array},allModules:{type:Array}},computed:{getTotalEcts:function(){return this.countTotalEcts()}},data:function(){return{additionalModule:null,isAddingNewModule:!1}},methods:{countTotalEcts:function(){return this.modules.reduce((function(e,t){return e+t.ects}),0)},addModule:function(){var e=this.$parent.getPlannedSemesterForModule(this.additionalModule);e?console.warn("Module ".concat(this.additionalModule," is already in semester ").concat(e)):(this.$parent.addModule(this.number,this.additionalModule),this.additionalModule=null,this.isAddingNewModule=!1)},removeModule:function(e){var t=this.modules.filter((function(t){return t.name===e})),n=this.modules.indexOf(t[0]);this.$parent.removeModule(this.number,n)},selectModuleClass:function(){this.modules.forEach((function(e){var t,n=null!==(t=e.categories[0])&&void 0!==t?t:"";e.moduleClass=n?B[n]:""}))}},mounted:function(){this.selectModuleClass()}},T=(n("d2a0"),n("6b0d")),D=n.n(T);const z=D()(N,[["render",x],["__scopeId","data-v-e795cef6"]]);var U=z,W={class:"columns is-multiline"},q=["aria-expanded","aria-controls"],K={class:"left-block"},J={key:0,class:"tag is-info is-light"},G={key:1,class:"tag is-success is-light"},R={class:"icon"},Y=["id"],H={class:"box box-focus"},$={key:0},L={key:1},V={class:"focus-missing-modules-list"};function Q(e,t,n,o,r,s){var a=Object(c["A"])("font-awesome-icon");return Object(c["t"])(),Object(c["e"])("div",W,[Object(c["f"])("button",{onClick:t[0]||(t[0]=function(e){return s.toggleFocus()}),class:Object(c["o"])(["button is-fullwidth button-focus",{"is-success is-outlined":!n.filteredModules.length}]),"aria-expanded":r.isOpen,"aria-controls":"collapse".concat(e._uid)},[Object(c["f"])("span",null,Object(c["C"])(n.name),1),Object(c["f"])("div",K,[n.filteredModules.length?(Object(c["t"])(),Object(c["e"])("span",J," You still need "+Object(c["C"])(n.filteredModules.length)+" modules ",1)):Object(c["d"])("",!0),n.filteredModules.length?Object(c["d"])("",!0):(Object(c["t"])(),Object(c["e"])("span",G," Congrats, You will earn it! ")),Object(c["f"])("span",R,[Object(c["i"])(a,{icon:r.isOpen?r.openIconClass:r.closedIconClass},null,8,["icon"])])])],10,q),Object(c["J"])(Object(c["f"])("div",{id:"collapse".concat(e._uid),class:"column is-full column-focus"},[Object(c["f"])("div",H,[n.filteredModules.length?Object(c["d"])("",!0):(Object(c["t"])(),Object(c["e"])("p",$," Congratulation! You meet all requirements to get this focus! ")),n.filteredModules.length?(Object(c["t"])(),Object(c["e"])("p",L," Some modules are missing. You still need following to gain the focus: ")):Object(c["d"])("",!0),Object(c["f"])("ul",V,[(Object(c["t"])(!0),Object(c["e"])(c["a"],null,Object(c["z"])(n.filteredModules,(function(e){return Object(c["t"])(),Object(c["e"])("li",{key:e},Object(c["C"])(e),1)})),128))])])],8,Y),[[c["G"],r.isOpen]])])}var X={name:"Focus",props:{name:{type:String},allModules:{type:Array},filteredModules:{type:Array}},data:function(){return{isOpen:!1,openIconClass:"chevron-up",closedIconClass:"chevron-down"}},methods:{toggleFocus:function(){this.isOpen=!this.isOpen}}};n("8f59");const Z=D()(X,[["render",Q],["__scopeId","data-v-6889859c"]]);var ee=Z,te={class:"container"},ne={class:"ratio-label"},ce={key:0,class:"planned-label"},oe={class:"progress-container"};function re(e,t,n,o,r,s){return Object(c["t"])(),Object(c["e"])("div",te,[Object(c["f"])("p",ne,Object(c["C"])(n.earned)+" / "+Object(c["C"])(n.required),1),n.planned>0?(Object(c["t"])(),Object(c["e"])("p",ce,Object(c["C"])(n.planned)+" geplant",1)):Object(c["d"])("",!0),Object(c["f"])("div",oe,[Object(c["f"])("div",{class:"planned-progress",style:Object(c["p"])({width:s.plannedProgress})},null,4),Object(c["f"])("div",{class:"earned-progress",style:Object(c["p"])({width:s.earnedProgress,"background-color":n.color})},null,4)])])}var se={name:"BeautifulProgressIndicator",props:{required:{type:Number},earned:{type:Number},planned:{type:Number},color:{type:String}},computed:{earnedProgress:function(){return"".concat(Math.min(100,100*this.earned/this.required),"%")},plannedProgress:function(){return"".concat(Math.min(100,100*(this.planned+this.earned)/this.required),"%")}}};n("6da4");const ae=D()(se,[["render",re],["__scopeId","data-v-02457205"]]);var ie=ae,le="https://raw.githubusercontent.com/jeremystucki/ost-planer/1.0/data",ue="/modules.json",de="/categories.json",be="/focuses.json",fe={name:"Home",data:function(){return{semesters:[],modules:[],categories:[],focuses:[],lastSemesterNumber:0}},computed:{mappedCategories:function(){var e=this;return this.categories.map((function(t){return Object(M["a"])({earnedCredits:e.getEarnedCredits(t),plannedCredits:e.getPlannedCredits(t),color:"#".concat(((1<<24)*Math.random()|0).toString(16))},t)}))},plannedModules:function(){return this.semesters.flatMap((function(e){return e.modules}))},mappedFocuses:function(){var e=this.plannedModules.map((function(e){return e.name}));return this.focuses.map((function(t){return Object(M["a"])(Object(M["a"])({},t),{},{filteredModules:t.modules.filter((function(t){return!e.includes(t)}))})}))},totalPlannedEcts:function(){return this.getTotalEcts(!0)},totalEarnedEcts:function(){return this.getTotalEcts()}},components:{Semester:U,Focus:ee,BeautifulProgressIndicator:ie},methods:{loadModules:function(){var e=this;fetch("".concat(le).concat(ue)).then((function(t){t.ok&&t.json().then((function(t){e.modules=t,e.restorePlanFromUrl(),e.loadCategories(),e.loadFocuses()}))}))},loadCategories:function(){var e=this;fetch("".concat(le).concat(de)).then((function(t){t.ok&&t.json().then((function(t){e.categories=t}))}))},loadFocuses:function(){var e=this;fetch("".concat(le).concat(be)).then((function(t){t.ok&&t.json().then((function(t){e.focuses=t}))}))},restorePlanFromUrl:function(){var e=this,t=window.location.hash;t.startsWith("#/plan/")&&(this.semesters=t.slice(7).split("-").map((function(t,n){return{number:n+1,modules:t.split("_").map((function(t){var n=e.modules.find((function(e){return e.id===t}));return null==n&&console.warn("Module with id: ".concat(t," could not be restored")),n})).filter((function(e){return null!=e}))}})))},updateUrlFragment:function(){window.location.hash="plan/".concat(this.semesters.map((function(e){return e.modules.map((function(e){return e.id})).join("_")})).join("-"))},getPlannedSemesterForModule:function(e){var t;return null===(t=this.semesters.find((function(t){return t.modules.some((function(t){return t.name===e}))})))||void 0===t?void 0:t.number},getEarnedCredits:function(e){var t=this;return this.semesters.filter((function(e){return e.number<=t.lastSemesterNumber})).flatMap((function(e){return e.modules})).filter((function(t){return t.categories.includes(e.name)})).reduce((function(e,t){return e+t.ects}),0)},getPlannedCredits:function(e){var t=this;return this.semesters.filter((function(e){return e.number>t.lastSemesterNumber})).flatMap((function(e){return e.modules})).filter((function(t){return t.categories.includes(e.name)})).reduce((function(e,t){return e+t.ects}),0)},getTotalEcts:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.semesters.filter((function(n){return n.number<=e.lastSemesterNumber||t})).flatMap((function(e){return e.modules})).reduce((function(e,t){return e+t.ects}),0)},addModule:function(e,t){var n=this.modules.find((function(e){return e.name===t}));this.semesters[e-1].modules.push(n),this.updateUrlFragment()},removeModule:function(e,t){this.semesters[e-1].modules.splice(t,1),this.updateUrlFragment()},addSemester:function(){this.semesters.push({number:this.semesters.length+1,modules:[]})}},mounted:function(){this.loadModules(),window.addEventListener("hashchange",this.restorePlanFromUrl)}};n("1e69");const me=D()(fe,[["render",y],["__scopeId","data-v-2db0abcc"]]);var Oe=me,je=[{path:"/:catchAll(.*)",name:"Home",component:Oe}],pe=Object(a["a"])({history:Object(a["b"])(),routes:je}),he=pe,ge={class:"p-5 custom-container"};function ve(e,t,n,o,r,s){var a=Object(c["A"])("Navigation"),i=Object(c["A"])("router-view"),l=Object(c["A"])("Footer");return Object(c["t"])(),Object(c["e"])(c["a"],null,[Object(c["i"])(a),Object(c["f"])("div",ge,[Object(c["i"])(i)]),Object(c["i"])(l)],64)}var _e=n("cf05"),ye=n.n(_e),Me={class:"navbar is-fixed-top",role:"navigation","aria-label":"main navigation"},Ce={class:"navbar-brand"},Se=Object(c["f"])("img",{src:ye.a,class:"logo-nav"},null,-1),Ae=Object(c["f"])("span",{"aria-hidden":"true"},null,-1),Pe=Object(c["f"])("span",{"aria-hidden":"true"},null,-1),Ie=Object(c["f"])("span",{"aria-hidden":"true"},null,-1),Ee=[Ae,Pe,Ie],we=Object(c["f"])("div",{class:"navbar-start"},[Object(c["f"])("a",{class:"navbar-item",href:"#/plan/An1I_OOP1_AutPy_CN1_DMI_RheKI-An2I_OOP2_DigCod_CySec_AutoSpr_FunProg-WE1_AlgDat_Bsys1_AIFo_Dbs1_EnglScience-ParProg_SecSoW_Bsys2_AIAp_DatEng_KommIng2-CoBau_MsTe_CPl_SEP1_ExEv-CPlA_DSy_SEP2_SEProj_DigBusI-PF_AppArch_SAI21_WI2-CldSol_BAI14_PhAI"}," Teilzeit Software Engineering "),Object(c["f"])("a",{class:"navbar-item",href:"#/plan/An1I_OOP1_AutPy_CN1_DMI_RheKI-An2I_OOP2_DigCod_CySec_AutoSpr_FunProg-WE1_AlgDat_Bsys1_AIFo_Dbs1_EnglScience-WE2_SecSoW_Bsys2_AIAp_DatEng_KommIng2-PmQm_WE3_MsTe_MGE_SEP1_ExEv-HCD_DSy_SEP2_SEProj_DigBusI-ComGra_AppArch_SAI21_WI2-CldSol_BAI14_PhAI"}," Teilzeit Frontend Engineering ")],-1),ke=[we];function Fe(e,t,n,o,r,s){var a=Object(c["A"])("router-link");return Object(c["t"])(),Object(c["e"])("nav",Me,[Object(c["f"])("div",Ce,[Object(c["i"])(a,{class:"navbar-item",to:"/"},{default:Object(c["I"])((function(){return[Se]})),_:1}),Object(c["f"])("a",{onClick:t[0]||(t[0]=function(){return s.onBurgerClick&&s.onBurgerClick.apply(s,arguments)}),class:Object(c["o"])([{"is-active":r.isBurgerActive},"navbar-burger"]),role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},Ee,2)]),Object(c["f"])("div",{class:Object(c["o"])(["navbar-menu",{"is-active":r.isBurgerActive}])},ke,2)])}var xe={name:"Navigation",data:function(){return{isBurgerActive:!1}},methods:{onBurgerClick:function(){this.isBurgerActive=!this.isBurgerActive}}};const Be=D()(xe,[["render",Fe]]);var Ne=Be,Te={class:"section rab-footer"},De=Object(c["g"])('<div class="pt-5 divider" data-v-2551b617></div><div class="container" data-v-2551b617><div class="is-flex-tablet is-justify-content-between is-align-items-center" data-v-2551b617><p data-v-2551b617>© 2022 Jeremy Stucki, Gregor Stuber</p><div class="py-2 is-hidden-tablet" data-v-2551b617></div><div class="ml-auto" data-v-2551b617><a class="mr-4 is-inline-block" href="https://github.com/unkelhoebbi/semester-scheduler" data-v-2551b617><i class="fab fa-github fa-2x social" data-v-2551b617></i></a></div></div></div>',2),ze=[De];function Ue(e,t,n,o,r,s){return Object(c["t"])(),Object(c["e"])("footer",Te,ze)}var We={name:"Footer"};n("e9a9");const qe=D()(We,[["render",Ue],["__scopeId","data-v-2551b617"]]);var Ke=qe,Je={components:{Footer:Ke,Navigation:Ne}};const Ge=D()(Je,[["render",ve]]);var Re=Ge;r["c"].add(s["b"]),r["c"].add(s["a"]),n("b383"),Object(c["c"])(Re).use(he).component("font-awesome-icon",o["a"]).mount("#app")},"5d37":function(e,t,n){},"5d5a":function(e,t,n){},"6da4":function(e,t,n){"use strict";n("5d37")},"8f59":function(e,t,n){"use strict";n("5d5a")},b383:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.192707d0.png"},d2a0:function(e,t,n){"use strict";n("1d52")},e9a9:function(e,t,n){"use strict";n("4b4e")}});
//# sourceMappingURL=app.3bf0f539.js.map