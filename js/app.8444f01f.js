(function(e){function t(t){for(var r,i,c=t[0],o=t[1],u=t[2],p=0,d=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);l&&l(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,c=1;c<a.length;c++){var o=a[c];0!==n[o]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},s=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/recipes/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=o;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1338:function(e,t,a){"use strict";a("4d02")},"146b":function(e,t,a){},"209a":function(e,t,a){},"223b":function(e,t,a){e.exports=a.p+"img/slide5.20998707.png"},"2dba":function(e,t,a){},"2def":function(e,t,a){e.exports=a.p+"img/slide3.40f761c0.png"},"2e2c":function(e,t,a){},"2fb4":function(e,t,a){},"40cc":function(e,t,a){},"41f6":function(e,t,a){e.exports=a.p+"img/bump.d1d12f21.webp"},"4cbc":function(e,t,a){"use strict";a("eab7")},"4d02":function(e,t,a){},5097:function(e,t,a){"use strict";a("209a")},5436:function(e,t,a){"use strict";a("f49f")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("router-view")},s=[],i=a("2877"),c={},o=Object(i["a"])(c,n,s,!1,null,null,null),u=o.exports,l=a("2f62"),p=a("8c4f"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"layout"},[a("the-sidebar"),a("div",{staticClass:"content"},[a("the-header"),a("div",{staticClass:"main main-content"},[a("router-view")],1),a("the-footer")],1)],1)},f=[],m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"header wrapper"},[a("div",{staticClass:"header__search"},[a("base-search",{staticClass:"header__search-input",attrs:{placeholder:"Найти рецепт..."}})],1),a("div",{staticClass:"header__panel"},[a("div",{staticClass:"header__user"},[a("img",{attrs:{src:"https://developeravocados.net/img/avatar-icon.png",alt:"userpic"}}),e.register?a("div",{staticClass:"header__user-status"},[e._v(e._s(e.register))]):e.auth?a("div",{staticClass:"header__user-status"},[e._v(e._s(e.auth))]):a("div",{staticClass:"header__user-status"},[e._v("Неавторизированный пользователь")])]),e._m(0)])])},h=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header__user-setting"},[a("div",{staticClass:"uncle"})])}],v=a("5530"),b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"base-search"},[a("input",{staticClass:"base-search__input",attrs:{placeholder:e.placeholder}})])},g=[],_={name:"BaseSearch",props:{placeholder:{type:String}}},y=_,w=(a("b968"),Object(i["a"])(y,b,g,!1,null,null,null)),C=w.exports,O={name:"TheHeader",components:{BaseSearch:C},computed:Object(v["a"])({},Object(l["d"])({register:function(e){return e.register},auth:function(e){return e.auth}})),methods:{toAuth:function(){return this.$router.push("/auth")}}},x=O,j=(a("e07b"),Object(i["a"])(x,m,h,!1,null,"6060113a",null)),A=j.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div")},E=[],R={name:"TheFooter"},I=R,B=Object(i["a"])(I,k,E,!1,null,"2e653cde",null),N=B.exports,z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"sidebar"},[e._m(0),a("ul",{staticClass:"sidebar__links"},[a("li",{staticClass:"sidebar__links-point"},[a("router-link",{attrs:{to:"/main/recipes"}},[a("font-awesome-icon",{attrs:{icon:["fas","apple-alt"]}}),e._v("Главная")],1)],1),a("li",{staticClass:"sidebar__links-point"},[a("router-link",{attrs:{to:"/main/categories"}},[a("font-awesome-icon",{attrs:{icon:["fas","carrot"]}}),e._v("Категории")],1)],1),a("li",{staticClass:"sidebar__links-point"},[a("router-link",{attrs:{to:"/main/favorites"}},[a("font-awesome-icon",{attrs:{icon:["fas","lemon"]}}),e._v("Любимые рецепты")],1)],1),a("li",{staticClass:"sidebar__links-point"},[a("router-link",{attrs:{to:"/main/basket"}},[a("font-awesome-icon",{attrs:{icon:["fas","seedling"]}}),e._v("Корзина")],1)],1)])])},Q=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"sidebar__logo"},[r("img",{attrs:{src:a("9d64"),alt:"logo"}}),r("span",{staticClass:"sidebar__slogan"},[e._v("Nastya's Recipes")])])}],S={name:"TheSidebar"},M=S,H=(a("f21d"),Object(i["a"])(M,z,Q,!1,null,"f533bc14",null)),D=H.exports,G={name:"MainPage",components:{TheSidebar:D,TheHeader:A,TheFooter:N}},P=G,V=(a("c869"),Object(i["a"])(P,d,f,!1,null,null,null)),T=V.exports,X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"card-section"},e._l(e.recipes.categories,(function(t,r){return a("base-card",{key:r,staticClass:"main-content__wrapper",attrs:{"category-id":t.categoryId},scopedSlots:e._u([{key:"btn",fn:function(){return[a("button",{staticClass:"card__like-button"},[a("font-awesome-icon",{attrs:{icon:["fas","heart"]}})],1)]},proxy:!0},{key:"image",fn:function(){return[a("img",{attrs:{src:t.image}})]},proxy:!0},{key:"category",fn:function(){return[e._v(e._s(t.categoryName)+" ")]},proxy:!0},{key:"count",fn:function(){},proxy:!0}],null,!0)})})),1)},F=[],Z=a("1da1"),J=(a("96cf"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("router-link",{staticClass:"card",attrs:{to:{name:"categoryId",params:{id:e.categoryId}}}},[a("div",{staticClass:"card__wrapper"},[e._t("btn"),e._t("image")],2),a("div",[a("h3",[e._t("category")],2)])])}),L=[],U=(a("a9e3"),{name:"BaseCard",props:{categoryId:{type:Number,require:!0}}}),q=U,K=(a("1338"),Object(i["a"])(q,J,L,!1,null,null,null)),W=K.exports,Y={name:"Categories",components:{BaseCard:W},data:function(){return{categoryId:null}},computed:Object(v["a"])({},Object(l["d"])({recipes:function(e){return e.recipes}})),methods:Object(v["a"])({},Object(l["b"])({getRecipes:"getRecipes"})),mounted:function(){var e=this;return Object(Z["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getRecipes();case 2:case"end":return t.stop()}}),t)})))()}},$=Y,ee=(a("5436"),Object(i["a"])($,X,F,!1,null,"0a0064ee",null)),te=ee.exports,ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"card-section recipe"},e._l(e.recipesByCategory,(function(t,r){return a("base-recipe-card",{key:r,staticClass:"main-content__wrapper",attrs:{"recipe-id":t.id},scopedSlots:e._u([{key:"btn",fn:function(){return[a("button",{staticClass:"card__like-button"},[a("font-awesome-icon",{attrs:{icon:["fas","heart"]}})],1)]},proxy:!0},{key:"image",fn:function(){return[a("img",{attrs:{src:t.img}})]},proxy:!0},{key:"recipe",fn:function(){return[e._v(" "+e._s(t.name)+" ")]},proxy:!0},{key:"time",fn:function(){return[a("font-awesome-icon",{attrs:{icon:["fas","clock"]}}),e._v(" "+e._s(t.time)+"мин. ")]},proxy:!0}],null,!0)})})),1)},re=[],ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("router-link",{staticClass:"card",attrs:{to:{name:"recipeById",params:{id:e.recipeId}}}},[a("div",{staticClass:"card__wrapper"},[e._t("btn"),e._t("image")],2),a("div",{staticClass:"recipe_info"},[a("h3",[e._t("recipe")],2),a("h4",[e._t("time")],2)])])},se=[],ie={name:"BaseRecipeCard",props:{recipeId:{type:Number,require:!0}}},ce=ie,oe=(a("eb71"),Object(i["a"])(ce,ne,se,!1,null,"ba3d11d8",null)),ue=oe.exports,le={components:{BaseRecipeCard:ue},data:function(){return{recipeId:null,categoryId:null}},created:function(){this.categoryId=+this.$route.params.id},computed:Object(v["a"])(Object(v["a"])({},Object(l["c"])({getRecipesByCategoryId:"getRecipesByCategoryId"})),{},{recipesByCategory:function(){return this.getRecipesByCategoryId(this.categoryId)}}),methods:Object(v["a"])({},Object(l["b"])({getRecipes:"getRecipes"})),mounted:function(){var e=this;return Object(Z["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getRecipes();case 2:case"end":return t.stop()}}),t)})))()}},pe=le,de=(a("a881"),Object(i["a"])(pe,ae,re,!1,null,null,null)),fe=de.exports,me=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"card-section"},[r("base-card",{staticClass:"main-content__wrapper",scopedSlots:e._u([{key:"btn",fn:function(){return[r("button",{staticClass:"card__like-button card__like-button-fav"},[r("font-awesome-icon",{attrs:{icon:["fas","heart"]}})],1)]},proxy:!0},{key:"image",fn:function(){return[r("img",{attrs:{src:a("41f6")}})]},proxy:!0},{key:"category",fn:function(){return[e._v(" Запеченая тыква ")]},proxy:!0},{key:"value",fn:function(){return[r("font-awesome-icon",{attrs:{icon:["fas","clock"]}}),e._v(" 120 минут ")]},proxy:!0}])})],1)},he=[],ve={name:"Favorites",components:{BaseCard:W}},be=ve,ge=Object(i["a"])(be,me,he,!1,null,"071eaad0",null),_e=ge.exports,ye=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v("это корзина")])},we=[],Ce={name:"Basket"},Oe=Ce,xe=Object(i["a"])(Oe,ye,we,!1,null,"76ab3890",null),je=xe.exports,Ae=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main-content"},[r("div",{staticClass:"main-content__title"},[e._v("ВРЕМЯ ПЕРЕСМОТРЕТЬ РАЦИОН?")]),r("Slider",{attrs:{id:"slider",autoplay:!0}},[r("SliderItem",[r("div",{staticClass:"item-slogan"},[e._v("Проводите меньше времени на кухне")]),r("picture",{staticClass:"item-image"},[r("img",{attrs:{src:a("6169")}})])]),r("SliderItem",[r("div",{staticClass:"item-slogan"},[e._v("Оптимизируйте затраты на продукты")]),r("picture",{staticClass:"item-image"},[r("img",{attrs:{src:a("bfe4")}})])]),r("SliderItem",[r("div",{staticClass:"item-slogan"},[e._v("Сократите количество выбрасываемой еды")]),r("picture",{staticClass:"item-image"},[r("img",{attrs:{src:a("2def")}})])]),r("SliderItem",[r("div",{staticClass:"item-slogan"},[e._v("Больше не нужно сидеть на диете")]),r("picture",{staticClass:"item-image"},[r("img",{attrs:{src:a("cbfa")}})])]),r("SliderItem",[r("div",{staticClass:"item-slogan"},[e._v(" Вдохновляйтесь пополняющейся библиотекой рецептов ")]),r("picture",{staticClass:"item-image"},[r("img",{attrs:{src:a("223b")}})])])],1)],1)},ke=[],Ee={name:"Recipes"},Re=Ee,Ie=(a("c51b"),Object(i["a"])(Re,Ae,ke,!1,null,null,null)),Be=Ie.exports,Ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("recipe",e._l(e.recipeById,(function(t,r){return a("div",{key:r},[a("div",{staticClass:"recipe_title"},[a("h1",[e._v(e._s(t.name))]),a("div",{staticClass:"recipe_cook"},[a("div",{staticClass:"recipe_cook-title"},[e._v("Время приготовления")]),a("div",{staticClass:"recipe_cook-time"},[a("font-awesome-icon",{attrs:{icon:["fas","clock"]}}),a("div",[e._v(e._s(t.time)+" мин.")])],1)]),a("picture",{staticClass:"recipe_img"},[a("img",{attrs:{src:t.img,alt:"recipe"}})]),a("div",{staticClass:"recipe_keys"},[a("base-link",[e._v(e._s(t.keys))])],1)]),a("div",{staticClass:"recipe_ingredients"},[a("h1",[e._v("Ингредиенты")]),a("ul",{staticClass:"recipe_ingredients-table"},e._l(t.ingredients,(function(t,r){return a("li",{key:r,staticClass:"recipe_ingredients-table-li"},[a("div",[e._v(e._s(t.ingredientName))]),a("div",[e._v(e._s(t.value))])])})),0)]),a("div",{staticClass:"recipe_supplements"},[a("h1",[e._v("Пищевая ценность")]),a("base-link",{staticClass:"recipe_supplements-count"},[e._v("225ккал.")])],1),a("div",{staticClass:"recipe_steps"},[a("h1",[e._v("Готовим")]),e._l(t.descriptions,(function(t,r){return a("ol",{key:r,staticClass:"recipe_steps-table"},[a("li",{staticClass:"recipe_steps-table-li"},[e._v(e._s(t.specification))])])}))],2)])})),0)},ze=[],Qe=function(e,t){var a=t._c;return a("div",{staticClass:"container recipe"},[t._t("default")],2)},Se=[],Me={name:"Recipe"},He=Me,De=Object(i["a"])(He,Qe,Se,!0,null,null,null),Ge=De.exports,Pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"base-link"},[e._t("default")],2)},Ve=[],Te={name:"BaseLink"},Xe=Te,Fe=(a("4cbc"),Object(i["a"])(Xe,Pe,Ve,!1,null,"150ea1f8",null)),Ze=Fe.exports,Je={name:"RecipeViews",data:function(){return{recipeId:null}},components:{Recipe:Ge,BaseLink:Ze},methods:Object(v["a"])({},Object(l["b"])({getRecipes:"getRecipes"})),computed:Object(v["a"])(Object(v["a"])({},Object(l["c"])({getRecipeById:"getRecipeById"})),{},{recipeById:function(){return this.getRecipeById(this.recipeId)}}),created:function(){this.recipeId=+this.$route.params.id},mounted:function(){var e=this;return Object(Z["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getRecipes();case 2:case"end":return t.stop()}}),t)})))()}},Le=Je,Ue=(a("5097"),Object(i["a"])(Le,Ne,ze,!1,null,"456cf238",null)),qe=Ue.exports,Ke=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"auth"},[e._m(0),a("div",{staticClass:"auth-data"},[a("div",{staticClass:"auth-data_action"},[e._v("Регистрация")]),a("form",{staticClass:"auth-data_email"},[a("div",{staticClass:"auth-data_email-label",attrs:{type:"text"}},[e._v("Имя")]),a("base-input",{model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("form",{staticClass:"auth-data_email"},[a("div",{staticClass:"auth-data_email-label",attrs:{type:"text"}},[e._v("E-mail")]),a("base-input",{model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),a("form",{staticClass:"auth-data_password"},[a("div",{staticClass:"auth-data_password-label"},[e._v("Пароль")]),a("base-input",{class:[e.onError],attrs:{type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isError,expression:"isError"}],staticClass:"isError"},[e._v(" Этот e-mail уже используется или не введён ")])],1),a("div",{staticClass:"auth-data_buttons"},[a("div",{staticClass:"auth-data_buttons-request"},[a("base-button",{attrs:{theme:"confirm",type:"button"},nativeOn:{click:function(t){return e.sendRegisterData.apply(null,arguments)}}},[e._v(" Зарегистрироваться ")])],1),a("div",{staticClass:"auth-data_buttons-enter"},[a("base-button",{attrs:{theme:"confirm",type:"button"},nativeOn:{click:function(t){return e.toAuth.apply(null,arguments)}}},[e._v("Уже с нами? Войти")])],1)])])])},We=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"auth-company"},[r("div",{staticClass:"auth-company_logo"},[r("img",{attrs:{src:a("9d64"),alt:"logo"}})]),r("div",{staticClass:"auth-company_slogan"},[r("span",[e._v("Nastya's recipes")])])])}],Ye=(a("b0c0"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"base-button",class:[e.getTheme],attrs:{type:e.type},on:{click:function(t){return e.$emit("click")}}},[e._t("default")],2)}),$e=[],et=(a("caad"),{name:"BaseButton",props:{theme:{type:String,validator:function(e){return["confirm","delete","cancel"].includes(e)},default:"confirm"},type:{type:String,default:"button"},icon:{type:[Array,String],default:""}},computed:{getTheme:function(){return"base-button_".concat(this.theme)}}}),tt=et,at=(a("8479"),Object(i["a"])(tt,Ye,$e,!1,null,"87c27d66",null)),rt=at.exports,nt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"base-input"},[a("input",{attrs:{type:e.type,autocomplete:"on"},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}})])},st=[],it={name:"BaseInput",props:{type:{type:String},value:{type:String}}},ct=it,ot=(a("8101"),Object(i["a"])(ct,nt,st,!1,null,"64743b5d",null)),ut=ot.exports,lt={name:"Registration",components:{BaseInput:ut,BaseButton:rt},data:function(){return{name:"",email:"",password:"",isError:!1}},methods:Object(v["a"])(Object(v["a"])({},Object(l["b"])({register:"register"})),{},{sendRegisterData:function(){var e=this;return Object(Z["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.register({email:e.email,password:e.password,name:e.name});case 3:return e.email="",e.password="",t.next=7,e.$router.push("/main/recipes");case 7:t.next=12;break;case 9:return t.prev=9,t.t0=t["catch"](0),t.abrupt("return",e.isError=!0);case 12:e.email="",e.password="",e.isError=!1;case 15:case"end":return t.stop()}}),t,null,[[0,9]])})))()},toAuth:function(){return this.$router.push("/auth")}}),computed:{onError:function(){return this.isError?"onError":""}}},pt=lt,dt=(a("85e1"),Object(i["a"])(pt,Ke,We,!1,null,"0ce50d8e",null)),ft=dt.exports,mt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"auth"},[e._m(0),a("div",{staticClass:"auth-data"},[a("div",{staticClass:"auth-data_action"},[e._v("Вход")]),a("form",{staticClass:"auth-data_email"},[a("div",{staticClass:"auth-data_email-label",attrs:{type:"text"}},[e._v("E-mail")]),a("base-input",{model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),a("form",{staticClass:"auth-data_password"},[a("div",{staticClass:"auth-data_password-label"},[e._v("Пароль")]),a("base-input",{class:[e.onError],attrs:{type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isError,expression:"isError"}],staticClass:"isError"},[e._v(" Вы ввели неверный логин/пароль ")])],1),a("div",{staticClass:"auth-data_buttons"},[a("div",{staticClass:"auth-data_buttons-enter"},[a("base-button",{attrs:{theme:"confirm",type:"button"},nativeOn:{click:function(t){return e.verifyAuthData.apply(null,arguments)}}},[e._v("Войти")])],1)])])])},ht=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"auth-company"},[r("div",{staticClass:"auth-company_logo"},[r("img",{attrs:{src:a("9d64"),alt:"logo"}})]),r("div",{staticClass:"auth-company_slogan"},[r("span",[e._v("Nastya's recipes")])])])}],vt={name:"Registration",components:{BaseInput:ut,BaseButton:rt},data:function(){return{email:"",password:"",isError:!1}},methods:Object(v["a"])(Object(v["a"])({},Object(l["b"])({auth:"authorization"})),{},{verifyAuthData:function(){var e=this;return Object(Z["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.auth({email:e.email,password:e.password});case 3:return e.email="",e.password="",t.next=7,e.$router.push("/main/recipes");case 7:t.next=12;break;case 9:return t.prev=9,t.t0=t["catch"](0),t.abrupt("return",e.isError=!0);case 12:e.email="",e.password="",e.isError=!1;case 15:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}),computed:{onError:function(){return this.isError?"onError":""}}},bt=vt,gt=(a("6744"),Object(i["a"])(bt,mt,ht,!1,null,"a62e6c1a",null)),_t=gt.exports;r["a"].use(p["a"]);var yt=[{path:"/",name:"Registration",component:ft},{path:"/auth",name:"Auth",component:_t},{path:"/main",name:"MainPage",redirect:"/main/recipes",component:T,children:[{path:"categories",component:te},{path:"categories/:id",component:fe,name:"categoryId"},{path:"favorites",component:_e},{path:"basket",component:je},{path:"recipes",component:Be},{path:"recipes/:id",component:qe,name:"recipeById"}]}],wt=new p["a"]({mode:"history",base:"/recipes/",routes:yt}),Ct=wt,Ot=a("cd9a"),xt=(a("2fb4"),a("260b")),jt={apiKey:"AIzaSyBJ87BuqIgKQ_ddvinu-Yih89kTWMlHtdQ",authDomain:"my-recipes-fdb1d.firebaseapp.com",projectId:"my-recipes-fdb1d",storageBucket:"my-recipes-fdb1d.appspot.com",messagingSenderId:"756394223677",appId:"1:756394223677:web:cf2ac92256a433d400a254",measurementId:"G-EZSPY26V0Z",databaseURL:"https://my-recipes-fdb1d-default-rtdb.europe-west1.firebasedatabase.app"},At=(function(){Object(xt["a"])(jt)}(),a("d4ec")),kt=a("bee2"),Et=(a("d9e2"),a("ea7b")),Rt=a("66ce"),It=function(){function e(){Object(At["a"])(this,e),this.auth=Object(Et["b"])(),this.db=Object(Rt["b"])()}return Object(kt["a"])(e,[{key:"register",value:function(){var e=Object(Z["a"])(regeneratorRuntime.mark((function e(t,a,r){var n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Et["a"])(this.auth,t,a);case 3:return n=e.sent,s=n.user,Object(Et["e"])(s,{displayName:r}).then((function(){return s.displayName})).catch((function(e){console.log(e)})),e.abrupt("return",s.displayName=r);case 9:throw e.prev=9,e.t0=e["catch"](0),new Error(e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(t,a,r){return e.apply(this,arguments)}return t}()},{key:"authorization",value:function(){var e=Object(Z["a"])(regeneratorRuntime.mark((function e(t,a){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Et["c"])(this.auth,t,a);case 3:return r=e.sent,n=r.user,e.abrupt("return",n.displayName);case 8:throw e.prev=8,e.t0=e["catch"](0),new Error(e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(t,a){return e.apply(this,arguments)}return t}()},{key:"logOut",value:function(){var e=Object(Z["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Et["d"])(this.auth);case 3:e.sent,e.next=9;break;case 6:throw e.prev=6,e.t0=e["catch"](0),new Error(e.t0);case 9:case"end":return e.stop()}}),e,this,[[0,6]])})));function t(){return e.apply(this,arguments)}return t}()}]),e}(),Bt=function(){function e(){Object(At["a"])(this,e),this.db=Object(Rt["c"])(Object(Rt["b"])())}return Object(kt["a"])(e,[{key:"getRecipes",value:function(){var e=Object(Z["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Rt["a"])(this.db);case 3:return t=e.sent,e.abrupt("return",t.val());case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}()}]),e}(),Nt={registration:new It,data:new Bt};a("4de4"),a("d3b7");r["a"].use(l["a"]);var zt=new l["a"].Store({state:{register:"",auth:"",recipes:{}},mutations:{register:function(e,t){e.register=t},auth:function(e,t){e.auth=t},recipes:function(e,t){e.recipes=t}},actions:{register:function(e,t){var a=this;return Object(Z["a"])(regeneratorRuntime.mark((function r(){var n,s,i,c,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,s=t.email,i=t.password,c=t.name,r.prev=2,r.next=5,a.$services.registration.register(s,i,c);case 5:o=r.sent,n("register",o),r.next=12;break;case 9:throw r.prev=9,r.t0=r["catch"](2),new Error(r.t0.response);case 12:case"end":return r.stop()}}),r,null,[[2,9]])})))()},authorization:function(e,t){var a=this;return Object(Z["a"])(regeneratorRuntime.mark((function r(){var n,s,i,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,s=t.email,i=t.password,r.prev=2,r.next=5,a.$services.registration.authorization(s,i);case 5:c=r.sent,n("auth",c),r.next=12;break;case 9:throw r.prev=9,r.t0=r["catch"](2),new Error(r.t0);case 12:case"end":return r.stop()}}),r,null,[[2,9]])})))()},logOut:function(e){var t=this;return Object(Z["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=e.commit,a.prev=1,a.next=4,t.$services.registration.logOut();case 4:n=a.sent,r("logOut",n),a.next=11;break;case 8:throw a.prev=8,a.t0=a["catch"](1),new Error(a.t0);case 11:case"end":return a.stop()}}),a,null,[[1,8]])})))()},getRecipes:function(e){var t=this;return Object(Z["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=e.commit,a.prev=1,a.next=4,t.$services.data.getRecipes();case 4:n=a.sent,r("recipes",n),a.next=11;break;case 8:throw a.prev=8,a.t0=a["catch"](1),new Error(a.t0);case 11:case"end":return a.stop()}}),a,null,[[1,8]])})))()}},getters:{getRecipesByCategoryId:function(e){return function(t){if(Array.isArray(e.recipes.data))return e.recipes.data.filter((function(e){return e.categoryId===t}))}},getRecipeById:function(e){return function(t){if(Array.isArray(e.recipes.data))return e.recipes.data.filter((function(e){return e.id===t}))}}}}),Qt=a("ecee"),St=a("ad3d"),Mt=a("c074");r["a"].prototype.$services=Nt,zt.$services=Nt,r["a"].config.productionTip=!1,r["a"].use(l["a"]),r["a"].use(Ot["a"]),Qt["c"].add(Mt["a"],Mt["c"],Mt["g"],Mt["f"],Mt["b"],Mt["e"],Mt["d"]),r["a"].component("font-awesome-icon",St["a"]),new r["a"]({router:Ct,store:zt,render:function(e){return e(u)}}).$mount("#app")},"5e82":function(e,t,a){},6169:function(e,t,a){e.exports=a.p+"img/slide1.588da7a4.png"},6744:function(e,t,a){"use strict";a("2e2c")},8101:function(e,t,a){"use strict";a("2dba")},8479:function(e,t,a){"use strict";a("db24")},"85e1":function(e,t,a){"use strict";a("146b")},"9d64":function(e,t){e.exports="data:image/png;base64,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"},a881:function(e,t,a){"use strict";a("f318")},ae1b:function(e,t,a){},b968:function(e,t,a){"use strict";a("40cc")},bfe4:function(e,t,a){e.exports=a.p+"img/slide2.08ef40e6.png"},c51b:function(e,t,a){"use strict";a("5e82")},c869:function(e,t,a){"use strict";a("da98")},cbfa:function(e,t,a){e.exports=a.p+"img/slide4.2256853c.png"},da98:function(e,t,a){},db24:function(e,t,a){},dfcc:function(e,t,a){},e07b:function(e,t,a){"use strict";a("f7d8")},eab7:function(e,t,a){},eb71:function(e,t,a){"use strict";a("dfcc")},f21d:function(e,t,a){"use strict";a("ae1b")},f318:function(e,t,a){},f49f:function(e,t,a){},f7d8:function(e,t,a){}});
//# sourceMappingURL=app.8444f01f.js.map