!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=12)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,r){"use strict";e.exports=r(9)},function(e,t,r){"use strict";var n=r(2),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},u={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function a(e){return n.isMemo(e)?u:c[e.$$typeof]||o}c[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[n.Memo]=u;var f=Object.defineProperty,s=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(y){var o=d(r);o&&o!==y&&e(t,o,n)}var u=s(r);l&&(u=u.concat(l(r)));for(var c=a(t),h=a(r),b=0;b<u.length;++b){var v=u[b];if(!(i[v]||n&&n[v]||h&&h[v]||c&&c[v])){var m=p(r,v);try{f(t,v,m)}catch(e){}}}}return t}},function(e,t,r){"use strict";(function(e,n){var o,i=r(5);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:n;var u=Object(i.a)(o);t.a=u}).call(this,r(10),r(11)(e))},function(e,t,r){"use strict";function n(e){var t,r=e.Symbol;return"function"==typeof r?r.observable?t=r.observable:(t=r("observable"),r.observable=t):t="@@observable",t}r.d(t,"a",(function(){return n}))},function(e,t,r){e.exports=r(7)()},function(e,t,r){"use strict";var n=r(8);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,u){if(u!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,i=n?Symbol.for("react.portal"):60106,u=n?Symbol.for("react.fragment"):60107,c=n?Symbol.for("react.strict_mode"):60108,a=n?Symbol.for("react.profiler"):60114,f=n?Symbol.for("react.provider"):60109,s=n?Symbol.for("react.context"):60110,l=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.suspense_list"):60120,b=n?Symbol.for("react.memo"):60115,v=n?Symbol.for("react.lazy"):60116,m=n?Symbol.for("react.block"):60121,g=n?Symbol.for("react.fundamental"):60117,w=n?Symbol.for("react.responder"):60118,O=n?Symbol.for("react.scope"):60119;function P(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case l:case p:case u:case a:case c:case y:return e;default:switch(e=e&&e.$$typeof){case s:case d:case v:case b:case f:return e;default:return t}}case i:return t}}}function S(e){return P(e)===p}t.AsyncMode=l,t.ConcurrentMode=p,t.ContextConsumer=s,t.ContextProvider=f,t.Element=o,t.ForwardRef=d,t.Fragment=u,t.Lazy=v,t.Memo=b,t.Portal=i,t.Profiler=a,t.StrictMode=c,t.Suspense=y,t.isAsyncMode=function(e){return S(e)||P(e)===l},t.isConcurrentMode=S,t.isContextConsumer=function(e){return P(e)===s},t.isContextProvider=function(e){return P(e)===f},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return P(e)===d},t.isFragment=function(e){return P(e)===u},t.isLazy=function(e){return P(e)===v},t.isMemo=function(e){return P(e)===b},t.isPortal=function(e){return P(e)===i},t.isProfiler=function(e){return P(e)===a},t.isStrictMode=function(e){return P(e)===c},t.isSuspense=function(e){return P(e)===y},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===u||e===p||e===a||e===c||e===y||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===b||e.$$typeof===f||e.$$typeof===s||e.$$typeof===d||e.$$typeof===g||e.$$typeof===w||e.$$typeof===O||e.$$typeof===m)},t.typeOf=P},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,r){"use strict";r.r(t),r.d(t,"Barcode",(function(){return Le})),r.d(t,"addFooToText",(function(){return Fe})),r.d(t,"delFooText",(function(){return We}));var n=r(0),o=r.n(n),i=(r(6),o.a.createContext(null));var u=function(e){e()},c={notify:function(){}};function a(){var e=u,t=null,r=null;return{clear:function(){t=null,r=null},notify:function(){e((function(){for(var e=t;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],r=t;r;)e.push(r),r=r.next;return e},subscribe:function(e){var n=!0,o=r={callback:e,next:null,prev:r};return o.prev?o.prev.next=o:t=o,function(){n&&null!==t&&(n=!1,o.next?o.next.prev=o.prev:r=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}var f=function(){function e(e,t){this.store=e,this.parentSub=t,this.unsubscribe=null,this.listeners=c,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var t=e.prototype;return t.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},t.notifyNestedSubs=function(){this.listeners.notify()},t.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},t.isSubscribed=function(){return Boolean(this.unsubscribe)},t.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=a())},t.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=c)},e}();var s=function(e){var t=e.store,r=e.context,u=e.children,c=Object(n.useMemo)((function(){var e=new f(t);return e.onStateChange=e.notifyNestedSubs,{store:t,subscription:e}}),[t]),a=Object(n.useMemo)((function(){return t.getState()}),[t]);Object(n.useEffect)((function(){var e=c.subscription;return e.trySubscribe(),a!==t.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[c,a]);var s=r||i;return o.a.createElement(s.Provider,{value:c},u)};r(3),r(2),"undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?n.useLayoutEffect:n.useEffect;var l=r(4),p=function(){return Math.random().toString(36).substring(7).split("").join(".")},d={INIT:"@@redux/INIT"+p(),REPLACE:"@@redux/REPLACE"+p(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+p()}};function y(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function h(e,t,r){var n;if("function"==typeof t&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof t&&void 0===r&&(r=t,t=void 0),void 0!==r){if("function"!=typeof r)throw new Error("Expected the enhancer to be a function.");return r(h)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var o=e,i=t,u=[],c=u,a=!1;function f(){c===u&&(c=u.slice())}function s(){if(a)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return i}function p(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(a)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var t=!0;return f(),c.push(e),function(){if(t){if(a)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");t=!1,f();var r=c.indexOf(e);c.splice(r,1),u=null}}}function b(e){if(!y(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(a)throw new Error("Reducers may not dispatch actions.");try{a=!0,i=o(i,e)}finally{a=!1}for(var t=u=c,r=0;r<t.length;r++){(0,t[r])()}return e}function v(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");o=e,b({type:d.REPLACE})}function m(){var e,t=p;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function r(){e.next&&e.next(s())}return r(),{unsubscribe:t(r)}}})[l.a]=function(){return this},e}return b({type:d.INIT}),(n={dispatch:b,subscribe:p,getState:s,replaceReducer:v})[l.a]=m,n}function b(e,t){var r=t&&t.type;return"Given "+(r&&'action "'+String(r)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function v(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var o=t[n];0,"function"==typeof e[o]&&(r[o]=e[o])}var i,u=Object.keys(r);try{!function(e){Object.keys(e).forEach((function(t){var r=e[t];if(void 0===r(void 0,{type:d.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===r(void 0,{type:d.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+d.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(r)}catch(e){i=e}return function(e,t){if(void 0===e&&(e={}),i)throw i;for(var n=!1,o={},c=0;c<u.length;c++){var a=u[c],f=r[a],s=e[a],l=f(s,t);if(void 0===l){var p=b(a,t);throw new Error(p)}o[a]=l,n=n||l!==s}return(n=n||u.length!==Object.keys(e).length)?o:e}}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e,t){var r=Object.keys(e);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(e)),t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(r,!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function P(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return function(){var r=e.apply(void 0,arguments),n=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},o={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},i=t.map((function(e){return e(o)}));return w({},r,{dispatch:n=O.apply(void 0,i)(r.dispatch)})}}}function S(){return Object(n.useContext)(i)}function j(e){void 0===e&&(e=i);var t=e===i?S:function(){return Object(n.useContext)(e)};return function(){return t().store}}var x=j();function E(e){void 0===e&&(e=i);var t=e===i?x:j(e);return function(){return t().dispatch}}var T=E();var _,A=r(1);function C(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+e+(r.length?" "+r.join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function $(e){return!!e&&!!e[he]}function N(e){return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);return!t||t===Object.prototype}(e)||Array.isArray(e)||!!e[ye]||!!e.constructor[ye]||F(e)||W(e))}function k(e,t){0===D(e)?be(e).forEach((function(r){return t(r,e[r],e)})):e.forEach((function(r,n){return t(n,r,e)}))}function D(e){var t=e[he];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:F(e)?2:W(e)?3:0}function R(e,t){return 2===D(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function I(e,t){return 2===D(e)?e.get(t):e[t]}function M(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function F(e){return se&&e instanceof Map}function W(e){return le&&e instanceof Set}function U(e){return e.o||e.t}function z(e,t){if(void 0===t&&(t=!1),Array.isArray(e))return e.slice();var r=Object.create(Object.getPrototypeOf(e));return k(e,(function(n){if(n!==he){var o=Object.getOwnPropertyDescriptor(e,n),i=o.value;o.get&&(t||C(1),i=o.get.call(e)),o.enumerable?r[n]=i:Object.defineProperty(r,n,{value:i,writable:!0,configurable:!0})}})),r}function L(e,t){$(e)||Object.isFrozen(e)||!N(e)||(D(e)>1&&(e.set=e.add=e.clear=e.delete=K),Object.freeze(e),t&&k(e,(function(e,t){return L(t,!0)})))}function K(){C(2)}function B(e){var t=ve[e];return t||C(19,e),t}function V(e,t){ve[e]=t}function X(){return ae}function Y(e,t){t&&(B("Patches"),e.u=[],e.s=[],e.v=t)}function q(e){J(e),e.p.forEach(G),e.p=null}function J(e){e===ae&&(ae=e.l)}function H(e){return ae={p:[],l:ae,h:e,m:!0,_:0}}function G(e){var t=e[he];0===t.i||1===t.i?t.j():t.O=!0}function Q(e,t){t._=t.p.length;var r=t.p[0],n=void 0!==e&&e!==r;return t.h.g||B("ES5").S(t,e,n),n?(r[he].P&&(q(t),C(4)),N(e)&&(e=Z(t,e),t.l||te(t,e)),t.u&&B("Patches").M(r[he],e,t.u,t.s)):e=Z(t,r,[]),q(t),t.u&&t.v(t.u,t.s),e!==de?e:void 0}function Z(e,t,r){if(Object.isFrozen(t))return t;var n=t[he];if(!n)return k(t,(function(o,i){return ee(e,n,t,o,i,r)})),t;if(n.A!==e)return t;if(!n.P)return te(e,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=4===n.i||5===n.i?n.o=z(n.k,!0):n.o;k(o,(function(t,i){return ee(e,n,o,t,i,r)})),te(e,o,!1),r&&e.u&&B("Patches").R(n,r,e.u,e.s)}return n.o}function ee(e,t,r,n,o,i){if($(o)){var u=Z(e,o,i&&t&&3!==t.i&&!R(t.D,n)?i.concat(n):void 0);if(a=n,f=u,2===(s=D(c=r))?c.set(a,f):3===s?(c.delete(a),c.add(f)):c[a]=f,!$(u))return;e.m=!1}var c,a,f,s;if((!t||!M(o,I(t.t,n)))&&N(o)){if(!e.h.N&&e._<1)return;Z(e,o),t&&t.A.l||te(e,o)}}function te(e,t,r){void 0===r&&(r=!1),e.h.N&&e.m&&L(t,r)}function re(e,t){var r=e[he],n=Reflect.getOwnPropertyDescriptor(r?U(r):e,t);return n&&n.value}function ne(e){if(!e.P){if(e.P=!0,0===e.i||1===e.i){var t=e.o=z(e.t);k(e.p,(function(e,r){t[e]=r})),e.p=void 0}e.l&&ne(e.l)}}function oe(e){e.o||(e.o=z(e.t))}function ie(e,t,r){var n=F(t)?B("MapSet").T(t,r):W(t)?B("MapSet").F(t,r):e.g?function(e,t){var r=Array.isArray(e),n={i:r?1:0,A:t?t.A:X(),P:!1,I:!1,D:{},l:t,t:e,k:null,p:{},o:null,j:null,C:!1},o=n,i=me;r&&(o=[n],i=ge);var u=Proxy.revocable(o,i),c=u.revoke,a=u.proxy;return n.k=a,n.j=c,a}(t,r):B("ES5").J(t,r);return(r?r.A:X()).p.push(n),n}function ue(){function e(e,t){var r=e[he];if(r&&!r.$){r.$=!0;var n=e[t];return r.$=!1,n}return e[t]}function t(e){e.P||(e.P=!0,e.l&&t(e.l))}function r(e){e.o||(e.o=n(e.t))}function n(e){var t=e&&e[he];if(t){t.$=!0;var r=z(t.k,!0);return t.$=!1,r}return z(e)}function o(e){for(var r=e.length-1;r>=0;r--){var n=e[r][he];if(!n.P)switch(n.i){case 5:u(n)&&t(n);break;case 4:i(n)&&t(n)}}}function i(e){for(var t=e.t,r=e.k,n=Object.keys(r),o=n.length-1;o>=0;o--){var i=n[o],u=t[i];if(void 0===u&&!R(t,i))return!0;var c=r[i],a=c&&c[he];if(a?a.t!==u:!M(c,u))return!0}return n.length!==Object.keys(t).length}function u(e){var t=e.k;if(t.length!==e.t.length)return!0;var r=Object.getOwnPropertyDescriptor(t,t.length-1);return!(!r||r.get)}function c(e){e.O&&C(3,JSON.stringify(U(e)))}var a={};V("ES5",{J:function(o,i){var u=Array.isArray(o),f=n(o);k(f,(function(n){!function(n,o,i){var u=a[o];u?u.enumerable=i:a[o]=u={enumerable:i,get:function(){return function(t,n){c(t);var o=e(U(t),n);return t.$?o:o===e(t.t,n)&&N(o)?(r(t),t.o[n]=ie(t.A.h,o,t)):o}(this[he],o)},set:function(n){!function(n,o,i){if(c(n),n.D[o]=!0,!n.P){if(M(i,e(U(n),o)))return;t(n),r(n)}n.o[o]=i}(this[he],o,n)}},Object.defineProperty(n,o,u)}(f,n,u||function(e,t){var r=Object.getOwnPropertyDescriptor(e,t);return!(!r||!r.enumerable)}(o,n))}));var s={i:u?5:4,A:i?i.A:X(),P:!1,$:!1,I:!1,D:{},l:i,t:o,k:f,o:null,O:!1,C:!1};return Object.defineProperty(f,he,{value:s,writable:!0}),f},K:t,S:function(e,r,n){e.p.forEach((function(e){e[he].$=!0})),n?$(r)&&r[he].A===e&&o(e.p):(e.u&&function e(r){if(r&&"object"==typeof r){var n=r[he];if(n){var o=n.t,i=n.k,c=n.D,a=n.i;if(4===a)k(i,(function(r){r!==he&&(void 0!==o[r]||R(o,r)?c[r]||e(i[r]):(c[r]=!0,t(n)))})),k(o,(function(e){void 0!==i[e]||R(i,e)||(c[e]=!1,t(n))}));else if(5===a){if(u(n)&&(t(n),c.length=!0),i.length<o.length)for(var f=i.length;f<o.length;f++)c[f]=!1;else for(var s=o.length;s<i.length;s++)c[s]=!0;for(var l=Math.min(i.length,o.length),p=0;p<l;p++)void 0===c[p]&&e(i[p])}}}}(e.p[0]),o(e.p))}})}_=A.unstable_batchedUpdates,u=_;var ce,ae,fe="undefined"!=typeof Symbol,se="undefined"!=typeof Map,le="undefined"!=typeof Set,pe="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,de=fe?Symbol("immer-nothing"):((ce={})["immer-nothing"]=!0,ce),ye=fe?Symbol("immer-draftable"):"__$immer_draftable",he=fe?Symbol("immer-state"):"__$immer_state",be=(fe&&Symbol.iterator,"undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames),ve={},me={get:function(e,t){if(t===he)return e;var r=e.p;if(!e.P&&R(r,t))return r[t];var n=U(e)[t];if(e.I||!N(n))return n;if(e.P){if(n!==re(e.t,t))return n;r=e.o}return r[t]=ie(e.A.h,n,e)},has:function(e,t){return t in U(e)},ownKeys:function(e){return Reflect.ownKeys(U(e))},set:function(e,t,r){if(!e.P){var n=re(e.t,t);if(r?M(n,r)||r===e.p[t]:M(n,r)&&t in e.t)return!0;oe(e),ne(e)}return e.D[t]=!0,e.o[t]=r,!0},deleteProperty:function(e,t){return void 0!==re(e.t,t)||t in e.t?(e.D[t]=!1,oe(e),ne(e)):e.D[t]&&delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var r=U(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&(n.writable=!0,n.configurable=1!==e.i||"length"!==t),n},defineProperty:function(){C(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){C(12)}},ge={};k(me,(function(e,t){ge[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),ge.deleteProperty=function(e,t){return me.deleteProperty.call(this,e[0],t)},ge.set=function(e,t,r){return me.set.call(this,e[0],t,r,e[0])};var we=new(function(){function e(e){this.g=pe,this.N=!1,"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)}var t=e.prototype;return t.produce=function(e,t,r){if("function"==typeof e&&"function"!=typeof t){var n=t;t=e;var o=this;return function(e){var r=this;void 0===e&&(e=n);for(var i=arguments.length,u=Array(i>1?i-1:0),c=1;c<i;c++)u[c-1]=arguments[c];return o.produce(e,(function(e){var n;return(n=t).call.apply(n,[r,e].concat(u))}))}}var i;if("function"!=typeof t&&C(6),void 0!==r&&"function"!=typeof r&&C(7),N(e)){var u=H(this),c=ie(this,e,void 0),a=!0;try{i=t(c),a=!1}finally{a?q(u):J(u)}return"undefined"!=typeof Promise&&i instanceof Promise?i.then((function(e){return Y(u,r),Q(e,u)}),(function(e){throw q(u),e})):(Y(u,r),Q(i,u))}if((i=t(e))!==de)return void 0===i&&(i=e),this.N&&L(i,!0),i},t.produceWithPatches=function(e,t){var r,n,o=this;return"function"==typeof e?function(t){for(var r=arguments.length,n=Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return o.produceWithPatches(t,(function(t){return e.apply(void 0,[t].concat(n))}))}:[this.produce(e,t,(function(e,t){r=e,n=t})),r,n]},t.createDraft=function(e){N(e)||C(8);var t=H(this),r=ie(this,e,void 0);return r[he].C=!0,J(t),r},t.finishDraft=function(e,t){var r=(e&&e[he]).A;return Y(r,t),Q(void 0,r)},t.setAutoFreeze=function(e){this.N=e},t.setUseProxies=function(e){pe||C(20),this.g=e},t.applyPatches=function(e,t){var r;for(r=t.length-1;r>=0;r--){var n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}var o=B("Patches").U;return $(e)?o(e,t):this.produce(e,(function(e){return o(e,t.slice(r+1))}))},e}()),Oe=we.produce,Pe=(we.produceWithPatches.bind(we),we.setAutoFreeze.bind(we),we.setUseProxies.bind(we),we.applyPatches.bind(we),we.createDraft.bind(we),we.finishDraft.bind(we),Oe);function Se(e,t){return e===t}function je(e,t,r){if(null===t||null===r||t.length!==r.length)return!1;for(var n=t.length,o=0;o<n;o++)if(!e(t[o],r[o]))return!1;return!0}function xe(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"==typeof e}))){var r=t.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+r+"]")}return t}!function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n]}((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Se,r=null,n=null;return function(){return je(t,r,arguments)||(n=e.apply(null,arguments)),r=arguments,n}}));function Ee(e){return function(t){var r=t.dispatch,n=t.getState;return function(t){return function(o){return"function"==typeof o?o(r,n,e):t(o)}}}}var Te=Ee();Te.withExtraArgument=Ee;var _e=Te;function Ae(){return(Ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var Ce="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?O:O.apply(null,arguments)};function $e(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Ne(e){var t,r=e||{},n=r.reducer,o=void 0===n?void 0:n,i=r.middleware,u=void 0===i?function(e){void 0===e&&(e={});var t=e,r=t.thunk,n=void 0===r||r,o=(t.immutableCheck,t.serializableCheck,[]);return n&&(!function(e){return"boolean"==typeof e}(n)?o.push(_e.withExtraArgument(n.extraArgument)):o.push(_e)),o}():i,c=r.devTools,a=void 0===c||c,f=r.preloadedState,s=void 0===f?void 0:f,l=r.enhancers,p=void 0===l?void 0:l;if("function"==typeof o)t=o;else{if(!$e(o))throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');t=v(o)}var d=P.apply(void 0,u),y=O;a&&(y=Ce(Ae({trace:!1},"object"==typeof a&&a)));var b=[d];return Array.isArray(p)?b=[d].concat(p):"function"==typeof p&&(b=p(b)),h(t,s,y.apply(void 0,b))}function ke(e,t){function r(){if(t){var r=t.apply(void 0,arguments);if(!r)throw new Error("prepareAction did not return an object");return Ae({type:e,payload:r.payload},"meta"in r&&{meta:r.meta},{},"error"in r&&{error:r.error})}return{type:e,payload:arguments.length<=0?void 0:arguments[0]}}return r.toString=function(){return""+e},r.type=e,r.match=function(t){return t.type===e},r}function De(e){var t={},r={addCase:function(e,n){var o="string"==typeof e?e:e.type;if(o in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[o]=n,r}};return e(r),t}"undefined"!=typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));for(var Re=36;Re--;)Re.toString(36);for(Re=36;Re---10;)Re.toString(36).toUpperCase();ue();var Ie=function(e){var t=e.name,r=e.initialState;if(!t)throw new Error("`name` is a required option for createSlice");var n=e.reducers||{},o=void 0===e.extraReducers?{}:"function"==typeof e.extraReducers?De(e.extraReducers):e.extraReducers,i=Object.keys(n),u={},c={},a={};i.forEach((function(e){var r,o,i=n[e],f=t+"/"+e;"reducer"in i?(r=i.reducer,o=i.prepare):r=i,u[e]=r,c[f]=r,a[e]=o?ke(f,o):ke(f)}));var f=function(e,t){var r="function"==typeof t?De(t):t;return function(t,n){return void 0===t&&(t=e),Pe(t,(function(e){var t=r[n.type];return t?t(e,n):void 0}))}}(r,Ae({},o,{},c));return{name:t,reducer:f,actions:a,caseReducers:u}}({name:"widgets/TextField",initialState:{textValue:""},reducers:{addFooToText:function(e,t){e.textValue=t.payload},delFooText:function(e,t){e.textValue=""}}}),Me=Ie.actions,Fe=Me.addFooToText,We=Me.delFooText,Ue=Ie,ze=function(e){var t=e.children,r=Ne({reducer:Ue.reducer});Object(A.render)(o.a.createElement(s,{store:r},t),document.getElementById("root"))},Le=function(){return o.a.createElement(ze,null,o.a.createElement(Ke,null))},Ke=function(){var e=T();return o.a.createElement("div",{style:{display:"flex",flexDirection:"row",padding:"6px"}},o.a.createElement("input",{onChange:function(t){e(Fe(t.currentTarget.value))}}),o.a.createElement("button",{onClick:function(){e(We(null))}},"Clear text"))}}]);