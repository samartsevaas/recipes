(function(e){function t(t){for(var n,i,o=t[0],c=t[1],l=t[2],u=0,f=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},s={app:0},r=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"223b":function(e,t,a){e.exports=a.p+"img/slide5.20998707.png"},"2def":function(e,t,a){e.exports=a.p+"img/slide3.40f761c0.png"},"2fb4":function(e,t,a){},4013:function(e,t,a){e.exports=a.p+"img/тыква.d1d12f21.webp"},"40cc":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("router-view")},r=[],i=a("2877"),o={},c=Object(i["a"])(o,s,r,!1,null,null,null),l=c.exports,d=a("8c4f"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"layout"},[a("the-sidebar"),a("div",{staticClass:"content"},[a("the-header"),a("div",{staticClass:"main main-content"},[a("router-view")],1),a("the-footer")],1)],1)},f=[],p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"header wrapper"},[a("div",{staticClass:"header__search"},[a("base-search",{staticClass:"header__search-input",attrs:{placeholder:"Найти рецепт..."}})],1),a("div",{staticClass:"header__panel"},[a("div",{staticClass:"header__panel-bell"},[a("div",{staticClass:"notification"},[a("font-awesome-icon",{attrs:{size:"lg",icon:["fas","bell"]}}),a("span",{staticClass:"badge"},[e._v("2")])],1)]),e._m(0),e._m(1)])])},m=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header__user"},[a("img",{attrs:{src:"https://developeravocados.net/img/avatar-icon.png",alt:"userpic"}}),a("div",{staticClass:"header__user-status"},[e._v("Пользователь")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header__user-setting"},[a("div",{staticClass:"uncle"})])}],v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"base-search"},[a("font-awesome-icon",{attrs:{icon:["fas","search"]}}),a("input",{staticClass:"base-search__input",attrs:{placeholder:e.placeholder}})],1)},b=[],h={name:"BaseSearch",props:{placeholder:{type:String}}},g=h,A=(a("b968"),Object(i["a"])(g,v,b,!1,null,null,null)),C=A.exports,_={name:"TheHeader",components:{BaseSearch:C}},O=_,Q=(a("dc0d"),Object(i["a"])(O,p,m,!1,null,"0a3bada5",null)),x=Q.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div")},z=[],E={name:"TheFooter"},j=E,w=Object(i["a"])(j,y,z,!1,null,"2e653cde",null),M=w.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"sidebar"},[e._m(0),a("ul",{staticClass:"sidebar__links"},[a("li",{staticClass:"sidebar__links-point"},[a("router-link",{attrs:{to:"/recipes"}},[a("font-awesome-icon",{attrs:{icon:["fas","apple-alt"]}}),e._v("Главная")],1)],1),a("li",{staticClass:"sidebar__links-point"},[a("router-link",{attrs:{to:"/categories"}},[a("font-awesome-icon",{attrs:{icon:["fas","carrot"]}}),e._v("Категории")],1)],1),a("li",{staticClass:"sidebar__links-point"},[a("router-link",{attrs:{to:"/favorites"}},[a("font-awesome-icon",{attrs:{icon:["fas","lemon"]}}),e._v("Любимые рецепты")],1)],1),a("li",{staticClass:"sidebar__links-point"},[a("router-link",{attrs:{to:"/basket"}},[a("font-awesome-icon",{attrs:{icon:["fas","seedling"]}}),e._v("Корзина")],1)],1)])])},H=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sidebar__logo"},[n("img",{attrs:{src:a("9d64"),alt:"logo"}}),n("span",{staticClass:"sidebar__slogan"},[e._v("Nastya's Recipes")])])}],S={name:"TheSidebar"},I=S,B=(a("d45a"),Object(i["a"])(I,N,H,!1,null,"08f31110",null)),D=B.exports,G={name:"MainPage",components:{TheSidebar:D,TheHeader:x,TheFooter:M}},k=G,P=(a("c869"),Object(i["a"])(k,u,f,!1,null,null,null)),V=P.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"card-section"},[n("base-card",{staticClass:"main-content__wrapper",scopedSlots:e._u([{key:"btn",fn:function(){return[n("button",{staticClass:"card__like-button"},[n("font-awesome-icon",{attrs:{icon:["fas","heart"]}})],1)]},proxy:!0},{key:"image",fn:function(){return[n("img",{attrs:{src:a("6748")}})]},proxy:!0},{key:"category",fn:function(){return[e._v(" Завтраки ")]},proxy:!0},{key:"value",fn:function(){return[e._v(" 39 рецептов ")]},proxy:!0}])})],1)},X=[],F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card"},[a("div",{staticClass:"card__wrapper"},[e._t("btn"),e._t("image")],2),a("div",[a("h3",[e._t("category")],2)]),a("div",[a("p",[e._t("value")],2)])])},T=[],J={name:"BaseCard"},Z=J,U=(a("f694"),Object(i["a"])(Z,F,T,!1,null,"7c21651f",null)),K=U.exports,L={name:"Categories",components:{BaseCard:K}},W=L,q=Object(i["a"])(W,R,X,!1,null,"0e702b74",null),Y=q.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"card-section"},[n("base-card",{staticClass:"main-content__wrapper",scopedSlots:e._u([{key:"btn",fn:function(){return[n("button",{staticClass:"card__like-button card__like-button-fav"},[n("font-awesome-icon",{attrs:{icon:["fas","heart"]}})],1)]},proxy:!0},{key:"image",fn:function(){return[n("img",{attrs:{src:a("4013")}})]},proxy:!0},{key:"category",fn:function(){return[e._v(" Запеченая тыква ")]},proxy:!0},{key:"value",fn:function(){return[n("font-awesome-icon",{attrs:{icon:["fas","clock"]}}),e._v(" 120 минут ")]},proxy:!0}])})],1)},ee=[],te={name:"Favorites",components:{BaseCard:K}},ae=te,ne=Object(i["a"])(ae,$,ee,!1,null,"6eeb4304",null),se=ne.exports,re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v("это корзина")])},ie=[],oe={name:"Basket"},ce=oe,le=Object(i["a"])(ce,re,ie,!1,null,"76ab3890",null),de=le.exports,ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-content"},[n("div",{staticClass:"main-content__title"},[e._v("ВРЕМЯ ПЕРЕСМОТРЕТЬ РАЦИОН?")]),n("Slider",{attrs:{id:"slider",autoplay:!0}},[n("SliderItem",[n("div",{staticClass:"item-slogan"},[e._v("Проводите меньше времени на кухне")]),n("picture",{staticClass:"item-image"},[n("img",{attrs:{src:a("6169")}})])]),n("SliderItem",[n("div",{staticClass:"item-slogan"},[e._v("Оптимизируйте затраты на продукты")]),n("picture",{staticClass:"item-image"},[n("img",{attrs:{src:a("bfe4")}})])]),n("SliderItem",[n("div",{staticClass:"item-slogan"},[e._v("Сократите количество выбрасываемой еды")]),n("picture",{staticClass:"item-image"},[n("img",{attrs:{src:a("2def")}})])]),n("SliderItem",[n("div",{staticClass:"item-slogan"},[e._v("Больше не нужно сидеть на диете")]),n("picture",{staticClass:"item-image"},[n("img",{attrs:{src:a("cbfa")}})])]),n("SliderItem",[n("div",{staticClass:"item-slogan"},[e._v(" Вдохновляйтесь пополняющейся библиотекой рецептов ")]),n("picture",{staticClass:"item-image"},[n("img",{attrs:{src:a("223b")}})])])],1)],1)},fe=[],pe={name:"Recipes"},me=pe,ve=(a("c51b"),Object(i["a"])(me,ue,fe,!1,null,null,null)),be=ve.exports;n["a"].use(d["a"]);var he=[{path:"/",name:"MainPage",redirect:"/recipes",component:V,children:[{path:"categories",component:Y},{path:"favorites",component:se},{path:"basket",component:de},{path:"recipes",component:be}]}],ge=new d["a"]({mode:"history",base:"/",routes:he}),Ae=ge,Ce=a("2f62");n["a"].use(Ce["a"]);var _e=new Ce["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Oe=a("cd9a"),Qe=(a("2fb4"),a("dde5")),xe=a.n(Qe),ye=a("260b"),ze=a("ecee"),Ee=a("ad3d"),je=a("c074");n["a"].prototype.$services=xe.a,_e.$services=xe.a,n["a"].config.productionTip=!1,n["a"].use(Oe["a"]),ze["c"].add(je["a"],je["c"],je["g"],je["f"],je["b"],je["e"],je["d"]),n["a"].component("font-awesome-icon",Ee["a"]);var we=Object(ye["a"])(Me),Me={apiKey:"AIzaSyBJ87BuqIgKQ_ddvinu-Yih89kTWMlHtdQ",authDomain:"my-recipes-fdb1d.firebaseapp.com",projectId:"my-recipes-fdb1d",storageBucket:"my-recipes-fdb1d.appspot.com",messagingSenderId:"756394223677",appId:"1:756394223677:web:cf2ac92256a433d400a254",measurementId:"G-EZSPY26V0Z"};console.log(we),console.log("AIzaSyBJ87BuqIgKQ_ddvinu-Yih89kTWMlHtdQ"),new n["a"]({router:Ae,store:_e,render:function(e){return e(l)}}).$mount("#app")},"5e82":function(e,t,a){},6169:function(e,t,a){e.exports=a.p+"img/slide1.588da7a4.png"},6748:function(e,t,a){e.exports=a.p+"img/завтрак.7629ec6d.webp"},"855f":function(e,t,a){},"9d64":function(e,t){e.exports="data:image/png;base64,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"},a7bc:function(e,t,a){},b968:function(e,t,a){"use strict";a("40cc")},bfe4:function(e,t,a){e.exports=a.p+"img/slide2.08ef40e6.png"},c51b:function(e,t,a){"use strict";a("5e82")},c869:function(e,t,a){"use strict";a("da98")},cbfa:function(e,t,a){e.exports=a.p+"img/slide4.2256853c.png"},d45a:function(e,t,a){"use strict";a("f08d")},da98:function(e,t,a){},dc0d:function(e,t,a){"use strict";a("a7bc")},dde5:function(e,t){},f08d:function(e,t,a){},f694:function(e,t,a){"use strict";a("855f")}});
//# sourceMappingURL=app.19f2ff63.js.map