(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(t,e,n){var r=n("b622"),i=r("toStringTag"),o={};o[i]="z",t.exports="[object z]"===String(o)},"01b4":function(t,e){var n=function(){this.head=null,this.tail=null};n.prototype={add:function(t){var e={item:t,next:null};this.head?this.tail.next=e:this.head=e,this.tail=e},get:function(){var t=this.head;if(t)return this.head=t.next,this.tail===t&&(this.tail=null),t.item}},t.exports=n},"0366":function(t,e,n){var r=n("e330"),i=n("59ed"),o=r(r.bind);t.exports=function(t,e){return i(t),void 0===e?t:o?o(t,e):function(){return t.apply(e,arguments)}}},"057f":function(t,e,n){var r=n("c6b6"),i=n("fc6a"),o=n("241c").f,s=n("4dae"),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return s(a)}};t.exports.f=function(t){return a&&"Window"==r(t)?c(t):o(i(t))}},"06cf":function(t,e,n){var r=n("83ab"),i=n("c65b"),o=n("d1e7"),s=n("5c6c"),a=n("fc6a"),c=n("a04b"),u=n("1a2d"),l=n("0cfb"),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return s(!i(o.f,t,e),t[e])}},"07fa":function(t,e,n){var r=n("50c4");t.exports=function(t){return r(t.length)}},"0b42":function(t,e,n){var r=n("da84"),i=n("e8b5"),o=n("68ee"),s=n("861d"),a=n("b622"),c=a("species"),u=r.Array;t.exports=function(t){var e;return i(t)&&(e=t.constructor,o(e)&&(e===u||i(e.prototype))?e=void 0:s(e)&&(e=e[c],null===e&&(e=void 0))),void 0===e?u:e}},"0cfb":function(t,e,n){var r=n("83ab"),i=n("d039"),o=n("cc12");t.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(t,e,n){var r=n("da84"),i=r.String;t.exports=function(t){try{return i(t)}catch(e){return"Object"}}},"159b":function(t,e,n){var r=n("da84"),i=n("fdbc"),o=n("785a"),s=n("17c2"),a=n("9112"),c=function(t){if(t&&t.forEach!==s)try{a(t,"forEach",s)}catch(e){t.forEach=s}};for(var u in i)i[u]&&c(r[u]&&r[u].prototype);c(o)},1626:function(t,e){t.exports=function(t){return"function"==typeof t}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,i=n("a640"),o=i("forEach");t.exports=o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"19aa":function(t,e,n){var r=n("da84"),i=n("3a9b"),o=r.TypeError;t.exports=function(t,e){if(i(e,t))return t;throw o("Incorrect invocation")}},"1a2d":function(t,e,n){var r=n("e330"),i=n("7b0b"),o=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return o(i(t),e)}},"1be4":function(t,e,n){var r=n("d066");t.exports=r("document","documentElement")},"1c7e":function(t,e,n){var r=n("b622"),i=r("iterator"),o=!1;try{var s=0,a={next:function(){return{done:!!s++}},return:function(){o=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(c){}return n}},"1cdc":function(t,e,n){var r=n("342f");t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d80":function(t,e,n){var r=n("da84"),i=r.TypeError;t.exports=function(t){if(void 0==t)throw i("Can't call method on "+t);return t}},"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("d3b7");function r(t,e,n,r,i,o,s){try{var a=t[o](s),c=a.value}catch(u){return void n(u)}a.done?e(c):Promise.resolve(c).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var s=t.apply(e,n);function a(t){r(s,i,o,a,c,"next",t)}function c(t){r(s,i,o,a,c,"throw",t)}a(void 0)}))}}},"1dde":function(t,e,n){var r=n("d039"),i=n("b622"),o=n("2d00"),s=i("species");t.exports=function(t){return o>=51||!r((function(){var e=[],n=e.constructor={};return n[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"1fd5":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return k})),n.d(e,"c",(function(){return T})),n.d(e,"d",(function(){return q})),n.d(e,"e",(function(){return i})),n.d(e,"f",(function(){return o})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return h})),n.d(e,"i",(function(){return u})),n.d(e,"j",(function(){return R})),n.d(e,"k",(function(){return v})),n.d(e,"l",(function(){return V})),n.d(e,"m",(function(){return d})),n.d(e,"n",(function(){return D})),n.d(e,"o",(function(){return G})),n.d(e,"p",(function(){return z})),n.d(e,"q",(function(){return X})),n.d(e,"r",(function(){return g})),n.d(e,"s",(function(){return A})),n.d(e,"t",(function(){return _})),n.d(e,"u",(function(){return L})),n.d(e,"v",(function(){return w})),n.d(e,"w",(function(){return y})),n.d(e,"x",(function(){return C})),n.d(e,"y",(function(){return b})),n.d(e,"z",(function(){return N})),n.d(e,"A",(function(){return x})),n.d(e,"B",(function(){return M})),n.d(e,"C",(function(){return $})),n.d(e,"D",(function(){return U})),n.d(e,"E",(function(){return j})),n.d(e,"F",(function(){return Y})),n.d(e,"G",(function(){return K})),n.d(e,"H",(function(){return S}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},i=function(t,e){if(!t)throw o(e)},o=function(t){return new Error("Firebase Database ("+r.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)},s=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},a=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return e.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],o=i+1<t.length,s=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|s>>4;let h=(15&s)<<2|c>>6,d=63&c;a||(d=64,o||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(s(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):a(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],o=i<t.length,s=o?n[t.charAt(i)]:0;++i;const a=i<t.length,c=a?n[t.charAt(i)]:64;++i;const u=i<t.length,l=u?n[t.charAt(i)]:64;if(++i,null==e||null==s||null==c||null==l)throw Error();const h=e<<2|s>>4;if(r.push(h),64!==c){const t=s<<4&240|c>>2;if(r.push(t),64!==l){const t=c<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},u=function(t){const e=s(t);return c.encodeByteArray(e,!0)},l=function(t){return u(t).replace(/\./g,"")},h=function(t){try{return c.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function d(t){return f(void 0,t)}function f(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)e.hasOwnProperty(n)&&p(n)&&(t[n]=f(t[n],e[n]));return t}function p(t){return"__proto__"!==t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[l(JSON.stringify(n)),l(JSON.stringify(s)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function y(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(g())}function _(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function b(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function w(){const t=g();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function C(){return!0===r.NODE_CLIENT||!0===r.NODE_ADMIN}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const I="FirebaseError";class T extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=I,Object.setPrototypeOf(this,T.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,k.prototype.create)}}class k{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?O(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new T(r,s,n);return a}}function O(t,e){return t.replace(E,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}const E=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t){return JSON.parse(t)}function S(t){return JSON.stringify(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=function(t){let e={},n={},r={},i="";try{const o=t.split(".");e=x(h(o[0])||""),n=x(h(o[1])||""),i=o[2],r=n["d"]||{},delete n["d"]}catch(o){}return{header:e,claims:n,data:r,signature:i}},N=function(t){const e=P(t),n=e.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},A=function(t){const e=P(t).claims;return"object"===typeof e&&!0===e["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function R(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function j(t,e){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:void 0}function L(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function M(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function D(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],o=e[i];if(F(n)&&F(o)){if(!D(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function F(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function U(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach(t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}}),e}function z(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,e){e||(e=0);const n=this.W_;if("string"===typeof t)for(let l=0;l<16;l++)n[l]=t.charCodeAt(e)<<24|t.charCodeAt(e+1)<<16|t.charCodeAt(e+2)<<8|t.charCodeAt(e+3),e+=4;else for(let l=0;l<16;l++)n[l]=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3],e+=4;for(let l=16;l<80;l++){const t=n[l-3]^n[l-8]^n[l-14]^n[l-16];n[l]=4294967295&(t<<1|t>>>31)}let r,i,o=this.chain_[0],s=this.chain_[1],a=this.chain_[2],c=this.chain_[3],u=this.chain_[4];for(let l=0;l<80;l++){l<40?l<20?(r=c^s&(a^c),i=1518500249):(r=s^a^c,i=1859775393):l<60?(r=s&a|c&(s|a),i=2400959708):(r=s^a^c,i=3395469782);const t=(o<<5|o>>>27)+r+u+i+n[l]&4294967295;u=c,c=a,a=4294967295&(s<<30|s>>>2),s=o,o=t}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(t,e){if(null==t)return;void 0===e&&(e=t.length);const n=e-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;while(r<e){if(0===o)while(r<=n)this.compress_(t,r),r+=this.blockSize;if("string"===typeof t){while(r<e)if(i[o]=t.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else while(r<e)if(i[o]=t[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=e}digest(){const t=[];let e=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&e,e/=256;this.compress_(this.buf_);let n=0;for(let r=0;r<5;r++)for(let e=24;e>=0;e-=8)t[n]=this.chain_[r]>>e&255,++n;return t}}function V(t,e){const n=new H(t,e);return n.subscribe.bind(n)}class H{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(t=>{this.error(t)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=W(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=B),void 0===r.error&&(r.error=B),void 0===r.complete&&(r.complete=B);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}}),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function W(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function B(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t,e){return`${t} failed: ${e} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const K=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let o=t.charCodeAt(r);if(o>=55296&&o<=56319){const e=o-55296;r++,i(r<t.length,"Surrogate pair missing trail surrogate.");const n=t.charCodeAt(r)-56320;o=65536+(e<<10)+n}o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=63&o|128):o<65536?(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=63&o|128):(e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=63&o|128)}return e},Y=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function X(t){return t&&t._delegate?t._delegate:t}}).call(this,n("c8ba"))},2266:function(t,e,n){var r=n("da84"),i=n("0366"),o=n("c65b"),s=n("825a"),a=n("0d51"),c=n("e95a"),u=n("07fa"),l=n("3a9b"),h=n("9a1f"),d=n("35a1"),f=n("2a62"),p=r.TypeError,m=function(t,e){this.stopped=t,this.result=e},v=m.prototype;t.exports=function(t,e,n){var r,g,y,_,b,w,C,I=n&&n.that,T=!(!n||!n.AS_ENTRIES),k=!(!n||!n.IS_ITERATOR),O=!(!n||!n.INTERRUPTED),E=i(e,I),x=function(t){return r&&f(r,"normal",t),new m(!0,t)},S=function(t){return T?(s(t),O?E(t[0],t[1],x):E(t[0],t[1])):O?E(t,x):E(t)};if(k)r=t;else{if(g=d(t),!g)throw p(a(t)+" is not iterable");if(c(g)){for(y=0,_=u(t);_>y;y++)if(b=S(t[y]),b&&l(v,b))return b;return new m(!1)}r=h(t,g)}w=r.next;while(!(C=o(w,r)).done){try{b=S(C.value)}catch(P){f(r,"throw",P)}if("object"==typeof b&&b&&l(v,b))return b}return new m(!1)}},"22e5":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u}));var r=n("1fd5");class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r["a"];if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=o){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=o){return this.instances.has(t)}getOptions(t=o){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,o]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&o.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=o){return this.component?this.component.multipleInstances?t:o:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===o?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new s(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},"23cb":function(t,e,n){var r=n("5926"),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e)}},"23e7":function(t,e,n){var r=n("da84"),i=n("06cf").f,o=n("9112"),s=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");t.exports=function(t,e){var n,l,h,d,f,p,m=t.target,v=t.global,g=t.stat;if(l=v?r:g?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(h in e){if(f=e[h],t.noTargetGet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(v?h:m+(g?".":"#")+h,t.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(t.sham||d&&d.sham)&&o(f,"sham",!0),s(l,h,f,t)}}},"241c":function(t,e,n){var r=n("ca84"),i=n("7839"),o=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},"260b":function(t,e,n){"use strict";var r=n("589b");n.d(e,"a",(function(){return r["e"]}));var i="firebase",o="9.6.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(r["f"])(i,o,"app")},2626:function(t,e,n){"use strict";var r=n("d066"),i=n("9bf2"),o=n("b622"),s=n("83ab"),a=o("species");t.exports=function(t){var e=r(t),n=i.f;s&&e&&!e[a]&&n(e,a,{configurable:!0,get:function(){return this}})}},2877:function(t,e,n){"use strict";function r(t,e,n,r,i,o,s,a){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),s?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:u}}n.d(e,"a",(function(){return r}))},"2a62":function(t,e,n){var r=n("c65b"),i=n("825a"),o=n("dc4a");t.exports=function(t,e,n){var s,a;i(t);try{if(s=o(t,"return"),!s){if("throw"===e)throw n;return n}s=r(s,t)}catch(c){a=!0,s=c}if("throw"===e)throw n;if(a)throw s;return i(s),n}},"2b0e":function(t,e,n){"use strict";(function(t){
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function o(t){return!0===t}function s(t){return!1===t}function a(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function c(t){return null!==t&&"object"===typeof t}var u=Object.prototype.toString;function l(t){return"[object Object]"===u.call(t)}function h(t){return"[object RegExp]"===u.call(t)}function d(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function f(t){return i(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function p(t){return null==t?"":Array.isArray(t)||l(t)&&t.toString===u?JSON.stringify(t,null,2):String(t)}function m(t){var e=parseFloat(t);return isNaN(e)?t:e}function v(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}v("slot,component",!0);var g=v("key,ref,slot,slot-scope,is");function y(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var _=Object.prototype.hasOwnProperty;function b(t,e){return _.call(t,e)}function w(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var C=/-(\w)/g,I=w((function(t){return t.replace(C,(function(t,e){return e?e.toUpperCase():""}))})),T=w((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),k=/\B([A-Z])/g,O=w((function(t){return t.replace(k,"-$1").toLowerCase()}));function E(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function x(t,e){return t.bind(e)}var S=Function.prototype.bind?x:E;function P(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function N(t,e){for(var n in e)t[n]=e[n];return t}function A(t){for(var e={},n=0;n<t.length;n++)t[n]&&N(e,t[n]);return e}function R(t,e,n){}var j=function(t,e,n){return!1},L=function(t){return t};function M(t,e){if(t===e)return!0;var n=c(t),r=c(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),o=Array.isArray(e);if(i&&o)return t.length===e.length&&t.every((function(t,n){return M(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||o)return!1;var s=Object.keys(t),a=Object.keys(e);return s.length===a.length&&s.every((function(n){return M(t[n],e[n])}))}catch(u){return!1}}function D(t,e){for(var n=0;n<t.length;n++)if(M(t[n],e))return n;return-1}function F(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var $="data-server-rendered",U=["component","directive","filter"],z=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],q={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:j,isReservedAttr:j,isUnknownElement:j,getTagNamespace:R,parsePlatformTagName:L,mustUseProp:j,async:!0,_lifecycleHooks:z},V=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function H(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function W(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var B=new RegExp("[^"+V.source+".$_\\d]");function G(t){if(!B.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var K,Y="__proto__"in{},X="undefined"!==typeof window,J="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Q=J&&WXEnvironment.platform.toLowerCase(),Z=X&&window.navigator.userAgent.toLowerCase(),tt=Z&&/msie|trident/.test(Z),et=Z&&Z.indexOf("msie 9.0")>0,nt=Z&&Z.indexOf("edge/")>0,rt=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===Q),it=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/)),ot={}.watch,st=!1;if(X)try{var at={};Object.defineProperty(at,"passive",{get:function(){st=!0}}),window.addEventListener("test-passive",null,at)}catch(Ts){}var ct=function(){return void 0===K&&(K=!X&&!J&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),K},ut=X&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function lt(t){return"function"===typeof t&&/native code/.test(t.toString())}var ht,dt="undefined"!==typeof Symbol&&lt(Symbol)&&"undefined"!==typeof Reflect&&lt(Reflect.ownKeys);ht="undefined"!==typeof Set&&lt(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ft=R,pt=0,mt=function(){this.id=pt++,this.subs=[]};mt.prototype.addSub=function(t){this.subs.push(t)},mt.prototype.removeSub=function(t){y(this.subs,t)},mt.prototype.depend=function(){mt.target&&mt.target.addDep(this)},mt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},mt.target=null;var vt=[];function gt(t){vt.push(t),mt.target=t}function yt(){vt.pop(),mt.target=vt[vt.length-1]}var _t=function(t,e,n,r,i,o,s,a){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=s,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},bt={child:{configurable:!0}};bt.child.get=function(){return this.componentInstance},Object.defineProperties(_t.prototype,bt);var wt=function(t){void 0===t&&(t="");var e=new _t;return e.text=t,e.isComment=!0,e};function Ct(t){return new _t(void 0,void 0,void 0,String(t))}function It(t){var e=new _t(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var Tt=Array.prototype,kt=Object.create(Tt),Ot=["push","pop","shift","unshift","splice","sort","reverse"];Ot.forEach((function(t){var e=Tt[t];W(kt,t,(function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var i,o=e.apply(this,n),s=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&s.observeArray(i),s.dep.notify(),o}))}));var Et=Object.getOwnPropertyNames(kt),xt=!0;function St(t){xt=t}var Pt=function(t){this.value=t,this.dep=new mt,this.vmCount=0,W(t,"__ob__",this),Array.isArray(t)?(Y?Nt(t,kt):At(t,kt,Et),this.observeArray(t)):this.walk(t)};function Nt(t,e){t.__proto__=e}function At(t,e,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];W(t,o,e[o])}}function Rt(t,e){var n;if(c(t)&&!(t instanceof _t))return b(t,"__ob__")&&t.__ob__ instanceof Pt?n=t.__ob__:xt&&!ct()&&(Array.isArray(t)||l(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Pt(t)),e&&n&&n.vmCount++,n}function jt(t,e,n,r,i){var o=new mt,s=Object.getOwnPropertyDescriptor(t,e);if(!s||!1!==s.configurable){var a=s&&s.get,c=s&&s.set;a&&!c||2!==arguments.length||(n=t[e]);var u=!i&&Rt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=a?a.call(t):n;return mt.target&&(o.depend(),u&&(u.dep.depend(),Array.isArray(e)&&Dt(e))),e},set:function(e){var r=a?a.call(t):n;e===r||e!==e&&r!==r||a&&!c||(c?c.call(t,e):n=e,u=!i&&Rt(e),o.notify())}})}}function Lt(t,e,n){if(Array.isArray(t)&&d(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(jt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Mt(t,e){if(Array.isArray(t)&&d(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||b(t,e)&&(delete t[e],n&&n.dep.notify())}}function Dt(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Dt(e)}Pt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)jt(t,e[n])},Pt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Rt(t[e])};var Ft=q.optionMergeStrategies;function $t(t,e){if(!e)return t;for(var n,r,i,o=dt?Reflect.ownKeys(e):Object.keys(e),s=0;s<o.length;s++)n=o[s],"__ob__"!==n&&(r=t[n],i=e[n],b(t,n)?r!==i&&l(r)&&l(i)&&$t(r,i):Lt(t,n,i));return t}function Ut(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,i="function"===typeof t?t.call(n,n):t;return r?$t(r,i):i}:e?t?function(){return $t("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function zt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?qt(n):n}function qt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Vt(t,e,n,r){var i=Object.create(t||null);return e?N(i,e):i}Ft.data=function(t,e,n){return n?Ut(t,e,n):e&&"function"!==typeof e?t:Ut(t,e)},z.forEach((function(t){Ft[t]=zt})),U.forEach((function(t){Ft[t+"s"]=Vt})),Ft.watch=function(t,e,n,r){if(t===ot&&(t=void 0),e===ot&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var i={};for(var o in N(i,t),e){var s=i[o],a=e[o];s&&!Array.isArray(s)&&(s=[s]),i[o]=s?s.concat(a):Array.isArray(a)?a:[a]}return i},Ft.props=Ft.methods=Ft.inject=Ft.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return N(i,t),e&&N(i,e),i},Ft.provide=Ut;var Ht=function(t,e){return void 0===e?t:e};function Wt(t,e){var n=t.props;if(n){var r,i,o,s={};if(Array.isArray(n)){r=n.length;while(r--)i=n[r],"string"===typeof i&&(o=I(i),s[o]={type:null})}else if(l(n))for(var a in n)i=n[a],o=I(a),s[o]=l(i)?i:{type:i};else 0;t.props=s}}function Bt(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(l(n))for(var o in n){var s=n[o];r[o]=l(s)?N({from:o},s):{from:s}}else 0}}function Gt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Kt(t,e,n){if("function"===typeof e&&(e=e.options),Wt(e,n),Bt(e,n),Gt(e),!e._base&&(e.extends&&(t=Kt(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=Kt(t,e.mixins[r],n);var o,s={};for(o in t)a(o);for(o in e)b(t,o)||a(o);function a(r){var i=Ft[r]||Ht;s[r]=i(t[r],e[r],n,r)}return s}function Yt(t,e,n,r){if("string"===typeof n){var i=t[e];if(b(i,n))return i[n];var o=I(n);if(b(i,o))return i[o];var s=T(o);if(b(i,s))return i[s];var a=i[n]||i[o]||i[s];return a}}function Xt(t,e,n,r){var i=e[t],o=!b(n,t),s=n[t],a=ee(Boolean,i.type);if(a>-1)if(o&&!b(i,"default"))s=!1;else if(""===s||s===O(t)){var c=ee(String,i.type);(c<0||a<c)&&(s=!0)}if(void 0===s){s=Jt(r,i,t);var u=xt;St(!0),Rt(s),St(u)}return s}function Jt(t,e,n){if(b(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Zt(e.type)?r.call(t):r}}var Qt=/^\s*function (\w+)/;function Zt(t){var e=t&&t.toString().match(Qt);return e?e[1]:""}function te(t,e){return Zt(t)===Zt(e)}function ee(t,e){if(!Array.isArray(e))return te(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(te(e[n],t))return n;return-1}function ne(t,e,n){gt();try{if(e){var r=e;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{var s=!1===i[o].call(r,t,e,n);if(s)return}catch(Ts){ie(Ts,r,"errorCaptured hook")}}}ie(t,e,n)}finally{yt()}}function re(t,e,n,r,i){var o;try{o=n?t.apply(e,n):t.call(e),o&&!o._isVue&&f(o)&&!o._handled&&(o.catch((function(t){return ne(t,r,i+" (Promise/async)")})),o._handled=!0)}catch(Ts){ne(Ts,r,i)}return o}function ie(t,e,n){if(q.errorHandler)try{return q.errorHandler.call(null,t,e,n)}catch(Ts){Ts!==t&&oe(Ts,null,"config.errorHandler")}oe(t,e,n)}function oe(t,e,n){if(!X&&!J||"undefined"===typeof console)throw t;console.error(t)}var se,ae=!1,ce=[],ue=!1;function le(){ue=!1;var t=ce.slice(0);ce.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&lt(Promise)){var he=Promise.resolve();se=function(){he.then(le),rt&&setTimeout(R)},ae=!0}else if(tt||"undefined"===typeof MutationObserver||!lt(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())se="undefined"!==typeof setImmediate&&lt(setImmediate)?function(){setImmediate(le)}:function(){setTimeout(le,0)};else{var de=1,fe=new MutationObserver(le),pe=document.createTextNode(String(de));fe.observe(pe,{characterData:!0}),se=function(){de=(de+1)%2,pe.data=String(de)},ae=!0}function me(t,e){var n;if(ce.push((function(){if(t)try{t.call(e)}catch(Ts){ne(Ts,e,"nextTick")}else n&&n(e)})),ue||(ue=!0,se()),!t&&"undefined"!==typeof Promise)return new Promise((function(t){n=t}))}var ve=new ht;function ge(t){ye(t,ve),ve.clear()}function ye(t,e){var n,r,i=Array.isArray(t);if(!(!i&&!c(t)||Object.isFrozen(t)||t instanceof _t)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(i){n=t.length;while(n--)ye(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)ye(t[r[n]],e)}}}var _e=w((function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}}));function be(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return re(r,null,arguments,e,"v-on handler");for(var i=r.slice(),o=0;o<i.length;o++)re(i[o],null,t,e,"v-on handler")}return n.fns=t,n}function we(t,e,n,i,s,a){var c,u,l,h;for(c in t)u=t[c],l=e[c],h=_e(c),r(u)||(r(l)?(r(u.fns)&&(u=t[c]=be(u,a)),o(h.once)&&(u=t[c]=s(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,t[c]=l));for(c in e)r(t[c])&&(h=_e(c),i(h.name,e[c],h.capture))}function Ce(t,e,n){var s;t instanceof _t&&(t=t.data.hook||(t.data.hook={}));var a=t[e];function c(){n.apply(this,arguments),y(s.fns,c)}r(a)?s=be([c]):i(a.fns)&&o(a.merged)?(s=a,s.fns.push(c)):s=be([a,c]),s.merged=!0,t[e]=s}function Ie(t,e,n){var o=e.options.props;if(!r(o)){var s={},a=t.attrs,c=t.props;if(i(a)||i(c))for(var u in o){var l=O(u);Te(s,c,u,l,!0)||Te(s,a,u,l,!1)}return s}}function Te(t,e,n,r,o){if(i(e)){if(b(e,n))return t[n]=e[n],o||delete e[n],!0;if(b(e,r))return t[n]=e[r],o||delete e[r],!0}return!1}function ke(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function Oe(t){return a(t)?[Ct(t)]:Array.isArray(t)?xe(t):void 0}function Ee(t){return i(t)&&i(t.text)&&s(t.isComment)}function xe(t,e){var n,s,c,u,l=[];for(n=0;n<t.length;n++)s=t[n],r(s)||"boolean"===typeof s||(c=l.length-1,u=l[c],Array.isArray(s)?s.length>0&&(s=xe(s,(e||"")+"_"+n),Ee(s[0])&&Ee(u)&&(l[c]=Ct(u.text+s[0].text),s.shift()),l.push.apply(l,s)):a(s)?Ee(u)?l[c]=Ct(u.text+s):""!==s&&l.push(Ct(s)):Ee(s)&&Ee(u)?l[c]=Ct(u.text+s.text):(o(t._isVList)&&i(s.tag)&&r(s.key)&&i(e)&&(s.key="__vlist"+e+"_"+n+"__"),l.push(s)));return l}function Se(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Pe(t){var e=Ne(t.$options.inject,t);e&&(St(!1),Object.keys(e).forEach((function(n){jt(t,n,e[n])})),St(!0))}function Ne(t,e){if(t){for(var n=Object.create(null),r=dt?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){var s=t[o].from,a=e;while(a){if(a._provided&&b(a._provided,s)){n[o]=a._provided[s];break}a=a.$parent}if(!a)if("default"in t[o]){var c=t[o].default;n[o]="function"===typeof c?c.call(e):c}else 0}}return n}}function Ae(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var o=t[r],s=o.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,o.context!==e&&o.fnContext!==e||!s||null==s.slot)(n.default||(n.default=[])).push(o);else{var a=s.slot,c=n[a]||(n[a]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every(Re)&&delete n[u];return n}function Re(t){return t.isComment&&!t.asyncFactory||" "===t.text}function je(t){return t.isComment&&t.asyncFactory}function Le(t,e,r){var i,o=Object.keys(e).length>0,s=t?!!t.$stable:!o,a=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(s&&r&&r!==n&&a===r.$key&&!o&&!r.$hasNormal)return r;for(var c in i={},t)t[c]&&"$"!==c[0]&&(i[c]=Me(e,c,t[c]))}else i={};for(var u in e)u in i||(i[u]=De(e,u));return t&&Object.isExtensible(t)&&(t._normalized=i),W(i,"$stable",s),W(i,"$key",a),W(i,"$hasNormal",o),i}function Me(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:Oe(t);var e=t&&t[0];return t&&(!e||1===t.length&&e.isComment&&!je(e))?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function De(t,e){return function(){return t[e]}}function Fe(t,e){var n,r,o,s,a;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(c(t))if(dt&&t[Symbol.iterator]){n=[];var u=t[Symbol.iterator](),l=u.next();while(!l.done)n.push(e(l.value,n.length)),l=u.next()}else for(s=Object.keys(t),n=new Array(s.length),r=0,o=s.length;r<o;r++)a=s[r],n[r]=e(t[a],a,r);return i(n)||(n=[]),n._isVList=!0,n}function $e(t,e,n,r){var i,o=this.$scopedSlots[t];o?(n=n||{},r&&(n=N(N({},r),n)),i=o(n)||("function"===typeof e?e():e)):i=this.$slots[t]||("function"===typeof e?e():e);var s=n&&n.slot;return s?this.$createElement("template",{slot:s},i):i}function Ue(t){return Yt(this.$options,"filters",t,!0)||L}function ze(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function qe(t,e,n,r,i){var o=q.keyCodes[e]||n;return i&&r&&!q.keyCodes[e]?ze(i,r):o?ze(o,t):r?O(r)!==e:void 0===t}function Ve(t,e,n,r,i){if(n)if(c(n)){var o;Array.isArray(n)&&(n=A(n));var s=function(s){if("class"===s||"style"===s||g(s))o=t;else{var a=t.attrs&&t.attrs.type;o=r||q.mustUseProp(e,a,s)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=I(s),u=O(s);if(!(c in o)&&!(u in o)&&(o[s]=n[s],i)){var l=t.on||(t.on={});l["update:"+s]=function(t){n[s]=t}}};for(var a in n)s(a)}else;return t}function He(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e||(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Be(r,"__static__"+t,!1)),r}function We(t,e,n){return Be(t,"__once__"+e+(n?"_"+n:""),!0),t}function Be(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Ge(t[r],e+"_"+r,n);else Ge(t,e,n)}function Ge(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Ke(t,e){if(e)if(l(e)){var n=t.on=t.on?N({},t.on):{};for(var r in e){var i=n[r],o=e[r];n[r]=i?[].concat(i,o):o}}else;return t}function Ye(t,e,n,r){e=e||{$stable:!n};for(var i=0;i<t.length;i++){var o=t[i];Array.isArray(o)?Ye(o,e,n):o&&(o.proxy&&(o.fn.proxy=!0),e[o.key]=o.fn)}return r&&(e.$key=r),e}function Xe(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Je(t,e){return"string"===typeof t?e+t:t}function Qe(t){t._o=We,t._n=m,t._s=p,t._l=Fe,t._t=$e,t._q=M,t._i=D,t._m=He,t._f=Ue,t._k=qe,t._b=Ve,t._v=Ct,t._e=wt,t._u=Ye,t._g=Ke,t._d=Xe,t._p=Je}function Ze(t,e,r,i,s){var a,c=this,u=s.options;b(i,"_uid")?(a=Object.create(i),a._original=i):(a=i,i=i._original);var l=o(u._compiled),h=!l;this.data=t,this.props=e,this.children=r,this.parent=i,this.listeners=t.on||n,this.injections=Ne(u.inject,i),this.slots=function(){return c.$slots||Le(t.scopedSlots,c.$slots=Ae(r,i)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Le(t.scopedSlots,this.slots())}}),l&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=Le(t.scopedSlots,this.$slots)),u._scopeId?this._c=function(t,e,n,r){var o=fn(a,t,e,n,r,h);return o&&!Array.isArray(o)&&(o.fnScopeId=u._scopeId,o.fnContext=i),o}:this._c=function(t,e,n,r){return fn(a,t,e,n,r,h)}}function tn(t,e,r,o,s){var a=t.options,c={},u=a.props;if(i(u))for(var l in u)c[l]=Xt(l,u,e||n);else i(r.attrs)&&nn(c,r.attrs),i(r.props)&&nn(c,r.props);var h=new Ze(r,c,s,o,t),d=a.render.call(null,h._c,h);if(d instanceof _t)return en(d,r,h.parent,a,h);if(Array.isArray(d)){for(var f=Oe(d)||[],p=new Array(f.length),m=0;m<f.length;m++)p[m]=en(f[m],r,h.parent,a,h);return p}}function en(t,e,n,r,i){var o=It(t);return o.fnContext=n,o.fnOptions=r,e.slot&&((o.data||(o.data={})).slot=e.slot),o}function nn(t,e){for(var n in e)t[I(n)]=e[n]}Qe(Ze.prototype);var rn={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;rn.prepatch(n,n)}else{var r=t.componentInstance=an(t,Nn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;Mn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Un(n,"mounted")),t.data.keepAlive&&(e._isMounted?Zn(n):Fn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?$n(e,!0):e.$destroy())}},on=Object.keys(rn);function sn(t,e,n,s,a){if(!r(t)){var u=n.$options._base;if(c(t)&&(t=u.extend(t)),"function"===typeof t){var l;if(r(t.cid)&&(l=t,t=In(l,u),void 0===t))return Cn(l,e,n,s,a);e=e||{},Cr(t),i(e.model)&&ln(t.options,e);var h=Ie(e,t,a);if(o(t.options.functional))return tn(t,h,e,n,s);var d=e.on;if(e.on=e.nativeOn,o(t.options.abstract)){var f=e.slot;e={},f&&(e.slot=f)}cn(e);var p=t.options.name||a,m=new _t("vue-component-"+t.cid+(p?"-"+p:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:h,listeners:d,tag:a,children:s},l);return m}}}function an(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return i(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function cn(t){for(var e=t.hook||(t.hook={}),n=0;n<on.length;n++){var r=on[n],i=e[r],o=rn[r];i===o||i&&i._merged||(e[r]=i?un(o,i):o)}}function un(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function ln(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var o=e.on||(e.on={}),s=o[r],a=e.model.callback;i(s)?(Array.isArray(s)?-1===s.indexOf(a):s!==a)&&(o[r]=[a].concat(s)):o[r]=a}var hn=1,dn=2;function fn(t,e,n,r,i,s){return(Array.isArray(n)||a(n))&&(i=r,r=n,n=void 0),o(s)&&(i=dn),pn(t,e,n,r,i)}function pn(t,e,n,r,o){if(i(n)&&i(n.__ob__))return wt();if(i(n)&&i(n.is)&&(e=n.is),!e)return wt();var s,a,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===dn?r=Oe(r):o===hn&&(r=ke(r)),"string"===typeof e)?(a=t.$vnode&&t.$vnode.ns||q.getTagNamespace(e),s=q.isReservedTag(e)?new _t(q.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!i(c=Yt(t.$options,"components",e))?new _t(e,n,r,void 0,void 0,t):sn(c,n,t,r,e)):s=sn(e,n,t,r);return Array.isArray(s)?s:i(s)?(i(a)&&mn(s,a),i(n)&&vn(n),s):wt()}function mn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),i(t.children))for(var s=0,a=t.children.length;s<a;s++){var c=t.children[s];i(c.tag)&&(r(c.ns)||o(n)&&"svg"!==c.tag)&&mn(c,e,n)}}function vn(t){c(t.style)&&ge(t.style),c(t.class)&&ge(t.class)}function gn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,i=r&&r.context;t.$slots=Ae(e._renderChildren,i),t.$scopedSlots=n,t._c=function(e,n,r,i){return fn(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return fn(t,e,n,r,i,!0)};var o=r&&r.data;jt(t,"$attrs",o&&o.attrs||n,null,!0),jt(t,"$listeners",e._parentListeners||n,null,!0)}var yn,_n=null;function bn(t){Qe(t.prototype),t.prototype.$nextTick=function(t){return me(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,i=n._parentVnode;i&&(e.$scopedSlots=Le(i.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=i;try{_n=e,t=r.call(e._renderProxy,e.$createElement)}catch(Ts){ne(Ts,e,"render"),t=e._vnode}finally{_n=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof _t||(t=wt()),t.parent=i,t}}function wn(t,e){return(t.__esModule||dt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),c(t)?e.extend(t):t}function Cn(t,e,n,r,i){var o=wt();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:r,tag:i},o}function In(t,e){if(o(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;var n=_n;if(n&&i(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),o(t.loading)&&i(t.loadingComp))return t.loadingComp;if(n&&!i(t.owners)){var s=t.owners=[n],a=!0,u=null,l=null;n.$on("hook:destroyed",(function(){return y(s,n)}));var h=function(t){for(var e=0,n=s.length;e<n;e++)s[e].$forceUpdate();t&&(s.length=0,null!==u&&(clearTimeout(u),u=null),null!==l&&(clearTimeout(l),l=null))},d=F((function(n){t.resolved=wn(n,e),a?s.length=0:h(!0)})),p=F((function(e){i(t.errorComp)&&(t.error=!0,h(!0))})),m=t(d,p);return c(m)&&(f(m)?r(t.resolved)&&m.then(d,p):f(m.component)&&(m.component.then(d,p),i(m.error)&&(t.errorComp=wn(m.error,e)),i(m.loading)&&(t.loadingComp=wn(m.loading,e),0===m.delay?t.loading=!0:u=setTimeout((function(){u=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,h(!1))}),m.delay||200)),i(m.timeout)&&(l=setTimeout((function(){l=null,r(t.resolved)&&p(null)}),m.timeout)))),a=!1,t.loading?t.loadingComp:t.resolved}}function Tn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&(i(n.componentOptions)||je(n)))return n}}function kn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&Sn(t,e)}function On(t,e){yn.$on(t,e)}function En(t,e){yn.$off(t,e)}function xn(t,e){var n=yn;return function r(){var i=e.apply(null,arguments);null!==i&&n.$off(t,r)}}function Sn(t,e,n){yn=t,we(e,n||{},On,En,xn,t),yn=void 0}function Pn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var i=0,o=t.length;i<o;i++)r.$on(t[i],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,i=t.length;r<i;r++)n.$off(t[r],e);return n}var o,s=n._events[t];if(!s)return n;if(!e)return n._events[t]=null,n;var a=s.length;while(a--)if(o=s[a],o===e||o.fn===e){s.splice(a,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?P(n):n;for(var r=P(arguments,1),i='event handler for "'+t+'"',o=0,s=n.length;o<s;o++)re(n[o],e,r,e,i)}return e}}var Nn=null;function An(t){var e=Nn;return Nn=t,function(){Nn=e}}function Rn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function jn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,o=An(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Un(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||y(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Un(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Ln(t,e,n){var r;return t.$el=e,t.$options.render||(t.$options.render=wt),Un(t,"beforeMount"),r=function(){t._update(t._render(),n)},new rr(t,r,R,{before:function(){t._isMounted&&!t._isDestroyed&&Un(t,"beforeUpdate")}},!0),n=!1,null==t.$vnode&&(t._isMounted=!0,Un(t,"mounted")),t}function Mn(t,e,r,i,o){var s=i.data.scopedSlots,a=t.$scopedSlots,c=!!(s&&!s.$stable||a!==n&&!a.$stable||s&&t.$scopedSlots.$key!==s.$key||!s&&t.$scopedSlots.$key),u=!!(o||t.$options._renderChildren||c);if(t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=o,t.$attrs=i.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){St(!1);for(var l=t._props,h=t.$options._propKeys||[],d=0;d<h.length;d++){var f=h[d],p=t.$options.props;l[f]=Xt(f,p,e,t)}St(!0),t.$options.propsData=e}r=r||n;var m=t.$options._parentListeners;t.$options._parentListeners=r,Sn(t,r,m),u&&(t.$slots=Ae(o,i.context),t.$forceUpdate())}function Dn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Fn(t,e){if(e){if(t._directInactive=!1,Dn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Fn(t.$children[n]);Un(t,"activated")}}function $n(t,e){if((!e||(t._directInactive=!0,!Dn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)$n(t.$children[n]);Un(t,"deactivated")}}function Un(t,e){gt();var n=t.$options[e],r=e+" hook";if(n)for(var i=0,o=n.length;i<o;i++)re(n[i],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),yt()}var zn=[],qn=[],Vn={},Hn=!1,Wn=!1,Bn=0;function Gn(){Bn=zn.length=qn.length=0,Vn={},Hn=Wn=!1}var Kn=0,Yn=Date.now;if(X&&!tt){var Xn=window.performance;Xn&&"function"===typeof Xn.now&&Yn()>document.createEvent("Event").timeStamp&&(Yn=function(){return Xn.now()})}function Jn(){var t,e;for(Kn=Yn(),Wn=!0,zn.sort((function(t,e){return t.id-e.id})),Bn=0;Bn<zn.length;Bn++)t=zn[Bn],t.before&&t.before(),e=t.id,Vn[e]=null,t.run();var n=qn.slice(),r=zn.slice();Gn(),tr(n),Qn(r),ut&&q.devtools&&ut.emit("flush")}function Qn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Un(r,"updated")}}function Zn(t){t._inactive=!1,qn.push(t)}function tr(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Fn(t[e],!0)}function er(t){var e=t.id;if(null==Vn[e]){if(Vn[e]=!0,Wn){var n=zn.length-1;while(n>Bn&&zn[n].id>t.id)n--;zn.splice(n+1,0,t)}else zn.push(t);Hn||(Hn=!0,me(Jn))}}var nr=0,rr=function(t,e,n,r,i){this.vm=t,i&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++nr,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ht,this.newDepIds=new ht,this.expression="","function"===typeof e?this.getter=e:(this.getter=G(e),this.getter||(this.getter=R)),this.value=this.lazy?void 0:this.get()};rr.prototype.get=function(){var t;gt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(Ts){if(!this.user)throw Ts;ne(Ts,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ge(t),yt(),this.cleanupDeps()}return t},rr.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},rr.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},rr.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():er(this)},rr.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||c(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'+this.expression+'"';re(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},rr.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},rr.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},rr.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var ir={enumerable:!0,configurable:!0,get:R,set:R};function or(t,e,n){ir.get=function(){return this[e][n]},ir.set=function(t){this[e][n]=t},Object.defineProperty(t,n,ir)}function sr(t){t._watchers=[];var e=t.$options;e.props&&ar(t,e.props),e.methods&&mr(t,e.methods),e.data?cr(t):Rt(t._data={},!0),e.computed&&hr(t,e.computed),e.watch&&e.watch!==ot&&vr(t,e.watch)}function ar(t,e){var n=t.$options.propsData||{},r=t._props={},i=t.$options._propKeys=[],o=!t.$parent;o||St(!1);var s=function(o){i.push(o);var s=Xt(o,e,n,t);jt(r,o,s),o in t||or(t,"_props",o)};for(var a in e)s(a);St(!0)}function cr(t){var e=t.$options.data;e=t._data="function"===typeof e?ur(e,t):e||{},l(e)||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);while(i--){var o=n[i];0,r&&b(r,o)||H(o)||or(t,"_data",o)}Rt(e,!0)}function ur(t,e){gt();try{return t.call(e,e)}catch(Ts){return ne(Ts,e,"data()"),{}}finally{yt()}}var lr={lazy:!0};function hr(t,e){var n=t._computedWatchers=Object.create(null),r=ct();for(var i in e){var o=e[i],s="function"===typeof o?o:o.get;0,r||(n[i]=new rr(t,s||R,R,lr)),i in t||dr(t,i,o)}}function dr(t,e,n){var r=!ct();"function"===typeof n?(ir.get=r?fr(e):pr(n),ir.set=R):(ir.get=n.get?r&&!1!==n.cache?fr(e):pr(n.get):R,ir.set=n.set||R),Object.defineProperty(t,e,ir)}function fr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),mt.target&&e.depend(),e.value}}function pr(t){return function(){return t.call(this,this)}}function mr(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?R:S(e[n],t)}function vr(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)gr(t,n,r[i]);else gr(t,n,r)}}function gr(t,e,n,r){return l(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function yr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Lt,t.prototype.$delete=Mt,t.prototype.$watch=function(t,e,n){var r=this;if(l(e))return gr(r,t,e,n);n=n||{},n.user=!0;var i=new rr(r,t,e,n);if(n.immediate){var o='callback for immediate watcher "'+i.expression+'"';gt(),re(e,r,[i.value],r,o),yt()}return function(){i.teardown()}}}var _r=0;function br(t){t.prototype._init=function(t){var e=this;e._uid=_r++,e._isVue=!0,t&&t._isComponent?wr(e,t):e.$options=Kt(Cr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Rn(e),kn(e),gn(e),Un(e,"beforeCreate"),Pe(e),sr(e),Se(e),Un(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function wr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Cr(t){var e=t.options;if(t.super){var n=Cr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var i=Ir(t);i&&N(t.extendOptions,i),e=t.options=Kt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Ir(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}function Tr(t){this._init(t)}function kr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=P(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function Or(t){t.mixin=function(t){return this.options=Kt(this.options,t),this}}function Er(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var o=t.name||n.options.name;var s=function(t){this._init(t)};return s.prototype=Object.create(n.prototype),s.prototype.constructor=s,s.cid=e++,s.options=Kt(n.options,t),s["super"]=n,s.options.props&&xr(s),s.options.computed&&Sr(s),s.extend=n.extend,s.mixin=n.mixin,s.use=n.use,U.forEach((function(t){s[t]=n[t]})),o&&(s.options.components[o]=s),s.superOptions=n.options,s.extendOptions=t,s.sealedOptions=N({},s.options),i[r]=s,s}}function xr(t){var e=t.options.props;for(var n in e)or(t.prototype,"_props",n)}function Sr(t){var e=t.options.computed;for(var n in e)dr(t.prototype,n,e[n])}function Pr(t){U.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&l(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}function Nr(t){return t&&(t.Ctor.options.name||t.tag)}function Ar(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!h(t)&&t.test(e)}function Rr(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var o in n){var s=n[o];if(s){var a=s.name;a&&!e(a)&&jr(n,o,r,i)}}}function jr(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,y(n,e)}br(Tr),yr(Tr),Pn(Tr),jn(Tr),bn(Tr);var Lr=[String,RegExp,Array],Mr={name:"keep-alive",abstract:!0,props:{include:Lr,exclude:Lr,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,r=t.vnodeToCache,i=t.keyToCache;if(r){var o=r.tag,s=r.componentInstance,a=r.componentOptions;e[i]={name:Nr(a),tag:o,componentInstance:s},n.push(i),this.max&&n.length>parseInt(this.max)&&jr(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)jr(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){Rr(t,(function(t){return Ar(e,t)}))})),this.$watch("exclude",(function(e){Rr(t,(function(t){return!Ar(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=Tn(t),n=e&&e.componentOptions;if(n){var r=Nr(n),i=this,o=i.include,s=i.exclude;if(o&&(!r||!Ar(o,r))||s&&r&&Ar(s,r))return e;var a=this,c=a.cache,u=a.keys,l=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;c[l]?(e.componentInstance=c[l].componentInstance,y(u,l),u.push(l)):(this.vnodeToCache=e,this.keyToCache=l),e.data.keepAlive=!0}return e||t&&t[0]}},Dr={KeepAlive:Mr};function Fr(t){var e={get:function(){return q}};Object.defineProperty(t,"config",e),t.util={warn:ft,extend:N,mergeOptions:Kt,defineReactive:jt},t.set=Lt,t.delete=Mt,t.nextTick=me,t.observable=function(t){return Rt(t),t},t.options=Object.create(null),U.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,N(t.options.components,Dr),kr(t),Or(t),Er(t),Pr(t)}Fr(Tr),Object.defineProperty(Tr.prototype,"$isServer",{get:ct}),Object.defineProperty(Tr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Tr,"FunctionalRenderContext",{value:Ze}),Tr.version="2.6.14";var $r=v("style,class"),Ur=v("input,textarea,option,select,progress"),zr=function(t,e,n){return"value"===n&&Ur(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},qr=v("contenteditable,draggable,spellcheck"),Vr=v("events,caret,typing,plaintext-only"),Hr=function(t,e){return Yr(e)||"false"===e?"false":"contenteditable"===t&&Vr(e)?e:"true"},Wr=v("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Br="http://www.w3.org/1999/xlink",Gr=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},Kr=function(t){return Gr(t)?t.slice(6,t.length):""},Yr=function(t){return null==t||!1===t};function Xr(t){var e=t.data,n=t,r=t;while(i(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(e=Jr(r.data,e));while(i(n=n.parent))n&&n.data&&(e=Jr(e,n.data));return Qr(e.staticClass,e.class)}function Jr(t,e){return{staticClass:Zr(t.staticClass,e.staticClass),class:i(t.class)?[t.class,e.class]:e.class}}function Qr(t,e){return i(t)||i(e)?Zr(t,ti(e)):""}function Zr(t,e){return t?e?t+" "+e:t:e||""}function ti(t){return Array.isArray(t)?ei(t):c(t)?ni(t):"string"===typeof t?t:""}function ei(t){for(var e,n="",r=0,o=t.length;r<o;r++)i(e=ti(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function ni(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var ri={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},ii=v("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),oi=v("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),si=function(t){return ii(t)||oi(t)};function ai(t){return oi(t)?"svg":"math"===t?"math":void 0}var ci=Object.create(null);function ui(t){if(!X)return!0;if(si(t))return!1;if(t=t.toLowerCase(),null!=ci[t])return ci[t];var e=document.createElement(t);return t.indexOf("-")>-1?ci[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:ci[t]=/HTMLUnknownElement/.test(e.toString())}var li=v("text,number,password,search,email,tel,url");function hi(t){if("string"===typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function di(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function fi(t,e){return document.createElementNS(ri[t],e)}function pi(t){return document.createTextNode(t)}function mi(t){return document.createComment(t)}function vi(t,e,n){t.insertBefore(e,n)}function gi(t,e){t.removeChild(e)}function yi(t,e){t.appendChild(e)}function _i(t){return t.parentNode}function bi(t){return t.nextSibling}function wi(t){return t.tagName}function Ci(t,e){t.textContent=e}function Ii(t,e){t.setAttribute(e,"")}var Ti=Object.freeze({createElement:di,createElementNS:fi,createTextNode:pi,createComment:mi,insertBefore:vi,removeChild:gi,appendChild:yi,parentNode:_i,nextSibling:bi,tagName:wi,setTextContent:Ci,setStyleScope:Ii}),ki={create:function(t,e){Oi(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Oi(t,!0),Oi(e))},destroy:function(t){Oi(t,!0)}};function Oi(t,e){var n=t.data.ref;if(i(n)){var r=t.context,o=t.componentInstance||t.elm,s=r.$refs;e?Array.isArray(s[n])?y(s[n],o):s[n]===o&&(s[n]=void 0):t.data.refInFor?Array.isArray(s[n])?s[n].indexOf(o)<0&&s[n].push(o):s[n]=[o]:s[n]=o}}var Ei=new _t("",{},[]),xi=["create","activate","update","remove","destroy"];function Si(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&i(t.data)===i(e.data)&&Pi(t,e)||o(t.isAsyncPlaceholder)&&r(e.asyncFactory.error))}function Pi(t,e){if("input"!==t.tag)return!0;var n,r=i(n=t.data)&&i(n=n.attrs)&&n.type,o=i(n=e.data)&&i(n=n.attrs)&&n.type;return r===o||li(r)&&li(o)}function Ni(t,e,n){var r,o,s={};for(r=e;r<=n;++r)o=t[r].key,i(o)&&(s[o]=r);return s}function Ai(t){var e,n,s={},c=t.modules,u=t.nodeOps;for(e=0;e<xi.length;++e)for(s[xi[e]]=[],n=0;n<c.length;++n)i(c[n][xi[e]])&&s[xi[e]].push(c[n][xi[e]]);function l(t){return new _t(u.tagName(t).toLowerCase(),{},[],void 0,t)}function h(t,e){function n(){0===--n.listeners&&d(t)}return n.listeners=e,n}function d(t){var e=u.parentNode(t);i(e)&&u.removeChild(e,t)}function f(t,e,n,r,s,a,c){if(i(t.elm)&&i(a)&&(t=a[c]=It(t)),t.isRootInsert=!s,!p(t,e,n,r)){var l=t.data,h=t.children,d=t.tag;i(d)?(t.elm=t.ns?u.createElementNS(t.ns,d):u.createElement(d,t),C(t),_(t,h,e),i(l)&&w(t,e),y(n,t.elm,r)):o(t.isComment)?(t.elm=u.createComment(t.text),y(n,t.elm,r)):(t.elm=u.createTextNode(t.text),y(n,t.elm,r))}}function p(t,e,n,r){var s=t.data;if(i(s)){var a=i(t.componentInstance)&&s.keepAlive;if(i(s=s.hook)&&i(s=s.init)&&s(t,!1),i(t.componentInstance))return m(t,e),y(n,t.elm,r),o(a)&&g(t,e,n,r),!0}}function m(t,e){i(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,b(t)?(w(t,e),C(t)):(Oi(t),e.push(t))}function g(t,e,n,r){var o,a=t;while(a.componentInstance)if(a=a.componentInstance._vnode,i(o=a.data)&&i(o=o.transition)){for(o=0;o<s.activate.length;++o)s.activate[o](Ei,a);e.push(a);break}y(n,t.elm,r)}function y(t,e,n){i(t)&&(i(n)?u.parentNode(n)===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function _(t,e,n){if(Array.isArray(e)){0;for(var r=0;r<e.length;++r)f(e[r],n,t.elm,null,!0,e,r)}else a(t.text)&&u.appendChild(t.elm,u.createTextNode(String(t.text)))}function b(t){while(t.componentInstance)t=t.componentInstance._vnode;return i(t.tag)}function w(t,n){for(var r=0;r<s.create.length;++r)s.create[r](Ei,t);e=t.data.hook,i(e)&&(i(e.create)&&e.create(Ei,t),i(e.insert)&&n.push(t))}function C(t){var e;if(i(e=t.fnScopeId))u.setStyleScope(t.elm,e);else{var n=t;while(n)i(e=n.context)&&i(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e),n=n.parent}i(e=Nn)&&e!==t.context&&e!==t.fnContext&&i(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e)}function I(t,e,n,r,i,o){for(;r<=i;++r)f(n[r],o,t,e,!1,n,r)}function T(t){var e,n,r=t.data;if(i(r))for(i(e=r.hook)&&i(e=e.destroy)&&e(t),e=0;e<s.destroy.length;++e)s.destroy[e](t);if(i(e=t.children))for(n=0;n<t.children.length;++n)T(t.children[n])}function k(t,e,n){for(;e<=n;++e){var r=t[e];i(r)&&(i(r.tag)?(O(r),T(r)):d(r.elm))}}function O(t,e){if(i(e)||i(t.data)){var n,r=s.remove.length+1;for(i(e)?e.listeners+=r:e=h(t.elm,r),i(n=t.componentInstance)&&i(n=n._vnode)&&i(n.data)&&O(n,e),n=0;n<s.remove.length;++n)s.remove[n](t,e);i(n=t.data.hook)&&i(n=n.remove)?n(t,e):e()}else d(t.elm)}function E(t,e,n,o,s){var a,c,l,h,d=0,p=0,m=e.length-1,v=e[0],g=e[m],y=n.length-1,_=n[0],b=n[y],w=!s;while(d<=m&&p<=y)r(v)?v=e[++d]:r(g)?g=e[--m]:Si(v,_)?(S(v,_,o,n,p),v=e[++d],_=n[++p]):Si(g,b)?(S(g,b,o,n,y),g=e[--m],b=n[--y]):Si(v,b)?(S(v,b,o,n,y),w&&u.insertBefore(t,v.elm,u.nextSibling(g.elm)),v=e[++d],b=n[--y]):Si(g,_)?(S(g,_,o,n,p),w&&u.insertBefore(t,g.elm,v.elm),g=e[--m],_=n[++p]):(r(a)&&(a=Ni(e,d,m)),c=i(_.key)?a[_.key]:x(_,e,d,m),r(c)?f(_,o,t,v.elm,!1,n,p):(l=e[c],Si(l,_)?(S(l,_,o,n,p),e[c]=void 0,w&&u.insertBefore(t,l.elm,v.elm)):f(_,o,t,v.elm,!1,n,p)),_=n[++p]);d>m?(h=r(n[y+1])?null:n[y+1].elm,I(t,h,n,p,y,o)):p>y&&k(e,d,m)}function x(t,e,n,r){for(var o=n;o<r;o++){var s=e[o];if(i(s)&&Si(t,s))return o}}function S(t,e,n,a,c,l){if(t!==e){i(e.elm)&&i(a)&&(e=a[c]=It(e));var h=e.elm=t.elm;if(o(t.isAsyncPlaceholder))i(e.asyncFactory.resolved)?A(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(o(e.isStatic)&&o(t.isStatic)&&e.key===t.key&&(o(e.isCloned)||o(e.isOnce)))e.componentInstance=t.componentInstance;else{var d,f=e.data;i(f)&&i(d=f.hook)&&i(d=d.prepatch)&&d(t,e);var p=t.children,m=e.children;if(i(f)&&b(e)){for(d=0;d<s.update.length;++d)s.update[d](t,e);i(d=f.hook)&&i(d=d.update)&&d(t,e)}r(e.text)?i(p)&&i(m)?p!==m&&E(h,p,m,n,l):i(m)?(i(t.text)&&u.setTextContent(h,""),I(h,null,m,0,m.length-1,n)):i(p)?k(p,0,p.length-1):i(t.text)&&u.setTextContent(h,""):t.text!==e.text&&u.setTextContent(h,e.text),i(f)&&i(d=f.hook)&&i(d=d.postpatch)&&d(t,e)}}}function P(t,e,n){if(o(n)&&i(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var N=v("attrs,class,staticClass,staticStyle,key");function A(t,e,n,r){var s,a=e.tag,c=e.data,u=e.children;if(r=r||c&&c.pre,e.elm=t,o(e.isComment)&&i(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(i(c)&&(i(s=c.hook)&&i(s=s.init)&&s(e,!0),i(s=e.componentInstance)))return m(e,n),!0;if(i(a)){if(i(u))if(t.hasChildNodes())if(i(s=c)&&i(s=s.domProps)&&i(s=s.innerHTML)){if(s!==t.innerHTML)return!1}else{for(var l=!0,h=t.firstChild,d=0;d<u.length;d++){if(!h||!A(h,u[d],n,r)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else _(e,u,n);if(i(c)){var f=!1;for(var p in c)if(!N(p)){f=!0,w(e,n);break}!f&&c["class"]&&ge(c["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,a){if(!r(e)){var c=!1,h=[];if(r(t))c=!0,f(e,h);else{var d=i(t.nodeType);if(!d&&Si(t,e))S(t,e,h,null,null,a);else{if(d){if(1===t.nodeType&&t.hasAttribute($)&&(t.removeAttribute($),n=!0),o(n)&&A(t,e,h))return P(e,h,!0),t;t=l(t)}var p=t.elm,m=u.parentNode(p);if(f(e,h,p._leaveCb?null:m,u.nextSibling(p)),i(e.parent)){var v=e.parent,g=b(e);while(v){for(var y=0;y<s.destroy.length;++y)s.destroy[y](v);if(v.elm=e.elm,g){for(var _=0;_<s.create.length;++_)s.create[_](Ei,v);var w=v.data.hook.insert;if(w.merged)for(var C=1;C<w.fns.length;C++)w.fns[C]()}else Oi(v);v=v.parent}}i(m)?k([t],0,0):i(t.tag)&&T(t)}}return P(e,h,c),e.elm}i(t)&&T(t)}}var Ri={create:ji,update:ji,destroy:function(t){ji(t,Ei)}};function ji(t,e){(t.data.directives||e.data.directives)&&Li(t,e)}function Li(t,e){var n,r,i,o=t===Ei,s=e===Ei,a=Di(t.data.directives,t.context),c=Di(e.data.directives,e.context),u=[],l=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,$i(i,"update",e,t),i.def&&i.def.componentUpdated&&l.push(i)):($i(i,"bind",e,t),i.def&&i.def.inserted&&u.push(i));if(u.length){var h=function(){for(var n=0;n<u.length;n++)$i(u[n],"inserted",e,t)};o?Ce(e,"insert",h):h()}if(l.length&&Ce(e,"postpatch",(function(){for(var n=0;n<l.length;n++)$i(l[n],"componentUpdated",e,t)})),!o)for(n in a)c[n]||$i(a[n],"unbind",t,t,s)}var Mi=Object.create(null);function Di(t,e){var n,r,i=Object.create(null);if(!t)return i;for(n=0;n<t.length;n++)r=t[n],r.modifiers||(r.modifiers=Mi),i[Fi(r)]=r,r.def=Yt(e.$options,"directives",r.name,!0);return i}function Fi(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function $i(t,e,n,r,i){var o=t.def&&t.def[e];if(o)try{o(n.elm,t,n,r,i)}catch(Ts){ne(Ts,n.context,"directive "+t.name+" "+e+" hook")}}var Ui=[ki,Ri];function zi(t,e){var n=e.componentOptions;if((!i(n)||!1!==n.Ctor.options.inheritAttrs)&&(!r(t.data.attrs)||!r(e.data.attrs))){var o,s,a,c=e.elm,u=t.data.attrs||{},l=e.data.attrs||{};for(o in i(l.__ob__)&&(l=e.data.attrs=N({},l)),l)s=l[o],a=u[o],a!==s&&qi(c,o,s,e.data.pre);for(o in(tt||nt)&&l.value!==u.value&&qi(c,"value",l.value),u)r(l[o])&&(Gr(o)?c.removeAttributeNS(Br,Kr(o)):qr(o)||c.removeAttribute(o))}}function qi(t,e,n,r){r||t.tagName.indexOf("-")>-1?Vi(t,e,n):Wr(e)?Yr(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):qr(e)?t.setAttribute(e,Hr(e,n)):Gr(e)?Yr(n)?t.removeAttributeNS(Br,Kr(e)):t.setAttributeNS(Br,e,n):Vi(t,e,n)}function Vi(t,e,n){if(Yr(n))t.removeAttribute(e);else{if(tt&&!et&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var Hi={create:zi,update:zi};function Wi(t,e){var n=e.elm,o=e.data,s=t.data;if(!(r(o.staticClass)&&r(o.class)&&(r(s)||r(s.staticClass)&&r(s.class)))){var a=Xr(e),c=n._transitionClasses;i(c)&&(a=Zr(a,ti(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var Bi,Gi={create:Wi,update:Wi},Ki="__r",Yi="__c";function Xi(t){if(i(t[Ki])){var e=tt?"change":"input";t[e]=[].concat(t[Ki],t[e]||[]),delete t[Ki]}i(t[Yi])&&(t.change=[].concat(t[Yi],t.change||[]),delete t[Yi])}function Ji(t,e,n){var r=Bi;return function i(){var o=e.apply(null,arguments);null!==o&&to(t,i,n,r)}}var Qi=ae&&!(it&&Number(it[1])<=53);function Zi(t,e,n,r){if(Qi){var i=Kn,o=e;e=o._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=i||t.timeStamp<=0||t.target.ownerDocument!==document)return o.apply(this,arguments)}}Bi.addEventListener(t,e,st?{capture:n,passive:r}:n)}function to(t,e,n,r){(r||Bi).removeEventListener(t,e._wrapper||e,n)}function eo(t,e){if(!r(t.data.on)||!r(e.data.on)){var n=e.data.on||{},i=t.data.on||{};Bi=e.elm,Xi(n),we(n,i,Zi,to,Ji,e.context),Bi=void 0}}var no,ro={create:eo,update:eo};function io(t,e){if(!r(t.data.domProps)||!r(e.data.domProps)){var n,o,s=e.elm,a=t.data.domProps||{},c=e.data.domProps||{};for(n in i(c.__ob__)&&(c=e.data.domProps=N({},c)),a)n in c||(s[n]="");for(n in c){if(o=c[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),o===a[n])continue;1===s.childNodes.length&&s.removeChild(s.childNodes[0])}if("value"===n&&"PROGRESS"!==s.tagName){s._value=o;var u=r(o)?"":String(o);oo(s,u)&&(s.value=u)}else if("innerHTML"===n&&oi(s.tagName)&&r(s.innerHTML)){no=no||document.createElement("div"),no.innerHTML="<svg>"+o+"</svg>";var l=no.firstChild;while(s.firstChild)s.removeChild(s.firstChild);while(l.firstChild)s.appendChild(l.firstChild)}else if(o!==a[n])try{s[n]=o}catch(Ts){}}}}function oo(t,e){return!t.composing&&("OPTION"===t.tagName||so(t,e)||ao(t,e))}function so(t,e){var n=!0;try{n=document.activeElement!==t}catch(Ts){}return n&&t.value!==e}function ao(t,e){var n=t.value,r=t._vModifiers;if(i(r)){if(r.number)return m(n)!==m(e);if(r.trim)return n.trim()!==e.trim()}return n!==e}var co={create:io,update:io},uo=w((function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach((function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}));function lo(t){var e=ho(t.style);return t.staticStyle?N(t.staticStyle,e):e}function ho(t){return Array.isArray(t)?A(t):"string"===typeof t?uo(t):t}function fo(t,e){var n,r={};if(e){var i=t;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=lo(i.data))&&N(r,n)}(n=lo(t.data))&&N(r,n);var o=t;while(o=o.parent)o.data&&(n=lo(o.data))&&N(r,n);return r}var po,mo=/^--/,vo=/\s*!important$/,go=function(t,e,n){if(mo.test(e))t.style.setProperty(e,n);else if(vo.test(n))t.style.setProperty(O(e),n.replace(vo,""),"important");else{var r=_o(e);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)t.style[r]=n[i];else t.style[r]=n}},yo=["Webkit","Moz","ms"],_o=w((function(t){if(po=po||document.createElement("div").style,t=I(t),"filter"!==t&&t in po)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<yo.length;n++){var r=yo[n]+e;if(r in po)return r}}));function bo(t,e){var n=e.data,o=t.data;if(!(r(n.staticStyle)&&r(n.style)&&r(o.staticStyle)&&r(o.style))){var s,a,c=e.elm,u=o.staticStyle,l=o.normalizedStyle||o.style||{},h=u||l,d=ho(e.data.style)||{};e.data.normalizedStyle=i(d.__ob__)?N({},d):d;var f=fo(e,!0);for(a in h)r(f[a])&&go(c,a,"");for(a in f)s=f[a],s!==h[a]&&go(c,a,null==s?"":s)}}var wo={create:bo,update:bo},Co=/\s+/;function Io(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Co).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function To(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Co).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var n=" "+(t.getAttribute("class")||"")+" ",r=" "+e+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function ko(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&N(e,Oo(t.name||"v")),N(e,t),e}return"string"===typeof t?Oo(t):void 0}}var Oo=w((function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}})),Eo=X&&!et,xo="transition",So="animation",Po="transition",No="transitionend",Ao="animation",Ro="animationend";Eo&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Po="WebkitTransition",No="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Ao="WebkitAnimation",Ro="webkitAnimationEnd"));var jo=X?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function Lo(t){jo((function(){jo(t)}))}function Mo(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Io(t,e))}function Do(t,e){t._transitionClasses&&y(t._transitionClasses,e),To(t,e)}function Fo(t,e,n){var r=Uo(t,e),i=r.type,o=r.timeout,s=r.propCount;if(!i)return n();var a=i===xo?No:Ro,c=0,u=function(){t.removeEventListener(a,l),n()},l=function(e){e.target===t&&++c>=s&&u()};setTimeout((function(){c<s&&u()}),o+1),t.addEventListener(a,l)}var $o=/\b(transform|all)(,|$)/;function Uo(t,e){var n,r=window.getComputedStyle(t),i=(r[Po+"Delay"]||"").split(", "),o=(r[Po+"Duration"]||"").split(", "),s=zo(i,o),a=(r[Ao+"Delay"]||"").split(", "),c=(r[Ao+"Duration"]||"").split(", "),u=zo(a,c),l=0,h=0;e===xo?s>0&&(n=xo,l=s,h=o.length):e===So?u>0&&(n=So,l=u,h=c.length):(l=Math.max(s,u),n=l>0?s>u?xo:So:null,h=n?n===xo?o.length:c.length:0);var d=n===xo&&$o.test(r[Po+"Property"]);return{type:n,timeout:l,propCount:h,hasTransform:d}}function zo(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return qo(e)+qo(t[n])})))}function qo(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function Vo(t,e){var n=t.elm;i(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var o=ko(t.data.transition);if(!r(o)&&!i(n._enterCb)&&1===n.nodeType){var s=o.css,a=o.type,u=o.enterClass,l=o.enterToClass,h=o.enterActiveClass,d=o.appearClass,f=o.appearToClass,p=o.appearActiveClass,v=o.beforeEnter,g=o.enter,y=o.afterEnter,_=o.enterCancelled,b=o.beforeAppear,w=o.appear,C=o.afterAppear,I=o.appearCancelled,T=o.duration,k=Nn,O=Nn.$vnode;while(O&&O.parent)k=O.context,O=O.parent;var E=!k._isMounted||!t.isRootInsert;if(!E||w||""===w){var x=E&&d?d:u,S=E&&p?p:h,P=E&&f?f:l,N=E&&b||v,A=E&&"function"===typeof w?w:g,R=E&&C||y,j=E&&I||_,L=m(c(T)?T.enter:T);0;var M=!1!==s&&!et,D=Bo(A),$=n._enterCb=F((function(){M&&(Do(n,P),Do(n,S)),$.cancelled?(M&&Do(n,x),j&&j(n)):R&&R(n),n._enterCb=null}));t.data.show||Ce(t,"insert",(function(){var e=n.parentNode,r=e&&e._pending&&e._pending[t.key];r&&r.tag===t.tag&&r.elm._leaveCb&&r.elm._leaveCb(),A&&A(n,$)})),N&&N(n),M&&(Mo(n,x),Mo(n,S),Lo((function(){Do(n,x),$.cancelled||(Mo(n,P),D||(Wo(L)?setTimeout($,L):Fo(n,a,$)))}))),t.data.show&&(e&&e(),A&&A(n,$)),M||D||$()}}}function Ho(t,e){var n=t.elm;i(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var o=ko(t.data.transition);if(r(o)||1!==n.nodeType)return e();if(!i(n._leaveCb)){var s=o.css,a=o.type,u=o.leaveClass,l=o.leaveToClass,h=o.leaveActiveClass,d=o.beforeLeave,f=o.leave,p=o.afterLeave,v=o.leaveCancelled,g=o.delayLeave,y=o.duration,_=!1!==s&&!et,b=Bo(f),w=m(c(y)?y.leave:y);0;var C=n._leaveCb=F((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),_&&(Do(n,l),Do(n,h)),C.cancelled?(_&&Do(n,u),v&&v(n)):(e(),p&&p(n)),n._leaveCb=null}));g?g(I):I()}function I(){C.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),d&&d(n),_&&(Mo(n,u),Mo(n,h),Lo((function(){Do(n,u),C.cancelled||(Mo(n,l),b||(Wo(w)?setTimeout(C,w):Fo(n,a,C)))}))),f&&f(n,C),_||b||C())}}function Wo(t){return"number"===typeof t&&!isNaN(t)}function Bo(t){if(r(t))return!1;var e=t.fns;return i(e)?Bo(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function Go(t,e){!0!==e.data.show&&Vo(e)}var Ko=X?{create:Go,activate:Go,remove:function(t,e){!0!==t.data.show?Ho(t,e):e()}}:{},Yo=[Hi,Gi,ro,co,wo,Ko],Xo=Yo.concat(Ui),Jo=Ai({nodeOps:Ti,modules:Xo});et&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&os(t,"input")}));var Qo={inserted:function(t,e,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?Ce(n,"postpatch",(function(){Qo.componentUpdated(t,e,n)})):Zo(t,e,n.context),t._vOptions=[].map.call(t.options,ns)):("textarea"===n.tag||li(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",rs),t.addEventListener("compositionend",is),t.addEventListener("change",is),et&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){Zo(t,e,n.context);var r=t._vOptions,i=t._vOptions=[].map.call(t.options,ns);if(i.some((function(t,e){return!M(t,r[e])}))){var o=t.multiple?e.value.some((function(t){return es(t,i)})):e.value!==e.oldValue&&es(e.value,i);o&&os(t,"change")}}}};function Zo(t,e,n){ts(t,e,n),(tt||nt)&&setTimeout((function(){ts(t,e,n)}),0)}function ts(t,e,n){var r=e.value,i=t.multiple;if(!i||Array.isArray(r)){for(var o,s,a=0,c=t.options.length;a<c;a++)if(s=t.options[a],i)o=D(r,ns(s))>-1,s.selected!==o&&(s.selected=o);else if(M(ns(s),r))return void(t.selectedIndex!==a&&(t.selectedIndex=a));i||(t.selectedIndex=-1)}}function es(t,e){return e.every((function(e){return!M(e,t)}))}function ns(t){return"_value"in t?t._value:t.value}function rs(t){t.target.composing=!0}function is(t){t.target.composing&&(t.target.composing=!1,os(t.target,"input"))}function os(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function ss(t){return!t.componentInstance||t.data&&t.data.transition?t:ss(t.componentInstance._vnode)}var as={bind:function(t,e,n){var r=e.value;n=ss(n);var i=n.data&&n.data.transition,o=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&i?(n.data.show=!0,Vo(n,(function(){t.style.display=o}))):t.style.display=r?o:"none"},update:function(t,e,n){var r=e.value,i=e.oldValue;if(!r!==!i){n=ss(n);var o=n.data&&n.data.transition;o?(n.data.show=!0,r?Vo(n,(function(){t.style.display=t.__vOriginalDisplay})):Ho(n,(function(){t.style.display="none"}))):t.style.display=r?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,r,i){i||(t.style.display=t.__vOriginalDisplay)}},cs={model:Qo,show:as},us={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function ls(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?ls(Tn(e.children)):t}function hs(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var i=n._parentListeners;for(var o in i)e[I(o)]=i[o];return e}function ds(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function fs(t){while(t=t.parent)if(t.data.transition)return!0}function ps(t,e){return e.key===t.key&&e.tag===t.tag}var ms=function(t){return t.tag||je(t)},vs=function(t){return"show"===t.name},gs={name:"transition",props:us,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(ms),n.length)){0;var r=this.mode;0;var i=n[0];if(fs(this.$vnode))return i;var o=ls(i);if(!o)return i;if(this._leaving)return ds(t,i);var s="__transition-"+this._uid+"-";o.key=null==o.key?o.isComment?s+"comment":s+o.tag:a(o.key)?0===String(o.key).indexOf(s)?o.key:s+o.key:o.key;var c=(o.data||(o.data={})).transition=hs(this),u=this._vnode,l=ls(u);if(o.data.directives&&o.data.directives.some(vs)&&(o.data.show=!0),l&&l.data&&!ps(o,l)&&!je(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=N({},c);if("out-in"===r)return this._leaving=!0,Ce(h,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),ds(t,i);if("in-out"===r){if(je(o))return u;var d,f=function(){d()};Ce(c,"afterEnter",f),Ce(c,"enterCancelled",f),Ce(h,"delayLeave",(function(t){d=t}))}}return i}}},ys=N({tag:String,moveClass:String},us);delete ys.mode;var _s={props:ys,beforeMount:function(){var t=this,e=this._update;this._update=function(n,r){var i=An(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,i(),e.call(t,n,r)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],s=hs(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=s;else;}if(r){for(var u=[],l=[],h=0;h<r.length;h++){var d=r[h];d.data.transition=s,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?u.push(d):l.push(d)}this.kept=t(e,null,u),this.removed=l}return t(e,null,o)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(bs),t.forEach(ws),t.forEach(Cs),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,r=n.style;Mo(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(No,n._moveCb=function t(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(No,t),n._moveCb=null,Do(n,e))})}})))},methods:{hasMove:function(t,e){if(!Eo)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){To(n,t)})),Io(n,e),n.style.display="none",this.$el.appendChild(n);var r=Uo(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function bs(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function ws(t){t.data.newPos=t.elm.getBoundingClientRect()}function Cs(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,i=e.top-n.top;if(r||i){t.data.moved=!0;var o=t.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}var Is={Transition:gs,TransitionGroup:_s};Tr.config.mustUseProp=zr,Tr.config.isReservedTag=si,Tr.config.isReservedAttr=$r,Tr.config.getTagNamespace=ai,Tr.config.isUnknownElement=ui,N(Tr.options.directives,cs),N(Tr.options.components,Is),Tr.prototype.__patch__=X?Jo:R,Tr.prototype.$mount=function(t,e){return t=t&&X?hi(t):void 0,Ln(this,t,e)},X&&setTimeout((function(){q.devtools&&ut&&ut.emit("init",Tr)}),0),e["a"]=Tr}).call(this,n("c8ba"))},"2ba4":function(t,e){var n=Function.prototype,r=n.apply,i=n.bind,o=n.call;t.exports="object"==typeof Reflect&&Reflect.apply||(i?o.bind(r):function(){return o.apply(r,arguments)})},"2cf4":function(t,e,n){var r,i,o,s,a=n("da84"),c=n("2ba4"),u=n("0366"),l=n("1626"),h=n("1a2d"),d=n("d039"),f=n("1be4"),p=n("f36a"),m=n("cc12"),v=n("1cdc"),g=n("605d"),y=a.setImmediate,_=a.clearImmediate,b=a.process,w=a.Dispatch,C=a.Function,I=a.MessageChannel,T=a.String,k=0,O={},E="onreadystatechange";try{r=a.location}catch(A){}var x=function(t){if(h(O,t)){var e=O[t];delete O[t],e()}},S=function(t){return function(){x(t)}},P=function(t){x(t.data)},N=function(t){a.postMessage(T(t),r.protocol+"//"+r.host)};y&&_||(y=function(t){var e=p(arguments,1);return O[++k]=function(){c(l(t)?t:C(t),void 0,e)},i(k),k},_=function(t){delete O[t]},g?i=function(t){b.nextTick(S(t))}:w&&w.now?i=function(t){w.now(S(t))}:I&&!v?(o=new I,s=o.port2,o.port1.onmessage=P,i=u(s.postMessage,s)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!d(N)?(i=N,a.addEventListener("message",P,!1)):i=E in m("script")?function(t){f.appendChild(m("script"))[E]=function(){f.removeChild(this),x(t)}}:function(t){setTimeout(S(t),0)}),t.exports={set:y,clear:_}},"2d00":function(t,e,n){var r,i,o=n("da84"),s=n("342f"),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},"2f62":function(t,e,n){"use strict";(function(t){
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function r(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:r});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,n.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}n.d(e,"b",(function(){return M})),n.d(e,"c",(function(){return L})),n.d(e,"d",(function(){return R}));var i="undefined"!==typeof window?window:"undefined"!==typeof t?t:{},o=i.__VUE_DEVTOOLS_GLOBAL_HOOK__;function s(t){o&&(t._devtoolHook=o,o.emit("vuex:init",t),o.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){o.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){o.emit("vuex:action",t,e)}),{prepend:!0}))}function a(t,e){return t.filter(e)[0]}function c(t,e){if(void 0===e&&(e=[]),null===t||"object"!==typeof t)return t;var n=a(e,(function(e){return e.original===t}));if(n)return n.copy;var r=Array.isArray(t)?[]:{};return e.push({original:t,copy:r}),Object.keys(t).forEach((function(n){r[n]=c(t[n],e)})),r}function u(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function l(t){return null!==t&&"object"===typeof t}function h(t){return t&&"function"===typeof t.then}function d(t,e){return function(){return t(e)}}var f=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},p={namespaced:{configurable:!0}};p.namespaced.get=function(){return!!this._rawModule.namespaced},f.prototype.addChild=function(t,e){this._children[t]=e},f.prototype.removeChild=function(t){delete this._children[t]},f.prototype.getChild=function(t){return this._children[t]},f.prototype.hasChild=function(t){return t in this._children},f.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},f.prototype.forEachChild=function(t){u(this._children,t)},f.prototype.forEachGetter=function(t){this._rawModule.getters&&u(this._rawModule.getters,t)},f.prototype.forEachAction=function(t){this._rawModule.actions&&u(this._rawModule.actions,t)},f.prototype.forEachMutation=function(t){this._rawModule.mutations&&u(this._rawModule.mutations,t)},Object.defineProperties(f.prototype,p);var m=function(t){this.register([],t,!1)};function v(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;v(t.concat(r),e.getChild(r),n.modules[r])}}m.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},m.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},m.prototype.update=function(t){v([],this.root,t)},m.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var i=new f(e,n);if(0===t.length)this.root=i;else{var o=this.get(t.slice(0,-1));o.addChild(t[t.length-1],i)}e.modules&&u(e.modules,(function(e,i){r.register(t.concat(i),e,n)}))},m.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],r=e.getChild(n);r&&r.runtime&&e.removeChild(n)},m.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};var g;var y=function(t){var e=this;void 0===t&&(t={}),!g&&"undefined"!==typeof window&&window.Vue&&A(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new m(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new g,this._makeLocalGettersCache=Object.create(null);var i=this,o=this,a=o.dispatch,c=o.commit;this.dispatch=function(t,e){return a.call(i,t,e)},this.commit=function(t,e,n){return c.call(i,t,e,n)},this.strict=r;var u=this._modules.root.state;I(this,u,[],this._modules.root),C(this,u),n.forEach((function(t){return t(e)}));var l=void 0!==t.devtools?t.devtools:g.config.devtools;l&&s(this)},_={state:{configurable:!0}};function b(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function w(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;I(t,n,[],t._modules.root,!0),C(t,n,e)}function C(t,e,n){var r=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,o={};u(i,(function(e,n){o[n]=d(e,t),Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})}));var s=g.config.silent;g.config.silent=!0,t._vm=new g({data:{$$state:e},computed:o}),g.config.silent=s,t.strict&&S(t),r&&(n&&t._withCommit((function(){r._data.$$state=null})),g.nextTick((function(){return r.$destroy()})))}function I(t,e,n,r,i){var o=!n.length,s=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[s],t._modulesNamespaceMap[s]=r),!o&&!i){var a=P(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){g.set(a,c,r.state)}))}var u=r.context=T(t,s,n);r.forEachMutation((function(e,n){var r=s+n;O(t,r,e,u)})),r.forEachAction((function(e,n){var r=e.root?n:s+n,i=e.handler||e;E(t,r,i,u)})),r.forEachGetter((function(e,n){var r=s+n;x(t,r,e,u)})),r.forEachChild((function(r,o){I(t,e,n.concat(o),r,i)}))}function T(t,e,n){var r=""===e,i={dispatch:r?t.dispatch:function(n,r,i){var o=N(n,r,i),s=o.payload,a=o.options,c=o.type;return a&&a.root||(c=e+c),t.dispatch(c,s)},commit:r?t.commit:function(n,r,i){var o=N(n,r,i),s=o.payload,a=o.options,c=o.type;a&&a.root||(c=e+c),t.commit(c,s,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return k(t,e)}},state:{get:function(){return P(t.state,n)}}}),i}function k(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach((function(i){if(i.slice(0,r)===e){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return t.getters[i]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function O(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push((function(e){n.call(t,r.state,e)}))}function E(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push((function(e){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return h(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}function x(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function S(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function P(t,e){return e.reduce((function(t,e){return t[e]}),t)}function N(t,e,n){return l(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function A(t){g&&t===g||(g=t,r(g))}_.state.get=function(){return this._vm._data.$$state},_.state.set=function(t){0},y.prototype.commit=function(t,e,n){var r=this,i=N(t,e,n),o=i.type,s=i.payload,a=(i.options,{type:o,payload:s}),c=this._mutations[o];c&&(this._withCommit((function(){c.forEach((function(t){t(s)}))})),this._subscribers.slice().forEach((function(t){return t(a,r.state)})))},y.prototype.dispatch=function(t,e){var n=this,r=N(t,e),i=r.type,o=r.payload,s={type:i,payload:o},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(s,n.state)}))}catch(u){0}var c=a.length>1?Promise.all(a.map((function(t){return t(o)}))):a[0](o);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(s,n.state)}))}catch(u){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(s,n.state,t)}))}catch(u){0}e(t)}))}))}},y.prototype.subscribe=function(t,e){return b(t,this._subscribers,e)},y.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return b(n,this._actionSubscribers,e)},y.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch((function(){return t(r.state,r.getters)}),e,n)},y.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},y.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),I(this,this.state,t,this._modules.get(t),n.preserveState),C(this,this.state)},y.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=P(e.state,t.slice(0,-1));g.delete(n,t[t.length-1])})),w(this)},y.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},y.prototype.hotUpdate=function(t){this._modules.update(t),w(this,!0)},y.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(y.prototype,_);var R=U((function(t,e){var n={};return F(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=z(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,e,n):e[i]},n[r].vuex=!0})),n})),j=U((function(t,e){var n={};return F(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var o=z(this.$store,"mapMutations",t);if(!o)return;r=o.context.commit}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),L=U((function(t,e){var n={};return F(e).forEach((function(e){var r=e.key,i=e.val;i=t+i,n[r]=function(){if(!t||z(this.$store,"mapGetters",t))return this.$store.getters[i]},n[r].vuex=!0})),n})),M=U((function(t,e){var n={};return F(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var o=z(this.$store,"mapActions",t);if(!o)return;r=o.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),D=function(t){return{mapState:R.bind(null,t),mapGetters:L.bind(null,t),mapMutations:j.bind(null,t),mapActions:M.bind(null,t)}};function F(t){return $(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function $(t){return Array.isArray(t)||l(t)}function U(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function z(t,e,n){var r=t._modulesNamespaceMap[n];return r}function q(t){void 0===t&&(t={});var e=t.collapsed;void 0===e&&(e=!0);var n=t.filter;void 0===n&&(n=function(t,e,n){return!0});var r=t.transformer;void 0===r&&(r=function(t){return t});var i=t.mutationTransformer;void 0===i&&(i=function(t){return t});var o=t.actionFilter;void 0===o&&(o=function(t,e){return!0});var s=t.actionTransformer;void 0===s&&(s=function(t){return t});var a=t.logMutations;void 0===a&&(a=!0);var u=t.logActions;void 0===u&&(u=!0);var l=t.logger;return void 0===l&&(l=console),function(t){var h=c(t.state);"undefined"!==typeof l&&(a&&t.subscribe((function(t,o){var s=c(o);if(n(t,h,s)){var a=W(),u=i(t),d="mutation "+t.type+a;V(l,d,e),l.log("%c prev state","color: #9E9E9E; font-weight: bold",r(h)),l.log("%c mutation","color: #03A9F4; font-weight: bold",u),l.log("%c next state","color: #4CAF50; font-weight: bold",r(s)),H(l)}h=s})),u&&t.subscribeAction((function(t,n){if(o(t,n)){var r=W(),i=s(t),a="action "+t.type+r;V(l,a,e),l.log("%c action","color: #03A9F4; font-weight: bold",i),H(l)}})))}}function V(t,e,n){var r=n?t.groupCollapsed:t.group;try{r.call(t,e)}catch(i){t.log(e)}}function H(t){try{t.groupEnd()}catch(e){t.log("—— log end ——")}}function W(){var t=new Date;return" @ "+G(t.getHours(),2)+":"+G(t.getMinutes(),2)+":"+G(t.getSeconds(),2)+"."+G(t.getMilliseconds(),3)}function B(t,e){return new Array(e+1).join(t)}function G(t,e){return B("0",e-t.toString().length)+t}var K={Store:y,install:A,version:"3.6.2",mapState:R,mapMutations:j,mapGetters:L,mapActions:M,createNamespacedHelpers:D,createLogger:q};e["a"]=K}).call(this,n("c8ba"))},"342f":function(t,e,n){var r=n("d066");t.exports=r("navigator","userAgent")||""},"35a1":function(t,e,n){var r=n("f5df"),i=n("dc4a"),o=n("3f8c"),s=n("b622"),a=s("iterator");t.exports=function(t){if(void 0!=t)return i(t,a)||i(t,"@@iterator")||o[r(t)]}},"37e8":function(t,e,n){var r=n("83ab"),i=n("aed9"),o=n("9bf2"),s=n("825a"),a=n("fc6a"),c=n("df75");e.f=r&&!i?Object.defineProperties:function(t,e){s(t);var n,r=a(e),i=c(e),u=i.length,l=0;while(u>l)o.f(t,n=i[l++],r[n]);return t}},"3a9b":function(t,e,n){var r=n("e330");t.exports=r({}.isPrototypeOf)},"3bbe":function(t,e,n){var r=n("da84"),i=n("1626"),o=r.String,s=r.TypeError;t.exports=function(t){if("object"==typeof t||i(t))return t;throw s("Can't set "+o(t)+" as a prototype")}},"3f8c":function(t,e){t.exports={}},"408a":function(t,e,n){var r=n("e330");t.exports=r(1..valueOf)},"428f":function(t,e,n){var r=n("da84");t.exports=r},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"44ad":function(t,e,n){var r=n("da84"),i=n("e330"),o=n("d039"),s=n("c6b6"),a=r.Object,c=i("".split);t.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==s(t)?c(t,""):a(t)}:a},"44d2":function(t,e,n){var r=n("b622"),i=n("7c73"),o=n("9bf2"),s=r("unscopables"),a=Array.prototype;void 0==a[s]&&o.f(a,s,{configurable:!0,value:i(null)}),t.exports=function(t){a[s][t]=!0}},"44de":function(t,e,n){var r=n("da84");t.exports=function(t,e){var n=r.console;n&&n.error&&(1==arguments.length?n.error(t):n.error(t,e))}},4840:function(t,e,n){var r=n("825a"),i=n("5087"),o=n("b622"),s=o("species");t.exports=function(t,e){var n,o=r(t).constructor;return void 0===o||void 0==(n=r(o)[s])?e:i(n)}},"485a":function(t,e,n){var r=n("da84"),i=n("c65b"),o=n("1626"),s=n("861d"),a=r.TypeError;t.exports=function(t,e){var n,r;if("string"===e&&o(n=t.toString)&&!s(r=i(n,t)))return r;if(o(n=t.valueOf)&&!s(r=i(n,t)))return r;if("string"!==e&&o(n=t.toString)&&!s(r=i(n,t)))return r;throw a("Can't convert object to primitive value")}},4930:function(t,e,n){var r=n("2d00"),i=n("d039");t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4d64":function(t,e,n){var r=n("fc6a"),i=n("23cb"),o=n("07fa"),s=function(t){return function(e,n,s){var a,c=r(e),u=o(c),l=i(s,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},"4dae":function(t,e,n){var r=n("da84"),i=n("23cb"),o=n("07fa"),s=n("8418"),a=r.Array,c=Math.max;t.exports=function(t,e,n){for(var r=o(t),u=i(e,r),l=i(void 0===n?r:n,r),h=a(c(l-u,0)),d=0;u<l;u++,d++)s(h,d,t[u]);return h.length=d,h}},"4de4":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").filter,o=n("1dde"),s=o("filter");r({target:"Array",proto:!0,forced:!s},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},5087:function(t,e,n){var r=n("da84"),i=n("68ee"),o=n("0d51"),s=r.TypeError;t.exports=function(t){if(i(t))return t;throw s(o(t)+" is not a constructor")}},"50c4":function(t,e,n){var r=n("5926"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},"51b0":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return is})),n.d(e,"b",(function(){return ds})),n.d(e,"c",(function(){return ns}));var r=n("589b"),i=n("22e5"),o=n("1fd5"),s=n("e691");const a="@firebase/database",c="0.12.5";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let u="";function l(t){u=t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,e){null==e?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),Object(o["H"])(e))}get(t){const e=this.domStorage_.getItem(this.prefixedName_(t));return null==e?null:Object(o["A"])(e)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,e){null==e?delete this.cache_[t]:this.cache_[t]=e}get(t){return Object(o["j"])(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=function(t){try{if("undefined"!==typeof window&&"undefined"!==typeof window[t]){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new h(e)}}catch(e){}return new d},p=f("localStorage"),m=f("sessionStorage"),v=new s["b"]("@firebase/database"),g=function(){let t=1;return function(){return t++}}(),y=function(t){const e=Object(o["G"])(t),n=new o["d"];n.update(e);const r=n.digest();return o["g"].encodeByteArray(r)},_=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&"object"===typeof r&&"number"===typeof r.length?e+=_.apply(null,r):e+="object"===typeof r?Object(o["H"])(r):r,e+=" "}return e};let b=null,w=!0;const C=function(t,e){Object(o["e"])(!e||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(v.logLevel=s["a"].VERBOSE,b=v.log.bind(v),e&&m.set("logging_enabled",!0)):"function"===typeof t?b=t:(b=null,m.remove("logging_enabled"))},I=function(...t){if(!0===w&&(w=!1,null===b&&!0===m.get("logging_enabled")&&C(!0)),b){const e=_.apply(null,t);b(e)}},T=function(t){return function(...e){I(t,...e)}},k=function(...t){const e="FIREBASE INTERNAL ERROR: "+_(...t);v.error(e)},O=function(...t){const e="FIREBASE FATAL ERROR: "+_(...t);throw v.error(e),new Error(e)},E=function(...t){const e="FIREBASE WARNING: "+_(...t);v.warn(e)},x=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&E("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},S=function(t){return"number"===typeof t&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},P=function(t){if(Object(o["x"])()||"complete"===document.readyState)t();else{let e=!1;const n=function(){document.body?e||(e=!0,t()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}},N="[MIN_NAME]",A="[MAX_NAME]",R=function(t,e){if(t===e)return 0;if(t===N||e===A)return-1;if(e===N||t===A)return 1;{const n=W(t),r=W(e);return null!==n?null!==r?n-r===0?t.length-e.length:n-r:-1:null!==r?1:t<e?-1:1}},j=function(t,e){return t===e?0:t<e?-1:1},L=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Object(o["H"])(e))},M=function(t){if("object"!==typeof t||null===t)return Object(o["H"])(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)0!==r&&(n+=","),n+=Object(o["H"])(e[r]),n+=":",n+=M(t[e[r]]);return n+="}",n},D=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function F(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const $=function(t){Object(o["e"])(!S(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,a,c,u;0===t?(s=0,a=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(c=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=c+r,a=Math.round(t*Math.pow(2,n-c)-Math.pow(2,n))):(s=0,a=Math.round(t/Math.pow(2,1-r-n))));const l=[];for(u=n;u;u-=1)l.push(a%2?1:0),a=Math.floor(a/2);for(u=e;u;u-=1)l.push(s%2?1:0),s=Math.floor(s/2);l.push(i?1:0),l.reverse();const h=l.join("");let d="";for(u=0;u<64;u+=8){let t=parseInt(h.substr(u,8),2).toString(16);1===t.length&&(t="0"+t),d+=t}return d.toLowerCase()},U=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},z=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};const q=new RegExp("^-?(0*)\\d{1,10}$"),V=-2147483648,H=2147483647,W=function(t){if(q.test(t)){const e=Number(t);if(e>=V&&e<=H)return e}return null},B=function(t){try{t()}catch(e){setTimeout(()=>{const t=e.stack||"";throw E("Exception was thrown by user callback.",t),e},Math.floor(0))}},G=function(){const t="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return t.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},K=function(t,e){const n=setTimeout(t,e);return"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Y{constructor(t,e){this.appName_=t,this.appCheckProvider=e,this.appCheck=null===e||void 0===e?void 0:e.getImmediate({optional:!0}),this.appCheck||null===e||void 0===e||e.get().then(t=>this.appCheck=t)}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise((e,n)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(e,n):e(null)},0)})}addTokenChangeListener(t){var e;null===(e=this.appCheckProvider)||void 0===e||e.get().then(e=>e.addTokenListener(t))}notifyForInvalidToken(){E(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t,e,n){this.appName_=t,this.firebaseOptions_=e,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(t=>this.auth_=t)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(t=>t&&"auth/token-not-initialized"===t.code?(I("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((e,n)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(e,n):e(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(e=>e.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(e=>e.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',E(t)}}class J{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}J.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Q="5",Z="v",tt="s",et="r",nt="f",rt=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,it="ls",ot="p",st="ac",at="websocket",ct="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ut{constructor(t,e,n,r,i=!1,o="",s=!1){this.secure=e,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=s,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=p.get("host:"+t)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&p.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",e=this.includeNamespaceInQueryParams?"?ns="+this.namespace:"";return`${t}${this.host}/${e}`}}function lt(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function ht(t,e,n){let r;if(Object(o["e"])("string"===typeof e,"typeof type must == string"),Object(o["e"])("object"===typeof n,"typeof params must == object"),e===at)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else{if(e!==ct)throw new Error("Unknown connection type: "+e);r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?"}lt(t)&&(n["ns"]=t.namespace);const i=[];return F(n,(t,e)=>{i.push(t+"="+e)}),r+i.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(){this.counters_={}}incrementCounter(t,e=1){Object(o["j"])(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=e}get(){return Object(o["m"])(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft={},pt={};function mt(t){const e=t.toString();return ft[e]||(ft[e]=new dt),ft[e]}function vt(t,e){const n=t.toString();return pt[n]||(pt[n]=e()),pt[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,e){this.closeAfterResponse=t,this.onClose=e,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,e){this.pendingResponses[t]=e;while(this.pendingResponses[this.currentResponseNum]){const t=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let e=0;e<t.length;++e)t[e]&&B(()=>{this.onMessage_(t[e])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="start",_t="close",bt="pLPCommand",wt="pRTLPCB",Ct="id",It="pw",Tt="ser",kt="cb",Ot="seg",Et="ts",xt="d",St="dframe",Pt=1870,Nt=30,At=Pt-Nt,Rt=25e3,jt=3e4;class Lt{constructor(t,e,n,r,i,o,s){this.connId=t,this.repoInfo=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=T(t),this.stats_=mt(e),this.urlFn=t=>(this.appCheckToken&&(t[st]=this.appCheckToken),ht(e,ct,t))}open(t,e){this.curSegmentNum=0,this.onDisconnect_=e,this.myPacketOrderer=new gt(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(jt)),P(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Mt((...t)=>{const[e,n,r,i,o]=t;if(this.incrementIncomingBytes_(t),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,e===yt)this.id=n,this.password=r;else{if(e!==_t)throw new Error("Unrecognized command received: "+e);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_()}},(...t)=>{const[e,n]=t;this.incrementIncomingBytes_(t),this.myPacketOrderer.handleResponse(e,n)},()=>{this.onClosed_()},this.urlFn);const t={};t[yt]="t",t[Tt]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(t[kt]=this.scriptTagHolder.uniqueCallbackIdentifier),t[Z]=Q,this.transportSessionId&&(t[tt]=this.transportSessionId),this.lastSessionId&&(t[it]=this.lastSessionId),this.applicationId&&(t[ot]=this.applicationId),this.appCheckToken&&(t[st]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&rt.test(location.hostname)&&(t[et]=nt);const e=this.urlFn(t);this.log_("Connecting via long-poll to "+e),this.scriptTagHolder.addTag(e,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Lt.forceAllow_=!0}static forceDisallow(){Lt.forceDisallow_=!0}static isAvailable(){return!Object(o["x"])()&&(!!Lt.forceAllow_||!Lt.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!U()&&!z())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const e=Object(o["H"])(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const n=Object(o["i"])(e),r=D(n,At);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(t,e){if(Object(o["x"])())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[St]="t",n[Ct]=t,n[It]=e,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const e=Object(o["H"])(t).length;this.bytesReceived+=e,this.stats_.incrementCounter("bytes_received",e)}}class Mt{constructor(t,e,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Object(o["x"])())this.commandCB=t,this.onMessageCB=e;else{this.uniqueCallbackIdentifier=g(),window[bt+this.uniqueCallbackIdentifier]=t,window[wt+this.uniqueCallbackIdentifier]=e,this.myIFrame=Mt.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const t=document.domain;n='<script>document.domain="'+t+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(i){I("frame writing exception"),i.stack&&I(i.stack),I(i)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(t);try{const e=t.contentWindow.document;e||I("No IE domain setting required")}catch(e){const n=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,e){this.myID=t,this.myPW=e,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[Ct]=this.myID,t[It]=this.myPW,t[Tt]=this.currentSerial;let e=this.urlFn(t),n="",r=0;while(this.pendingSegs.length>0){const t=this.pendingSegs[0];if(!(t.d.length+Nt+n.length<=Pt))break;{const t=this.pendingSegs.shift();n=n+"&"+Ot+r+"="+t.seg+"&"+Et+r+"="+t.ts+"&"+xt+r+"="+t.d,r++}}return e+=n,this.addLongPollTag_(e,this.currentSerial),!0}return!1}enqueueSegment(t,e,n){this.pendingSegs.push({seg:t,ts:e,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(t,e){this.outstandingRequests.add(e);const n=()=>{this.outstandingRequests.delete(e),this.newRequest_()},r=setTimeout(n,Math.floor(Rt)),i=()=>{clearTimeout(r),n()};this.addTag(t,i)}addTag(t,e){Object(o["x"])()?this.doNodeLongPoll(t,e):setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=t,n.onload=n.onreadystatechange=function(){const t=n.readyState;t&&"loaded"!==t&&"complete"!==t||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),e())},n.onerror=()=>{I("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}},Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=16384,Ft=45e3;let $t=null;"undefined"!==typeof MozWebSocket?$t=MozWebSocket:"undefined"!==typeof WebSocket&&($t=WebSocket);class Ut{constructor(t,e,n,r,i,o,s){this.connId=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=T(this.connId),this.stats_=mt(e),this.connURL=Ut.connectionURL_(e,o,s,r),this.nodeAdmin=e.nodeAdmin}static connectionURL_(t,e,n,r){const i={};return i[Z]=Q,!Object(o["x"])()&&"undefined"!==typeof location&&location.hostname&&rt.test(location.hostname)&&(i[et]=nt),e&&(i[tt]=e),n&&(i[it]=n),r&&(i[st]=r),ht(t,at,i)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,p.set("previous_websocket_failure",!0);try{if(Object(o["x"])()){const e=this.nodeAdmin?"AdminNode":"Node",n={headers:{"User-Agent":`Firebase/${Q}/${u}/${t.platform}/${e}`,"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(n.headers["Authorization"]="Bearer "+this.authToken),this.appCheckToken&&(n.headers["X-Firebase-AppCheck"]=this.appCheckToken);const r=Object({NODE_ENV:"production",VUE_APP_APIKEY:"AIzaSyBJ87BuqIgKQ_ddvinu-Yih89kTWMlHtdQ",BASE_URL:"/recipes/"}),i=0===this.connURL.indexOf("wss://")?r["HTTPS_PROXY"]||r["https_proxy"]:r["HTTP_PROXY"]||r["http_proxy"];i&&(n["proxy"]={origin:i}),this.mySock=new $t(this.connURL,[],n)}else{const t={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new $t(this.connURL,[],t)}}catch(r){this.log_("Error instantiating WebSocket.");const t=r.message||r.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=t=>{this.handleIncomingFrame(t)},this.mySock.onerror=t=>{this.log_("WebSocket error.  Closing connection.");const e=t.message||t.data;e&&this.log_(e),this.onClosed_()}}start(){}static forceDisallow(){Ut.forceDisallow_=!0}static isAvailable(){let t=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const e=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(e);n&&n.length>1&&parseFloat(n[1])<4.4&&(t=!0)}return!t&&null!==$t&&!Ut.forceDisallow_}static previouslyFailed(){return p.isInMemoryStorage||!0===p.get("previous_websocket_failure")}markConnectionHealthy(){p.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const e=Object(o["A"])(t);this.onMessage(e)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(Object(o["e"])(null===this.frames,"We already have a frame buffer"),t.length<=6){const e=Number(t);if(!isNaN(e))return this.handleNewFrameCount_(e),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(null===this.mySock)return;const e=t["data"];if(this.bytesReceived+=e.length,this.stats_.incrementCounter("bytes_received",e.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(e);else{const t=this.extractFrameCount_(e);null!==t&&this.appendFrame_(t)}}send(t){this.resetKeepAlive();const e=Object(o["H"])(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const n=D(e,Dt);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ft))}sendString_(t){try{this.mySock.send(t)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ut.responsesRequiredToBeHealthy=2,Ut.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zt{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[Lt,Ut]}initTransports_(t){const e=Ut&&Ut["isAvailable"]();let n=e&&!Ut.previouslyFailed();if(t.webSocketOnly&&(e||E("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Ut];else{const t=this.transports_=[];for(const e of zt.ALL_TRANSPORTS)e&&e["isAvailable"]()&&t.push(e)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=6e4,Vt=5e3,Ht=10240,Wt=102400,Bt="t",Gt="d",Kt="s",Yt="r",Xt="e",Jt="o",Qt="a",Zt="n",te="p",ee="h";class ne{constructor(t,e,n,r,i,o,s,a,c,u){this.id=t,this.repoInfo_=e,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=s,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=T("c:"+this.id+":"),this.transportManager_=new zt(e),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t["responsesRequiredToBeHealthy"]||0;const e=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(e,n)},Math.floor(0));const r=t["healthyTimeout"]||0;r>0&&(this.healthyTimeout_=K(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Wt?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ht?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return e=>{t===this.conn_?this.onConnectionLost_(e):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return e=>{2!==this.state_&&(t===this.rx_?this.onPrimaryMessageReceived_(e):t===this.secondaryConn_?this.onSecondaryMessageReceived_(e):this.log_("message on old connection"))}}sendRequest(t){const e={t:"d",d:t};this.sendData_(e)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Bt in t){const e=t[Bt];e===Qt?this.upgradeIfSecondaryHealthy_():e===Yt?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):e===Jt&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const e=L("t",t),n=L("d",t);if("c"===e)this.onSecondaryControl_(n);else{if("d"!==e)throw new Error("Unknown protocol layer: "+e);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:te,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Qt,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Zt,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const e=L("t",t),n=L("d",t);"c"===e?this.onControl_(n):"d"===e&&this.onDataMessage_(n)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const e=L(Bt,t);if(Gt in t){const n=t[Gt];if(e===ee)this.onHandshake_(n);else if(e===Zt){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let t=0;t<this.pendingDataMessages.length;++t)this.onDataMessage_(this.pendingDataMessages[t]);this.pendingDataMessages=[],this.tryCleanupConnection()}else e===Kt?this.onConnectionShutdown_(n):e===Yt?this.onReset_(n):e===Xt?k("Server Error: "+n):e===Jt?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):k("Unknown control packet command: "+e)}}onHandshake_(t){const e=t.ts,n=t.v,r=t.h;this.sessionId=t.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,e),Q!==n&&E("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t["responsesRequiredToBeHealthy"]||0;const e=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(e,n),K(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(qt))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,e){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(e,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):K(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Vt))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:te,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==t&&this.rx_!==t||this.close()}onConnectionLost_(t){this.conn_=null,t||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(p.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(t)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{put(t,e,n,r){}merge(t,e,n,r){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,e,n){}onDisconnectMerge(t,e,n){}onDisconnectCancel(t,e){}reportStats(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(t){this.allowedEvents_=t,this.listeners_={},Object(o["e"])(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...e){if(Array.isArray(this.listeners_[t])){const n=[...this.listeners_[t]];for(let t=0;t<n.length;t++)n[t].callback.apply(n[t].context,e)}}on(t,e,n){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:e,context:n});const r=this.getInitialEvent(t);r&&e.apply(n,r)}off(t,e,n){this.validateEventType_(t);const r=this.listeners_[t]||[];for(let i=0;i<r.length;i++)if(r[i].callback===e&&(!n||n===r[i].context))return void r.splice(i,1)}validateEventType_(t){Object(o["e"])(this.allowedEvents_.find(e=>e===t),"Unknown event: "+t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe extends ie{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||Object(o["w"])()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new oe}getInitialEvent(t){return Object(o["e"])("online"===t,"Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se=32,ae=768;class ce{constructor(t,e){if(void 0===e){this.pieces_=t.split("/");let e=0;for(let t=0;t<this.pieces_.length;t++)this.pieces_[t].length>0&&(this.pieces_[e]=this.pieces_[t],e++);this.pieces_.length=e,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=e}toString(){let t="";for(let e=this.pieceNum_;e<this.pieces_.length;e++)""!==this.pieces_[e]&&(t+="/"+this.pieces_[e]);return t||"/"}}function ue(){return new ce("")}function le(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function he(t){return t.pieces_.length-t.pieceNum_}function de(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ce(t.pieces_,e)}function fe(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function pe(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)""!==t.pieces_[n]&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function me(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ve(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ce(e,0)}function ge(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ce)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const t=e.split("/");for(let e=0;e<t.length;e++)t[e].length>0&&n.push(t[e])}return new ce(n,0)}function ye(t){return t.pieceNum_>=t.pieces_.length}function _e(t,e){const n=le(t),r=le(e);if(null===n)return e;if(n===r)return _e(de(t),de(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function be(t,e){if(he(t)!==he(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function we(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(he(t)>he(e))return!1;while(n<t.pieces_.length){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class Ce{constructor(t,e){this.errorPrefix_=e,this.parts_=me(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=Object(o["F"])(this.parts_[n]);ke(this)}}function Ie(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Object(o["F"])(e),ke(t)}function Te(t){const e=t.parts_.pop();t.byteLength_-=Object(o["F"])(e),t.parts_.length>0&&(t.byteLength_-=1)}function ke(t){if(t.byteLength_>ae)throw new Error(t.errorPrefix_+"has a key path longer than "+ae+" bytes ("+t.byteLength_+").");if(t.parts_.length>se)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+se+") or object contains a cycle "+Oe(t))}function Oe(t){return 0===t.parts_.length?"":"in property '"+t.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee extends ie{constructor(){let t,e;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(e="visibilitychange",t="hidden"):"undefined"!==typeof document["mozHidden"]?(e="mozvisibilitychange",t="mozHidden"):"undefined"!==typeof document["msHidden"]?(e="msvisibilitychange",t="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(e="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,e&&document.addEventListener(e,()=>{const e=!document[t];e!==this.visible_&&(this.visible_=e,this.trigger("visible",e))},!1)}static getInstance(){return new Ee}getInitialEvent(t){return Object(o["e"])("visible"===t,"Unknown event type: "+t),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe=1e3,Se=3e5,Pe=3e3,Ne=3e4,Ae=1.3,Re=3e4,je="server_kill",Le=3;class Me extends re{constructor(t,e,n,r,i,s,a,c){if(super(),this.repoInfo_=t,this.applicationId_=e,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Me.nextPersistentConnectionId_++,this.log_=T("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=xe,this.maxReconnectDelay_=Se,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Object(o["x"])())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ee.getInstance().on("visible",this.onVisible_,this),-1===t.host.indexOf("fblocal")&&oe.getInstance().on("online",this.onOnline_,this)}sendRequest(t,e,n){const r=++this.requestNumber_,i={r:r,a:t,b:e};this.log_(Object(o["H"])(i)),Object(o["e"])(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(t){this.initConnection_();const e=new o["a"],n={p:t._path.toString(),q:t._queryObject},r={action:"g",request:n,onComplete:t=>{const r=t["d"];"ok"===t["s"]?(this.onDataUpdate_(n["p"],r,!1,null),e.resolve(r)):e.reject(r)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const t=this.outstandingGets_[i];void 0!==t&&r===t&&(delete this.outstandingGets_[i],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+i+" timed out on connection"),e.reject(new Error("Client is offline.")))},Pe),this.connected_&&this.sendGet_(i),e.promise}listen(t,e,n,r){this.initConnection_();const i=t._queryIdentifier,s=t._path.toString();this.log_("Listen called for "+s+" "+i),this.listens.has(s)||this.listens.set(s,new Map),Object(o["e"])(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Object(o["e"])(!this.listens.get(s).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:e,query:t,tag:n};this.listens.get(s).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(t){const e=this.outstandingGets_[t];this.sendRequest("g",e.request,n=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),e.onComplete&&e.onComplete(n)})}sendListen_(t){const e=t.query,n=e._path.toString(),r=e._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n},o="q";t.tag&&(i["q"]=e._queryObject,i["t"]=t.tag),i["h"]=t.hashFn(),this.sendRequest(o,i,i=>{const o=i["d"],s=i["s"];Me.warnOnListenWarnings_(o,e);const a=this.listens.get(n)&&this.listens.get(n).get(r);a===t&&(this.log_("listen response",i),"ok"!==s&&this.removeListen_(n,r),t.onComplete&&t.onComplete(s,o))})}static warnOnListenWarnings_(t,e){if(t&&"object"===typeof t&&Object(o["j"])(t,"w")){const n=Object(o["E"])(t,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const t='".indexOn": "'+e._queryParams.getIndex().toString()+'"',n=e._path.toString();E(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${t} at `+n+" to your security rules for better performance.")}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){const e=t&&40===t.length;(e||Object(o["s"])(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ne)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,e=Object(o["z"])(t)?"auth":"gauth",n={cred:t};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(e,n,e=>{const n=e["s"],r=e["d"]||"error";this.authToken_===t&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const e=t["s"],n=t["d"]||"error";"ok"===e?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(e,n)})}unlisten(t,e){const n=t._path.toString(),r=t._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),Object(o["e"])(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const i=this.removeListen_(n,r);i&&this.connected_&&this.sendUnlisten_(n,r,t._queryObject,e)}sendUnlisten_(t,e,n,r){this.log_("Unlisten on "+t+" for "+e);const i={p:t},o="n";r&&(i["q"]=n,i["t"]=r),this.sendRequest(o,i)}onDisconnectPut(t,e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:e,onComplete:n})}onDisconnectMerge(t,e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:e,onComplete:n})}onDisconnectCancel(t,e){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,e):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:e})}sendOnDisconnect_(t,e,n,r){const i={p:e,d:n};this.log_("onDisconnect "+t,i),this.sendRequest(t,i,t=>{r&&setTimeout(()=>{r(t["s"],t["d"])},Math.floor(0))})}put(t,e,n,r){this.putInternal("p",t,e,n,r)}merge(t,e,n,r){this.putInternal("m",t,e,n,r)}putInternal(t,e,n,r,i){this.initConnection_();const o={p:e,d:n};void 0!==i&&(o["h"]=i),this.outstandingPuts_.push({action:t,request:o,onComplete:r}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+e)}sendPut_(t){const e=this.outstandingPuts_[t].action,n=this.outstandingPuts_[t].request,r=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(e,n,n=>{this.log_(e+" response",n),delete this.outstandingPuts_[t],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n["s"],n["d"])})}reportStats(t){if(this.connected_){const e={c:t};this.log_("reportStats",e),this.sendRequest("s",e,t=>{const e=t["s"];if("ok"!==e){const e=t["d"];this.log_("reportStats","Error sending stats: "+e)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+Object(o["H"])(t));const e=t["r"],n=this.requestCBHash_[e];n&&(delete this.requestCBHash_[e],n(t["b"]))}else{if("error"in t)throw"A server-side error has occurred: "+t["error"];"a"in t&&this.onDataPush_(t["a"],t["b"])}}onDataPush_(t,e){this.log_("handleServerMessage",t,e),"d"===t?this.onDataUpdate_(e["p"],e["d"],!1,e["t"]):"m"===t?this.onDataUpdate_(e["p"],e["d"],!0,e["t"]):"c"===t?this.onListenRevoked_(e["p"],e["q"]):"ac"===t?this.onAuthRevoked_(e["s"],e["d"]):"apc"===t?this.onAppCheckRevoked_(e["s"],e["d"]):"sd"===t?this.onSecurityDebugPacket_(e):k("Unrecognized action received from server: "+Object(o["H"])(t)+"\nAre you using the latest client?")}onReady_(t,e){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(t),this.lastSessionId=e,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){Object(o["e"])(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=xe,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=xe,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const t=(new Date).getTime()-this.lastConnectionEstablishedTime_;t>Re&&(this.reconnectDelay_=xe),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const t=(new Date).getTime()-this.lastConnectionAttemptTime_;let e=Math.max(0,this.reconnectDelay_-t);e=Math.random()*e,this.log_("Trying to reconnect in "+e+"ms"),this.scheduleConnect_(e),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Ae)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),e=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Me.nextConnectionId_++,i=this.lastSessionId;let s=!1,a=null;const c=function(){a?a.close():(s=!0,n())},u=function(t){Object(o["e"])(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(t)};this.realtime_={close:c,sendRequest:u};const l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[o,c]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);s?I("getToken() completed but was canceled"):(I("getToken() completed. Creating connection."),this.authToken_=o&&o.accessToken,this.appCheckToken_=c&&c.token,a=new ne(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,e,n,t=>{E(t+" ("+this.repoInfo_.toString()+")"),this.interrupt(je)},i))}catch(k){this.log_("Failed to get token: "+k),s||(this.repoInfo_.nodeAdmin&&E(k),c())}}}interrupt(t){I("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){I("Resuming connection for reason: "+t),delete this.interruptReasons_[t],Object(o["u"])(this.interruptReasons_)&&(this.reconnectDelay_=xe,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const e=t-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:e})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const e=this.outstandingPuts_[t];e&&"h"in e.request&&e.queued&&(e.onComplete&&e.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(t,e){let n;n=e?e.map(t=>M(t)).join("$"):"default";const r=this.removeListen_(t,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(t,e){const n=new ce(t).toString();let r;if(this.listens.has(n)){const t=this.listens.get(n);r=t.get(e),t.delete(e),0===t.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(t,e){I("Auth token revoked: "+t+"/"+e),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Le&&(this.reconnectDelay_=Ne,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,e){I("App check token revoked: "+t+"/"+e),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Le&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const e of t.values())this.sendListen_(e);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);while(this.onDisconnectRequestQueue_.length){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let e="js";Object(o["x"])()&&(e=this.repoInfo_.nodeAdmin?"admin_node":"node"),t["sdk."+e+"."+u.replace(/\./g,"-")]=1,Object(o["w"])()?t["framework.cordova"]=1:Object(o["y"])()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=oe.getInstance().currentlyOnline();return Object(o["u"])(this.interruptReasons_)&&t}}Me.nextPersistentConnectionId_=0,Me.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class De{constructor(t,e){this.name=t,this.node=e}static Wrap(t,e){return new De(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,e){const n=new De(N,t),r=new De(N,e);return 0!==this.compare(n,r)}minPost(){return De.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $e;class Ue extends Fe{static get __EMPTY_NODE(){return $e}static set __EMPTY_NODE(t){$e=t}compare(t,e){return R(t.name,e.name)}isDefinedOn(t){throw Object(o["f"])("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,e){return!1}minPost(){return De.MIN}maxPost(){return new De(A,$e)}makePost(t,e){return Object(o["e"])("string"===typeof t,"KeyIndex indexValue must always be a string."),new De(t,$e)}toString(){return".key"}}const ze=new Ue;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(t,e,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;while(!t.isEmpty())if(t=t,o=e?n(t.key,e):1,r&&(o*=-1),o<0)t=this.isReverse_?t.left:t.right;else{if(0===o){this.nodeStack_.push(t);break}this.nodeStack_.push(t),t=this.isReverse_?t.right:t.left}}getNext(){if(0===this.nodeStack_.length)return null;let t,e=this.nodeStack_.pop();if(t=this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value},this.isReverse_){e=e.left;while(!e.isEmpty())this.nodeStack_.push(e),e=e.right}else{e=e.right;while(!e.isEmpty())this.nodeStack_.push(e),e=e.left}return t}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class Ve{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Ve.RED,this.left=null!=r?r:We.EMPTY_NODE,this.right=null!=i?i:We.EMPTY_NODE}copy(t,e,n,r,i){return new Ve(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return We.EMPTY_NODE;let t=this;return t.left.isRed_()||t.left.left.isRed_()||(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,e){let n,r;if(n=this,e(t,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(t,e),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===e(t,n.key)){if(n.right.isEmpty())return We.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(t,e))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,Ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,Ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}Ve.RED=!0,Ve.BLACK=!1;class He{copy(t,e,n,r,i){return this}insert(t,e,n){return new Ve(t,e,null)}remove(t,e){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class We{constructor(t,e=We.EMPTY_NODE){this.comparator_=t,this.root_=e}insert(t,e){return new We(this.comparator_,this.root_.insert(t,e,this.comparator_).copy(null,null,Ve.BLACK,null,null))}remove(t){return new We(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Ve.BLACK,null,null))}get(t){let e,n=this.root_;while(!n.isEmpty()){if(e=this.comparator_(t,n.key),0===e)return n.value;e<0?n=n.left:e>0&&(n=n.right)}return null}getPredecessorKey(t){let e,n=this.root_,r=null;while(!n.isEmpty()){if(e=this.comparator_(t,n.key),0===e){if(n.left.isEmpty())return r?r.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}e<0?n=n.left:e>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new qe(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,e){return new qe(this.root_,t,this.comparator_,!1,e)}getReverseIteratorFrom(t,e){return new qe(this.root_,t,this.comparator_,!0,e)}getReverseIterator(t){return new qe(this.root_,null,this.comparator_,!0,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Be(t,e){return R(t.name,e.name)}function Ge(t,e){return R(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ke;function Ye(t){Ke=t}We.EMPTY_NODE=new He;const Xe=function(t){return"number"===typeof t?"number:"+$(t):"string:"+t},Je=function(t){if(t.isLeafNode()){const e=t.val();Object(o["e"])("string"===typeof e||"number"===typeof e||"object"===typeof e&&Object(o["j"])(e,".sv"),"Priority must be a string or number.")}else Object(o["e"])(t===Ke||t.isEmpty(),"priority of unexpected type.");Object(o["e"])(t===Ke||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Qe,Ze,tn;class en{constructor(t,e=en.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=e,this.lazyHash_=null,Object(o["e"])(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Je(this.priorityNode_)}static set __childrenNodeConstructor(t){Qe=t}static get __childrenNodeConstructor(){return Qe}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new en(this.value_,t)}getImmediateChild(t){return".priority"===t?this.priorityNode_:en.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return ye(t)?this:".priority"===le(t)?this.priorityNode_:en.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,e){return null}updateImmediateChild(t,e){return".priority"===t?this.updatePriority(e):e.isEmpty()&&".priority"!==t?this:en.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,e).updatePriority(this.priorityNode_)}updateChild(t,e){const n=le(t);return null===n?e:e.isEmpty()&&".priority"!==n?this:(Object(o["e"])(".priority"!==n||1===he(t),".priority must be the last token in a path"),this.updateImmediateChild(n,en.__childrenNodeConstructor.EMPTY_NODE.updateChild(de(t),e)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,e){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+Xe(this.priorityNode_.val())+":");const e=typeof this.value_;t+=e+":",t+="number"===e?$(this.value_):this.value_,this.lazyHash_=y(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===en.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof en.__childrenNodeConstructor?-1:(Object(o["e"])(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const e=typeof t.value_,n=typeof this.value_,r=en.VALUE_TYPE_ORDER.indexOf(e),i=en.VALUE_TYPE_ORDER.indexOf(n);return Object(o["e"])(r>=0,"Unknown leaf type: "+e),Object(o["e"])(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const e=t;return this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}return!1}}function nn(t){Ze=t}function rn(t){tn=t}en.VALUE_TYPE_ORDER=["object","boolean","number","string"];class on extends Fe{compare(t,e){const n=t.node.getPriority(),r=e.node.getPriority(),i=n.compareTo(r);return 0===i?R(t.name,e.name):i}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,e){return!t.getPriority().equals(e.getPriority())}minPost(){return De.MIN}maxPost(){return new De(A,new en("[PRIORITY-POST]",tn))}makePost(t,e){const n=Ze(t);return new De(e,new en("[PRIORITY-POST]",n))}toString(){return".priority"}}const sn=new on,an=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t){const e=t=>parseInt(Math.log(t)/an,10),n=t=>parseInt(Array(t+1).join("1"),2);this.count=e(t+1),this.current_=this.count-1;const r=n(this.count);this.bits_=t+1&r}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const un=function(t,e,n,r){t.sort(e);const i=function(e,r){const o=r-e;let s,a;if(0===o)return null;if(1===o)return s=t[e],a=n?n(s):s,new Ve(a,s.node,Ve.BLACK,null,null);{const c=parseInt(o/2,10)+e,u=i(e,c),l=i(c+1,r);return s=t[c],a=n?n(s):s,new Ve(a,s.node,Ve.BLACK,u,l)}},o=function(e){let r=null,o=null,s=t.length;const a=function(e,r){const o=s-e,a=s;s-=e;const u=i(o+1,a),l=t[o],h=n?n(l):l;c(new Ve(h,l.node,r,null,u))},c=function(t){r?(r.left=t,r=t):(o=t,r=t)};for(let t=0;t<e.count;++t){const n=e.nextBitIsOne(),r=Math.pow(2,e.count-(t+1));n?a(r,Ve.BLACK):(a(r,Ve.BLACK),a(r,Ve.RED))}return o},s=new cn(t.length),a=o(s);return new We(r||e,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ln;const hn={};class dn{constructor(t,e){this.indexes_=t,this.indexSet_=e}static get Default(){return Object(o["e"])(hn&&sn,"ChildrenNode.ts has not been loaded"),ln=ln||new dn({".priority":hn},{".priority":sn}),ln}get(t){const e=Object(o["E"])(this.indexes_,t);if(!e)throw new Error("No index defined for "+t);return e instanceof We?e:null}hasIndex(t){return Object(o["j"])(this.indexSet_,t.toString())}addIndex(t,e){Object(o["e"])(t!==ze,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=e.getIterator(De.Wrap);let s,a=i.getNext();while(a)r=r||t.isDefinedOn(a.node),n.push(a),a=i.getNext();s=r?un(n,t.getCompare()):hn;const c=t.toString(),u=Object.assign({},this.indexSet_);u[c]=t;const l=Object.assign({},this.indexes_);return l[c]=s,new dn(l,u)}addToIndexes(t,e){const n=Object(o["B"])(this.indexes_,(n,r)=>{const i=Object(o["E"])(this.indexSet_,r);if(Object(o["e"])(i,"Missing index implementation for "+r),n===hn){if(i.isDefinedOn(t.node)){const n=[],r=e.getIterator(De.Wrap);let o=r.getNext();while(o)o.name!==t.name&&n.push(o),o=r.getNext();return n.push(t),un(n,i.getCompare())}return hn}{const r=e.get(t.name);let i=n;return r&&(i=i.remove(new De(t.name,r))),i.insert(t,t.node)}});return new dn(n,this.indexSet_)}removeFromIndexes(t,e){const n=Object(o["B"])(this.indexes_,n=>{if(n===hn)return n;{const r=e.get(t.name);return r?n.remove(new De(t.name,r)):n}});return new dn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fn;class pn{constructor(t,e,n){this.children_=t,this.priorityNode_=e,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Je(this.priorityNode_),this.children_.isEmpty()&&Object(o["e"])(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return fn||(fn=new pn(new We(Ge),null,dn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fn}updatePriority(t){return this.children_.isEmpty()?this:new pn(this.children_,t,this.indexMap_)}getImmediateChild(t){if(".priority"===t)return this.getPriority();{const e=this.children_.get(t);return null===e?fn:e}}getChild(t){const e=le(t);return null===e?this:this.getImmediateChild(e).getChild(de(t))}hasChild(t){return null!==this.children_.get(t)}updateImmediateChild(t,e){if(Object(o["e"])(e,"We should always be passing snapshot nodes"),".priority"===t)return this.updatePriority(e);{const n=new De(t,e);let r,i;e.isEmpty()?(r=this.children_.remove(t),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(t,e),i=this.indexMap_.addToIndexes(n,this.children_));const o=r.isEmpty()?fn:this.priorityNode_;return new pn(r,o,i)}}updateChild(t,e){const n=le(t);if(null===n)return e;{Object(o["e"])(".priority"!==le(t)||1===he(t),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(de(t),e);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const e={};let n=0,r=0,i=!0;if(this.forEachChild(sn,(o,s)=>{e[o]=s.val(t),n++,i&&pn.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!t&&i&&r<2*n){const t=[];for(const n in e)t[n]=e[n];return t}return t&&!this.getPriority().isEmpty()&&(e[".priority"]=this.getPriority().val()),e}hash(){if(null===this.lazyHash_){let t="";this.getPriority().isEmpty()||(t+="priority:"+Xe(this.getPriority().val())+":"),this.forEachChild(sn,(e,n)=>{const r=n.hash();""!==r&&(t+=":"+e+":"+r)}),this.lazyHash_=""===t?"":y(t)}return this.lazyHash_}getPredecessorChildName(t,e,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new De(t,e));return n?n.name:null}return this.children_.getPredecessorKey(t)}getFirstChildName(t){const e=this.resolveIndex_(t);if(e){const t=e.minKey();return t&&t.name}return this.children_.minKey()}getFirstChild(t){const e=this.getFirstChildName(t);return e?new De(e,this.children_.get(e)):null}getLastChildName(t){const e=this.resolveIndex_(t);if(e){const t=e.maxKey();return t&&t.name}return this.children_.maxKey()}getLastChild(t){const e=this.getLastChildName(t);return e?new De(e,this.children_.get(e)):null}forEachChild(t,e){const n=this.resolveIndex_(t);return n?n.inorderTraversal(t=>e(t.name,t.node)):this.children_.inorderTraversal(e)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,e){const n=this.resolveIndex_(e);if(n)return n.getIteratorFrom(t,t=>t);{const n=this.children_.getIteratorFrom(t.name,De.Wrap);let r=n.peek();while(null!=r&&e.compare(r,t)<0)n.getNext(),r=n.peek();return n}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,e){const n=this.resolveIndex_(e);if(n)return n.getReverseIteratorFrom(t,t=>t);{const n=this.children_.getReverseIteratorFrom(t.name,De.Wrap);let r=n.peek();while(null!=r&&e.compare(r,t)>0)n.getNext(),r=n.peek();return n}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===vn?-1:0}withIndex(t){if(t===ze||this.indexMap_.hasIndex(t))return this;{const e=this.indexMap_.addIndex(t,this.children_);return new pn(this.children_,this.priorityNode_,e)}}isIndexed(t){return t===ze||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const e=t;if(this.getPriority().equals(e.getPriority())){if(this.children_.count()===e.children_.count()){const t=this.getIterator(sn),n=e.getIterator(sn);let r=t.getNext(),i=n.getNext();while(r&&i){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=t.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(t){return t===ze?null:this.indexMap_.get(t.toString())}}pn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class mn extends pn{constructor(){super(new We(Ge),pn.EMPTY_NODE,dn.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return pn.EMPTY_NODE}isEmpty(){return!1}}const vn=new mn;Object.defineProperties(De,{MIN:{value:new De(N,pn.EMPTY_NODE)},MAX:{value:new De(A,vn)}}),Ue.__EMPTY_NODE=pn.EMPTY_NODE,en.__childrenNodeConstructor=pn,Ye(vn),rn(vn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gn=!0;function yn(t,e=null){if(null===t)return pn.EMPTY_NODE;if("object"===typeof t&&".priority"in t&&(e=t[".priority"]),Object(o["e"])(null===e||"string"===typeof e||"number"===typeof e||"object"===typeof e&&".sv"in e,"Invalid priority type found: "+typeof e),"object"===typeof t&&".value"in t&&null!==t[".value"]&&(t=t[".value"]),"object"!==typeof t||".sv"in t){const n=t;return new en(n,yn(e))}if(t instanceof Array||!gn){let n=pn.EMPTY_NODE;return F(t,(e,r)=>{if(Object(o["j"])(t,e)&&"."!==e.substring(0,1)){const t=yn(r);!t.isLeafNode()&&t.isEmpty()||(n=n.updateImmediateChild(e,t))}}),n.updatePriority(yn(e))}{const n=[];let r=!1;const i=t;if(F(i,(t,e)=>{if("."!==t.substring(0,1)){const i=yn(e);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new De(t,i)))}}),0===n.length)return pn.EMPTY_NODE;const o=un(n,Be,t=>t.name,Ge);if(r){const t=un(n,sn.getCompare());return new pn(o,yn(e),new dn({".priority":t},{".priority":sn}))}return new pn(o,yn(e),dn.Default)}}nn(yn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _n extends Fe{constructor(t){super(),this.indexPath_=t,Object(o["e"])(!ye(t)&&".priority"!==le(t),"Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,e){const n=this.extractChild(t.node),r=this.extractChild(e.node),i=n.compareTo(r);return 0===i?R(t.name,e.name):i}makePost(t,e){const n=yn(t),r=pn.EMPTY_NODE.updateChild(this.indexPath_,n);return new De(e,r)}maxPost(){const t=pn.EMPTY_NODE.updateChild(this.indexPath_,vn);return new De(A,t)}toString(){return me(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends Fe{compare(t,e){const n=t.node.compareTo(e.node);return 0===n?R(t.name,e.name):n}isDefinedOn(t){return!0}indexedValueChanged(t,e){return!t.equals(e)}minPost(){return De.MIN}maxPost(){return De.MAX}makePost(t,e){const n=yn(t);return new De(e,n)}toString(){return".value"}}const wn=new bn,Cn="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){let t=0;const e=[]})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function In(t){return{type:"value",snapshotNode:t}}function Tn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function kn(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function On(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function En(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(t){this.index_=t}updateChild(t,e,n,r,i,s){Object(o["e"])(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=t.getImmediateChild(e);return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()?t:(null!=s&&(n.isEmpty()?t.hasChild(e)?s.trackChildChange(kn(e,a)):Object(o["e"])(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?s.trackChildChange(Tn(e,n)):s.trackChildChange(On(e,n,a))),t.isLeafNode()&&n.isEmpty()?t:t.updateImmediateChild(e,n).withIndex(this.index_))}updateFullNode(t,e,n){return null!=n&&(t.isLeafNode()||t.forEachChild(sn,(t,r)=>{e.hasChild(t)||n.trackChildChange(kn(t,r))}),e.isLeafNode()||e.forEachChild(sn,(e,r)=>{if(t.hasChild(e)){const i=t.getImmediateChild(e);i.equals(r)||n.trackChildChange(On(e,r,i))}else n.trackChildChange(Tn(e,r))})),e.withIndex(this.index_)}updatePriority(t,e){return t.isEmpty()?pn.EMPTY_NODE:t.updatePriority(e)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(t){this.indexedFilter_=new xn(t.getIndex()),this.index_=t.getIndex(),this.startPost_=Sn.getStartPost_(t),this.endPost_=Sn.getEndPost_(t)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){return this.index_.compare(this.getStartPost(),t)<=0&&this.index_.compare(t,this.getEndPost())<=0}updateChild(t,e,n,r,i,o){return this.matches(new De(e,n))||(n=pn.EMPTY_NODE),this.indexedFilter_.updateChild(t,e,n,r,i,o)}updateFullNode(t,e,n){e.isLeafNode()&&(e=pn.EMPTY_NODE);let r=e.withIndex(this.index_);r=r.updatePriority(pn.EMPTY_NODE);const i=this;return e.forEachChild(sn,(t,e)=>{i.matches(new De(t,e))||(r=r.updateImmediateChild(t,pn.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,r,n)}updatePriority(t,e){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const e=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),e)}return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const e=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),e)}return t.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(t){this.rangedFilter_=new Sn(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft()}updateChild(t,e,n,r,i,o){return this.rangedFilter_.matches(new De(e,n))||(n=pn.EMPTY_NODE),t.getImmediateChild(e).equals(n)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,e,n,r,i,o):this.fullLimitUpdateChild_(t,e,n,i,o)}updateFullNode(t,e,n){let r;if(e.isLeafNode()||e.isEmpty())r=pn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<e.numChildren()&&e.isIndexed(this.index_)){let t;r=pn.EMPTY_NODE.withIndex(this.index_),t=this.reverse_?e.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):e.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(t.hasNext()&&n<this.limit_){const e=t.getNext();let i;if(i=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),e)<=0:this.index_.compare(e,this.rangedFilter_.getEndPost())<=0,!i)break;r=r.updateImmediateChild(e.name,e.node),n++}}else{let t,n,i,o;if(r=e.withIndex(this.index_),r=r.updatePriority(pn.EMPTY_NODE),this.reverse_){o=r.getReverseIterator(this.index_),t=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const e=this.index_.getCompare();i=(t,n)=>e(n,t)}else o=r.getIterator(this.index_),t=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),i=this.index_.getCompare();let s=0,a=!1;while(o.hasNext()){const e=o.getNext();!a&&i(t,e)<=0&&(a=!0);const c=a&&s<this.limit_&&i(e,n)<=0;c?s++:r=r.updateImmediateChild(e.name,pn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,r,n)}updatePriority(t,e){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,e,n,r,i){let s;if(this.reverse_){const t=this.index_.getCompare();s=(e,n)=>t(n,e)}else s=this.index_.getCompare();const a=t;Object(o["e"])(a.numChildren()===this.limit_,"");const c=new De(e,n),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),l=this.rangedFilter_.matches(c);if(a.hasChild(e)){const t=a.getImmediateChild(e);let o=r.getChildAfterChild(this.index_,u,this.reverse_);while(null!=o&&(o.name===e||a.hasChild(o.name)))o=r.getChildAfterChild(this.index_,o,this.reverse_);const h=null==o?1:s(o,c),d=l&&!n.isEmpty()&&h>=0;if(d)return null!=i&&i.trackChildChange(On(e,n,t)),a.updateImmediateChild(e,n);{null!=i&&i.trackChildChange(kn(e,t));const n=a.updateImmediateChild(e,pn.EMPTY_NODE),r=null!=o&&this.rangedFilter_.matches(o);return r?(null!=i&&i.trackChildChange(Tn(o.name,o.node)),n.updateImmediateChild(o.name,o.node)):n}}return n.isEmpty()?t:l&&s(u,c)>=0?(null!=i&&(i.trackChildChange(kn(u.name,u.node)),i.trackChildChange(Tn(e,n))),a.updateImmediateChild(e,n).updateImmediateChild(u.name,pn.EMPTY_NODE)):t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=sn}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Object(o["e"])(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Object(o["e"])(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:N}hasEnd(){return this.endSet_}getIndexEndValue(){return Object(o["e"])(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Object(o["e"])(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:A}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Object(o["e"])(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===sn}copy(){const t=new Nn;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function An(t){return t.loadsAllData()?new xn(t.getIndex()):t.hasLimit()?new Pn(t):new Sn(t)}function Rn(t){const e={};if(t.isDefault())return e;let n;return t.index_===sn?n="$priority":t.index_===wn?n="$value":t.index_===ze?n="$key":(Object(o["e"])(t.index_ instanceof _n,"Unrecognized index type!"),n=t.index_.toString()),e["orderBy"]=Object(o["H"])(n),t.startSet_&&(e["startAt"]=Object(o["H"])(t.indexStartValue_),t.startNameSet_&&(e["startAt"]+=","+Object(o["H"])(t.indexStartName_))),t.endSet_&&(e["endAt"]=Object(o["H"])(t.indexEndValue_),t.endNameSet_&&(e["endAt"]+=","+Object(o["H"])(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e["limitToFirst"]=t.limit_:e["limitToLast"]=t.limit_),e}function jn(t){const e={};if(t.startSet_&&(e["sp"]=t.indexStartValue_,t.startNameSet_&&(e["sn"]=t.indexStartName_)),t.endSet_&&(e["ep"]=t.indexEndValue_,t.endNameSet_&&(e["en"]=t.indexEndName_)),t.limitSet_){e["l"]=t.limit_;let n=t.viewFrom_;""===n&&(n=t.isViewFromLeft()?"l":"r"),e["vf"]=n}return t.index_!==sn&&(e["i"]=t.index_.toString()),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends re{constructor(t,e,n,r){super(),this.repoInfo_=t,this.onDataUpdate_=e,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=T("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,e){return void 0!==e?"tag$"+e:(Object(o["e"])(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,e,n,r){const i=t._path.toString();this.log_("Listen called for "+i+" "+t._queryIdentifier);const s=Ln.getListenId_(t,n),a={};this.listens_[s]=a;const c=Rn(t._queryParams);this.restRequest_(i+".json",c,(t,e)=>{let c=e;if(404===t&&(c=null,t=null),null===t&&this.onDataUpdate_(i,c,!1,n),Object(o["E"])(this.listens_,s)===a){let e;e=t?401===t?"permission_denied":"rest_error:"+t:"ok",r(e,null)}})}unlisten(t,e){const n=Ln.getListenId_(t,e);delete this.listens_[n]}get(t){const e=Rn(t._queryParams),n=t._path.toString(),r=new o["a"];return this.restRequest_(n+".json",e,(t,e)=>{let i=e;404===t&&(i=null,t=null),null===t?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))}),r.promise}refreshAuthToken(t){}restRequest_(t,e={},n){return e["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(e["auth"]=r.accessToken),i&&i.token&&(e["ac"]=i.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+Object(o["C"])(e);this.log_("Sending REST request for "+s);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+s+" received. status:",a.status,"response:",a.responseText);let e=null;if(a.status>=200&&a.status<300){try{e=Object(o["A"])(a.responseText)}catch(t){E("Failed to parse JSON response for "+s+": "+a.responseText)}n(null,e)}else 401!==a.status&&404!==a.status&&E("Got unsuccessful REST response for "+s+" Status: "+a.status),n(a.status);n=null}},a.open("GET",s,!0),a.send()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(){this.rootNode_=pn.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,e){this.rootNode_=this.rootNode_.updateChild(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(){return{value:null,children:new Map}}function Fn(t,e,n){if(ye(e))t.value=n,t.children.clear();else if(null!==t.value)t.value=t.value.updateChild(e,n);else{const r=le(e);t.children.has(r)||t.children.set(r,Dn());const i=t.children.get(r);e=de(e),Fn(i,e,n)}}function $n(t,e,n){null!==t.value?n(e,t.value):Un(t,(t,r)=>{const i=new ce(e.toString()+"/"+t);$n(r,i,n)})}function Un(t,e){t.children.forEach((t,n)=>{e(n,t)})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),e=Object.assign({},t);return this.last_&&F(this.last_,(t,n)=>{e[t]=e[t]-n}),this.last_=t,e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=1e4,Vn=3e4,Hn=3e5;class Wn{constructor(t,e){this.server_=e,this.statsToReport_={},this.statsListener_=new zn(t);const n=qn+(Vn-qn)*Math.random();K(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const t=this.statsListener_.get(),e={};let n=!1;F(t,(t,r)=>{r>0&&Object(o["j"])(this.statsToReport_,t)&&(e[t]=r,n=!0)}),n&&this.server_.reportStats(e),K(this.reportStats_.bind(this),Math.floor(2*Math.random()*Hn))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bn;function Gn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Kn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Yn(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t[t["OVERWRITE"]=0]="OVERWRITE",t[t["MERGE"]=1]="MERGE",t[t["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",t[t["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(Bn||(Bn={}));class Xn{constructor(t,e,n){this.path=t,this.affectedTree=e,this.revert=n,this.type=Bn.ACK_USER_WRITE,this.source=Gn()}operationForChild(t){if(ye(this.path)){if(null!=this.affectedTree.value)return Object(o["e"])(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const e=this.affectedTree.subtree(new ce(t));return new Xn(ue(),e,this.revert)}}return Object(o["e"])(le(this.path)===t,"operationForChild called for unrelated child."),new Xn(de(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jn{constructor(t,e,n){this.source=t,this.path=e,this.snap=n,this.type=Bn.OVERWRITE}operationForChild(t){return ye(this.path)?new Jn(this.source,ue(),this.snap.getImmediateChild(t)):new Jn(this.source,de(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(t,e,n){this.source=t,this.path=e,this.children=n,this.type=Bn.MERGE}operationForChild(t){if(ye(this.path)){const e=this.children.subtree(new ce(t));return e.isEmpty()?null:e.value?new Jn(this.source,ue(),e.value):new Qn(this.source,ue(),e)}return Object(o["e"])(le(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new Qn(this.source,de(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(t,e,n){this.node_=t,this.fullyInitialized_=e,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(ye(t))return this.isFullyInitialized()&&!this.filtered_;const e=le(t);return this.isCompleteForChild(e)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function er(t,e,n,r){const i=[],o=[];return e.forEach(e=>{"child_changed"===e.type&&t.index_.indexedValueChanged(e.oldSnap,e.snapshotNode)&&o.push(En(e.childName,e.snapshotNode))}),nr(t,i,"child_removed",e,r,n),nr(t,i,"child_added",e,r,n),nr(t,i,"child_moved",o,r,n),nr(t,i,"child_changed",e,r,n),nr(t,i,"value",e,r,n),i}function nr(t,e,n,r,i,o){const s=r.filter(t=>t.type===n);s.sort((e,n)=>ir(t,e,n)),s.forEach(n=>{const r=rr(t,n,o);i.forEach(i=>{i.respondsTo(n.type)&&e.push(i.createEvent(r,t.query_))})})}function rr(t,e,n){return"value"===e.type||"child_removed"===e.type||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function ir(t,e,n){if(null==e.childName||null==n.childName)throw Object(o["f"])("Should only compare child_ events.");const r=new De(e.childName,e.snapshotNode),i=new De(n.childName,n.snapshotNode);return t.index_.compare(r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(t,e){return{eventCache:t,serverCache:e}}function sr(t,e,n,r){return or(new Zn(e,n,r),t.serverCache)}function ar(t,e,n,r){return or(t.eventCache,new Zn(e,n,r))}function cr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ur(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lr;const hr=()=>(lr||(lr=new We(j)),lr);class dr{constructor(t,e=hr()){this.value=t,this.children=e}static fromObject(t){let e=new dr(null);return F(t,(t,n)=>{e=e.set(new ce(t),n)}),e}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,e){if(null!=this.value&&e(this.value))return{path:ue(),value:this.value};if(ye(t))return null;{const n=le(t),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(de(t),e);if(null!=i){const t=ge(new ce(n),i.path);return{path:t,value:i.value}}return null}return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(ye(t))return this;{const e=le(t),n=this.children.get(e);return null!==n?n.subtree(de(t)):new dr(null)}}set(t,e){if(ye(t))return new dr(e,this.children);{const n=le(t),r=this.children.get(n)||new dr(null),i=r.set(de(t),e),o=this.children.insert(n,i);return new dr(this.value,o)}}remove(t){if(ye(t))return this.children.isEmpty()?new dr(null):new dr(null,this.children);{const e=le(t),n=this.children.get(e);if(n){const r=n.remove(de(t));let i;return i=r.isEmpty()?this.children.remove(e):this.children.insert(e,r),null===this.value&&i.isEmpty()?new dr(null):new dr(this.value,i)}return this}}get(t){if(ye(t))return this.value;{const e=le(t),n=this.children.get(e);return n?n.get(de(t)):null}}setTree(t,e){if(ye(t))return e;{const n=le(t),r=this.children.get(n)||new dr(null),i=r.setTree(de(t),e);let o;return o=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new dr(this.value,o)}}fold(t){return this.fold_(ue(),t)}fold_(t,e){const n={};return this.children.inorderTraversal((r,i)=>{n[r]=i.fold_(ge(t,r),e)}),e(t,this.value,n)}findOnPath(t,e){return this.findOnPath_(t,ue(),e)}findOnPath_(t,e,n){const r=!!this.value&&n(e,this.value);if(r)return r;if(ye(t))return null;{const r=le(t),i=this.children.get(r);return i?i.findOnPath_(de(t),ge(e,r),n):null}}foreachOnPath(t,e){return this.foreachOnPath_(t,ue(),e)}foreachOnPath_(t,e,n){if(ye(t))return this;{this.value&&n(e,this.value);const r=le(t),i=this.children.get(r);return i?i.foreachOnPath_(de(t),ge(e,r),n):new dr(null)}}foreach(t){this.foreach_(ue(),t)}foreach_(t,e){this.children.inorderTraversal((n,r)=>{r.foreach_(ge(t,n),e)}),this.value&&e(t,this.value)}foreachChild(t){this.children.inorderTraversal((e,n)=>{n.value&&t(e,n.value)})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(t){this.writeTree_=t}static empty(){return new fr(new dr(null))}}function pr(t,e,n){if(ye(e))return new fr(new dr(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(null!=r){const i=r.path;let o=r.value;const s=_e(i,e);return o=o.updateChild(s,n),new fr(t.writeTree_.set(i,o))}{const r=new dr(n),i=t.writeTree_.setTree(e,r);return new fr(i)}}}function mr(t,e,n){let r=t;return F(n,(t,n)=>{r=pr(r,ge(e,t),n)}),r}function vr(t,e){if(ye(e))return fr.empty();{const n=t.writeTree_.setTree(e,new dr(null));return new fr(n)}}function gr(t,e){return null!=yr(t,e)}function yr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return null!=n?t.writeTree_.get(n.path).getChild(_e(n.path,e)):null}function _r(t){const e=[],n=t.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(sn,(t,n)=>{e.push(new De(t,n))}):t.writeTree_.children.inorderTraversal((t,n)=>{null!=n.value&&e.push(new De(t,n.value))}),e}function br(t,e){if(ye(e))return t;{const n=yr(t,e);return new fr(null!=n?new dr(n):t.writeTree_.subtree(e))}}function wr(t){return t.writeTree_.isEmpty()}function Cr(t,e){return Ir(ue(),t.writeTree_,e)}function Ir(t,e,n){if(null!=e.value)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((e,i)=>{".priority"===e?(Object(o["e"])(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=Ir(ge(t,e),i,n)}),n.getChild(t).isEmpty()||null===r||(n=n.updateChild(ge(t,".priority"),r)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(t,e){return Br(e,t)}function kr(t,e,n,r,i){Object(o["e"])(r>t.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=pr(t.visibleWrites,e,n)),t.lastWriteId=r}function Or(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Er(t,e){const n=t.allWrites.findIndex(t=>t.writeId===e);Object(o["e"])(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,a=t.allWrites.length-1;while(i&&a>=0){const e=t.allWrites[a];e.visible&&(a>=n&&xr(e,r.path)?i=!1:we(r.path,e.path)&&(s=!0)),a--}if(i){if(s)return Sr(t),!0;if(r.snap)t.visibleWrites=vr(t.visibleWrites,r.path);else{const e=r.children;F(e,e=>{t.visibleWrites=vr(t.visibleWrites,ge(r.path,e))})}return!0}return!1}function xr(t,e){if(t.snap)return we(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&we(ge(t.path,n),e))return!0;return!1}function Sr(t){t.visibleWrites=Nr(t.allWrites,Pr,ue()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Pr(t){return t.visible}function Nr(t,e,n){let r=fr.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const t=s.path;let e;if(s.snap)we(n,t)?(e=_e(n,t),r=pr(r,e,s.snap)):we(t,n)&&(e=_e(t,n),r=pr(r,ue(),s.snap.getChild(e)));else{if(!s.children)throw Object(o["f"])("WriteRecord should have .snap or .children");if(we(n,t))e=_e(n,t),r=mr(r,e,s.children);else if(we(t,n))if(e=_e(t,n),ye(e))r=mr(r,ue(),s.children);else{const t=Object(o["E"])(s.children,le(e));if(t){const n=t.getChild(de(e));r=pr(r,ue(),n)}}}}}return r}function Ar(t,e,n,r,i){if(r||i){const o=br(t.visibleWrites,e);if(!i&&wr(o))return n;if(i||null!=n||gr(o,ue())){const o=function(t){return(t.visible||i)&&(!r||!~r.indexOf(t.writeId))&&(we(t.path,e)||we(e,t.path))},s=Nr(t.allWrites,o,e),a=n||pn.EMPTY_NODE;return Cr(s,a)}return null}{const r=yr(t.visibleWrites,e);if(null!=r)return r;{const r=br(t.visibleWrites,e);if(wr(r))return n;if(null!=n||gr(r,ue())){const t=n||pn.EMPTY_NODE;return Cr(r,t)}return null}}}function Rr(t,e,n){let r=pn.EMPTY_NODE;const i=yr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(sn,(t,e)=>{r=r.updateImmediateChild(t,e)}),r;if(n){const i=br(t.visibleWrites,e);return n.forEachChild(sn,(t,e)=>{const n=Cr(br(i,new ce(t)),e);r=r.updateImmediateChild(t,n)}),_r(i).forEach(t=>{r=r.updateImmediateChild(t.name,t.node)}),r}{const n=br(t.visibleWrites,e);return _r(n).forEach(t=>{r=r.updateImmediateChild(t.name,t.node)}),r}}function jr(t,e,n,r,i){Object(o["e"])(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ge(e,n);if(gr(t.visibleWrites,s))return null;{const e=br(t.visibleWrites,s);return wr(e)?i.getChild(n):Cr(e,i.getChild(n))}}function Lr(t,e,n,r){const i=ge(e,n),o=yr(t.visibleWrites,i);if(null!=o)return o;if(r.isCompleteForChild(n)){const e=br(t.visibleWrites,i);return Cr(e,r.getNode().getImmediateChild(n))}return null}function Mr(t,e){return yr(t.visibleWrites,e)}function Dr(t,e,n,r,i,o,s){let a;const c=br(t.visibleWrites,e),u=yr(c,ue());if(null!=u)a=u;else{if(null==n)return[];a=Cr(c,n)}if(a=a.withIndex(s),a.isEmpty()||a.isLeafNode())return[];{const t=[],e=s.getCompare(),n=o?a.getReverseIteratorFrom(r,s):a.getIteratorFrom(r,s);let c=n.getNext();while(c&&t.length<i)0!==e(c,r)&&t.push(c),c=n.getNext();return t}}function Fr(){return{visibleWrites:fr.empty(),allWrites:[],lastWriteId:-1}}function $r(t,e,n,r){return Ar(t.writeTree,t.treePath,e,n,r)}function Ur(t,e){return Rr(t.writeTree,t.treePath,e)}function zr(t,e,n,r){return jr(t.writeTree,t.treePath,e,n,r)}function qr(t,e){return Mr(t.writeTree,ge(t.treePath,e))}function Vr(t,e,n,r,i,o){return Dr(t.writeTree,t.treePath,e,n,r,i,o)}function Hr(t,e,n){return Lr(t.writeTree,t.treePath,e,n)}function Wr(t,e){return Br(ge(t.treePath,e),t.writeTree)}function Br(t,e){return{treePath:t,writeTree:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(){this.changeMap=new Map}trackChildChange(t){const e=t.type,n=t.childName;Object(o["e"])("child_added"===e||"child_changed"===e||"child_removed"===e,"Only child changes supported for tracking"),Object(o["e"])(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===e&&"child_removed"===i)this.changeMap.set(n,On(n,t.snapshotNode,r.snapshotNode));else if("child_removed"===e&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===e&&"child_changed"===i)this.changeMap.set(n,kn(n,r.oldSnap));else if("child_changed"===e&&"child_added"===i)this.changeMap.set(n,Tn(n,t.snapshotNode));else{if("child_changed"!==e||"child_changed"!==i)throw Object(o["f"])("Illegal combination of changes: "+t+" occurred after "+r);this.changeMap.set(n,On(n,t.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,t)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{getCompleteChild(t){return null}getChildAfterChild(t,e,n){return null}}const Yr=new Kr;class Xr{constructor(t,e,n=null){this.writes_=t,this.viewCache_=e,this.optCompleteServerCache_=n}getCompleteChild(t){const e=this.viewCache_.eventCache;if(e.isCompleteForChild(t))return e.getNode().getImmediateChild(t);{const e=null!=this.optCompleteServerCache_?new Zn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Hr(this.writes_,t,e)}}getChildAfterChild(t,e,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:ur(this.viewCache_),i=Vr(this.writes_,r,e,1,n,t);return 0===i.length?null:i[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(t){return{filter:t}}function Qr(t,e){Object(o["e"])(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),Object(o["e"])(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Zr(t,e,n,r,i){const s=new Gr;let a,c;if(n.type===Bn.OVERWRITE){const u=n;u.source.fromUser?a=ri(t,e,u.path,u.snap,r,i,s):(Object(o["e"])(u.source.fromServer,"Unknown source."),c=u.source.tagged||e.serverCache.isFiltered()&&!ye(u.path),a=ni(t,e,u.path,u.snap,r,i,c,s))}else if(n.type===Bn.MERGE){const u=n;u.source.fromUser?a=oi(t,e,u.path,u.children,r,i,s):(Object(o["e"])(u.source.fromServer,"Unknown source."),c=u.source.tagged||e.serverCache.isFiltered(),a=ai(t,e,u.path,u.children,r,i,c,s))}else if(n.type===Bn.ACK_USER_WRITE){const o=n;a=o.revert?li(t,e,o.path,r,i,s):ci(t,e,o.path,o.affectedTree,r,i,s)}else{if(n.type!==Bn.LISTEN_COMPLETE)throw Object(o["f"])("Unknown operation type: "+n.type);a=ui(t,e,n.path,r,s)}const u=s.getChanges();return ti(e,a,u),{viewCache:a,changes:u}}function ti(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=cr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(In(cr(e)))}}function ei(t,e,n,r,i,s){const a=e.eventCache;if(null!=qr(r,n))return e;{let c,u;if(ye(n))if(Object(o["e"])(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const n=ur(e),i=n instanceof pn?n:pn.EMPTY_NODE,o=Ur(r,i);c=t.filter.updateFullNode(e.eventCache.getNode(),o,s)}else{const n=$r(r,ur(e));c=t.filter.updateFullNode(e.eventCache.getNode(),n,s)}else{const l=le(n);if(".priority"===l){Object(o["e"])(1===he(n),"Can't have a priority with additional path components");const i=a.getNode();u=e.serverCache.getNode();const s=zr(r,n,i,u);c=null!=s?t.filter.updatePriority(i,s):a.getNode()}else{const o=de(n);let h;if(a.isCompleteForChild(l)){u=e.serverCache.getNode();const t=zr(r,n,a.getNode(),u);h=null!=t?a.getNode().getImmediateChild(l).updateChild(o,t):a.getNode().getImmediateChild(l)}else h=Hr(r,l,e.serverCache);c=null!=h?t.filter.updateChild(a.getNode(),l,h,o,i,s):a.getNode()}}return sr(e,c,a.isFullyInitialized()||ye(n),t.filter.filtersNodes())}}function ni(t,e,n,r,i,o,s,a){const c=e.serverCache;let u;const l=s?t.filter:t.filter.getIndexedFilter();if(ye(n))u=l.updateFullNode(c.getNode(),r,null);else if(l.filtersNodes()&&!c.isFiltered()){const t=c.getNode().updateChild(n,r);u=l.updateFullNode(c.getNode(),t,null)}else{const t=le(n);if(!c.isCompleteForPath(n)&&he(n)>1)return e;const i=de(n),o=c.getNode().getImmediateChild(t),s=o.updateChild(i,r);u=".priority"===t?l.updatePriority(c.getNode(),s):l.updateChild(c.getNode(),t,s,i,Yr,null)}const h=ar(e,u,c.isFullyInitialized()||ye(n),l.filtersNodes()),d=new Xr(i,h,o);return ei(t,h,n,i,d,a)}function ri(t,e,n,r,i,o,s){const a=e.eventCache;let c,u;const l=new Xr(i,e,o);if(ye(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,s),c=sr(e,u,!0,t.filter.filtersNodes());else{const i=le(n);if(".priority"===i)u=t.filter.updatePriority(e.eventCache.getNode(),r),c=sr(e,u,a.isFullyInitialized(),a.isFiltered());else{const o=de(n),u=a.getNode().getImmediateChild(i);let h;if(ye(o))h=r;else{const t=l.getCompleteChild(i);h=null!=t?".priority"===fe(o)&&t.getChild(ve(o)).isEmpty()?t:t.updateChild(o,r):pn.EMPTY_NODE}if(u.equals(h))c=e;else{const n=t.filter.updateChild(a.getNode(),i,h,o,l,s);c=sr(e,n,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function ii(t,e){return t.eventCache.isCompleteForChild(e)}function oi(t,e,n,r,i,o,s){let a=e;return r.foreach((r,c)=>{const u=ge(n,r);ii(e,le(u))&&(a=ri(t,a,u,c,i,o,s))}),r.foreach((r,c)=>{const u=ge(n,r);ii(e,le(u))||(a=ri(t,a,u,c,i,o,s))}),a}function si(t,e,n){return n.foreach((t,n)=>{e=e.updateChild(t,n)}),e}function ai(t,e,n,r,i,o,s,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c,u=e;c=ye(n)?r:new dr(null).setTree(n,r);const l=e.serverCache.getNode();return c.children.inorderTraversal((n,r)=>{if(l.hasChild(n)){const c=e.serverCache.getNode().getImmediateChild(n),l=si(t,c,r);u=ni(t,u,new ce(n),l,i,o,s,a)}}),c.children.inorderTraversal((n,r)=>{const c=!e.serverCache.isCompleteForChild(n)&&void 0===r.value;if(!l.hasChild(n)&&!c){const c=e.serverCache.getNode().getImmediateChild(n),l=si(t,c,r);u=ni(t,u,new ce(n),l,i,o,s,a)}}),u}function ci(t,e,n,r,i,o,s){if(null!=qr(i,n))return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(null!=r.value){if(ye(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return ni(t,e,n,c.getNode().getChild(n),i,o,a,s);if(ye(n)){let r=new dr(null);return c.getNode().forEachChild(ze,(t,e)=>{r=r.set(new ce(t),e)}),ai(t,e,n,r,i,o,a,s)}return e}{let u=new dr(null);return r.foreach((t,e)=>{const r=ge(n,t);c.isCompleteForPath(r)&&(u=u.set(t,c.getNode().getChild(r)))}),ai(t,e,n,u,i,o,a,s)}}function ui(t,e,n,r,i){const o=e.serverCache,s=ar(e,o.getNode(),o.isFullyInitialized()||ye(n),o.isFiltered());return ei(t,s,n,r,Yr,i)}function li(t,e,n,r,i,s){let a;if(null!=qr(r,n))return e;{const c=new Xr(r,e,i),u=e.eventCache.getNode();let l;if(ye(n)||".priority"===le(n)){let n;if(e.serverCache.isFullyInitialized())n=$r(r,ur(e));else{const t=e.serverCache.getNode();Object(o["e"])(t instanceof pn,"serverChildren would be complete if leaf node"),n=Ur(r,t)}n=n,l=t.filter.updateFullNode(u,n,s)}else{const i=le(n);let o=Hr(r,i,e.serverCache);null==o&&e.serverCache.isCompleteForChild(i)&&(o=u.getImmediateChild(i)),l=null!=o?t.filter.updateChild(u,i,o,de(n),c,s):e.eventCache.getNode().hasChild(i)?t.filter.updateChild(u,i,pn.EMPTY_NODE,de(n),c,s):u,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(a=$r(r,ur(e)),a.isLeafNode()&&(l=t.filter.updateFullNode(l,a,s)))}return a=e.serverCache.isFullyInitialized()||null!=qr(r,ue()),sr(e,l,a,t.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(t,e){this.query_=t,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new xn(n.getIndex()),i=An(n);this.processor_=Jr(i);const o=e.serverCache,s=e.eventCache,a=r.updateFullNode(pn.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(pn.EMPTY_NODE,s.getNode(),null),u=new Zn(a,o.isFullyInitialized(),r.filtersNodes()),l=new Zn(c,s.isFullyInitialized(),i.filtersNodes());this.viewCache_=or(l,u),this.eventGenerator_=new tr(this.query_)}get query(){return this.query_}}function di(t){return cr(t.viewCache_)}function fi(t,e){const n=ur(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ye(e)&&!n.getImmediateChild(le(e)).isEmpty())?n.getChild(e):null}function pi(t,e,n,r){e.type===Bn.MERGE&&null!==e.source.queryId&&(Object(o["e"])(ur(t.viewCache_),"We should always have a full cache before handling merges"),Object(o["e"])(cr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=Zr(t.processor_,i,e,n,r);return Qr(t.processor_,s.viewCache),Object(o["e"])(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,mi(t,s.changes,s.viewCache.eventCache.getNode(),null)}function mi(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return er(t.eventGenerator_,e,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vi,gi;class yi{constructor(){this.views=new Map}}function _i(t){Object(o["e"])(!vi,"__referenceConstructor has already been defined"),vi=t}function bi(t,e,n,r){const i=e.source.queryId;if(null!==i){const s=t.views.get(i);return Object(o["e"])(null!=s,"SyncTree gave us an op for an invalid query."),pi(s,e,n,r)}{let i=[];for(const o of t.views.values())i=i.concat(pi(o,e,n,r));return i}}function wi(t,e,n,r,i){const o=e._queryIdentifier,s=t.views.get(o);if(!s){let t=$r(n,i?r:null),o=!1;t?o=!0:r instanceof pn?(t=Ur(n,r),o=!1):(t=pn.EMPTY_NODE,o=!1);const s=or(new Zn(t,o,!1),new Zn(r,i,!1));return new hi(e,s)}return s}function Ci(t,e){let n=null;for(const r of t.views.values())n=n||fi(r,e);return n}function Ii(t){Object(o["e"])(!gi,"__referenceConstructor has already been defined"),gi=t}class Ti{constructor(t){this.listenProvider_=t,this.syncPointTree_=new dr(null),this.pendingWriteTree_=Fr(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ki(t,e,n,r,i){return kr(t.pendingWriteTree_,e,n,r,i),i?Ri(t,new Jn(Gn(),e,n)):[]}function Oi(t,e,n=!1){const r=Or(t.pendingWriteTree_,e),i=Er(t.pendingWriteTree_,e);if(i){let e=new dr(null);return null!=r.snap?e=e.set(ue(),!0):F(r.children,t=>{e=e.set(new ce(t),!0)}),Ri(t,new Xn(r.path,e,n))}return[]}function Ei(t,e,n){return Ri(t,new Jn(Kn(),e,n))}function xi(t,e,n){const r=dr.fromObject(n);return Ri(t,new Qn(Kn(),e,r))}function Si(t,e,n,r){const i=Mi(t,r);if(null!=i){const r=Di(i),o=r.path,s=r.queryId,a=_e(o,e),c=new Jn(Yn(s),a,n);return Fi(t,o,c)}return[]}function Pi(t,e,n,r){const i=Mi(t,r);if(i){const r=Di(i),o=r.path,s=r.queryId,a=_e(o,e),c=dr.fromObject(n),u=new Qn(Yn(s),a,c);return Fi(t,o,u)}return[]}function Ni(t,e,n){const r=!0,i=t.pendingWriteTree_,o=t.syncPointTree_.findOnPath(e,(t,n)=>{const r=_e(t,e),i=Ci(n,r);if(i)return i});return Ar(i,e,o,n,r)}function Ai(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(t,e)=>{const i=_e(t,n);r=r||Ci(e,i)});let i=t.syncPointTree_.get(n);i?r=r||Ci(i,ue()):(i=new yi,t.syncPointTree_=t.syncPointTree_.set(n,i));const o=null!=r,s=o?new Zn(r,!0,!1):null,a=Tr(t.pendingWriteTree_,e._path),c=wi(i,e,a,o?s.getNode():pn.EMPTY_NODE,o);return di(c)}function Ri(t,e){return ji(e,t.syncPointTree_,null,Tr(t.pendingWriteTree_,ue()))}function ji(t,e,n,r){if(ye(t.path))return Li(t,e,n,r);{const i=e.get(ue());null==n&&null!=i&&(n=Ci(i,ue()));let o=[];const s=le(t.path),a=t.operationForChild(s),c=e.children.get(s);if(c&&a){const t=n?n.getImmediateChild(s):null,e=Wr(r,s);o=o.concat(ji(a,c,t,e))}return i&&(o=o.concat(bi(i,t,r,n))),o}}function Li(t,e,n,r){const i=e.get(ue());null==n&&null!=i&&(n=Ci(i,ue()));let o=[];return e.children.inorderTraversal((e,i)=>{const s=n?n.getImmediateChild(e):null,a=Wr(r,e),c=t.operationForChild(e);c&&(o=o.concat(Li(c,i,s,a)))}),i&&(o=o.concat(bi(i,t,r,n))),o}function Mi(t,e){return t.tagToQueryMap.get(e)}function Di(t){const e=t.indexOf("$");return Object(o["e"])(-1!==e&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ce(t.substr(0,e))}}function Fi(t,e,n){const r=t.syncPointTree_.get(e);Object(o["e"])(r,"Missing sync point for query tag that we're tracking");const i=Tr(t.pendingWriteTree_,e);return bi(r,n,i,null)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $i{constructor(t){this.node_=t}getImmediateChild(t){const e=this.node_.getImmediateChild(t);return new $i(e)}node(){return this.node_}}class Ui{constructor(t,e){this.syncTree_=t,this.path_=e}getImmediateChild(t){const e=ge(this.path_,t);return new Ui(this.syncTree_,e)}node(){return Ni(this.syncTree_,this.path_)}}const zi=function(t){return t=t||{},t["timestamp"]=t["timestamp"]||(new Date).getTime(),t},qi=function(t,e,n){return t&&"object"===typeof t?(Object(o["e"])(".sv"in t,"Unexpected leaf node or priority contents"),"string"===typeof t[".sv"]?Vi(t[".sv"],e,n):"object"===typeof t[".sv"]?Hi(t[".sv"],e):void Object(o["e"])(!1,"Unexpected server value: "+JSON.stringify(t,null,2))):t},Vi=function(t,e,n){switch(t){case"timestamp":return n["timestamp"];default:Object(o["e"])(!1,"Unexpected server value: "+t)}},Hi=function(t,e,n){t.hasOwnProperty("increment")||Object(o["e"])(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t["increment"];"number"!==typeof r&&Object(o["e"])(!1,"Unexpected increment value: "+r);const i=e.node();if(Object(o["e"])(null!==i&&"undefined"!==typeof i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i,a=s.getValue();return"number"!==typeof a?r:a+r},Wi=function(t,e,n,r){return Gi(e,new Ui(n,t),r)},Bi=function(t,e,n){return Gi(t,new $i(e),n)};function Gi(t,e,n){const r=t.getPriority().val(),i=qi(r,e.getImmediateChild(".priority"),n);let o;if(t.isLeafNode()){const r=t,o=qi(r.getValue(),e,n);return o!==r.getValue()||i!==r.getPriority().val()?new en(o,yn(i)):t}{const r=t;return o=r,i!==r.getPriority().val()&&(o=o.updatePriority(new en(i))),r.forEachChild(sn,(t,r)=>{const i=Gi(r,e.getImmediateChild(t),n);i!==r&&(o=o.updateImmediateChild(t,i))}),o}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(t="",e=null,n={children:{},childCount:0}){this.name=t,this.parent=e,this.node=n}}function Yi(t,e){let n=e instanceof ce?e:new ce(e),r=t,i=le(n);while(null!==i){const t=Object(o["E"])(r.node.children,i)||{children:{},childCount:0};r=new Ki(i,r,t),n=de(n),i=le(n)}return r}function Xi(t){return t.node.value}function Ji(t,e){t.node.value=e,io(t)}function Qi(t){return t.node.childCount>0}function Zi(t){return void 0===Xi(t)&&!Qi(t)}function to(t,e){F(t.node.children,(n,r)=>{e(new Ki(n,t,r))})}function eo(t,e,n,r){n&&!r&&e(t),to(t,t=>{eo(t,e,!0,r)}),n&&r&&e(t)}function no(t,e,n){let r=n?t:t.parent;while(null!==r){if(e(r))return!0;r=r.parent}return!1}function ro(t){return new ce(null===t.parent?t.name:ro(t.parent)+"/"+t.name)}function io(t){null!==t.parent&&oo(t.parent,t.name,t)}function oo(t,e,n){const r=Zi(n),i=Object(o["j"])(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,io(t)):r||i||(t.node.children[e]=n.node,t.node.childCount++,io(t))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=/[\[\].#$\/\u0000-\u001F\u007F]/,ao=/[\[\].#$\u0000-\u001F\u007F]/,co=10485760,uo=function(t){return"string"===typeof t&&0!==t.length&&!so.test(t)},lo=function(t){return"string"===typeof t&&0!==t.length&&!ao.test(t)},ho=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),lo(t)},fo=function(t,e,n){const r=n instanceof ce?new Ce(n,t):n;if(void 0===e)throw new Error(t+"contains undefined "+Oe(r));if("function"===typeof e)throw new Error(t+"contains a function "+Oe(r)+" with contents = "+e.toString());if(S(e))throw new Error(t+"contains "+e.toString()+" "+Oe(r));if("string"===typeof e&&e.length>co/3&&Object(o["F"])(e)>co)throw new Error(t+"contains a string greater than "+co+" utf8 bytes "+Oe(r)+" ('"+e.substring(0,50)+"...')");if(e&&"object"===typeof e){let n=!1,i=!1;if(F(e,(e,o)=>{if(".value"===e)n=!0;else if(".priority"!==e&&".sv"!==e&&(i=!0,!uo(e)))throw new Error(t+" contains an invalid key ("+e+") "+Oe(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Ie(r,e),fo(t,o,r),Te(r)}),n&&i)throw new Error(t+' contains ".value" child '+Oe(r)+" in addition to actual children.")}},po=function(t,e,n,r){if((!r||void 0!==n)&&!lo(n))throw new Error(Object(o["o"])(t,e)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},mo=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),po(t,e,n,r)},vo=function(t,e){const n=e.path.toString();if("string"!==typeof e.repoInfo.host||0===e.repoInfo.host.length||!uo(e.repoInfo.namespace)&&"localhost"!==e.repoInfo.host.split(":")[0]||0!==n.length&&!ho(n))throw new Error(Object(o["o"])(t,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class go{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function yo(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],o=i.getPath();null===n||be(o,n.path)||(t.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(i)}n&&t.eventLists_.push(n)}function _o(t,e,n){yo(t,n),wo(t,t=>be(t,e))}function bo(t,e,n){yo(t,n),wo(t,t=>we(t,e)||we(e,t))}function wo(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const o=i.path;e(o)?(Co(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Co(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(null!==n){t.events[e]=null;const r=n.getEventRunner();b&&I("event: "+n.toString()),B(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io="repo_interrupt",To=25;class ko{constructor(t,e,n,r){this.repoInfo_=t,this.forceRestClient_=e,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new go,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Dn(),this.transactionQueueTree_=new Ki,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Oo(t,e,n){if(t.stats_=mt(t.repoInfo_),t.forceRestClient_||G())t.server_=new Ln(t.repoInfo_,(e,n,r,i)=>{So(t,e,n,r,i)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Po(t,!0),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Object(o["H"])(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Me(t.repoInfo_,e,(e,n,r,i)=>{So(t,e,n,r,i)},e=>{Po(t,e)},e=>{No(t,e)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(e=>{t.server_.refreshAuthToken(e)}),t.appCheckProvider_.addTokenChangeListener(e=>{t.server_.refreshAppCheckToken(e.token)}),t.statsReporter_=vt(t.repoInfo_,()=>new Wn(t.stats_,t.server_)),t.infoData_=new Mn,t.infoSyncTree_=new Ti({startListening:(e,n,r,i)=>{let o=[];const s=t.infoData_.getNode(e._path);return s.isEmpty()||(o=Ei(t.infoSyncTree_,e._path,s),setTimeout(()=>{i("ok")},0)),o},stopListening:()=>{}}),Ao(t,"connected",!1),t.serverSyncTree_=new Ti({startListening:(e,n,r,i)=>(t.server_.listen(e,r,n,(n,r)=>{const o=i(n,r);bo(t.eventQueue_,e._path,o)}),[]),stopListening:(e,n)=>{t.server_.unlisten(e,n)}})}function Eo(t){const e=t.infoData_.getNode(new ce(".info/serverTimeOffset")),n=e.val()||0;return(new Date).getTime()+n}function xo(t){return zi({timestamp:Eo(t)})}function So(t,e,n,r,i){t.dataUpdateCount++;const s=new ce(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let a=[];if(i)if(r){const e=Object(o["B"])(n,t=>yn(t));a=Pi(t.serverSyncTree_,s,e,i)}else{const e=yn(n);a=Si(t.serverSyncTree_,s,e,i)}else if(r){const e=Object(o["B"])(n,t=>yn(t));a=xi(t.serverSyncTree_,s,e)}else{const e=yn(n);a=Ei(t.serverSyncTree_,s,e)}let c=s;a.length>0&&(c=zo(t,s)),bo(t.eventQueue_,c,a)}function Po(t,e){Ao(t,"connected",e),!1===e&&Lo(t)}function No(t,e){F(e,(e,n)=>{Ao(t,e,n)})}function Ao(t,e,n){const r=new ce("/.info/"+e),i=yn(n);t.infoData_.updateSnapshot(r,i);const o=Ei(t.infoSyncTree_,r,i);bo(t.eventQueue_,r,o)}function Ro(t){return t.nextWriteId_++}function jo(t,e){const n=Ai(t.serverSyncTree_,e);return null!=n?Promise.resolve(n):t.server_.get(e).then(n=>{const r=yn(n).withIndex(e._queryParams.getIndex()),i=Ei(t.serverSyncTree_,e._path,r);return _o(t.eventQueue_,e._path,i),Promise.resolve(r)},n=>(Do(t,"get for query "+Object(o["H"])(e)+" failed: "+n),Promise.reject(new Error(n))))}function Lo(t){Do(t,"onDisconnectEvents");const e=xo(t),n=Dn();$n(t.onDisconnect_,ue(),(r,i)=>{const o=Wi(r,i,t.serverSyncTree_,e);Fn(n,r,o)});let r=[];$n(n,ue(),(e,n)=>{r=r.concat(Ei(t.serverSyncTree_,e,n));const i=Go(t,e);zo(t,i)}),t.onDisconnect_=Dn(),bo(t.eventQueue_,ue(),r)}function Mo(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Io)}function Do(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),I(n,...e)}function Fo(t,e,n){return Ni(t.serverSyncTree_,e,n)||pn.EMPTY_NODE}function $o(t,e=t.transactionQueueTree_){if(e||Bo(t,e),Xi(e)){const n=Ho(t,e);Object(o["e"])(n.length>0,"Sending zero length transaction queue");const r=n.every(t=>0===t.status);r&&Uo(t,ro(e),n)}else Qi(e)&&to(e,e=>{$o(t,e)})}function Uo(t,e,n){const r=n.map(t=>t.currentWriteId),i=Fo(t,e,r);let s=i;const a=i.hash();for(let l=0;l<n.length;l++){const t=n[l];Object(o["e"])(0===t.status,"tryToSendTransactionQueue_: items in queue should all be run."),t.status=1,t.retryCount++;const r=_e(e,t.path);s=s.updateChild(r,t.currentOutputSnapshotRaw)}const c=s.val(!0),u=e;t.server_.put(u.toString(),c,r=>{Do(t,"transaction put response",{path:u.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let e=0;e<n.length;e++)n[e].status=2,i=i.concat(Oi(t.serverSyncTree_,n[e].currentWriteId)),n[e].onComplete&&r.push(()=>n[e].onComplete(null,!0,n[e].currentOutputSnapshotResolved)),n[e].unwatcher();Bo(t,Yi(t.transactionQueueTree_,e)),$o(t,t.transactionQueueTree_),bo(t.eventQueue_,e,i);for(let t=0;t<r.length;t++)B(r[t])}else{if("datastale"===r)for(let t=0;t<n.length;t++)3===n[t].status?n[t].status=4:n[t].status=0;else{E("transaction at "+u.toString()+" failed: "+r);for(let t=0;t<n.length;t++)n[t].status=4,n[t].abortReason=r}zo(t,e)}},a)}function zo(t,e){const n=Vo(t,e),r=ro(n),i=Ho(t,n);return qo(t,i,r),r}function qo(t,e,n){if(0===e.length)return;const r=[];let i=[];const s=e.filter(t=>0===t.status),a=s.map(t=>t.currentWriteId);for(let c=0;c<e.length;c++){const s=e[c],u=_e(n,s.path);let l,h=!1;if(Object(o["e"])(null!==u,"rerunTransactionsUnderNode_: relativePath should not be null."),4===s.status)h=!0,l=s.abortReason,i=i.concat(Oi(t.serverSyncTree_,s.currentWriteId,!0));else if(0===s.status)if(s.retryCount>=To)h=!0,l="maxretry",i=i.concat(Oi(t.serverSyncTree_,s.currentWriteId,!0));else{const n=Fo(t,s.path,a);s.currentInputSnapshot=n;const r=e[c].update(n.val());if(void 0!==r){fo("transaction failed: Data returned ",r,s.path);let e=yn(r);const c="object"===typeof r&&null!=r&&Object(o["j"])(r,".priority");c||(e=e.updatePriority(n.getPriority()));const u=s.currentWriteId,l=xo(t),h=Bi(e,n,l);s.currentOutputSnapshotRaw=e,s.currentOutputSnapshotResolved=h,s.currentWriteId=Ro(t),a.splice(a.indexOf(u),1),i=i.concat(ki(t.serverSyncTree_,s.path,h,s.currentWriteId,s.applyLocally)),i=i.concat(Oi(t.serverSyncTree_,u,!0))}else h=!0,l="nodata",i=i.concat(Oi(t.serverSyncTree_,s.currentWriteId,!0))}bo(t.eventQueue_,n,i),i=[],h&&(e[c].status=2,function(t){setTimeout(t,Math.floor(0))}(e[c].unwatcher),e[c].onComplete&&("nodata"===l?r.push(()=>e[c].onComplete(null,!1,e[c].currentInputSnapshot)):r.push(()=>e[c].onComplete(new Error(l),!1,null))))}Bo(t,t.transactionQueueTree_);for(let o=0;o<r.length;o++)B(r[o]);$o(t,t.transactionQueueTree_)}function Vo(t,e){let n,r=t.transactionQueueTree_;n=le(e);while(null!==n&&void 0===Xi(r))r=Yi(r,n),e=de(e),n=le(e);return r}function Ho(t,e){const n=[];return Wo(t,e,n),n.sort((t,e)=>t.order-e.order),n}function Wo(t,e,n){const r=Xi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);to(e,e=>{Wo(t,e,n)})}function Bo(t,e){const n=Xi(e);if(n){let t=0;for(let e=0;e<n.length;e++)2!==n[e].status&&(n[t]=n[e],t++);n.length=t,Ji(e,n.length>0?n:void 0)}to(e,e=>{Bo(t,e)})}function Go(t,e){const n=ro(Vo(t,e)),r=Yi(t.transactionQueueTree_,e);return no(r,e=>{Ko(t,e)}),Ko(t,r),eo(r,e=>{Ko(t,e)}),n}function Ko(t,e){const n=Xi(e);if(n){const r=[];let i=[],s=-1;for(let e=0;e<n.length;e++)3===n[e].status||(1===n[e].status?(Object(o["e"])(s===e-1,"All SENT items should be at beginning of queue."),s=e,n[e].status=3,n[e].abortReason="set"):(Object(o["e"])(0===n[e].status,"Unexpected transaction status in abort"),n[e].unwatcher(),i=i.concat(Oi(t.serverSyncTree_,n[e].currentWriteId,!0)),n[e].onComplete&&r.push(n[e].onComplete.bind(null,new Error("set"),!1,null))));-1===s?Ji(e,void 0):n.length=s+1,bo(t.eventQueue_,ro(e),i);for(let t=0;t<r.length;t++)B(r[t])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let t=n[i];try{t=decodeURIComponent(t.replace(/\+/g," "))}catch(r){}e+="/"+t}return e}function Xo(t){const e={};"?"===t.charAt(0)&&(t=t.substring(1));for(const n of t.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):E(`Invalid query segment '${n}' in query '${t}'`)}return e}const Jo=function(t,e){const n=Qo(t),r=n.namespace;"firebase.com"===n.domain&&O(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||O("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||x();const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ut(n.host,n.secure,r,e,i,"",r!==n.subdomain),path:new ce(n.pathString)}},Qo=function(t){let e="",n="",r="",i="",o="",s=!0,a="https",c=443;if("string"===typeof t){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let l=t.indexOf("/");-1===l&&(l=t.length);let h=t.indexOf("?");-1===h&&(h=t.length),e=t.substring(0,Math.min(l,h)),l<h&&(i=Yo(t.substring(l,h)));const d=Xo(t.substring(Math.min(t.length,h)));u=e.indexOf(":"),u>=0?(s="https"===a||"wss"===a,c=parseInt(e.substring(u+1),10)):u=e.length;const f=e.slice(0,u);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const t=e.indexOf(".");r=e.substring(0,t).toLowerCase(),n=e.substring(t+1),o=r}"ns"in d&&(o=d["ns"])}return{host:e,port:c,domain:n,subdomain:r,secure:s,scheme:a,pathString:i,namespace:o}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zo{constructor(t,e,n,r){this._repo=t,this._path=e,this._queryParams=n,this._orderByCalled=r}get key(){return ye(this._path)?null:fe(this._path)}get ref(){return new ts(this._repo,this._path)}get _queryIdentifier(){const t=jn(this._queryParams),e=M(t);return"{}"===e?"default":e}get _queryObject(){return jn(this._queryParams)}isEqual(t){if(t=Object(o["q"])(t),!(t instanceof Zo))return!1;const e=this._repo===t._repo,n=be(this._path,t._path),r=this._queryIdentifier===t._queryIdentifier;return e&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+pe(this._path)}}class ts extends Zo{constructor(t,e){super(t,e,new Nn,!1)}get parent(){const t=ve(this._path);return null===t?null:new ts(this._repo,t)}get root(){let t=this;while(null!==t.parent)t=t.parent;return t}}class es{constructor(t,e,n){this._node=t,this.ref=e,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const e=new ce(t),n=rs(this.ref,t);return new es(this._node.getChild(e),n,sn)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){if(this._node.isLeafNode())return!1;const e=this._node;return!!e.forEachChild(this._index,(e,n)=>t(new es(n,rs(this.ref,e),sn)))}hasChild(t){const e=new ce(t);return!this._node.getChild(e).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ns(t,e){return t=Object(o["q"])(t),t._checkNotDeleted("ref"),void 0!==e?rs(t._root,e):t._root}function rs(t,e){return t=Object(o["q"])(t),null===le(t._path)?mo("child","path",e,!1):po("child","path",e,!1),new ts(t._repo,ge(t._path,e))}function is(t){return t=Object(o["q"])(t),jo(t._repo,t).then(e=>new es(e,new ts(t._repo,t._path),t._queryParams.getIndex()))}_i(ts),Ii(ts);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const os="FIREBASE_DATABASE_EMULATOR_HOST",ss={};let as=!1;function cs(e,n,r,i,o){let s=i||e.options.databaseURL;void 0===s&&(e.options.projectId||O("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),I("Using default host for project ",e.options.projectId),s=e.options.projectId+"-default-rtdb.firebaseio.com");let a,c=Jo(s,o),u=c.repoInfo,l=void 0;"undefined"!==typeof t&&(l=Object({NODE_ENV:"production",VUE_APP_APIKEY:"AIzaSyBJ87BuqIgKQ_ddvinu-Yih89kTWMlHtdQ",BASE_URL:"/recipes/"})[os]),l?(a=!0,s=`http://${l}?ns=${u.namespace}`,c=Jo(s,o),u=c.repoInfo):a=!c.repoInfo.secure;const h=o&&a?new J(J.OWNER):new X(e.name,e.options,n);vo("Invalid Firebase Database URL",c),ye(c.path)||O("Database URL must point to the root of a Firebase Database (not including a child path).");const d=ls(u,e,h,new Y(e.name,r));return new hs(d,e)}function us(t,e){const n=ss[e];n&&n[t.key]===t||O(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Mo(t),delete n[t.key]}function ls(t,e,n,r){let i=ss[e.name];i||(i={},ss[e.name]=i);let o=i[t.toURLString()];return o&&O("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new ko(t,as,n,r),i[t.toURLString()]=o,o}class hs{constructor(t,e){this._repoInternal=t,this.app=e,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Oo(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ts(this._repo,ue())),this._rootInternal}_delete(){return null!==this._rootInternal&&(us(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){null===this._rootInternal&&O("Cannot call "+t+" on a deleted database.")}}function ds(t=Object(r["d"])(),e){return Object(r["b"])(t,"database").getImmediate({identifier:e})}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fs(t){l(r["a"]),Object(r["c"])(new i["a"]("database",(t,{instanceIdentifier:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return cs(n,r,i,e)},"PUBLIC").setMultipleInstances(!0)),Object(r["f"])(a,c,t),Object(r["f"])(a,c,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Me.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)},Me.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};fs()}).call(this,n("4362"))},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("b64b"),n("a4d3"),n("4de4"),n("d3b7"),n("e439"),n("159b"),n("dbb4");function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},5692:function(t,e,n){var r=n("c430"),i=n("c6cd");(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.20.2",mode:r?"pure":"global",copyright:"© 2022 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,e,n){var r=n("d066"),i=n("e330"),o=n("241c"),s=n("7418"),a=n("825a"),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(a(t)),n=s.f;return n?c(e,n(t)):e}},"577e":function(t,e,n){var r=n("da84"),i=n("f5df"),o=r.String;t.exports=function(t){if("Symbol"===i(t))throw TypeError("Cannot convert a Symbol value to a string");return o(t)}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"589b":function(t,e,n){"use strict";n.d(e,"a",(function(){return B})),n.d(e,"b",(function(){return q})),n.d(e,"c",(function(){return z})),n.d(e,"d",(function(){return K})),n.d(e,"e",(function(){return G})),n.d(e,"f",(function(){return Y}));var r=n("22e5"),i=n("e691"),o=n("1fd5");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class s{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(a(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function a(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const c="@firebase/app",u="0.7.12",l=new i["b"]("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",m="@firebase/app-check",v="@firebase/auth",g="@firebase/auth-compat",y="@firebase/database",_="@firebase/database-compat",b="@firebase/functions",w="@firebase/functions-compat",C="@firebase/installations",I="@firebase/installations-compat",T="@firebase/messaging",k="@firebase/messaging-compat",O="@firebase/performance",E="@firebase/performance-compat",x="@firebase/remote-config",S="@firebase/remote-config-compat",P="@firebase/storage",N="@firebase/storage-compat",A="@firebase/firestore",R="@firebase/firestore-compat",j="firebase",L="9.6.2",M="[DEFAULT]",D={[c]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[m]:"fire-app-check",[p]:"fire-app-check-compat",[v]:"fire-auth",[g]:"fire-auth-compat",[y]:"fire-rtdb",[_]:"fire-rtdb-compat",[b]:"fire-fn",[w]:"fire-fn-compat",[C]:"fire-iid",[I]:"fire-iid-compat",[T]:"fire-fcm",[k]:"fire-fcm-compat",[O]:"fire-perf",[E]:"fire-perf-compat",[x]:"fire-rc",[S]:"fire-rc-compat",[P]:"fire-gcs",[N]:"fire-gcs-compat",[A]:"fire-fst",[R]:"fire-fst-compat","fire-js":"fire-js",[j]:"fire-js-all"},F=new Map,$=new Map;function U(t,e){try{t.container.addComponent(e)}catch(n){l.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function z(t){const e=t.name;if($.has(e))return l.debug(`There were multiple attempts to register component ${e}.`),!1;$.set(e,t);for(const n of F.values())U(n,t);return!0}function q(t,e){return t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const V={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},H=new o["b"]("app","Firebase",V);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class W{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw H.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B=L;function G(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:M,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!==typeof i||!i)throw H.create("bad-app-name",{appName:String(i)});const s=F.get(i);if(s){if(Object(o["n"])(t,s.options)&&Object(o["n"])(n,s.config))return s;throw H.create("duplicate-app",{appName:i})}const a=new r["b"](i);for(const r of $.values())a.addComponent(r);const c=new W(t,n,a);return F.set(i,c),c}function K(t=M){const e=F.get(t);if(!e)throw H.create("no-app",{appName:t});return e}function Y(t,e,n){var i;let o=null!==(i=D[t])&&void 0!==i?i:t;n&&(o+="-"+n);const s=o.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const t=[`Unable to register library "${o}" with version "${e}":`];return s&&t.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void l.warn(t.join(" "))}z(new r["a"](o+"-version",()=>({library:o,version:e}),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function X(t){z(new r["a"]("platform-logger",t=>new s(t),"PRIVATE")),Y(c,u,t),Y(c,u,"esm2017"),Y("fire-js","")}X("")},"58a8":function(t,e,n){var r=n("e330"),i=n("1d80"),o=n("577e"),s=n("5899"),a=r("".replace),c="["+s+"]",u=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),h=function(t){return function(e){var n=o(i(e));return 1&t&&(n=a(n,u,"")),2&t&&(n=a(n,l,"")),n}};t.exports={start:h(1),end:h(2),trim:h(3)}},5926:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){var e=+t;return e!==e||0===e?0:(e>0?r:n)(e)}},"59ed":function(t,e,n){var r=n("da84"),i=n("1626"),o=n("0d51"),s=r.TypeError;t.exports=function(t){if(i(t))return t;throw s(o(t)+" is not a function")}},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"5e77":function(t,e,n){var r=n("83ab"),i=n("1a2d"),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(o,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},"605d":function(t,e,n){var r=n("c6b6"),i=n("da84");t.exports="process"==r(i.process)},6069:function(t,e){t.exports="object"==typeof window},"60da":function(t,e,n){"use strict";var r=n("83ab"),i=n("e330"),o=n("c65b"),s=n("d039"),a=n("df75"),c=n("7418"),u=n("d1e7"),l=n("7b0b"),h=n("44ad"),d=Object.assign,f=Object.defineProperty,p=i([].concat);t.exports=!d||s((function(){if(r&&1!==d({b:1},d(f({},"a",{enumerable:!0,get:function(){f(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach((function(t){e[t]=t})),7!=d({},t)[n]||a(d({},e)).join("")!=i}))?function(t,e){var n=l(t),i=arguments.length,s=1,d=c.f,f=u.f;while(i>s){var m,v=h(arguments[s++]),g=d?p(a(v),d(v)):a(v),y=g.length,_=0;while(y>_)m=g[_++],r&&!o(f,v,m)||(n[m]=v[m])}return n}:d},"65f0":function(t,e,n){var r=n("0b42");t.exports=function(t,e){return new(r(t))(0===e?0:e)}},"66ce":function(t,e,n){"use strict";var r=n("51b0");n.d(e,"a",(function(){return r["a"]})),n.d(e,"b",(function(){return r["b"]})),n.d(e,"c",(function(){return r["c"]}))},"68ee":function(t,e,n){var r=n("e330"),i=n("d039"),o=n("1626"),s=n("f5df"),a=n("d066"),c=n("8925"),u=function(){},l=[],h=a("Reflect","construct"),d=/^\s*(?:class|function)\b/,f=r(d.exec),p=!d.exec(u),m=function(t){if(!o(t))return!1;try{return h(u,l,t),!0}catch(e){return!1}},v=function(t){if(!o(t))return!1;switch(s(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!f(d,c(t))}catch(e){return!0}};v.sham=!0,t.exports=!h||i((function(){var t;return m(m.call)||!m(Object)||!m((function(){t=!0}))||t}))?v:m},"69f3":function(t,e,n){var r,i,o,s=n("7f9a"),a=n("da84"),c=n("e330"),u=n("861d"),l=n("9112"),h=n("1a2d"),d=n("c6cd"),f=n("f772"),p=n("d012"),m="Object already initialized",v=a.TypeError,g=a.WeakMap,y=function(t){return o(t)?i(t):r(t,{})},_=function(t){return function(e){var n;if(!u(e)||(n=i(e)).type!==t)throw v("Incompatible receiver, "+t+" required");return n}};if(s||d.state){var b=d.state||(d.state=new g),w=c(b.get),C=c(b.has),I=c(b.set);r=function(t,e){if(C(b,t))throw new v(m);return e.facade=t,I(b,t,e),e},i=function(t){return w(b,t)||{}},o=function(t){return C(b,t)}}else{var T=f("state");p[T]=!0,r=function(t,e){if(h(t,T))throw new v(m);return e.facade=t,l(t,T,e),e},i=function(t){return h(t,T)?t[T]:{}},o=function(t){return h(t,T)}}t.exports={set:r,get:i,has:o,enforce:y,getterFor:_}},"6eeb":function(t,e,n){var r=n("da84"),i=n("1626"),o=n("1a2d"),s=n("9112"),a=n("ce4e"),c=n("8925"),u=n("69f3"),l=n("5e77").CONFIGURABLE,h=u.get,d=u.enforce,f=String(String).split("String");(t.exports=function(t,e,n,c){var u,h=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,m=!!c&&!!c.noTargetGet,v=c&&void 0!==c.name?c.name:e;i(n)&&("Symbol("===String(v).slice(0,7)&&(v="["+String(v).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!o(n,"name")||l&&n.name!==v)&&s(n,"name",v),u=d(n),u.source||(u.source=f.join("string"==typeof v?v:""))),t!==r?(h?!m&&t[e]&&(p=!0):delete t[e],p?t[e]=n:s(t,e,n)):p?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return i(this)&&h(this).source||c(this)}))},7156:function(t,e,n){var r=n("1626"),i=n("861d"),o=n("d2bb");t.exports=function(t,e,n){var s,a;return o&&r(s=e.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&o(t,a),t}},7418:function(t,e){e.f=Object.getOwnPropertySymbols},"746f":function(t,e,n){var r=n("428f"),i=n("1a2d"),o=n("e538"),s=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||s(e,t,{value:o.f(t)})}},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(t,e,n){var r=n("cc12"),i=r("span").classList,o=i&&i.constructor&&i.constructor.prototype;t.exports=o===Object.prototype?void 0:o},"7b0b":function(t,e,n){var r=n("da84"),i=n("1d80"),o=r.Object;t.exports=function(t){return o(i(t))}},"7c73":function(t,e,n){var r,i=n("825a"),o=n("37e8"),s=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),h=">",d="<",f="prototype",p="script",m=l("IE_PROTO"),v=function(){},g=function(t){return d+p+h+t+d+"/"+p+h},y=function(t){t.write(g("")),t.close();var e=t.parentWindow.Object;return t=null,e},_=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(g("document.F=Object")),t.close(),t.F},b=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}b="undefined"!=typeof document?document.domain&&r?y(r):_():y(r);var t=s.length;while(t--)delete b[f][s[t]];return b()};a[m]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(v[f]=i(t),n=new v,v[f]=null,n[m]=t):n=b(),void 0===e?n:o.f(n,e)}},"7dd0":function(t,e,n){"use strict";var r=n("23e7"),i=n("c65b"),o=n("c430"),s=n("5e77"),a=n("1626"),c=n("9ed3"),u=n("e163"),l=n("d2bb"),h=n("d44e"),d=n("9112"),f=n("6eeb"),p=n("b622"),m=n("3f8c"),v=n("ae93"),g=s.PROPER,y=s.CONFIGURABLE,_=v.IteratorPrototype,b=v.BUGGY_SAFARI_ITERATORS,w=p("iterator"),C="keys",I="values",T="entries",k=function(){return this};t.exports=function(t,e,n,s,p,v,O){c(n,e,s);var E,x,S,P=function(t){if(t===p&&L)return L;if(!b&&t in R)return R[t];switch(t){case C:return function(){return new n(this,t)};case I:return function(){return new n(this,t)};case T:return function(){return new n(this,t)}}return function(){return new n(this)}},N=e+" Iterator",A=!1,R=t.prototype,j=R[w]||R["@@iterator"]||p&&R[p],L=!b&&j||P(p),M="Array"==e&&R.entries||j;if(M&&(E=u(M.call(new t)),E!==Object.prototype&&E.next&&(o||u(E)===_||(l?l(E,_):a(E[w])||f(E,w,k)),h(E,N,!0,!0),o&&(m[N]=k))),g&&p==I&&j&&j.name!==I&&(!o&&y?d(R,"name",I):(A=!0,L=function(){return i(j,this)})),p)if(x={values:P(I),keys:v?L:P(C),entries:P(T)},O)for(S in x)(b||A||!(S in R))&&f(R,S,x[S]);else r({target:e,proto:!0,forced:b||A},x);return o&&!O||R[w]===L||f(R,w,L,{name:p}),m[e]=L,x}},"7f9a":function(t,e,n){var r=n("da84"),i=n("1626"),o=n("8925"),s=r.WeakMap;t.exports=i(s)&&/native code/.test(o(s))},"825a":function(t,e,n){var r=n("da84"),i=n("861d"),o=r.String,s=r.TypeError;t.exports=function(t){if(i(t))return t;throw s(o(t)+" is not an object")}},"83ab":function(t,e,n){var r=n("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(t,e,n){"use strict";var r=n("a04b"),i=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var s=r(e);s in t?i.f(t,s,o(0,n)):t[s]=n}},"861d":function(t,e,n){var r=n("1626");t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},8925:function(t,e,n){var r=n("e330"),i=n("1626"),o=n("c6cd"),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(t){return s(t)}),t.exports=o.inspectSource},"8c4f":function(t,e,n){"use strict";
/*!
  * vue-router v3.5.3
  * (c) 2021 Evan You
  * @license MIT
  */function r(t,e){for(var n in e)t[n]=e[n];return t}var i=/[!'()*]/g,o=function(t){return"%"+t.charCodeAt(0).toString(16)},s=/%2C/g,a=function(t){return encodeURIComponent(t).replace(i,o).replace(s,",")};function c(t){try{return decodeURIComponent(t)}catch(e){0}return t}function u(t,e,n){void 0===e&&(e={});var r,i=n||h;try{r=i(t||"")}catch(a){r={}}for(var o in e){var s=e[o];r[o]=Array.isArray(s)?s.map(l):l(s)}return r}var l=function(t){return null==t||"object"===typeof t?t:String(t)};function h(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t?(t.split("&").forEach((function(t){var n=t.replace(/\+/g," ").split("="),r=c(n.shift()),i=n.length>0?c(n.join("=")):null;void 0===e[r]?e[r]=i:Array.isArray(e[r])?e[r].push(i):e[r]=[e[r],i]})),e):e}function d(t){var e=t?Object.keys(t).map((function(e){var n=t[e];if(void 0===n)return"";if(null===n)return a(e);if(Array.isArray(n)){var r=[];return n.forEach((function(t){void 0!==t&&(null===t?r.push(a(e)):r.push(a(e)+"="+a(t)))})),r.join("&")}return a(e)+"="+a(n)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var f=/\/?$/;function p(t,e,n,r){var i=r&&r.options.stringifyQuery,o=e.query||{};try{o=m(o)}catch(a){}var s={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:o,params:e.params||{},fullPath:y(e,i),matched:t?g(t):[]};return n&&(s.redirectedFrom=y(n,i)),Object.freeze(s)}function m(t){if(Array.isArray(t))return t.map(m);if(t&&"object"===typeof t){var e={};for(var n in t)e[n]=m(t[n]);return e}return t}var v=p(null,{path:"/"});function g(t){var e=[];while(t)e.unshift(t),t=t.parent;return e}function y(t,e){var n=t.path,r=t.query;void 0===r&&(r={});var i=t.hash;void 0===i&&(i="");var o=e||d;return(n||"/")+o(r)+i}function _(t,e,n){return e===v?t===e:!!e&&(t.path&&e.path?t.path.replace(f,"")===e.path.replace(f,"")&&(n||t.hash===e.hash&&b(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(n||t.hash===e.hash&&b(t.query,e.query)&&b(t.params,e.params))))}function b(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t).sort(),r=Object.keys(e).sort();return n.length===r.length&&n.every((function(n,i){var o=t[n],s=r[i];if(s!==n)return!1;var a=e[n];return null==o||null==a?o===a:"object"===typeof o&&"object"===typeof a?b(o,a):String(o)===String(a)}))}function w(t,e){return 0===t.path.replace(f,"/").indexOf(e.path.replace(f,"/"))&&(!e.hash||t.hash===e.hash)&&C(t.query,e.query)}function C(t,e){for(var n in e)if(!(n in t))return!1;return!0}function I(t){for(var e=0;e<t.matched.length;e++){var n=t.matched[e];for(var r in n.instances){var i=n.instances[r],o=n.enteredCbs[r];if(i&&o){delete n.enteredCbs[r];for(var s=0;s<o.length;s++)i._isBeingDestroyed||o[s](i)}}}}var T={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,i=e.children,o=e.parent,s=e.data;s.routerView=!0;var a=o.$createElement,c=n.name,u=o.$route,l=o._routerViewCache||(o._routerViewCache={}),h=0,d=!1;while(o&&o._routerRoot!==o){var f=o.$vnode?o.$vnode.data:{};f.routerView&&h++,f.keepAlive&&o._directInactive&&o._inactive&&(d=!0),o=o.$parent}if(s.routerViewDepth=h,d){var p=l[c],m=p&&p.component;return m?(p.configProps&&k(m,s,p.route,p.configProps),a(m,s,i)):a()}var v=u.matched[h],g=v&&v.components[c];if(!v||!g)return l[c]=null,a();l[c]={component:g},s.registerRouteInstance=function(t,e){var n=v.instances[c];(e&&n!==t||!e&&n===t)&&(v.instances[c]=e)},(s.hook||(s.hook={})).prepatch=function(t,e){v.instances[c]=e.componentInstance},s.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==v.instances[c]&&(v.instances[c]=t.componentInstance),I(u)};var y=v.props&&v.props[c];return y&&(r(l[c],{route:u,configProps:y}),k(g,s,u,y)),a(g,s,i)}};function k(t,e,n,i){var o=e.props=O(n,i);if(o){o=e.props=r({},o);var s=e.attrs=e.attrs||{};for(var a in o)t.props&&a in t.props||(s[a]=o[a],delete o[a])}}function O(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}function E(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var o=t.replace(/^\//,"").split("/"),s=0;s<o.length;s++){var a=o[s];".."===a?i.pop():"."!==a&&i.push(a)}return""!==i[0]&&i.unshift(""),i.join("/")}function x(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var i=t.indexOf("?");return i>=0&&(n=t.slice(i+1),t=t.slice(0,i)),{path:t,query:n,hash:e}}function S(t){return t.replace(/\/+/g,"/")}var P=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},N=X,A=D,R=F,j=z,L=Y,M=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function D(t,e){var n,r=[],i=0,o=0,s="",a=e&&e.delimiter||"/";while(null!=(n=M.exec(t))){var c=n[0],u=n[1],l=n.index;if(s+=t.slice(o,l),o=l+c.length,u)s+=u[1];else{var h=t[o],d=n[2],f=n[3],p=n[4],m=n[5],v=n[6],g=n[7];s&&(r.push(s),s="");var y=null!=d&&null!=h&&h!==d,_="+"===v||"*"===v,b="?"===v||"*"===v,w=n[2]||a,C=p||m;r.push({name:f||i++,prefix:d||"",delimiter:w,optional:b,repeat:_,partial:y,asterisk:!!g,pattern:C?V(C):g?".*":"[^"+q(w)+"]+?"})}}return o<t.length&&(s+=t.substr(o)),s&&r.push(s),r}function F(t,e){return z(D(t,e),e)}function $(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function U(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function z(t,e){for(var n=new Array(t.length),r=0;r<t.length;r++)"object"===typeof t[r]&&(n[r]=new RegExp("^(?:"+t[r].pattern+")$",W(e)));return function(e,r){for(var i="",o=e||{},s=r||{},a=s.pretty?$:encodeURIComponent,c=0;c<t.length;c++){var u=t[c];if("string"!==typeof u){var l,h=o[u.name];if(null==h){if(u.optional){u.partial&&(i+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(P(h)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(l=a(h[d]),!n[c].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===d?u.prefix:u.delimiter)+l}}else{if(l=u.asterisk?U(h):a(h),!n[c].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+l+'"');i+=u.prefix+l}}else i+=u}return i}}function q(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function V(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function H(t,e){return t.keys=e,t}function W(t){return t&&t.sensitive?"":"i"}function B(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return H(t,e)}function G(t,e,n){for(var r=[],i=0;i<t.length;i++)r.push(X(t[i],e,n).source);var o=new RegExp("(?:"+r.join("|")+")",W(n));return H(o,e)}function K(t,e,n){return Y(D(t,n),e,n)}function Y(t,e,n){P(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,i=!1!==n.end,o="",s=0;s<t.length;s++){var a=t[s];if("string"===typeof a)o+=q(a);else{var c=q(a.prefix),u="(?:"+a.pattern+")";e.push(a),a.repeat&&(u+="(?:"+c+u+")*"),u=a.optional?a.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",o+=u}}var l=q(n.delimiter||"/"),h=o.slice(-l.length)===l;return r||(o=(h?o.slice(0,-l.length):o)+"(?:"+l+"(?=$))?"),o+=i?"$":r&&h?"":"(?="+l+"|$)",H(new RegExp("^"+o,W(n)),e)}function X(t,e,n){return P(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?B(t,e):P(t)?G(t,e,n):K(t,e,n)}N.parse=A,N.compile=R,N.tokensToFunction=j,N.tokensToRegExp=L;var J=Object.create(null);function Q(t,e,n){e=e||{};try{var r=J[t]||(J[t]=N.compile(t));return"string"===typeof e.pathMatch&&(e[0]=e.pathMatch),r(e,{pretty:!0})}catch(i){return""}finally{delete e[0]}}function Z(t,e,n,i){var o="string"===typeof t?{path:t}:t;if(o._normalized)return o;if(o.name){o=r({},t);var s=o.params;return s&&"object"===typeof s&&(o.params=r({},s)),o}if(!o.path&&o.params&&e){o=r({},o),o._normalized=!0;var a=r(r({},e.params),o.params);if(e.name)o.name=e.name,o.params=a;else if(e.matched.length){var c=e.matched[e.matched.length-1].path;o.path=Q(c,a,"path "+e.path)}else 0;return o}var l=x(o.path||""),h=e&&e.path||"/",d=l.path?E(l.path,h,n||o.append):h,f=u(l.query,o.query,i&&i.options.parseQuery),p=o.hash||l.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:d,query:f,hash:p}}var tt,et=[String,Object],nt=[String,Array],rt=function(){},it={name:"RouterLink",props:{to:{type:et,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:nt,default:"click"}},render:function(t){var e=this,n=this.$router,i=this.$route,o=n.resolve(this.to,i,this.append),s=o.location,a=o.route,c=o.href,u={},l=n.options.linkActiveClass,h=n.options.linkExactActiveClass,d=null==l?"router-link-active":l,f=null==h?"router-link-exact-active":h,m=null==this.activeClass?d:this.activeClass,v=null==this.exactActiveClass?f:this.exactActiveClass,g=a.redirectedFrom?p(null,Z(a.redirectedFrom),null,n):a;u[v]=_(i,g,this.exactPath),u[m]=this.exact||this.exactPath?u[v]:w(i,g);var y=u[v]?this.ariaCurrentValue:null,b=function(t){ot(t)&&(e.replace?n.replace(s,rt):n.push(s,rt))},C={click:ot};Array.isArray(this.event)?this.event.forEach((function(t){C[t]=b})):C[this.event]=b;var I={class:u},T=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:b,isActive:u[m],isExactActive:u[v]});if(T){if(1===T.length)return T[0];if(T.length>1||!T.length)return 0===T.length?t():t("span",{},T)}if("a"===this.tag)I.on=C,I.attrs={href:c,"aria-current":y};else{var k=st(this.$slots.default);if(k){k.isStatic=!1;var O=k.data=r({},k.data);for(var E in O.on=O.on||{},O.on){var x=O.on[E];E in C&&(O.on[E]=Array.isArray(x)?x:[x])}for(var S in C)S in O.on?O.on[S].push(C[S]):O.on[S]=b;var P=k.data.attrs=r({},k.data.attrs);P.href=c,P["aria-current"]=y}else I.on=C}return t(this.tag,I,this.$slots.default)}};function ot(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function st(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=st(e.children)))return e}}function at(t){if(!at.installed||tt!==t){at.installed=!0,tt=t;var e=function(t){return void 0!==t},n=function(t,n){var r=t.$options._parentVnode;e(r)&&e(r=r.data)&&e(r=r.registerRouteInstance)&&r(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",T),t.component("RouterLink",it);var r=t.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var ct="undefined"!==typeof window;function ut(t,e,n,r,i){var o=e||[],s=n||Object.create(null),a=r||Object.create(null);t.forEach((function(t){lt(o,s,a,t,i)}));for(var c=0,u=o.length;c<u;c++)"*"===o[c]&&(o.push(o.splice(c,1)[0]),u--,c--);return{pathList:o,pathMap:s,nameMap:a}}function lt(t,e,n,r,i,o){var s=r.path,a=r.name;var c=r.pathToRegexpOptions||{},u=dt(s,i,c.strict);"boolean"===typeof r.caseSensitive&&(c.sensitive=r.caseSensitive);var l={path:u,regex:ht(u,c),components:r.components||{default:r.component},alias:r.alias?"string"===typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:a,parent:i,matchAs:o,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach((function(r){var i=o?S(o+"/"+r.path):void 0;lt(t,e,n,r,l,i)})),e[l.path]||(t.push(l.path),e[l.path]=l),void 0!==r.alias)for(var h=Array.isArray(r.alias)?r.alias:[r.alias],d=0;d<h.length;++d){var f=h[d];0;var p={path:f,children:r.children};lt(t,e,n,p,i,l.path||"/")}a&&(n[a]||(n[a]=l))}function ht(t,e){var n=N(t,[],e);return n}function dt(t,e,n){return n||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:S(e.path+"/"+t)}function ft(t,e){var n=ut(t),r=n.pathList,i=n.pathMap,o=n.nameMap;function s(t){ut(t,r,i,o)}function a(t,e){var n="object"!==typeof t?o[t]:void 0;ut([e||t],r,i,o,n),n&&n.alias.length&&ut(n.alias.map((function(t){return{path:t,children:[e]}})),r,i,o,n)}function c(){return r.map((function(t){return i[t]}))}function u(t,n,s){var a=Z(t,n,!1,e),c=a.name;if(c){var u=o[c];if(!u)return d(null,a);var l=u.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in a.params)&&l.indexOf(h)>-1&&(a.params[h]=n.params[h]);return a.path=Q(u.path,a.params,'named route "'+c+'"'),d(u,a,s)}if(a.path){a.params={};for(var f=0;f<r.length;f++){var p=r[f],m=i[p];if(pt(m.regex,a.path,a.params))return d(m,a,s)}}return d(null,a)}function l(t,n){var r=t.redirect,i="function"===typeof r?r(p(t,n,null,e)):r;if("string"===typeof i&&(i={path:i}),!i||"object"!==typeof i)return d(null,n);var s=i,a=s.name,c=s.path,l=n.query,h=n.hash,f=n.params;if(l=s.hasOwnProperty("query")?s.query:l,h=s.hasOwnProperty("hash")?s.hash:h,f=s.hasOwnProperty("params")?s.params:f,a){o[a];return u({_normalized:!0,name:a,query:l,hash:h,params:f},void 0,n)}if(c){var m=mt(c,t),v=Q(m,f,'redirect route with path "'+m+'"');return u({_normalized:!0,path:v,query:l,hash:h},void 0,n)}return d(null,n)}function h(t,e,n){var r=Q(n,e.params,'aliased route with path "'+n+'"'),i=u({_normalized:!0,path:r});if(i){var o=i.matched,s=o[o.length-1];return e.params=i.params,d(s,e)}return d(null,e)}function d(t,n,r){return t&&t.redirect?l(t,r||n):t&&t.matchAs?h(t,n,t.matchAs):p(t,n,r,e)}return{match:u,addRoute:a,getRoutes:c,addRoutes:s}}function pt(t,e,n){var r=e.match(t);if(!r)return!1;if(!n)return!0;for(var i=1,o=r.length;i<o;++i){var s=t.keys[i-1];s&&(n[s.name||"pathMatch"]="string"===typeof r[i]?c(r[i]):r[i])}return!0}function mt(t,e){return E(t,e.parent?e.parent.path:"/",!0)}var vt=ct&&window.performance&&window.performance.now?window.performance:Date;function gt(){return vt.now().toFixed(3)}var yt=gt();function _t(){return yt}function bt(t){return yt=t}var wt=Object.create(null);function Ct(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),n=r({},window.history.state);return n.key=_t(),window.history.replaceState(n,"",e),window.addEventListener("popstate",kt),function(){window.removeEventListener("popstate",kt)}}function It(t,e,n,r){if(t.app){var i=t.options.scrollBehavior;i&&t.app.$nextTick((function(){var o=Ot(),s=i.call(t,e,n,r?o:null);s&&("function"===typeof s.then?s.then((function(t){Rt(t,o)})).catch((function(t){0})):Rt(s,o))}))}}function Tt(){var t=_t();t&&(wt[t]={x:window.pageXOffset,y:window.pageYOffset})}function kt(t){Tt(),t.state&&t.state.key&&bt(t.state.key)}function Ot(){var t=_t();if(t)return wt[t]}function Et(t,e){var n=document.documentElement,r=n.getBoundingClientRect(),i=t.getBoundingClientRect();return{x:i.left-r.left-e.x,y:i.top-r.top-e.y}}function xt(t){return Nt(t.x)||Nt(t.y)}function St(t){return{x:Nt(t.x)?t.x:window.pageXOffset,y:Nt(t.y)?t.y:window.pageYOffset}}function Pt(t){return{x:Nt(t.x)?t.x:0,y:Nt(t.y)?t.y:0}}function Nt(t){return"number"===typeof t}var At=/^#\d/;function Rt(t,e){var n="object"===typeof t;if(n&&"string"===typeof t.selector){var r=At.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(r){var i=t.offset&&"object"===typeof t.offset?t.offset:{};i=Pt(i),e=Et(r,i)}else xt(t)&&(e=St(t))}else n&&xt(t)&&(e=St(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var jt=ct&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Lt(t,e){Tt();var n=window.history;try{if(e){var i=r({},n.state);i.key=_t(),n.replaceState(i,"",t)}else n.pushState({key:bt(gt())},"",t)}catch(o){window.location[e?"replace":"assign"](t)}}function Mt(t){Lt(t,!0)}function Dt(t,e,n){var r=function(i){i>=t.length?n():t[i]?e(t[i],(function(){r(i+1)})):r(i+1)};r(0)}var Ft={redirected:2,aborted:4,cancelled:8,duplicated:16};function $t(t,e){return Vt(t,e,Ft.redirected,'Redirected when going from "'+t.fullPath+'" to "'+Wt(e)+'" via a navigation guard.')}function Ut(t,e){var n=Vt(t,e,Ft.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return n.name="NavigationDuplicated",n}function zt(t,e){return Vt(t,e,Ft.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function qt(t,e){return Vt(t,e,Ft.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function Vt(t,e,n,r){var i=new Error(r);return i._isRouter=!0,i.from=t,i.to=e,i.type=n,i}var Ht=["params","query","hash"];function Wt(t){if("string"===typeof t)return t;if("path"in t)return t.path;var e={};return Ht.forEach((function(n){n in t&&(e[n]=t[n])})),JSON.stringify(e,null,2)}function Bt(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Gt(t,e){return Bt(t)&&t._isRouter&&(null==e||t.type===e)}function Kt(t){return function(e,n,r){var i=!1,o=0,s=null;Yt(t,(function(t,e,n,a){if("function"===typeof t&&void 0===t.cid){i=!0,o++;var c,u=Zt((function(e){Qt(e)&&(e=e.default),t.resolved="function"===typeof e?e:tt.extend(e),n.components[a]=e,o--,o<=0&&r()})),l=Zt((function(t){var e="Failed to resolve async component "+a+": "+t;s||(s=Bt(t)?t:new Error(e),r(s))}));try{c=t(u,l)}catch(d){l(d)}if(c)if("function"===typeof c.then)c.then(u,l);else{var h=c.component;h&&"function"===typeof h.then&&h.then(u,l)}}})),i||r()}}function Yt(t,e){return Xt(t.map((function(t){return Object.keys(t.components).map((function(n){return e(t.components[n],t.instances[n],t,n)}))})))}function Xt(t){return Array.prototype.concat.apply([],t)}var Jt="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Qt(t){return t.__esModule||Jt&&"Module"===t[Symbol.toStringTag]}function Zt(t){var e=!1;return function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];if(!e)return e=!0,t.apply(this,n)}}var te=function(t,e){this.router=t,this.base=ee(e),this.current=v,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function ee(t){if(!t)if(ct){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function ne(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r;n++)if(t[n]!==e[n])break;return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function re(t,e,n,r){var i=Yt(t,(function(t,r,i,o){var s=ie(t,e);if(s)return Array.isArray(s)?s.map((function(t){return n(t,r,i,o)})):n(s,r,i,o)}));return Xt(r?i.reverse():i)}function ie(t,e){return"function"!==typeof t&&(t=tt.extend(t)),t.options[e]}function oe(t){return re(t,"beforeRouteLeave",ae,!0)}function se(t){return re(t,"beforeRouteUpdate",ae)}function ae(t,e){if(e)return function(){return t.apply(e,arguments)}}function ce(t){return re(t,"beforeRouteEnter",(function(t,e,n,r){return ue(t,n,r)}))}function ue(t,e,n){return function(r,i,o){return t(r,i,(function(t){"function"===typeof t&&(e.enteredCbs[n]||(e.enteredCbs[n]=[]),e.enteredCbs[n].push(t)),o(t)}))}}te.prototype.listen=function(t){this.cb=t},te.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},te.prototype.onError=function(t){this.errorCbs.push(t)},te.prototype.transitionTo=function(t,e,n){var r,i=this;try{r=this.router.match(t,this.current)}catch(s){throw this.errorCbs.forEach((function(t){t(s)})),s}var o=this.current;this.confirmTransition(r,(function(){i.updateRoute(r),e&&e(r),i.ensureURL(),i.router.afterHooks.forEach((function(t){t&&t(r,o)})),i.ready||(i.ready=!0,i.readyCbs.forEach((function(t){t(r)})))}),(function(t){n&&n(t),t&&!i.ready&&(Gt(t,Ft.redirected)&&o===v||(i.ready=!0,i.readyErrorCbs.forEach((function(e){e(t)}))))}))},te.prototype.confirmTransition=function(t,e,n){var r=this,i=this.current;this.pending=t;var o=function(t){!Gt(t)&&Bt(t)&&(r.errorCbs.length?r.errorCbs.forEach((function(e){e(t)})):console.error(t)),n&&n(t)},s=t.matched.length-1,a=i.matched.length-1;if(_(t,i)&&s===a&&t.matched[s]===i.matched[a])return this.ensureURL(),t.hash&&It(this.router,i,t,!1),o(Ut(i,t));var c=ne(this.current.matched,t.matched),u=c.updated,l=c.deactivated,h=c.activated,d=[].concat(oe(l),this.router.beforeHooks,se(u),h.map((function(t){return t.beforeEnter})),Kt(h)),f=function(e,n){if(r.pending!==t)return o(zt(i,t));try{e(t,i,(function(e){!1===e?(r.ensureURL(!0),o(qt(i,t))):Bt(e)?(r.ensureURL(!0),o(e)):"string"===typeof e||"object"===typeof e&&("string"===typeof e.path||"string"===typeof e.name)?(o($t(i,t)),"object"===typeof e&&e.replace?r.replace(e):r.push(e)):n(e)}))}catch(s){o(s)}};Dt(d,f,(function(){var n=ce(h),s=n.concat(r.router.resolveHooks);Dt(s,f,(function(){if(r.pending!==t)return o(zt(i,t));r.pending=null,e(t),r.router.app&&r.router.app.$nextTick((function(){I(t)}))}))}))},te.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},te.prototype.setupListeners=function(){},te.prototype.teardown=function(){this.listeners.forEach((function(t){t()})),this.listeners=[],this.current=v,this.pending=null};var le=function(t){function e(e,n){t.call(this,e,n),this._startLocation=he(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=jt&&n;r&&this.listeners.push(Ct());var i=function(){var n=t.current,i=he(t.base);t.current===v&&i===t._startLocation||t.transitionTo(i,(function(t){r&&It(e,t,n,!0)}))};window.addEventListener("popstate",i),this.listeners.push((function(){window.removeEventListener("popstate",i)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){Lt(S(r.base+t.fullPath)),It(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){Mt(S(r.base+t.fullPath)),It(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.ensureURL=function(t){if(he(this.base)!==this.current.fullPath){var e=S(this.base+this.current.fullPath);t?Lt(e):Mt(e)}},e.prototype.getCurrentLocation=function(){return he(this.base)},e}(te);function he(t){var e=window.location.pathname,n=e.toLowerCase(),r=t.toLowerCase();return!t||n!==r&&0!==n.indexOf(S(r+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var de=function(t){function e(e,n,r){t.call(this,e,n),r&&fe(this.base)||pe()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=jt&&n;r&&this.listeners.push(Ct());var i=function(){var e=t.current;pe()&&t.transitionTo(me(),(function(n){r&&It(t.router,n,e,!0),jt||ye(n.fullPath)}))},o=jt?"popstate":"hashchange";window.addEventListener(o,i),this.listeners.push((function(){window.removeEventListener(o,i)}))}},e.prototype.push=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){ge(t.fullPath),It(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){ye(t.fullPath),It(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;me()!==e&&(t?ge(e):ye(e))},e.prototype.getCurrentLocation=function(){return me()},e}(te);function fe(t){var e=he(t);if(!/^\/#/.test(e))return window.location.replace(S(t+"/#"+e)),!0}function pe(){var t=me();return"/"===t.charAt(0)||(ye("/"+t),!1)}function me(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function ve(t){var e=window.location.href,n=e.indexOf("#"),r=n>=0?e.slice(0,n):e;return r+"#"+t}function ge(t){jt?Lt(ve(t)):window.location.hash=t}function ye(t){jt?Mt(ve(t)):window.location.replace(ve(t))}var _e=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index+1).concat(t),r.index++,e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index).concat(t),e&&e(t)}),n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){var t=e.current;e.index=n,e.updateRoute(r),e.router.afterHooks.forEach((function(e){e&&e(r,t)}))}),(function(t){Gt(t,Ft.duplicated)&&(e.index=n)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(te),be=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=ft(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!jt&&!1!==t.fallback,this.fallback&&(e="hash"),ct||(e="abstract"),this.mode=e,e){case"history":this.history=new le(this,t.base);break;case"hash":this.history=new de(this,t.base,this.fallback);break;case"abstract":this.history=new _e(this,t.base);break;default:0}},we={currentRoute:{configurable:!0}};function Ce(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function Ie(t,e,n){var r="hash"===n?"#"+e:e;return t?S(t+"/"+r):r}be.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},we.currentRoute.get=function(){return this.history&&this.history.current},be.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var n=e.apps.indexOf(t);n>-1&&e.apps.splice(n,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()})),!this.app){this.app=t;var n=this.history;if(n instanceof le||n instanceof de){var r=function(t){var r=n.current,i=e.options.scrollBehavior,o=jt&&i;o&&"fullPath"in t&&It(e,t,r,!1)},i=function(t){n.setupListeners(),r(t)};n.transitionTo(n.getCurrentLocation(),i,i)}n.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},be.prototype.beforeEach=function(t){return Ce(this.beforeHooks,t)},be.prototype.beforeResolve=function(t){return Ce(this.resolveHooks,t)},be.prototype.afterEach=function(t){return Ce(this.afterHooks,t)},be.prototype.onReady=function(t,e){this.history.onReady(t,e)},be.prototype.onError=function(t){this.history.onError(t)},be.prototype.push=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.push(t,e,n)}));this.history.push(t,e,n)},be.prototype.replace=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.replace(t,e,n)}));this.history.replace(t,e,n)},be.prototype.go=function(t){this.history.go(t)},be.prototype.back=function(){this.go(-1)},be.prototype.forward=function(){this.go(1)},be.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},be.prototype.resolve=function(t,e,n){e=e||this.history.current;var r=Z(t,e,n,this),i=this.match(r,e),o=i.redirectedFrom||i.fullPath,s=this.history.base,a=Ie(s,o,this.mode);return{location:r,route:i,href:a,normalizedTo:r,resolved:i}},be.prototype.getRoutes=function(){return this.matcher.getRoutes()},be.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==v&&this.history.transitionTo(this.history.getCurrentLocation())},be.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==v&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(be.prototype,we),be.install=at,be.version="3.5.3",be.isNavigationFailure=Gt,be.NavigationFailureType=Ft,be.START_LOCATION=v,ct&&window.Vue&&window.Vue.use(be),e["a"]=be},"90e3":function(t,e,n){var r=n("e330"),i=0,o=Math.random(),s=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+s(++i+o,36)}},9112:function(t,e,n){var r=n("83ab"),i=n("9bf2"),o=n("5c6c");t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},"94ca":function(t,e,n){var r=n("d039"),i=n("1626"),o=/#|\.prototype\./,s=function(t,e){var n=c[a(t)];return n==l||n!=u&&(i(e)?r(e):!!e)},a=s.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";t.exports=s},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(A){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof v?e:v,o=Object.create(i.prototype),s=new S(r||[]);return o._invoke=k(t,n,s),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(A){return{type:"throw",arg:A}}}t.wrap=u;var h="suspendedStart",d="suspendedYield",f="executing",p="completed",m={};function v(){}function g(){}function y(){}var _={};c(_,o,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(P([])));w&&w!==n&&r.call(w,o)&&(_=w);var C=y.prototype=v.prototype=Object.create(_);function I(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function T(t,e){function n(i,o,s,a){var c=l(t[i],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"===typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,s,a)}),(function(t){n("throw",t,s,a)})):e.resolve(h).then((function(t){u.value=t,s(u)}),(function(t){return n("throw",t,s,a)}))}a(c.arg)}var i;function o(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function k(t,e,n){var r=h;return function(i,o){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return N()}n.method=i,n.arg=o;while(1){var s=n.delegate;if(s){var a=O(s,n);if(a){if(a===m)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=l(t,e,n);if("normal"===c.type){if(r=n.done?p:d,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function O(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,O(t,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=l(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function P(t){if(t){var n=t[o];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,s=function n(){while(++i<t.length)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return s.next=s}}return{next:N}}function N(){return{value:e,done:!0}}return g.prototype=y,c(C,"constructor",y),c(y,"constructor",g),g.displayName=c(y,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,a,"GeneratorFunction")),t.prototype=Object.create(C),t},t.awrap=function(t){return{__await:t}},I(T.prototype),c(T.prototype,s,(function(){return this})),t.AsyncIterator=T,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var s=new T(u(e,n,r,i),o);return t.isGeneratorFunction(n)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},I(C),c(C,a,"Generator"),c(C,o,(function(){return this})),c(C,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=P,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(x),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return a.type="throw",a.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion;if("root"===s.tryLoc)return i("end");if(s.tryLoc<=this.prev){var c=r.call(s,"catchLoc"),u=r.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return i(s.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;x(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:P(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=r}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},"9a1f":function(t,e,n){var r=n("da84"),i=n("c65b"),o=n("59ed"),s=n("825a"),a=n("0d51"),c=n("35a1"),u=r.TypeError;t.exports=function(t,e){var n=arguments.length<2?c(t):e;if(o(n))return s(i(n,t));throw u(a(t)+" is not iterable")}},"9bf2":function(t,e,n){var r=n("da84"),i=n("83ab"),o=n("0cfb"),s=n("aed9"),a=n("825a"),c=n("a04b"),u=r.TypeError,l=Object.defineProperty,h=Object.getOwnPropertyDescriptor,d="enumerable",f="configurable",p="writable";e.f=i?s?function(t,e,n){if(a(t),e=c(e),a(n),"function"===typeof t&&"prototype"===e&&"value"in n&&p in n&&!n[p]){var r=h(t,e);r&&r[p]&&(t[e]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:d in n?n[d]:r[d],writable:!1})}return l(t,e,n)}:l:function(t,e,n){if(a(t),e=c(e),a(n),o)try{return l(t,e,n)}catch(r){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},"9ed3":function(t,e,n){"use strict";var r=n("ae93").IteratorPrototype,i=n("7c73"),o=n("5c6c"),s=n("d44e"),a=n("3f8c"),c=function(){return this};t.exports=function(t,e,n,u){var l=e+" Iterator";return t.prototype=i(r,{next:o(+!u,n)}),s(t,l,!1,!0),a[l]=c,t}},a04b:function(t,e,n){var r=n("c04e"),i=n("d9b5");t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},a4b4:function(t,e,n){var r=n("342f");t.exports=/web0s(?!.*chrome)/i.test(r)},a4d3:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("d066"),s=n("2ba4"),a=n("c65b"),c=n("e330"),u=n("c430"),l=n("83ab"),h=n("4930"),d=n("d039"),f=n("1a2d"),p=n("e8b5"),m=n("1626"),v=n("861d"),g=n("3a9b"),y=n("d9b5"),_=n("825a"),b=n("7b0b"),w=n("fc6a"),C=n("a04b"),I=n("577e"),T=n("5c6c"),k=n("7c73"),O=n("df75"),E=n("241c"),x=n("057f"),S=n("7418"),P=n("06cf"),N=n("9bf2"),A=n("37e8"),R=n("d1e7"),j=n("f36a"),L=n("6eeb"),M=n("5692"),D=n("f772"),F=n("d012"),$=n("90e3"),U=n("b622"),z=n("e538"),q=n("746f"),V=n("d44e"),H=n("69f3"),W=n("b727").forEach,B=D("hidden"),G="Symbol",K="prototype",Y=U("toPrimitive"),X=H.set,J=H.getterFor(G),Q=Object[K],Z=i.Symbol,tt=Z&&Z[K],et=i.TypeError,nt=i.QObject,rt=o("JSON","stringify"),it=P.f,ot=N.f,st=x.f,at=R.f,ct=c([].push),ut=M("symbols"),lt=M("op-symbols"),ht=M("string-to-symbol-registry"),dt=M("symbol-to-string-registry"),ft=M("wks"),pt=!nt||!nt[K]||!nt[K].findChild,mt=l&&d((function(){return 7!=k(ot({},"a",{get:function(){return ot(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=it(Q,e);r&&delete Q[e],ot(t,e,n),r&&t!==Q&&ot(Q,e,r)}:ot,vt=function(t,e){var n=ut[t]=k(tt);return X(n,{type:G,tag:t,description:e}),l||(n.description=e),n},gt=function(t,e,n){t===Q&&gt(lt,e,n),_(t);var r=C(e);return _(n),f(ut,r)?(n.enumerable?(f(t,B)&&t[B][r]&&(t[B][r]=!1),n=k(n,{enumerable:T(0,!1)})):(f(t,B)||ot(t,B,T(1,{})),t[B][r]=!0),mt(t,r,n)):ot(t,r,n)},yt=function(t,e){_(t);var n=w(e),r=O(n).concat(It(n));return W(r,(function(e){l&&!a(bt,n,e)||gt(t,e,n[e])})),t},_t=function(t,e){return void 0===e?k(t):yt(k(t),e)},bt=function(t){var e=C(t),n=a(at,this,e);return!(this===Q&&f(ut,e)&&!f(lt,e))&&(!(n||!f(this,e)||!f(ut,e)||f(this,B)&&this[B][e])||n)},wt=function(t,e){var n=w(t),r=C(e);if(n!==Q||!f(ut,r)||f(lt,r)){var i=it(n,r);return!i||!f(ut,r)||f(n,B)&&n[B][r]||(i.enumerable=!0),i}},Ct=function(t){var e=st(w(t)),n=[];return W(e,(function(t){f(ut,t)||f(F,t)||ct(n,t)})),n},It=function(t){var e=t===Q,n=st(e?lt:w(t)),r=[];return W(n,(function(t){!f(ut,t)||e&&!f(Q,t)||ct(r,ut[t])})),r};if(h||(Z=function(){if(g(tt,this))throw et("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?I(arguments[0]):void 0,e=$(t),n=function(t){this===Q&&a(n,lt,t),f(this,B)&&f(this[B],e)&&(this[B][e]=!1),mt(this,e,T(1,t))};return l&&pt&&mt(Q,e,{configurable:!0,set:n}),vt(e,t)},tt=Z[K],L(tt,"toString",(function(){return J(this).tag})),L(Z,"withoutSetter",(function(t){return vt($(t),t)})),R.f=bt,N.f=gt,A.f=yt,P.f=wt,E.f=x.f=Ct,S.f=It,z.f=function(t){return vt(U(t),t)},l&&(ot(tt,"description",{configurable:!0,get:function(){return J(this).description}}),u||L(Q,"propertyIsEnumerable",bt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!h,sham:!h},{Symbol:Z}),W(O(ft),(function(t){q(t)})),r({target:G,stat:!0,forced:!h},{for:function(t){var e=I(t);if(f(ht,e))return ht[e];var n=Z(e);return ht[e]=n,dt[n]=e,n},keyFor:function(t){if(!y(t))throw et(t+" is not a symbol");if(f(dt,t))return dt[t]},useSetter:function(){pt=!0},useSimple:function(){pt=!1}}),r({target:"Object",stat:!0,forced:!h,sham:!l},{create:_t,defineProperty:gt,defineProperties:yt,getOwnPropertyDescriptor:wt}),r({target:"Object",stat:!0,forced:!h},{getOwnPropertyNames:Ct,getOwnPropertySymbols:It}),r({target:"Object",stat:!0,forced:d((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(b(t))}}),rt){var Tt=!h||d((function(){var t=Z();return"[null]"!=rt([t])||"{}"!=rt({a:t})||"{}"!=rt(Object(t))}));r({target:"JSON",stat:!0,forced:Tt},{stringify:function(t,e,n){var r=j(arguments),i=e;if((v(e)||void 0!==t)&&!y(t))return p(e)||(e=function(t,e){if(m(i)&&(e=a(i,this,t,e)),!y(e))return e}),r[1]=e,s(rt,null,r)}})}if(!tt[Y]){var kt=tt.valueOf;L(tt,Y,(function(t){return a(kt,this)}))}V(Z,G),F[B]=!0},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},a79d:function(t,e,n){"use strict";var r=n("23e7"),i=n("c430"),o=n("fea9"),s=n("d039"),a=n("d066"),c=n("1626"),u=n("4840"),l=n("cdf9"),h=n("6eeb"),d=!!o&&s((function(){o.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:d},{finally:function(t){var e=u(this,a("Promise")),n=c(t);return this.then(n?function(n){return l(e,t()).then((function(){return n}))}:t,n?function(n){return l(e,t()).then((function(){throw n}))}:t)}}),!i&&c(o)){var f=a("Promise").prototype["finally"];o.prototype["finally"]!==f&&h(o.prototype,"finally",f,{unsafe:!0})}},a9e3:function(t,e,n){"use strict";var r=n("83ab"),i=n("da84"),o=n("e330"),s=n("94ca"),a=n("6eeb"),c=n("1a2d"),u=n("7156"),l=n("3a9b"),h=n("d9b5"),d=n("c04e"),f=n("d039"),p=n("241c").f,m=n("06cf").f,v=n("9bf2").f,g=n("408a"),y=n("58a8").trim,_="Number",b=i[_],w=b.prototype,C=i.TypeError,I=o("".slice),T=o("".charCodeAt),k=function(t){var e=d(t,"number");return"bigint"==typeof e?e:O(e)},O=function(t){var e,n,r,i,o,s,a,c,u=d(t,"number");if(h(u))throw C("Cannot convert a Symbol value to a number");if("string"==typeof u&&u.length>2)if(u=y(u),e=T(u,0),43===e||45===e){if(n=T(u,2),88===n||120===n)return NaN}else if(48===e){switch(T(u,1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+u}for(o=I(u,2),s=o.length,a=0;a<s;a++)if(c=T(o,a),c<48||c>i)return NaN;return parseInt(o,r)}return+u};if(s(_,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var E,x=function(t){var e=arguments.length<1?0:b(k(t)),n=this;return l(w,n)&&f((function(){g(n)}))?u(Object(e),n,x):e},S=r?p(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),P=0;S.length>P;P++)c(b,E=S[P])&&!c(x,E)&&v(x,E,m(b,E));x.prototype=w,w.constructor=x,a(i,_,x)}},ab36:function(t,e,n){var r=n("861d"),i=n("9112");t.exports=function(t,e){r(e)&&"cause"in e&&i(t,"cause",e.cause)}},ad3d:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return C}));var r=n("ecee"),i="undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{};function o(t,e){return e={exports:{}},t(e,e.exports),e.exports}var s=o((function(t){(function(e){var n=function(t,e,r){if(!u(e)||h(e)||d(e)||f(e)||c(e))return e;var i,o=0,s=0;if(l(e))for(i=[],s=e.length;o<s;o++)i.push(n(t,e[o],r));else for(var a in i={},e)Object.prototype.hasOwnProperty.call(e,a)&&(i[t(a,r)]=n(t,e[a],r));return i},r=function(t,e){e=e||{};var n=e.separator||"_",r=e.split||/(?=[A-Z])/;return t.split(r).join(n)},i=function(t){return p(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,e){return e?e.toUpperCase():""})),t.substr(0,1).toLowerCase()+t.substr(1))},o=function(t){var e=i(t);return e.substr(0,1).toUpperCase()+e.substr(1)},s=function(t,e){return r(t,e).toLowerCase()},a=Object.prototype.toString,c=function(t){return"function"===typeof t},u=function(t){return t===Object(t)},l=function(t){return"[object Array]"==a.call(t)},h=function(t){return"[object Date]"==a.call(t)},d=function(t){return"[object RegExp]"==a.call(t)},f=function(t){return"[object Boolean]"==a.call(t)},p=function(t){return t-=0,t===t},m=function(t,e){var n=e&&"process"in e?e.process:e;return"function"!==typeof n?t:function(e,r){return n(e,t,r)}},v={camelize:i,decamelize:s,pascalize:o,depascalize:s,camelizeKeys:function(t,e){return n(m(i,e),t)},decamelizeKeys:function(t,e){return n(m(s,e),t,e)},pascalizeKeys:function(t,e){return n(m(o,e),t)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=v:e.humps=v})(i)})),a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},l=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},h=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)};function d(t){return t.split(";").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,e){var n=e.indexOf(":"),r=s.camelize(e.slice(0,n)),i=e.slice(n+1).trim();return t[r]=i,t}),{})}function f(t){return t.split(/\s+/).reduce((function(t,e){return t[e]=!0,t}),{})}function p(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.reduce((function(t,e){return Array.isArray(e)?t=t.concat(e):t.push(e),t}),[])}function m(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=(e.children||[]).map(m.bind(null,t)),o=Object.keys(e.attributes||{}).reduce((function(t,n){var r=e.attributes[n];switch(n){case"class":t["class"]=f(r);break;case"style":t["style"]=d(r);break;default:t.attrs[n]=r}return t}),{class:{},style:{},attrs:{}}),s=r.class,a=void 0===s?{}:s,c=r.style,h=void 0===c?{}:c,v=r.attrs,g=void 0===v?{}:v,y=l(r,["class","style","attrs"]);return"string"===typeof e?e:t(e.tag,u({class:p(o.class,a),style:u({},o.style,h),attrs:u({},o.attrs,g)},y,{props:n}),i)}var v=!1;try{v=!0}catch(I){}function g(){var t;!v&&console&&"function"===typeof console.error&&(t=console).error.apply(t,arguments)}function y(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?c({},t,e):{}}function _(t){var e,n=(e={"fa-spin":t.spin,"fa-spin-pulse":t.spinPulse,"fa-spin-reverse":t.spinReverse,"fa-pulse":t.pulse,"fa-beat":t.beat,"fa-fade":t.fade,"fa-flash":t.flash,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip-horizontal":"horizontal"===t.flip||"both"===t.flip,"fa-flip-vertical":"vertical"===t.flip||"both"===t.flip},c(e,"fa-"+t.size,null!==t.size),c(e,"fa-rotate-"+t.rotation,null!==t.rotation),c(e,"fa-pull-"+t.pull,null!==t.pull),c(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(n).map((function(t){return n[t]?t:null})).filter((function(t){return t}))}function b(t,e){var n=0===(t||"").length?[]:[t];return n.concat(e).join(" ")}function w(t){return t&&"object"===("undefined"===typeof t?"undefined":a(t))&&t.prefix&&t.iconName&&t.icon?t:r["d"].icon?r["d"].icon(t):null===t?null:"object"===("undefined"===typeof t?"undefined":a(t))&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"===typeof t?{prefix:"fas",iconName:t}:void 0}var C={name:"FontAwesomeIcon",functional:!0,props:{beat:{type:Boolean,default:!1},border:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(t){return["horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},render:function(t,e){var n=e.props,i=n.icon,o=n.mask,s=n.symbol,a=n.title,c=w(i),l=y("classes",_(n)),h=y("transform","string"===typeof n.transform?r["d"].transform(n.transform):n.transform),d=y("mask",w(o)),f=Object(r["b"])(c,u({},l,h,d,{symbol:s,title:a}));if(!f)return g("Could not find one or more icon(s)",c,d);var p=f.abstract,v=m.bind(null,t);return v(p[0],{},e.data)}};Boolean,Boolean}).call(this,n("c8ba"))},ae93:function(t,e,n){"use strict";var r,i,o,s=n("d039"),a=n("1626"),c=n("7c73"),u=n("e163"),l=n("6eeb"),h=n("b622"),d=n("c430"),f=h("iterator"),p=!1;[].keys&&(o=[].keys(),"next"in o?(i=u(u(o)),i!==Object.prototype&&(r=i)):p=!0);var m=void 0==r||s((function(){var t={};return r[f].call(t)!==t}));m?r={}:d&&(r=c(r)),a(r[f])||l(r,f,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},aed9:function(t,e,n){var r=n("83ab"),i=n("d039");t.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},b041:function(t,e,n){"use strict";var r=n("00ee"),i=n("f5df");t.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b0c0:function(t,e,n){var r=n("83ab"),i=n("5e77").EXISTS,o=n("e330"),s=n("9bf2").f,a=Function.prototype,c=o(a.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=o(u.exec),h="name";r&&!i&&s(a,h,{configurable:!0,get:function(){try{return l(u,c(this))[1]}catch(t){return""}}})},b575:function(t,e,n){var r,i,o,s,a,c,u,l,h=n("da84"),d=n("0366"),f=n("06cf").f,p=n("2cf4").set,m=n("1cdc"),v=n("d4c3"),g=n("a4b4"),y=n("605d"),_=h.MutationObserver||h.WebKitMutationObserver,b=h.document,w=h.process,C=h.Promise,I=f(h,"queueMicrotask"),T=I&&I.value;T||(r=function(){var t,e;y&&(t=w.domain)&&t.exit();while(i){e=i.fn,i=i.next;try{e()}catch(n){throw i?s():o=void 0,n}}o=void 0,t&&t.enter()},m||y||g||!_||!b?!v&&C&&C.resolve?(u=C.resolve(void 0),u.constructor=C,l=d(u.then,u),s=function(){l(r)}):y?s=function(){w.nextTick(r)}:(p=d(p,h),s=function(){p(r)}):(a=!0,c=b.createTextNode(""),new _(r).observe(c,{characterData:!0}),s=function(){c.data=a=!a})),t.exports=T||function(t){var e={fn:t,next:void 0};o&&(o.next=e),i||(i=e,s()),o=e}},b622:function(t,e,n){var r=n("da84"),i=n("5692"),o=n("1a2d"),s=n("90e3"),a=n("4930"),c=n("fdbf"),u=i("wks"),l=r.Symbol,h=l&&l["for"],d=c?l:l&&l.withoutSetter||s;t.exports=function(t){if(!o(u,t)||!a&&"string"!=typeof u[t]){var e="Symbol."+t;a&&o(l,t)?u[t]=l[t]:u[t]=c&&h?h(e):d(e)}return u[t]}},b64b:function(t,e,n){var r=n("23e7"),i=n("7b0b"),o=n("df75"),s=n("d039"),a=s((function(){o(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(t){return o(i(t))}})},b727:function(t,e,n){var r=n("0366"),i=n("e330"),o=n("44ad"),s=n("7b0b"),a=n("07fa"),c=n("65f0"),u=i([].push),l=function(t){var e=1==t,n=2==t,i=3==t,l=4==t,h=6==t,d=7==t,f=5==t||h;return function(p,m,v,g){for(var y,_,b=s(p),w=o(b),C=r(m,v),I=a(w),T=0,k=g||c,O=e?k(p,I):n||d?k(p,0):void 0;I>T;T++)if((f||T in w)&&(y=w[T],_=C(y,T,b),t))if(e)O[T]=_;else if(_)switch(t){case 3:return!0;case 5:return y;case 6:return T;case 2:u(O,y)}else switch(t){case 4:return!1;case 7:u(O,y)}return h?-1:i||l?l:O}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},b980:function(t,e,n){var r=n("d039"),i=n("5c6c");t.exports=!r((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",i(1,7)),7!==t.stack)}))},bee2:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}n.d(e,"a",(function(){return i}))},c04e:function(t,e,n){var r=n("da84"),i=n("c65b"),o=n("861d"),s=n("d9b5"),a=n("dc4a"),c=n("485a"),u=n("b622"),l=r.TypeError,h=u("toPrimitive");t.exports=function(t,e){if(!o(t)||s(t))return t;var n,r=a(t,h);if(r){if(void 0===e&&(e="default"),n=i(r,t,e),!o(n)||s(n))return n;throw l("Can't convert object to primitive value")}return void 0===e&&(e="number"),c(t,e)}},c074:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return s})),n.d(e,"e",(function(){return a})),n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return u}));
/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
var r={prefix:"fas",iconName:"apple-alt",icon:[448,512,[],"f5d1","M350.85 129c25.97 4.67 47.27 18.67 63.92 42 14.65 20.67 24.64 46.67 29.96 78 4.67 28.67 4.32 57.33-1 86-7.99 47.33-23.97 87-47.94 119-28.64 38.67-64.59 58-107.87 58-10.66 0-22.3-3.33-34.96-10-8.66-5.33-18.31-8-28.97-8s-20.3 2.67-28.97 8c-12.66 6.67-24.3 10-34.96 10-43.28 0-79.23-19.33-107.87-58-23.97-32-39.95-71.67-47.94-119-5.32-28.67-5.67-57.33-1-86 5.32-31.33 15.31-57.33 29.96-78 16.65-23.33 37.95-37.33 63.92-42 15.98-2.67 37.95-.33 65.92 7 23.97 6.67 44.28 14.67 60.93 24 16.65-9.33 36.96-17.33 60.93-24 27.98-7.33 49.96-9.67 65.94-7zm-54.94-41c-9.32 8.67-21.65 15-36.96 19-10.66 3.33-22.3 5-34.96 5l-14.98-1c-1.33-9.33-1.33-20 0-32 2.67-24 10.32-42.33 22.97-55 9.32-8.67 21.65-15 36.96-19 10.66-3.33 22.3-5 34.96-5l14.98 1 1 15c0 12.67-1.67 24.33-4.99 35-3.99 15.33-10.31 27.67-18.98 37z"]},i={prefix:"fas",iconName:"bell",icon:[448,512,[],"f0f3","M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"]},o={prefix:"fas",iconName:"carrot",icon:[512,512,[],"f787","M298.2 156.6c-52.7-25.7-114.5-10.5-150.2 32.8l55.2 55.2c6.3 6.3 6.3 16.4 0 22.6-3.1 3.1-7.2 4.7-11.3 4.7s-8.2-1.6-11.3-4.7L130.4 217 2.3 479.7c-2.9 6-3.1 13.3 0 19.7 5.4 11.1 18.9 15.7 30 10.3l133.6-65.2-49.2-49.2c-6.3-6.2-6.3-16.4 0-22.6 6.3-6.2 16.4-6.2 22.6 0l57 57 102-49.8c24-11.7 44.5-31.3 57.1-57.1 30.1-61.7 4.5-136.1-57.2-166.2zm92.1-34.9C409.8 81 399.7 32.9 360 0c-50.3 41.7-52.5 107.5-7.9 151.9l8 8c44.4 44.6 110.3 42.4 151.9-7.9-32.9-39.7-81-49.8-121.7-30.3z"]},s={prefix:"fas",iconName:"clock",icon:[512,512,[],"f017","M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"]},a={prefix:"fas",iconName:"heart",icon:[512,512,[],"f004","M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"]},c={prefix:"fas",iconName:"lemon",icon:[512,512,[],"f094","M489.038 22.963C465.944-.13 434.648-5.93 413.947 6.129c-58.906 34.312-181.25-53.077-321.073 86.746S40.441 355.041 6.129 413.945c-12.059 20.702-6.26 51.999 16.833 75.093 23.095 23.095 54.392 28.891 75.095 16.832 58.901-34.31 181.246 53.079 321.068-86.743S471.56 156.96 505.871 98.056c12.059-20.702 6.261-51.999-16.833-75.093zM243.881 95.522c-58.189 14.547-133.808 90.155-148.358 148.358-1.817 7.27-8.342 12.124-15.511 12.124-1.284 0-2.59-.156-3.893-.481-8.572-2.144-13.784-10.83-11.642-19.403C81.901 166.427 166.316 81.93 236.119 64.478c8.575-2.143 17.261 3.069 19.403 11.642s-3.069 17.259-11.641 19.402z"]},u={prefix:"fas",iconName:"seedling",icon:[512,512,[],"f4d8","M64 96H0c0 123.7 100.3 224 224 224v144c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320C288 196.3 187.7 96 64 96zm384-64c-84.2 0-157.4 46.5-195.7 115.2 27.7 30.2 48.2 66.9 59 107.6C424 243.1 512 147.9 512 32h-64z"]}},c430:function(t,e){t.exports=!1},c65b:function(t,e){var n=Function.prototype.call;t.exports=n.bind?n.bind(n):function(){return n.apply(n,arguments)}},c6b6:function(t,e,n){var r=n("e330"),i=r({}.toString),o=r("".slice);t.exports=function(t){return o(i(t),8,-1)}},c6cd:function(t,e,n){var r=n("da84"),i=n("ce4e"),o="__core-js_shared__",s=r[o]||i(o,{});t.exports=s},c770:function(t,e,n){var r=n("e330"),i=r("".replace),o=function(t){return String(Error(t).stack)}("zxcasd"),s=/\n\s*at [^:]*:[^\n]*/,a=s.test(o);t.exports=function(t,e){if(a&&"string"==typeof t)while(e--)t=i(t,s,"");return t}},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},ca84:function(t,e,n){var r=n("e330"),i=n("1a2d"),o=n("fc6a"),s=n("4d64").indexOf,a=n("d012"),c=r([].push);t.exports=function(t,e){var n,r=o(t),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(e.length>u)i(r,n=e[u++])&&(~s(l,n)||c(l,n));return l}},caad:function(t,e,n){"use strict";var r=n("23e7"),i=n("4d64").includes,o=n("44d2");r({target:"Array",proto:!0},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},cc12:function(t,e,n){var r=n("da84"),i=n("861d"),o=r.document,s=i(o)&&i(o.createElement);t.exports=function(t){return s?o.createElement(t):{}}},cca6:function(t,e,n){var r=n("23e7"),i=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},cd9a:function(t,e,n){"use strict";(function(t){function n(t,e,n){var r,i=null;return function(){var o=this,s=arguments,a=+new Date;clearTimeout(i),r||(r=a),a-r>=n?(t.apply(o,s),r=a):i=setTimeout((function(){t.apply(o,s)}),e)}}function r(t,e){var n=!1;return function(){n||(n=!0,t.apply(this,arguments),setTimeout((function(){return n=!1}),e))}}function i(t){return Math.sqrt(t.x*t.x+t.y*t.y)}function o(t,e){return t.x*e.x+t.y*e.y}function s(t,e){var n=i(t)*i(e);if(0===n)return 0;var r=o(t,e)/n;return r>1&&(r=1),Math.acos(r)}function a(t,e){return t.x*e.y-e.x*t.y}function c(t,e){var n=s(t,e);return a(t,e)>0&&(n*=-1),180*n/Math.PI}var u=function(t){this.handlers=[],this.el=t};function l(t,e){var n=new u(t);return n.add(e),n}u.prototype.add=function(t){this.handlers.push(t)},u.prototype.del=function(t){t||(this.handlers=[]);for(var e=this.handlers.length;e>=0;e--)this.handlers[e]===t&&this.handlers.splice(e,1)},u.prototype.dispatch=function(){for(var t=arguments,e=0,n=this.handlers.length;e<n;e++){var r=this.handlers[e];"function"===typeof r&&r.apply(this.el,t)}};var h=function(t,e){this.element="string"==typeof t?document.querySelector(t):t,this.start=this.start.bind(this),this.move=this.move.bind(this),this.end=this.end.bind(this),this.cancel=this.cancel.bind(this),this.element.addEventListener("touchstart",this.start,!1),this.element.addEventListener("touchmove",this.move,!1),this.element.addEventListener("touchend",this.end,!1),this.element.addEventListener("touchcancel",this.cancel,!1),this.preV={x:null,y:null},this.pinchStartLen=null,this.zoom=1,this.isDoubleTap=!1;var n=function(){};this.rotate=l(this.element,e.rotate||n),this.touchStart=l(this.element,e.touchStart||n),this.multipointStart=l(this.element,e.multipointStart||n),this.multipointEnd=l(this.element,e.multipointEnd||n),this.pinch=l(this.element,e.pinch||n),this.swipe=l(this.element,e.swipe||n),this.tap=l(this.element,e.tap||n),this.doubleTap=l(this.element,e.doubleTap||n),this.longTap=l(this.element,e.longTap||n),this.singleTap=l(this.element,e.singleTap||n),this.pressMove=l(this.element,e.pressMove||n),this.twoFingerPressMove=l(this.element,e.twoFingerPressMove||n),this.touchMove=l(this.element,e.touchMove||n),this.touchEnd=l(this.element,e.touchEnd||n),this.touchCancel=l(this.element,e.touchCancel||n),this._cancelAllHandler=this.cancelAll.bind(this),window.addEventListener("scroll",this._cancelAllHandler),this.delta=null,this.last=null,this.now=null,this.tapTimeout=null,this.singleTapTimeout=null,this.longTapTimeout=null,this.swipeTimeout=null,this.x1=this.x2=this.y1=this.y2=null,this.preTapPosition={x:null,y:null}};h.prototype={start:function(t){if(t.touches){this.now=Date.now(),this.x1=t.touches[0].pageX,this.y1=t.touches[0].pageY,this.delta=this.now-(this.last||this.now),this.touchStart.dispatch(t,this.element),null!==this.preTapPosition.x&&(this.isDoubleTap=this.delta>0&&this.delta<=250&&Math.abs(this.preTapPosition.x-this.x1)<30&&Math.abs(this.preTapPosition.y-this.y1)<30,this.isDoubleTap&&clearTimeout(this.singleTapTimeout)),this.preTapPosition.x=this.x1,this.preTapPosition.y=this.y1,this.last=this.now;var e=this.preV,n=t.touches.length;if(n>1){this._cancelLongTap(),this._cancelSingleTap();var r={x:t.touches[1].pageX-this.x1,y:t.touches[1].pageY-this.y1};e.x=r.x,e.y=r.y,this.pinchStartLen=i(e),this.multipointStart.dispatch(t,this.element)}this._preventTap=!1,this.longTapTimeout=setTimeout(function(){this.longTap.dispatch(t,this.element),this._preventTap=!0}.bind(this),750)}},move:function(t){if(t.touches){var e=this.preV,n=t.touches.length,r=t.touches[0].pageX,o=t.touches[0].pageY;if(this.isDoubleTap=!1,n>1){var s=t.touches[1].pageX,a=t.touches[1].pageY,u={x:t.touches[1].pageX-r,y:t.touches[1].pageY-o};null!==e.x&&(this.pinchStartLen>0&&(t.zoom=i(u)/this.pinchStartLen,this.pinch.dispatch(t,this.element)),t.angle=c(u,e),this.rotate.dispatch(t,this.element)),e.x=u.x,e.y=u.y,null!==this.x2&&null!==this.sx2?(t.deltaX=(r-this.x2+s-this.sx2)/2,t.deltaY=(o-this.y2+a-this.sy2)/2):(t.deltaX=0,t.deltaY=0),this.twoFingerPressMove.dispatch(t,this.element),this.sx2=s,this.sy2=a}else{if(null!==this.x2){t.deltaX=r-this.x2,t.deltaY=o-this.y2;var l=Math.abs(this.x1-this.x2),h=Math.abs(this.y1-this.y2);(l>10||h>10)&&(this._preventTap=!0)}else t.deltaX=0,t.deltaY=0;this.pressMove.dispatch(t,this.element)}this.touchMove.dispatch(t,this.element),this._cancelLongTap(),this.x2=r,this.y2=o,n>1&&t.preventDefault()}},end:function(t){if(t.changedTouches){this._cancelLongTap();var e=this;t.touches.length<2&&(this.multipointEnd.dispatch(t,this.element),this.sx2=this.sy2=null),this.x2&&Math.abs(this.x1-this.x2)>30||this.y2&&Math.abs(this.y1-this.y2)>30?(t.direction=this._swipeDirection(this.x1,this.x2,this.y1,this.y2),this.swipeTimeout=setTimeout((function(){e.swipe.dispatch(t,e.element)}),0)):(this.tapTimeout=setTimeout((function(){e._preventTap||e.tap.dispatch(t,e.element),e.isDoubleTap&&(e.doubleTap.dispatch(t,e.element),e.isDoubleTap=!1)}),0),e.isDoubleTap||(e.singleTapTimeout=setTimeout((function(){e.singleTap.dispatch(t,e.element)}),250))),this.touchEnd.dispatch(t,this.element),this.preV.x=0,this.preV.y=0,this.zoom=1,this.pinchStartLen=null,this.x1=this.x2=this.y1=this.y2=null}},cancelAll:function(){this._preventTap=!0,clearTimeout(this.singleTapTimeout),clearTimeout(this.tapTimeout),clearTimeout(this.longTapTimeout),clearTimeout(this.swipeTimeout)},cancel:function(t){this.cancelAll(),this.touchCancel.dispatch(t,this.element)},_cancelLongTap:function(){clearTimeout(this.longTapTimeout)},_cancelSingleTap:function(){clearTimeout(this.singleTapTimeout)},_swipeDirection:function(t,e,n,r){return Math.abs(t-e)>=Math.abs(n-r)?t-e>0?"Left":"Right":n-r>0?"Up":"Down"},on:function(t,e){this[t]&&this[t].add(e)},off:function(t,e){this[t]&&this[t].del(e)},destroy:function(){return this.singleTapTimeout&&clearTimeout(this.singleTapTimeout),this.tapTimeout&&clearTimeout(this.tapTimeout),this.longTapTimeout&&clearTimeout(this.longTapTimeout),this.swipeTimeout&&clearTimeout(this.swipeTimeout),this.element.removeEventListener("touchstart",this.start),this.element.removeEventListener("touchmove",this.move),this.element.removeEventListener("touchend",this.end),this.element.removeEventListener("touchcancel",this.cancel),this.rotate.del(),this.touchStart.del(),this.multipointStart.del(),this.multipointEnd.del(),this.pinch.del(),this.swipe.del(),this.tap.del(),this.doubleTap.del(),this.longTap.del(),this.singleTap.del(),this.pressMove.del(),this.twoFingerPressMove.del(),this.touchMove.del(),this.touchEnd.del(),this.touchCancel.del(),this.preV=this.pinchStartLen=this.zoom=this.isDoubleTap=this.delta=this.last=this.now=this.tapTimeout=this.singleTapTimeout=this.longTapTimeout=this.swipeTimeout=this.x1=this.x2=this.y1=this.y2=this.preTapPosition=this.rotate=this.touchStart=this.multipointStart=this.multipointEnd=this.pinch=this.swipe=this.tap=this.doubleTap=this.longTap=this.singleTap=this.pressMove=this.touchMove=this.touchEnd=this.touchCancel=this.twoFingerPressMove=null,window.removeEventListener("scroll",this._cancelAllHandler),null}};var d={name:"Slider",model:{prop:"value",event:"change"},props:{value:{type:Number,default:0},width:{type:String,default:"auto"},height:{type:String,default:"300px"},touch:{type:Boolean,default:!0},animation:{type:String,default:"normal"},autoplay:{type:Boolean,default:!0},stopOnHover:{type:Boolean,default:!1},interval:{type:Number,default:3e3},speed:{type:Number,default:500},indicators:{type:[String,Boolean],default:"center"},controlBtn:{type:Boolean,default:!0},beforePrevious:{type:Function,default:function(){return!0}},beforeNext:{type:Function,default:function(){return!0}},prevBtnLabel:{type:String,default:"Previous slide"},nextBtnLabel:{type:String,default:"Next slide"}},data:function(){return{sliderItems:[],currentIndex:0,timer:0,af:null,isStopped:!1}},watch:{value:function(t){var e=t-this.currentIndex;!e||t<0||t>this.sliderItems.length-1||this.handleIndicator(e)}},created:function(){this.init=n(this.init,100),this.move=r(this.move,this.speed-200),this.$on("slider:init",this.init)},mounted:function(){this.init(),this.initTouchArea()},activated:function(){this.init(),this.initTouchArea()},beforeDestroy:function(){this.timer&&clearInterval(this.timer),this.af&&this.af.destroy()},deactivated:function(){this.timer&&clearInterval(this.timer),this.af&&this.af.destroy(),this.af=null},methods:{init:function(){this.sliderItems=this.$children.filter((function(t){return"SliderItem"===t.$options.name})),this.sliderItems[this.value]&&(this.currentIndex=this.value);var t=this.sliderItems[this.currentIndex];t&&(t.init(),this.auto())},initTouchArea:function(){var t=this;if(!this.af&&this.touch){var e=this.$refs.touchArea;this.af=new h(e,{swipe:function(e){"Left"===e.direction?t.next():t.prev()}})}},auto:function(){var t=this;this.autoplay&&!this.isStopped&&(this.timer&&clearInterval(this.timer),this.timer=setInterval((function(){t.move(1)}),this.interval))},move:function(t){if(t&&this.canMove()){var e=t>0,n=this.getNextIndex(t),r=this.sliderItems[this.currentIndex],i=this.sliderItems[n];r.hide(e),i.show(e),this.currentIndex=n,this.$emit("change",n)}},prev:function(){this.beforePrevious()&&this.handleControlBtn("previous")},next:function(){this.beforeNext()&&this.handleControlBtn("next")},handleIndicator:function(t){t&&this.canMove()&&(this.move(t),this.auto())},handleControlBtn:function(t){if(this.canMove()){var e="next"===t?1:-1,n=this.getNextIndex(e);this.$emit(t,{original:this.currentIndex,next:n}),this.move(e),this.auto()}},getNextIndex:function(t){var e=this.sliderItems.length;return this.sliderItems[this.currentIndex]||(this.currentIndex=e-1),(this.currentIndex+t+e)%e},canMove:function(){return this.sliderItems.length>1},handleMouseenter:function(){this.autoplay&&this.stopOnHover&&(this.isStopped=!0,this.timer&&clearInterval(this.timer))},handleMouseleave:function(){this.autoplay&&this.stopOnHover&&(this.isStopped=!1,this.auto())}}};function f(t,e,n,r,i,o,s,a,c,u){"boolean"!==typeof s&&(c=a,a=s,s=!1);var l,h="function"===typeof n?n.options:n;if(t&&t.render&&(h.render=t.render,h.staticRenderFns=t.staticRenderFns,h._compiled=!0,i&&(h.functional=!0)),r&&(h._scopeId=r),o?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(o)},h._ssrRegister=l):e&&(l=s?function(t){e.call(this,u(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),l)if(h.functional){var d=h.render;h.render=function(t,e){return l.call(e),d(t,e)}}else{var f=h.beforeCreate;h.beforeCreate=f?[].concat(f,l):[l]}return n}var p,m="undefined"!==typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function v(t){return function(t,e){return y(t,e)}}var g={};function y(t,e){var n=m?e.media||"default":t,r=g[n]||(g[n]={ids:new Set,styles:[]});if(!r.ids.has(t)){r.ids.add(t);var i=e.source;if(e.map&&(i+="\n/*# sourceURL="+e.map.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",e.media&&r.element.setAttribute("media",e.media),void 0===p&&(p=document.head||document.getElementsByTagName("head")[0]),p.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(i),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var o=r.ids.size-1,s=document.createTextNode(i),a=r.element.childNodes;a[o]&&r.element.removeChild(a[o]),a.length?r.element.insertBefore(s,a[o]):r.element.appendChild(s)}}}var _=d,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slider",style:{width:t.width,height:t.height},on:{mouseenter:t.handleMouseenter,mouseleave:t.handleMouseleave}},[t.sliderItems.length?t._e():t._t("loading",[t._m(0)]),t._v(" "),n("div",{ref:"touchArea",staticClass:"slider-items"},[t._t("default")],2),t._v(" "),t.indicators?n("div",{class:"slider-indicators slider-indicators-"+t.indicators,on:{click:function(t){t.stopPropagation()}}},t._l(t.sliderItems.length,(function(e){return n("span",{key:e,staticClass:"slider-indicator-icon",class:{"slider-indicator-active":t.currentIndex===e-1},on:{click:function(n){return t.handleIndicator(e-t.currentIndex-1)}}})})),0):t._e(),t._v(" "),t.controlBtn?[n("button",{staticClass:"slider-btn slider-btn-left",attrs:{type:"button","aria-label":t.prevBtnLabel},on:{click:function(e){return e.stopPropagation(),t.prev(e)}}},[n("i",{staticClass:"slider-icon slider-icon-left",attrs:{"aria-hidden":"true"}})]),t._v(" "),n("button",{staticClass:"slider-btn slider-btn-right",attrs:{type:"button","aria-label":t.nextBtnLabel},on:{click:function(e){return e.stopPropagation(),t.next(e)}}},[n("i",{staticClass:"slider-icon slider-icon-right",attrs:{"aria-hidden":"true"}})])]:t._e()],2)},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slider-loading"},[n("div",{staticClass:"ball-pulse"},[n("div"),t._v(" "),n("div"),t._v(" "),n("div")])])}],C=function(t){t&&t("data-v-f56384ae_0",{source:".slider[data-v-f56384ae]{position:relative;overflow:hidden}.slider-items[data-v-f56384ae]{width:100%;height:100%}.slider-btn[data-v-f56384ae]{position:absolute;top:0;z-index:999;height:100%;width:50px;border:none;background:rgba(0,0,0,.1);outline:0;transition:background .3s;cursor:pointer}.slider-btn:hover .slider-icon[data-v-f56384ae]{border-color:#fff}.slider-btn-left[data-v-f56384ae]{left:0;background:linear-gradient(90deg,rgba(0,0,0,.1),rgba(0,0,0,0))}.slider-btn-right[data-v-f56384ae]{right:0;background:linear-gradient(-90deg,rgba(0,0,0,.1),rgba(0,0,0,0))}.slider-icon[data-v-f56384ae]{display:inline-block;width:15px;height:15px;border-left:2px solid rgba(255,255,255,.6);border-bottom:2px solid rgba(255,255,255,.6);transition:border .2s}.slider-icon-left[data-v-f56384ae]{transform:rotate(45deg)}.slider-icon-right[data-v-f56384ae]{transform:rotate(-135deg)}.slider-indicators[data-v-f56384ae]{position:absolute;bottom:20px;z-index:999}.slider-indicators-center[data-v-f56384ae]{left:50%;transform:translateX(-50%)}.slider-indicators-left[data-v-f56384ae]{left:6%}.slider-indicators-right[data-v-f56384ae]{right:6%}.slider-indicator-icon[data-v-f56384ae]{display:inline-block;width:10px;height:10px;margin:0 .1rem;cursor:pointer;border-radius:50%;background-color:rgba(0,0,0,.2)}.slider-indicator-active[data-v-f56384ae]{background-color:rgba(255,255,255,.2)}.slider-loading[data-v-f56384ae]{position:absolute;top:0;left:0;z-index:99;width:100%;height:100%;background:rgba(0,0,0,.1);display:flex;justify-content:center;align-items:center}.ball-pulse>div[data-v-f56384ae]:nth-child(1){animation:scale-data-v-f56384ae .75s -.24s infinite cubic-bezier(.2,.68,.18,1.08)}.ball-pulse>div[data-v-f56384ae]:nth-child(2){animation:scale-data-v-f56384ae .75s -.12s infinite cubic-bezier(.2,.68,.18,1.08)}.ball-pulse>div[data-v-f56384ae]:nth-child(3){animation:scale-data-v-f56384ae .75s 0s infinite cubic-bezier(.2,.68,.18,1.08)}.ball-pulse>div[data-v-f56384ae]{background-color:#fff;width:15px;height:15px;border-radius:100%;margin:2px;animation-fill-mode:both;display:inline-block}@-moz-keyframes scale-data-v-f56384ae{0%{transform:scale(1);opacity:1}45%{transform:scale(.1);opacity:.7}80%{transform:scale(1);opacity:1}}@-webkit-keyframes scale-data-v-f56384ae{0%{transform:scale(1);opacity:1}45%{transform:scale(.1);opacity:.7}80%{transform:scale(1);opacity:1}}@-o-keyframes scale-data-v-f56384ae{0%{transform:scale(1);opacity:1}45%{transform:scale(.1);opacity:.7}80%{transform:scale(1);opacity:1}}@keyframes scale-data-v-f56384ae{0%{transform:scale(1);opacity:1}45%{transform:scale(.1);opacity:.7}80%{transform:scale(1);opacity:1}}",map:void 0,media:void 0})},I="data-v-f56384ae",T=void 0,k=!1,O=f({render:b,staticRenderFns:w},C,_,I,k,T,!1,v,void 0,void 0),E={name:"SliderItem",data:function(){return{display:!1,isInit:!1,initAnimation:!1,direction:!1,animation:"normal",speed:500,zIndex:99}},created:function(){this.$parent.$emit("slider:init"),this.speed=this.$parent.speed||500,this.animation=this.$parent.animation||"normal"},destroyed:function(){this.$parent.$emit("slider:init")},methods:{init:function(){var t=this;this.isInit||(this.isInit=!0,this.display=!0,this.initAnimation=!0,this.$nextTick((function(){return t.initAnimation=!1})))},show:function(t){var e=this;this.zIndex=99,this.direction=t,this.$nextTick((function(){return e.display=!0}))},hide:function(t){var e=this;this.zIndex=98,this.direction=t,this.$nextTick((function(){return e.display=!1}))}}},x=E,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.initAnimation?"":t.animation+"-"+(t.direction?"left":"right")}},[n("div",t._g(t._b({directives:[{name:"show",rawName:"v-show",value:t.display,expression:"display"}],staticClass:"slider-item",style:{zIndex:t.zIndex,transition:"all "+t.speed/1e3+"s"}},"div",t.$attrs,!1),t.$listeners),[t._t("default")],2)])},P=[],N=function(t){t&&t("data-v-31f46842_0",{source:".slider-item[data-v-31f46842]{position:absolute;top:0;left:0;width:100%;height:100%}.normal-left-leave-to[data-v-31f46842],.normal-right-enter[data-v-31f46842]{transform:translateX(-100%)}.normal-left-enter[data-v-31f46842],.normal-right-leave-to[data-v-31f46842]{transform:translateX(100%)}.fade-left-enter[data-v-31f46842],.fade-left-leave-to[data-v-31f46842],.fade-right-enter[data-v-31f46842],.fade-right-leave-to[data-v-31f46842]{opacity:0}.fade-left-leave-to[data-v-31f46842],.fade-right-enter[data-v-31f46842]{transform:translateX(-10px)}.fade-left-enter[data-v-31f46842],.fade-right-leave-to[data-v-31f46842]{transform:translateX(10px)}",map:void 0,media:void 0})},A="data-v-31f46842",R=void 0,j=!1,L=f({render:S,staticRenderFns:P},N,x,A,j,R,!1,v,void 0,void 0),M={version:"5.3.4",install:function(t){t.component(O.name,O),t.component(L.name,L)}},D=null;"undefined"!==typeof window?D=window.Vue:"undefined"!==typeof t&&(D=t.Vue),D&&D.use(M),e["a"]=M}).call(this,n("c8ba"))},cdf9:function(t,e,n){var r=n("825a"),i=n("861d"),o=n("f069");t.exports=function(t,e){if(r(t),i(e)&&e.constructor===t)return e;var n=o.f(t),s=n.resolve;return s(e),n.promise}},ce4e:function(t,e,n){var r=n("da84"),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},d066:function(t,e,n){var r=n("da84"),i=n("1626"),o=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?o(r[t]):r[t]&&r[t][e]}},d1e7:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);e.f=o?function(t){var e=i(this,t);return!!e&&e.enumerable}:r},d2bb:function(t,e,n){var r=n("e330"),i=n("825a"),o=n("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(s){}return function(n,r){return i(n),o(r),e?t(n,r):n.__proto__=r,n}}():void 0)},d3b7:function(t,e,n){var r=n("00ee"),i=n("6eeb"),o=n("b041");r||i(Object.prototype,"toString",o,{unsafe:!0})},d44e:function(t,e,n){var r=n("9bf2").f,i=n("1a2d"),o=n("b622"),s=o("toStringTag");t.exports=function(t,e,n){t&&!n&&(t=t.prototype),t&&!i(t,s)&&r(t,s,{configurable:!0,value:e})}},d4c3:function(t,e,n){var r=n("342f"),i=n("da84");t.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},d4ec:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("d9e2");function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},d9b5:function(t,e,n){var r=n("da84"),i=n("d066"),o=n("1626"),s=n("3a9b"),a=n("fdbf"),c=r.Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=i("Symbol");return o(e)&&s(e.prototype,c(t))}},d9e2:function(t,e,n){var r=n("23e7"),i=n("da84"),o=n("2ba4"),s=n("e5cb"),a="WebAssembly",c=i[a],u=7!==Error("e",{cause:7}).cause,l=function(t,e){var n={};n[t]=s(t,e,u),r({global:!0,forced:u},n)},h=function(t,e){if(c&&c[t]){var n={};n[t]=s(a+"."+t,e,u),r({target:a,stat:!0,forced:u},n)}};l("Error",(function(t){return function(e){return o(t,this,arguments)}})),l("EvalError",(function(t){return function(e){return o(t,this,arguments)}})),l("RangeError",(function(t){return function(e){return o(t,this,arguments)}})),l("ReferenceError",(function(t){return function(e){return o(t,this,arguments)}})),l("SyntaxError",(function(t){return function(e){return o(t,this,arguments)}})),l("TypeError",(function(t){return function(e){return o(t,this,arguments)}})),l("URIError",(function(t){return function(e){return o(t,this,arguments)}})),h("CompileError",(function(t){return function(e){return o(t,this,arguments)}})),h("LinkError",(function(t){return function(e){return o(t,this,arguments)}})),h("RuntimeError",(function(t){return function(e){return o(t,this,arguments)}}))},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dbb4:function(t,e,n){var r=n("23e7"),i=n("83ab"),o=n("56ef"),s=n("fc6a"),a=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,n,r=s(t),i=a.f,u=o(r),l={},h=0;while(u.length>h)n=i(r,e=u[h++]),void 0!==n&&c(l,e,n);return l}})},dc4a:function(t,e,n){var r=n("59ed");t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},df75:function(t,e,n){var r=n("ca84"),i=n("7839");t.exports=Object.keys||function(t){return r(t,i)}},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var i=t[r];"."===i?t.splice(r,1):".."===i?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,i=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!i){n=e+1;break}}else-1===r&&(i=!1,r=e+1);return-1===r?"":t.slice(n,r)}function i(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var s=o>=0?arguments[o]:t.cwd();if("string"!==typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(e=s+"/"+e,r="/"===s.charAt(0))}return e=n(i(e.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),s="/"===o(t,-1);return t=n(i(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&s&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var i=r(t.split("/")),o=r(n.split("/")),s=Math.min(i.length,o.length),a=s,c=0;c<s;c++)if(i[c]!==o[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return u=u.concat(o.slice(a)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,i=!0,o=t.length-1;o>=1;--o)if(e=t.charCodeAt(o),47===e){if(!i){r=o;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=r(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,i=!0,o=0,s=t.length-1;s>=0;--s){var a=t.charCodeAt(s);if(47!==a)-1===r&&(i=!1,r=s+1),46===a?-1===e?e=s:1!==o&&(o=1):-1!==e&&(o=-1);else if(!i){n=s+1;break}}return-1===e||-1===r||0===o||1===o&&e===r-1&&e===n+1?"":t.slice(e,r)};var o="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e163:function(t,e,n){var r=n("da84"),i=n("1a2d"),o=n("1626"),s=n("7b0b"),a=n("f772"),c=n("e177"),u=a("IE_PROTO"),l=r.Object,h=l.prototype;t.exports=c?l.getPrototypeOf:function(t){var e=s(t);if(i(e,u))return e[u];var n=e.constructor;return o(n)&&e instanceof n?n.prototype:e instanceof l?h:null}},e177:function(t,e,n){var r=n("d039");t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},e260:function(t,e,n){"use strict";var r=n("fc6a"),i=n("44d2"),o=n("3f8c"),s=n("69f3"),a=n("9bf2").f,c=n("7dd0"),u=n("c430"),l=n("83ab"),h="Array Iterator",d=s.set,f=s.getterFor(h);t.exports=c(Array,"Array",(function(t,e){d(this,{type:h,target:r(t),index:0,kind:e})}),(function(){var t=f(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values");var p=o.Arguments=o.Array;if(i("keys"),i("values"),i("entries"),!u&&l&&"values"!==p.name)try{a(p,"name",{value:"values"})}catch(m){}},e2cc:function(t,e,n){var r=n("6eeb");t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},e330:function(t,e){var n=Function.prototype,r=n.bind,i=n.call,o=r&&r.bind(i,i);t.exports=r?function(t){return t&&o(t)}:function(t){return t&&function(){return i.apply(t,arguments)}}},e391:function(t,e,n){var r=n("577e");t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},e439:function(t,e,n){var r=n("23e7"),i=n("d039"),o=n("fc6a"),s=n("06cf").f,a=n("83ab"),c=i((function(){s(1)})),u=!a||c;r({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(t,e){return s(o(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r},e5cb:function(t,e,n){"use strict";var r=n("d066"),i=n("1a2d"),o=n("9112"),s=n("3a9b"),a=n("d2bb"),c=n("e893"),u=n("7156"),l=n("e391"),h=n("ab36"),d=n("c770"),f=n("b980"),p=n("c430");t.exports=function(t,e,n,m){var v=m?2:1,g=t.split("."),y=g[g.length-1],_=r.apply(null,g);if(_){var b=_.prototype;if(!p&&i(b,"cause")&&delete b.cause,!n)return _;var w=r("Error"),C=e((function(t,e){var n=l(m?e:t,void 0),r=m?new _(t):new _;return void 0!==n&&o(r,"message",n),f&&o(r,"stack",d(r.stack,2)),this&&s(b,this)&&u(r,this,C),arguments.length>v&&h(r,arguments[v]),r}));if(C.prototype=b,"Error"!==y&&(a?a(C,w):c(C,w,{name:!0})),c(C,_),!p)try{b.name!==y&&o(b,"name",y),b.constructor=C}catch(I){}return C}}},e667:function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(e){return{error:!0,value:e}}}},e691:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?o[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}function l(t){r.forEach(e=>{e.setLogLevel(t)})}function h(t,e){for(const n of r){let r=null;e&&e.level&&(r=o[e.level]),n.userLogHandler=null===t?null:(e,n,...o)=>{const s=o.map(t=>{if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}}).filter(t=>t).join(" ");n>=(null!==r&&void 0!==r?r:e.logLevel)&&t({level:i[n].toLowerCase(),message:s,args:o,type:e.name})}}}},e6cf:function(t,e,n){"use strict";var r,i,o,s,a=n("23e7"),c=n("c430"),u=n("da84"),l=n("d066"),h=n("c65b"),d=n("fea9"),f=n("6eeb"),p=n("e2cc"),m=n("d2bb"),v=n("d44e"),g=n("2626"),y=n("59ed"),_=n("1626"),b=n("861d"),w=n("19aa"),C=n("8925"),I=n("2266"),T=n("1c7e"),k=n("4840"),O=n("2cf4").set,E=n("b575"),x=n("cdf9"),S=n("44de"),P=n("f069"),N=n("e667"),A=n("01b4"),R=n("69f3"),j=n("94ca"),L=n("b622"),M=n("6069"),D=n("605d"),F=n("2d00"),$=L("species"),U="Promise",z=R.getterFor(U),q=R.set,V=R.getterFor(U),H=d&&d.prototype,W=d,B=H,G=u.TypeError,K=u.document,Y=u.process,X=P.f,J=X,Q=!!(K&&K.createEvent&&u.dispatchEvent),Z=_(u.PromiseRejectionEvent),tt="unhandledrejection",et="rejectionhandled",nt=0,rt=1,it=2,ot=1,st=2,at=!1,ct=j(U,(function(){var t=C(W),e=t!==String(W);if(!e&&66===F)return!0;if(c&&!B["finally"])return!0;if(F>=51&&/native code/.test(t))return!1;var n=new W((function(t){t(1)})),r=function(t){t((function(){}),(function(){}))},i=n.constructor={};return i[$]=r,at=n.then((function(){}))instanceof r,!at||!e&&M&&!Z})),ut=ct||!T((function(t){W.all(t)["catch"]((function(){}))})),lt=function(t){var e;return!(!b(t)||!_(e=t.then))&&e},ht=function(t,e){var n,r,i,o=e.value,s=e.state==rt,a=s?t.ok:t.fail,c=t.resolve,u=t.reject,l=t.domain;try{a?(s||(e.rejection===st&&vt(e),e.rejection=ot),!0===a?n=o:(l&&l.enter(),n=a(o),l&&(l.exit(),i=!0)),n===t.promise?u(G("Promise-chain cycle")):(r=lt(n))?h(r,n,c,u):c(n)):u(o)}catch(d){l&&!i&&l.exit(),u(d)}},dt=function(t,e){t.notified||(t.notified=!0,E((function(){var n,r=t.reactions;while(n=r.get())ht(n,t);t.notified=!1,e&&!t.rejection&&pt(t)})))},ft=function(t,e,n){var r,i;Q?(r=K.createEvent("Event"),r.promise=e,r.reason=n,r.initEvent(t,!1,!0),u.dispatchEvent(r)):r={promise:e,reason:n},!Z&&(i=u["on"+t])?i(r):t===tt&&S("Unhandled promise rejection",n)},pt=function(t){h(O,u,(function(){var e,n=t.facade,r=t.value,i=mt(t);if(i&&(e=N((function(){D?Y.emit("unhandledRejection",r,n):ft(tt,n,r)})),t.rejection=D||mt(t)?st:ot,e.error))throw e.value}))},mt=function(t){return t.rejection!==ot&&!t.parent},vt=function(t){h(O,u,(function(){var e=t.facade;D?Y.emit("rejectionHandled",e):ft(et,e,t.value)}))},gt=function(t,e,n){return function(r){t(e,r,n)}},yt=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=it,dt(t,!0))},_t=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw G("Promise can't be resolved itself");var r=lt(e);r?E((function(){var n={done:!1};try{h(r,e,gt(_t,n,t),gt(yt,n,t))}catch(i){yt(n,i,t)}})):(t.value=e,t.state=rt,dt(t,!1))}catch(i){yt({done:!1},i,t)}}};if(ct&&(W=function(t){w(this,B),y(t),h(r,this);var e=z(this);try{t(gt(_t,e),gt(yt,e))}catch(n){yt(e,n)}},B=W.prototype,r=function(t){q(this,{type:U,done:!1,notified:!1,parent:!1,reactions:new A,rejection:!1,state:nt,value:void 0})},r.prototype=p(B,{then:function(t,e){var n=V(this),r=X(k(this,W));return n.parent=!0,r.ok=!_(t)||t,r.fail=_(e)&&e,r.domain=D?Y.domain:void 0,n.state==nt?n.reactions.add(r):E((function(){ht(r,n)})),r.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r,e=z(t);this.promise=t,this.resolve=gt(_t,e),this.reject=gt(yt,e)},P.f=X=function(t){return t===W||t===o?new i(t):J(t)},!c&&_(d)&&H!==Object.prototype)){s=H.then,at||(f(H,"then",(function(t,e){var n=this;return new W((function(t,e){h(s,n,t,e)})).then(t,e)}),{unsafe:!0}),f(H,"catch",B["catch"],{unsafe:!0}));try{delete H.constructor}catch(bt){}m&&m(H,B)}a({global:!0,wrap:!0,forced:ct},{Promise:W}),v(W,U,!1,!0),g(U),o=l(U),a({target:U,stat:!0,forced:ct},{reject:function(t){var e=X(this);return h(e.reject,void 0,t),e.promise}}),a({target:U,stat:!0,forced:c||ct},{resolve:function(t){return x(c&&this===o?W:this,t)}}),a({target:U,stat:!0,forced:ut},{all:function(t){var e=this,n=X(e),r=n.resolve,i=n.reject,o=N((function(){var n=y(e.resolve),o=[],s=0,a=1;I(t,(function(t){var c=s++,u=!1;a++,h(n,e,t).then((function(t){u||(u=!0,o[c]=t,--a||r(o))}),i)})),--a||r(o)}));return o.error&&i(o.value),n.promise},race:function(t){var e=this,n=X(e),r=n.reject,i=N((function(){var i=y(e.resolve);I(t,(function(t){h(i,e,t).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}})},e893:function(t,e,n){var r=n("1a2d"),i=n("56ef"),o=n("06cf"),s=n("9bf2");t.exports=function(t,e,n){for(var a=i(e),c=s.f,u=o.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},e95a:function(t,e,n){var r=n("b622"),i=n("3f8c"),o=r("iterator"),s=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||s[o]===t)}},ea7b:function(t,e,n){"use strict";n.d(e,"a",(function(){return ae})),n.d(e,"b",(function(){return ur})),n.d(e,"c",(function(){return ce})),n.d(e,"d",(function(){return he})),n.d(e,"e",(function(){return le}));var r=n("1fd5"),i=n("589b");function o(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create;var s=n("e691"),a=n("22e5");function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r["b"]("auth","Firebase",c()),h=new s["b"]("@firebase/auth");function d(t,...e){h.logLevel<=s["a"].ERROR&&h.error(`Auth (${i["a"]}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(t,...e){throw v(t,...e)}function p(t,...e){return v(t,...e)}function m(t,e,n){const i=Object.assign(Object.assign({},u()),{[e]:n}),o=new r["b"]("auth","Firebase",i);return o.create(e,{appName:t.name})}function v(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return l.create(t,...e)}function g(t,e,...n){if(!t)throw v(e,...n)}function y(t){const e="INTERNAL ASSERTION FAILED: "+t;throw d(e),new Error(e)}function _(t,e){t||y(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=new Map;function w(t){_(t instanceof Function,"Expected a class definition");let e=b.get(t);return e?(_(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,b.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(t,e){const n=Object(i["b"])(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),i=n.getOptions();if(Object(r["n"])(i,null!==e&&void 0!==e?e:{}))return t;f(t,"already-initialized")}const o=n.initialize({options:e});return o}function I(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(w);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function k(){return"http:"===O()||"https:"===O()}function O(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(k()||Object(r["t"])()||"connection"in navigator))||navigator.onLine}function x(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t,e){this.shortDelay=t,this.longDelay=e,_(e>t,"Short delay should be less than long delay!"),this.isMobile=Object(r["w"])()||Object(r["y"])()}get(){return E()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t,e){_(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},R=new S(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function L(t,e,n,i,o={}){return M(t,o,async()=>{let o={},s={};i&&("GET"===e?s=i:o={body:JSON.stringify(i)});const a=Object(r["C"])(Object.assign({key:t.config.apiKey},s)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),N.fetch()(F(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},o))})}async function M(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},A),e);try{const e=new $(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw U(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const e=r.ok?o.errorMessage:o.error.message,[n,s]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw U(t,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw U(t,"email-already-in-use",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw m(t,a,s);f(t,a)}}catch(o){if(o instanceof r["c"])throw o;f(t,"network-request-failed")}}async function D(t,e,n,r,i={}){const o=await L(t,e,n,r,i);return"mfaPendingCredential"in o&&f(t,"multi-factor-auth-required",{_serverResponse:o}),o}function F(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?P(t.config,i):`${t.config.apiScheme}://${i}`}class ${constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((t,e)=>{this.timer=setTimeout(()=>e(p(this.auth,"timeout")),R.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function U(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(t,e,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(t,e){return L(t,"POST","/v1/accounts:delete",e)}async function q(t,e){return L(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(t,e=!1){const n=Object(r["q"])(t),i=await n.getIdToken(e),o=B(i);g(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:i,authTime:V(W(o.auth_time)),issuedAtTime:V(W(o.iat)),expirationTime:V(W(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function W(t){return 1e3*Number(t)}function B(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return d("JWT malformed, contained fewer than 3 sections"),null;try{const t=Object(r["h"])(n);return t?JSON.parse(t):(d("Failed to decode base64 JWT payload"),null)}catch(o){return d("Caught error parsing JWT payload as JSON",o),null}}function G(t){const e=B(t);return g(e,"internal-error"),g("undefined"!==typeof e.exp,"internal-error"),g("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof r["c"]&&Y(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Y({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=V(this.lastLoginAt),this.creationTime=V(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(t){var e;const n=t.auth,r=await t.getIdToken(),i=await K(t,q(n,{idToken:r}));g(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=(null===(e=o.providerUserInfo)||void 0===e?void 0:e.length)?et(o.providerUserInfo):[],a=tt(t.providerData,s),c=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new J(o.createdAt,o.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function Z(t){const e=Object(r["q"])(t);await Q(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tt(t,e){const n=t.filter(t=>!e.some(e=>e.providerId===t.providerId));return[...n,...e]}function et(t){return t.map(t=>{var{providerId:e}=t,n=o(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(t,e){const n=await M(t,{},async()=>{const n=Object(r["C"])({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=F(t,i,"/v1/token","key="+o),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",N.fetch()(s,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){g(t.idToken,"internal-error"),g("undefined"!==typeof t.idToken,"internal-error"),g("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):G(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return g(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await nt(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,o=new rt;return n&&(g("string"===typeof n,"internal-error",{appName:t}),o.refreshToken=n),r&&(g("string"===typeof r,"internal-error",{appName:t}),o.accessToken=r),i&&(g("number"===typeof i,"internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new rt,this.toJSON())}_performRefresh(){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t,e){g("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class ot{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=o(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new X(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new J(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await K(this,this.stsTokenManager.getToken(this.auth,t));return g(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return H(this,t)}reload(){return Z(this)}_assign(t){this!==t&&(g(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(t=>Object.assign({},t)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new ot(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await K(this,z(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,o,s,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,d=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,f=null!==(o=e.photoURL)&&void 0!==o?o:void 0,p=null!==(s=e.tenantId)&&void 0!==s?s:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,v=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:_,emailVerified:b,isAnonymous:w,providerData:C,stsTokenManager:I}=e;g(_&&I,t,"internal-error");const T=rt.fromJSON(this.name,I);g("string"===typeof _,t,"internal-error"),it(l,t.name),it(h,t.name),g("boolean"===typeof b,t,"internal-error"),g("boolean"===typeof w,t,"internal-error"),it(d,t.name),it(f,t.name),it(p,t.name),it(m,t.name),it(v,t.name),it(y,t.name);const k=new ot({uid:_,auth:t,email:h,emailVerified:b,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:v,lastLoginAt:y});return C&&Array.isArray(C)&&(k.providerData=C.map(t=>Object.assign({},t))),m&&(k._redirectEventId=m),k}static async _fromIdTokenResponse(t,e,n=!1){const r=new rt;r.updateFromServerResponse(e);const i=new ot({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await Q(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}st.type="NONE";const at=st;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t,e,n){return`firebase:${t}:${e}:${n}`}class ut{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ct(this.userKey,r.apiKey,i),this.fullPersistenceKey=ct("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ot._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new ut(w(at),t,n);const r=(await Promise.all(e.map(async t=>{if(await t._isAvailable())return t}))).filter(t=>t);let i=r[0]||w(at);const o=ct(n,t.config.apiKey,t.name);let s=null;for(const u of e)try{const e=await u._get(o);if(e){const n=ot._fromJSON(t,e);u!==i&&(s=n),i=u;break}}catch(c){}const a=r.filter(t=>t._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(e.map(async t=>{if(t!==i)try{await t._remove(o)}catch(c){}})),new ut(i,t,n)):new ut(i,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ht(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vt(e))return"Blackberry";if(gt(e))return"Webos";if(dt(e))return"Safari";if((e.includes("chrome/")||ft(e))&&!e.includes("edge/"))return"Chrome";if(mt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ht(t=Object(r["r"])()){return/firefox\//i.test(t)}function dt(t=Object(r["r"])()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ft(t=Object(r["r"])()){return/crios\//i.test(t)}function pt(t=Object(r["r"])()){return/iemobile/i.test(t)}function mt(t=Object(r["r"])()){return/android/i.test(t)}function vt(t=Object(r["r"])()){return/blackberry/i.test(t)}function gt(t=Object(r["r"])()){return/webos/i.test(t)}function yt(t=Object(r["r"])()){return/iphone|ipad|ipod/i.test(t)}function _t(t=Object(r["r"])()){var e;return yt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function bt(){return Object(r["v"])()&&10===document.documentMode}function wt(t=Object(r["r"])()){return yt(t)||mt(t)||gt(t)||vt(t)||/windows phone/i.test(t)||pt(t)}function Ct(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t,e=[]){let n;switch(t){case"Browser":n=lt(Object(r["r"])());break;case"Worker":n=`${lt(Object(r["r"])())}-${t}`;break;default:n=t}const o=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${i["a"]}/${o}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t,e){this.app=t,this.config=e,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ot(this),this.idTokenSubscription=new Ot(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=e.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=w(e)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ut.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t):void 0}async initializeCurrentUser(t){var e;let n=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(t);r&&r!==i||!(null===o||void 0===o?void 0:o.user)||(n=o.user)}return n?n._redirectEventId?(g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Q(t)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=x()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Object(r["q"])(t):null;return e&&g(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&g(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(w(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new r["b"]("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&w(t)||this._popupRedirectResolver;g(e,this,"argument-error"),this.redirectPersistenceManager=await ut.create(this,[w(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e),o=this._isInitialized?Promise.resolve():this._initializationPromise;return g(o,this,"internal-error"),o.then(()=>i(this.currentUser)),"function"===typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=It(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId),t}}function kt(t){return Object(r["q"])(t)}class Ot{constructor(t){this.auth=t,this.observer=null,this.addObserver=Object(r["l"])(t=>this.observer=t)}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Et{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return y("not implemented")}_getIdTokenResponse(t){return y("not implemented")}_linkToIdToken(t,e){return y("not implemented")}_getReauthenticationResolver(t){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xt(t,e){return L(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function St(t,e){return D(t,"POST","/v1/accounts:signInWithPassword",j(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Pt(t,e){return D(t,"POST","/v1/accounts:signInWithEmailLink",j(t,e))}async function Nt(t,e){return D(t,"POST","/v1/accounts:signInWithEmailLink",j(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends Et{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new At(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new At(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return St(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Pt(t,{email:this._email,oobCode:this._password});default:f(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return xt(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Nt(t,{idToken:e,email:this._email,oobCode:this._password});default:f(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rt(t,e){return D(t,"POST","/v1/accounts:signInWithIdp",j(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt="http://localhost";class Lt extends Et{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Lt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):f("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=o(e,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Lt(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(t){const e=this.buildRequest();return Rt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Rt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Rt(t,e)}buildRequest(){const t={requestUri:jt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=Object(r["C"])(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mt(t,e){return L(t,"POST","/v1/accounts:sendVerificationCode",j(t,e))}async function Dt(t,e){return D(t,"POST","/v1/accounts:signInWithPhoneNumber",j(t,e))}async function Ft(t,e){const n=await D(t,"POST","/v1/accounts:signInWithPhoneNumber",j(t,e));if(n.temporaryProof)throw U(t,"account-exists-with-different-credential",n);return n}const $t={["USER_NOT_FOUND"]:"user-not-found"};async function Ut(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return D(t,"POST","/v1/accounts:signInWithPhoneNumber",j(t,n),$t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends Et{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new zt({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new zt({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return Dt(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return Ft(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return Ut(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new zt({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Vt(t){const e=Object(r["D"])(Object(r["p"])(t))["link"],n=e?Object(r["D"])(Object(r["p"])(e))["deep_link_id"]:null,i=Object(r["D"])(Object(r["p"])(t))["deep_link_id"],o=i?Object(r["D"])(Object(r["p"])(i))["link"]:null;return o||i||n||e||t}class Ht{constructor(t){var e,n,i,o,s,a;const c=Object(r["D"])(Object(r["p"])(t)),u=null!==(e=c["apiKey"])&&void 0!==e?e:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=qt(null!==(i=c["mode"])&&void 0!==i?i:null);g(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=Vt(t);try{return new Ht(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wt{constructor(){this.providerId=Wt.PROVIDER_ID}static credential(t,e){return At._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=Ht.parseLink(e);return g(n,"argument-error"),At._fromEmailAndCode(t,n.code,n.tenantId)}}Wt.PROVIDER_ID="password",Wt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Wt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bt{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends Bt{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kt extends Gt{constructor(){super("facebook.com")}static credential(t){return Lt._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Kt.credentialFromTaggedObject(t)}static credentialFromError(t){return Kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Kt.credential(t.oauthAccessToken)}catch(e){return null}}}Kt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Kt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yt extends Gt{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Lt._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Yt.credentialFromTaggedObject(t)}static credentialFromError(t){return Yt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Yt.credential(e,n)}catch(r){return null}}}Yt.GOOGLE_SIGN_IN_METHOD="google.com",Yt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xt extends Gt{constructor(){super("github.com")}static credential(t){return Lt._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Xt.credentialFromTaggedObject(t)}static credentialFromError(t){return Xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Xt.credential(t.oauthAccessToken)}catch(e){return null}}}Xt.GITHUB_SIGN_IN_METHOD="github.com",Xt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jt extends Gt{constructor(){super("twitter.com")}static credential(t,e){return Lt._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Jt.credentialFromTaggedObject(t)}static credentialFromError(t){return Jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Jt.credential(e,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Qt(t,e){return D(t,"POST","/v1/accounts:signUp",j(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jt.TWITTER_SIGN_IN_METHOD="twitter.com",Jt.PROVIDER_ID="twitter.com";class Zt{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await ot._fromIdTokenResponse(t,n,r),o=te(n),s=new Zt({user:i,providerId:o,_tokenResponse:n,operationType:e});return s}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=te(n);return new Zt({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function te(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ee extends r["c"]{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,ee.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new ee(t,e,n,r)}}function ne(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw ee._fromErrorAndOperation(t,n,e,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function re(t,e,n=!1){const r=await K(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Zt._forOperation(t,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ie(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const o=await K(t,ne(r,i,e,t),n);g(o.idToken,r,"internal-error");const s=B(o.idToken);g(s,r,"internal-error");const{sub:a}=s;return g(t.uid===a,r,"user-mismatch"),Zt._forOperation(t,i,o)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&f(r,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oe(t,e,n=!1){const r="signIn",i=await ne(t,r,e),o=await Zt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function se(t,e){return oe(kt(t),e)}async function ae(t,e,n){const r=kt(t),i=await Qt(r,{returnSecureToken:!0,email:e,password:n}),o=await Zt._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function ce(t,e,n){return se(Object(r["q"])(t),Wt.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ue(t,e){return L(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function le(t,{displayName:e,photoURL:n}){if(void 0===e&&void 0===n)return;const i=Object(r["q"])(t),o=await i.getIdToken(),s={idToken:o,displayName:e,photoUrl:n,returnSecureToken:!0},a=await K(i,ue(i.auth,s));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const c=i.providerData.find(({providerId:t})=>"password"===t);c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function he(t){return Object(r["q"])(t).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function de(t,e){return L(t,"POST","/v2/accounts/mfaEnrollment:start",j(t,e))}function fe(t,e){return L(t,"POST","/v2/accounts/mfaEnrollment:finalize",j(t,e))}new WeakMap;const pe="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(pe,"1"),this.storage.removeItem(pe),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(){const t=Object(r["r"])();return dt(t)||yt(t)}const ge=1e3,ye=10;class _e extends me{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ve()&&Ct(),this.fallbackToPolling=wt(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys((t,e,n)=>{this.notifyListeners(t,n)});const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);bt()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,ye):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)})},ge)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}_e.type="LOCAL";const be=_e;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we extends me{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}we.type="SESSION";const Ce=we;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(t){return Promise.all(t.map(async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(e=>e.isListeningto(t));if(e)return e;const n=new Te(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map(async t=>t(e.origin,i)),a=await Ie(s);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ke(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Te.receivers=[];class Oe{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((s,a)=>{const c=ke("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),s(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(){return window}function xe(t){Ee().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(){return"undefined"!==typeof Ee()["WorkerGlobalScope"]&&"function"===typeof Ee()["importScripts"]}async function Pe(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function Ne(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function Ae(){return Se()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re="firebaseLocalStorageDb",je=1,Le="firebaseLocalStorage",Me="fbase_key";class De{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Fe(t,e){return t.transaction([Le],e?"readwrite":"readonly").objectStore(Le)}function $e(){const t=indexedDB.deleteDatabase(Re);return new De(t).toPromise()}function Ue(){const t=indexedDB.open(Re,je);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const e=t.result;try{e.createObjectStore(Le,{keyPath:Me})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(Le)?e(n):(n.close(),await $e(),e(await Ue()))})})}async function ze(t,e,n){const r=Fe(t,!0).put({[Me]:e,value:n});return new De(r).toPromise()}async function qe(t,e){const n=Fe(t,!1).get(e),r=await new De(n).toPromise();return void 0===r?null:r.value}function Ve(t,e){const n=Fe(t,!0).delete(e);return new De(n).toPromise()}const He=800,We=3;class Be{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Ue()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>We)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Se()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Te._getInstance(Ae()),this.receiver._subscribe("keyChanged",async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}}),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await Pe(),!this.activeServiceWorker)return;this.sender=new Oe(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&Ne()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ue();return await ze(t,pe,"1"),await Ve(t,pe),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ze(n,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(e=>qe(e,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Ve(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(t=>{const e=Fe(t,!1).getAll();return new De(e).toPromise()});if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),He)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Be.type="LOCAL";const Ge=Be;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(t,e){return L(t,"POST","/v2/accounts/mfaSignIn:start",j(t,e))}function Ye(t,e){return L(t,"POST","/v2/accounts/mfaSignIn:finalize",j(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xe(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function Je(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=p("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",Xe().appendChild(r)})}function Qe(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Qe("rcb"),new S(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ze="recaptcha";async function tn(t,e,n){var r;const i=await n.verify();try{let o;if(g("string"===typeof i,t,"argument-error"),g(n.type===Ze,t,"argument-error"),o="string"===typeof e?{phoneNumber:e}:e,"session"in o){const e=o.session;if("phoneNumber"in o){g("enroll"===e.type,t,"internal-error");const n=await de(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{g("signin"===e.type,t,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;g(n,t,"missing-multi-factor-info");const s=await Ke(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await Mt(t,{phoneNumber:o.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class en{constructor(t){this.providerId=en.PROVIDER_ID,this.auth=kt(t)}verifyPhoneNumber(t,e){return tn(this.auth,t,Object(r["q"])(e))}static credential(t,e){return zt._fromVerification(t,e)}static credentialFromResult(t){const e=t;return en.credentialFromTaggedObject(e)}static credentialFromError(t){return en.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?zt._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nn(t,e){return e?w(e):(g(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en.PROVIDER_ID="phone",en.PHONE_SIGN_IN_METHOD="phone";class rn extends Et{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Rt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Rt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Rt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function on(t){return oe(t.auth,new rn(t),t.bypassAuthState)}function sn(t){const{auth:e,user:n}=t;return g(n,e,"internal-error"),ie(n,new rn(t),t.bypassAuthState)}async function an(t){const{auth:e,user:n}=t;return g(n,e,"internal-error"),re(n,new rn(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=t;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return on;case"linkViaPopup":case"linkViaRedirect":return an;case"reauthViaPopup":case"reauthViaRedirect":return sn;default:f(this.auth,"internal-error")}}resolve(t){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=new S(2e3,1e4);class ln extends cn{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,ln.currentPopupAction&&ln.currentPopupAction.cancel(),ln.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return g(t,this.auth,"internal-error"),t}async onExecution(){_(1===this.filter.length,"Popup operations only handle one event");const t=ke();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ln.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(t,un.get())};t()}}ln.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const hn="pendingRedirect",dn=new Map;class fn extends cn{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=dn.get(this.auth._key());if(!t){try{const e=await pn(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}dn.set(this.auth._key(),t)}return this.bypassAuthState||dn.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function pn(t,e){const n=vn(e),r=mn(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function mn(t){return w(t._redirectPersistence)}function vn(t){return ct(hn,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gn(t,e,n=!1){const r=kt(t),i=nn(r,e),o=new fn(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yn=6e5;class _n{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Cn(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!wn(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(p(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=yn&&this.cachedEventUids.clear(),this.cachedEventUids.has(bn(t))}saveEventToCache(t){this.cachedEventUids.add(bn(t)),this.lastProcessedEventTime=Date.now()}}function bn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(t=>t).join("-")}function wn({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function Cn(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wn(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function In(t,e={}){return L(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kn=/^https?/;async function On(t){if(t.config.emulator)return;const{authorizedDomains:e}=await In(t);for(const r of e)try{if(En(r))return}catch(n){}f(t,"unauthorized-domain")}function En(t){const e=T(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!kn.test(n))return!1;if(Tn.test(t))return r===t;const i=t.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=new S(3e4,6e4);function Sn(){const t=Ee().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function Pn(t){return new Promise((e,n)=>{var r,i,o;function s(){Sn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sn(),n(p(t,"network-request-failed"))},timeout:xn.get()})}if(null===(i=null===(r=Ee().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(o=Ee().gapi)||void 0===o?void 0:o.load)){const e=Qe("iframefcb");return Ee()[e]=()=>{gapi.load?s():n(p(t,"network-request-failed"))},Je("https://apis.google.com/js/api.js?onload="+e).catch(t=>n(t))}s()}}).catch(t=>{throw Nn=null,t})}let Nn=null;function An(t){return Nn=Nn||Pn(t),Nn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=new S(5e3,15e3),jn="__/auth/iframe",Ln="emulator/auth/iframe",Mn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Dn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fn(t){const e=t.config;g(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?P(e,Ln):`https://${t.config.authDomain}/${jn}`,o={apiKey:e.apiKey,appName:t.name,v:i["a"]},s=Dn.get(t.config.apiHost);s&&(o.eid=s);const a=t._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${Object(r["C"])(o).slice(1)}`}async function $n(t){const e=await An(t),n=Ee().gapi;return g(n,t,"internal-error"),e.open({where:document.body,url:Fn(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Mn,dontclear:!0},e=>new Promise(async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=p(t,"network-request-failed"),o=Ee().setTimeout(()=>{r(i)},Rn.get());function s(){Ee().clearTimeout(o),n(e)}e.ping(s).then(s,()=>{r(i)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zn=500,qn=600,Vn="_blank",Hn="http://localhost";class Wn{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Bn(t,e,n,i=zn,o=qn){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Un),{width:i.toString(),height:o.toString(),top:s,left:a}),l=Object(r["r"])().toLowerCase();n&&(c=ft(l)?Vn:n),ht(l)&&(e=e||Hn,u.scrollbars="yes");const h=Object.entries(u).reduce((t,[e,n])=>`${t}${e}=${n},`,"");if(_t(l)&&"_self"!==c)return Gn(e||"",c),new Wn(null);const d=window.open(e||"",c,h);g(d,t,"popup-blocked");try{d.focus()}catch(f){}return new Wn(d)}function Gn(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn="__/auth/handler",Yn="emulator/auth/handler";function Xn(t,e,n,o,s,a){g(t.config.authDomain,t,"auth-domain-config-required"),g(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:o,v:i["a"],eventId:s};if(e instanceof Bt){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",Object(r["u"])(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof Gt){const t=e.getScopes().filter(t=>""!==t);t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${Jn(t)}?${Object(r["C"])(u).slice(1)}`}function Jn({config:t}){return t.emulator?P(t,Yn):`https://${t.authDomain}/${Kn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn="webStorageSupport";class Zn{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ce,this._completeRedirectFn=gn}async _openPopup(t,e,n,r){var i;_(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Xn(t,e,n,T(),r);return Bn(t,o,ke())}async _openRedirect(t,e,n,r){return await this._originValidation(t),xe(Xn(t,e,n,T(),r)),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(_(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch(()=>{delete this.eventManagers[e]}),n}async initAndGetManager(t){const e=await $n(t),n=new _n(t);return e.register("authEvent",e=>{g(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(Qn,{type:Qn},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Qn];void 0!==i&&e(!!i),f(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=On(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return wt()||dt()||yt()}}const tr=Zn;class er{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return y("unexpected MultiFactorSessionType")}}}class nr extends er{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new nr(t)}_finalizeEnroll(t,e,n){return fe(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return Ye(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class rr{constructor(){}static assertion(t){return nr._fromCredential(t)}}rr.FACTOR_ID="phone";var ir="@firebase/auth",or="0.19.5";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sr{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function cr(t){Object(i["c"])(new a["a"]("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:o}=r.options;return(e=>{g(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),g(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:It(t)},s=new Tt(e,r);return I(s,n),s})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()})),Object(i["c"])(new a["a"]("auth-internal",t=>{const e=kt(t.getProvider("auth").getImmediate());return(t=>new sr(t))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i["f"])(ir,or,ar(t)),Object(i["f"])(ir,or,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(t=Object(i["d"])()){const e=Object(i["b"])(t,"auth");return e.isInitialized()?e.getImmediate():C(t,{popupRedirectResolver:tr,persistence:[Ge,be,Ce]})}cr("Browser")},ecee:function(t,e,n){"use strict";(function(t){
/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
function r(t){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){a(t,e,n[e])}))}return t}function u(t,e){return d(t)||p(t,e)||v()}function l(t){return h(t)||f(t)||m()}function h(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function d(t){if(Array.isArray(t))return t}function f(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function p(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var s,a=t[Symbol.iterator]();!(r=(s=a.next()).done);r=!0)if(n.push(s.value),e&&n.length===e)break}catch(c){i=!0,o=c}finally{try{r||null==a["return"]||a["return"]()}finally{if(i)throw o}}return n}function m(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function v(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}n.d(e,"b",(function(){return ce})),n.d(e,"a",(function(){return V})),n.d(e,"e",(function(){return ue})),n.d(e,"c",(function(){return oe})),n.d(e,"d",(function(){return ae}));var g=function(){},y={},_={},b={mark:g,measure:g};try{"undefined"!==typeof window&&(y=window),"undefined"!==typeof document&&(_=document),"undefined"!==typeof MutationObserver&&MutationObserver,"undefined"!==typeof performance&&(b=performance)}catch(le){}var w=y.navigator||{},C=w.userAgent,I=void 0===C?"":C,T=y,k=_,O=b,E=(T.document,!!k.documentElement&&!!k.head&&"function"===typeof k.addEventListener&&"function"===typeof k.createElement),x=~I.indexOf("MSIE")||~I.indexOf("Trident/"),S="___FONT_AWESOME___",P=16,N="fa",A="svg-inline--fa",R="data-fa-i2svg",j=(function(){try{}catch(le){return!1}}(),[1,2,3,4,5,6,7,8,9,10]),L=j.concat([11,12,13,14,15,16,17,18,19,20]),M={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},D=(["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter",M.GROUP,M.SWAP_OPACITY,M.PRIMARY,M.SECONDARY].concat(j.map((function(t){return"".concat(t,"x")}))).concat(L.map((function(t){return"w-".concat(t)}))),T.FontAwesomeConfig||{});function F(t){var e=k.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function $(t){return""===t||"false"!==t&&("true"===t||t)}if(k&&"function"===typeof k.querySelector){var U=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];U.forEach((function(t){var e=u(t,2),n=e[0],r=e[1],i=$(F(n));void 0!==i&&null!==i&&(D[r]=i)}))}var z={familyPrefix:N,replacementClass:A,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},q=c({},z,D);q.autoReplaceSvg||(q.observeMutations=!1);var V=c({},q);T.FontAwesomeConfig=V;var H=T||{};H[S]||(H[S]={}),H[S].styles||(H[S].styles={}),H[S].hooks||(H[S].hooks={}),H[S].shims||(H[S].shims=[]);var W=H[S],B=[],G=function t(){k.removeEventListener("DOMContentLoaded",t),K=1,B.map((function(t){return t()}))},K=!1;E&&(K=(k.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(k.readyState),K||k.addEventListener("DOMContentLoaded",G));var Y,X="pending",J="settled",Q="fulfilled",Z="rejected",tt=function(){},et="undefined"!==typeof t&&"undefined"!==typeof t.process&&"function"===typeof t.process.emit,nt="undefined"===typeof setImmediate?setTimeout:setImmediate,rt=[];function it(){for(var t=0;t<rt.length;t++)rt[t][0](rt[t][1]);rt=[],Y=!1}function ot(t,e){rt.push([t,e]),Y||(Y=!0,nt(it,0))}function st(t,e){function n(t){ut(e,t)}function r(t){ht(e,t)}try{t(n,r)}catch(le){r(le)}}function at(t){var e=t.owner,n=e._state,r=e._data,i=t[n],o=t.then;if("function"===typeof i){n=Q;try{r=i(r)}catch(le){ht(o,le)}}ct(o,r)||(n===Q&&ut(o,r),n===Z&&ht(o,r))}function ct(t,e){var n;try{if(t===e)throw new TypeError("A promises callback cannot return that same promise.");if(e&&("function"===typeof e||"object"===r(e))){var i=e.then;if("function"===typeof i)return i.call(e,(function(r){n||(n=!0,e===r?lt(t,r):ut(t,r))}),(function(e){n||(n=!0,ht(t,e))})),!0}}catch(le){return n||ht(t,le),!0}return!1}function ut(t,e){t!==e&&ct(t,e)||lt(t,e)}function lt(t,e){t._state===X&&(t._state=J,t._data=e,ot(ft,t))}function ht(t,e){t._state===X&&(t._state=J,t._data=e,ot(pt,t))}function dt(t){t._then=t._then.forEach(at)}function ft(t){t._state=Q,dt(t)}function pt(e){e._state=Z,dt(e),!e._handled&&et&&t.process.emit("unhandledRejection",e._data,e)}function mt(e){t.process.emit("rejectionHandled",e)}function vt(t){if("function"!==typeof t)throw new TypeError("Promise resolver "+t+" is not a function");if(this instanceof vt===!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],st(t,this)}vt.prototype={constructor:vt,_state:X,_then:null,_data:void 0,_handled:!1,then:function(t,e){var n={owner:this,then:new this.constructor(tt),fulfilled:t,rejected:e};return!e&&!t||this._handled||(this._handled=!0,this._state===Z&&et&&ot(mt,this)),this._state===Q||this._state===Z?ot(at,n):this._then.push(n),n.then},catch:function(t){return this.then(null,t)}},vt.all=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.all().");return new vt((function(e,n){var r=[],i=0;function o(t){return i++,function(n){r[t]=n,--i||e(r)}}for(var s,a=0;a<t.length;a++)s=t[a],s&&"function"===typeof s.then?s.then(o(a),n):r[a]=s;i||e(r)}))},vt.race=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.race().");return new vt((function(e,n){for(var r,i=0;i<t.length;i++)r=t[i],r&&"function"===typeof r.then?r.then(e,n):e(r)}))},vt.resolve=function(t){return t&&"object"===r(t)&&t.constructor===vt?t:new vt((function(e){e(t)}))},vt.reject=function(t){return new vt((function(e,n){n(t)}))};var gt=P,yt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function _t(t){if(t&&E){var e=k.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=k.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return k.head.insertBefore(e,r),t}}var bt="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function wt(){var t=12,e="";while(t-- >0)e+=bt[62*Math.random()|0];return e}function Ct(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function It(t){return Object.keys(t||{}).reduce((function(e,n){return e+"".concat(n,'="').concat(Ct(t[n]),'" ')}),"").trim()}function Tt(t){return Object.keys(t||{}).reduce((function(e,n){return e+"".concat(n,": ").concat(t[n],";")}),"")}function kt(t){return t.size!==yt.size||t.x!==yt.x||t.y!==yt.y||t.rotate!==yt.rotate||t.flipX||t.flipY}function Ot(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(32*e.x,", ").concat(32*e.y,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(o," ").concat(s," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:u}}function Et(t){var e=t.transform,n=t.width,r=void 0===n?P:n,i=t.height,o=void 0===i?P:i,s=t.startCentered,a=void 0!==s&&s,c="";return c+=a&&x?"translate(".concat(e.x/gt-r/2,"em, ").concat(e.y/gt-o/2,"em) "):a?"translate(calc(-50% + ".concat(e.x/gt,"em), calc(-50% + ").concat(e.y/gt,"em)) "):"translate(".concat(e.x/gt,"em, ").concat(e.y/gt,"em) "),c+="scale(".concat(e.size/gt*(e.flipX?-1:1),", ").concat(e.size/gt*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var xt={x:0,y:0,width:"100%",height:"100%"};function St(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Pt(t){return"g"===t.tag?t.children:[t]}function Nt(t){var e=t.children,n=t.attributes,r=t.main,i=t.mask,o=t.maskId,s=t.transform,a=r.width,u=r.icon,l=i.width,h=i.icon,d=Ot({transform:s,containerWidth:l,iconWidth:a}),f={tag:"rect",attributes:c({},xt,{fill:"white"})},p=u.children?{children:u.children.map(St)}:{},m={tag:"g",attributes:c({},d.inner),children:[St(c({tag:u.tag,attributes:c({},u.attributes,d.path)},p))]},v={tag:"g",attributes:c({},d.outer),children:[m]},g="mask-".concat(o||wt()),y="clip-".concat(o||wt()),_={tag:"mask",attributes:c({},xt,{id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[f,v]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:Pt(h)},_]};return e.push(b,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(g,")")},xt)}),{children:e,attributes:n}}function At(t){var e=t.children,n=t.attributes,r=t.main,i=t.transform,o=t.styles,s=Tt(o);if(s.length>0&&(n["style"]=s),kt(i)){var a=Ot({transform:i,containerWidth:r.width,iconWidth:r.width});e.push({tag:"g",attributes:c({},a.outer),children:[{tag:"g",attributes:c({},a.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:c({},r.icon.attributes,a.path)}]}]})}else e.push(r.icon);return{children:e,attributes:n}}function Rt(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,o=t.styles,s=t.transform;if(kt(s)&&n.found&&!r.found){var a=n.width,u=n.height,l={x:a/u/2,y:.5};i["style"]=Tt(c({},o,{"transform-origin":"".concat(l.x+s.x/16,"em ").concat(l.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function jt(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,o=t.symbol,s=!0===o?"".concat(e,"-").concat(V.familyPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c({},i,{id:s}),children:r}]}]}function Lt(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,o=t.iconName,s=t.transform,a=t.symbol,u=t.title,l=t.maskId,h=t.titleId,d=t.extra,f=t.watchable,p=void 0!==f&&f,m=r.found?r:n,v=m.width,g=m.height,y="fak"===i,_=y?"":"fa-w-".concat(Math.ceil(v/g*16)),b=[V.replacementClass,o?"".concat(V.familyPrefix,"-").concat(o):"",_].filter((function(t){return-1===d.classes.indexOf(t)})).filter((function(t){return""!==t||!!t})).concat(d.classes).join(" "),w={children:[],attributes:c({},d.attributes,{"data-prefix":i,"data-icon":o,class:b,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(g)})},C=y&&!~d.classes.indexOf("fa-fw")?{width:"".concat(v/g*16*.0625,"em")}:{};p&&(w.attributes[R]=""),u&&w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(h||wt())},children:[u]});var I=c({},w,{prefix:i,iconName:o,main:n,mask:r,maskId:l,transform:s,symbol:a,styles:c({},C,d.styles)}),T=r.found&&n.found?Nt(I):At(I),k=T.children,O=T.attributes;return I.children=k,I.attributes=O,a?jt(I):Rt(I)}function Mt(t){var e=t.content,n=t.width,r=t.height,i=t.transform,o=t.title,s=t.extra,a=t.watchable,u=void 0!==a&&a,l=c({},s.attributes,o?{title:o}:{},{class:s.classes.join(" ")});u&&(l[R]="");var h=c({},s.styles);kt(i)&&(h["transform"]=Et({transform:i,startCentered:!0,width:n,height:r}),h["-webkit-transform"]=h["transform"]);var d=Tt(h);d.length>0&&(l["style"]=d);var f=[];return f.push({tag:"span",attributes:l,children:[e]}),o&&f.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),f}var Dt=function(){},Ft=(V.measurePerformance&&O&&O.mark&&O.measure,function(t,e){return function(n,r,i,o){return t.call(e,n,r,i,o)}}),$t=function(t,e,n,r){var i,o,s,a=Object.keys(t),c=a.length,u=void 0!==r?Ft(e,r):e;for(void 0===n?(i=1,s=t[a[0]]):(i=0,s=n);i<c;i++)o=a[i],s=u(s,t[o],o,t);return s};function Ut(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.skipHooks,i=void 0!==r&&r,o=Object.keys(e).reduce((function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t}),{});"function"!==typeof W.hooks.addPack||i?W.styles[t]=c({},W.styles[t]||{},o):W.hooks.addPack(t,o),"fas"===t&&Ut("fa",e)}var zt=W.styles,qt=W.shims,Vt=function(){var t=function(t){return $t(zt,(function(e,n,r){return e[r]=$t(n,t,{}),e}),{})};t((function(t,e,n){return e[3]&&(t[e[3]]=n),t})),t((function(t,e,n){var r=e[2];return t[n]=n,r.forEach((function(e){t[e]=n})),t}));var e="far"in zt;$t(qt,(function(t,n){var r=n[0],i=n[1],o=n[2];return"far"!==i||e||(i="fas"),t[r]={prefix:i,iconName:o},t}),{})};Vt();W.styles;function Ht(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}function Wt(t){var e=t.tag,n=t.attributes,r=void 0===n?{}:n,i=t.children,o=void 0===i?[]:i;return"string"===typeof t?Ct(t):"<".concat(e," ").concat(It(r),">").concat(o.map(Wt).join(""),"</").concat(e,">")}var Bt=function(t){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t?t.toLowerCase().split(" ").reduce((function(t,e){var n=e.toLowerCase().split("-"),r=n[0],i=n.slice(1).join("-");if(r&&"h"===i)return t.flipX=!0,t;if(r&&"v"===i)return t.flipY=!0,t;if(i=parseFloat(i),isNaN(i))return t;switch(r){case"grow":t.size=t.size+i;break;case"shrink":t.size=t.size-i;break;case"left":t.x=t.x-i;break;case"right":t.x=t.x+i;break;case"up":t.y=t.y-i;break;case"down":t.y=t.y+i;break;case"rotate":t.rotate=t.rotate+i;break}return t}),e):e};function Gt(t){this.name="MissingIcon",this.message=t||"Icon unavailable",this.stack=(new Error).stack}Gt.prototype=Object.create(Error.prototype),Gt.prototype.constructor=Gt;var Kt={fill:"currentColor"},Yt={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},Xt=(c({},Kt,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}),c({},Yt,{attributeName:"opacity"}));c({},Kt,{cx:"256",cy:"364",r:"28"}),c({},Yt,{attributeName:"r",values:"28;14;28;28;14;28;"}),c({},Xt,{values:"1;0;1;1;0;1;"}),c({},Kt,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),c({},Xt,{values:"1;0;0;0;0;1;"}),c({},Kt,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),c({},Xt,{values:"0;0;1;1;0;0;"}),W.styles;function Jt(t){var e=t[0],n=t[1],r=t.slice(4),i=u(r,1),o=i[0],s=null;return s=Array.isArray(o)?{tag:"g",attributes:{class:"".concat(V.familyPrefix,"-").concat(M.GROUP)},children:[{tag:"path",attributes:{class:"".concat(V.familyPrefix,"-").concat(M.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(V.familyPrefix,"-").concat(M.PRIMARY),fill:"currentColor",d:o[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:e,height:n,icon:s}}W.styles;var Qt='svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';function Zt(){var t=N,e=A,n=V.familyPrefix,r=V.replacementClass,i=Qt;if(n!==t||r!==e){var o=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var te=function(){function t(){i(this,t),this.definitions={}}return s(t,[{key:"add",value:function(){for(var t=this,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach((function(e){t.definitions[e]=c({},t.definitions[e]||{},i[e]),Ut(e,i[e]),Vt()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,e){var n=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(n).map((function(e){var r=n[e],i=r.prefix,o=r.iconName,s=r.icon;t[i]||(t[i]={}),t[i][o]=s})),t}}]),t}();function ee(){V.autoAddCss&&!se&&(_t(Zt()),se=!0)}function ne(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map((function(t){return Wt(t)}))}}),Object.defineProperty(t,"node",{get:function(){if(E){var e=k.createElement("div");return e.innerHTML=t.html,e.children}}}),t}function re(t){var e=t.prefix,n=void 0===e?"fa":e,r=t.iconName;if(r)return Ht(oe.definitions,n,r)||Ht(W.styles,n,r)}function ie(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(e||{}).icon?e:re(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:re(i||{})),t(r,c({},n,{mask:i}))}}var oe=new te,se=!1,ae={transform:function(t){return Bt(t)}},ce=ie((function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.transform,r=void 0===n?yt:n,i=e.symbol,o=void 0!==i&&i,s=e.mask,a=void 0===s?null:s,u=e.maskId,l=void 0===u?null:u,h=e.title,d=void 0===h?null:h,f=e.titleId,p=void 0===f?null:f,m=e.classes,v=void 0===m?[]:m,g=e.attributes,y=void 0===g?{}:g,_=e.styles,b=void 0===_?{}:_;if(t){var w=t.prefix,C=t.iconName,I=t.icon;return ne(c({type:"icon"},t),(function(){return ee(),V.autoA11y&&(d?y["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(p||wt()):(y["aria-hidden"]="true",y["focusable"]="false")),Lt({icons:{main:Jt(I),mask:a?Jt(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:w,iconName:C,transform:c({},yt,r),symbol:o,title:d,maskId:l,titleId:p,extra:{attributes:y,styles:b,classes:v}})}))}})),ue=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.transform,r=void 0===n?yt:n,i=e.title,o=void 0===i?null:i,s=e.classes,a=void 0===s?[]:s,u=e.attributes,h=void 0===u?{}:u,d=e.styles,f=void 0===d?{}:d;return ne({type:"text",content:t},(function(){return ee(),Mt({content:t,transform:c({},yt,r),title:o,extra:{attributes:h,styles:f,classes:["".concat(V.familyPrefix,"-layers-text")].concat(l(a))}})}))}}).call(this,n("c8ba"))},f069:function(t,e,n){"use strict";var r=n("59ed"),i=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new i(t)}},f36a:function(t,e,n){var r=n("e330");t.exports=r([].slice)},f5df:function(t,e,n){var r=n("da84"),i=n("00ee"),o=n("1626"),s=n("c6b6"),a=n("b622"),c=a("toStringTag"),u=r.Object,l="Arguments"==s(function(){return arguments}()),h=function(t,e){try{return t[e]}catch(n){}};t.exports=i?s:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=h(e=u(t),c))?n:l?s(e):"Object"==(r=s(e))&&o(e.callee)?"Arguments":r}},f772:function(t,e,n){var r=n("5692"),i=n("90e3"),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},fc6a:function(t,e,n){var r=n("44ad"),i=n("1d80");t.exports=function(t){return r(i(t))}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(t,e,n){var r=n("4930");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(t,e,n){var r=n("da84");t.exports=r.Promise}}]);
//# sourceMappingURL=chunk-vendors.22221fcb.js.map