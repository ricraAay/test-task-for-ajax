(function(e){function t(t){for(var r,o,s=t[0],c=t[1],l=t[2],p=0,d=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},n={app:0},i=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"034f":function(e,t,a){"use strict";a("85ec")},"85ec":function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t),a.d(t,"db",(function(){return Te}));a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{staticClass:"align-center",attrs:{color:"grey lighten-5",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",[a("v-list-item",[a("v-img",{staticClass:"mt-8 ml-14 mb-5",attrs:{src:"/logo2.png","max-width":"100"}})],1),a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[e._v(" АЯКС РИЭЛТ ")]),a("v-list-item-subtitle",[e._v("Агенство недвижимости ")])],1)],1)],1),a("v-divider"),a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item-group",{attrs:{color:"red"},model:{value:e.selectedItem,callback:function(t){e.selectedItem=t},expression:"selectedItem"}},e._l(e.items,(function(t,r){return a("v-list-item",{key:r,attrs:{to:t.path}},[a("v-list-item-icon",[a("v-icon",{domProps:{textContent:e._s(t.icon)}})],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:e._s(t.text)}})],1)],1)})),1)],1)],1),a("v-app-bar",{attrs:{app:"",color:"red"}},[a("v-row",{staticClass:"align-center"},[a("v-app-bar-nav-icon",{attrs:{color:"white"},on:{click:function(t){e.drawer=!e.drawer}}}),a("v-text-field",{attrs:{autocomplete:"off",clearable:"",dense:"","hide-details":"","hide-selected":"","item-text":"name","item-value":"symbol",label:"Поиск...",solo:"",elevation:""},on:{"click:clear":e.clearFilter},model:{value:e.payload,callback:function(t){e.payload="string"===typeof t?t.trim():t},expression:"payload"}}),a("v-btn",{staticClass:"ml-4 mr-3",attrs:{elevation:"",color:"white"},on:{click:e.filtrationStore}},[e._v("Найти")])],1)],1),a("v-main",[a("v-container",{staticClass:"pl-10  pr-10"},[a("transition",{attrs:{name:"component-fade",mode:"out-in"}},[a("router-view")],1)],1)],1)],1)},i=[],o=a("d4ec"),s=a("bee2"),c=a("262e"),l=a("2caf"),u=a("9ab4"),p=a("1b40"),d=function(e){Object(c["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(o["a"])(this,a),e=t.apply(this,arguments),e.selectedItem=1,e.drawer=!0,e.payload="",e.items=[{text:"Новый менеджер",icon:"mdi-account",path:"/registration"},{text:"Список менеджеров",icon:"mdi-account-group",path:"/"}],e}return Object(s["a"])(a,[{key:"created",value:function(){this.$store.dispatch("loadingDepartments")}},{key:"reloadStateManagers",value:function(e){e||this.clearFilter()}},{key:"filtrationStore",value:function(){this.payload&&(this.$store.commit("filtrationManagersList",this.payload),this.$router.push({path:"/",query:{find:this.payload}}))}},{key:"clearFilter",value:function(){this.$store.dispatch("loadingManagers")}}]),a}(p["b"]);Object(u["c"])([Object(p["c"])("payload")],d.prototype,"reloadStateManagers",null),d=Object(u["c"])([p["a"]],d);var m=d,g=m,f=(a("034f"),a("2877")),v=a("6544"),b=a.n(v),h=a("7496"),y=a("40dc"),j=a("5bc1"),O=a("8336"),k=a("a523"),M=a("ce7e"),x=a("132d"),w=a("adda"),C=a("8860"),_=a("da13"),V=a("5d23"),$=a("1baa"),S=a("34c3"),D=a("f6c4"),I=a("f774"),E=a("0fd9"),L=a("8654"),T=Object(f["a"])(g,n,i,!1,null,null,null),R=T.exports;b()(T,{VApp:h["a"],VAppBar:y["a"],VAppBarNavIcon:j["a"],VBtn:O["a"],VContainer:k["a"],VDivider:M["a"],VIcon:x["a"],VImg:w["a"],VList:C["a"],VListItem:_["a"],VListItemContent:V["a"],VListItemGroup:$["a"],VListItemIcon:S["a"],VListItemSubtitle:V["b"],VListItemTitle:V["c"],VMain:D["a"],VNavigationDrawer:I["a"],VRow:E["a"],VTextField:L["a"]});var F=a("8c4f"),P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-managers"},[a("h2",{staticClass:"display-1 pb-10 pt-10"},[e._v("Список менеджеров")]),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.managers,"items-per-page":5},on:{"dblclick:row":e.routeTransition}})],1)},A=[],B=(a("96cf"),a("1da1")),N=function(e){Object(c["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(o["a"])(this,a),e=t.apply(this,arguments),e.headers=[{text:"Фамилия",value:"surname"},{text:"Имя",value:"name"},{text:"Подразделение",value:"department"},{text:"Дата регистрации",value:"registration"}],e}return Object(s["a"])(a,[{key:"created",value:function(){this.$store.dispatch("loadingManagers")}},{key:"routeTransition",value:function(){var e=Object(B["a"])(regeneratorRuntime.mark((function e(t,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$router.push("/manager/".concat(a.item.guid));case 1:case"end":return e.stop()}}),e,this)})));function t(t,a){return e.apply(this,arguments)}return t}()},{key:"managers",get:function(){return this.$store.getters.allManagers}}]),a}(p["b"]);N=Object(u["c"])([p["a"]],N);var q=N,z=q,J=a("8fea"),K=Object(f["a"])(z,P,A,!1,null,null,null),G=K.exports;b()(K,{VDataTable:J["a"]});var H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-col",{staticClass:"pt-0 pl-0",attrs:{cols:"6"}},[a("h2",{staticClass:"display-1 pb-10 pt-10"},[e._v("Редактирование учетной записи ")]),e.currentManager?a("v-form",{attrs:{autocomplete:"off"}},[a("v-text-field",{attrs:{label:"Имя",outlined:"",dense:"",color:"grey darken-1"},model:{value:e.currentManager.name,callback:function(t){e.$set(e.currentManager,"name",t)},expression:"currentManager.name"}}),a("v-text-field",{attrs:{label:"Фамилия",outlined:"",dense:"",color:"grey darken-1"},model:{value:e.currentManager.surname,callback:function(t){e.$set(e.currentManager,"surname",t)},expression:"currentManager.surname"}}),a("v-autocomplete",{staticClass:"pb-3",attrs:{items:e.departments,color:"grey darken-1",outlined:"",dense:"",label:"Подразделение"},model:{value:e.currentManager.department,callback:function(t){e.$set(e.currentManager,"department","string"===typeof t?t.trim():t)},expression:"currentManager.department"}}),a("v-text-field",{attrs:{type:"datetime-local",label:"Дата регистрации",outlined:"",dense:"",color:"grey darken-1"},model:{value:e.currentManager.registration,callback:function(t){e.$set(e.currentManager,"registration",t)},expression:"currentManager.registration"}}),a("v-btn",{attrs:{large:"",elevation:"",color:"secondary"},on:{click:e.updateManager}},[e._v(" Сохранить ")]),a("v-btn",{attrs:{large:"",elevation:"",plain:""},on:{click:function(t){e.dialog=!0}}},[e._v("Удалить")])],1):e._e(),a("v-dialog",{attrs:{persistent:"","max-width":"320"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[e._v(" Удаление ")]),a("v-card-text",[e._v("Вы действительно хотите удалить менеджера "+e._s(e.currentManager.surname+" "+e.currentManager.name)+" ?")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{plain:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Отмена ")]),a("v-btn",{attrs:{color:"red",text:""},on:{click:e.removeManager}},[e._v(" Удалить ")])],1)],1)],1)],1)},Q=[],U=(a("ac1f"),a("1276"),function(e){Object(c["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(o["a"])(this,a),e=t.apply(this,arguments),e.uid=e.$route.params.id||location.href.split("/").pop(),e.dialog=!1,e}return Object(s["a"])(a,[{key:"created",value:function(){this.$store.dispatch("getCurrentManager",this.uid)}},{key:"updateManager",value:function(){var e=this;this.$store.dispatch("updateCurrentManager",this.currentManager).then((function(){return e.$router.push("/")}))}},{key:"removeManager",value:function(){var e=this;this.$store.dispatch("removeManager",this.uid).then((function(){return e.$router.push("/")}))}},{key:"currentManager",get:function(){return this.$store.state.managers.currentManager}},{key:"departments",get:function(){return this.$store.getters.getDepartments}}]),a}(p["b"]));U=Object(u["c"])([p["a"]],U);var W=U,X=W,Y=a("c6a6"),Z=a("b0af"),ee=a("99d9"),te=a("62ad"),ae=a("169a"),re=a("4bd4"),ne=a("2fa4"),ie=Object(f["a"])(X,H,Q,!1,null,null,null),oe=ie.exports;b()(ie,{VAutocomplete:Y["a"],VBtn:O["a"],VCard:Z["a"],VCardActions:ee["a"],VCardText:ee["b"],VCardTitle:ee["c"],VCol:te["a"],VDialog:ae["a"],VForm:re["a"],VSpacer:ne["a"],VTextField:L["a"]});var se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-col",{staticClass:"pt-0 pl-0",attrs:{cols:"6"}},[a("h2",{staticClass:"display-1 pb-10 pt-10"},[e._v("Новый менеджер")]),a("v-form",{attrs:{autocomplete:"off"},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[a("v-text-field",{staticClass:"pb-3",attrs:{color:"grey darken-1",outlined:"",dense:"",label:"Имя"},model:{value:e.manager.name,callback:function(t){e.$set(e.manager,"name","string"===typeof t?t.trim():t)},expression:"manager.name"}}),a("v-text-field",{staticClass:"pb-3",attrs:{color:"grey darken-1",outlined:"",dense:"",label:"Фамилия"},model:{value:e.manager.surname,callback:function(t){e.$set(e.manager,"surname","string"===typeof t?t.trim():t)},expression:"manager.surname"}}),a("v-autocomplete",{staticClass:"pb-3",attrs:{items:e.departments,color:"grey darken-1",outlined:"",dense:"",label:"Подразделение"},model:{value:e.manager.department,callback:function(t){e.$set(e.manager,"department","string"===typeof t?t.trim():t)},expression:"manager.department"}}),a("v-text-field",{staticClass:"pb-3",attrs:{type:"datetime-local",color:"grey darken-1",outlined:"",dense:"",label:"Дата регистрации"},model:{value:e.manager.registration,callback:function(t){e.$set(e.manager,"registration","string"===typeof t?t.trim():t)},expression:"manager.registration"}}),a("v-btn",{attrs:{disabled:e.isDisabled,type:"submit",large:"",elevation:"",color:"secondary"}},[e._v("Добавить")])],1)],1)},ce=[],le=(a("b0c0"),a("11c1")),ue=function(e){Object(c["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(o["a"])(this,a),e=t.apply(this,arguments),e.manager={id:Date.now(),guid:Object(le["v4"])(),name:"",surname:"",registration:"",department:""},e}return Object(s["a"])(a,[{key:"submit",value:function(){var e=this;this.$store.dispatch("addManager",this.manager).then((function(){return e.$router.push("/")}))}},{key:"isDisabled",get:function(){return!(this.manager.name&&this.manager.surname&&this.manager.registration&&this.manager.department)}},{key:"departments",get:function(){return this.$store.getters.getDepartments}}]),a}(p["b"]);ue=Object(u["c"])([p["a"]],ue);var pe=ue,de=pe,me=Object(f["a"])(de,se,ce,!1,null,null,null),ge=me.exports;b()(me,{VAutocomplete:Y["a"],VBtn:O["a"],VCol:te["a"],VForm:re["a"],VTextField:L["a"]});var fe=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ve=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",{staticClass:"display-3"},[e._v(" Страница не найдена ")])])}],be=function(e){Object(c["a"])(a,e);var t=Object(l["a"])(a);function a(){return Object(o["a"])(this,a),t.apply(this,arguments)}return a}(p["b"]);be=Object(u["c"])([p["a"]],be);var he=be,ye=he,je=Object(f["a"])(ye,fe,ve,!1,null,null,null),Oe=je.exports;r["a"].use(F["a"]);var ke=[{path:"/",name:"Managers",component:G},{path:"/manager/:id",name:"EditingManager",component:oe},{path:"/registration",name:"CreatedManager",component:ge},{path:"/search",name:"SearchManager",component:G},{path:"*",name:"NotFound",component:Oe}],Me=new F["a"]({routes:ke}),xe=Me,we=a("2f62"),Ce=(a("4160"),a("caad"),a("13d5"),a("d3b7"),a("25f0"),a("2532"),a("159b"),a("6fc5")),_e=function(e){Object(c["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(o["a"])(this,a),e=t.apply(this,arguments),e.managers=[],e.currentManager=null,e}return Object(s["a"])(a,[{key:"updateStateManagers",value:function(e){this.managers=e}},{key:"updateStateCurrentManager",value:function(e){this.currentManager=e}},{key:"filtrationManagersList",value:function(e){this.managers=this.managers.reduce((function(t,a){var r=a.data();return[r.name,r.surname,r.department].includes(e)&&t.push(a),t}),[])}},{key:"loadingManagers",value:function(){var e=Object(B["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Te.collection("managers").get();case 2:return t=e.sent,a=[],t.forEach((function(e){return a.push(e)})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getCurrentManager",value:function(){var e=Object(B["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Te.collection("managers").doc(t).get();case 2:return a=e.sent,e.abrupt("return",a.data());case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"removeManager",value:function(e){Te.collection("managers").doc(e).delete().then((function(){return null}))}},{key:"addManager",value:function(e){Te.collection("managers").doc(e.guid.toString()).set(e)}},{key:"updateCurrentManager",value:function(e){Te.collection("managers").doc(e.guid).update(e)}},{key:"allManagers",get:function(){return this.managers.reduce((function(e,t){var a=t.data();return a.registration=new Date(a.registration).toLocaleString("ru"),e.push(a),e}),[])}}]),a}(Ce["d"]);Object(u["c"])([Ce["c"]],_e.prototype,"updateStateManagers",null),Object(u["c"])([Ce["c"]],_e.prototype,"updateStateCurrentManager",null),Object(u["c"])([Ce["c"]],_e.prototype,"filtrationManagersList",null),Object(u["c"])([Object(Ce["a"])({commit:"updateStateManagers",rawError:!0})],_e.prototype,"loadingManagers",null),Object(u["c"])([Object(Ce["a"])({commit:"updateStateCurrentManager",rawError:!0})],_e.prototype,"getCurrentManager",null),Object(u["c"])([Object(Ce["a"])({commit:"updateStateCurrentManager",rawError:!0})],_e.prototype,"removeManager",null),Object(u["c"])([Ce["a"]],_e.prototype,"addManager",null),Object(u["c"])([Ce["a"]],_e.prototype,"updateCurrentManager",null),_e=Object(u["c"])([Ce["b"]],_e);var Ve=_e,$e=(a("d81d"),function(e){Object(c["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(o["a"])(this,a),e=t.apply(this,arguments),e.departments=[],e}return Object(s["a"])(a,[{key:"updateStateDepartments",value:function(e){this.departments=e}},{key:"loadingDepartments",value:function(){var e=Object(B["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Te.collection("departments").get();case 2:return t=e.sent,a=[],t.forEach((function(e){a.push(e)})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getDepartments",get:function(){return this.departments.map((function(e){return e.data().name}))}}]),a}(Ce["d"]));Object(u["c"])([Ce["c"]],$e.prototype,"updateStateDepartments",null),Object(u["c"])([Object(Ce["a"])({commit:"updateStateDepartments",rawError:!0})],$e.prototype,"loadingDepartments",null),$e=Object(u["c"])([Ce["b"]],$e);var Se=$e;r["a"].use(we["a"]);var De=new we["a"].Store({state:{},mutations:{},actions:{},modules:{managers:Ve,departments:Se}}),Ie=a("f309");r["a"].use(Ie["a"]);var Ee=new Ie["a"]({}),Le=a("260b");a("e71f");Le["a"].initializeApp({apiKey:"AIzaSyCwpKNy4nH_iSsaiQqNDjfteRnEbF1nI14",authDomain:"list-of-managers.firebaseapp.com",databaseURL:"https://list-of-managers-default-rtdb.firebaseio.com",projectId:"list-of-managers",storageBucket:"list-of-managers.appspot.com",messagingSenderId:"977229985780",appId:"1:977229985780:web:b477da2c0c57033bdf6ba1"});var Te=Le["a"].firestore();r["a"].config.productionTip=!1,new r["a"]({router:xe,store:De,vuetify:Ee,render:function(e){return e(R)}}).$mount("#app")}});
//# sourceMappingURL=app.d1b268a0.js.map