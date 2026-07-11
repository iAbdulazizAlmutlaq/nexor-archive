(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function nE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var e_={exports:{}},_c={},t_={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tl=Symbol.for("react.element"),iE=Symbol.for("react.portal"),rE=Symbol.for("react.fragment"),sE=Symbol.for("react.strict_mode"),oE=Symbol.for("react.profiler"),aE=Symbol.for("react.provider"),lE=Symbol.for("react.context"),uE=Symbol.for("react.forward_ref"),cE=Symbol.for("react.suspense"),fE=Symbol.for("react.memo"),dE=Symbol.for("react.lazy"),Gm=Symbol.iterator;function hE(t){return t===null||typeof t!="object"?null:(t=Gm&&t[Gm]||t["@@iterator"],typeof t=="function"?t:null)}var n_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},i_=Object.assign,r_={};function wo(t,e,n){this.props=t,this.context=e,this.refs=r_,this.updater=n||n_}wo.prototype.isReactComponent={};wo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};wo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function s_(){}s_.prototype=wo.prototype;function ep(t,e,n){this.props=t,this.context=e,this.refs=r_,this.updater=n||n_}var tp=ep.prototype=new s_;tp.constructor=ep;i_(tp,wo.prototype);tp.isPureReactComponent=!0;var Wm=Array.isArray,o_=Object.prototype.hasOwnProperty,np={current:null},a_={key:!0,ref:!0,__self:!0,__source:!0};function l_(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)o_.call(e,i)&&!a_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:tl,type:t,key:s,ref:o,props:r,_owner:np.current}}function pE(t,e){return{$$typeof:tl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ip(t){return typeof t=="object"&&t!==null&&t.$$typeof===tl}function mE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var jm=/\/+/g;function af(t,e){return typeof t=="object"&&t!==null&&t.key!=null?mE(""+t.key):e.toString(36)}function fu(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case tl:case iE:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+af(o,0):i,Wm(r)?(n="",t!=null&&(n=t.replace(jm,"$&/")+"/"),fu(r,e,n,"",function(u){return u})):r!=null&&(ip(r)&&(r=pE(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(jm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Wm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+af(s,a);o+=fu(s,e,n,l,r)}else if(l=hE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+af(s,a++),o+=fu(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function yl(t,e,n){if(t==null)return t;var i=[],r=0;return fu(t,i,"","",function(s){return e.call(n,s,r++)}),i}function gE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var an={current:null},du={transition:null},vE={ReactCurrentDispatcher:an,ReactCurrentBatchConfig:du,ReactCurrentOwner:np};function u_(){throw Error("act(...) is not supported in production builds of React.")}$e.Children={map:yl,forEach:function(t,e,n){yl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return yl(t,function(){e++}),e},toArray:function(t){return yl(t,function(e){return e})||[]},only:function(t){if(!ip(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$e.Component=wo;$e.Fragment=rE;$e.Profiler=oE;$e.PureComponent=ep;$e.StrictMode=sE;$e.Suspense=cE;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vE;$e.act=u_;$e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=i_({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=np.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)o_.call(e,l)&&!a_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:tl,type:t.type,key:r,ref:s,props:i,_owner:o}};$e.createContext=function(t){return t={$$typeof:lE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:aE,_context:t},t.Consumer=t};$e.createElement=l_;$e.createFactory=function(t){var e=l_.bind(null,t);return e.type=t,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(t){return{$$typeof:uE,render:t}};$e.isValidElement=ip;$e.lazy=function(t){return{$$typeof:dE,_payload:{_status:-1,_result:t},_init:gE}};$e.memo=function(t,e){return{$$typeof:fE,type:t,compare:e===void 0?null:e}};$e.startTransition=function(t){var e=du.transition;du.transition={};try{t()}finally{du.transition=e}};$e.unstable_act=u_;$e.useCallback=function(t,e){return an.current.useCallback(t,e)};$e.useContext=function(t){return an.current.useContext(t)};$e.useDebugValue=function(){};$e.useDeferredValue=function(t){return an.current.useDeferredValue(t)};$e.useEffect=function(t,e){return an.current.useEffect(t,e)};$e.useId=function(){return an.current.useId()};$e.useImperativeHandle=function(t,e,n){return an.current.useImperativeHandle(t,e,n)};$e.useInsertionEffect=function(t,e){return an.current.useInsertionEffect(t,e)};$e.useLayoutEffect=function(t,e){return an.current.useLayoutEffect(t,e)};$e.useMemo=function(t,e){return an.current.useMemo(t,e)};$e.useReducer=function(t,e,n){return an.current.useReducer(t,e,n)};$e.useRef=function(t){return an.current.useRef(t)};$e.useState=function(t){return an.current.useState(t)};$e.useSyncExternalStore=function(t,e,n){return an.current.useSyncExternalStore(t,e,n)};$e.useTransition=function(){return an.current.useTransition()};$e.version="18.3.1";t_.exports=$e;var B=t_.exports;const c_=nE(B);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yE=B,_E=Symbol.for("react.element"),xE=Symbol.for("react.fragment"),SE=Object.prototype.hasOwnProperty,ME=yE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,EE={key:!0,ref:!0,__self:!0,__source:!0};function f_(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)SE.call(e,i)&&!EE.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:_E,type:t,key:s,ref:o,props:r,_owner:ME.current}}_c.Fragment=xE;_c.jsx=f_;_c.jsxs=f_;e_.exports=_c;var N=e_.exports,d_={exports:{}},Rn={},h_={exports:{}},p_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,V){var W=O.length;O.push(V);e:for(;0<W;){var X=W-1>>>1,D=O[X];if(0<r(D,V))O[X]=V,O[W]=D,W=X;else break e}}function n(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var V=O[0],W=O.pop();if(W!==V){O[0]=W;e:for(var X=0,D=O.length,G=D>>>1;X<G;){var J=2*(X+1)-1,ie=O[J],te=J+1,ce=O[te];if(0>r(ie,W))te<D&&0>r(ce,ie)?(O[X]=ce,O[te]=W,X=te):(O[X]=ie,O[J]=W,X=J);else if(te<D&&0>r(ce,W))O[X]=ce,O[te]=W,X=te;else break e}}return V}function r(O,V){var W=O.sortIndex-V.sortIndex;return W!==0?W:O.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,d=3,p=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(O){for(var V=n(u);V!==null;){if(V.callback===null)i(u);else if(V.startTime<=O)i(u),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(u)}}function x(O){if(_=!1,v(O),!g)if(n(l)!==null)g=!0,R(E);else{var V=n(u);V!==null&&z(x,V.startTime-O)}}function E(O,V){g=!1,_&&(_=!1,h(A),A=-1),p=!0;var W=d;try{for(v(V),f=n(l);f!==null&&(!(f.expirationTime>V)||O&&!U());){var X=f.callback;if(typeof X=="function"){f.callback=null,d=f.priorityLevel;var D=X(f.expirationTime<=V);V=t.unstable_now(),typeof D=="function"?f.callback=D:f===n(l)&&i(l),v(V)}else i(l);f=n(l)}if(f!==null)var G=!0;else{var J=n(u);J!==null&&z(x,J.startTime-V),G=!1}return G}finally{f=null,d=W,p=!1}}var w=!1,M=null,A=-1,S=5,C=-1;function U(){return!(t.unstable_now()-C<S)}function L(){if(M!==null){var O=t.unstable_now();C=O;var V=!0;try{V=M(!0,O)}finally{V?Q():(w=!1,M=null)}}else w=!1}var Q;if(typeof y=="function")Q=function(){y(L)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,k=I.port2;I.port1.onmessage=L,Q=function(){k.postMessage(null)}}else Q=function(){m(L,0)};function R(O){M=O,w||(w=!0,Q())}function z(O,V){A=m(function(){O(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,R(E))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(d){case 1:case 2:case 3:var V=3;break;default:V=d}var W=d;d=V;try{return O()}finally{d=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,V){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var W=d;d=O;try{return V()}finally{d=W}},t.unstable_scheduleCallback=function(O,V,W){var X=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?X+W:X):W=X,O){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=W+D,O={id:c++,callback:V,priorityLevel:O,startTime:W,expirationTime:D,sortIndex:-1},W>X?(O.sortIndex=W,e(u,O),n(l)===null&&O===n(u)&&(_?(h(A),A=-1):_=!0,z(x,W-X))):(O.sortIndex=D,e(l,O),g||p||(g=!0,R(E))),O},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(O){var V=d;return function(){var W=d;d=V;try{return O.apply(this,arguments)}finally{d=W}}}})(p_);h_.exports=p_;var wE=h_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TE=B,bn=wE;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m_=new Set,Ea={};function ds(t,e){uo(t,e),uo(t+"Capture",e)}function uo(t,e){for(Ea[t]=e,t=0;t<e.length;t++)m_.add(e[t])}var Oi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cd=Object.prototype.hasOwnProperty,AE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$m={},Xm={};function bE(t){return Cd.call(Xm,t)?!0:Cd.call($m,t)?!1:AE.test(t)?Xm[t]=!0:($m[t]=!0,!1)}function CE(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function RE(t,e,n,i){if(e===null||typeof e>"u"||CE(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ln(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ht[t]=new ln(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ht[e]=new ln(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ht[t]=new ln(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ht[t]=new ln(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ht[t]=new ln(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ht[t]=new ln(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ht[t]=new ln(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ht[t]=new ln(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ht[t]=new ln(t,5,!1,t.toLowerCase(),null,!1,!1)});var rp=/[\-:]([a-z])/g;function sp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(rp,sp);Ht[e]=new ln(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(rp,sp);Ht[e]=new ln(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(rp,sp);Ht[e]=new ln(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ht[t]=new ln(t,1,!1,t.toLowerCase(),null,!1,!1)});Ht.xlinkHref=new ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ht[t]=new ln(t,1,!1,t.toLowerCase(),null,!0,!0)});function op(t,e,n,i){var r=Ht.hasOwnProperty(e)?Ht[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(RE(e,n,r,i)&&(n=null),i||r===null?bE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Gi=TE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_l=Symbol.for("react.element"),Fs=Symbol.for("react.portal"),Os=Symbol.for("react.fragment"),ap=Symbol.for("react.strict_mode"),Rd=Symbol.for("react.profiler"),g_=Symbol.for("react.provider"),v_=Symbol.for("react.context"),lp=Symbol.for("react.forward_ref"),Pd=Symbol.for("react.suspense"),Ld=Symbol.for("react.suspense_list"),up=Symbol.for("react.memo"),Zi=Symbol.for("react.lazy"),y_=Symbol.for("react.offscreen"),qm=Symbol.iterator;function Do(t){return t===null||typeof t!="object"?null:(t=qm&&t[qm]||t["@@iterator"],typeof t=="function"?t:null)}var vt=Object.assign,lf;function Ko(t){if(lf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);lf=e&&e[1]||""}return`
`+lf+t}var uf=!1;function cf(t,e){if(!t||uf)return"";uf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{uf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ko(t):""}function PE(t){switch(t.tag){case 5:return Ko(t.type);case 16:return Ko("Lazy");case 13:return Ko("Suspense");case 19:return Ko("SuspenseList");case 0:case 2:case 15:return t=cf(t.type,!1),t;case 11:return t=cf(t.type.render,!1),t;case 1:return t=cf(t.type,!0),t;default:return""}}function Dd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Os:return"Fragment";case Fs:return"Portal";case Rd:return"Profiler";case ap:return"StrictMode";case Pd:return"Suspense";case Ld:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case v_:return(t.displayName||"Context")+".Consumer";case g_:return(t._context.displayName||"Context")+".Provider";case lp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case up:return e=t.displayName||null,e!==null?e:Dd(t.type)||"Memo";case Zi:e=t._payload,t=t._init;try{return Dd(t(e))}catch{}}return null}function LE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Dd(e);case 8:return e===ap?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function __(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function DE(t){var e=__(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function xl(t){t._valueTracker||(t._valueTracker=DE(t))}function x_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=__(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Cu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Nd(t,e){var n=e.checked;return vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ym(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function S_(t,e){e=e.checked,e!=null&&op(t,"checked",e,!1)}function Id(t,e){S_(t,e);var n=Mr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ud(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ud(t,e.type,Mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Km(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ud(t,e,n){(e!=="number"||Cu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Qo=Array.isArray;function Js(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Mr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Fd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return vt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Qm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(Qo(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Mr(n)}}function M_(t,e){var n=Mr(e.value),i=Mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Zm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function E_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Od(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?E_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Sl,w_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Sl=Sl||document.createElement("div"),Sl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Sl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function wa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ia={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},NE=["Webkit","ms","Moz","O"];Object.keys(ia).forEach(function(t){NE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ia[e]=ia[t]})});function T_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ia.hasOwnProperty(t)&&ia[t]?(""+e).trim():e+"px"}function A_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=T_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var IE=vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kd(t,e){if(e){if(IE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Bd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zd=null;function cp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Vd=null,eo=null,to=null;function Jm(t){if(t=rl(t)){if(typeof Vd!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=wc(e),Vd(t.stateNode,t.type,e))}}function b_(t){eo?to?to.push(t):to=[t]:eo=t}function C_(){if(eo){var t=eo,e=to;if(to=eo=null,Jm(t),e)for(t=0;t<e.length;t++)Jm(e[t])}}function R_(t,e){return t(e)}function P_(){}var ff=!1;function L_(t,e,n){if(ff)return t(e,n);ff=!0;try{return R_(t,e,n)}finally{ff=!1,(eo!==null||to!==null)&&(P_(),C_())}}function Ta(t,e){var n=t.stateNode;if(n===null)return null;var i=wc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var Hd=!1;if(Oi)try{var No={};Object.defineProperty(No,"passive",{get:function(){Hd=!0}}),window.addEventListener("test",No,No),window.removeEventListener("test",No,No)}catch{Hd=!1}function UE(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ra=!1,Ru=null,Pu=!1,Gd=null,FE={onError:function(t){ra=!0,Ru=t}};function OE(t,e,n,i,r,s,o,a,l){ra=!1,Ru=null,UE.apply(FE,arguments)}function kE(t,e,n,i,r,s,o,a,l){if(OE.apply(this,arguments),ra){if(ra){var u=Ru;ra=!1,Ru=null}else throw Error(ne(198));Pu||(Pu=!0,Gd=u)}}function hs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function D_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function eg(t){if(hs(t)!==t)throw Error(ne(188))}function BE(t){var e=t.alternate;if(!e){if(e=hs(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return eg(r),t;if(s===i)return eg(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function N_(t){return t=BE(t),t!==null?I_(t):null}function I_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=I_(t);if(e!==null)return e;t=t.sibling}return null}var U_=bn.unstable_scheduleCallback,tg=bn.unstable_cancelCallback,zE=bn.unstable_shouldYield,VE=bn.unstable_requestPaint,St=bn.unstable_now,HE=bn.unstable_getCurrentPriorityLevel,fp=bn.unstable_ImmediatePriority,F_=bn.unstable_UserBlockingPriority,Lu=bn.unstable_NormalPriority,GE=bn.unstable_LowPriority,O_=bn.unstable_IdlePriority,xc=null,hi=null;function WE(t){if(hi&&typeof hi.onCommitFiberRoot=="function")try{hi.onCommitFiberRoot(xc,t,void 0,(t.current.flags&128)===128)}catch{}}var ii=Math.clz32?Math.clz32:XE,jE=Math.log,$E=Math.LN2;function XE(t){return t>>>=0,t===0?32:31-(jE(t)/$E|0)|0}var Ml=64,El=4194304;function Zo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Du(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Zo(a):(s&=o,s!==0&&(i=Zo(s)))}else o=n&~r,o!==0?i=Zo(o):s!==0&&(i=Zo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ii(e),r=1<<n,i|=t[n],e&=~r;return i}function qE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function YE(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ii(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=qE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Wd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function k_(){var t=Ml;return Ml<<=1,!(Ml&4194240)&&(Ml=64),t}function df(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function nl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ii(e),t[e]=n}function KE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ii(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function dp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ii(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var et=0;function B_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var z_,hp,V_,H_,G_,jd=!1,wl=[],ur=null,cr=null,fr=null,Aa=new Map,ba=new Map,tr=[],QE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ng(t,e){switch(t){case"focusin":case"focusout":ur=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":Aa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ba.delete(e.pointerId)}}function Io(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=rl(e),e!==null&&hp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function ZE(t,e,n,i,r){switch(e){case"focusin":return ur=Io(ur,t,e,n,i,r),!0;case"dragenter":return cr=Io(cr,t,e,n,i,r),!0;case"mouseover":return fr=Io(fr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Aa.set(s,Io(Aa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ba.set(s,Io(ba.get(s)||null,t,e,n,i,r)),!0}return!1}function W_(t){var e=qr(t.target);if(e!==null){var n=hs(e);if(n!==null){if(e=n.tag,e===13){if(e=D_(n),e!==null){t.blockedOn=e,G_(t.priority,function(){V_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=$d(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);zd=i,n.target.dispatchEvent(i),zd=null}else return e=rl(n),e!==null&&hp(e),t.blockedOn=n,!1;e.shift()}return!0}function ig(t,e,n){hu(t)&&n.delete(e)}function JE(){jd=!1,ur!==null&&hu(ur)&&(ur=null),cr!==null&&hu(cr)&&(cr=null),fr!==null&&hu(fr)&&(fr=null),Aa.forEach(ig),ba.forEach(ig)}function Uo(t,e){t.blockedOn===e&&(t.blockedOn=null,jd||(jd=!0,bn.unstable_scheduleCallback(bn.unstable_NormalPriority,JE)))}function Ca(t){function e(r){return Uo(r,t)}if(0<wl.length){Uo(wl[0],t);for(var n=1;n<wl.length;n++){var i=wl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ur!==null&&Uo(ur,t),cr!==null&&Uo(cr,t),fr!==null&&Uo(fr,t),Aa.forEach(e),ba.forEach(e),n=0;n<tr.length;n++)i=tr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<tr.length&&(n=tr[0],n.blockedOn===null);)W_(n),n.blockedOn===null&&tr.shift()}var no=Gi.ReactCurrentBatchConfig,Nu=!0;function ew(t,e,n,i){var r=et,s=no.transition;no.transition=null;try{et=1,pp(t,e,n,i)}finally{et=r,no.transition=s}}function tw(t,e,n,i){var r=et,s=no.transition;no.transition=null;try{et=4,pp(t,e,n,i)}finally{et=r,no.transition=s}}function pp(t,e,n,i){if(Nu){var r=$d(t,e,n,i);if(r===null)Mf(t,e,i,Iu,n),ng(t,i);else if(ZE(r,t,e,n,i))i.stopPropagation();else if(ng(t,i),e&4&&-1<QE.indexOf(t)){for(;r!==null;){var s=rl(r);if(s!==null&&z_(s),s=$d(t,e,n,i),s===null&&Mf(t,e,i,Iu,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Mf(t,e,i,null,n)}}var Iu=null;function $d(t,e,n,i){if(Iu=null,t=cp(i),t=qr(t),t!==null)if(e=hs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=D_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Iu=t,null}function j_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(HE()){case fp:return 1;case F_:return 4;case Lu:case GE:return 16;case O_:return 536870912;default:return 16}default:return 16}}var ir=null,mp=null,pu=null;function $_(){if(pu)return pu;var t,e=mp,n=e.length,i,r="value"in ir?ir.value:ir.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return pu=r.slice(t,1<i?1-i:void 0)}function mu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Tl(){return!0}function rg(){return!1}function Pn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Tl:rg,this.isPropagationStopped=rg,this}return vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Tl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Tl)},persist:function(){},isPersistent:Tl}),e}var To={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gp=Pn(To),il=vt({},To,{view:0,detail:0}),nw=Pn(il),hf,pf,Fo,Sc=vt({},il,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fo&&(Fo&&t.type==="mousemove"?(hf=t.screenX-Fo.screenX,pf=t.screenY-Fo.screenY):pf=hf=0,Fo=t),hf)},movementY:function(t){return"movementY"in t?t.movementY:pf}}),sg=Pn(Sc),iw=vt({},Sc,{dataTransfer:0}),rw=Pn(iw),sw=vt({},il,{relatedTarget:0}),mf=Pn(sw),ow=vt({},To,{animationName:0,elapsedTime:0,pseudoElement:0}),aw=Pn(ow),lw=vt({},To,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),uw=Pn(lw),cw=vt({},To,{data:0}),og=Pn(cw),fw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=hw[t])?!!e[t]:!1}function vp(){return pw}var mw=vt({},il,{key:function(t){if(t.key){var e=fw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=mu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vp,charCode:function(t){return t.type==="keypress"?mu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?mu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),gw=Pn(mw),vw=vt({},Sc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ag=Pn(vw),yw=vt({},il,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vp}),_w=Pn(yw),xw=vt({},To,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sw=Pn(xw),Mw=vt({},Sc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ew=Pn(Mw),ww=[9,13,27,32],yp=Oi&&"CompositionEvent"in window,sa=null;Oi&&"documentMode"in document&&(sa=document.documentMode);var Tw=Oi&&"TextEvent"in window&&!sa,X_=Oi&&(!yp||sa&&8<sa&&11>=sa),lg=" ",ug=!1;function q_(t,e){switch(t){case"keyup":return ww.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Y_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ks=!1;function Aw(t,e){switch(t){case"compositionend":return Y_(e);case"keypress":return e.which!==32?null:(ug=!0,lg);case"textInput":return t=e.data,t===lg&&ug?null:t;default:return null}}function bw(t,e){if(ks)return t==="compositionend"||!yp&&q_(t,e)?(t=$_(),pu=mp=ir=null,ks=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return X_&&e.locale!=="ko"?null:e.data;default:return null}}var Cw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Cw[t.type]:e==="textarea"}function K_(t,e,n,i){b_(i),e=Uu(e,"onChange"),0<e.length&&(n=new gp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var oa=null,Ra=null;function Rw(t){ax(t,0)}function Mc(t){var e=Vs(t);if(x_(e))return t}function Pw(t,e){if(t==="change")return e}var Q_=!1;if(Oi){var gf;if(Oi){var vf="oninput"in document;if(!vf){var fg=document.createElement("div");fg.setAttribute("oninput","return;"),vf=typeof fg.oninput=="function"}gf=vf}else gf=!1;Q_=gf&&(!document.documentMode||9<document.documentMode)}function dg(){oa&&(oa.detachEvent("onpropertychange",Z_),Ra=oa=null)}function Z_(t){if(t.propertyName==="value"&&Mc(Ra)){var e=[];K_(e,Ra,t,cp(t)),L_(Rw,e)}}function Lw(t,e,n){t==="focusin"?(dg(),oa=e,Ra=n,oa.attachEvent("onpropertychange",Z_)):t==="focusout"&&dg()}function Dw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Mc(Ra)}function Nw(t,e){if(t==="click")return Mc(e)}function Iw(t,e){if(t==="input"||t==="change")return Mc(e)}function Uw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var si=typeof Object.is=="function"?Object.is:Uw;function Pa(t,e){if(si(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Cd.call(e,r)||!si(t[r],e[r]))return!1}return!0}function hg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pg(t,e){var n=hg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hg(n)}}function J_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?J_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ex(){for(var t=window,e=Cu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Cu(t.document)}return e}function _p(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Fw(t){var e=ex(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&J_(n.ownerDocument.documentElement,n)){if(i!==null&&_p(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=pg(n,s);var o=pg(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ow=Oi&&"documentMode"in document&&11>=document.documentMode,Bs=null,Xd=null,aa=null,qd=!1;function mg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qd||Bs==null||Bs!==Cu(i)||(i=Bs,"selectionStart"in i&&_p(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),aa&&Pa(aa,i)||(aa=i,i=Uu(Xd,"onSelect"),0<i.length&&(e=new gp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Bs)))}function Al(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var zs={animationend:Al("Animation","AnimationEnd"),animationiteration:Al("Animation","AnimationIteration"),animationstart:Al("Animation","AnimationStart"),transitionend:Al("Transition","TransitionEnd")},yf={},tx={};Oi&&(tx=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function Ec(t){if(yf[t])return yf[t];if(!zs[t])return t;var e=zs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in tx)return yf[t]=e[n];return t}var nx=Ec("animationend"),ix=Ec("animationiteration"),rx=Ec("animationstart"),sx=Ec("transitionend"),ox=new Map,gg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cr(t,e){ox.set(t,e),ds(e,[t])}for(var _f=0;_f<gg.length;_f++){var xf=gg[_f],kw=xf.toLowerCase(),Bw=xf[0].toUpperCase()+xf.slice(1);Cr(kw,"on"+Bw)}Cr(nx,"onAnimationEnd");Cr(ix,"onAnimationIteration");Cr(rx,"onAnimationStart");Cr("dblclick","onDoubleClick");Cr("focusin","onFocus");Cr("focusout","onBlur");Cr(sx,"onTransitionEnd");uo("onMouseEnter",["mouseout","mouseover"]);uo("onMouseLeave",["mouseout","mouseover"]);uo("onPointerEnter",["pointerout","pointerover"]);uo("onPointerLeave",["pointerout","pointerover"]);ds("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ds("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ds("onBeforeInput",["compositionend","keypress","textInput","paste"]);ds("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ds("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ds("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jo));function vg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,kE(i,e,void 0,t),t.currentTarget=null}function ax(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;vg(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;vg(r,a,u),s=l}}}if(Pu)throw t=Gd,Pu=!1,Gd=null,t}function ot(t,e){var n=e[Jd];n===void 0&&(n=e[Jd]=new Set);var i=t+"__bubble";n.has(i)||(lx(e,t,2,!1),n.add(i))}function Sf(t,e,n){var i=0;e&&(i|=4),lx(n,t,i,e)}var bl="_reactListening"+Math.random().toString(36).slice(2);function La(t){if(!t[bl]){t[bl]=!0,m_.forEach(function(n){n!=="selectionchange"&&(zw.has(n)||Sf(n,!1,t),Sf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[bl]||(e[bl]=!0,Sf("selectionchange",!1,e))}}function lx(t,e,n,i){switch(j_(e)){case 1:var r=ew;break;case 4:r=tw;break;default:r=pp}n=r.bind(null,e,n,t),r=void 0,!Hd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Mf(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=qr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}L_(function(){var u=s,c=cp(n),f=[];e:{var d=ox.get(t);if(d!==void 0){var p=gp,g=t;switch(t){case"keypress":if(mu(n)===0)break e;case"keydown":case"keyup":p=gw;break;case"focusin":g="focus",p=mf;break;case"focusout":g="blur",p=mf;break;case"beforeblur":case"afterblur":p=mf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=sg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=rw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=_w;break;case nx:case ix:case rx:p=aw;break;case sx:p=Sw;break;case"scroll":p=nw;break;case"wheel":p=Ew;break;case"copy":case"cut":case"paste":p=uw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=ag}var _=(e&4)!==0,m=!_&&t==="scroll",h=_?d!==null?d+"Capture":null:d;_=[];for(var y=u,v;y!==null;){v=y;var x=v.stateNode;if(v.tag===5&&x!==null&&(v=x,h!==null&&(x=Ta(y,h),x!=null&&_.push(Da(y,x,v)))),m)break;y=y.return}0<_.length&&(d=new p(d,g,null,n,c),f.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==zd&&(g=n.relatedTarget||n.fromElement)&&(qr(g)||g[ki]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?qr(g):null,g!==null&&(m=hs(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(_=sg,x="onMouseLeave",h="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(_=ag,x="onPointerLeave",h="onPointerEnter",y="pointer"),m=p==null?d:Vs(p),v=g==null?d:Vs(g),d=new _(x,y+"leave",p,n,c),d.target=m,d.relatedTarget=v,x=null,qr(c)===u&&(_=new _(h,y+"enter",g,n,c),_.target=v,_.relatedTarget=m,x=_),m=x,p&&g)t:{for(_=p,h=g,y=0,v=_;v;v=vs(v))y++;for(v=0,x=h;x;x=vs(x))v++;for(;0<y-v;)_=vs(_),y--;for(;0<v-y;)h=vs(h),v--;for(;y--;){if(_===h||h!==null&&_===h.alternate)break t;_=vs(_),h=vs(h)}_=null}else _=null;p!==null&&yg(f,d,p,_,!1),g!==null&&m!==null&&yg(f,m,g,_,!0)}}e:{if(d=u?Vs(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var E=Pw;else if(cg(d))if(Q_)E=Iw;else{E=Dw;var w=Lw}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(E=Nw);if(E&&(E=E(t,u))){K_(f,E,n,c);break e}w&&w(t,d,u),t==="focusout"&&(w=d._wrapperState)&&w.controlled&&d.type==="number"&&Ud(d,"number",d.value)}switch(w=u?Vs(u):window,t){case"focusin":(cg(w)||w.contentEditable==="true")&&(Bs=w,Xd=u,aa=null);break;case"focusout":aa=Xd=Bs=null;break;case"mousedown":qd=!0;break;case"contextmenu":case"mouseup":case"dragend":qd=!1,mg(f,n,c);break;case"selectionchange":if(Ow)break;case"keydown":case"keyup":mg(f,n,c)}var M;if(yp)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else ks?q_(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(X_&&n.locale!=="ko"&&(ks||A!=="onCompositionStart"?A==="onCompositionEnd"&&ks&&(M=$_()):(ir=c,mp="value"in ir?ir.value:ir.textContent,ks=!0)),w=Uu(u,A),0<w.length&&(A=new og(A,t,null,n,c),f.push({event:A,listeners:w}),M?A.data=M:(M=Y_(n),M!==null&&(A.data=M)))),(M=Tw?Aw(t,n):bw(t,n))&&(u=Uu(u,"onBeforeInput"),0<u.length&&(c=new og("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=M))}ax(f,e)})}function Da(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Uu(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ta(t,n),s!=null&&i.unshift(Da(t,s,r)),s=Ta(t,e),s!=null&&i.push(Da(t,s,r))),t=t.return}return i}function vs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function yg(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Ta(n,s),l!=null&&o.unshift(Da(n,l,a))):r||(l=Ta(n,s),l!=null&&o.push(Da(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Vw=/\r\n?/g,Hw=/\u0000|\uFFFD/g;function _g(t){return(typeof t=="string"?t:""+t).replace(Vw,`
`).replace(Hw,"")}function Cl(t,e,n){if(e=_g(e),_g(t)!==e&&n)throw Error(ne(425))}function Fu(){}var Yd=null,Kd=null;function Qd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Zd=typeof setTimeout=="function"?setTimeout:void 0,Gw=typeof clearTimeout=="function"?clearTimeout:void 0,xg=typeof Promise=="function"?Promise:void 0,Ww=typeof queueMicrotask=="function"?queueMicrotask:typeof xg<"u"?function(t){return xg.resolve(null).then(t).catch(jw)}:Zd;function jw(t){setTimeout(function(){throw t})}function Ef(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ca(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ca(e)}function dr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Sg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ao=Math.random().toString(36).slice(2),di="__reactFiber$"+Ao,Na="__reactProps$"+Ao,ki="__reactContainer$"+Ao,Jd="__reactEvents$"+Ao,$w="__reactListeners$"+Ao,Xw="__reactHandles$"+Ao;function qr(t){var e=t[di];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ki]||n[di]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Sg(t);t!==null;){if(n=t[di])return n;t=Sg(t)}return e}t=n,n=t.parentNode}return null}function rl(t){return t=t[di]||t[ki],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Vs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function wc(t){return t[Na]||null}var eh=[],Hs=-1;function Rr(t){return{current:t}}function lt(t){0>Hs||(t.current=eh[Hs],eh[Hs]=null,Hs--)}function st(t,e){Hs++,eh[Hs]=t.current,t.current=e}var Er={},Kt=Rr(Er),dn=Rr(!1),ss=Er;function co(t,e){var n=t.type.contextTypes;if(!n)return Er;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function hn(t){return t=t.childContextTypes,t!=null}function Ou(){lt(dn),lt(Kt)}function Mg(t,e,n){if(Kt.current!==Er)throw Error(ne(168));st(Kt,e),st(dn,n)}function ux(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,LE(t)||"Unknown",r));return vt({},n,i)}function ku(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Er,ss=Kt.current,st(Kt,t),st(dn,dn.current),!0}function Eg(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=ux(t,e,ss),i.__reactInternalMemoizedMergedChildContext=t,lt(dn),lt(Kt),st(Kt,t)):lt(dn),st(dn,n)}var bi=null,Tc=!1,wf=!1;function cx(t){bi===null?bi=[t]:bi.push(t)}function qw(t){Tc=!0,cx(t)}function Pr(){if(!wf&&bi!==null){wf=!0;var t=0,e=et;try{var n=bi;for(et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}bi=null,Tc=!1}catch(r){throw bi!==null&&(bi=bi.slice(t+1)),U_(fp,Pr),r}finally{et=e,wf=!1}}return null}var Gs=[],Ws=0,Bu=null,zu=0,Un=[],Fn=0,os=null,Ri=1,Pi="";function Br(t,e){Gs[Ws++]=zu,Gs[Ws++]=Bu,Bu=t,zu=e}function fx(t,e,n){Un[Fn++]=Ri,Un[Fn++]=Pi,Un[Fn++]=os,os=t;var i=Ri;t=Pi;var r=32-ii(i)-1;i&=~(1<<r),n+=1;var s=32-ii(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ri=1<<32-ii(e)+r|n<<r|i,Pi=s+t}else Ri=1<<s|n<<r|i,Pi=t}function xp(t){t.return!==null&&(Br(t,1),fx(t,1,0))}function Sp(t){for(;t===Bu;)Bu=Gs[--Ws],Gs[Ws]=null,zu=Gs[--Ws],Gs[Ws]=null;for(;t===os;)os=Un[--Fn],Un[Fn]=null,Pi=Un[--Fn],Un[Fn]=null,Ri=Un[--Fn],Un[Fn]=null}var Tn=null,En=null,ct=!1,Qn=null;function dx(t,e){var n=Vn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function wg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tn=t,En=dr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tn=t,En=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=os!==null?{id:Ri,overflow:Pi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Vn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tn=t,En=null,!0):!1;default:return!1}}function th(t){return(t.mode&1)!==0&&(t.flags&128)===0}function nh(t){if(ct){var e=En;if(e){var n=e;if(!wg(t,e)){if(th(t))throw Error(ne(418));e=dr(n.nextSibling);var i=Tn;e&&wg(t,e)?dx(i,n):(t.flags=t.flags&-4097|2,ct=!1,Tn=t)}}else{if(th(t))throw Error(ne(418));t.flags=t.flags&-4097|2,ct=!1,Tn=t}}}function Tg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tn=t}function Rl(t){if(t!==Tn)return!1;if(!ct)return Tg(t),ct=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Qd(t.type,t.memoizedProps)),e&&(e=En)){if(th(t))throw hx(),Error(ne(418));for(;e;)dx(t,e),e=dr(e.nextSibling)}if(Tg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){En=dr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}En=null}}else En=Tn?dr(t.stateNode.nextSibling):null;return!0}function hx(){for(var t=En;t;)t=dr(t.nextSibling)}function fo(){En=Tn=null,ct=!1}function Mp(t){Qn===null?Qn=[t]:Qn.push(t)}var Yw=Gi.ReactCurrentBatchConfig;function Oo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function Pl(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ag(t){var e=t._init;return e(t._payload)}function px(t){function e(h,y){if(t){var v=h.deletions;v===null?(h.deletions=[y],h.flags|=16):v.push(y)}}function n(h,y){if(!t)return null;for(;y!==null;)e(h,y),y=y.sibling;return null}function i(h,y){for(h=new Map;y!==null;)y.key!==null?h.set(y.key,y):h.set(y.index,y),y=y.sibling;return h}function r(h,y){return h=gr(h,y),h.index=0,h.sibling=null,h}function s(h,y,v){return h.index=v,t?(v=h.alternate,v!==null?(v=v.index,v<y?(h.flags|=2,y):v):(h.flags|=2,y)):(h.flags|=1048576,y)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,y,v,x){return y===null||y.tag!==6?(y=Lf(v,h.mode,x),y.return=h,y):(y=r(y,v),y.return=h,y)}function l(h,y,v,x){var E=v.type;return E===Os?c(h,y,v.props.children,x,v.key):y!==null&&(y.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Zi&&Ag(E)===y.type)?(x=r(y,v.props),x.ref=Oo(h,y,v),x.return=h,x):(x=Mu(v.type,v.key,v.props,null,h.mode,x),x.ref=Oo(h,y,v),x.return=h,x)}function u(h,y,v,x){return y===null||y.tag!==4||y.stateNode.containerInfo!==v.containerInfo||y.stateNode.implementation!==v.implementation?(y=Df(v,h.mode,x),y.return=h,y):(y=r(y,v.children||[]),y.return=h,y)}function c(h,y,v,x,E){return y===null||y.tag!==7?(y=Jr(v,h.mode,x,E),y.return=h,y):(y=r(y,v),y.return=h,y)}function f(h,y,v){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Lf(""+y,h.mode,v),y.return=h,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case _l:return v=Mu(y.type,y.key,y.props,null,h.mode,v),v.ref=Oo(h,null,y),v.return=h,v;case Fs:return y=Df(y,h.mode,v),y.return=h,y;case Zi:var x=y._init;return f(h,x(y._payload),v)}if(Qo(y)||Do(y))return y=Jr(y,h.mode,v,null),y.return=h,y;Pl(h,y)}return null}function d(h,y,v,x){var E=y!==null?y.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return E!==null?null:a(h,y,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case _l:return v.key===E?l(h,y,v,x):null;case Fs:return v.key===E?u(h,y,v,x):null;case Zi:return E=v._init,d(h,y,E(v._payload),x)}if(Qo(v)||Do(v))return E!==null?null:c(h,y,v,x,null);Pl(h,v)}return null}function p(h,y,v,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(v)||null,a(y,h,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case _l:return h=h.get(x.key===null?v:x.key)||null,l(y,h,x,E);case Fs:return h=h.get(x.key===null?v:x.key)||null,u(y,h,x,E);case Zi:var w=x._init;return p(h,y,v,w(x._payload),E)}if(Qo(x)||Do(x))return h=h.get(v)||null,c(y,h,x,E,null);Pl(y,x)}return null}function g(h,y,v,x){for(var E=null,w=null,M=y,A=y=0,S=null;M!==null&&A<v.length;A++){M.index>A?(S=M,M=null):S=M.sibling;var C=d(h,M,v[A],x);if(C===null){M===null&&(M=S);break}t&&M&&C.alternate===null&&e(h,M),y=s(C,y,A),w===null?E=C:w.sibling=C,w=C,M=S}if(A===v.length)return n(h,M),ct&&Br(h,A),E;if(M===null){for(;A<v.length;A++)M=f(h,v[A],x),M!==null&&(y=s(M,y,A),w===null?E=M:w.sibling=M,w=M);return ct&&Br(h,A),E}for(M=i(h,M);A<v.length;A++)S=p(M,h,A,v[A],x),S!==null&&(t&&S.alternate!==null&&M.delete(S.key===null?A:S.key),y=s(S,y,A),w===null?E=S:w.sibling=S,w=S);return t&&M.forEach(function(U){return e(h,U)}),ct&&Br(h,A),E}function _(h,y,v,x){var E=Do(v);if(typeof E!="function")throw Error(ne(150));if(v=E.call(v),v==null)throw Error(ne(151));for(var w=E=null,M=y,A=y=0,S=null,C=v.next();M!==null&&!C.done;A++,C=v.next()){M.index>A?(S=M,M=null):S=M.sibling;var U=d(h,M,C.value,x);if(U===null){M===null&&(M=S);break}t&&M&&U.alternate===null&&e(h,M),y=s(U,y,A),w===null?E=U:w.sibling=U,w=U,M=S}if(C.done)return n(h,M),ct&&Br(h,A),E;if(M===null){for(;!C.done;A++,C=v.next())C=f(h,C.value,x),C!==null&&(y=s(C,y,A),w===null?E=C:w.sibling=C,w=C);return ct&&Br(h,A),E}for(M=i(h,M);!C.done;A++,C=v.next())C=p(M,h,A,C.value,x),C!==null&&(t&&C.alternate!==null&&M.delete(C.key===null?A:C.key),y=s(C,y,A),w===null?E=C:w.sibling=C,w=C);return t&&M.forEach(function(L){return e(h,L)}),ct&&Br(h,A),E}function m(h,y,v,x){if(typeof v=="object"&&v!==null&&v.type===Os&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case _l:e:{for(var E=v.key,w=y;w!==null;){if(w.key===E){if(E=v.type,E===Os){if(w.tag===7){n(h,w.sibling),y=r(w,v.props.children),y.return=h,h=y;break e}}else if(w.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Zi&&Ag(E)===w.type){n(h,w.sibling),y=r(w,v.props),y.ref=Oo(h,w,v),y.return=h,h=y;break e}n(h,w);break}else e(h,w);w=w.sibling}v.type===Os?(y=Jr(v.props.children,h.mode,x,v.key),y.return=h,h=y):(x=Mu(v.type,v.key,v.props,null,h.mode,x),x.ref=Oo(h,y,v),x.return=h,h=x)}return o(h);case Fs:e:{for(w=v.key;y!==null;){if(y.key===w)if(y.tag===4&&y.stateNode.containerInfo===v.containerInfo&&y.stateNode.implementation===v.implementation){n(h,y.sibling),y=r(y,v.children||[]),y.return=h,h=y;break e}else{n(h,y);break}else e(h,y);y=y.sibling}y=Df(v,h.mode,x),y.return=h,h=y}return o(h);case Zi:return w=v._init,m(h,y,w(v._payload),x)}if(Qo(v))return g(h,y,v,x);if(Do(v))return _(h,y,v,x);Pl(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,y!==null&&y.tag===6?(n(h,y.sibling),y=r(y,v),y.return=h,h=y):(n(h,y),y=Lf(v,h.mode,x),y.return=h,h=y),o(h)):n(h,y)}return m}var ho=px(!0),mx=px(!1),Vu=Rr(null),Hu=null,js=null,Ep=null;function wp(){Ep=js=Hu=null}function Tp(t){var e=Vu.current;lt(Vu),t._currentValue=e}function ih(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function io(t,e){Hu=t,Ep=js=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(fn=!0),t.firstContext=null)}function Gn(t){var e=t._currentValue;if(Ep!==t)if(t={context:t,memoizedValue:e,next:null},js===null){if(Hu===null)throw Error(ne(308));js=t,Hu.dependencies={lanes:0,firstContext:t}}else js=js.next=t;return e}var Yr=null;function Ap(t){Yr===null?Yr=[t]:Yr.push(t)}function gx(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Ap(e)):(n.next=r.next,r.next=n),e.interleaved=n,Bi(t,i)}function Bi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ji=!1;function bp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ii(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function hr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Bi(t,n)}return r=i.interleaved,r===null?(e.next=e,Ap(i)):(e.next=r.next,r.next=e),i.interleaved=e,Bi(t,n)}function gu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,dp(t,n)}}function bg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Gu(t,e,n,i){var r=t.updateQueue;Ji=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,_=a;switch(d=e,p=n,_.tag){case 1:if(g=_.payload,typeof g=="function"){f=g.call(p,f,d);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,d=typeof g=="function"?g.call(p,f,d):g,d==null)break e;f=vt({},f,d);break e;case 2:Ji=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ls|=o,t.lanes=o,t.memoizedState=f}}function Cg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var sl={},pi=Rr(sl),Ia=Rr(sl),Ua=Rr(sl);function Kr(t){if(t===sl)throw Error(ne(174));return t}function Cp(t,e){switch(st(Ua,e),st(Ia,t),st(pi,sl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Od(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Od(e,t)}lt(pi),st(pi,e)}function po(){lt(pi),lt(Ia),lt(Ua)}function yx(t){Kr(Ua.current);var e=Kr(pi.current),n=Od(e,t.type);e!==n&&(st(Ia,t),st(pi,n))}function Rp(t){Ia.current===t&&(lt(pi),lt(Ia))}var pt=Rr(0);function Wu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Tf=[];function Pp(){for(var t=0;t<Tf.length;t++)Tf[t]._workInProgressVersionPrimary=null;Tf.length=0}var vu=Gi.ReactCurrentDispatcher,Af=Gi.ReactCurrentBatchConfig,as=0,gt=null,Ct=null,Ut=null,ju=!1,la=!1,Fa=0,Kw=0;function Wt(){throw Error(ne(321))}function Lp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!si(t[n],e[n]))return!1;return!0}function Dp(t,e,n,i,r,s){if(as=s,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vu.current=t===null||t.memoizedState===null?eT:tT,t=n(i,r),la){s=0;do{if(la=!1,Fa=0,25<=s)throw Error(ne(301));s+=1,Ut=Ct=null,e.updateQueue=null,vu.current=nT,t=n(i,r)}while(la)}if(vu.current=$u,e=Ct!==null&&Ct.next!==null,as=0,Ut=Ct=gt=null,ju=!1,e)throw Error(ne(300));return t}function Np(){var t=Fa!==0;return Fa=0,t}function ui(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?gt.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function Wn(){if(Ct===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=Ut===null?gt.memoizedState:Ut.next;if(e!==null)Ut=e,Ct=t;else{if(t===null)throw Error(ne(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Ut===null?gt.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function Oa(t,e){return typeof e=="function"?e(t):e}function bf(t){var e=Wn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=Ct,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((as&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,gt.lanes|=c,ls|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,si(i,e.memoizedState)||(fn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,gt.lanes|=s,ls|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Cf(t){var e=Wn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);si(s,e.memoizedState)||(fn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function _x(){}function xx(t,e){var n=gt,i=Wn(),r=e(),s=!si(i.memoizedState,r);if(s&&(i.memoizedState=r,fn=!0),i=i.queue,Ip(Ex.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(n.flags|=2048,ka(9,Mx.bind(null,n,i,r,e),void 0,null),Ft===null)throw Error(ne(349));as&30||Sx(n,e,r)}return r}function Sx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Mx(t,e,n,i){e.value=n,e.getSnapshot=i,wx(e)&&Tx(t)}function Ex(t,e,n){return n(function(){wx(e)&&Tx(t)})}function wx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!si(t,n)}catch{return!0}}function Tx(t){var e=Bi(t,1);e!==null&&ri(e,t,1,-1)}function Rg(t){var e=ui();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:t},e.queue=t,t=t.dispatch=Jw.bind(null,gt,t),[e.memoizedState,t]}function ka(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Ax(){return Wn().memoizedState}function yu(t,e,n,i){var r=ui();gt.flags|=t,r.memoizedState=ka(1|e,n,void 0,i===void 0?null:i)}function Ac(t,e,n,i){var r=Wn();i=i===void 0?null:i;var s=void 0;if(Ct!==null){var o=Ct.memoizedState;if(s=o.destroy,i!==null&&Lp(i,o.deps)){r.memoizedState=ka(e,n,s,i);return}}gt.flags|=t,r.memoizedState=ka(1|e,n,s,i)}function Pg(t,e){return yu(8390656,8,t,e)}function Ip(t,e){return Ac(2048,8,t,e)}function bx(t,e){return Ac(4,2,t,e)}function Cx(t,e){return Ac(4,4,t,e)}function Rx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Px(t,e,n){return n=n!=null?n.concat([t]):null,Ac(4,4,Rx.bind(null,e,t),n)}function Up(){}function Lx(t,e){var n=Wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Lp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Dx(t,e){var n=Wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Lp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Nx(t,e,n){return as&21?(si(n,e)||(n=k_(),gt.lanes|=n,ls|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,fn=!0),t.memoizedState=n)}function Qw(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var i=Af.transition;Af.transition={};try{t(!1),e()}finally{et=n,Af.transition=i}}function Ix(){return Wn().memoizedState}function Zw(t,e,n){var i=mr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Ux(t))Fx(e,n);else if(n=gx(t,e,n,i),n!==null){var r=on();ri(n,t,i,r),Ox(n,e,i)}}function Jw(t,e,n){var i=mr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ux(t))Fx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,si(a,o)){var l=e.interleaved;l===null?(r.next=r,Ap(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=gx(t,e,r,i),n!==null&&(r=on(),ri(n,t,i,r),Ox(n,e,i))}}function Ux(t){var e=t.alternate;return t===gt||e!==null&&e===gt}function Fx(t,e){la=ju=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ox(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,dp(t,n)}}var $u={readContext:Gn,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useInsertionEffect:Wt,useLayoutEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useMutableSource:Wt,useSyncExternalStore:Wt,useId:Wt,unstable_isNewReconciler:!1},eT={readContext:Gn,useCallback:function(t,e){return ui().memoizedState=[t,e===void 0?null:e],t},useContext:Gn,useEffect:Pg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,yu(4194308,4,Rx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return yu(4194308,4,t,e)},useInsertionEffect:function(t,e){return yu(4,2,t,e)},useMemo:function(t,e){var n=ui();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ui();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Zw.bind(null,gt,t),[i.memoizedState,t]},useRef:function(t){var e=ui();return t={current:t},e.memoizedState=t},useState:Rg,useDebugValue:Up,useDeferredValue:function(t){return ui().memoizedState=t},useTransition:function(){var t=Rg(!1),e=t[0];return t=Qw.bind(null,t[1]),ui().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=gt,r=ui();if(ct){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Ft===null)throw Error(ne(349));as&30||Sx(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Pg(Ex.bind(null,i,s,t),[t]),i.flags|=2048,ka(9,Mx.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ui(),e=Ft.identifierPrefix;if(ct){var n=Pi,i=Ri;n=(i&~(1<<32-ii(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Fa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Kw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},tT={readContext:Gn,useCallback:Lx,useContext:Gn,useEffect:Ip,useImperativeHandle:Px,useInsertionEffect:bx,useLayoutEffect:Cx,useMemo:Dx,useReducer:bf,useRef:Ax,useState:function(){return bf(Oa)},useDebugValue:Up,useDeferredValue:function(t){var e=Wn();return Nx(e,Ct.memoizedState,t)},useTransition:function(){var t=bf(Oa)[0],e=Wn().memoizedState;return[t,e]},useMutableSource:_x,useSyncExternalStore:xx,useId:Ix,unstable_isNewReconciler:!1},nT={readContext:Gn,useCallback:Lx,useContext:Gn,useEffect:Ip,useImperativeHandle:Px,useInsertionEffect:bx,useLayoutEffect:Cx,useMemo:Dx,useReducer:Cf,useRef:Ax,useState:function(){return Cf(Oa)},useDebugValue:Up,useDeferredValue:function(t){var e=Wn();return Ct===null?e.memoizedState=t:Nx(e,Ct.memoizedState,t)},useTransition:function(){var t=Cf(Oa)[0],e=Wn().memoizedState;return[t,e]},useMutableSource:_x,useSyncExternalStore:xx,useId:Ix,unstable_isNewReconciler:!1};function Yn(t,e){if(t&&t.defaultProps){e=vt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function rh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:vt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var bc={isMounted:function(t){return(t=t._reactInternals)?hs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=on(),r=mr(t),s=Ii(i,r);s.payload=e,n!=null&&(s.callback=n),e=hr(t,s,r),e!==null&&(ri(e,t,r,i),gu(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=on(),r=mr(t),s=Ii(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=hr(t,s,r),e!==null&&(ri(e,t,r,i),gu(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=on(),i=mr(t),r=Ii(n,i);r.tag=2,e!=null&&(r.callback=e),e=hr(t,r,i),e!==null&&(ri(e,t,i,n),gu(e,t,i))}};function Lg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Pa(n,i)||!Pa(r,s):!0}function kx(t,e,n){var i=!1,r=Er,s=e.contextType;return typeof s=="object"&&s!==null?s=Gn(s):(r=hn(e)?ss:Kt.current,i=e.contextTypes,s=(i=i!=null)?co(t,r):Er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=bc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Dg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&bc.enqueueReplaceState(e,e.state,null)}function sh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},bp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Gn(s):(s=hn(e)?ss:Kt.current,r.context=co(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(rh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&bc.enqueueReplaceState(r,r.state,null),Gu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function mo(t,e){try{var n="",i=e;do n+=PE(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Rf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function oh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var iT=typeof WeakMap=="function"?WeakMap:Map;function Bx(t,e,n){n=Ii(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){qu||(qu=!0,gh=i),oh(t,e)},n}function zx(t,e,n){n=Ii(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){oh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){oh(t,e),typeof i!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ng(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new iT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=vT.bind(null,t,e,n),e.then(t,t))}function Ig(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ug(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ii(-1,1),e.tag=2,hr(n,e,1))),n.lanes|=1),t)}var rT=Gi.ReactCurrentOwner,fn=!1;function nn(t,e,n,i){e.child=t===null?mx(e,null,n,i):ho(e,t.child,n,i)}function Fg(t,e,n,i,r){n=n.render;var s=e.ref;return io(e,r),i=Dp(t,e,n,i,s,r),n=Np(),t!==null&&!fn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,zi(t,e,r)):(ct&&n&&xp(e),e.flags|=1,nn(t,e,i,r),e.child)}function Og(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Gp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Vx(t,e,s,i,r)):(t=Mu(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Pa,n(o,i)&&t.ref===e.ref)return zi(t,e,r)}return e.flags|=1,t=gr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Vx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Pa(s,i)&&t.ref===e.ref)if(fn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(fn=!0);else return e.lanes=t.lanes,zi(t,e,r)}return ah(t,e,n,i,r)}function Hx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(Xs,Sn),Sn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,st(Xs,Sn),Sn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,st(Xs,Sn),Sn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,st(Xs,Sn),Sn|=i;return nn(t,e,r,n),e.child}function Gx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ah(t,e,n,i,r){var s=hn(n)?ss:Kt.current;return s=co(e,s),io(e,r),n=Dp(t,e,n,i,s,r),i=Np(),t!==null&&!fn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,zi(t,e,r)):(ct&&i&&xp(e),e.flags|=1,nn(t,e,n,r),e.child)}function kg(t,e,n,i,r){if(hn(n)){var s=!0;ku(e)}else s=!1;if(io(e,r),e.stateNode===null)_u(t,e),kx(e,n,i),sh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Gn(u):(u=hn(n)?ss:Kt.current,u=co(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Dg(e,o,i,u),Ji=!1;var d=e.memoizedState;o.state=d,Gu(e,i,o,r),l=e.memoizedState,a!==i||d!==l||dn.current||Ji?(typeof c=="function"&&(rh(e,n,c,i),l=e.memoizedState),(a=Ji||Lg(e,n,a,i,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,vx(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Yn(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Gn(l):(l=hn(n)?ss:Kt.current,l=co(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Dg(e,o,i,l),Ji=!1,d=e.memoizedState,o.state=d,Gu(e,i,o,r);var g=e.memoizedState;a!==f||d!==g||dn.current||Ji?(typeof p=="function"&&(rh(e,n,p,i),g=e.memoizedState),(u=Ji||Lg(e,n,u,i,d,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return lh(t,e,n,i,s,r)}function lh(t,e,n,i,r,s){Gx(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Eg(e,n,!1),zi(t,e,s);i=e.stateNode,rT.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ho(e,t.child,null,s),e.child=ho(e,null,a,s)):nn(t,e,a,s),e.memoizedState=i.state,r&&Eg(e,n,!0),e.child}function Wx(t){var e=t.stateNode;e.pendingContext?Mg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Mg(t,e.context,!1),Cp(t,e.containerInfo)}function Bg(t,e,n,i,r){return fo(),Mp(r),e.flags|=256,nn(t,e,n,i),e.child}var uh={dehydrated:null,treeContext:null,retryLane:0};function ch(t){return{baseLanes:t,cachePool:null,transitions:null}}function jx(t,e,n){var i=e.pendingProps,r=pt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),st(pt,r&1),t===null)return nh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Pc(o,i,0,null),t=Jr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ch(n),e.memoizedState=uh,t):Fp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return sT(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=gr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=gr(a,s):(s=Jr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?ch(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=uh,i}return s=t.child,t=s.sibling,i=gr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Fp(t,e){return e=Pc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ll(t,e,n,i){return i!==null&&Mp(i),ho(e,t.child,null,n),t=Fp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function sT(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Rf(Error(ne(422))),Ll(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Pc({mode:"visible",children:i.children},r,0,null),s=Jr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ho(e,t.child,null,o),e.child.memoizedState=ch(o),e.memoizedState=uh,s);if(!(e.mode&1))return Ll(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=Rf(s,i,void 0),Ll(t,e,o,i)}if(a=(o&t.childLanes)!==0,fn||a){if(i=Ft,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Bi(t,r),ri(i,t,r,-1))}return Hp(),i=Rf(Error(ne(421))),Ll(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=yT.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,En=dr(r.nextSibling),Tn=e,ct=!0,Qn=null,t!==null&&(Un[Fn++]=Ri,Un[Fn++]=Pi,Un[Fn++]=os,Ri=t.id,Pi=t.overflow,os=e),e=Fp(e,i.children),e.flags|=4096,e)}function zg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ih(t.return,e,n)}function Pf(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function $x(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(nn(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zg(t,n,e);else if(t.tag===19)zg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(st(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Wu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Pf(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Wu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Pf(e,!0,n,null,s);break;case"together":Pf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function _u(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function zi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ls|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=gr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=gr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function oT(t,e,n){switch(e.tag){case 3:Wx(e),fo();break;case 5:yx(e);break;case 1:hn(e.type)&&ku(e);break;case 4:Cp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(Vu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?jx(t,e,n):(st(pt,pt.current&1),t=zi(t,e,n),t!==null?t.sibling:null);st(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return $x(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,Hx(t,e,n)}return zi(t,e,n)}var Xx,fh,qx,Yx;Xx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fh=function(){};qx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Kr(pi.current);var s=null;switch(n){case"input":r=Nd(t,r),i=Nd(t,i),s=[];break;case"select":r=vt({},r,{value:void 0}),i=vt({},i,{value:void 0}),s=[];break;case"textarea":r=Fd(t,r),i=Fd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Fu)}kd(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ea.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ea.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ot("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Yx=function(t,e,n,i){n!==i&&(e.flags|=4)};function ko(t,e){if(!ct)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function aT(t,e,n){var i=e.pendingProps;switch(Sp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return hn(e.type)&&Ou(),jt(e),null;case 3:return i=e.stateNode,po(),lt(dn),lt(Kt),Pp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Rl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qn!==null&&(_h(Qn),Qn=null))),fh(t,e),jt(e),null;case 5:Rp(e);var r=Kr(Ua.current);if(n=e.type,t!==null&&e.stateNode!=null)qx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return jt(e),null}if(t=Kr(pi.current),Rl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[di]=e,i[Na]=s,t=(e.mode&1)!==0,n){case"dialog":ot("cancel",i),ot("close",i);break;case"iframe":case"object":case"embed":ot("load",i);break;case"video":case"audio":for(r=0;r<Jo.length;r++)ot(Jo[r],i);break;case"source":ot("error",i);break;case"img":case"image":case"link":ot("error",i),ot("load",i);break;case"details":ot("toggle",i);break;case"input":Ym(i,s),ot("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ot("invalid",i);break;case"textarea":Qm(i,s),ot("invalid",i)}kd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Cl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Cl(i.textContent,a,t),r=["children",""+a]):Ea.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ot("scroll",i)}switch(n){case"input":xl(i),Km(i,s,!0);break;case"textarea":xl(i),Zm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Fu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=E_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[di]=e,t[Na]=i,Xx(t,e,!1,!1),e.stateNode=t;e:{switch(o=Bd(n,i),n){case"dialog":ot("cancel",t),ot("close",t),r=i;break;case"iframe":case"object":case"embed":ot("load",t),r=i;break;case"video":case"audio":for(r=0;r<Jo.length;r++)ot(Jo[r],t);r=i;break;case"source":ot("error",t),r=i;break;case"img":case"image":case"link":ot("error",t),ot("load",t),r=i;break;case"details":ot("toggle",t),r=i;break;case"input":Ym(t,i),r=Nd(t,i),ot("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=vt({},i,{value:void 0}),ot("invalid",t);break;case"textarea":Qm(t,i),r=Fd(t,i),ot("invalid",t);break;default:r=i}kd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?A_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&w_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&wa(t,l):typeof l=="number"&&wa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ea.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ot("scroll",t):l!=null&&op(t,s,l,o))}switch(n){case"input":xl(t),Km(t,i,!1);break;case"textarea":xl(t),Zm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Mr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Js(t,!!i.multiple,s,!1):i.defaultValue!=null&&Js(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Fu)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(t&&e.stateNode!=null)Yx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=Kr(Ua.current),Kr(pi.current),Rl(e)){if(i=e.stateNode,n=e.memoizedProps,i[di]=e,(s=i.nodeValue!==n)&&(t=Tn,t!==null))switch(t.tag){case 3:Cl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Cl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[di]=e,e.stateNode=i}return jt(e),null;case 13:if(lt(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ct&&En!==null&&e.mode&1&&!(e.flags&128))hx(),fo(),e.flags|=98560,s=!1;else if(s=Rl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[di]=e}else fo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),s=!1}else Qn!==null&&(_h(Qn),Qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?Rt===0&&(Rt=3):Hp())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return po(),fh(t,e),t===null&&La(e.stateNode.containerInfo),jt(e),null;case 10:return Tp(e.type._context),jt(e),null;case 17:return hn(e.type)&&Ou(),jt(e),null;case 19:if(lt(pt),s=e.memoizedState,s===null)return jt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ko(s,!1);else{if(Rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Wu(t),o!==null){for(e.flags|=128,ko(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return st(pt,pt.current&1|2),e.child}t=t.sibling}s.tail!==null&&St()>go&&(e.flags|=128,i=!0,ko(s,!1),e.lanes=4194304)}else{if(!i)if(t=Wu(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ko(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ct)return jt(e),null}else 2*St()-s.renderingStartTime>go&&n!==1073741824&&(e.flags|=128,i=!0,ko(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=St(),e.sibling=null,n=pt.current,st(pt,i?n&1|2:n&1),e):(jt(e),null);case 22:case 23:return Vp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Sn&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function lT(t,e){switch(Sp(e),e.tag){case 1:return hn(e.type)&&Ou(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return po(),lt(dn),lt(Kt),Pp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Rp(e),null;case 13:if(lt(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));fo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return lt(pt),null;case 4:return po(),null;case 10:return Tp(e.type._context),null;case 22:case 23:return Vp(),null;case 24:return null;default:return null}}var Dl=!1,Yt=!1,uT=typeof WeakSet=="function"?WeakSet:Set,ve=null;function $s(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){_t(t,e,i)}else n.current=null}function dh(t,e,n){try{n()}catch(i){_t(t,e,i)}}var Vg=!1;function cT(t,e){if(Yd=Nu,t=ex(),_p(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kd={focusedElem:t,selectionRange:n},Nu=!1,ve=e;ve!==null;)if(e=ve,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ve=t;else for(;ve!==null;){e=ve;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,h=e.stateNode,y=h.getSnapshotBeforeUpdate(e.elementType===e.type?_:Yn(e.type,_),m);h.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(x){_t(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,ve=t;break}ve=e.return}return g=Vg,Vg=!1,g}function ua(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&dh(e,n,s)}r=r.next}while(r!==i)}}function Cc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function hh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Kx(t){var e=t.alternate;e!==null&&(t.alternate=null,Kx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[di],delete e[Na],delete e[Jd],delete e[$w],delete e[Xw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Qx(t){return t.tag===5||t.tag===3||t.tag===4}function Hg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Qx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ph(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Fu));else if(i!==4&&(t=t.child,t!==null))for(ph(t,e,n),t=t.sibling;t!==null;)ph(t,e,n),t=t.sibling}function mh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(mh(t,e,n),t=t.sibling;t!==null;)mh(t,e,n),t=t.sibling}var Bt=null,Kn=!1;function Wi(t,e,n){for(n=n.child;n!==null;)Zx(t,e,n),n=n.sibling}function Zx(t,e,n){if(hi&&typeof hi.onCommitFiberUnmount=="function")try{hi.onCommitFiberUnmount(xc,n)}catch{}switch(n.tag){case 5:Yt||$s(n,e);case 6:var i=Bt,r=Kn;Bt=null,Wi(t,e,n),Bt=i,Kn=r,Bt!==null&&(Kn?(t=Bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Bt.removeChild(n.stateNode));break;case 18:Bt!==null&&(Kn?(t=Bt,n=n.stateNode,t.nodeType===8?Ef(t.parentNode,n):t.nodeType===1&&Ef(t,n),Ca(t)):Ef(Bt,n.stateNode));break;case 4:i=Bt,r=Kn,Bt=n.stateNode.containerInfo,Kn=!0,Wi(t,e,n),Bt=i,Kn=r;break;case 0:case 11:case 14:case 15:if(!Yt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&dh(n,e,o),r=r.next}while(r!==i)}Wi(t,e,n);break;case 1:if(!Yt&&($s(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){_t(n,e,a)}Wi(t,e,n);break;case 21:Wi(t,e,n);break;case 22:n.mode&1?(Yt=(i=Yt)||n.memoizedState!==null,Wi(t,e,n),Yt=i):Wi(t,e,n);break;default:Wi(t,e,n)}}function Gg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new uT),e.forEach(function(i){var r=_T.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function jn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Bt=a.stateNode,Kn=!1;break e;case 3:Bt=a.stateNode.containerInfo,Kn=!0;break e;case 4:Bt=a.stateNode.containerInfo,Kn=!0;break e}a=a.return}if(Bt===null)throw Error(ne(160));Zx(s,o,r),Bt=null,Kn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){_t(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Jx(e,t),e=e.sibling}function Jx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(jn(e,t),li(t),i&4){try{ua(3,t,t.return),Cc(3,t)}catch(_){_t(t,t.return,_)}try{ua(5,t,t.return)}catch(_){_t(t,t.return,_)}}break;case 1:jn(e,t),li(t),i&512&&n!==null&&$s(n,n.return);break;case 5:if(jn(e,t),li(t),i&512&&n!==null&&$s(n,n.return),t.flags&32){var r=t.stateNode;try{wa(r,"")}catch(_){_t(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&S_(r,s),Bd(a,o);var u=Bd(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?A_(r,f):c==="dangerouslySetInnerHTML"?w_(r,f):c==="children"?wa(r,f):op(r,c,f,u)}switch(a){case"input":Id(r,s);break;case"textarea":M_(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Js(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Js(r,!!s.multiple,s.defaultValue,!0):Js(r,!!s.multiple,s.multiple?[]:"",!1))}r[Na]=s}catch(_){_t(t,t.return,_)}}break;case 6:if(jn(e,t),li(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){_t(t,t.return,_)}}break;case 3:if(jn(e,t),li(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ca(e.containerInfo)}catch(_){_t(t,t.return,_)}break;case 4:jn(e,t),li(t);break;case 13:jn(e,t),li(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Bp=St())),i&4&&Gg(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Yt=(u=Yt)||c,jn(e,t),Yt=u):jn(e,t),li(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(ve=t,c=t.child;c!==null;){for(f=ve=c;ve!==null;){switch(d=ve,p=d.child,d.tag){case 0:case 11:case 14:case 15:ua(4,d,d.return);break;case 1:$s(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){_t(i,n,_)}}break;case 5:$s(d,d.return);break;case 22:if(d.memoizedState!==null){jg(f);continue}}p!==null?(p.return=d,ve=p):jg(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=T_("display",o))}catch(_){_t(t,t.return,_)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(_){_t(t,t.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:jn(e,t),li(t),i&4&&Gg(t);break;case 21:break;default:jn(e,t),li(t)}}function li(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Qx(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(wa(r,""),i.flags&=-33);var s=Hg(t);mh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Hg(t);ph(t,a,o);break;default:throw Error(ne(161))}}catch(l){_t(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function fT(t,e,n){ve=t,eS(t)}function eS(t,e,n){for(var i=(t.mode&1)!==0;ve!==null;){var r=ve,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Dl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Yt;a=Dl;var u=Yt;if(Dl=o,(Yt=l)&&!u)for(ve=r;ve!==null;)o=ve,l=o.child,o.tag===22&&o.memoizedState!==null?$g(r):l!==null?(l.return=o,ve=l):$g(r);for(;s!==null;)ve=s,eS(s),s=s.sibling;ve=r,Dl=a,Yt=u}Wg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ve=s):Wg(t)}}function Wg(t){for(;ve!==null;){var e=ve;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Yt||Cc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Yt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Yn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Cg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Cg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Ca(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Yt||e.flags&512&&hh(e)}catch(d){_t(e,e.return,d)}}if(e===t){ve=null;break}if(n=e.sibling,n!==null){n.return=e.return,ve=n;break}ve=e.return}}function jg(t){for(;ve!==null;){var e=ve;if(e===t){ve=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ve=n;break}ve=e.return}}function $g(t){for(;ve!==null;){var e=ve;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Cc(4,e)}catch(l){_t(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){_t(e,r,l)}}var s=e.return;try{hh(e)}catch(l){_t(e,s,l)}break;case 5:var o=e.return;try{hh(e)}catch(l){_t(e,o,l)}}}catch(l){_t(e,e.return,l)}if(e===t){ve=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ve=a;break}ve=e.return}}var dT=Math.ceil,Xu=Gi.ReactCurrentDispatcher,Op=Gi.ReactCurrentOwner,Hn=Gi.ReactCurrentBatchConfig,Ke=0,Ft=null,Tt=null,Vt=0,Sn=0,Xs=Rr(0),Rt=0,Ba=null,ls=0,Rc=0,kp=0,ca=null,cn=null,Bp=0,go=1/0,Ti=null,qu=!1,gh=null,pr=null,Nl=!1,rr=null,Yu=0,fa=0,vh=null,xu=-1,Su=0;function on(){return Ke&6?St():xu!==-1?xu:xu=St()}function mr(t){return t.mode&1?Ke&2&&Vt!==0?Vt&-Vt:Yw.transition!==null?(Su===0&&(Su=k_()),Su):(t=et,t!==0||(t=window.event,t=t===void 0?16:j_(t.type)),t):1}function ri(t,e,n,i){if(50<fa)throw fa=0,vh=null,Error(ne(185));nl(t,n,i),(!(Ke&2)||t!==Ft)&&(t===Ft&&(!(Ke&2)&&(Rc|=n),Rt===4&&nr(t,Vt)),pn(t,i),n===1&&Ke===0&&!(e.mode&1)&&(go=St()+500,Tc&&Pr()))}function pn(t,e){var n=t.callbackNode;YE(t,e);var i=Du(t,t===Ft?Vt:0);if(i===0)n!==null&&tg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&tg(n),e===1)t.tag===0?qw(Xg.bind(null,t)):cx(Xg.bind(null,t)),Ww(function(){!(Ke&6)&&Pr()}),n=null;else{switch(B_(i)){case 1:n=fp;break;case 4:n=F_;break;case 16:n=Lu;break;case 536870912:n=O_;break;default:n=Lu}n=lS(n,tS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function tS(t,e){if(xu=-1,Su=0,Ke&6)throw Error(ne(327));var n=t.callbackNode;if(ro()&&t.callbackNode!==n)return null;var i=Du(t,t===Ft?Vt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ku(t,i);else{e=i;var r=Ke;Ke|=2;var s=iS();(Ft!==t||Vt!==e)&&(Ti=null,go=St()+500,Zr(t,e));do try{mT();break}catch(a){nS(t,a)}while(!0);wp(),Xu.current=s,Ke=r,Tt!==null?e=0:(Ft=null,Vt=0,e=Rt)}if(e!==0){if(e===2&&(r=Wd(t),r!==0&&(i=r,e=yh(t,r))),e===1)throw n=Ba,Zr(t,0),nr(t,i),pn(t,St()),n;if(e===6)nr(t,i);else{if(r=t.current.alternate,!(i&30)&&!hT(r)&&(e=Ku(t,i),e===2&&(s=Wd(t),s!==0&&(i=s,e=yh(t,s))),e===1))throw n=Ba,Zr(t,0),nr(t,i),pn(t,St()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:zr(t,cn,Ti);break;case 3:if(nr(t,i),(i&130023424)===i&&(e=Bp+500-St(),10<e)){if(Du(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){on(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Zd(zr.bind(null,t,cn,Ti),e);break}zr(t,cn,Ti);break;case 4:if(nr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ii(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=St()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*dT(i/1960))-i,10<i){t.timeoutHandle=Zd(zr.bind(null,t,cn,Ti),i);break}zr(t,cn,Ti);break;case 5:zr(t,cn,Ti);break;default:throw Error(ne(329))}}}return pn(t,St()),t.callbackNode===n?tS.bind(null,t):null}function yh(t,e){var n=ca;return t.current.memoizedState.isDehydrated&&(Zr(t,e).flags|=256),t=Ku(t,e),t!==2&&(e=cn,cn=n,e!==null&&_h(e)),t}function _h(t){cn===null?cn=t:cn.push.apply(cn,t)}function hT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!si(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function nr(t,e){for(e&=~kp,e&=~Rc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ii(e),i=1<<n;t[n]=-1,e&=~i}}function Xg(t){if(Ke&6)throw Error(ne(327));ro();var e=Du(t,0);if(!(e&1))return pn(t,St()),null;var n=Ku(t,e);if(t.tag!==0&&n===2){var i=Wd(t);i!==0&&(e=i,n=yh(t,i))}if(n===1)throw n=Ba,Zr(t,0),nr(t,e),pn(t,St()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,zr(t,cn,Ti),pn(t,St()),null}function zp(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(go=St()+500,Tc&&Pr())}}function us(t){rr!==null&&rr.tag===0&&!(Ke&6)&&ro();var e=Ke;Ke|=1;var n=Hn.transition,i=et;try{if(Hn.transition=null,et=1,t)return t()}finally{et=i,Hn.transition=n,Ke=e,!(Ke&6)&&Pr()}}function Vp(){Sn=Xs.current,lt(Xs)}function Zr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Gw(n)),Tt!==null)for(n=Tt.return;n!==null;){var i=n;switch(Sp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ou();break;case 3:po(),lt(dn),lt(Kt),Pp();break;case 5:Rp(i);break;case 4:po();break;case 13:lt(pt);break;case 19:lt(pt);break;case 10:Tp(i.type._context);break;case 22:case 23:Vp()}n=n.return}if(Ft=t,Tt=t=gr(t.current,null),Vt=Sn=e,Rt=0,Ba=null,kp=Rc=ls=0,cn=ca=null,Yr!==null){for(e=0;e<Yr.length;e++)if(n=Yr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Yr=null}return t}function nS(t,e){do{var n=Tt;try{if(wp(),vu.current=$u,ju){for(var i=gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ju=!1}if(as=0,Ut=Ct=gt=null,la=!1,Fa=0,Op.current=null,n===null||n.return===null){Rt=1,Ba=e,Tt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Vt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Ig(o);if(p!==null){p.flags&=-257,Ug(p,o,a,s,e),p.mode&1&&Ng(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){Ng(s,u,e),Hp();break e}l=Error(ne(426))}}else if(ct&&a.mode&1){var m=Ig(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Ug(m,o,a,s,e),Mp(mo(l,a));break e}}s=l=mo(l,a),Rt!==4&&(Rt=2),ca===null?ca=[s]:ca.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=Bx(s,l,e);bg(s,h);break e;case 1:a=l;var y=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(pr===null||!pr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=zx(s,a,e);bg(s,x);break e}}s=s.return}while(s!==null)}sS(n)}catch(E){e=E,Tt===n&&n!==null&&(Tt=n=n.return);continue}break}while(!0)}function iS(){var t=Xu.current;return Xu.current=$u,t===null?$u:t}function Hp(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),Ft===null||!(ls&268435455)&&!(Rc&268435455)||nr(Ft,Vt)}function Ku(t,e){var n=Ke;Ke|=2;var i=iS();(Ft!==t||Vt!==e)&&(Ti=null,Zr(t,e));do try{pT();break}catch(r){nS(t,r)}while(!0);if(wp(),Ke=n,Xu.current=i,Tt!==null)throw Error(ne(261));return Ft=null,Vt=0,Rt}function pT(){for(;Tt!==null;)rS(Tt)}function mT(){for(;Tt!==null&&!zE();)rS(Tt)}function rS(t){var e=aS(t.alternate,t,Sn);t.memoizedProps=t.pendingProps,e===null?sS(t):Tt=e,Op.current=null}function sS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=lT(n,e),n!==null){n.flags&=32767,Tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Rt=6,Tt=null;return}}else if(n=aT(n,e,Sn),n!==null){Tt=n;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);Rt===0&&(Rt=5)}function zr(t,e,n){var i=et,r=Hn.transition;try{Hn.transition=null,et=1,gT(t,e,n,i)}finally{Hn.transition=r,et=i}return null}function gT(t,e,n,i){do ro();while(rr!==null);if(Ke&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(KE(t,s),t===Ft&&(Tt=Ft=null,Vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Nl||(Nl=!0,lS(Lu,function(){return ro(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Hn.transition,Hn.transition=null;var o=et;et=1;var a=Ke;Ke|=4,Op.current=null,cT(t,n),Jx(n,t),Fw(Kd),Nu=!!Yd,Kd=Yd=null,t.current=n,fT(n),VE(),Ke=a,et=o,Hn.transition=s}else t.current=n;if(Nl&&(Nl=!1,rr=t,Yu=r),s=t.pendingLanes,s===0&&(pr=null),WE(n.stateNode),pn(t,St()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(qu)throw qu=!1,t=gh,gh=null,t;return Yu&1&&t.tag!==0&&ro(),s=t.pendingLanes,s&1?t===vh?fa++:(fa=0,vh=t):fa=0,Pr(),null}function ro(){if(rr!==null){var t=B_(Yu),e=Hn.transition,n=et;try{if(Hn.transition=null,et=16>t?16:t,rr===null)var i=!1;else{if(t=rr,rr=null,Yu=0,Ke&6)throw Error(ne(331));var r=Ke;for(Ke|=4,ve=t.current;ve!==null;){var s=ve,o=s.child;if(ve.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ve=u;ve!==null;){var c=ve;switch(c.tag){case 0:case 11:case 15:ua(8,c,s)}var f=c.child;if(f!==null)f.return=c,ve=f;else for(;ve!==null;){c=ve;var d=c.sibling,p=c.return;if(Kx(c),c===u){ve=null;break}if(d!==null){d.return=p,ve=d;break}ve=p}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}ve=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ve=o;else e:for(;ve!==null;){if(s=ve,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ua(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,ve=h;break e}ve=s.return}}var y=t.current;for(ve=y;ve!==null;){o=ve;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,ve=v;else e:for(o=y;ve!==null;){if(a=ve,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Cc(9,a)}}catch(E){_t(a,a.return,E)}if(a===o){ve=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,ve=x;break e}ve=a.return}}if(Ke=r,Pr(),hi&&typeof hi.onPostCommitFiberRoot=="function")try{hi.onPostCommitFiberRoot(xc,t)}catch{}i=!0}return i}finally{et=n,Hn.transition=e}}return!1}function qg(t,e,n){e=mo(n,e),e=Bx(t,e,1),t=hr(t,e,1),e=on(),t!==null&&(nl(t,1,e),pn(t,e))}function _t(t,e,n){if(t.tag===3)qg(t,t,n);else for(;e!==null;){if(e.tag===3){qg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(pr===null||!pr.has(i))){t=mo(n,t),t=zx(e,t,1),e=hr(e,t,1),t=on(),e!==null&&(nl(e,1,t),pn(e,t));break}}e=e.return}}function vT(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=on(),t.pingedLanes|=t.suspendedLanes&n,Ft===t&&(Vt&n)===n&&(Rt===4||Rt===3&&(Vt&130023424)===Vt&&500>St()-Bp?Zr(t,0):kp|=n),pn(t,e)}function oS(t,e){e===0&&(t.mode&1?(e=El,El<<=1,!(El&130023424)&&(El=4194304)):e=1);var n=on();t=Bi(t,e),t!==null&&(nl(t,e,n),pn(t,n))}function yT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),oS(t,n)}function _T(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),oS(t,n)}var aS;aS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dn.current)fn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return fn=!1,oT(t,e,n);fn=!!(t.flags&131072)}else fn=!1,ct&&e.flags&1048576&&fx(e,zu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;_u(t,e),t=e.pendingProps;var r=co(e,Kt.current);io(e,n),r=Dp(null,e,i,t,r,n);var s=Np();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,hn(i)?(s=!0,ku(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,bp(e),r.updater=bc,e.stateNode=r,r._reactInternals=e,sh(e,i,t,n),e=lh(null,e,i,!0,s,n)):(e.tag=0,ct&&s&&xp(e),nn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(_u(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ST(i),t=Yn(i,t),r){case 0:e=ah(null,e,i,t,n);break e;case 1:e=kg(null,e,i,t,n);break e;case 11:e=Fg(null,e,i,t,n);break e;case 14:e=Og(null,e,i,Yn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),ah(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),kg(t,e,i,r,n);case 3:e:{if(Wx(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,vx(t,e),Gu(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=mo(Error(ne(423)),e),e=Bg(t,e,i,n,r);break e}else if(i!==r){r=mo(Error(ne(424)),e),e=Bg(t,e,i,n,r);break e}else for(En=dr(e.stateNode.containerInfo.firstChild),Tn=e,ct=!0,Qn=null,n=mx(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fo(),i===r){e=zi(t,e,n);break e}nn(t,e,i,n)}e=e.child}return e;case 5:return yx(e),t===null&&nh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Qd(i,r)?o=null:s!==null&&Qd(i,s)&&(e.flags|=32),Gx(t,e),nn(t,e,o,n),e.child;case 6:return t===null&&nh(e),null;case 13:return jx(t,e,n);case 4:return Cp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ho(e,null,i,n):nn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Fg(t,e,i,r,n);case 7:return nn(t,e,e.pendingProps,n),e.child;case 8:return nn(t,e,e.pendingProps.children,n),e.child;case 12:return nn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,st(Vu,i._currentValue),i._currentValue=o,s!==null)if(si(s.value,o)){if(s.children===r.children&&!dn.current){e=zi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ii(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ih(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ih(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}nn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,io(e,n),r=Gn(r),i=i(r),e.flags|=1,nn(t,e,i,n),e.child;case 14:return i=e.type,r=Yn(i,e.pendingProps),r=Yn(i.type,r),Og(t,e,i,r,n);case 15:return Vx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),_u(t,e),e.tag=1,hn(i)?(t=!0,ku(e)):t=!1,io(e,n),kx(e,i,r),sh(e,i,r,n),lh(null,e,i,!0,t,n);case 19:return $x(t,e,n);case 22:return Hx(t,e,n)}throw Error(ne(156,e.tag))};function lS(t,e){return U_(t,e)}function xT(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(t,e,n,i){return new xT(t,e,n,i)}function Gp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ST(t){if(typeof t=="function")return Gp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===lp)return 11;if(t===up)return 14}return 2}function gr(t,e){var n=t.alternate;return n===null?(n=Vn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Mu(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Gp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Os:return Jr(n.children,r,s,e);case ap:o=8,r|=8;break;case Rd:return t=Vn(12,n,e,r|2),t.elementType=Rd,t.lanes=s,t;case Pd:return t=Vn(13,n,e,r),t.elementType=Pd,t.lanes=s,t;case Ld:return t=Vn(19,n,e,r),t.elementType=Ld,t.lanes=s,t;case y_:return Pc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case g_:o=10;break e;case v_:o=9;break e;case lp:o=11;break e;case up:o=14;break e;case Zi:o=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=Vn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Jr(t,e,n,i){return t=Vn(7,t,i,e),t.lanes=n,t}function Pc(t,e,n,i){return t=Vn(22,t,i,e),t.elementType=y_,t.lanes=n,t.stateNode={isHidden:!1},t}function Lf(t,e,n){return t=Vn(6,t,null,e),t.lanes=n,t}function Df(t,e,n){return e=Vn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function MT(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=df(0),this.expirationTimes=df(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=df(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Wp(t,e,n,i,r,s,o,a,l){return t=new MT(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Vn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bp(s),t}function ET(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function uS(t){if(!t)return Er;t=t._reactInternals;e:{if(hs(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(hn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(hn(n))return ux(t,n,e)}return e}function cS(t,e,n,i,r,s,o,a,l){return t=Wp(n,i,!0,t,r,s,o,a,l),t.context=uS(null),n=t.current,i=on(),r=mr(n),s=Ii(i,r),s.callback=e??null,hr(n,s,r),t.current.lanes=r,nl(t,r,i),pn(t,i),t}function Lc(t,e,n,i){var r=e.current,s=on(),o=mr(r);return n=uS(n),e.context===null?e.context=n:e.pendingContext=n,e=Ii(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=hr(r,e,o),t!==null&&(ri(t,r,o,s),gu(t,r,o)),o}function Qu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Yg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function jp(t,e){Yg(t,e),(t=t.alternate)&&Yg(t,e)}function wT(){return null}var fS=typeof reportError=="function"?reportError:function(t){console.error(t)};function $p(t){this._internalRoot=t}Dc.prototype.render=$p.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));Lc(t,e,null,null)};Dc.prototype.unmount=$p.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;us(function(){Lc(null,t,null,null)}),e[ki]=null}};function Dc(t){this._internalRoot=t}Dc.prototype.unstable_scheduleHydration=function(t){if(t){var e=H_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<tr.length&&e!==0&&e<tr[n].priority;n++);tr.splice(n,0,t),n===0&&W_(t)}};function Xp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Nc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Kg(){}function TT(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Qu(o);s.call(u)}}var o=cS(e,i,t,0,null,!1,!1,"",Kg);return t._reactRootContainer=o,t[ki]=o.current,La(t.nodeType===8?t.parentNode:t),us(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Qu(l);a.call(u)}}var l=Wp(t,0,!1,null,null,!1,!1,"",Kg);return t._reactRootContainer=l,t[ki]=l.current,La(t.nodeType===8?t.parentNode:t),us(function(){Lc(e,l,n,i)}),l}function Ic(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Qu(o);a.call(l)}}Lc(e,o,t,r)}else o=TT(n,e,t,r,i);return Qu(o)}z_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Zo(e.pendingLanes);n!==0&&(dp(e,n|1),pn(e,St()),!(Ke&6)&&(go=St()+500,Pr()))}break;case 13:us(function(){var i=Bi(t,1);if(i!==null){var r=on();ri(i,t,1,r)}}),jp(t,1)}};hp=function(t){if(t.tag===13){var e=Bi(t,134217728);if(e!==null){var n=on();ri(e,t,134217728,n)}jp(t,134217728)}};V_=function(t){if(t.tag===13){var e=mr(t),n=Bi(t,e);if(n!==null){var i=on();ri(n,t,e,i)}jp(t,e)}};H_=function(){return et};G_=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};Vd=function(t,e,n){switch(e){case"input":if(Id(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=wc(i);if(!r)throw Error(ne(90));x_(i),Id(i,r)}}}break;case"textarea":M_(t,n);break;case"select":e=n.value,e!=null&&Js(t,!!n.multiple,e,!1)}};R_=zp;P_=us;var AT={usingClientEntryPoint:!1,Events:[rl,Vs,wc,b_,C_,zp]},Bo={findFiberByHostInstance:qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bT={bundleType:Bo.bundleType,version:Bo.version,rendererPackageName:Bo.rendererPackageName,rendererConfig:Bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=N_(t),t===null?null:t.stateNode},findFiberByHostInstance:Bo.findFiberByHostInstance||wT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Il.isDisabled&&Il.supportsFiber)try{xc=Il.inject(bT),hi=Il}catch{}}Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AT;Rn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xp(e))throw Error(ne(200));return ET(t,e,null,n)};Rn.createRoot=function(t,e){if(!Xp(t))throw Error(ne(299));var n=!1,i="",r=fS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Wp(t,1,!1,null,null,n,!1,i,r),t[ki]=e.current,La(t.nodeType===8?t.parentNode:t),new $p(e)};Rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=N_(e),t=t===null?null:t.stateNode,t};Rn.flushSync=function(t){return us(t)};Rn.hydrate=function(t,e,n){if(!Nc(e))throw Error(ne(200));return Ic(null,t,e,!0,n)};Rn.hydrateRoot=function(t,e,n){if(!Xp(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=fS;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=cS(e,null,t,1,n??null,r,!1,s,o),t[ki]=e.current,La(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Dc(e)};Rn.render=function(t,e,n){if(!Nc(e))throw Error(ne(200));return Ic(null,t,e,!1,n)};Rn.unmountComponentAtNode=function(t){if(!Nc(t))throw Error(ne(40));return t._reactRootContainer?(us(function(){Ic(null,null,t,!1,function(){t._reactRootContainer=null,t[ki]=null})}),!0):!1};Rn.unstable_batchedUpdates=zp;Rn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Nc(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return Ic(t,e,n,!1,i)};Rn.version="18.3.1-next-f1338f8080-20240426";function dS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dS)}catch(t){console.error(t)}}dS(),d_.exports=Rn;var hS=d_.exports,pS,Qg=hS;pS=Qg.createRoot,Qg.hydrateRoot;var qp=al(),Ie=t=>ol(t,qp),Yp=al();Ie.write=t=>ol(t,Yp);var Uc=al();Ie.onStart=t=>ol(t,Uc);var Kp=al();Ie.onFrame=t=>ol(t,Kp);var Qp=al();Ie.onFinish=t=>ol(t,Qp);var so=[];Ie.setTimeout=(t,e)=>{const n=Ie.now()+e,i=()=>{const s=so.findIndex(o=>o.cancel==i);~s&&so.splice(s,1),or-=~s?1:0},r={time:n,handler:t,cancel:i};return so.splice(mS(n),0,r),or+=1,gS(),r};var mS=t=>~(~so.findIndex(e=>e.time>t)||~so.length);Ie.cancel=t=>{Uc.delete(t),Kp.delete(t),Qp.delete(t),qp.delete(t),Yp.delete(t)};Ie.sync=t=>{xh=!0,Ie.batchedUpdates(t),xh=!1};Ie.throttle=t=>{let e;function n(){try{t(...e)}finally{e=null}}function i(...r){e=r,Ie.onStart(n)}return i.handler=t,i.cancel=()=>{Uc.delete(n),e=null},i};var Zp=typeof window<"u"?window.requestAnimationFrame:()=>{};Ie.use=t=>Zp=t;Ie.now=typeof performance<"u"?()=>performance.now():Date.now;Ie.batchedUpdates=t=>t();Ie.catch=console.error;Ie.frameLoop="always";Ie.advance=()=>{Ie.frameLoop!=="demand"?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):yS()};var sr=-1,or=0,xh=!1;function ol(t,e){xh?(e.delete(t),t(0)):(e.add(t),gS())}function gS(){sr<0&&(sr=0,Ie.frameLoop!=="demand"&&Zp(vS))}function CT(){sr=-1}function vS(){~sr&&(Zp(vS),Ie.batchedUpdates(yS))}function yS(){const t=sr;sr=Ie.now();const e=mS(sr);if(e&&(_S(so.splice(0,e),n=>n.handler()),or-=e),!or){CT();return}Uc.flush(),qp.flush(t?Math.min(64,sr-t):16.667),Kp.flush(),Yp.flush(),Qp.flush()}function al(){let t=new Set,e=t;return{add(n){or+=e==t&&!t.has(n)?1:0,t.add(n)},delete(n){return or-=e==t&&t.has(n)?1:0,t.delete(n)},flush(n){e.size&&(t=new Set,or-=e.size,_S(e,i=>i(n)&&t.add(i)),or+=t.size,e=t)}}}function _S(t,e){t.forEach(n=>{try{e(n)}catch(i){Ie.catch(i)}})}var RT=Object.defineProperty,PT=(t,e)=>{for(var n in e)RT(t,n,{get:e[n],enumerable:!0})},oi={};PT(oi,{assign:()=>DT,colors:()=>vr,createStringInterpolator:()=>em,skipAnimation:()=>SS,to:()=>xS,willAdvance:()=>tm});function Sh(){}var LT=(t,e,n)=>Object.defineProperty(t,e,{value:n,writable:!0,configurable:!0}),oe={arr:Array.isArray,obj:t=>!!t&&t.constructor.name==="Object",fun:t=>typeof t=="function",str:t=>typeof t=="string",num:t=>typeof t=="number",und:t=>t===void 0};function Ai(t,e){if(oe.arr(t)){if(!oe.arr(e)||t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}return t===e}var qe=(t,e)=>t.forEach(e);function vi(t,e,n){if(oe.arr(t)){for(let i=0;i<t.length;i++)e.call(n,t[i],`${i}`);return}for(const i in t)t.hasOwnProperty(i)&&e.call(n,t[i],i)}var wn=t=>oe.und(t)?[]:oe.arr(t)?t:[t];function da(t,e){if(t.size){const n=Array.from(t);t.clear(),qe(n,e)}}var ea=(t,...e)=>da(t,n=>n(...e)),Jp=()=>typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),em,xS,vr=null,SS=!1,tm=Sh,DT=t=>{t.to&&(xS=t.to),t.now&&(Ie.now=t.now),t.colors!==void 0&&(vr=t.colors),t.skipAnimation!=null&&(SS=t.skipAnimation),t.createStringInterpolator&&(em=t.createStringInterpolator),t.requestAnimationFrame&&Ie.use(t.requestAnimationFrame),t.batchedUpdates&&(Ie.batchedUpdates=t.batchedUpdates),t.willAdvance&&(tm=t.willAdvance),t.frameLoop&&(Ie.frameLoop=t.frameLoop)},ha=new Set,Bn=[],Nf=[],Zu=0,Fc={get idle(){return!ha.size&&!Bn.length},start(t){Zu>t.priority?(ha.add(t),Ie.onStart(NT)):(MS(t),Ie(Mh))},advance:Mh,sort(t){if(Zu)Ie.onFrame(()=>Fc.sort(t));else{const e=Bn.indexOf(t);~e&&(Bn.splice(e,1),ES(t))}},clear(){Bn=[],ha.clear()}};function NT(){ha.forEach(MS),ha.clear(),Ie(Mh)}function MS(t){Bn.includes(t)||ES(t)}function ES(t){Bn.splice(IT(Bn,e=>e.priority>t.priority),0,t)}function Mh(t){const e=Nf;for(let n=0;n<Bn.length;n++){const i=Bn[n];Zu=i.priority,i.idle||(tm(i),i.advance(t),i.idle||e.push(i))}return Zu=0,Nf=Bn,Nf.length=0,Bn=e,Bn.length>0}function IT(t,e){const n=t.findIndex(e);return n<0?t.length:n}var UT=(t,e,n)=>Math.min(Math.max(n,t),e),FT={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},ni="[-+]?\\d*\\.?\\d+",Ju=ni+"%";function Oc(...t){return"\\(\\s*("+t.join(")\\s*,\\s*(")+")\\s*\\)"}var OT=new RegExp("rgb"+Oc(ni,ni,ni)),kT=new RegExp("rgba"+Oc(ni,ni,ni,ni)),BT=new RegExp("hsl"+Oc(ni,Ju,Ju)),zT=new RegExp("hsla"+Oc(ni,Ju,Ju,ni)),VT=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,HT=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,GT=/^#([0-9a-fA-F]{6})$/,WT=/^#([0-9a-fA-F]{8})$/;function jT(t){let e;return typeof t=="number"?t>>>0===t&&t>=0&&t<=4294967295?t:null:(e=GT.exec(t))?parseInt(e[1]+"ff",16)>>>0:vr&&vr[t]!==void 0?vr[t]:(e=OT.exec(t))?(ys(e[1])<<24|ys(e[2])<<16|ys(e[3])<<8|255)>>>0:(e=kT.exec(t))?(ys(e[1])<<24|ys(e[2])<<16|ys(e[3])<<8|e0(e[4]))>>>0:(e=VT.exec(t))?parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+"ff",16)>>>0:(e=WT.exec(t))?parseInt(e[1],16)>>>0:(e=HT.exec(t))?parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+e[4]+e[4],16)>>>0:(e=BT.exec(t))?(Zg(Jg(e[1]),Ul(e[2]),Ul(e[3]))|255)>>>0:(e=zT.exec(t))?(Zg(Jg(e[1]),Ul(e[2]),Ul(e[3]))|e0(e[4]))>>>0:null}function If(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function Zg(t,e,n){const i=n<.5?n*(1+e):n+e-n*e,r=2*n-i,s=If(r,i,t+1/3),o=If(r,i,t),a=If(r,i,t-1/3);return Math.round(s*255)<<24|Math.round(o*255)<<16|Math.round(a*255)<<8}function ys(t){const e=parseInt(t,10);return e<0?0:e>255?255:e}function Jg(t){return(parseFloat(t)%360+360)%360/360}function e0(t){const e=parseFloat(t);return e<0?0:e>1?255:Math.round(e*255)}function Ul(t){const e=parseFloat(t);return e<0?0:e>100?1:e/100}function t0(t){let e=jT(t);if(e===null)return t;e=e||0;const n=(e&4278190080)>>>24,i=(e&16711680)>>>16,r=(e&65280)>>>8,s=(e&255)/255;return`rgba(${n}, ${i}, ${r}, ${s})`}var za=(t,e,n)=>{if(oe.fun(t))return t;if(oe.arr(t))return za({range:t,output:e,extrapolate:n});if(oe.str(t.output[0]))return em(t);const i=t,r=i.output,s=i.range||[0,1],o=i.extrapolateLeft||i.extrapolate||"extend",a=i.extrapolateRight||i.extrapolate||"extend",l=i.easing||(u=>u);return u=>{const c=XT(u,s);return $T(u,s[c],s[c+1],r[c],r[c+1],l,o,a,i.map)}};function $T(t,e,n,i,r,s,o,a,l){let u=l?l(t):t;if(u<e){if(o==="identity")return u;o==="clamp"&&(u=e)}if(u>n){if(a==="identity")return u;a==="clamp"&&(u=n)}return i===r?i:e===n?t<=e?i:r:(e===-1/0?u=-u:n===1/0?u=u-e:u=(u-e)/(n-e),u=s(u),i===-1/0?u=-u:r===1/0?u=u+i:u=u*(r-i)+i,u)}function XT(t,e){for(var n=1;n<e.length-1&&!(e[n]>=t);++n);return n-1}var qT=(t,e="end")=>n=>{n=e==="end"?Math.min(n,.999):Math.max(n,.001);const i=n*t,r=e==="end"?Math.floor(i):Math.ceil(i);return UT(0,1,r/t)},ec=1.70158,Fl=ec*1.525,n0=ec+1,i0=2*Math.PI/3,r0=2*Math.PI/4.5,Ol=t=>t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,YT={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>1-(1-t)*(1-t),easeInOutQuad:t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2,easeInCubic:t=>t*t*t,easeOutCubic:t=>1-Math.pow(1-t,3),easeInOutCubic:t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,easeInQuart:t=>t*t*t*t,easeOutQuart:t=>1-Math.pow(1-t,4),easeInOutQuart:t=>t<.5?8*t*t*t*t:1-Math.pow(-2*t+2,4)/2,easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>1-Math.pow(1-t,5),easeInOutQuint:t=>t<.5?16*t*t*t*t*t:1-Math.pow(-2*t+2,5)/2,easeInSine:t=>1-Math.cos(t*Math.PI/2),easeOutSine:t=>Math.sin(t*Math.PI/2),easeInOutSine:t=>-(Math.cos(Math.PI*t)-1)/2,easeInExpo:t=>t===0?0:Math.pow(2,10*t-10),easeOutExpo:t=>t===1?1:1-Math.pow(2,-10*t),easeInOutExpo:t=>t===0?0:t===1?1:t<.5?Math.pow(2,20*t-10)/2:(2-Math.pow(2,-20*t+10))/2,easeInCirc:t=>1-Math.sqrt(1-Math.pow(t,2)),easeOutCirc:t=>Math.sqrt(1-Math.pow(t-1,2)),easeInOutCirc:t=>t<.5?(1-Math.sqrt(1-Math.pow(2*t,2)))/2:(Math.sqrt(1-Math.pow(-2*t+2,2))+1)/2,easeInBack:t=>n0*t*t*t-ec*t*t,easeOutBack:t=>1+n0*Math.pow(t-1,3)+ec*Math.pow(t-1,2),easeInOutBack:t=>t<.5?Math.pow(2*t,2)*((Fl+1)*2*t-Fl)/2:(Math.pow(2*t-2,2)*((Fl+1)*(t*2-2)+Fl)+2)/2,easeInElastic:t=>t===0?0:t===1?1:-Math.pow(2,10*t-10)*Math.sin((t*10-10.75)*i0),easeOutElastic:t=>t===0?0:t===1?1:Math.pow(2,-10*t)*Math.sin((t*10-.75)*i0)+1,easeInOutElastic:t=>t===0?0:t===1?1:t<.5?-(Math.pow(2,20*t-10)*Math.sin((20*t-11.125)*r0))/2:Math.pow(2,-20*t+10)*Math.sin((20*t-11.125)*r0)/2+1,easeInBounce:t=>1-Ol(1-t),easeOutBounce:Ol,easeInOutBounce:t=>t<.5?(1-Ol(1-2*t))/2:(1+Ol(2*t-1))/2,steps:qT},Va=Symbol.for("FluidValue.get"),vo=Symbol.for("FluidValue.observers"),On=t=>!!(t&&t[Va]),un=t=>t&&t[Va]?t[Va]():t,s0=t=>t[vo]||null;function KT(t,e){t.eventObserved?t.eventObserved(e):t(e)}function Ha(t,e){const n=t[vo];n&&n.forEach(i=>{KT(i,e)})}var wS=class{constructor(t){if(!t&&!(t=this.get))throw Error("Unknown getter");QT(this,t)}},QT=(t,e)=>TS(t,Va,e);function bo(t,e){if(t[Va]){let n=t[vo];n||TS(t,vo,n=new Set),n.has(e)||(n.add(e),t.observerAdded&&t.observerAdded(n.size,e))}return e}function Ga(t,e){const n=t[vo];if(n&&n.has(e)){const i=n.size-1;i?n.delete(e):t[vo]=null,t.observerRemoved&&t.observerRemoved(i,e)}}var TS=(t,e,n)=>Object.defineProperty(t,e,{value:n,writable:!0,configurable:!0}),Eu=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,ZT=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,o0=new RegExp(`(${Eu.source})(%|[a-z]+)`,"i"),JT=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,kc=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,AS=t=>{const[e,n]=eA(t);if(!e||Jp())return t;const i=window.getComputedStyle(document.documentElement).getPropertyValue(e);if(i)return i.trim();if(n&&n.startsWith("--")){const r=window.getComputedStyle(document.documentElement).getPropertyValue(n);return r||t}else{if(n&&kc.test(n))return AS(n);if(n)return n}return t},eA=t=>{const e=kc.exec(t);if(!e)return[,];const[,n,i]=e;return[n,i]},Uf,tA=(t,e,n,i,r)=>`rgba(${Math.round(e)}, ${Math.round(n)}, ${Math.round(i)}, ${r})`,bS=t=>{Uf||(Uf=vr?new RegExp(`(${Object.keys(vr).join("|")})(?!\\w)`,"g"):/^\b$/);const e=t.output.map(s=>un(s).replace(kc,AS).replace(ZT,t0).replace(Uf,t0)),n=e.map(s=>s.match(Eu).map(Number)),r=n[0].map((s,o)=>n.map(a=>{if(!(o in a))throw Error('The arity of each "output" value must be equal');return a[o]})).map(s=>za({...t,output:s}));return s=>{var l;const o=!o0.test(e[0])&&((l=e.find(u=>o0.test(u)))==null?void 0:l.replace(Eu,""));let a=0;return e[0].replace(Eu,()=>`${r[a++](s)}${o||""}`).replace(JT,tA)}},nm="react-spring: ",CS=t=>{const e=t;let n=!1;if(typeof e!="function")throw new TypeError(`${nm}once requires a function parameter`);return(...i)=>{n||(e(...i),n=!0)}},nA=CS(console.warn);function iA(){nA(`${nm}The "interpolate" function is deprecated in v9 (use "to" instead)`)}var rA=CS(console.warn);function sA(){rA(`${nm}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`)}function Bc(t){return oe.str(t)&&(t[0]=="#"||/\d/.test(t)||!Jp()&&kc.test(t)||t in(vr||{}))}var im=Jp()?B.useEffect:B.useLayoutEffect,oA=()=>{const t=B.useRef(!1);return im(()=>(t.current=!0,()=>{t.current=!1}),[]),t};function RS(){const t=B.useState()[1],e=oA();return()=>{e.current&&t(Math.random())}}function aA(t,e){const[n]=B.useState(()=>({inputs:e,result:t()})),i=B.useRef(),r=i.current;let s=r;return s?e&&s.inputs&&lA(e,s.inputs)||(s={inputs:e,result:t()}):s=n,B.useEffect(()=>{i.current=s,r==n&&(n.inputs=n.result=void 0)},[s]),s.result}function lA(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}var PS=t=>B.useEffect(t,uA),uA=[];function a0(t){const e=B.useRef();return B.useEffect(()=>{e.current=t}),e.current}var Wa=Symbol.for("Animated:node"),cA=t=>!!t&&t[Wa]===t,ci=t=>t&&t[Wa],rm=(t,e)=>LT(t,Wa,e),zc=t=>t&&t[Wa]&&t[Wa].getPayload(),LS=class{constructor(){rm(this,this)}getPayload(){return this.payload||[]}},ll=class extends LS{constructor(t){super(),this._value=t,this.done=!0,this.durationProgress=0,oe.num(this._value)&&(this.lastPosition=this._value)}static create(t){return new ll(t)}getPayload(){return[this]}getValue(){return this._value}setValue(t,e){return oe.num(t)&&(this.lastPosition=t,e&&(t=Math.round(t/e)*e,this.done&&(this.lastPosition=t))),this._value===t?!1:(this._value=t,!0)}reset(){const{done:t}=this;this.done=!1,oe.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,t&&(this.lastVelocity=null),this.v0=null)}},ja=class extends ll{constructor(t){super(0),this._string=null,this._toString=za({output:[t,t]})}static create(t){return new ja(t)}getValue(){const t=this._string;return t??(this._string=this._toString(this._value))}setValue(t){if(oe.str(t)){if(t==this._string)return!1;this._string=t,this._value=1}else if(super.setValue(t))this._string=null;else return!1;return!0}reset(t){t&&(this._toString=za({output:[this.getValue(),t]})),this._value=0,super.reset()}},tc={dependencies:null},Vc=class extends LS{constructor(t){super(),this.source=t,this.setValue(t)}getValue(t){const e={};return vi(this.source,(n,i)=>{cA(n)?e[i]=n.getValue(t):On(n)?e[i]=un(n):t||(e[i]=n)}),e}setValue(t){this.source=t,this.payload=this._makePayload(t)}reset(){this.payload&&qe(this.payload,t=>t.reset())}_makePayload(t){if(t){const e=new Set;return vi(t,this._addToPayload,e),Array.from(e)}}_addToPayload(t){tc.dependencies&&On(t)&&tc.dependencies.add(t);const e=zc(t);e&&qe(e,n=>this.add(n))}},DS=class extends Vc{constructor(t){super(t)}static create(t){return new DS(t)}getValue(){return this.source.map(t=>t.getValue())}setValue(t){const e=this.getPayload();return t.length==e.length?e.map((n,i)=>n.setValue(t[i])).some(Boolean):(super.setValue(t.map(fA)),!0)}};function fA(t){return(Bc(t)?ja:ll).create(t)}function Eh(t){const e=ci(t);return e?e.constructor:oe.arr(t)?DS:Bc(t)?ja:ll}var l0=(t,e)=>{const n=!oe.fun(t)||t.prototype&&t.prototype.isReactComponent;return B.forwardRef((i,r)=>{const s=B.useRef(null),o=n&&B.useCallback(g=>{s.current=pA(r,g)},[r]),[a,l]=hA(i,e),u=RS(),c=()=>{const g=s.current;if(n&&!g)return;(g?e.applyAnimatedValues(g,a.getValue(!0)):!1)===!1&&u()},f=new dA(c,l),d=B.useRef();im(()=>(d.current=f,qe(l,g=>bo(g,f)),()=>{d.current&&(qe(d.current.deps,g=>Ga(g,d.current)),Ie.cancel(d.current.update))})),B.useEffect(c,[]),PS(()=>()=>{const g=d.current;qe(g.deps,_=>Ga(_,g))});const p=e.getComponentProps(a.getValue());return B.createElement(t,{...p,ref:o})})},dA=class{constructor(t,e){this.update=t,this.deps=e}eventObserved(t){t.type=="change"&&Ie.write(this.update)}};function hA(t,e){const n=new Set;return tc.dependencies=n,t.style&&(t={...t,style:e.createAnimatedStyle(t.style)}),t=new Vc(t),tc.dependencies=null,[t,n]}function pA(t,e){return t&&(oe.fun(t)?t(e):t.current=e),e}var u0=Symbol.for("AnimatedComponent"),mA=(t,{applyAnimatedValues:e=()=>!1,createAnimatedStyle:n=r=>new Vc(r),getComponentProps:i=r=>r}={})=>{const r={applyAnimatedValues:e,createAnimatedStyle:n,getComponentProps:i},s=o=>{const a=c0(o)||"Anonymous";return oe.str(o)?o=s[o]||(s[o]=l0(o,r)):o=o[u0]||(o[u0]=l0(o,r)),o.displayName=`Animated(${a})`,o};return vi(t,(o,a)=>{oe.arr(t)&&(a=c0(o)),s[a]=s(o)}),{animated:s}},c0=t=>oe.str(t)?t:t&&oe.str(t.displayName)?t.displayName:oe.fun(t)&&t.name||null;function jr(t,...e){return oe.fun(t)?t(...e):t}var pa=(t,e)=>t===!0||!!(e&&t&&(oe.fun(t)?t(e):wn(t).includes(e))),NS=(t,e)=>oe.obj(t)?e&&t[e]:t,IS=(t,e)=>t.default===!0?t[e]:t.default?t.default[e]:void 0,gA=t=>t,sm=(t,e=gA)=>{let n=vA;t.default&&t.default!==!0&&(t=t.default,n=Object.keys(t));const i={};for(const r of n){const s=e(t[r],r);oe.und(s)||(i[r]=s)}return i},vA=["config","onProps","onStart","onChange","onPause","onResume","onRest"],yA={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function _A(t){const e={};let n=0;if(vi(t,(i,r)=>{yA[r]||(e[r]=i,n++)}),n)return e}function US(t){const e=_A(t);if(e){const n={to:e};return vi(t,(i,r)=>r in e||(n[r]=i)),n}return{...t}}function $a(t){return t=un(t),oe.arr(t)?t.map($a):Bc(t)?oi.createStringInterpolator({range:[0,1],output:[t,t]})(1):t}function xA(t){for(const e in t)return!0;return!1}function wh(t){return oe.fun(t)||oe.arr(t)&&oe.obj(t[0])}function SA(t,e){var n;(n=t.ref)==null||n.delete(t),e==null||e.delete(t)}function MA(t,e){var n;e&&t.ref!==e&&((n=t.ref)==null||n.delete(t),e.add(t),t.ref=e)}var FS={default:{tension:170,friction:26},gentle:{tension:120,friction:14},wobbly:{tension:180,friction:12},stiff:{tension:210,friction:20},slow:{tension:280,friction:60},molasses:{tension:280,friction:120}},Th={...FS.default,mass:1,damping:1,easing:YT.linear,clamp:!1},EA=class{constructor(){this.velocity=0,Object.assign(this,Th)}};function wA(t,e,n){n&&(n={...n},f0(n,e),e={...n,...e}),f0(t,e),Object.assign(t,e);for(const o in Th)t[o]==null&&(t[o]=Th[o]);let{frequency:i,damping:r}=t;const{mass:s}=t;return oe.und(i)||(i<.01&&(i=.01),r<0&&(r=0),t.tension=Math.pow(2*Math.PI/i,2)*s,t.friction=4*Math.PI*r*s/i),t}function f0(t,e){if(!oe.und(e.decay))t.duration=void 0;else{const n=!oe.und(e.tension)||!oe.und(e.friction);(n||!oe.und(e.frequency)||!oe.und(e.damping)||!oe.und(e.mass))&&(t.duration=void 0,t.decay=void 0),n&&(t.frequency=void 0)}}var d0=[],TA=class{constructor(){this.changed=!1,this.values=d0,this.toValues=null,this.fromValues=d0,this.config=new EA,this.immediate=!1}};function OS(t,{key:e,props:n,defaultProps:i,state:r,actions:s}){return new Promise((o,a)=>{let l,u,c=pa(n.cancel??(i==null?void 0:i.cancel),e);if(c)p();else{oe.und(n.pause)||(r.paused=pa(n.pause,e));let g=i==null?void 0:i.pause;g!==!0&&(g=r.paused||pa(g,e)),l=jr(n.delay||0,e),g?(r.resumeQueue.add(d),s.pause()):(s.resume(),d())}function f(){r.resumeQueue.add(d),r.timeouts.delete(u),u.cancel(),l=u.time-Ie.now()}function d(){l>0&&!oi.skipAnimation?(r.delayed=!0,u=Ie.setTimeout(p,l),r.pauseQueue.add(f),r.timeouts.add(u)):p()}function p(){r.delayed&&(r.delayed=!1),r.pauseQueue.delete(f),r.timeouts.delete(u),t<=(r.cancelId||0)&&(c=!0);try{s.start({...n,callId:t,cancel:c},o)}catch(g){a(g)}}})}var om=(t,e)=>e.length==1?e[0]:e.some(n=>n.cancelled)?oo(t.get()):e.every(n=>n.noop)?kS(t.get()):Zn(t.get(),e.every(n=>n.finished)),kS=t=>({value:t,noop:!0,finished:!0,cancelled:!1}),Zn=(t,e,n=!1)=>({value:t,finished:e,cancelled:n}),oo=t=>({value:t,cancelled:!0,finished:!1});function BS(t,e,n,i){const{callId:r,parentId:s,onRest:o}=e,{asyncTo:a,promise:l}=n;return!s&&t===a&&!e.reset?l:n.promise=(async()=>{n.asyncId=r,n.asyncTo=t;const u=sm(e,(m,h)=>h==="onRest"?void 0:m);let c,f;const d=new Promise((m,h)=>(c=m,f=h)),p=m=>{const h=r<=(n.cancelId||0)&&oo(i)||r!==n.asyncId&&Zn(i,!1);if(h)throw m.result=h,f(m),m},g=(m,h)=>{const y=new h0,v=new p0;return(async()=>{if(oi.skipAnimation)throw Xa(n),v.result=Zn(i,!1),f(v),v;p(y);const x=oe.obj(m)?{...m}:{...h,to:m};x.parentId=r,vi(u,(w,M)=>{oe.und(x[M])&&(x[M]=w)});const E=await i.start(x);return p(y),n.paused&&await new Promise(w=>{n.resumeQueue.add(w)}),E})()};let _;if(oi.skipAnimation)return Xa(n),Zn(i,!1);try{let m;oe.arr(t)?m=(async h=>{for(const y of h)await g(y)})(t):m=Promise.resolve(t(g,i.stop.bind(i))),await Promise.all([m.then(c),d]),_=Zn(i.get(),!0,!1)}catch(m){if(m instanceof h0)_=m.result;else if(m instanceof p0)_=m.result;else throw m}finally{r==n.asyncId&&(n.asyncId=s,n.asyncTo=s?a:void 0,n.promise=s?l:void 0)}return oe.fun(o)&&Ie.batchedUpdates(()=>{o(_,i,i.item)}),_})()}function Xa(t,e){da(t.timeouts,n=>n.cancel()),t.pauseQueue.clear(),t.resumeQueue.clear(),t.asyncId=t.asyncTo=t.promise=void 0,e&&(t.cancelId=e)}var h0=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},p0=class extends Error{constructor(){super("SkipAnimationSignal")}},Ah=t=>t instanceof am,AA=1,am=class extends wS{constructor(){super(...arguments),this.id=AA++,this._priority=0}get priority(){return this._priority}set priority(t){this._priority!=t&&(this._priority=t,this._onPriorityChange(t))}get(){const t=ci(this);return t&&t.getValue()}to(...t){return oi.to(this,t)}interpolate(...t){return iA(),oi.to(this,t)}toJSON(){return this.get()}observerAdded(t){t==1&&this._attach()}observerRemoved(t){t==0&&this._detach()}_attach(){}_detach(){}_onChange(t,e=!1){Ha(this,{type:"change",parent:this,value:t,idle:e})}_onPriorityChange(t){this.idle||Fc.sort(this),Ha(this,{type:"priority",parent:this,priority:t})}},cs=Symbol.for("SpringPhase"),zS=1,bh=2,Ch=4,Ff=t=>(t[cs]&zS)>0,ji=t=>(t[cs]&bh)>0,zo=t=>(t[cs]&Ch)>0,m0=(t,e)=>e?t[cs]|=bh|zS:t[cs]&=~bh,g0=(t,e)=>e?t[cs]|=Ch:t[cs]&=~Ch,bA=class extends am{constructor(t,e){if(super(),this.animation=new TA,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!oe.und(t)||!oe.und(e)){const n=oe.obj(t)?{...t}:{...e,from:t};oe.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(ji(this)||this._state.asyncTo)||zo(this)}get goal(){return un(this.animation.to)}get velocity(){const t=ci(this);return t instanceof ll?t.lastVelocity||0:t.getPayload().map(e=>e.lastVelocity||0)}get hasAnimated(){return Ff(this)}get isAnimating(){return ji(this)}get isPaused(){return zo(this)}get isDelayed(){return this._state.delayed}advance(t){let e=!0,n=!1;const i=this.animation;let{toValues:r}=i;const{config:s}=i,o=zc(i.to);!o&&On(i.to)&&(r=wn(un(i.to))),i.values.forEach((u,c)=>{if(u.done)return;const f=u.constructor==ja?1:o?o[c].lastPosition:r[c];let d=i.immediate,p=f;if(!d){if(p=u.lastPosition,s.tension<=0){u.done=!0;return}let g=u.elapsedTime+=t;const _=i.fromValues[c],m=u.v0!=null?u.v0:u.v0=oe.arr(s.velocity)?s.velocity[c]:s.velocity;let h;const y=s.precision||(_==f?.005:Math.min(1,Math.abs(f-_)*.001));if(oe.und(s.duration))if(s.decay){const v=s.decay===!0?.998:s.decay,x=Math.exp(-(1-v)*g);p=_+m/(1-v)*(1-x),d=Math.abs(u.lastPosition-p)<=y,h=m*x}else{h=u.lastVelocity==null?m:u.lastVelocity;const v=s.restVelocity||y/10,x=s.clamp?0:s.bounce,E=!oe.und(x),w=_==f?u.v0>0:_<f;let M,A=!1;const S=1,C=Math.ceil(t/S);for(let U=0;U<C&&(M=Math.abs(h)>v,!(!M&&(d=Math.abs(f-p)<=y,d)));++U){E&&(A=p==f||p>f==w,A&&(h=-h*x,p=f));const L=-s.tension*1e-6*(p-f),Q=-s.friction*.001*h,I=(L+Q)/s.mass;h=h+I*S,p=p+h*S}}else{let v=1;s.duration>0&&(this._memoizedDuration!==s.duration&&(this._memoizedDuration=s.duration,u.durationProgress>0&&(u.elapsedTime=s.duration*u.durationProgress,g=u.elapsedTime+=t)),v=(s.progress||0)+g/this._memoizedDuration,v=v>1?1:v<0?0:v,u.durationProgress=v),p=_+s.easing(v)*(f-_),h=(p-u.lastPosition)/t,d=v==1}u.lastVelocity=h,Number.isNaN(p)&&(console.warn("Got NaN while animating:",this),d=!0)}o&&!o[c].done&&(d=!1),d?u.done=!0:e=!1,u.setValue(p,s.round)&&(n=!0)});const a=ci(this),l=a.getValue();if(e){const u=un(i.to);(l!==u||n)&&!s.decay?(a.setValue(u),this._onChange(u)):n&&s.decay&&this._onChange(l),this._stop()}else n&&this._onChange(l)}set(t){return Ie.batchedUpdates(()=>{this._stop(),this._focus(t),this._set(t)}),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(ji(this)){const{to:t,config:e}=this.animation;Ie.batchedUpdates(()=>{this._onStart(),e.decay||this._set(t,!1),this._stop()})}return this}update(t){return(this.queue||(this.queue=[])).push(t),this}start(t,e){let n;return oe.und(t)?(n=this.queue||[],this.queue=[]):n=[oe.obj(t)?t:{...e,to:t}],Promise.all(n.map(i=>this._update(i))).then(i=>om(this,i))}stop(t){const{to:e}=this.animation;return this._focus(this.get()),Xa(this._state,t&&this._lastCallId),Ie.batchedUpdates(()=>this._stop(e,t)),this}reset(){this._update({reset:!0})}eventObserved(t){t.type=="change"?this._start():t.type=="priority"&&(this.priority=t.priority+1)}_prepareNode(t){const e=this.key||"";let{to:n,from:i}=t;n=oe.obj(n)?n[e]:n,(n==null||wh(n))&&(n=void 0),i=oe.obj(i)?i[e]:i,i==null&&(i=void 0);const r={to:n,from:i};return Ff(this)||(t.reverse&&([n,i]=[i,n]),i=un(i),oe.und(i)?ci(this)||this._set(n):this._set(i)),r}_update({...t},e){const{key:n,defaultProps:i}=this;t.default&&Object.assign(i,sm(t,(o,a)=>/^on/.test(a)?NS(o,n):o)),y0(this,t,"onProps"),Ho(this,"onProps",t,this);const r=this._prepareNode(t);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const s=this._state;return OS(++this._lastCallId,{key:n,props:t,defaultProps:i,state:s,actions:{pause:()=>{zo(this)||(g0(this,!0),ea(s.pauseQueue),Ho(this,"onPause",Zn(this,Vo(this,this.animation.to)),this))},resume:()=>{zo(this)&&(g0(this,!1),ji(this)&&this._resume(),ea(s.resumeQueue),Ho(this,"onResume",Zn(this,Vo(this,this.animation.to)),this))},start:this._merge.bind(this,r)}}).then(o=>{if(t.loop&&o.finished&&!(e&&o.noop)){const a=VS(t);if(a)return this._update(a,!0)}return o})}_merge(t,e,n){if(e.cancel)return this.stop(!0),n(oo(this));const i=!oe.und(t.to),r=!oe.und(t.from);if(i||r)if(e.callId>this._lastToId)this._lastToId=e.callId;else return n(oo(this));const{key:s,defaultProps:o,animation:a}=this,{to:l,from:u}=a;let{to:c=l,from:f=u}=t;r&&!i&&(!e.default||oe.und(c))&&(c=f),e.reverse&&([c,f]=[f,c]);const d=!Ai(f,u);d&&(a.from=f),f=un(f);const p=!Ai(c,l);p&&this._focus(c);const g=wh(e.to),{config:_}=a,{decay:m,velocity:h}=_;(i||r)&&(_.velocity=0),e.config&&!g&&wA(_,jr(e.config,s),e.config!==o.config?jr(o.config,s):void 0);let y=ci(this);if(!y||oe.und(c))return n(Zn(this,!0));const v=oe.und(e.reset)?r&&!e.default:!oe.und(f)&&pa(e.reset,s),x=v?f:this.get(),E=$a(c),w=oe.num(E)||oe.arr(E)||Bc(E),M=!g&&(!w||pa(o.immediate||e.immediate,s));if(p){const U=Eh(c);if(U!==y.constructor)if(M)y=this._set(E);else throw Error(`Cannot animate between ${y.constructor.name} and ${U.name}, as the "to" prop suggests`)}const A=y.constructor;let S=On(c),C=!1;if(!S){const U=v||!Ff(this)&&d;(p||U)&&(C=Ai($a(x),E),S=!C),(!Ai(a.immediate,M)&&!M||!Ai(_.decay,m)||!Ai(_.velocity,h))&&(S=!0)}if(C&&ji(this)&&(a.changed&&!v?S=!0:S||this._stop(l)),!g&&((S||On(l))&&(a.values=y.getPayload(),a.toValues=On(c)?null:A==ja?[1]:wn(E)),a.immediate!=M&&(a.immediate=M,!M&&!v&&this._set(l)),S)){const{onRest:U}=a;qe(RA,Q=>y0(this,e,Q));const L=Zn(this,Vo(this,l));ea(this._pendingCalls,L),this._pendingCalls.add(n),a.changed&&Ie.batchedUpdates(()=>{var Q;a.changed=!v,U==null||U(L,this),v?jr(o.onRest,L):(Q=a.onStart)==null||Q.call(a,L,this)})}v&&this._set(x),g?n(BS(e.to,e,this._state,this)):S?this._start():ji(this)&&!p?this._pendingCalls.add(n):n(kS(x))}_focus(t){const e=this.animation;t!==e.to&&(s0(this)&&this._detach(),e.to=t,s0(this)&&this._attach())}_attach(){let t=0;const{to:e}=this.animation;On(e)&&(bo(e,this),Ah(e)&&(t=e.priority+1)),this.priority=t}_detach(){const{to:t}=this.animation;On(t)&&Ga(t,this)}_set(t,e=!0){const n=un(t);if(!oe.und(n)){const i=ci(this);if(!i||!Ai(n,i.getValue())){const r=Eh(n);!i||i.constructor!=r?rm(this,r.create(n)):i.setValue(n),i&&Ie.batchedUpdates(()=>{this._onChange(n,e)})}}return ci(this)}_onStart(){const t=this.animation;t.changed||(t.changed=!0,Ho(this,"onStart",Zn(this,Vo(this,t.to)),this))}_onChange(t,e){e||(this._onStart(),jr(this.animation.onChange,t,this)),jr(this.defaultProps.onChange,t,this),super._onChange(t,e)}_start(){const t=this.animation;ci(this).reset(un(t.to)),t.immediate||(t.fromValues=t.values.map(e=>e.lastPosition)),ji(this)||(m0(this,!0),zo(this)||this._resume())}_resume(){oi.skipAnimation?this.finish():Fc.start(this)}_stop(t,e){if(ji(this)){m0(this,!1);const n=this.animation;qe(n.values,r=>{r.done=!0}),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),Ha(this,{type:"idle",parent:this});const i=e?oo(this.get()):Zn(this.get(),Vo(this,t??n.to));ea(this._pendingCalls,i),n.changed&&(n.changed=!1,Ho(this,"onRest",i,this))}}};function Vo(t,e){const n=$a(e),i=$a(t.get());return Ai(i,n)}function VS(t,e=t.loop,n=t.to){const i=jr(e);if(i){const r=i!==!0&&US(i),s=(r||t).reverse,o=!r||r.reset;return qa({...t,loop:e,default:!1,pause:void 0,to:!s||wh(n)?n:void 0,from:o?t.from:void 0,reset:o,...r})}}function qa(t){const{to:e,from:n}=t=US(t),i=new Set;return oe.obj(e)&&v0(e,i),oe.obj(n)&&v0(n,i),t.keys=i.size?Array.from(i):null,t}function CA(t){const e=qa(t);return oe.und(e.default)&&(e.default=sm(e)),e}function v0(t,e){vi(t,(n,i)=>n!=null&&e.add(i))}var RA=["onStart","onRest","onChange","onPause","onResume"];function y0(t,e,n){t.animation[n]=e[n]!==IS(e,n)?NS(e[n],t.key):void 0}function Ho(t,e,...n){var i,r,s,o;(r=(i=t.animation)[e])==null||r.call(i,...n),(o=(s=t.defaultProps)[e])==null||o.call(s,...n)}var PA=["onStart","onChange","onRest"],LA=1,DA=class{constructor(t,e){this.id=LA++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),e&&(this._flush=e),t&&this.start({default:!0,...t})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every(t=>t.idle&&!t.isDelayed&&!t.isPaused)}get item(){return this._item}set item(t){this._item=t}get(){const t={};return this.each((e,n)=>t[n]=e.get()),t}set(t){for(const e in t){const n=t[e];oe.und(n)||this.springs[e].set(n)}}update(t){return t&&this.queue.push(qa(t)),this}start(t){let{queue:e}=this;return t?e=wn(t).map(qa):this.queue=[],this._flush?this._flush(this,e):($S(this,e),Rh(this,e))}stop(t,e){if(t!==!!t&&(e=t),e){const n=this.springs;qe(wn(e),i=>n[i].stop(!!t))}else Xa(this._state,this._lastAsyncId),this.each(n=>n.stop(!!t));return this}pause(t){if(oe.und(t))this.start({pause:!0});else{const e=this.springs;qe(wn(t),n=>e[n].pause())}return this}resume(t){if(oe.und(t))this.start({pause:!1});else{const e=this.springs;qe(wn(t),n=>e[n].resume())}return this}each(t){vi(this.springs,t)}_onFrame(){const{onStart:t,onChange:e,onRest:n}=this._events,i=this._active.size>0,r=this._changed.size>0;(i&&!this._started||r&&!this._started)&&(this._started=!0,da(t,([a,l])=>{l.value=this.get(),a(l,this,this._item)}));const s=!i&&this._started,o=r||s&&n.size?this.get():null;r&&e.size&&da(e,([a,l])=>{l.value=o,a(l,this,this._item)}),s&&(this._started=!1,da(n,([a,l])=>{l.value=o,a(l,this,this._item)}))}eventObserved(t){if(t.type=="change")this._changed.add(t.parent),t.idle||this._active.add(t.parent);else if(t.type=="idle")this._active.delete(t.parent);else return;Ie.onFrame(this._onFrame)}};function Rh(t,e){return Promise.all(e.map(n=>HS(t,n))).then(n=>om(t,n))}async function HS(t,e,n){const{keys:i,to:r,from:s,loop:o,onRest:a,onResolve:l}=e,u=oe.obj(e.default)&&e.default;o&&(e.loop=!1),r===!1&&(e.to=null),s===!1&&(e.from=null);const c=oe.arr(r)||oe.fun(r)?r:void 0;c?(e.to=void 0,e.onRest=void 0,u&&(u.onRest=void 0)):qe(PA,_=>{const m=e[_];if(oe.fun(m)){const h=t._events[_];e[_]=({finished:y,cancelled:v})=>{const x=h.get(m);x?(y||(x.finished=!1),v&&(x.cancelled=!0)):h.set(m,{value:null,finished:y||!1,cancelled:v||!1})},u&&(u[_]=e[_])}});const f=t._state;e.pause===!f.paused?(f.paused=e.pause,ea(e.pause?f.pauseQueue:f.resumeQueue)):f.paused&&(e.pause=!0);const d=(i||Object.keys(t.springs)).map(_=>t.springs[_].start(e)),p=e.cancel===!0||IS(e,"cancel")===!0;(c||p&&f.asyncId)&&d.push(OS(++t._lastAsyncId,{props:e,state:f,actions:{pause:Sh,resume:Sh,start(_,m){p?(Xa(f,t._lastAsyncId),m(oo(t))):(_.onRest=a,m(BS(c,_,f,t)))}}})),f.paused&&await new Promise(_=>{f.resumeQueue.add(_)});const g=om(t,await Promise.all(d));if(o&&g.finished&&!(n&&g.noop)){const _=VS(e,o,r);if(_)return $S(t,[_]),HS(t,_,!0)}return l&&Ie.batchedUpdates(()=>l(g,t,t.item)),g}function _0(t,e){const n={...t.springs};return e&&qe(wn(e),i=>{oe.und(i.keys)&&(i=qa(i)),oe.obj(i.to)||(i={...i,to:void 0}),jS(n,i,r=>WS(r))}),GS(t,n),n}function GS(t,e){vi(e,(n,i)=>{t.springs[i]||(t.springs[i]=n,bo(n,t))})}function WS(t,e){const n=new bA;return n.key=t,e&&bo(n,e),n}function jS(t,e,n){e.keys&&qe(e.keys,i=>{(t[i]||(t[i]=n(i)))._prepareNode(e)})}function $S(t,e){qe(e,n=>{jS(t.springs,n,i=>WS(i,t))})}var Hc=({children:t,...e})=>{const n=B.useContext(nc),i=e.pause||!!n.pause,r=e.immediate||!!n.immediate;e=aA(()=>({pause:i,immediate:r}),[i,r]);const{Provider:s}=nc;return B.createElement(s,{value:e},t)},nc=NA(Hc,{});Hc.Provider=nc.Provider;Hc.Consumer=nc.Consumer;function NA(t,e){return Object.assign(t,B.createContext(e)),t.Provider._context=t,t.Consumer._context=t,t}var IA=()=>{const t=[],e=function(i){sA();const r=[];return qe(t,(s,o)=>{if(oe.und(i))r.push(s.start());else{const a=n(i,s,o);a&&r.push(s.start(a))}}),r};e.current=t,e.add=function(i){t.includes(i)||t.push(i)},e.delete=function(i){const r=t.indexOf(i);~r&&t.splice(r,1)},e.pause=function(){return qe(t,i=>i.pause(...arguments)),this},e.resume=function(){return qe(t,i=>i.resume(...arguments)),this},e.set=function(i){qe(t,(r,s)=>{const o=oe.fun(i)?i(s,r):i;o&&r.set(o)})},e.start=function(i){const r=[];return qe(t,(s,o)=>{if(oe.und(i))r.push(s.start());else{const a=this._getProps(i,s,o);a&&r.push(s.start(a))}}),r},e.stop=function(){return qe(t,i=>i.stop(...arguments)),this},e.update=function(i){return qe(t,(r,s)=>r.update(this._getProps(i,r,s))),this};const n=function(i,r,s){return oe.fun(i)?i(s,r):i};return e._getProps=n,e};function UA(t,e,n){const i=oe.fun(e)&&e;i&&!n&&(n=[]);const r=B.useMemo(()=>i||arguments.length==3?IA():void 0,[]),s=B.useRef(0),o=RS(),a=B.useMemo(()=>({ctrls:[],queue:[],flush(h,y){const v=_0(h,y);return s.current>0&&!a.queue.length&&!Object.keys(v).some(E=>!h.springs[E])?Rh(h,y):new Promise(E=>{GS(h,v),a.queue.push(()=>{E(Rh(h,y))}),o()})}}),[]),l=B.useRef([...a.ctrls]),u=[],c=a0(t)||0;B.useMemo(()=>{qe(l.current.slice(t,c),h=>{SA(h,r),h.stop(!0)}),l.current.length=t,f(c,t)},[t]),B.useMemo(()=>{f(0,Math.min(c,t))},n);function f(h,y){for(let v=h;v<y;v++){const x=l.current[v]||(l.current[v]=new DA(null,a.flush)),E=i?i(v,x):e[v];E&&(u[v]=CA(E))}}const d=l.current.map((h,y)=>_0(h,u[y])),p=B.useContext(Hc),g=a0(p),_=p!==g&&xA(p);im(()=>{s.current++,a.ctrls=l.current;const{queue:h}=a;h.length&&(a.queue=[],qe(h,y=>y())),qe(l.current,(y,v)=>{r==null||r.add(y),_&&y.start({default:p});const x=u[v];x&&(MA(y,x.ref),y.ref?y.queue.push(x):y.start(x))})}),PS(()=>()=>{qe(a.ctrls,h=>h.stop(!0))});const m=d.map(h=>({...h}));return r?[m,r]:m}function x0(t,e){const n=oe.fun(t),[[i],r]=UA(1,n?t:[t],n?[]:e);return n||arguments.length==2?[i,r]:i}var FA=class extends am{constructor(t,e){super(),this.source=t,this.idle=!0,this._active=new Set,this.calc=za(...e);const n=this._get(),i=Eh(n);rm(this,i.create(n))}advance(t){const e=this._get(),n=this.get();Ai(e,n)||(ci(this).setValue(e),this._onChange(e,this.idle)),!this.idle&&S0(this._active)&&Of(this)}_get(){const t=oe.arr(this.source)?this.source.map(un):wn(un(this.source));return this.calc(...t)}_start(){this.idle&&!S0(this._active)&&(this.idle=!1,qe(zc(this),t=>{t.done=!1}),oi.skipAnimation?(Ie.batchedUpdates(()=>this.advance()),Of(this)):Fc.start(this))}_attach(){let t=1;qe(wn(this.source),e=>{On(e)&&bo(e,this),Ah(e)&&(e.idle||this._active.add(e),t=Math.max(t,e.priority+1))}),this.priority=t,this._start()}_detach(){qe(wn(this.source),t=>{On(t)&&Ga(t,this)}),this._active.clear(),Of(this)}eventObserved(t){t.type=="change"?t.idle?this.advance():(this._active.add(t.parent),this._start()):t.type=="idle"?this._active.delete(t.parent):t.type=="priority"&&(this.priority=wn(this.source).reduce((e,n)=>Math.max(e,(Ah(n)?n.priority:0)+1),0))}};function OA(t){return t.idle!==!1}function S0(t){return!t.size||Array.from(t).every(OA)}function Of(t){t.idle||(t.idle=!0,qe(zc(t),e=>{e.done=!0}),Ha(t,{type:"idle",parent:t}))}oi.assign({createStringInterpolator:bS,to:(t,e)=>new FA(t,e)});var XS=/^--/;function kA(t,e){return e==null||typeof e=="boolean"||e===""?"":typeof e=="number"&&e!==0&&!XS.test(t)&&!(ma.hasOwnProperty(t)&&ma[t])?e+"px":(""+e).trim()}var M0={};function BA(t,e){if(!t.nodeType||!t.setAttribute)return!1;const n=t.nodeName==="filter"||t.parentNode&&t.parentNode.nodeName==="filter",{className:i,style:r,children:s,scrollTop:o,scrollLeft:a,viewBox:l,...u}=e,c=Object.values(u),f=Object.keys(u).map(d=>n||t.hasAttribute(d)?d:M0[d]||(M0[d]=d.replace(/([A-Z])/g,p=>"-"+p.toLowerCase())));s!==void 0&&(t.textContent=s);for(const d in r)if(r.hasOwnProperty(d)){const p=kA(d,r[d]);XS.test(d)?t.style.setProperty(d,p):t.style[d]=p}f.forEach((d,p)=>{t.setAttribute(d,c[p])}),i!==void 0&&(t.className=i),o!==void 0&&(t.scrollTop=o),a!==void 0&&(t.scrollLeft=a),l!==void 0&&t.setAttribute("viewBox",l)}var ma={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zA=(t,e)=>t+e.charAt(0).toUpperCase()+e.substring(1),VA=["Webkit","Ms","Moz","O"];ma=Object.keys(ma).reduce((t,e)=>(VA.forEach(n=>t[zA(n,e)]=t[e]),t),ma);var HA=/^(matrix|translate|scale|rotate|skew)/,GA=/^(translate)/,WA=/^(rotate|skew)/,kf=(t,e)=>oe.num(t)&&t!==0?t+e:t,wu=(t,e)=>oe.arr(t)?t.every(n=>wu(n,e)):oe.num(t)?t===e:parseFloat(t)===e,jA=class extends Vc{constructor({x:t,y:e,z:n,...i}){const r=[],s=[];(t||e||n)&&(r.push([t||0,e||0,n||0]),s.push(o=>[`translate3d(${o.map(a=>kf(a,"px")).join(",")})`,wu(o,0)])),vi(i,(o,a)=>{if(a==="transform")r.push([o||""]),s.push(l=>[l,l===""]);else if(HA.test(a)){if(delete i[a],oe.und(o))return;const l=GA.test(a)?"px":WA.test(a)?"deg":"";r.push(wn(o)),s.push(a==="rotate3d"?([u,c,f,d])=>[`rotate3d(${u},${c},${f},${kf(d,l)})`,wu(d,0)]:u=>[`${a}(${u.map(c=>kf(c,l)).join(",")})`,wu(u,a.startsWith("scale")?1:0)])}}),r.length&&(i.transform=new $A(r,s)),super(i)}},$A=class extends wS{constructor(t,e){super(),this.inputs=t,this.transforms=e,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let t="",e=!0;return qe(this.inputs,(n,i)=>{const r=un(n[0]),[s,o]=this.transforms[i](oe.arr(r)?r:n.map(un));t+=" "+s,e=e&&o}),e?"none":t}observerAdded(t){t==1&&qe(this.inputs,e=>qe(e,n=>On(n)&&bo(n,this)))}observerRemoved(t){t==0&&qe(this.inputs,e=>qe(e,n=>On(n)&&Ga(n,this)))}eventObserved(t){t.type=="change"&&(this._value=null),Ha(this,t)}},XA=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"];oi.assign({batchedUpdates:hS.unstable_batchedUpdates,createStringInterpolator:bS,colors:FT});var qA=mA(XA,{applyAnimatedValues:BA,createAnimatedStyle:t=>new jA(t),getComponentProps:({scrollTop:t,scrollLeft:e,...n})=>n}),E0=qA.animated;const YA=()=>{const t=B.useRef(null),e=B.useRef(null),n=B.useRef(null),[i,r]=B.useState({x:0,y:0}),[s,o]=B.useState(!1),a=B.useRef(null),l=B.useRef([]),u=B.useRef([]),c=B.useRef(0),[f,d]=B.useState({width:0,height:0}),[p,g]=B.useState(0),[_,m]=B.useState(!1),h=x0({transform:s?"scale(1.05) translateY(-10px)":"scale(1) translateY(0px)",config:FS.gentle}),y=x0({opacity:s?.8:.5,config:{tension:200,friction:40}});B.useEffect(()=>{const M=()=>{e.current&&d({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",M),M(),()=>window.removeEventListener("resize",M)},[]),B.useEffect(()=>{if(!t.current||f.width===0)return;const M=t.current,A=M.getContext("2d");M.width=f.width,M.height=f.height;const S=(D,G)=>{const J=Math.floor(D)&255,ie=Math.floor(G)&255;return Math.sin(J*ie*c.current*.001)*.5+.5},C=(D=1)=>{const G=[`rgba(92, 225, 255, ${D})`,`rgba(58, 80, 217, ${D})`,`rgba(110, 52, 191, ${D})`,`rgba(164, 93, 238, ${D})`];return G[Math.floor(Math.random()*G.length)]},U=()=>{l.current=[];const D=Math.min(Math.floor(f.width*.08),150);for(let G=0;G<D;G++)l.current.push({x:Math.random()*f.width,y:Math.random()*f.height,size:Math.random()*3+.5,speedX:(Math.random()-.5)*.6,speedY:(Math.random()-.5)*.6,color:C(Math.random()*.3+.2),pulse:Math.random()*2,type:Math.random()>.9?"special":"normal",connections:[]})},Q=(()=>{const G=20*Math.sqrt(3),J=Math.ceil(f.height/G)+1,ie=Math.ceil(f.width/(20*1.5))+1,te=[];for(let ce=0;ce<J;ce++)for(let ye=0;ye<ie;ye++){const xe=ye*20*1.5,Se=ce*G+(ye%2===0?0:G/2);te.push({x:xe,y:Se,radius:20,opacity:.05+S(xe*.01,Se*.01)*.05,activated:!1,activationProgress:0})}return te})(),I=(D=25)=>{for(let G=0;G<D;G++)k()},k=()=>{const D=Math.random()*f.height,G=50+Math.random()*150,J=1+Math.random()*4;u.current.push({x:-G,y:D,width:G,height:Math.random()>.8?2:1,speed:J,color:C(.4+Math.random()*.4),alpha:.4+Math.random()*.3})};U(),I();const R=setInterval(()=>{Math.random()>.85&&(m(!0),setTimeout(()=>m(!1),200+Math.random()*400))},5e3),z=setInterval(()=>{g(D=>D+.02)},50),O=[],V=()=>{O.push({radius:5,maxRadius:Math.min(f.width,f.height)*.4,x:f.width/2,y:f.height/2,lineWidth:1+Math.random()*2,alpha:.7,color:C(1),speed:1+Math.random()*1.5})};V();const W=setInterval(()=>{O.length<5&&V()},2e3),X=()=>{if(c.current+=1,A.fillStyle="rgba(10, 12, 29, 0.15)",A.fillRect(0,0,f.width,f.height),A.save(),Q.forEach(D=>{Math.sqrt(Math.pow(D.x-i.x,2)+Math.pow(D.y-i.y,2))<150&&!D.activated&&(D.activated=!0,D.activationProgress=0),D.activated&&D.activationProgress<1&&(D.activationProgress+=.02),D.activationProgress>=1&&(D.activated=!1);const J=D.activationProgress*.15,te=.03+S(D.x*.01+p,D.y*.01)*.03+J;A.beginPath();for(let ce=0;ce<6;ce++){const ye=ce*Math.PI/3,xe=D.x+D.radius*Math.cos(ye),Se=D.y+D.radius*Math.sin(ye);ce===0?A.moveTo(xe,Se):A.lineTo(xe,Se)}A.closePath(),A.strokeStyle=`rgba(92, 225, 255, ${te})`,A.lineWidth=.5,A.stroke()}),A.restore(),A.save(),u.current.forEach((D,G)=>{D.x+=D.speed,A.beginPath(),A.rect(D.x,D.y,D.width,D.height),A.fillStyle=D.color,A.globalAlpha=D.alpha,A.fill(),D.x>f.width&&(u.current.splice(G,1),k())}),A.restore(),A.save(),l.current.forEach((D,G)=>{if(D.x+=D.speedX+(S(D.x*.01,D.y*.01+c.current*1e-4)-.5)*.3,D.y+=D.speedY+(S(D.x*.01+c.current*1e-4,D.y*.01)-.5)*.3,D.x<-50&&(D.x=f.width+50),D.x>f.width+50&&(D.x=-50),D.y<-50&&(D.y=f.height+50),D.y>f.height+50&&(D.y=-50),s){const te=i.x-D.x,ce=i.y-D.y,ye=Math.sqrt(te*te+ce*ce);if(ye<150){const xe=D.type==="special"?.05:-.02,Se=Math.atan2(ce,te),we=(1-ye/150)*xe;D.speedX+=Math.cos(Se)*we,D.speedY+=Math.sin(Se)*we;const $=Math.sqrt(D.speedX*D.speedX+D.speedY*D.speedY);$>2&&(D.speedX=D.speedX/$*2,D.speedY=D.speedY/$*2)}}D.speedX*=.99,D.speedY*=.99;const J=1+Math.sin(c.current*.01+D.pulse)*.2,ie=D.type==="special"?D.size*J*1.5:D.size*J;if(D.type==="special"){const te=A.createRadialGradient(D.x,D.y,0,D.x,D.y,ie*4);te.addColorStop(0,D.color),te.addColorStop(1,"rgba(92, 225, 255, 0)"),A.beginPath(),A.arc(D.x,D.y,ie*4,0,Math.PI*2),A.fillStyle=te,A.fill()}A.beginPath(),A.arc(D.x,D.y,ie,0,Math.PI*2),A.fillStyle=D.color,A.globalAlpha=D.type==="special"?.8:.6,A.fill(),D.connections=[],l.current.forEach((te,ce)=>{if(G!==ce){const ye=D.x-te.x,xe=D.y-te.y,Se=Math.sqrt(ye*ye+xe*xe),we=D.type==="special"||te.type==="special"?150:100;if(Se<we&&(D.connections.push(ce),G<ce)){const $=D.type==="special"||te.type==="special",bt=A.createLinearGradient(D.x,D.y,te.x,te.y);bt.addColorStop(0,D.color),bt.addColorStop(1,te.color),A.beginPath(),A.moveTo(D.x,D.y),A.lineTo(te.x,te.y),A.strokeStyle=bt,A.globalAlpha=$?.2*(1-Se/we)*1.5:.1*(1-Se/we),A.lineWidth=$?1:.5,A.stroke()}}})}),A.restore(),A.save(),O.forEach((D,G)=>{D.radius+=D.speed,D.alpha=1-D.radius/D.maxRadius,D.alpha>0?(A.beginPath(),A.arc(D.x,D.y,D.radius,0,Math.PI*2),A.strokeStyle=D.color,A.globalAlpha=D.alpha*.5,A.lineWidth=D.lineWidth*D.alpha,A.stroke()):O.splice(G,1)}),A.restore(),s){A.save();const D=A.createRadialGradient(i.x,i.y,5,i.x,i.y,150);D.addColorStop(0,"rgba(92, 225, 255, 0.2)"),D.addColorStop(1,"rgba(92, 225, 255, 0)"),A.beginPath(),A.arc(i.x,i.y,150,0,Math.PI*2),A.fillStyle=D,A.fill(),A.restore()}A.globalAlpha=1,a.current=requestAnimationFrame(X)};return X(),()=>{cancelAnimationFrame(a.current),clearInterval(R),clearInterval(z),clearInterval(W)}},[f,i,s]);const v=M=>{r({x:M.clientX,y:M.clientY})},x=()=>{o(!0)},E=()=>{o(!1)},w=[...Array(10)].map((M,A)=>{const S=A*.5,C=1-A/20,U=195+A*4;return{transform:`translateZ(${-S}px)`,opacity:C,color:`hsl(${U}, 80%, 70%)`,textShadow:`0 0 ${A*2}px hsla(${U}, 90%, 50%, ${C*.5})`}});return N.jsxs("div",{className:"relative w-full h-screen overflow-hidden bg-gradient-to-b from-[#0a0c1d] to-[#11172e]",ref:e,onMouseMove:v,onMouseEnter:x,onMouseLeave:E,children:[N.jsx("canvas",{ref:t,className:"absolute top-0 left-0 w-full h-full z-0"}),N.jsx("div",{className:"absolute inset-0 bg-radial-gradient from-transparent via-[#0a0c1d20] to-[#0a0c1d60] z-1"}),N.jsx(E0.div,{style:y,className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#5ce1ff08] blur-3xl z-1"}),N.jsx("div",{className:"relative w-full h-full flex items-center justify-center z-10",children:N.jsxs(E0.div,{ref:n,style:h,className:"relative perspective transform-style-3d",children:[N.jsxs("div",{className:"relative",children:[w.map((M,A)=>N.jsx("div",{className:"absolute inset-0 text-center",style:M,children:N.jsx("span",{className:`text-3xl md:text-4xl lg:text-5xl font-light tracking-widest uppercase ${_?"text-glitch":""}`,children:"We Accelerate The AI Revolution"})},`layer-${A}`)),N.jsx("div",{className:"relative text-center",children:N.jsx("h1",{className:`text-3xl md:text-4xl lg:text-5xl font-light tracking-widest uppercase text-white ${_?"text-glitch":""}`,children:"We Accelerate The AI Revolution"})}),N.jsx("div",{className:"absolute inset-0 text-center",children:N.jsx("span",{className:`text-3xl md:text-4xl lg:text-5xl font-light tracking-widest uppercase text-transparent ${_?"text-glitch":""}`,style:{textShadow:"0 0 20px rgba(92, 225, 255, 0.8), 0 0 40px rgba(92, 225, 255, 0.4)"},children:"We Accelerate The AI Revolution"})}),s&&N.jsx("div",{className:"absolute inset-0 text-center overflow-hidden",style:{maskImage:"linear-gradient(to right, transparent, white, transparent)",WebkitMaskImage:"linear-gradient(to right, transparent, white, transparent)",maskSize:"200% 100%",WebkitMaskSize:"200% 100%",maskPosition:`${i.x/f.width*100}% center`,WebkitMaskPosition:`${i.x/f.width*100}% center`},children:N.jsx("span",{className:"text-3xl md:text-4xl lg:text-5xl font-light tracking-widest uppercase text-[#ffffff]",style:{textShadow:"0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.4)"},children:"We Accelerate The AI Revolution"})})]}),N.jsxs("div",{className:"w-64 h-px mt-6 mx-auto relative overflow-hidden",children:[N.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-[#5ce1ff] to-transparent opacity-50"}),N.jsx("div",{className:"absolute inset-y-0 w-24 animate-line-highlight",style:{background:"linear-gradient(to right, transparent, rgba(92, 225, 255, 0.8), transparent)"}}),[...Array(3)].map((M,A)=>N.jsx("div",{className:"absolute top-0 bottom-0 w-px bg-white",style:{left:`${33*(A+1)}%`,boxShadow:"0 0 5px #fff, 0 0 10px #5ce1ff",opacity:.8,animation:`spark 4s infinite ${A*1.3}s`}},`spark-${A}`))]})]})}),N.jsxs("div",{className:"absolute inset-0 pointer-events-none z-2",children:[N.jsx("div",{className:"absolute inset-0 bg-scanlines opacity-5",style:{backgroundSize:"2px 2px",backgroundImage:"linear-gradient(0deg, transparent 50%, rgba(92, 225, 255, 0.5) 50%)"}}),N.jsx("div",{className:"absolute inset-0 bg-noise mix-blend-overlay opacity-5"}),[...Array(4)].map((M,A)=>N.jsx("div",{className:"absolute w-24 h-24 opacity-50",style:{top:A<2?"20px":"auto",bottom:A>=2?"20px":"auto",left:A%2===0?"20px":"auto",right:A%2!==0?"20px":"auto",borderTop:A<2?"1px solid rgba(92, 225, 255, 0.3)":"none",borderBottom:A>=2?"1px solid rgba(92, 225, 255, 0.3)":"none",borderLeft:A%2===0?"1px solid rgba(92, 225, 255, 0.3)":"none",borderRight:A%2!==0?"1px solid rgba(92, 225, 255, 0.3)":"none"},children:N.jsx("div",{className:"absolute w-1 h-1 bg-[#5ce1ff] rounded-full",style:{top:A<2?"-2px":"auto",bottom:A>=2?"-2px":"auto",left:A%2===0?"-2px":"auto",right:A%2!==0?"-2px":"auto",boxShadow:"0 0 5px #5ce1ff"}})},`corner-${A}`))]}),N.jsx("div",{className:"absolute bottom-4 right-4 text-[10px] text-[#ffffff30] font-mono z-20",children:"Powered by NEXOR"}),N.jsx("style",{jsx:!0,global:!0,children:`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes line-highlight {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(400%);
          }
        }
        
        @keyframes spark {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 0.8;
            transform: scale(1);
          }
        }
        
        @keyframes text-glitch {
          0%, 100% {
            clip-path: none;
            transform: none;
            opacity: 1;
          }
          20% {
            clip-path: polygon(0 35%, 100% 35%, 100% 65%, 0 65%);
            transform: translate(1px, 0);
            opacity: 1;
          }
          40% {
            clip-path: polygon(0 45%, 100% 45%, 100% 60%, 0 60%);
            transform: translate(-2px, 0);
            opacity: 1;
          }
          60% {
            clip-path: polygon(0 30%, 100% 30%, 100% 65%, 0 65%);
            transform: translate(3px, 0);
            opacity: 0.8;
          }
          80% {
            clip-path: polygon(0 40%, 100% 40%, 100% 55%, 0 55%);
            transform: translate(-1px, 0);
            opacity: 1;
          }
        }
        
        .animate-line-highlight {
          animation: line-highlight 4s ease-in-out infinite;
        }
        
        .text-glitch {
          animation: text-glitch 0.4s linear both;
        }
        
        .perspective {
          perspective: 1000px;
        }
        
        .bg-radial-gradient {
          background: radial-gradient(circle at center, var(--tw-gradient-from) 0%, var(--tw-gradient-via) 60%, var(--tw-gradient-to) 100%);
        }
        
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
      `})]})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lm="159",KA=0,w0=1,QA=2,qS=1,ZA=2,wi=3,wr=0,mn=1,Ci=2,yr=0,ao=1,T0=2,A0=3,b0=4,JA=5,$r=100,eb=101,tb=102,C0=103,R0=104,nb=200,ib=201,rb=202,sb=203,Ph=204,Lh=205,ob=206,ab=207,lb=208,ub=209,cb=210,fb=211,db=212,hb=213,pb=214,mb=0,gb=1,vb=2,ic=3,yb=4,_b=5,xb=6,Sb=7,YS=0,Mb=1,Eb=2,_r=0,wb=1,Tb=2,Ab=3,bb=4,Cb=5,KS=300,yo=301,_o=302,Dh=303,Nh=304,Gc=306,Ih=1e3,ei=1001,Uh=1002,rn=1003,P0=1004,Bf=1005,kn=1006,Rb=1007,Ya=1008,xr=1009,Pb=1010,Lb=1011,um=1012,QS=1013,ar=1014,lr=1015,Ka=1016,ZS=1017,JS=1018,es=1020,Db=1021,ti=1023,Nb=1024,Ib=1025,ts=1026,xo=1027,Ub=1028,e1=1029,Fb=1030,t1=1031,n1=1033,zf=33776,Vf=33777,Hf=33778,Gf=33779,L0=35840,D0=35841,N0=35842,I0=35843,i1=36196,U0=37492,F0=37496,O0=37808,k0=37809,B0=37810,z0=37811,V0=37812,H0=37813,G0=37814,W0=37815,j0=37816,$0=37817,X0=37818,q0=37819,Y0=37820,K0=37821,Wf=36492,Q0=36494,Z0=36495,Ob=36283,J0=36284,ev=36285,tv=36286,r1=3e3,ns=3001,kb=3200,Bb=3201,zb=0,Vb=1,zn="",zt="srgb",Vi="srgb-linear",cm="display-p3",Wc="display-p3-linear",rc="linear",at="srgb",sc="rec709",oc="p3",_s=7680,nv=519,Hb=512,Gb=513,Wb=514,s1=515,jb=516,$b=517,Xb=518,qb=519,iv=35044,rv="300 es",Fh=1035,Li=2e3,ac=2001;class Co{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sv=1234567;const ga=Math.PI/180,Qa=180/Math.PI;function Ro(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[t&255]+$t[t>>8&255]+$t[t>>16&255]+$t[t>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[n&63|128]+$t[n>>8&255]+"-"+$t[n>>16&255]+$t[n>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function sn(t,e,n){return Math.max(e,Math.min(n,t))}function fm(t,e){return(t%e+e)%e}function Yb(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function Kb(t,e,n){return t!==e?(n-t)/(e-t):0}function va(t,e,n){return(1-n)*t+n*e}function Qb(t,e,n,i){return va(t,e,1-Math.exp(-n*i))}function Zb(t,e=1){return e-Math.abs(fm(t,e*2)-e)}function Jb(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function e2(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function t2(t,e){return t+Math.floor(Math.random()*(e-t+1))}function n2(t,e){return t+Math.random()*(e-t)}function i2(t){return t*(.5-Math.random())}function r2(t){t!==void 0&&(sv=t);let e=sv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function s2(t){return t*ga}function o2(t){return t*Qa}function Oh(t){return(t&t-1)===0&&t!==0}function a2(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function lc(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function l2(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),u=s((e+i)/2),c=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":t.set(a*c,l*f,l*d,a*u);break;case"YZY":t.set(l*d,a*c,l*f,a*u);break;case"ZXZ":t.set(l*f,l*d,a*c,a*u);break;case"XZX":t.set(a*c,l*g,l*p,a*u);break;case"YXY":t.set(l*p,a*c,l*g,a*u);break;case"ZYZ":t.set(l*g,l*p,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Us(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const u2={DEG2RAD:ga,RAD2DEG:Qa,generateUUID:Ro,clamp:sn,euclideanModulo:fm,mapLinear:Yb,inverseLerp:Kb,lerp:va,damp:Qb,pingpong:Zb,smoothstep:Jb,smootherstep:e2,randInt:t2,randFloat:n2,randFloatSpread:i2,seededRandom:r2,degToRad:s2,radToDeg:o2,isPowerOfTwo:Oh,ceilPowerOfTwo:a2,floorPowerOfTwo:lc,setQuaternionFromProperEuler:l2,normalize:Jt,denormalize:Us};class Qe{constructor(e=0,n=0){Qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,o,a,l,u){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],p=i[5],g=i[8],_=r[0],m=r[3],h=r[6],y=r[1],v=r[4],x=r[7],E=r[2],w=r[5],M=r[8];return s[0]=o*_+a*y+l*E,s[3]=o*m+a*v+l*w,s[6]=o*h+a*x+l*M,s[1]=u*_+c*y+f*E,s[4]=u*m+c*v+f*w,s[7]=u*h+c*x+f*M,s[2]=d*_+p*y+g*E,s[5]=d*m+p*v+g*w,s[8]=d*h+p*x+g*M,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,d=a*l-c*s,p=u*s-o*l,g=n*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*o)*_,e[3]=d*_,e[4]=(c*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=p*_,e[7]=(i*l-u*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(jf.makeScale(e,n)),this}rotate(e){return this.premultiply(jf.makeRotation(-e)),this}translate(e,n){return this.premultiply(jf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const jf=new Ge;function o1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function uc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function c2(){const t=uc("canvas");return t.style.display="block",t}const ov={};function ya(t){t in ov||(ov[t]=!0,console.warn(t))}const av=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),lv=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),kl={[Vi]:{transfer:rc,primaries:sc,toReference:t=>t,fromReference:t=>t},[zt]:{transfer:at,primaries:sc,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Wc]:{transfer:rc,primaries:oc,toReference:t=>t.applyMatrix3(lv),fromReference:t=>t.applyMatrix3(av)},[cm]:{transfer:at,primaries:oc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(lv),fromReference:t=>t.applyMatrix3(av).convertLinearToSRGB()}},f2=new Set([Vi,Wc]),it={enabled:!0,_workingColorSpace:Vi,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!f2.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=kl[e].toReference,r=kl[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return kl[t].primaries},getTransfer:function(t){return t===zn?rc:kl[t].transfer}};function lo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function $f(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let xs;class a1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xs===void 0&&(xs=uc("canvas")),xs.width=e.width,xs.height=e.height;const i=xs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=xs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=uc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=lo(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(lo(n[i]/255)*255):n[i]=lo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let d2=0;class l1{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:d2++}),this.uuid=Ro(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Xf(r[o].image)):s.push(Xf(r[o]))}else s=Xf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Xf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?a1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let h2=0;class An extends Co{constructor(e=An.DEFAULT_IMAGE,n=An.DEFAULT_MAPPING,i=ei,r=ei,s=kn,o=Ya,a=ti,l=xr,u=An.DEFAULT_ANISOTROPY,c=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:h2++}),this.uuid=Ro(),this.name="",this.source=new l1(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(ya("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===ns?zt:zn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==KS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ih:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case Uh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ih:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case Uh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ya("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===zt?ns:r1}set encoding(e){ya("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ns?zt:zn}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=KS;An.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,n=0,i=0,r=1){ft.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,x=(p+1)/2,E=(h+1)/2,w=(c+d)/4,M=(f+_)/4,A=(g+m)/4;return v>x&&v>E?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=w/i,s=M/i):x>E?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=w/r,s=A/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=M/s,r=A/s),this.set(i,r,s,n),this}let y=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-c)*(d-c));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(f-_)/y,this.z=(d-c)/y,this.w=Math.acos((u+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class p2 extends Co{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ft(0,0,e,n),this.scissorTest=!1,this.viewport=new ft(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(ya("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ns?zt:zn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new An(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new l1(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fs extends p2{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class u1 extends An{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class m2 extends An{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ul{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=g,e[n+3]=_;return}if(f!==_||l!==d||u!==p||c!==g){let m=1-a;const h=l*d+u*p+c*g+f*_,y=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const E=Math.sqrt(v),w=Math.atan2(E,h*y);m=Math.sin(m*w)/E,a=Math.sin(a*w)/E}const x=a*y;if(l=l*m+d*x,u=u*m+p*x,c=c*m+g*x,f=f*m+_*x,m===1-a){const E=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=E,u*=E,c*=E,f*=E}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+c*f+l*p-u*d,e[n+1]=l*g+c*d+u*f-a*p,e[n+2]=u*g+c*p+a*d-l*f,e[n+3]=c*g-a*f-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*c*f+u*p*g,this._y=u*p*f-d*c*g,this._z=u*c*g+d*p*f,this._w=u*c*f-d*p*g;break;case"YXZ":this._x=d*c*f+u*p*g,this._y=u*p*f-d*c*g,this._z=u*c*g-d*p*f,this._w=u*c*f+d*p*g;break;case"ZXY":this._x=d*c*f-u*p*g,this._y=u*p*f+d*c*g,this._z=u*c*g+d*p*f,this._w=u*c*f-d*p*g;break;case"ZYX":this._x=d*c*f-u*p*g,this._y=u*p*f+d*c*g,this._z=u*c*g-d*p*f,this._w=u*c*f+d*p*g;break;case"YZX":this._x=d*c*f+u*p*g,this._y=u*p*f+d*c*g,this._z=u*c*g-d*p*f,this._w=u*c*f-d*p*g;break;case"XZY":this._x=d*c*f-u*p*g,this._y=u*p*f-d*c*g,this._z=u*c*g+d*p*f,this._w=u*c*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-n)*c)/u,d=Math.sin(n*c)/u;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(uv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(uv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qf.copy(this).projectOnVector(e),this.sub(qf)}reflect(e){return this.sub(qf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qf=new j,uv=new ul;class cl{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint($n.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint($n.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=$n.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$n):$n.fromBufferAttribute(s,o),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Bl.copy(i.boundingBox)),Bl.applyMatrix4(e.matrixWorld),this.union(Bl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Go),zl.subVectors(this.max,Go),Ss.subVectors(e.a,Go),Ms.subVectors(e.b,Go),Es.subVectors(e.c,Go),$i.subVectors(Ms,Ss),Xi.subVectors(Es,Ms),Ir.subVectors(Ss,Es);let n=[0,-$i.z,$i.y,0,-Xi.z,Xi.y,0,-Ir.z,Ir.y,$i.z,0,-$i.x,Xi.z,0,-Xi.x,Ir.z,0,-Ir.x,-$i.y,$i.x,0,-Xi.y,Xi.x,0,-Ir.y,Ir.x,0];return!Yf(n,Ss,Ms,Es,zl)||(n=[1,0,0,0,1,0,0,0,1],!Yf(n,Ss,Ms,Es,zl))?!1:(Vl.crossVectors($i,Xi),n=[Vl.x,Vl.y,Vl.z],Yf(n,Ss,Ms,Es,zl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _i=[new j,new j,new j,new j,new j,new j,new j,new j],$n=new j,Bl=new cl,Ss=new j,Ms=new j,Es=new j,$i=new j,Xi=new j,Ir=new j,Go=new j,zl=new j,Vl=new j,Ur=new j;function Yf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ur.fromArray(t,s);const a=r.x*Math.abs(Ur.x)+r.y*Math.abs(Ur.y)+r.z*Math.abs(Ur.z),l=e.dot(Ur),u=n.dot(Ur),c=i.dot(Ur);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const g2=new cl,Wo=new j,Kf=new j;class dm{constructor(e=new j,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):g2.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wo.subVectors(e,this.center);const n=Wo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Wo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wo.copy(e.center).add(Kf)),this.expandByPoint(Wo.copy(e.center).sub(Kf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xi=new j,Qf=new j,Hl=new j,qi=new j,Zf=new j,Gl=new j,Jf=new j;class c1{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=xi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,n),xi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Qf.copy(e).add(n).multiplyScalar(.5),Hl.copy(n).sub(e).normalize(),qi.copy(this.origin).sub(Qf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Hl),a=qi.dot(this.direction),l=-qi.dot(Hl),u=qi.lengthSq(),c=Math.abs(1-o*o);let f,d,p,g;if(c>0)if(f=o*l-a,d=o*a-l,g=s*c,f>=0)if(d>=-g)if(d<=g){const _=1/c;f*=_,d*=_,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Qf).addScaledVector(Hl,d),p}intersectSphere(e,n){xi.subVectors(e.center,this.origin);const i=xi.dot(this.direction),r=xi.dot(xi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,n,i,r,s){Zf.subVectors(n,e),Gl.subVectors(i,e),Jf.crossVectors(Zf,Gl);let o=this.direction.dot(Jf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qi.subVectors(this.origin,e);const l=a*this.direction.dot(Gl.crossVectors(qi,Gl));if(l<0)return null;const u=a*this.direction.dot(Zf.cross(qi));if(u<0||l+u>o)return null;const c=-a*qi.dot(Jf);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(e,n,i,r,s,o,a,l,u,c,f,d,p,g,_,m){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,f,d,p,g,_,m)}set(e,n,i,r,s,o,a,l,u,c,f,d,p,g,_,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ws.setFromMatrixColumn(e,0).length(),s=1/ws.setFromMatrixColumn(e,1).length(),o=1/ws.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*c,p=o*f,g=a*c,_=a*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=p+g*u,n[5]=d-_*u,n[9]=-a*l,n[2]=_-d*u,n[6]=g+p*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*c,p=l*f,g=u*c,_=u*f;n[0]=d+_*a,n[4]=g*a-p,n[8]=o*u,n[1]=o*f,n[5]=o*c,n[9]=-a,n[2]=p*a-g,n[6]=_+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*c,p=l*f,g=u*c,_=u*f;n[0]=d-_*a,n[4]=-o*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*c,n[9]=_-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*c,p=o*f,g=a*c,_=a*f;n[0]=l*c,n[4]=g*u-p,n[8]=d*u+_,n[1]=l*f,n[5]=_*u+d,n[9]=p*u-g,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*u,g=a*l,_=a*u;n[0]=l*c,n[4]=_-d*f,n[8]=g*f+p,n[1]=f,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*f+g,n[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,p=o*u,g=a*l,_=a*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=d*f+_,n[5]=o*c,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*c,n[10]=_*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(v2,e,y2)}lookAt(e,n,i){const r=this.elements;return _n.subVectors(e,n),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Yi.crossVectors(i,_n),Yi.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Yi.crossVectors(i,_n)),Yi.normalize(),Wl.crossVectors(_n,Yi),r[0]=Yi.x,r[4]=Wl.x,r[8]=_n.x,r[1]=Yi.y,r[5]=Wl.y,r[9]=_n.y,r[2]=Yi.z,r[6]=Wl.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],h=i[14],y=i[3],v=i[7],x=i[11],E=i[15],w=r[0],M=r[4],A=r[8],S=r[12],C=r[1],U=r[5],L=r[9],Q=r[13],I=r[2],k=r[6],R=r[10],z=r[14],O=r[3],V=r[7],W=r[11],X=r[15];return s[0]=o*w+a*C+l*I+u*O,s[4]=o*M+a*U+l*k+u*V,s[8]=o*A+a*L+l*R+u*W,s[12]=o*S+a*Q+l*z+u*X,s[1]=c*w+f*C+d*I+p*O,s[5]=c*M+f*U+d*k+p*V,s[9]=c*A+f*L+d*R+p*W,s[13]=c*S+f*Q+d*z+p*X,s[2]=g*w+_*C+m*I+h*O,s[6]=g*M+_*U+m*k+h*V,s[10]=g*A+_*L+m*R+h*W,s[14]=g*S+_*Q+m*z+h*X,s[3]=y*w+v*C+x*I+E*O,s[7]=y*M+v*U+x*k+E*V,s[11]=y*A+v*L+x*R+E*W,s[15]=y*S+v*Q+x*z+E*X,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],h=e[15];return g*(+s*l*f-r*u*f-s*a*d+i*u*d+r*a*p-i*l*p)+_*(+n*l*p-n*u*d+s*o*d-r*o*p+r*u*c-s*l*c)+m*(+n*u*f-n*a*p-s*o*f+i*o*p+s*a*c-i*u*c)+h*(-r*a*c-n*l*f+n*a*d+r*o*f-i*o*d+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],h=e[15],y=f*m*u-_*d*u+_*l*p-a*m*p-f*l*h+a*d*h,v=g*d*u-c*m*u-g*l*p+o*m*p+c*l*h-o*d*h,x=c*_*u-g*f*u+g*a*p-o*_*p-c*a*h+o*f*h,E=g*f*l-c*_*l-g*a*d+o*_*d+c*a*m-o*f*m,w=n*y+i*v+r*x+s*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/w;return e[0]=y*M,e[1]=(_*d*s-f*m*s-_*r*p+i*m*p+f*r*h-i*d*h)*M,e[2]=(a*m*s-_*l*s+_*r*u-i*m*u-a*r*h+i*l*h)*M,e[3]=(f*l*s-a*d*s-f*r*u+i*d*u+a*r*p-i*l*p)*M,e[4]=v*M,e[5]=(c*m*s-g*d*s+g*r*p-n*m*p-c*r*h+n*d*h)*M,e[6]=(g*l*s-o*m*s-g*r*u+n*m*u+o*r*h-n*l*h)*M,e[7]=(o*d*s-c*l*s+c*r*u-n*d*u-o*r*p+n*l*p)*M,e[8]=x*M,e[9]=(g*f*s-c*_*s-g*i*p+n*_*p+c*i*h-n*f*h)*M,e[10]=(o*_*s-g*a*s+g*i*u-n*_*u-o*i*h+n*a*h)*M,e[11]=(c*a*s-o*f*s-c*i*u+n*f*u+o*i*p-n*a*p)*M,e[12]=E*M,e[13]=(c*_*r-g*f*r+g*i*d-n*_*d-c*i*m+n*f*m)*M,e[14]=(g*a*r-o*_*r-g*i*l+n*_*l+o*i*m-n*a*m)*M,e[15]=(o*f*r-c*a*r+c*i*l-n*f*l-o*i*d+n*a*d)*M,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,f=a+a,d=s*u,p=s*c,g=s*f,_=o*c,m=o*f,h=a*f,y=l*u,v=l*c,x=l*f,E=i.x,w=i.y,M=i.z;return r[0]=(1-(_+h))*E,r[1]=(p+x)*E,r[2]=(g-v)*E,r[3]=0,r[4]=(p-x)*w,r[5]=(1-(d+h))*w,r[6]=(m+y)*w,r[7]=0,r[8]=(g+v)*M,r[9]=(m-y)*M,r[10]=(1-(d+_))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ws.set(r[0],r[1],r[2]).length();const o=ws.set(r[4],r[5],r[6]).length(),a=ws.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Xn.copy(this);const u=1/s,c=1/o,f=1/a;return Xn.elements[0]*=u,Xn.elements[1]*=u,Xn.elements[2]*=u,Xn.elements[4]*=c,Xn.elements[5]*=c,Xn.elements[6]*=c,Xn.elements[8]*=f,Xn.elements[9]*=f,Xn.elements[10]*=f,n.setFromRotationMatrix(Xn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Li){const l=this.elements,u=2*s/(n-e),c=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,g;if(a===Li)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ac)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Li){const l=this.elements,u=1/(n-e),c=1/(i-r),f=1/(o-s),d=(n+e)*u,p=(i+r)*c;let g,_;if(a===Li)g=(o+s)*f,_=-2*f;else if(a===ac)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ws=new j,Xn=new At,v2=new j(0,0,0),y2=new j(1,1,1),Yi=new j,Wl=new j,_n=new j,cv=new At,fv=new ul;class jc{constructor(e=0,n=0,i=0,r=jc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(sn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-sn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return cv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return fv.setFromEuler(this),this.setFromQuaternion(fv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jc.DEFAULT_ORDER="XYZ";class hm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _2=0;const dv=new j,Ts=new ul,Si=new At,jl=new j,jo=new j,x2=new j,S2=new ul,hv=new j(1,0,0),pv=new j(0,1,0),mv=new j(0,0,1),M2={type:"added"},E2={type:"removed"};class gn extends Co{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_2++}),this.uuid=Ro(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new j,n=new jc,i=new ul,r=new j(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new At},normalMatrix:{value:new Ge}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ts.setFromAxisAngle(e,n),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,n){return Ts.setFromAxisAngle(e,n),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(hv,e)}rotateY(e){return this.rotateOnAxis(pv,e)}rotateZ(e){return this.rotateOnAxis(mv,e)}translateOnAxis(e,n){return dv.copy(e).applyQuaternion(this.quaternion),this.position.add(dv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(hv,e)}translateY(e){return this.translateOnAxis(pv,e)}translateZ(e){return this.translateOnAxis(mv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?jl.copy(e):jl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(jo,jl,this.up):Si.lookAt(jl,jo,this.up),this.quaternion.setFromRotationMatrix(Si),r&&(Si.extractRotation(r.matrixWorld),Ts.setFromRotationMatrix(Si),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(M2)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(E2)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,e,x2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,S2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}gn.DEFAULT_UP=new j(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qn=new j,Mi=new j,ed=new j,Ei=new j,As=new j,bs=new j,gv=new j,td=new j,nd=new j,id=new j;let $l=!1;class Jn{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),qn.subVectors(e,n),r.cross(qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){qn.subVectors(r,n),Mi.subVectors(i,n),ed.subVectors(e,n);const o=qn.dot(qn),a=qn.dot(Mi),l=qn.dot(ed),u=Mi.dot(Mi),c=Mi.dot(ed),f=o*u-a*a;if(f===0)return s.set(-2,-1,-1);const d=1/f,p=(u*l-a*c)*d,g=(o*c-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ei),Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getUV(e,n,i,r,s,o,a,l){return $l===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$l=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ei),l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(o,Ei.y),l.addScaledVector(a,Ei.z),l}static isFrontFacing(e,n,i,r){return qn.subVectors(i,n),Mi.subVectors(e,n),qn.cross(Mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),qn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Jn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return $l===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$l=!0),Jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;As.subVectors(r,i),bs.subVectors(s,i),td.subVectors(e,i);const l=As.dot(td),u=bs.dot(td);if(l<=0&&u<=0)return n.copy(i);nd.subVectors(e,r);const c=As.dot(nd),f=bs.dot(nd);if(c>=0&&f<=c)return n.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(As,o);id.subVectors(e,s);const p=As.dot(id),g=bs.dot(id);if(g>=0&&p<=g)return n.copy(s);const _=p*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),n.copy(i).addScaledVector(bs,a);const m=c*g-p*f;if(m<=0&&f-c>=0&&p-g>=0)return gv.subVectors(s,r),a=(f-c)/(f-c+(p-g)),n.copy(r).addScaledVector(gv,a);const h=1/(m+_+d);return o=_*h,a=d*h,n.copy(i).addScaledVector(As,o).addScaledVector(bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const f1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},Xl={h:0,s:0,l:0};function rd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=fm(e,1),n=sn(n,0,1),i=sn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=rd(o,s,e+1/3),this.g=rd(o,s,e),this.b=rd(o,s,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,n=zt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=zt){const i=f1[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lo(e.r),this.g=lo(e.g),this.b=lo(e.b),this}copyLinearToSRGB(e){return this.r=$f(e.r),this.g=$f(e.g),this.b=$f(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return it.fromWorkingColorSpace(Xt.copy(this),e),Math.round(sn(Xt.r*255,0,255))*65536+Math.round(sn(Xt.g*255,0,255))*256+Math.round(sn(Xt.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.fromWorkingColorSpace(Xt.copy(this),n);const i=Xt.r,r=Xt.g,s=Xt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=it.workingColorSpace){return it.fromWorkingColorSpace(Xt.copy(this),n),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=zt){it.fromWorkingColorSpace(Xt.copy(this),e);const n=Xt.r,i=Xt.g,r=Xt.b;return e!==zt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+n,Ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ki),e.getHSL(Xl);const i=va(Ki.h,Xl.h,n),r=va(Ki.s,Xl.s,n),s=va(Ki.l,Xl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new Je;Je.NAMES=f1;let w2=0;class $c extends Co{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:w2++}),this.uuid=Ro(),this.name="",this.type="Material",this.blending=ao,this.side=wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ph,this.blendDst=Lh,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=ic,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ao&&(i.blending=this.blending),this.side!==wr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ph&&(i.blendSrc=this.blendSrc),this.blendDst!==Lh&&(i.blendDst=this.blendDst),this.blendEquation!==$r&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ic&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(i.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class d1 extends $c{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=YS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new j,ql=new Qe;class mi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=iv,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=lr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.BufferAttribute: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ql.fromBufferAttribute(this,n),ql.applyMatrix3(e),this.setXY(n,ql.x,ql.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix3(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix4(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyNormalMatrix(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.transformDirection(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Us(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Us(n,this.array)),n}setX(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Us(n,this.array)),n}setY(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Us(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Us(n,this.array)),n}setW(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==iv&&(e.usage=this.usage),e}}class h1 extends mi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class p1 extends mi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class is extends mi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let T2=0;const Dn=new At,sd=new gn,Cs=new j,xn=new cl,$o=new cl,It=new j;class ps extends Co{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:T2++}),this.uuid=Ro(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(o1(e)?p1:h1)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,n,i){return Dn.makeTranslation(e,n,i),this.applyMatrix4(Dn),this}scale(e,n,i){return Dn.makeScale(e,n,i),this.applyMatrix4(Dn),this}lookAt(e){return sd.lookAt(e),sd.updateMatrix(),this.applyMatrix4(sd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new is(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dm);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];$o.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(xn.min,$o.min),xn.expandByPoint(It),It.addVectors(xn.max,$o.max),xn.expandByPoint(It)):(xn.expandByPoint($o.min),xn.expandByPoint($o.max))}xn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)It.fromBufferAttribute(a,u),l&&(Cs.fromBufferAttribute(e,u),It.add(Cs)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mi(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let C=0;C<a;C++)u[C]=new j,c[C]=new j;const f=new j,d=new j,p=new j,g=new Qe,_=new Qe,m=new Qe,h=new j,y=new j;function v(C,U,L){f.fromArray(r,C*3),d.fromArray(r,U*3),p.fromArray(r,L*3),g.fromArray(o,C*2),_.fromArray(o,U*2),m.fromArray(o,L*2),d.sub(f),p.sub(f),_.sub(g),m.sub(g);const Q=1/(_.x*m.y-m.x*_.y);isFinite(Q)&&(h.copy(d).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(Q),y.copy(p).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(Q),u[C].add(h),u[U].add(h),u[L].add(h),c[C].add(y),c[U].add(y),c[L].add(y))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let C=0,U=x.length;C<U;++C){const L=x[C],Q=L.start,I=L.count;for(let k=Q,R=Q+I;k<R;k+=3)v(i[k+0],i[k+1],i[k+2])}const E=new j,w=new j,M=new j,A=new j;function S(C){M.fromArray(s,C*3),A.copy(M);const U=u[C];E.copy(U),E.sub(M.multiplyScalar(M.dot(U))).normalize(),w.crossVectors(A,U);const Q=w.dot(c[C])<0?-1:1;l[C*4]=E.x,l[C*4+1]=E.y,l[C*4+2]=E.z,l[C*4+3]=Q}for(let C=0,U=x.length;C<U;++C){const L=x[C],Q=L.start,I=L.count;for(let k=Q,R=Q+I;k<R;k+=3)S(i[k+0]),S(i[k+1]),S(i[k+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new j,s=new j,o=new j,a=new j,l=new j,u=new j,c=new j,f=new j;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)It.fromBufferAttribute(e,n),It.normalize(),e.setXYZ(n,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*c;for(let h=0;h<c;h++)d[g++]=u[p++]}return new mi(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ps,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,p=f.length;d<p;d++)c.push(f[d].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vv=new At,Fr=new c1,Yl=new dm,yv=new j,Rs=new j,Ps=new j,Ls=new j,od=new j,Kl=new j,Ql=new Qe,Zl=new Qe,Jl=new Qe,_v=new j,xv=new j,Sv=new j,eu=new j,tu=new j;class Di extends gn{constructor(e=new ps,n=new d1){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Kl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(od.fromBufferAttribute(f,e),o?Kl.addScaledVector(od,c):Kl.addScaledVector(od.sub(n),c))}n.add(Kl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Yl.copy(i.boundingSphere),Yl.applyMatrix4(s),Fr.copy(e.ray).recast(e.near),!(Yl.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(Yl,yv)===null||Fr.origin.distanceToSquared(yv)>(e.far-e.near)**2))&&(vv.copy(s).invert(),Fr.copy(e.ray).applyMatrix4(vv),!(i.boundingBox!==null&&Fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Fr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],h=o[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,E=v;x<E;x+=3){const w=a.getX(x),M=a.getX(x+1),A=a.getX(x+2);r=nu(this,h,e,i,u,c,f,w,M,A),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const y=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);r=nu(this,o,e,i,u,c,f,y,v,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],h=o[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,E=v;x<E;x+=3){const w=x,M=x+1,A=x+2;r=nu(this,h,e,i,u,c,f,w,M,A),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const y=m,v=m+1,x=m+2;r=nu(this,o,e,i,u,c,f,y,v,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function A2(t,e,n,i,r,s,o,a){let l;if(e.side===mn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===wr,a),l===null)return null;tu.copy(a),tu.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(tu);return u<n.near||u>n.far?null:{distance:u,point:tu.clone(),object:t}}function nu(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Rs),t.getVertexPosition(l,Ps),t.getVertexPosition(u,Ls);const c=A2(t,e,n,i,Rs,Ps,Ls,eu);if(c){r&&(Ql.fromBufferAttribute(r,a),Zl.fromBufferAttribute(r,l),Jl.fromBufferAttribute(r,u),c.uv=Jn.getInterpolation(eu,Rs,Ps,Ls,Ql,Zl,Jl,new Qe)),s&&(Ql.fromBufferAttribute(s,a),Zl.fromBufferAttribute(s,l),Jl.fromBufferAttribute(s,u),c.uv1=Jn.getInterpolation(eu,Rs,Ps,Ls,Ql,Zl,Jl,new Qe),c.uv2=c.uv1),o&&(_v.fromBufferAttribute(o,a),xv.fromBufferAttribute(o,l),Sv.fromBufferAttribute(o,u),c.normal=Jn.getInterpolation(eu,Rs,Ps,Ls,_v,xv,Sv,new j),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new j,materialIndex:0};Jn.getNormal(Rs,Ps,Ls,f.normal),c.face=f}return c}class fl extends ps{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new is(u,3)),this.setAttribute("normal",new is(c,3)),this.setAttribute("uv",new is(f,2));function g(_,m,h,y,v,x,E,w,M,A,S){const C=x/M,U=E/A,L=x/2,Q=E/2,I=w/2,k=M+1,R=A+1;let z=0,O=0;const V=new j;for(let W=0;W<R;W++){const X=W*U-Q;for(let D=0;D<k;D++){const G=D*C-L;V[_]=G*y,V[m]=X*v,V[h]=I,u.push(V.x,V.y,V.z),V[_]=0,V[m]=0,V[h]=w>0?1:-1,c.push(V.x,V.y,V.z),f.push(D/M),f.push(1-W/A),z+=1}}for(let W=0;W<A;W++)for(let X=0;X<M;X++){const D=d+X+k*W,G=d+X+k*(W+1),J=d+(X+1)+k*(W+1),ie=d+(X+1)+k*W;l.push(D,G,ie),l.push(G,J,ie),O+=6}a.addGroup(p,O,S),p+=O,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function So(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function en(t){const e={};for(let n=0;n<t.length;n++){const i=So(t[n]);for(const r in i)e[r]=i[r]}return e}function b2(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function m1(t){return t.getRenderTarget()===null?t.outputColorSpace:it.workingColorSpace}const C2={clone:So,merge:en};var R2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,P2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tr extends $c{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=R2,this.fragmentShader=P2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=So(e.uniforms),this.uniformsGroups=b2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class g1 extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=Li}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Mn extends g1{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Qa*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ga*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qa*2*Math.atan(Math.tan(ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ga*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ds=-90,Ns=1;class L2 extends gn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Mn(Ds,Ns,e,n);r.layers=this.layers,this.add(r);const s=new Mn(Ds,Ns,e,n);s.layers=this.layers,this.add(s);const o=new Mn(Ds,Ns,e,n);o.layers=this.layers,this.add(o);const a=new Mn(Ds,Ns,e,n);a.layers=this.layers,this.add(a);const l=new Mn(Ds,Ns,e,n);l.layers=this.layers,this.add(l);const u=new Mn(Ds,Ns,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===Li)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ac)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class v1 extends An{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:yo,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class D2 extends fs{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(ya("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ns?zt:zn),this.texture=new v1(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:kn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new fl(5,5,5),s=new Tr({name:"CubemapFromEquirect",uniforms:So(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:yr});s.uniforms.tEquirect.value=n;const o=new Di(r,s),a=n.minFilter;return n.minFilter===Ya&&(n.minFilter=kn),new L2(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const ad=new j,N2=new j,I2=new Ge;class Vr{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ad.subVectors(i,n).cross(N2.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ad),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||I2.getNormalMatrix(e),r=this.coplanarPoint(ad).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Or=new dm,iu=new j;class pm{constructor(e=new Vr,n=new Vr,i=new Vr,r=new Vr,s=new Vr,o=new Vr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Li){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],d=r[7],p=r[8],g=r[9],_=r[10],m=r[11],h=r[12],y=r[13],v=r[14],x=r[15];if(i[0].setComponents(l-s,d-u,m-p,x-h).normalize(),i[1].setComponents(l+s,d+u,m+p,x+h).normalize(),i[2].setComponents(l+o,d+c,m+g,x+y).normalize(),i[3].setComponents(l-o,d-c,m-g,x-y).normalize(),i[4].setComponents(l-a,d-f,m-_,x-v).normalize(),n===Li)i[5].setComponents(l+a,d+f,m+_,x+v).normalize();else if(n===ac)i[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(e){return Or.center.set(0,0,0),Or.radius=.7071067811865476,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(iu.x=r.normal.x>0?e.max.x:e.min.x,iu.y=r.normal.y>0?e.max.y:e.min.y,iu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(iu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function y1(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function U2(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,d=u.usage,p=f.byteLength,g=t.createBuffer();t.bindBuffer(c,g),t.bufferData(c,f,d),u.onUploadCallback();let _;if(f instanceof Float32Array)_=t.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=t.SHORT;else if(f instanceof Uint32Array)_=t.UNSIGNED_INT;else if(f instanceof Int32Array)_=t.INT;else if(f instanceof Int8Array)_=t.BYTE;else if(f instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:p}}function s(u,c,f){const d=c.array,p=c._updateRange,g=c.updateRanges;if(t.bindBuffer(f,u),p.count===-1&&g.length===0&&t.bufferSubData(f,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){const h=g[_];n?t.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d,h.start,h.count):t.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d.subarray(h.start,h.start+h.count))}c.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):t.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);if(f===void 0)i.set(u,r(u,c));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,u,c),f.version=u.version}}return{get:o,remove:a,update:l}}class Xc extends ps{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,d=n/l,p=[],g=[],_=[],m=[];for(let h=0;h<c;h++){const y=h*d-o;for(let v=0;v<u;v++){const x=v*f-s;g.push(x,-y,0),_.push(0,0,1),m.push(v/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let y=0;y<a;y++){const v=y+u*h,x=y+u*(h+1),E=y+1+u*(h+1),w=y+1+u*h;p.push(v,x,w),p.push(x,E,w)}this.setIndex(p),this.setAttribute("position",new is(g,3)),this.setAttribute("normal",new is(_,3)),this.setAttribute("uv",new is(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xc(e.width,e.height,e.widthSegments,e.heightSegments)}}var F2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,O2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,k2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,B2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,z2=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,V2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,H2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,G2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,W2=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,j2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,$2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,X2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,q2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Y2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,K2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Q2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Z2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,J2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,rC=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,sC=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,oC=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,aC=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,lC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dC="gl_FragColor = linearToOutputTexel( gl_FragColor );",hC=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,pC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,mC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gC=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_C=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,SC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,MC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,EC=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wC=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,TC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,RC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,PC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,LC=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,IC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,UC=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,FC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,OC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,BC=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zC=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VC=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,HC=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,GC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,WC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$C=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,YC=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,KC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,QC=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ZC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,JC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,eR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,oR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,fR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,yR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_R=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,SR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,MR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ER=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,TR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,AR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,RR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,PR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,LR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,DR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,NR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,IR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const UR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,HR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,GR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,WR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$R=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,KR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,eP=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tP=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nP=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,iP=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sP=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,oP=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aP=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lP=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uP=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fP=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dP=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:F2,alphahash_pars_fragment:O2,alphamap_fragment:k2,alphamap_pars_fragment:B2,alphatest_fragment:z2,alphatest_pars_fragment:V2,aomap_fragment:H2,aomap_pars_fragment:G2,batching_pars_vertex:W2,batching_vertex:j2,begin_vertex:$2,beginnormal_vertex:X2,bsdfs:q2,iridescence_fragment:Y2,bumpmap_pars_fragment:K2,clipping_planes_fragment:Q2,clipping_planes_pars_fragment:Z2,clipping_planes_pars_vertex:J2,clipping_planes_vertex:eC,color_fragment:tC,color_pars_fragment:nC,color_pars_vertex:iC,color_vertex:rC,common:sC,cube_uv_reflection_fragment:oC,defaultnormal_vertex:aC,displacementmap_pars_vertex:lC,displacementmap_vertex:uC,emissivemap_fragment:cC,emissivemap_pars_fragment:fC,colorspace_fragment:dC,colorspace_pars_fragment:hC,envmap_fragment:pC,envmap_common_pars_fragment:mC,envmap_pars_fragment:gC,envmap_pars_vertex:vC,envmap_physical_pars_fragment:RC,envmap_vertex:yC,fog_vertex:_C,fog_pars_vertex:xC,fog_fragment:SC,fog_pars_fragment:MC,gradientmap_pars_fragment:EC,lightmap_fragment:wC,lightmap_pars_fragment:TC,lights_lambert_fragment:AC,lights_lambert_pars_fragment:bC,lights_pars_begin:CC,lights_toon_fragment:PC,lights_toon_pars_fragment:LC,lights_phong_fragment:DC,lights_phong_pars_fragment:NC,lights_physical_fragment:IC,lights_physical_pars_fragment:UC,lights_fragment_begin:FC,lights_fragment_maps:OC,lights_fragment_end:kC,logdepthbuf_fragment:BC,logdepthbuf_pars_fragment:zC,logdepthbuf_pars_vertex:VC,logdepthbuf_vertex:HC,map_fragment:GC,map_pars_fragment:WC,map_particle_fragment:jC,map_particle_pars_fragment:$C,metalnessmap_fragment:XC,metalnessmap_pars_fragment:qC,morphcolor_vertex:YC,morphnormal_vertex:KC,morphtarget_pars_vertex:QC,morphtarget_vertex:ZC,normal_fragment_begin:JC,normal_fragment_maps:eR,normal_pars_fragment:tR,normal_pars_vertex:nR,normal_vertex:iR,normalmap_pars_fragment:rR,clearcoat_normal_fragment_begin:sR,clearcoat_normal_fragment_maps:oR,clearcoat_pars_fragment:aR,iridescence_pars_fragment:lR,opaque_fragment:uR,packing:cR,premultiplied_alpha_fragment:fR,project_vertex:dR,dithering_fragment:hR,dithering_pars_fragment:pR,roughnessmap_fragment:mR,roughnessmap_pars_fragment:gR,shadowmap_pars_fragment:vR,shadowmap_pars_vertex:yR,shadowmap_vertex:_R,shadowmask_pars_fragment:xR,skinbase_vertex:SR,skinning_pars_vertex:MR,skinning_vertex:ER,skinnormal_vertex:wR,specularmap_fragment:TR,specularmap_pars_fragment:AR,tonemapping_fragment:bR,tonemapping_pars_fragment:CR,transmission_fragment:RR,transmission_pars_fragment:PR,uv_pars_fragment:LR,uv_pars_vertex:DR,uv_vertex:NR,worldpos_vertex:IR,background_vert:UR,background_frag:FR,backgroundCube_vert:OR,backgroundCube_frag:kR,cube_vert:BR,cube_frag:zR,depth_vert:VR,depth_frag:HR,distanceRGBA_vert:GR,distanceRGBA_frag:WR,equirect_vert:jR,equirect_frag:$R,linedashed_vert:XR,linedashed_frag:qR,meshbasic_vert:YR,meshbasic_frag:KR,meshlambert_vert:QR,meshlambert_frag:ZR,meshmatcap_vert:JR,meshmatcap_frag:eP,meshnormal_vert:tP,meshnormal_frag:nP,meshphong_vert:iP,meshphong_frag:rP,meshphysical_vert:sP,meshphysical_frag:oP,meshtoon_vert:aP,meshtoon_frag:lP,points_vert:uP,points_frag:cP,shadow_vert:fP,shadow_frag:dP,sprite_vert:hP,sprite_frag:pP},he={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},fi={basic:{uniforms:en([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:en([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Je(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:en([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:en([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:en([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Je(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:en([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:en([he.points,he.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:en([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:en([he.common,he.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:en([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:en([he.sprite,he.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:en([he.common,he.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:en([he.lights,he.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};fi.physical={uniforms:en([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const ru={r:0,b:0,g:0};function mP(t,e,n,i,r,s,o){const a=new Je(0);let l=s===!0?0:1,u,c,f=null,d=0,p=null;function g(m,h){let y=!1,v=h.isScene===!0?h.background:null;v&&v.isTexture&&(v=(h.backgroundBlurriness>0?n:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),y=!0);const x=t.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,o):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Gc)?(c===void 0&&(c=new Di(new fl(1,1,1),new Tr({name:"BackgroundCubeMaterial",uniforms:So(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,w,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=it.getTransfer(v.colorSpace)!==at,(f!==v||d!==v.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=v,d=v.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new Di(new Xc(2,2),new Tr({name:"BackgroundMaterial",uniforms:So(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:wr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=it.getTransfer(v.colorSpace)!==at,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||d!==v.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=v,d=v.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function _(m,h){m.getRGB(ru,m1(t)),i.buffers.color.setClear(ru.r,ru.g,ru.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(m,h=1){a.set(m),l=h,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function gP(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,c=!1;function f(I,k,R,z,O){let V=!1;if(o){const W=_(z,R,k);u!==W&&(u=W,p(u.object)),V=h(I,z,R,O),V&&y(I,z,R,O)}else{const W=k.wireframe===!0;(u.geometry!==z.id||u.program!==R.id||u.wireframe!==W)&&(u.geometry=z.id,u.program=R.id,u.wireframe=W,V=!0)}O!==null&&n.update(O,t.ELEMENT_ARRAY_BUFFER),(V||c)&&(c=!1,A(I,k,R,z),O!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(O).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(I){return i.isWebGL2?t.bindVertexArray(I):s.bindVertexArrayOES(I)}function g(I){return i.isWebGL2?t.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function _(I,k,R){const z=R.wireframe===!0;let O=a[I.id];O===void 0&&(O={},a[I.id]=O);let V=O[k.id];V===void 0&&(V={},O[k.id]=V);let W=V[z];return W===void 0&&(W=m(d()),V[z]=W),W}function m(I){const k=[],R=[],z=[];for(let O=0;O<r;O++)k[O]=0,R[O]=0,z[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:R,attributeDivisors:z,object:I,attributes:{},index:null}}function h(I,k,R,z){const O=u.attributes,V=k.attributes;let W=0;const X=R.getAttributes();for(const D in X)if(X[D].location>=0){const J=O[D];let ie=V[D];if(ie===void 0&&(D==="instanceMatrix"&&I.instanceMatrix&&(ie=I.instanceMatrix),D==="instanceColor"&&I.instanceColor&&(ie=I.instanceColor)),J===void 0||J.attribute!==ie||ie&&J.data!==ie.data)return!0;W++}return u.attributesNum!==W||u.index!==z}function y(I,k,R,z){const O={},V=k.attributes;let W=0;const X=R.getAttributes();for(const D in X)if(X[D].location>=0){let J=V[D];J===void 0&&(D==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),D==="instanceColor"&&I.instanceColor&&(J=I.instanceColor));const ie={};ie.attribute=J,J&&J.data&&(ie.data=J.data),O[D]=ie,W++}u.attributes=O,u.attributesNum=W,u.index=z}function v(){const I=u.newAttributes;for(let k=0,R=I.length;k<R;k++)I[k]=0}function x(I){E(I,0)}function E(I,k){const R=u.newAttributes,z=u.enabledAttributes,O=u.attributeDivisors;R[I]=1,z[I]===0&&(t.enableVertexAttribArray(I),z[I]=1),O[I]!==k&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,k),O[I]=k)}function w(){const I=u.newAttributes,k=u.enabledAttributes;for(let R=0,z=k.length;R<z;R++)k[R]!==I[R]&&(t.disableVertexAttribArray(R),k[R]=0)}function M(I,k,R,z,O,V,W){W===!0?t.vertexAttribIPointer(I,k,R,O,V):t.vertexAttribPointer(I,k,R,z,O,V)}function A(I,k,R,z){if(i.isWebGL2===!1&&(I.isInstancedMesh||z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const O=z.attributes,V=R.getAttributes(),W=k.defaultAttributeValues;for(const X in V){const D=V[X];if(D.location>=0){let G=O[X];if(G===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(G=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(G=I.instanceColor)),G!==void 0){const J=G.normalized,ie=G.itemSize,te=n.get(G);if(te===void 0)continue;const ce=te.buffer,ye=te.type,xe=te.bytesPerElement,Se=i.isWebGL2===!0&&(ye===t.INT||ye===t.UNSIGNED_INT||G.gpuType===QS);if(G.isInterleavedBufferAttribute){const we=G.data,$=we.stride,bt=G.offset;if(we.isInstancedInterleavedBuffer){for(let Te=0;Te<D.locationSize;Te++)E(D.location+Te,we.meshPerAttribute);I.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let Te=0;Te<D.locationSize;Te++)x(D.location+Te);t.bindBuffer(t.ARRAY_BUFFER,ce);for(let Te=0;Te<D.locationSize;Te++)M(D.location+Te,ie/D.locationSize,ye,J,$*xe,(bt+ie/D.locationSize*Te)*xe,Se)}else{if(G.isInstancedBufferAttribute){for(let we=0;we<D.locationSize;we++)E(D.location+we,G.meshPerAttribute);I.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let we=0;we<D.locationSize;we++)x(D.location+we);t.bindBuffer(t.ARRAY_BUFFER,ce);for(let we=0;we<D.locationSize;we++)M(D.location+we,ie/D.locationSize,ye,J,ie*xe,ie/D.locationSize*we*xe,Se)}}else if(W!==void 0){const J=W[X];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(D.location,J);break;case 3:t.vertexAttrib3fv(D.location,J);break;case 4:t.vertexAttrib4fv(D.location,J);break;default:t.vertexAttrib1fv(D.location,J)}}}}w()}function S(){L();for(const I in a){const k=a[I];for(const R in k){const z=k[R];for(const O in z)g(z[O].object),delete z[O];delete k[R]}delete a[I]}}function C(I){if(a[I.id]===void 0)return;const k=a[I.id];for(const R in k){const z=k[R];for(const O in z)g(z[O].object),delete z[O];delete k[R]}delete a[I.id]}function U(I){for(const k in a){const R=a[k];if(R[I.id]===void 0)continue;const z=R[I.id];for(const O in z)g(z[O].object),delete z[O];delete R[I.id]}}function L(){Q(),c=!0,u!==l&&(u=l,p(u.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:L,resetDefaultState:Q,dispose:S,releaseStatesOfGeometry:C,releaseStatesOfProgram:U,initAttributes:v,enableAttribute:x,disableUnusedAttributes:w}}function vP(t,e,n,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,f){t.drawArrays(s,c,f),n.update(f,s,1)}function l(c,f,d){if(d===0)return;let p,g;if(r)p=t,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,c,f,d),n.update(f,s,d)}function u(c,f,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(c[g],f[g]);else{p.multiDrawArraysWEBGL(s,c,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=f[_];n.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function yP(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(M){if(M==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),h=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,x=o||e.has("OES_texture_float"),E=v&&x,w=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:x,floatVertexTextures:E,maxSamples:w}}function _P(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Vr,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=c(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{const y=s?0:i,v=y*4;let x=h.clippingState||null;l.value=x,x=c(g,d,v,p);for(let E=0;E!==v;++E)x[E]=n[E];h.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const h=p+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<h)&&(m=new Float32Array(h));for(let v=0,x=p;v!==_;++v,x+=4)o.copy(f[v]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function xP(t){let e=new WeakMap;function n(o,a){return a===Dh?o.mapping=yo:a===Nh&&(o.mapping=_o),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Dh||a===Nh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new D2(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class SP extends g1{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const qs=4,Mv=[.125,.215,.35,.446,.526,.582],Xr=20,ld=new SP,Ev=new Je;let ud=null,cd=0,fd=0;const Hr=(1+Math.sqrt(5))/2,Is=1/Hr,wv=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,Hr,Is),new j(0,Hr,-Is),new j(Is,0,Hr),new j(-Is,0,Hr),new j(Hr,Is,0),new j(-Hr,Is,0)];class Tv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){ud=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ud,cd,fd),e.scissorTest=!1,su(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===yo||e.mapping===_o?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ud=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:Ka,format:ti,colorSpace:Vi,depthBuffer:!1},r=Av(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Av(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=MP(s)),this._blurMaterial=EP(s,e,n)}return r}_compileMaterial(e){const n=new Di(this._lodPlanes[0],e);this._renderer.compile(n,ld)}_sceneToCubeUV(e,n,i,r){const a=new Mn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(Ev),c.toneMapping=_r,c.autoClear=!1;const p=new d1({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),g=new Di(new fl,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Ev),_=!0);for(let h=0;h<6;h++){const y=h%3;y===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):y===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const v=this._cubeSize;su(r,y*v,h>2?v:0,v,v),c.setRenderTarget(r),_&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===yo||e.mapping===_o;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Di(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;su(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ld)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=wv[(r-1)%wv.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Di(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Xr-1),_=s/g,m=isFinite(s)?1+Math.floor(c*_):Xr;m>Xr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xr}`);const h=[];let y=0;for(let M=0;M<Xr;++M){const A=M/_,S=Math.exp(-A*A/2);h.push(S),M===0?y+=S:M<m&&(y+=2*S)}for(let M=0;M<h.length;M++)h[M]=h[M]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;const x=this._sizeLods[r],E=3*x*(r>v-qs?r-v+qs:0),w=4*(this._cubeSize-x);su(n,E,w,3*x,2*x),l.setRenderTarget(n),l.render(f,ld)}}function MP(t){const e=[],n=[],i=[];let r=t;const s=t-qs+1+Mv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-qs?l=Mv[o-t+qs-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,g=6,_=3,m=2,h=1,y=new Float32Array(_*g*p),v=new Float32Array(m*g*p),x=new Float32Array(h*g*p);for(let w=0;w<p;w++){const M=w%3*2/3-1,A=w>2?0:-1,S=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];y.set(S,_*g*w),v.set(d,m*g*w);const C=[w,w,w,w,w,w];x.set(C,h*g*w)}const E=new ps;E.setAttribute("position",new mi(y,_)),E.setAttribute("uv",new mi(v,m)),E.setAttribute("faceIndex",new mi(x,h)),e.push(E),r>qs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Av(t,e,n){const i=new fs(t,e,n);return i.texture.mapping=Gc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function su(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function EP(t,e,n){const i=new Float32Array(Xr),r=new j(0,1,0);return new Tr({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:mm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function bv(){return new Tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Cv(){return new Tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function mm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wP(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Dh||l===Nh,c=l===yo||l===_o;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new Tv(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){n===null&&(n=new Tv(t));const d=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function TP(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function AP(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,h=_.length;m<h;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const _=p[g];for(let m=0,h=_.length;m<h;m++)e.update(_[m],t.ARRAY_BUFFER)}}function u(f){const d=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let v=0,x=y.length;v<x;v+=3){const E=y[v+0],w=y[v+1],M=y[v+2];d.push(E,w,w,M,M,E)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,x=y.length/3-1;v<x;v+=3){const E=v+0,w=v+1,M=v+2;d.push(E,w,w,M,M,E)}}else return;const m=new(o1(d)?p1:h1)(d,1);m.version=_;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function c(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function bP(t,e,n,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function c(p,g){t.drawElements(s,g,a,p*l),n.update(g,s,1)}function f(p,g,_){if(_===0)return;let m,h;if(r)m=t,h="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[h](s,g,a,p*l,_),n.update(g,s,_)}function d(p,g,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<_;h++)this.render(p[h]/l,g[h]);else{m.multiDrawElementsWEBGL(s,g,0,a,p,0,_);let h=0;for(let y=0;y<_;y++)h+=g[y];n.update(h,s,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=d}function CP(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function RP(t,e){return t[0]-e[0]}function PP(t,e){return Math.abs(e[1])-Math.abs(t[1])}function LP(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new ft,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(c);if(m===void 0||m.count!==_){let k=function(){Q.dispose(),s.delete(c),c.removeEventListener("dispose",k)};var p=k;m!==void 0&&m.texture.dispose();const v=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,E=c.morphAttributes.color!==void 0,w=c.morphAttributes.position||[],M=c.morphAttributes.normal||[],A=c.morphAttributes.color||[];let S=0;v===!0&&(S=1),x===!0&&(S=2),E===!0&&(S=3);let C=c.attributes.position.count*S,U=1;C>e.maxTextureSize&&(U=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const L=new Float32Array(C*U*4*_),Q=new u1(L,C,U,_);Q.type=lr,Q.needsUpdate=!0;const I=S*4;for(let R=0;R<_;R++){const z=w[R],O=M[R],V=A[R],W=C*U*4*R;for(let X=0;X<z.count;X++){const D=X*I;v===!0&&(o.fromBufferAttribute(z,X),L[W+D+0]=o.x,L[W+D+1]=o.y,L[W+D+2]=o.z,L[W+D+3]=0),x===!0&&(o.fromBufferAttribute(O,X),L[W+D+4]=o.x,L[W+D+5]=o.y,L[W+D+6]=o.z,L[W+D+7]=0),E===!0&&(o.fromBufferAttribute(V,X),L[W+D+8]=o.x,L[W+D+9]=o.y,L[W+D+10]=o.z,L[W+D+11]=V.itemSize===4?o.w:1)}}m={count:_,texture:Q,size:new Qe(C,U)},s.set(c,m),c.addEventListener("dispose",k)}let h=0;for(let v=0;v<d.length;v++)h+=d[v];const y=c.morphTargetsRelative?1:1-h;f.getUniforms().setValue(t,"morphTargetBaseInfluence",y),f.getUniforms().setValue(t,"morphTargetInfluences",d),f.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let _=i[c.id];if(_===void 0||_.length!==g){_=[];for(let x=0;x<g;x++)_[x]=[x,0];i[c.id]=_}for(let x=0;x<g;x++){const E=_[x];E[0]=x,E[1]=d[x]}_.sort(PP);for(let x=0;x<8;x++)x<g&&_[x][1]?(a[x][0]=_[x][0],a[x][1]=_[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(RP);const m=c.morphAttributes.position,h=c.morphAttributes.normal;let y=0;for(let x=0;x<8;x++){const E=a[x],w=E[0],M=E[1];w!==Number.MAX_SAFE_INTEGER&&M?(m&&c.getAttribute("morphTarget"+x)!==m[w]&&c.setAttribute("morphTarget"+x,m[w]),h&&c.getAttribute("morphNormal"+x)!==h[w]&&c.setAttribute("morphNormal"+x,h[w]),r[x]=M,y+=M):(m&&c.hasAttribute("morphTarget"+x)===!0&&c.deleteAttribute("morphTarget"+x),h&&c.hasAttribute("morphNormal"+x)===!0&&c.deleteAttribute("morphNormal"+x),r[x]=0)}const v=c.morphTargetsRelative?1:1-y;f.getUniforms().setValue(t,"morphTargetBaseInfluence",v),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function DP(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class _1 extends An{constructor(e,n,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:ts,c!==ts&&c!==xo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===ts&&(i=ar),i===void 0&&c===xo&&(i=es),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:rn,this.minFilter=l!==void 0?l:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const x1=new An,S1=new _1(1,1);S1.compareFunction=s1;const M1=new u1,E1=new m2,w1=new v1,Rv=[],Pv=[],Lv=new Float32Array(16),Dv=new Float32Array(9),Nv=new Float32Array(4);function Po(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Rv[r];if(s===void 0&&(s=new Float32Array(r),Rv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Pt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Lt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function qc(t,e){let n=Pv[e];n===void 0&&(n=new Int32Array(e),Pv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function NP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function IP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2fv(this.addr,e),Lt(n,e)}}function UP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Pt(n,e))return;t.uniform3fv(this.addr,e),Lt(n,e)}}function FP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4fv(this.addr,e),Lt(n,e)}}function OP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;Nv.set(i),t.uniformMatrix2fv(this.addr,!1,Nv),Lt(n,i)}}function kP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;Dv.set(i),t.uniformMatrix3fv(this.addr,!1,Dv),Lt(n,i)}}function BP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;Lv.set(i),t.uniformMatrix4fv(this.addr,!1,Lv),Lt(n,i)}}function zP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function VP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2iv(this.addr,e),Lt(n,e)}}function HP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3iv(this.addr,e),Lt(n,e)}}function GP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4iv(this.addr,e),Lt(n,e)}}function WP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function jP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2uiv(this.addr,e),Lt(n,e)}}function $P(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3uiv(this.addr,e),Lt(n,e)}}function XP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4uiv(this.addr,e),Lt(n,e)}}function qP(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?S1:x1;n.setTexture2D(e||s,r)}function YP(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||E1,r)}function KP(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||w1,r)}function QP(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||M1,r)}function ZP(t){switch(t){case 5126:return NP;case 35664:return IP;case 35665:return UP;case 35666:return FP;case 35674:return OP;case 35675:return kP;case 35676:return BP;case 5124:case 35670:return zP;case 35667:case 35671:return VP;case 35668:case 35672:return HP;case 35669:case 35673:return GP;case 5125:return WP;case 36294:return jP;case 36295:return $P;case 36296:return XP;case 35678:case 36198:case 36298:case 36306:case 35682:return qP;case 35679:case 36299:case 36307:return YP;case 35680:case 36300:case 36308:case 36293:return KP;case 36289:case 36303:case 36311:case 36292:return QP}}function JP(t,e){t.uniform1fv(this.addr,e)}function eL(t,e){const n=Po(e,this.size,2);t.uniform2fv(this.addr,n)}function tL(t,e){const n=Po(e,this.size,3);t.uniform3fv(this.addr,n)}function nL(t,e){const n=Po(e,this.size,4);t.uniform4fv(this.addr,n)}function iL(t,e){const n=Po(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function rL(t,e){const n=Po(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function sL(t,e){const n=Po(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function oL(t,e){t.uniform1iv(this.addr,e)}function aL(t,e){t.uniform2iv(this.addr,e)}function lL(t,e){t.uniform3iv(this.addr,e)}function uL(t,e){t.uniform4iv(this.addr,e)}function cL(t,e){t.uniform1uiv(this.addr,e)}function fL(t,e){t.uniform2uiv(this.addr,e)}function dL(t,e){t.uniform3uiv(this.addr,e)}function hL(t,e){t.uniform4uiv(this.addr,e)}function pL(t,e,n){const i=this.cache,r=e.length,s=qc(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||x1,s[o])}function mL(t,e,n){const i=this.cache,r=e.length,s=qc(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||E1,s[o])}function gL(t,e,n){const i=this.cache,r=e.length,s=qc(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||w1,s[o])}function vL(t,e,n){const i=this.cache,r=e.length,s=qc(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||M1,s[o])}function yL(t){switch(t){case 5126:return JP;case 35664:return eL;case 35665:return tL;case 35666:return nL;case 35674:return iL;case 35675:return rL;case 35676:return sL;case 5124:case 35670:return oL;case 35667:case 35671:return aL;case 35668:case 35672:return lL;case 35669:case 35673:return uL;case 5125:return cL;case 36294:return fL;case 36295:return dL;case 36296:return hL;case 35678:case 36198:case 36298:case 36306:case 35682:return pL;case 35679:case 36299:case 36307:return mL;case 35680:case 36300:case 36308:case 36293:return gL;case 36289:case 36303:case 36311:case 36292:return vL}}class _L{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=ZP(n.type)}}class xL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=yL(n.type)}}class SL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const dd=/(\w+)(\])?(\[|\.)?/g;function Iv(t,e){t.seq.push(e),t.map[e.id]=e}function ML(t,e,n){const i=t.name,r=i.length;for(dd.lastIndex=0;;){const s=dd.exec(i),o=dd.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Iv(n,u===void 0?new _L(a,t,e):new xL(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new SL(a),Iv(n,f)),n=f}}}class Tu{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);ML(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Uv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const EL=37297;let wL=0;function TL(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function AL(t){const e=it.getPrimaries(it.workingColorSpace),n=it.getPrimaries(t);let i;switch(e===n?i="":e===oc&&n===sc?i="LinearDisplayP3ToLinearSRGB":e===sc&&n===oc&&(i="LinearSRGBToLinearDisplayP3"),t){case Vi:case Wc:return[i,"LinearTransferOETF"];case zt:case cm:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Fv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+TL(t.getShaderSource(e),o)}else return r}function bL(t,e){const n=AL(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function CL(t,e){let n;switch(e){case wb:n="Linear";break;case Tb:n="Reinhard";break;case Ab:n="OptimizedCineon";break;case bb:n="ACESFilmic";break;case Cb:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function RL(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ta).join(`
`)}function PL(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function LL(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ta(t){return t!==""}function Ov(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const DL=/^[ \t]*#include +<([\w\d./]+)>/gm;function kh(t){return t.replace(DL,IL)}const NL=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function IL(t,e){let n=Be[e];if(n===void 0){const i=NL.get(e);if(i!==void 0)n=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return kh(n)}const UL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bv(t){return t.replace(UL,FL)}function FL(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function zv(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function OL(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===qS?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===ZA?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===wi&&(e="SHADOWMAP_TYPE_VSM"),e}function kL(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case yo:case _o:e="ENVMAP_TYPE_CUBE";break;case Gc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function BL(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case _o:e="ENVMAP_MODE_REFRACTION";break}return e}function zL(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case YS:e="ENVMAP_BLENDING_MULTIPLY";break;case Mb:e="ENVMAP_BLENDING_MIX";break;case Eb:e="ENVMAP_BLENDING_ADD";break}return e}function VL(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function HL(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=OL(n),u=kL(n),c=BL(n),f=zL(n),d=VL(n),p=n.isWebGL2?"":RL(n),g=PL(s),_=r.createProgram();let m,h,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ta).join(`
`),m.length>0&&(m+=`
`),h=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ta).join(`
`),h.length>0&&(h+=`
`)):(m=[zv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),h=[p,zv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==_r?"#define TONE_MAPPING":"",n.toneMapping!==_r?Be.tonemapping_pars_fragment:"",n.toneMapping!==_r?CL("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,bL("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ta).join(`
`)),o=kh(o),o=Ov(o,n),o=kv(o,n),a=kh(a),a=Ov(a,n),a=kv(a,n),o=Bv(o),a=Bv(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===rv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===rv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const v=y+m+o,x=y+h+a,E=Uv(r,r.VERTEX_SHADER,v),w=Uv(r,r.FRAGMENT_SHADER,x);r.attachShader(_,E),r.attachShader(_,w),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function M(U){if(t.debug.checkShaderErrors){const L=r.getProgramInfoLog(_).trim(),Q=r.getShaderInfoLog(E).trim(),I=r.getShaderInfoLog(w).trim();let k=!0,R=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(k=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,E,w);else{const z=Fv(r,E,"vertex"),O=Fv(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+L+`
`+z+`
`+O)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(Q===""||I==="")&&(R=!1);R&&(U.diagnostics={runnable:k,programLog:L,vertexShader:{log:Q,prefix:m},fragmentShader:{log:I,prefix:h}})}r.deleteShader(E),r.deleteShader(w),A=new Tu(r,_),S=LL(r,_)}let A;this.getUniforms=function(){return A===void 0&&M(this),A};let S;this.getAttributes=function(){return S===void 0&&M(this),S};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(_,EL)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=wL++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=w,this}let GL=0;class WL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new jL(e),n.set(e,i)),i}}class jL{constructor(e){this.id=GL++,this.code=e,this.usedTimes=0}}function $L(t,e,n,i,r,s,o){const a=new hm,l=new WL,u=[],c=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function m(S,C,U,L,Q){const I=L.fog,k=Q.geometry,R=S.isMeshStandardMaterial?L.environment:null,z=(S.isMeshStandardMaterial?n:e).get(S.envMap||R),O=z&&z.mapping===Gc?z.image.height:null,V=g[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const W=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,X=W!==void 0?W.length:0;let D=0;k.morphAttributes.position!==void 0&&(D=1),k.morphAttributes.normal!==void 0&&(D=2),k.morphAttributes.color!==void 0&&(D=3);let G,J,ie,te;if(V){const Qt=fi[V];G=Qt.vertexShader,J=Qt.fragmentShader}else G=S.vertexShader,J=S.fragmentShader,l.update(S),ie=l.getVertexShaderID(S),te=l.getFragmentShaderID(S);const ce=t.getRenderTarget(),ye=Q.isInstancedMesh===!0,xe=Q.isBatchedMesh===!0,Se=!!S.map,we=!!S.matcap,$=!!z,bt=!!S.aoMap,Te=!!S.lightMap,je=!!S.bumpMap,Pe=!!S.normalMap,dt=!!S.displacementMap,Ve=!!S.emissiveMap,Oe=!!S.metalnessMap,tt=!!S.roughnessMap,Ot=S.anisotropy>0,kt=S.clearcoat>0,P=S.iridescence>0,T=S.sheen>0,q=S.transmission>0,le=Ot&&!!S.anisotropyMap,re=kt&&!!S.clearcoatMap,ue=kt&&!!S.clearcoatNormalMap,Me=kt&&!!S.clearcoatRoughnessMap,de=P&&!!S.iridescenceMap,pe=P&&!!S.iridescenceThicknessMap,Le=T&&!!S.sheenColorMap,Ze=T&&!!S.sheenRoughnessMap,ae=!!S.specularMap,nt=!!S.specularColorMap,Ue=!!S.specularIntensityMap,De=q&&!!S.transmissionMap,Ae=q&&!!S.thicknessMap,_e=!!S.gradientMap,Xe=!!S.alphaMap,F=S.alphaTest>0,me=!!S.alphaHash,se=!!S.extensions,ee=!!k.attributes.uv1,fe=!!k.attributes.uv2,Re=!!k.attributes.uv3;let Ye=_r;return S.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Ye=t.toneMapping),{isWebGL2:c,shaderID:V,shaderType:S.type,shaderName:S.name,vertexShader:G,fragmentShader:J,defines:S.defines,customVertexShaderID:ie,customFragmentShaderID:te,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:xe,instancing:ye,instancingColor:ye&&Q.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ce===null?t.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Vi,map:Se,matcap:we,envMap:$,envMapMode:$&&z.mapping,envMapCubeUVHeight:O,aoMap:bt,lightMap:Te,bumpMap:je,normalMap:Pe,displacementMap:d&&dt,emissiveMap:Ve,normalMapObjectSpace:Pe&&S.normalMapType===Vb,normalMapTangentSpace:Pe&&S.normalMapType===zb,metalnessMap:Oe,roughnessMap:tt,anisotropy:Ot,anisotropyMap:le,clearcoat:kt,clearcoatMap:re,clearcoatNormalMap:ue,clearcoatRoughnessMap:Me,iridescence:P,iridescenceMap:de,iridescenceThicknessMap:pe,sheen:T,sheenColorMap:Le,sheenRoughnessMap:Ze,specularMap:ae,specularColorMap:nt,specularIntensityMap:Ue,transmission:q,transmissionMap:De,thicknessMap:Ae,gradientMap:_e,opaque:S.transparent===!1&&S.blending===ao,alphaMap:Xe,alphaTest:F,alphaHash:me,combine:S.combine,mapUv:Se&&_(S.map.channel),aoMapUv:bt&&_(S.aoMap.channel),lightMapUv:Te&&_(S.lightMap.channel),bumpMapUv:je&&_(S.bumpMap.channel),normalMapUv:Pe&&_(S.normalMap.channel),displacementMapUv:dt&&_(S.displacementMap.channel),emissiveMapUv:Ve&&_(S.emissiveMap.channel),metalnessMapUv:Oe&&_(S.metalnessMap.channel),roughnessMapUv:tt&&_(S.roughnessMap.channel),anisotropyMapUv:le&&_(S.anisotropyMap.channel),clearcoatMapUv:re&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ue&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&_(S.sheenRoughnessMap.channel),specularMapUv:ae&&_(S.specularMap.channel),specularColorMapUv:nt&&_(S.specularColorMap.channel),specularIntensityMapUv:Ue&&_(S.specularIntensityMap.channel),transmissionMapUv:De&&_(S.transmissionMap.channel),thicknessMapUv:Ae&&_(S.thicknessMap.channel),alphaMapUv:Xe&&_(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Pe||Ot),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:ee,vertexUv2s:fe,vertexUv3s:Re,pointsUvs:Q.isPoints===!0&&!!k.attributes.uv&&(Se||Xe),fog:!!I,useFog:S.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:Q.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:D,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ye,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Se&&S.map.isVideoTexture===!0&&it.getTransfer(S.map.colorSpace)===at,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ci,flipSided:S.side===mn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:se&&S.extensions.derivatives===!0,extensionFragDepth:se&&S.extensions.fragDepth===!0,extensionDrawBuffers:se&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:se&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function h(S){const C=[];if(S.shaderID?C.push(S.shaderID):(C.push(S.customVertexShaderID),C.push(S.customFragmentShaderID)),S.defines!==void 0)for(const U in S.defines)C.push(U),C.push(S.defines[U]);return S.isRawShaderMaterial===!1&&(y(C,S),v(C,S),C.push(t.outputColorSpace)),C.push(S.customProgramCacheKey),C.join()}function y(S,C){S.push(C.precision),S.push(C.outputColorSpace),S.push(C.envMapMode),S.push(C.envMapCubeUVHeight),S.push(C.mapUv),S.push(C.alphaMapUv),S.push(C.lightMapUv),S.push(C.aoMapUv),S.push(C.bumpMapUv),S.push(C.normalMapUv),S.push(C.displacementMapUv),S.push(C.emissiveMapUv),S.push(C.metalnessMapUv),S.push(C.roughnessMapUv),S.push(C.anisotropyMapUv),S.push(C.clearcoatMapUv),S.push(C.clearcoatNormalMapUv),S.push(C.clearcoatRoughnessMapUv),S.push(C.iridescenceMapUv),S.push(C.iridescenceThicknessMapUv),S.push(C.sheenColorMapUv),S.push(C.sheenRoughnessMapUv),S.push(C.specularMapUv),S.push(C.specularColorMapUv),S.push(C.specularIntensityMapUv),S.push(C.transmissionMapUv),S.push(C.thicknessMapUv),S.push(C.combine),S.push(C.fogExp2),S.push(C.sizeAttenuation),S.push(C.morphTargetsCount),S.push(C.morphAttributeCount),S.push(C.numDirLights),S.push(C.numPointLights),S.push(C.numSpotLights),S.push(C.numSpotLightMaps),S.push(C.numHemiLights),S.push(C.numRectAreaLights),S.push(C.numDirLightShadows),S.push(C.numPointLightShadows),S.push(C.numSpotLightShadows),S.push(C.numSpotLightShadowsWithMaps),S.push(C.numLightProbes),S.push(C.shadowMapType),S.push(C.toneMapping),S.push(C.numClippingPlanes),S.push(C.numClipIntersection),S.push(C.depthPacking)}function v(S,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),C.anisotropy&&a.enable(17),C.alphaHash&&a.enable(18),C.batching&&a.enable(19),S.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function x(S){const C=g[S.type];let U;if(C){const L=fi[C];U=C2.clone(L.uniforms)}else U=S.uniforms;return U}function E(S,C){let U;for(let L=0,Q=u.length;L<Q;L++){const I=u[L];if(I.cacheKey===C){U=I,++U.usedTimes;break}}return U===void 0&&(U=new HL(t,C,S,s),u.push(U)),U}function w(S){if(--S.usedTimes===0){const C=u.indexOf(S);u[C]=u[u.length-1],u.pop(),S.destroy()}}function M(S){l.remove(S)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:x,acquireProgram:E,releaseProgram:w,releaseShaderCache:M,programs:u,dispose:A}}function XL(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function qL(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Vv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Hv(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,g,_,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=_,h.group=m),e++,h}function a(f,d,p,g,_,m){const h=o(f,d,p,g,_,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,g,_,m){const h=o(f,d,p,g,_,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function u(f,d){n.length>1&&n.sort(f||qL),i.length>1&&i.sort(d||Vv),r.length>1&&r.sort(d||Vv)}function c(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function YL(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Hv,t.set(i,[o])):r>=s.length?(o=new Hv,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function KL(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new Je};break;case"SpotLight":n={position:new j,direction:new j,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function QL(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let ZL=0;function JL(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function e3(t,e){const n=new KL,i=QL(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new j);const s=new j,o=new At,a=new At;function l(c,f){let d=0,p=0,g=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let _=0,m=0,h=0,y=0,v=0,x=0,E=0,w=0,M=0,A=0,S=0;c.sort(JL);const C=f===!0?Math.PI:1;for(let L=0,Q=c.length;L<Q;L++){const I=c[L],k=I.color,R=I.intensity,z=I.distance,O=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=k.r*R*C,p+=k.g*R*C,g+=k.b*R*C;else if(I.isLightProbe){for(let V=0;V<9;V++)r.probe[V].addScaledVector(I.sh.coefficients[V],R);S++}else if(I.isDirectionalLight){const V=n.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity*C),I.castShadow){const W=I.shadow,X=i.get(I);X.shadowBias=W.bias,X.shadowNormalBias=W.normalBias,X.shadowRadius=W.radius,X.shadowMapSize=W.mapSize,r.directionalShadow[_]=X,r.directionalShadowMap[_]=O,r.directionalShadowMatrix[_]=I.shadow.matrix,x++}r.directional[_]=V,_++}else if(I.isSpotLight){const V=n.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(k).multiplyScalar(R*C),V.distance=z,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,r.spot[h]=V;const W=I.shadow;if(I.map&&(r.spotLightMap[M]=I.map,M++,W.updateMatrices(I),I.castShadow&&A++),r.spotLightMatrix[h]=W.matrix,I.castShadow){const X=i.get(I);X.shadowBias=W.bias,X.shadowNormalBias=W.normalBias,X.shadowRadius=W.radius,X.shadowMapSize=W.mapSize,r.spotShadow[h]=X,r.spotShadowMap[h]=O,w++}h++}else if(I.isRectAreaLight){const V=n.get(I);V.color.copy(k).multiplyScalar(R),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),r.rectArea[y]=V,y++}else if(I.isPointLight){const V=n.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity*C),V.distance=I.distance,V.decay=I.decay,I.castShadow){const W=I.shadow,X=i.get(I);X.shadowBias=W.bias,X.shadowNormalBias=W.normalBias,X.shadowRadius=W.radius,X.shadowMapSize=W.mapSize,X.shadowCameraNear=W.camera.near,X.shadowCameraFar=W.camera.far,r.pointShadow[m]=X,r.pointShadowMap[m]=O,r.pointShadowMatrix[m]=I.shadow.matrix,E++}r.point[m]=V,m++}else if(I.isHemisphereLight){const V=n.get(I);V.skyColor.copy(I.color).multiplyScalar(R*C),V.groundColor.copy(I.groundColor).multiplyScalar(R*C),r.hemi[v]=V,v++}}y>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=g;const U=r.hash;(U.directionalLength!==_||U.pointLength!==m||U.spotLength!==h||U.rectAreaLength!==y||U.hemiLength!==v||U.numDirectionalShadows!==x||U.numPointShadows!==E||U.numSpotShadows!==w||U.numSpotMaps!==M||U.numLightProbes!==S)&&(r.directional.length=_,r.spot.length=h,r.rectArea.length=y,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=w+M-A,r.spotLightMap.length=M,r.numSpotLightShadowsWithMaps=A,r.numLightProbes=S,U.directionalLength=_,U.pointLength=m,U.spotLength=h,U.rectAreaLength=y,U.hemiLength=v,U.numDirectionalShadows=x,U.numPointShadows=E,U.numSpotShadows=w,U.numSpotMaps=M,U.numLightProbes=S,r.version=ZL++)}function u(c,f){let d=0,p=0,g=0,_=0,m=0;const h=f.matrixWorldInverse;for(let y=0,v=c.length;y<v;y++){const x=c[y];if(x.isDirectionalLight){const E=r.directional[d];E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(h),d++}else if(x.isSpotLight){const E=r.spot[g];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(h),E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(h),g++}else if(x.isRectAreaLight){const E=r.rectArea[_];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(h),a.identity(),o.copy(x.matrixWorld),o.premultiply(h),a.extractRotation(o),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const E=r.point[p];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(h),p++}else if(x.isHemisphereLight){const E=r.hemi[m];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(h),m++}}}return{setup:l,setupView:u,state:r}}function Gv(t,e){const n=new e3(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function u(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function t3(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Gv(t,e),n.set(s,[l])):o>=a.length?(l=new Gv(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class n3 extends $c{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class i3 extends $c{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const r3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function o3(t,e,n){let i=new pm;const r=new Qe,s=new Qe,o=new ft,a=new n3({depthPacking:Bb}),l=new i3,u={},c=n.maxTextureSize,f={[wr]:mn,[mn]:wr,[Ci]:Ci},d=new Tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:r3,fragmentShader:s3}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new ps;g.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Di(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qS;let h=this.type;this.render=function(E,w,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const A=t.getRenderTarget(),S=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),U=t.state;U.setBlending(yr),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const L=h!==wi&&this.type===wi,Q=h===wi&&this.type!==wi;for(let I=0,k=E.length;I<k;I++){const R=E[I],z=R.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",R,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const O=z.getFrameExtents();if(r.multiply(O),s.copy(z.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/O.x),r.x=s.x*O.x,z.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/O.y),r.y=s.y*O.y,z.mapSize.y=s.y)),z.map===null||L===!0||Q===!0){const W=this.type!==wi?{minFilter:rn,magFilter:rn}:{};z.map!==null&&z.map.dispose(),z.map=new fs(r.x,r.y,W),z.map.texture.name=R.name+".shadowMap",z.camera.updateProjectionMatrix()}t.setRenderTarget(z.map),t.clear();const V=z.getViewportCount();for(let W=0;W<V;W++){const X=z.getViewport(W);o.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),U.viewport(o),z.updateMatrices(R,W),i=z.getFrustum(),x(w,M,z.camera,R,this.type)}z.isPointLightShadow!==!0&&this.type===wi&&y(z,M),z.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(A,S,C)};function y(E,w){const M=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new fs(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(w,null,M,d,_,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(w,null,M,p,_,null)}function v(E,w,M,A){let S=null;const C=M.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)S=C;else if(S=M.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const U=S.uuid,L=w.uuid;let Q=u[U];Q===void 0&&(Q={},u[U]=Q);let I=Q[L];I===void 0&&(I=S.clone(),Q[L]=I),S=I}if(S.visible=w.visible,S.wireframe=w.wireframe,A===wi?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:f[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,M.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const U=t.properties.get(S);U.light=M}return S}function x(E,w,M,A,S){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===wi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld);const L=e.update(E),Q=E.material;if(Array.isArray(Q)){const I=L.groups;for(let k=0,R=I.length;k<R;k++){const z=I[k],O=Q[z.materialIndex];if(O&&O.visible){const V=v(E,O,A,S);E.onBeforeShadow(t,E,w,M,L,V,z),t.renderBufferDirect(M,null,L,V,E,z),E.onAfterShadow(t,E,w,M,L,V,z)}}}else if(Q.visible){const I=v(E,Q,A,S);E.onBeforeShadow(t,E,w,M,L,I,null),t.renderBufferDirect(M,null,L,I,E,null),E.onAfterShadow(t,E,w,M,L,I,null)}}const U=E.children;for(let L=0,Q=U.length;L<Q;L++)x(U[L],w,M,A,S)}}function a3(t,e,n){const i=n.isWebGL2;function r(){let F=!1;const me=new ft;let se=null;const ee=new ft(0,0,0,0);return{setMask:function(fe){se!==fe&&!F&&(t.colorMask(fe,fe,fe,fe),se=fe)},setLocked:function(fe){F=fe},setClear:function(fe,Re,Ye,Dt,Qt){Qt===!0&&(fe*=Dt,Re*=Dt,Ye*=Dt),me.set(fe,Re,Ye,Dt),ee.equals(me)===!1&&(t.clearColor(fe,Re,Ye,Dt),ee.copy(me))},reset:function(){F=!1,se=null,ee.set(-1,0,0,0)}}}function s(){let F=!1,me=null,se=null,ee=null;return{setTest:function(fe){fe?xe(t.DEPTH_TEST):Se(t.DEPTH_TEST)},setMask:function(fe){me!==fe&&!F&&(t.depthMask(fe),me=fe)},setFunc:function(fe){if(se!==fe){switch(fe){case mb:t.depthFunc(t.NEVER);break;case gb:t.depthFunc(t.ALWAYS);break;case vb:t.depthFunc(t.LESS);break;case ic:t.depthFunc(t.LEQUAL);break;case yb:t.depthFunc(t.EQUAL);break;case _b:t.depthFunc(t.GEQUAL);break;case xb:t.depthFunc(t.GREATER);break;case Sb:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}se=fe}},setLocked:function(fe){F=fe},setClear:function(fe){ee!==fe&&(t.clearDepth(fe),ee=fe)},reset:function(){F=!1,me=null,se=null,ee=null}}}function o(){let F=!1,me=null,se=null,ee=null,fe=null,Re=null,Ye=null,Dt=null,Qt=null;return{setTest:function(rt){F||(rt?xe(t.STENCIL_TEST):Se(t.STENCIL_TEST))},setMask:function(rt){me!==rt&&!F&&(t.stencilMask(rt),me=rt)},setFunc:function(rt,Zt,ai){(se!==rt||ee!==Zt||fe!==ai)&&(t.stencilFunc(rt,Zt,ai),se=rt,ee=Zt,fe=ai)},setOp:function(rt,Zt,ai){(Re!==rt||Ye!==Zt||Dt!==ai)&&(t.stencilOp(rt,Zt,ai),Re=rt,Ye=Zt,Dt=ai)},setLocked:function(rt){F=rt},setClear:function(rt){Qt!==rt&&(t.clearStencil(rt),Qt=rt)},reset:function(){F=!1,me=null,se=null,ee=null,fe=null,Re=null,Ye=null,Dt=null,Qt=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,f=new WeakMap;let d={},p={},g=new WeakMap,_=[],m=null,h=!1,y=null,v=null,x=null,E=null,w=null,M=null,A=null,S=new Je(0,0,0),C=0,U=!1,L=null,Q=null,I=null,k=null,R=null;const z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,V=0;const W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(W)[1]),O=V>=1):W.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),O=V>=2);let X=null,D={};const G=t.getParameter(t.SCISSOR_BOX),J=t.getParameter(t.VIEWPORT),ie=new ft().fromArray(G),te=new ft().fromArray(J);function ce(F,me,se,ee){const fe=new Uint8Array(4),Re=t.createTexture();t.bindTexture(F,Re),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ye=0;Ye<se;Ye++)i&&(F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY)?t.texImage3D(me,0,t.RGBA,1,1,ee,0,t.RGBA,t.UNSIGNED_BYTE,fe):t.texImage2D(me+Ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,fe);return Re}const ye={};ye[t.TEXTURE_2D]=ce(t.TEXTURE_2D,t.TEXTURE_2D,1),ye[t.TEXTURE_CUBE_MAP]=ce(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ye[t.TEXTURE_2D_ARRAY]=ce(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ye[t.TEXTURE_3D]=ce(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),xe(t.DEPTH_TEST),l.setFunc(ic),Ve(!1),Oe(w0),xe(t.CULL_FACE),Pe(yr);function xe(F){d[F]!==!0&&(t.enable(F),d[F]=!0)}function Se(F){d[F]!==!1&&(t.disable(F),d[F]=!1)}function we(F,me){return p[F]!==me?(t.bindFramebuffer(F,me),p[F]=me,i&&(F===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=me),F===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=me)),!0):!1}function $(F,me){let se=_,ee=!1;if(F)if(se=g.get(me),se===void 0&&(se=[],g.set(me,se)),F.isWebGLMultipleRenderTargets){const fe=F.texture;if(se.length!==fe.length||se[0]!==t.COLOR_ATTACHMENT0){for(let Re=0,Ye=fe.length;Re<Ye;Re++)se[Re]=t.COLOR_ATTACHMENT0+Re;se.length=fe.length,ee=!0}}else se[0]!==t.COLOR_ATTACHMENT0&&(se[0]=t.COLOR_ATTACHMENT0,ee=!0);else se[0]!==t.BACK&&(se[0]=t.BACK,ee=!0);ee&&(n.isWebGL2?t.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function bt(F){return m!==F?(t.useProgram(F),m=F,!0):!1}const Te={[$r]:t.FUNC_ADD,[eb]:t.FUNC_SUBTRACT,[tb]:t.FUNC_REVERSE_SUBTRACT};if(i)Te[C0]=t.MIN,Te[R0]=t.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(Te[C0]=F.MIN_EXT,Te[R0]=F.MAX_EXT)}const je={[nb]:t.ZERO,[ib]:t.ONE,[rb]:t.SRC_COLOR,[Ph]:t.SRC_ALPHA,[cb]:t.SRC_ALPHA_SATURATE,[lb]:t.DST_COLOR,[ob]:t.DST_ALPHA,[sb]:t.ONE_MINUS_SRC_COLOR,[Lh]:t.ONE_MINUS_SRC_ALPHA,[ub]:t.ONE_MINUS_DST_COLOR,[ab]:t.ONE_MINUS_DST_ALPHA,[fb]:t.CONSTANT_COLOR,[db]:t.ONE_MINUS_CONSTANT_COLOR,[hb]:t.CONSTANT_ALPHA,[pb]:t.ONE_MINUS_CONSTANT_ALPHA};function Pe(F,me,se,ee,fe,Re,Ye,Dt,Qt,rt){if(F===yr){h===!0&&(Se(t.BLEND),h=!1);return}if(h===!1&&(xe(t.BLEND),h=!0),F!==JA){if(F!==y||rt!==U){if((v!==$r||w!==$r)&&(t.blendEquation(t.FUNC_ADD),v=$r,w=$r),rt)switch(F){case ao:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case T0:t.blendFunc(t.ONE,t.ONE);break;case A0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case b0:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ao:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case T0:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case A0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case b0:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}x=null,E=null,M=null,A=null,S.set(0,0,0),C=0,y=F,U=rt}return}fe=fe||me,Re=Re||se,Ye=Ye||ee,(me!==v||fe!==w)&&(t.blendEquationSeparate(Te[me],Te[fe]),v=me,w=fe),(se!==x||ee!==E||Re!==M||Ye!==A)&&(t.blendFuncSeparate(je[se],je[ee],je[Re],je[Ye]),x=se,E=ee,M=Re,A=Ye),(Dt.equals(S)===!1||Qt!==C)&&(t.blendColor(Dt.r,Dt.g,Dt.b,Qt),S.copy(Dt),C=Qt),y=F,U=!1}function dt(F,me){F.side===Ci?Se(t.CULL_FACE):xe(t.CULL_FACE);let se=F.side===mn;me&&(se=!se),Ve(se),F.blending===ao&&F.transparent===!1?Pe(yr):Pe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);const ee=F.stencilWrite;u.setTest(ee),ee&&(u.setMask(F.stencilWriteMask),u.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),u.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ot(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?xe(t.SAMPLE_ALPHA_TO_COVERAGE):Se(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(F){L!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),L=F)}function Oe(F){F!==KA?(xe(t.CULL_FACE),F!==Q&&(F===w0?t.cullFace(t.BACK):F===QA?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Se(t.CULL_FACE),Q=F}function tt(F){F!==I&&(O&&t.lineWidth(F),I=F)}function Ot(F,me,se){F?(xe(t.POLYGON_OFFSET_FILL),(k!==me||R!==se)&&(t.polygonOffset(me,se),k=me,R=se)):Se(t.POLYGON_OFFSET_FILL)}function kt(F){F?xe(t.SCISSOR_TEST):Se(t.SCISSOR_TEST)}function P(F){F===void 0&&(F=t.TEXTURE0+z-1),X!==F&&(t.activeTexture(F),X=F)}function T(F,me,se){se===void 0&&(X===null?se=t.TEXTURE0+z-1:se=X);let ee=D[se];ee===void 0&&(ee={type:void 0,texture:void 0},D[se]=ee),(ee.type!==F||ee.texture!==me)&&(X!==se&&(t.activeTexture(se),X=se),t.bindTexture(F,me||ye[F]),ee.type=F,ee.texture=me)}function q(){const F=D[X];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function le(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Le(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ze(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function nt(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ue(F){ie.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),ie.copy(F))}function De(F){te.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),te.copy(F))}function Ae(F,me){let se=f.get(me);se===void 0&&(se=new WeakMap,f.set(me,se));let ee=se.get(F);ee===void 0&&(ee=t.getUniformBlockIndex(me,F.name),se.set(F,ee))}function _e(F,me){const ee=f.get(me).get(F);c.get(me)!==ee&&(t.uniformBlockBinding(me,ee,F.__bindingPointIndex),c.set(me,ee))}function Xe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},X=null,D={},p={},g=new WeakMap,_=[],m=null,h=!1,y=null,v=null,x=null,E=null,w=null,M=null,A=null,S=new Je(0,0,0),C=0,U=!1,L=null,Q=null,I=null,k=null,R=null,ie.set(0,0,t.canvas.width,t.canvas.height),te.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:xe,disable:Se,bindFramebuffer:we,drawBuffers:$,useProgram:bt,setBlending:Pe,setMaterial:dt,setFlipSided:Ve,setCullFace:Oe,setLineWidth:tt,setPolygonOffset:Ot,setScissorTest:kt,activeTexture:P,bindTexture:T,unbindTexture:q,compressedTexImage2D:le,compressedTexImage3D:re,texImage2D:ae,texImage3D:nt,updateUBOMapping:Ae,uniformBlockBinding:_e,texStorage2D:Le,texStorage3D:Ze,texSubImage2D:ue,texSubImage3D:Me,compressedTexSubImage2D:de,compressedTexSubImage3D:pe,scissor:Ue,viewport:De,reset:Xe}}function l3(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(P,T){return h?new OffscreenCanvas(P,T):uc("canvas")}function v(P,T,q,le){let re=1;if((P.width>le||P.height>le)&&(re=le/Math.max(P.width,P.height)),re<1||T===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const ue=T?lc:Math.floor,Me=ue(re*P.width),de=ue(re*P.height);_===void 0&&(_=y(Me,de));const pe=q?y(Me,de):_;return pe.width=Me,pe.height=de,pe.getContext("2d").drawImage(P,0,0,Me,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Me+"x"+de+")."),pe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function x(P){return Oh(P.width)&&Oh(P.height)}function E(P){return a?!1:P.wrapS!==ei||P.wrapT!==ei||P.minFilter!==rn&&P.minFilter!==kn}function w(P,T){return P.generateMipmaps&&T&&P.minFilter!==rn&&P.minFilter!==kn}function M(P){t.generateMipmap(P)}function A(P,T,q,le,re=!1){if(a===!1)return T;if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ue=T;if(T===t.RED&&(q===t.FLOAT&&(ue=t.R32F),q===t.HALF_FLOAT&&(ue=t.R16F),q===t.UNSIGNED_BYTE&&(ue=t.R8)),T===t.RED_INTEGER&&(q===t.UNSIGNED_BYTE&&(ue=t.R8UI),q===t.UNSIGNED_SHORT&&(ue=t.R16UI),q===t.UNSIGNED_INT&&(ue=t.R32UI),q===t.BYTE&&(ue=t.R8I),q===t.SHORT&&(ue=t.R16I),q===t.INT&&(ue=t.R32I)),T===t.RG&&(q===t.FLOAT&&(ue=t.RG32F),q===t.HALF_FLOAT&&(ue=t.RG16F),q===t.UNSIGNED_BYTE&&(ue=t.RG8)),T===t.RGBA){const Me=re?rc:it.getTransfer(le);q===t.FLOAT&&(ue=t.RGBA32F),q===t.HALF_FLOAT&&(ue=t.RGBA16F),q===t.UNSIGNED_BYTE&&(ue=Me===at?t.SRGB8_ALPHA8:t.RGBA8),q===t.UNSIGNED_SHORT_4_4_4_4&&(ue=t.RGBA4),q===t.UNSIGNED_SHORT_5_5_5_1&&(ue=t.RGB5_A1)}return(ue===t.R16F||ue===t.R32F||ue===t.RG16F||ue===t.RG32F||ue===t.RGBA16F||ue===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function S(P,T,q){return w(P,q)===!0||P.isFramebufferTexture&&P.minFilter!==rn&&P.minFilter!==kn?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function C(P){return P===rn||P===P0||P===Bf?t.NEAREST:t.LINEAR}function U(P){const T=P.target;T.removeEventListener("dispose",U),Q(T),T.isVideoTexture&&g.delete(T)}function L(P){const T=P.target;T.removeEventListener("dispose",L),k(T)}function Q(P){const T=i.get(P);if(T.__webglInit===void 0)return;const q=P.source,le=m.get(q);if(le){const re=le[T.__cacheKey];re.usedTimes--,re.usedTimes===0&&I(P),Object.keys(le).length===0&&m.delete(q)}i.remove(P)}function I(P){const T=i.get(P);t.deleteTexture(T.__webglTexture);const q=P.source,le=m.get(q);delete le[T.__cacheKey],o.memory.textures--}function k(P){const T=P.texture,q=i.get(P),le=i.get(T);if(le.__webglTexture!==void 0&&(t.deleteTexture(le.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(q.__webglFramebuffer[re]))for(let ue=0;ue<q.__webglFramebuffer[re].length;ue++)t.deleteFramebuffer(q.__webglFramebuffer[re][ue]);else t.deleteFramebuffer(q.__webglFramebuffer[re]);q.__webglDepthbuffer&&t.deleteRenderbuffer(q.__webglDepthbuffer[re])}else{if(Array.isArray(q.__webglFramebuffer))for(let re=0;re<q.__webglFramebuffer.length;re++)t.deleteFramebuffer(q.__webglFramebuffer[re]);else t.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&t.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&t.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let re=0;re<q.__webglColorRenderbuffer.length;re++)q.__webglColorRenderbuffer[re]&&t.deleteRenderbuffer(q.__webglColorRenderbuffer[re]);q.__webglDepthRenderbuffer&&t.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let re=0,ue=T.length;re<ue;re++){const Me=i.get(T[re]);Me.__webglTexture&&(t.deleteTexture(Me.__webglTexture),o.memory.textures--),i.remove(T[re])}i.remove(T),i.remove(P)}let R=0;function z(){R=0}function O(){const P=R;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),R+=1,P}function V(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function W(P,T){const q=i.get(P);if(P.isVideoTexture&&Ot(P),P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){const le=P.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(q,P,T);return}}n.bindTexture(t.TEXTURE_2D,q.__webglTexture,t.TEXTURE0+T)}function X(P,T){const q=i.get(P);if(P.version>0&&q.__version!==P.version){xe(q,P,T);return}n.bindTexture(t.TEXTURE_2D_ARRAY,q.__webglTexture,t.TEXTURE0+T)}function D(P,T){const q=i.get(P);if(P.version>0&&q.__version!==P.version){xe(q,P,T);return}n.bindTexture(t.TEXTURE_3D,q.__webglTexture,t.TEXTURE0+T)}function G(P,T){const q=i.get(P);if(P.version>0&&q.__version!==P.version){Se(q,P,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture,t.TEXTURE0+T)}const J={[Ih]:t.REPEAT,[ei]:t.CLAMP_TO_EDGE,[Uh]:t.MIRRORED_REPEAT},ie={[rn]:t.NEAREST,[P0]:t.NEAREST_MIPMAP_NEAREST,[Bf]:t.NEAREST_MIPMAP_LINEAR,[kn]:t.LINEAR,[Rb]:t.LINEAR_MIPMAP_NEAREST,[Ya]:t.LINEAR_MIPMAP_LINEAR},te={[Hb]:t.NEVER,[qb]:t.ALWAYS,[Gb]:t.LESS,[s1]:t.LEQUAL,[Wb]:t.EQUAL,[Xb]:t.GEQUAL,[jb]:t.GREATER,[$b]:t.NOTEQUAL};function ce(P,T,q){if(q?(t.texParameteri(P,t.TEXTURE_WRAP_S,J[T.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,J[T.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,J[T.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,ie[T.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,ie[T.minFilter])):(t.texParameteri(P,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(P,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(T.wrapS!==ei||T.wrapT!==ei)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(P,t.TEXTURE_MAG_FILTER,C(T.magFilter)),t.texParameteri(P,t.TEXTURE_MIN_FILTER,C(T.minFilter)),T.minFilter!==rn&&T.minFilter!==kn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,te[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const le=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===rn||T.minFilter!==Bf&&T.minFilter!==Ya||T.type===lr&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===Ka&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(t.texParameterf(P,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function ye(P,T){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",U));const le=T.source;let re=m.get(le);re===void 0&&(re={},m.set(le,re));const ue=V(T);if(ue!==P.__cacheKey){re[ue]===void 0&&(re[ue]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,q=!0),re[ue].usedTimes++;const Me=re[P.__cacheKey];Me!==void 0&&(re[P.__cacheKey].usedTimes--,Me.usedTimes===0&&I(T)),P.__cacheKey=ue,P.__webglTexture=re[ue].texture}return q}function xe(P,T,q){let le=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(le=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(le=t.TEXTURE_3D);const re=ye(P,T),ue=T.source;n.bindTexture(le,P.__webglTexture,t.TEXTURE0+q);const Me=i.get(ue);if(ue.version!==Me.__version||re===!0){n.activeTexture(t.TEXTURE0+q);const de=it.getPrimaries(it.workingColorSpace),pe=T.colorSpace===zn?null:it.getPrimaries(T.colorSpace),Le=T.colorSpace===zn||de===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Ze=E(T)&&x(T.image)===!1;let ae=v(T.image,Ze,!1,c);ae=kt(T,ae);const nt=x(ae)||a,Ue=s.convert(T.format,T.colorSpace);let De=s.convert(T.type),Ae=A(T.internalFormat,Ue,De,T.colorSpace,T.isVideoTexture);ce(le,T,nt);let _e;const Xe=T.mipmaps,F=a&&T.isVideoTexture!==!0&&Ae!==i1,me=Me.__version===void 0||re===!0,se=S(T,ae,nt);if(T.isDepthTexture)Ae=t.DEPTH_COMPONENT,a?T.type===lr?Ae=t.DEPTH_COMPONENT32F:T.type===ar?Ae=t.DEPTH_COMPONENT24:T.type===es?Ae=t.DEPTH24_STENCIL8:Ae=t.DEPTH_COMPONENT16:T.type===lr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===ts&&Ae===t.DEPTH_COMPONENT&&T.type!==um&&T.type!==ar&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=ar,De=s.convert(T.type)),T.format===xo&&Ae===t.DEPTH_COMPONENT&&(Ae=t.DEPTH_STENCIL,T.type!==es&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=es,De=s.convert(T.type))),me&&(F?n.texStorage2D(t.TEXTURE_2D,1,Ae,ae.width,ae.height):n.texImage2D(t.TEXTURE_2D,0,Ae,ae.width,ae.height,0,Ue,De,null));else if(T.isDataTexture)if(Xe.length>0&&nt){F&&me&&n.texStorage2D(t.TEXTURE_2D,se,Ae,Xe[0].width,Xe[0].height);for(let ee=0,fe=Xe.length;ee<fe;ee++)_e=Xe[ee],F?n.texSubImage2D(t.TEXTURE_2D,ee,0,0,_e.width,_e.height,Ue,De,_e.data):n.texImage2D(t.TEXTURE_2D,ee,Ae,_e.width,_e.height,0,Ue,De,_e.data);T.generateMipmaps=!1}else F?(me&&n.texStorage2D(t.TEXTURE_2D,se,Ae,ae.width,ae.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ae.width,ae.height,Ue,De,ae.data)):n.texImage2D(t.TEXTURE_2D,0,Ae,ae.width,ae.height,0,Ue,De,ae.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){F&&me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,Ae,Xe[0].width,Xe[0].height,ae.depth);for(let ee=0,fe=Xe.length;ee<fe;ee++)_e=Xe[ee],T.format!==ti?Ue!==null?F?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,_e.width,_e.height,ae.depth,Ue,_e.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ee,Ae,_e.width,_e.height,ae.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,_e.width,_e.height,ae.depth,Ue,De,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ee,Ae,_e.width,_e.height,ae.depth,0,Ue,De,_e.data)}else{F&&me&&n.texStorage2D(t.TEXTURE_2D,se,Ae,Xe[0].width,Xe[0].height);for(let ee=0,fe=Xe.length;ee<fe;ee++)_e=Xe[ee],T.format!==ti?Ue!==null?F?n.compressedTexSubImage2D(t.TEXTURE_2D,ee,0,0,_e.width,_e.height,Ue,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,ee,Ae,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?n.texSubImage2D(t.TEXTURE_2D,ee,0,0,_e.width,_e.height,Ue,De,_e.data):n.texImage2D(t.TEXTURE_2D,ee,Ae,_e.width,_e.height,0,Ue,De,_e.data)}else if(T.isDataArrayTexture)F?(me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,Ae,ae.width,ae.height,ae.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Ue,De,ae.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ae,ae.width,ae.height,ae.depth,0,Ue,De,ae.data);else if(T.isData3DTexture)F?(me&&n.texStorage3D(t.TEXTURE_3D,se,Ae,ae.width,ae.height,ae.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Ue,De,ae.data)):n.texImage3D(t.TEXTURE_3D,0,Ae,ae.width,ae.height,ae.depth,0,Ue,De,ae.data);else if(T.isFramebufferTexture){if(me)if(F)n.texStorage2D(t.TEXTURE_2D,se,Ae,ae.width,ae.height);else{let ee=ae.width,fe=ae.height;for(let Re=0;Re<se;Re++)n.texImage2D(t.TEXTURE_2D,Re,Ae,ee,fe,0,Ue,De,null),ee>>=1,fe>>=1}}else if(Xe.length>0&&nt){F&&me&&n.texStorage2D(t.TEXTURE_2D,se,Ae,Xe[0].width,Xe[0].height);for(let ee=0,fe=Xe.length;ee<fe;ee++)_e=Xe[ee],F?n.texSubImage2D(t.TEXTURE_2D,ee,0,0,Ue,De,_e):n.texImage2D(t.TEXTURE_2D,ee,Ae,Ue,De,_e);T.generateMipmaps=!1}else F?(me&&n.texStorage2D(t.TEXTURE_2D,se,Ae,ae.width,ae.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ue,De,ae)):n.texImage2D(t.TEXTURE_2D,0,Ae,Ue,De,ae);w(T,nt)&&M(le),Me.__version=ue.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Se(P,T,q){if(T.image.length!==6)return;const le=ye(P,T),re=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+q);const ue=i.get(re);if(re.version!==ue.__version||le===!0){n.activeTexture(t.TEXTURE0+q);const Me=it.getPrimaries(it.workingColorSpace),de=T.colorSpace===zn?null:it.getPrimaries(T.colorSpace),pe=T.colorSpace===zn||Me===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Le=T.isCompressedTexture||T.image[0].isCompressedTexture,Ze=T.image[0]&&T.image[0].isDataTexture,ae=[];for(let ee=0;ee<6;ee++)!Le&&!Ze?ae[ee]=v(T.image[ee],!1,!0,u):ae[ee]=Ze?T.image[ee].image:T.image[ee],ae[ee]=kt(T,ae[ee]);const nt=ae[0],Ue=x(nt)||a,De=s.convert(T.format,T.colorSpace),Ae=s.convert(T.type),_e=A(T.internalFormat,De,Ae,T.colorSpace),Xe=a&&T.isVideoTexture!==!0,F=ue.__version===void 0||le===!0;let me=S(T,nt,Ue);ce(t.TEXTURE_CUBE_MAP,T,Ue);let se;if(Le){Xe&&F&&n.texStorage2D(t.TEXTURE_CUBE_MAP,me,_e,nt.width,nt.height);for(let ee=0;ee<6;ee++){se=ae[ee].mipmaps;for(let fe=0;fe<se.length;fe++){const Re=se[fe];T.format!==ti?De!==null?Xe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,0,0,Re.width,Re.height,De,Re.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,_e,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,0,0,Re.width,Re.height,De,Ae,Re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,_e,Re.width,Re.height,0,De,Ae,Re.data)}}}else{se=T.mipmaps,Xe&&F&&(se.length>0&&me++,n.texStorage2D(t.TEXTURE_CUBE_MAP,me,_e,ae[0].width,ae[0].height));for(let ee=0;ee<6;ee++)if(Ze){Xe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ae[ee].width,ae[ee].height,De,Ae,ae[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,_e,ae[ee].width,ae[ee].height,0,De,Ae,ae[ee].data);for(let fe=0;fe<se.length;fe++){const Ye=se[fe].image[ee].image;Xe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,0,0,Ye.width,Ye.height,De,Ae,Ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,_e,Ye.width,Ye.height,0,De,Ae,Ye.data)}}else{Xe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,De,Ae,ae[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,_e,De,Ae,ae[ee]);for(let fe=0;fe<se.length;fe++){const Re=se[fe];Xe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,0,0,De,Ae,Re.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,_e,De,Ae,Re.image[ee])}}}w(T,Ue)&&M(t.TEXTURE_CUBE_MAP),ue.__version=re.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function we(P,T,q,le,re,ue){const Me=s.convert(q.format,q.colorSpace),de=s.convert(q.type),pe=A(q.internalFormat,Me,de,q.colorSpace);if(!i.get(T).__hasExternalTextures){const Ze=Math.max(1,T.width>>ue),ae=Math.max(1,T.height>>ue);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,ue,pe,Ze,ae,T.depth,0,Me,de,null):n.texImage2D(re,ue,pe,Ze,ae,0,Me,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),tt(T)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,le,re,i.get(q).__webglTexture,0,Oe(T)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,le,re,i.get(q).__webglTexture,ue),n.bindFramebuffer(t.FRAMEBUFFER,null)}function $(P,T,q){if(t.bindRenderbuffer(t.RENDERBUFFER,P),T.depthBuffer&&!T.stencilBuffer){let le=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(q||tt(T)){const re=T.depthTexture;re&&re.isDepthTexture&&(re.type===lr?le=t.DEPTH_COMPONENT32F:re.type===ar&&(le=t.DEPTH_COMPONENT24));const ue=Oe(T);tt(T)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,le,T.width,T.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,le,T.width,T.height)}else t.renderbufferStorage(t.RENDERBUFFER,le,T.width,T.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,P)}else if(T.depthBuffer&&T.stencilBuffer){const le=Oe(T);q&&tt(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,le,t.DEPTH24_STENCIL8,T.width,T.height):tt(T)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,t.DEPTH24_STENCIL8,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,P)}else{const le=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let re=0;re<le.length;re++){const ue=le[re],Me=s.convert(ue.format,ue.colorSpace),de=s.convert(ue.type),pe=A(ue.internalFormat,Me,de,ue.colorSpace),Le=Oe(T);q&&tt(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,pe,T.width,T.height):tt(T)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Le,pe,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,pe,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function bt(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),W(T.depthTexture,0);const le=i.get(T.depthTexture).__webglTexture,re=Oe(T);if(T.depthTexture.format===ts)tt(T)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,le,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,le,0);else if(T.depthTexture.format===xo)tt(T)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,le,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Te(P){const T=i.get(P),q=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");bt(T.__webglFramebuffer,P)}else if(q){T.__webglDepthbuffer=[];for(let le=0;le<6;le++)n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[le]),T.__webglDepthbuffer[le]=t.createRenderbuffer(),$(T.__webglDepthbuffer[le],P,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=t.createRenderbuffer(),$(T.__webglDepthbuffer,P,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function je(P,T,q){const le=i.get(P);T!==void 0&&we(le.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),q!==void 0&&Te(P)}function Pe(P){const T=P.texture,q=i.get(P),le=i.get(T);P.addEventListener("dispose",L),P.isWebGLMultipleRenderTargets!==!0&&(le.__webglTexture===void 0&&(le.__webglTexture=t.createTexture()),le.__version=T.version,o.memory.textures++);const re=P.isWebGLCubeRenderTarget===!0,ue=P.isWebGLMultipleRenderTargets===!0,Me=x(P)||a;if(re){q.__webglFramebuffer=[];for(let de=0;de<6;de++)if(a&&T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer[de]=[];for(let pe=0;pe<T.mipmaps.length;pe++)q.__webglFramebuffer[de][pe]=t.createFramebuffer()}else q.__webglFramebuffer[de]=t.createFramebuffer()}else{if(a&&T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer=[];for(let de=0;de<T.mipmaps.length;de++)q.__webglFramebuffer[de]=t.createFramebuffer()}else q.__webglFramebuffer=t.createFramebuffer();if(ue)if(r.drawBuffers){const de=P.texture;for(let pe=0,Le=de.length;pe<Le;pe++){const Ze=i.get(de[pe]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&tt(P)===!1){const de=ue?T:[T];q.__webglMultisampledFramebuffer=t.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let pe=0;pe<de.length;pe++){const Le=de[pe];q.__webglColorRenderbuffer[pe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,q.__webglColorRenderbuffer[pe]);const Ze=s.convert(Le.format,Le.colorSpace),ae=s.convert(Le.type),nt=A(Le.internalFormat,Ze,ae,Le.colorSpace,P.isXRRenderTarget===!0),Ue=Oe(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,nt,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,q.__webglColorRenderbuffer[pe])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=t.createRenderbuffer(),$(q.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(re){n.bindTexture(t.TEXTURE_CUBE_MAP,le.__webglTexture),ce(t.TEXTURE_CUBE_MAP,T,Me);for(let de=0;de<6;de++)if(a&&T.mipmaps&&T.mipmaps.length>0)for(let pe=0;pe<T.mipmaps.length;pe++)we(q.__webglFramebuffer[de][pe],P,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,pe);else we(q.__webglFramebuffer[de],P,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);w(T,Me)&&M(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ue){const de=P.texture;for(let pe=0,Le=de.length;pe<Le;pe++){const Ze=de[pe],ae=i.get(Ze);n.bindTexture(t.TEXTURE_2D,ae.__webglTexture),ce(t.TEXTURE_2D,Ze,Me),we(q.__webglFramebuffer,P,Ze,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,0),w(Ze,Me)&&M(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?de=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(de,le.__webglTexture),ce(de,T,Me),a&&T.mipmaps&&T.mipmaps.length>0)for(let pe=0;pe<T.mipmaps.length;pe++)we(q.__webglFramebuffer[pe],P,T,t.COLOR_ATTACHMENT0,de,pe);else we(q.__webglFramebuffer,P,T,t.COLOR_ATTACHMENT0,de,0);w(T,Me)&&M(de),n.unbindTexture()}P.depthBuffer&&Te(P)}function dt(P){const T=x(P)||a,q=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let le=0,re=q.length;le<re;le++){const ue=q[le];if(w(ue,T)){const Me=P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,de=i.get(ue).__webglTexture;n.bindTexture(Me,de),M(Me),n.unbindTexture()}}}function Ve(P){if(a&&P.samples>0&&tt(P)===!1){const T=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],q=P.width,le=P.height;let re=t.COLOR_BUFFER_BIT;const ue=[],Me=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=i.get(P),pe=P.isWebGLMultipleRenderTargets===!0;if(pe)for(let Le=0;Le<T.length;Le++)n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Le=0;Le<T.length;Le++){ue.push(t.COLOR_ATTACHMENT0+Le),P.depthBuffer&&ue.push(Me);const Ze=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(Ze===!1&&(P.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),pe&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,de.__webglColorRenderbuffer[Le]),Ze===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Me]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Me])),pe){const ae=i.get(T[Le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ae,0)}t.blitFramebuffer(0,0,q,le,0,0,q,le,re,t.NEAREST),p&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ue)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),pe)for(let Le=0;Le<T.length;Le++){n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,de.__webglColorRenderbuffer[Le]);const Ze=i.get(T[Le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,Ze,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function Oe(P){return Math.min(f,P.samples)}function tt(P){const T=i.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ot(P){const T=o.render.frame;g.get(P)!==T&&(g.set(P,T),P.update())}function kt(P,T){const q=P.colorSpace,le=P.format,re=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Fh||q!==Vi&&q!==zn&&(it.getTransfer(q)===at?a===!1?e.has("EXT_sRGB")===!0&&le===ti?(P.format=Fh,P.minFilter=kn,P.generateMipmaps=!1):T=a1.sRGBToLinear(T):(le!==ti||re!==xr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),T}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=W,this.setTexture2DArray=X,this.setTexture3D=D,this.setTextureCube=G,this.rebindTextures=je,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=we,this.useMultisampledRTT=tt}function u3(t,e,n){const i=n.isWebGL2;function r(s,o=zn){let a;const l=it.getTransfer(o);if(s===xr)return t.UNSIGNED_BYTE;if(s===ZS)return t.UNSIGNED_SHORT_4_4_4_4;if(s===JS)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Pb)return t.BYTE;if(s===Lb)return t.SHORT;if(s===um)return t.UNSIGNED_SHORT;if(s===QS)return t.INT;if(s===ar)return t.UNSIGNED_INT;if(s===lr)return t.FLOAT;if(s===Ka)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Db)return t.ALPHA;if(s===ti)return t.RGBA;if(s===Nb)return t.LUMINANCE;if(s===Ib)return t.LUMINANCE_ALPHA;if(s===ts)return t.DEPTH_COMPONENT;if(s===xo)return t.DEPTH_STENCIL;if(s===Fh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Ub)return t.RED;if(s===e1)return t.RED_INTEGER;if(s===Fb)return t.RG;if(s===t1)return t.RG_INTEGER;if(s===n1)return t.RGBA_INTEGER;if(s===zf||s===Vf||s===Hf||s===Gf)if(l===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===zf)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Vf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Hf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Gf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===zf)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Vf)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Hf)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Gf)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===L0||s===D0||s===N0||s===I0)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===L0)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===D0)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===N0)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===I0)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===i1)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===U0||s===F0)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===U0)return l===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===F0)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===O0||s===k0||s===B0||s===z0||s===V0||s===H0||s===G0||s===W0||s===j0||s===$0||s===X0||s===q0||s===Y0||s===K0)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===O0)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===k0)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===B0)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===z0)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===V0)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===H0)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===G0)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===W0)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===j0)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===$0)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===X0)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===q0)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Y0)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===K0)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Wf||s===Q0||s===Z0)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Wf)return l===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Q0)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Z0)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ob||s===J0||s===ev||s===tv)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Wf)return a.COMPRESSED_RED_RGTC1_EXT;if(s===J0)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ev)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===tv)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===es?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class c3 extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ou extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const f3={type:"move"};class hd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ou,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ou,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ou,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),h=this._getHandJoint(u,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),p=.02,g=.005;u.inputState.pinching&&d>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(f3)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ou;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class d3 extends Co{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,d=null,p=null,g=null;const _=n.getContextAttributes();let m=null,h=null;const y=[],v=[],x=new Qe;let E=null;const w=new Mn;w.layers.enable(1),w.viewport=new ft;const M=new Mn;M.layers.enable(2),M.viewport=new ft;const A=[w,M],S=new c3;S.layers.enable(1),S.layers.enable(2);let C=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let J=y[G];return J===void 0&&(J=new hd,y[G]=J),J.getTargetRaySpace()},this.getControllerGrip=function(G){let J=y[G];return J===void 0&&(J=new hd,y[G]=J),J.getGripSpace()},this.getHand=function(G){let J=y[G];return J===void 0&&(J=new hd,y[G]=J),J.getHandSpace()};function L(G){const J=v.indexOf(G.inputSource);if(J===-1)return;const ie=y[J];ie!==void 0&&(ie.update(G.inputSource,G.frame,u||o),ie.dispatchEvent({type:G.type,data:G.inputSource}))}function Q(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",I);for(let G=0;G<y.length;G++){const J=v[G];J!==null&&(v[G]=null,y[G].disconnect(J))}C=null,U=null,e.setRenderTarget(m),p=null,d=null,f=null,r=null,h=null,D.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(x.width,x.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(G){u=G},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",I),_.xrCompatible!==!0&&await n.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(x),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,J),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),h=new fs(p.framebufferWidth,p.framebufferHeight,{format:ti,type:xr,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let J=null,ie=null,te=null;_.depth&&(te=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,J=_.stencil?xo:ts,ie=_.stencil?es:ar);const ce={colorFormat:n.RGBA8,depthFormat:te,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(ce),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),h=new fs(d.textureWidth,d.textureHeight,{format:ti,type:xr,depthTexture:new _1(d.textureWidth,d.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const ye=e.properties.get(h);ye.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),D.setContext(r),D.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function I(G){for(let J=0;J<G.removed.length;J++){const ie=G.removed[J],te=v.indexOf(ie);te>=0&&(v[te]=null,y[te].disconnect(ie))}for(let J=0;J<G.added.length;J++){const ie=G.added[J];let te=v.indexOf(ie);if(te===-1){for(let ye=0;ye<y.length;ye++)if(ye>=v.length){v.push(ie),te=ye;break}else if(v[ye]===null){v[ye]=ie,te=ye;break}if(te===-1)break}const ce=y[te];ce&&ce.connect(ie)}}const k=new j,R=new j;function z(G,J,ie){k.setFromMatrixPosition(J.matrixWorld),R.setFromMatrixPosition(ie.matrixWorld);const te=k.distanceTo(R),ce=J.projectionMatrix.elements,ye=ie.projectionMatrix.elements,xe=ce[14]/(ce[10]-1),Se=ce[14]/(ce[10]+1),we=(ce[9]+1)/ce[5],$=(ce[9]-1)/ce[5],bt=(ce[8]-1)/ce[0],Te=(ye[8]+1)/ye[0],je=xe*bt,Pe=xe*Te,dt=te/(-bt+Te),Ve=dt*-bt;J.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ve),G.translateZ(dt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const Oe=xe+dt,tt=Se+dt,Ot=je-Ve,kt=Pe+(te-Ve),P=we*Se/tt*Oe,T=$*Se/tt*Oe;G.projectionMatrix.makePerspective(Ot,kt,P,T,Oe,tt),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function O(G,J){J===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(J.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;S.near=M.near=w.near=G.near,S.far=M.far=w.far=G.far,(C!==S.near||U!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,U=S.far);const J=G.parent,ie=S.cameras;O(S,J);for(let te=0;te<ie.length;te++)O(ie[te],J);ie.length===2?z(S,w,M):S.projectionMatrix.copy(w.projectionMatrix),V(G,S,J)};function V(G,J,ie){ie===null?G.matrix.copy(J.matrixWorld):(G.matrix.copy(ie.matrixWorld),G.matrix.invert(),G.matrix.multiply(J.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(J.projectionMatrix),G.projectionMatrixInverse.copy(J.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Qa*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)};let W=null;function X(G,J){if(c=J.getViewerPose(u||o),g=J,c!==null){const ie=c.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let te=!1;ie.length!==S.cameras.length&&(S.cameras.length=0,te=!0);for(let ce=0;ce<ie.length;ce++){const ye=ie[ce];let xe=null;if(p!==null)xe=p.getViewport(ye);else{const we=f.getViewSubImage(d,ye);xe=we.viewport,ce===0&&(e.setRenderTargetTextures(h,we.colorTexture,d.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(h))}let Se=A[ce];Se===void 0&&(Se=new Mn,Se.layers.enable(ce),Se.viewport=new ft,A[ce]=Se),Se.matrix.fromArray(ye.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(ye.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(xe.x,xe.y,xe.width,xe.height),ce===0&&(S.matrix.copy(Se.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),te===!0&&S.cameras.push(Se)}}for(let ie=0;ie<y.length;ie++){const te=v[ie],ce=y[ie];te!==null&&ce!==void 0&&ce.update(te,J,u||o)}W&&W(G,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}const D=new y1;D.setAnimationLoop(X),this.setAnimationLoop=function(G){W=G},this.dispose=function(){}}}function h3(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,m1(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,y,v,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),c(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,x)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),_(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,y,v):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===mn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===mn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const y=e.get(h).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*v,n(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,y,v){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*y,m.scale.value=v*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,y){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===mn&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const y=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function p3(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const x=v.program;i.uniformBlockBinding(y,x)}function u(y,v){let x=r[y.id];x===void 0&&(g(y),x=c(y),r[y.id]=x,y.addEventListener("dispose",m));const E=v.program;i.updateUBOMapping(y,E);const w=e.render.frame;s[y.id]!==w&&(d(y),s[y.id]=w)}function c(y){const v=f();y.__bindingPointIndex=v;const x=t.createBuffer(),E=y.__size,w=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,E,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,x),x}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=r[y.id],x=y.uniforms,E=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let w=0,M=x.length;w<M;w++){const A=x[w];if(p(A,w,E)===!0){const S=A.__offset,C=Array.isArray(A.value)?A.value:[A.value];let U=0;for(let L=0;L<C.length;L++){const Q=C[L],I=_(Q);typeof Q=="number"?(A.__data[0]=Q,t.bufferSubData(t.UNIFORM_BUFFER,S+U,A.__data)):Q.isMatrix3?(A.__data[0]=Q.elements[0],A.__data[1]=Q.elements[1],A.__data[2]=Q.elements[2],A.__data[3]=Q.elements[0],A.__data[4]=Q.elements[3],A.__data[5]=Q.elements[4],A.__data[6]=Q.elements[5],A.__data[7]=Q.elements[0],A.__data[8]=Q.elements[6],A.__data[9]=Q.elements[7],A.__data[10]=Q.elements[8],A.__data[11]=Q.elements[0]):(Q.toArray(A.__data,U),U+=I.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,S,A.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(y,v,x){const E=y.value;if(x[v]===void 0){if(typeof E=="number")x[v]=E;else{const w=Array.isArray(E)?E:[E],M=[];for(let A=0;A<w.length;A++)M.push(w[A].clone());x[v]=M}return!0}else if(typeof E=="number"){if(x[v]!==E)return x[v]=E,!0}else{const w=Array.isArray(x[v])?x[v]:[x[v]],M=Array.isArray(E)?E:[E];for(let A=0;A<w.length;A++){const S=w[A];if(S.equals(M[A])===!1)return S.copy(M[A]),!0}}return!1}function g(y){const v=y.uniforms;let x=0;const E=16;let w=0;for(let M=0,A=v.length;M<A;M++){const S=v[M],C={boundary:0,storage:0},U=Array.isArray(S.value)?S.value:[S.value];for(let L=0,Q=U.length;L<Q;L++){const I=U[L],k=_(I);C.boundary+=k.boundary,C.storage+=k.storage}if(S.__data=new Float32Array(C.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=x,M>0){w=x%E;const L=E-w;w!==0&&L-C.boundary<0&&(x+=E-w,S.__offset=x)}x+=C.storage}return w=x%E,w>0&&(x+=E-w),y.__size=x,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function h(){for(const y in r)t.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}class T1{constructor(e={}){const{canvas:n=c2(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const h=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this._useLegacyLights=!1,this.toneMapping=_r,this.toneMappingExposure=1;const v=this;let x=!1,E=0,w=0,M=null,A=-1,S=null;const C=new ft,U=new ft;let L=null;const Q=new Je(0);let I=0,k=n.width,R=n.height,z=1,O=null,V=null;const W=new ft(0,0,k,R),X=new ft(0,0,k,R);let D=!1;const G=new pm;let J=!1,ie=!1,te=null;const ce=new At,ye=new Qe,xe=new j,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function we(){return M===null?z:1}let $=i;function bt(b,H){for(let K=0;K<b.length;K++){const Z=b[K],Y=n.getContext(Z,H);if(Y!==null)return Y}return null}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${lm}`),n.addEventListener("webglcontextlost",Xe,!1),n.addEventListener("webglcontextrestored",F,!1),n.addEventListener("webglcontextcreationerror",me,!1),$===null){const H=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&H.shift(),$=bt(H,b),$===null)throw bt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Te,je,Pe,dt,Ve,Oe,tt,Ot,kt,P,T,q,le,re,ue,Me,de,pe,Le,Ze,ae,nt,Ue,De;function Ae(){Te=new TP($),je=new yP($,Te,e),Te.init(je),nt=new u3($,Te,je),Pe=new a3($,Te,je),dt=new CP($),Ve=new XL,Oe=new l3($,Te,Pe,Ve,je,nt,dt),tt=new xP(v),Ot=new wP(v),kt=new U2($,je),Ue=new gP($,Te,kt,je),P=new AP($,kt,dt,Ue),T=new DP($,P,kt,dt),Le=new LP($,je,Oe),Me=new _P(Ve),q=new $L(v,tt,Ot,Te,je,Ue,Me),le=new h3(v,Ve),re=new YL,ue=new t3(Te,je),pe=new mP(v,tt,Ot,Pe,T,d,l),de=new o3(v,T,je),De=new p3($,dt,je,Pe),Ze=new vP($,Te,dt,je),ae=new bP($,Te,dt,je),dt.programs=q.programs,v.capabilities=je,v.extensions=Te,v.properties=Ve,v.renderLists=re,v.shadowMap=de,v.state=Pe,v.info=dt}Ae();const _e=new d3(v,$);this.xr=_e,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const b=Te.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Te.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(b){b!==void 0&&(z=b,this.setSize(k,R,!1))},this.getSize=function(b){return b.set(k,R)},this.setSize=function(b,H,K=!0){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=b,R=H,n.width=Math.floor(b*z),n.height=Math.floor(H*z),K===!0&&(n.style.width=b+"px",n.style.height=H+"px"),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set(k*z,R*z).floor()},this.setDrawingBufferSize=function(b,H,K){k=b,R=H,z=K,n.width=Math.floor(b*K),n.height=Math.floor(H*K),this.setViewport(0,0,b,H)},this.getCurrentViewport=function(b){return b.copy(C)},this.getViewport=function(b){return b.copy(W)},this.setViewport=function(b,H,K,Z){b.isVector4?W.set(b.x,b.y,b.z,b.w):W.set(b,H,K,Z),Pe.viewport(C.copy(W).multiplyScalar(z).floor())},this.getScissor=function(b){return b.copy(X)},this.setScissor=function(b,H,K,Z){b.isVector4?X.set(b.x,b.y,b.z,b.w):X.set(b,H,K,Z),Pe.scissor(U.copy(X).multiplyScalar(z).floor())},this.getScissorTest=function(){return D},this.setScissorTest=function(b){Pe.setScissorTest(D=b)},this.setOpaqueSort=function(b){O=b},this.setTransparentSort=function(b){V=b},this.getClearColor=function(b){return b.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(b=!0,H=!0,K=!0){let Z=0;if(b){let Y=!1;if(M!==null){const ge=M.texture.format;Y=ge===n1||ge===t1||ge===e1}if(Y){const ge=M.texture.type,Ee=ge===xr||ge===ar||ge===um||ge===es||ge===ZS||ge===JS,Ce=pe.getClearColor(),Ne=pe.getClearAlpha(),ze=Ce.r,Fe=Ce.g,ke=Ce.b;Ee?(p[0]=ze,p[1]=Fe,p[2]=ke,p[3]=Ne,$.clearBufferuiv($.COLOR,0,p)):(g[0]=ze,g[1]=Fe,g[2]=ke,g[3]=Ne,$.clearBufferiv($.COLOR,0,g))}else Z|=$.COLOR_BUFFER_BIT}H&&(Z|=$.DEPTH_BUFFER_BIT),K&&(Z|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Xe,!1),n.removeEventListener("webglcontextrestored",F,!1),n.removeEventListener("webglcontextcreationerror",me,!1),re.dispose(),ue.dispose(),Ve.dispose(),tt.dispose(),Ot.dispose(),T.dispose(),Ue.dispose(),De.dispose(),q.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Qt),_e.removeEventListener("sessionend",rt),te&&(te.dispose(),te=null),Zt.stop()};function Xe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const b=dt.autoReset,H=de.enabled,K=de.autoUpdate,Z=de.needsUpdate,Y=de.type;Ae(),dt.autoReset=b,de.enabled=H,de.autoUpdate=K,de.needsUpdate=Z,de.type=Y}function me(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function se(b){const H=b.target;H.removeEventListener("dispose",se),ee(H)}function ee(b){fe(b),Ve.remove(b)}function fe(b){const H=Ve.get(b).programs;H!==void 0&&(H.forEach(function(K){q.releaseProgram(K)}),b.isShaderMaterial&&q.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,K,Z,Y,ge){H===null&&(H=Se);const Ee=Y.isMesh&&Y.matrixWorld.determinant()<0,Ce=ZM(b,H,K,Z,Y);Pe.setMaterial(Z,Ee);let Ne=K.index,ze=1;if(Z.wireframe===!0){if(Ne=P.getWireframeAttribute(K),Ne===void 0)return;ze=2}const Fe=K.drawRange,ke=K.attributes.position;let xt=Fe.start*ze,yn=(Fe.start+Fe.count)*ze;ge!==null&&(xt=Math.max(xt,ge.start*ze),yn=Math.min(yn,(ge.start+ge.count)*ze)),Ne!==null?(xt=Math.max(xt,0),yn=Math.min(yn,Ne.count)):ke!=null&&(xt=Math.max(xt,0),yn=Math.min(yn,ke.count));const Nt=yn-xt;if(Nt<0||Nt===1/0)return;Ue.setup(Y,Z,Ce,K,Ne);let yi,ht=Ze;if(Ne!==null&&(yi=kt.get(Ne),ht=ae,ht.setIndex(yi)),Y.isMesh)Z.wireframe===!0?(Pe.setLineWidth(Z.wireframeLinewidth*we()),ht.setMode($.LINES)):ht.setMode($.TRIANGLES);else if(Y.isLine){let He=Z.linewidth;He===void 0&&(He=1),Pe.setLineWidth(He*we()),Y.isLineSegments?ht.setMode($.LINES):Y.isLineLoop?ht.setMode($.LINE_LOOP):ht.setMode($.LINE_STRIP)}else Y.isPoints?ht.setMode($.POINTS):Y.isSprite&&ht.setMode($.TRIANGLES);if(Y.isBatchedMesh)ht.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)ht.renderInstances(xt,Nt,Y.count);else if(K.isInstancedBufferGeometry){const He=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,nf=Math.min(K.instanceCount,He);ht.renderInstances(xt,Nt,nf)}else ht.render(xt,Nt)};function Re(b,H,K){b.transparent===!0&&b.side===Ci&&b.forceSinglePass===!1?(b.side=mn,b.needsUpdate=!0,vl(b,H,K),b.side=wr,b.needsUpdate=!0,vl(b,H,K),b.side=Ci):vl(b,H,K)}this.compile=function(b,H,K=null){K===null&&(K=b),m=ue.get(K),m.init(),y.push(m),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),b!==K&&b.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),m.setupLights(v._useLegacyLights);const Z=new Set;return b.traverse(function(Y){const ge=Y.material;if(ge)if(Array.isArray(ge))for(let Ee=0;Ee<ge.length;Ee++){const Ce=ge[Ee];Re(Ce,K,Y),Z.add(Ce)}else Re(ge,K,Y),Z.add(ge)}),y.pop(),m=null,Z},this.compileAsync=function(b,H,K=null){const Z=this.compile(b,H,K);return new Promise(Y=>{function ge(){if(Z.forEach(function(Ee){Ve.get(Ee).currentProgram.isReady()&&Z.delete(Ee)}),Z.size===0){Y(b);return}setTimeout(ge,10)}Te.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Ye=null;function Dt(b){Ye&&Ye(b)}function Qt(){Zt.stop()}function rt(){Zt.start()}const Zt=new y1;Zt.setAnimationLoop(Dt),typeof self<"u"&&Zt.setContext(self),this.setAnimationLoop=function(b){Ye=b,_e.setAnimationLoop(b),b===null?Zt.stop():Zt.start()},_e.addEventListener("sessionstart",Qt),_e.addEventListener("sessionend",rt),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(H),H=_e.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,H,M),m=ue.get(b,y.length),m.init(),y.push(m),ce.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),G.setFromProjectionMatrix(ce),ie=this.localClippingEnabled,J=Me.init(this.clippingPlanes,ie),_=re.get(b,h.length),_.init(),h.push(_),ai(b,H,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(O,V),this.info.render.frame++,J===!0&&Me.beginShadows();const K=m.state.shadowsArray;if(de.render(K,b,H),J===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),pe.render(_,b),m.setupLights(v._useLegacyLights),H.isArrayCamera){const Z=H.cameras;for(let Y=0,ge=Z.length;Y<ge;Y++){const Ee=Z[Y];Om(_,b,Ee,Ee.viewport)}}else Om(_,b,H);M!==null&&(Oe.updateMultisampleRenderTarget(M),Oe.updateRenderTargetMipmap(M)),b.isScene===!0&&b.onAfterRender(v,b,H),Ue.resetDefaultState(),A=-1,S=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function ai(b,H,K,Z){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)K=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||G.intersectsSprite(b)){Z&&xe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ce);const Ee=T.update(b),Ce=b.material;Ce.visible&&_.push(b,Ee,Ce,K,xe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||G.intersectsObject(b))){const Ee=T.update(b),Ce=b.material;if(Z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),xe.copy(b.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),xe.copy(Ee.boundingSphere.center)),xe.applyMatrix4(b.matrixWorld).applyMatrix4(ce)),Array.isArray(Ce)){const Ne=Ee.groups;for(let ze=0,Fe=Ne.length;ze<Fe;ze++){const ke=Ne[ze],xt=Ce[ke.materialIndex];xt&&xt.visible&&_.push(b,Ee,xt,K,xe.z,ke)}}else Ce.visible&&_.push(b,Ee,Ce,K,xe.z,null)}}const ge=b.children;for(let Ee=0,Ce=ge.length;Ee<Ce;Ee++)ai(ge[Ee],H,K,Z)}function Om(b,H,K,Z){const Y=b.opaque,ge=b.transmissive,Ee=b.transparent;m.setupLightsView(K),J===!0&&Me.setGlobalState(v.clippingPlanes,K),ge.length>0&&QM(Y,ge,H,K),Z&&Pe.viewport(C.copy(Z)),Y.length>0&&gl(Y,H,K),ge.length>0&&gl(ge,H,K),Ee.length>0&&gl(Ee,H,K),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function QM(b,H,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;const ge=je.isWebGL2;te===null&&(te=new fs(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")?Ka:xr,minFilter:Ya,samples:ge?4:0})),v.getDrawingBufferSize(ye),ge?te.setSize(ye.x,ye.y):te.setSize(lc(ye.x),lc(ye.y));const Ee=v.getRenderTarget();v.setRenderTarget(te),v.getClearColor(Q),I=v.getClearAlpha(),I<1&&v.setClearColor(16777215,.5),v.clear();const Ce=v.toneMapping;v.toneMapping=_r,gl(b,K,Z),Oe.updateMultisampleRenderTarget(te),Oe.updateRenderTargetMipmap(te);let Ne=!1;for(let ze=0,Fe=H.length;ze<Fe;ze++){const ke=H[ze],xt=ke.object,yn=ke.geometry,Nt=ke.material,yi=ke.group;if(Nt.side===Ci&&xt.layers.test(Z.layers)){const ht=Nt.side;Nt.side=mn,Nt.needsUpdate=!0,km(xt,K,Z,yn,Nt,yi),Nt.side=ht,Nt.needsUpdate=!0,Ne=!0}}Ne===!0&&(Oe.updateMultisampleRenderTarget(te),Oe.updateRenderTargetMipmap(te)),v.setRenderTarget(Ee),v.setClearColor(Q,I),v.toneMapping=Ce}function gl(b,H,K){const Z=H.isScene===!0?H.overrideMaterial:null;for(let Y=0,ge=b.length;Y<ge;Y++){const Ee=b[Y],Ce=Ee.object,Ne=Ee.geometry,ze=Z===null?Ee.material:Z,Fe=Ee.group;Ce.layers.test(K.layers)&&km(Ce,H,K,Ne,ze,Fe)}}function km(b,H,K,Z,Y,ge){b.onBeforeRender(v,H,K,Z,Y,ge),b.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(v,H,K,Z,b,ge),Y.transparent===!0&&Y.side===Ci&&Y.forceSinglePass===!1?(Y.side=mn,Y.needsUpdate=!0,v.renderBufferDirect(K,H,Z,Y,b,ge),Y.side=wr,Y.needsUpdate=!0,v.renderBufferDirect(K,H,Z,Y,b,ge),Y.side=Ci):v.renderBufferDirect(K,H,Z,Y,b,ge),b.onAfterRender(v,H,K,Z,Y,ge)}function vl(b,H,K){H.isScene!==!0&&(H=Se);const Z=Ve.get(b),Y=m.state.lights,ge=m.state.shadowsArray,Ee=Y.state.version,Ce=q.getParameters(b,Y.state,ge,H,K),Ne=q.getProgramCacheKey(Ce);let ze=Z.programs;Z.environment=b.isMeshStandardMaterial?H.environment:null,Z.fog=H.fog,Z.envMap=(b.isMeshStandardMaterial?Ot:tt).get(b.envMap||Z.environment),ze===void 0&&(b.addEventListener("dispose",se),ze=new Map,Z.programs=ze);let Fe=ze.get(Ne);if(Fe!==void 0){if(Z.currentProgram===Fe&&Z.lightsStateVersion===Ee)return zm(b,Ce),Fe}else Ce.uniforms=q.getUniforms(b),b.onBuild(K,Ce,v),b.onBeforeCompile(Ce,v),Fe=q.acquireProgram(Ce,Ne),ze.set(Ne,Fe),Z.uniforms=Ce.uniforms;const ke=Z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ke.clippingPlanes=Me.uniform),zm(b,Ce),Z.needsLights=eE(b),Z.lightsStateVersion=Ee,Z.needsLights&&(ke.ambientLightColor.value=Y.state.ambient,ke.lightProbe.value=Y.state.probe,ke.directionalLights.value=Y.state.directional,ke.directionalLightShadows.value=Y.state.directionalShadow,ke.spotLights.value=Y.state.spot,ke.spotLightShadows.value=Y.state.spotShadow,ke.rectAreaLights.value=Y.state.rectArea,ke.ltc_1.value=Y.state.rectAreaLTC1,ke.ltc_2.value=Y.state.rectAreaLTC2,ke.pointLights.value=Y.state.point,ke.pointLightShadows.value=Y.state.pointShadow,ke.hemisphereLights.value=Y.state.hemi,ke.directionalShadowMap.value=Y.state.directionalShadowMap,ke.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,ke.spotShadowMap.value=Y.state.spotShadowMap,ke.spotLightMatrix.value=Y.state.spotLightMatrix,ke.spotLightMap.value=Y.state.spotLightMap,ke.pointShadowMap.value=Y.state.pointShadowMap,ke.pointShadowMatrix.value=Y.state.pointShadowMatrix),Z.currentProgram=Fe,Z.uniformsList=null,Fe}function Bm(b){if(b.uniformsList===null){const H=b.currentProgram.getUniforms();b.uniformsList=Tu.seqWithValue(H.seq,b.uniforms)}return b.uniformsList}function zm(b,H){const K=Ve.get(b);K.outputColorSpace=H.outputColorSpace,K.batching=H.batching,K.instancing=H.instancing,K.instancingColor=H.instancingColor,K.skinning=H.skinning,K.morphTargets=H.morphTargets,K.morphNormals=H.morphNormals,K.morphColors=H.morphColors,K.morphTargetsCount=H.morphTargetsCount,K.numClippingPlanes=H.numClippingPlanes,K.numIntersection=H.numClipIntersection,K.vertexAlphas=H.vertexAlphas,K.vertexTangents=H.vertexTangents,K.toneMapping=H.toneMapping}function ZM(b,H,K,Z,Y){H.isScene!==!0&&(H=Se),Oe.resetTextureUnits();const ge=H.fog,Ee=Z.isMeshStandardMaterial?H.environment:null,Ce=M===null?v.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Vi,Ne=(Z.isMeshStandardMaterial?Ot:tt).get(Z.envMap||Ee),ze=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Fe=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),ke=!!K.morphAttributes.position,xt=!!K.morphAttributes.normal,yn=!!K.morphAttributes.color;let Nt=_r;Z.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Nt=v.toneMapping);const yi=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ht=yi!==void 0?yi.length:0,He=Ve.get(Z),nf=m.state.lights;if(J===!0&&(ie===!0||b!==S)){const Ln=b===S&&Z.id===A;Me.setState(Z,b,Ln)}let yt=!1;Z.version===He.__version?(He.needsLights&&He.lightsStateVersion!==nf.state.version||He.outputColorSpace!==Ce||Y.isBatchedMesh&&He.batching===!1||!Y.isBatchedMesh&&He.batching===!0||Y.isInstancedMesh&&He.instancing===!1||!Y.isInstancedMesh&&He.instancing===!0||Y.isSkinnedMesh&&He.skinning===!1||!Y.isSkinnedMesh&&He.skinning===!0||Y.isInstancedMesh&&He.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&He.instancingColor===!1&&Y.instanceColor!==null||He.envMap!==Ne||Z.fog===!0&&He.fog!==ge||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Me.numPlanes||He.numIntersection!==Me.numIntersection)||He.vertexAlphas!==ze||He.vertexTangents!==Fe||He.morphTargets!==ke||He.morphNormals!==xt||He.morphColors!==yn||He.toneMapping!==Nt||je.isWebGL2===!0&&He.morphTargetsCount!==ht)&&(yt=!0):(yt=!0,He.__version=Z.version);let Dr=He.currentProgram;yt===!0&&(Dr=vl(Z,H,Y));let Vm=!1,Lo=!1,rf=!1;const Gt=Dr.getUniforms(),Nr=He.uniforms;if(Pe.useProgram(Dr.program)&&(Vm=!0,Lo=!0,rf=!0),Z.id!==A&&(A=Z.id,Lo=!0),Vm||S!==b){Gt.setValue($,"projectionMatrix",b.projectionMatrix),Gt.setValue($,"viewMatrix",b.matrixWorldInverse);const Ln=Gt.map.cameraPosition;Ln!==void 0&&Ln.setValue($,xe.setFromMatrixPosition(b.matrixWorld)),je.logarithmicDepthBuffer&&Gt.setValue($,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Gt.setValue($,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,Lo=!0,rf=!0)}if(Y.isSkinnedMesh){Gt.setOptional($,Y,"bindMatrix"),Gt.setOptional($,Y,"bindMatrixInverse");const Ln=Y.skeleton;Ln&&(je.floatVertexTextures?(Ln.boneTexture===null&&Ln.computeBoneTexture(),Gt.setValue($,"boneTexture",Ln.boneTexture,Oe)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(Gt.setOptional($,Y,"batchingTexture"),Gt.setValue($,"batchingTexture",Y._matricesTexture,Oe));const sf=K.morphAttributes;if((sf.position!==void 0||sf.normal!==void 0||sf.color!==void 0&&je.isWebGL2===!0)&&Le.update(Y,K,Dr),(Lo||He.receiveShadow!==Y.receiveShadow)&&(He.receiveShadow=Y.receiveShadow,Gt.setValue($,"receiveShadow",Y.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Nr.envMap.value=Ne,Nr.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Lo&&(Gt.setValue($,"toneMappingExposure",v.toneMappingExposure),He.needsLights&&JM(Nr,rf),ge&&Z.fog===!0&&le.refreshFogUniforms(Nr,ge),le.refreshMaterialUniforms(Nr,Z,z,R,te),Tu.upload($,Bm(He),Nr,Oe)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Tu.upload($,Bm(He),Nr,Oe),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Gt.setValue($,"center",Y.center),Gt.setValue($,"modelViewMatrix",Y.modelViewMatrix),Gt.setValue($,"normalMatrix",Y.normalMatrix),Gt.setValue($,"modelMatrix",Y.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Ln=Z.uniformsGroups;for(let of=0,tE=Ln.length;of<tE;of++)if(je.isWebGL2){const Hm=Ln[of];De.update(Hm,Dr),De.bind(Hm,Dr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Dr}function JM(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function eE(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(b,H,K){Ve.get(b.texture).__webglTexture=H,Ve.get(b.depthTexture).__webglTexture=K;const Z=Ve.get(b);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=K===void 0,Z.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,H){const K=Ve.get(b);K.__webglFramebuffer=H,K.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(b,H=0,K=0){M=b,E=H,w=K;let Z=!0,Y=null,ge=!1,Ee=!1;if(b){const Ne=Ve.get(b);Ne.__useDefaultFramebuffer!==void 0?(Pe.bindFramebuffer($.FRAMEBUFFER,null),Z=!1):Ne.__webglFramebuffer===void 0?Oe.setupRenderTarget(b):Ne.__hasExternalTextures&&Oe.rebindTextures(b,Ve.get(b.texture).__webglTexture,Ve.get(b.depthTexture).__webglTexture);const ze=b.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ee=!0);const Fe=Ve.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Fe[H])?Y=Fe[H][K]:Y=Fe[H],ge=!0):je.isWebGL2&&b.samples>0&&Oe.useMultisampledRTT(b)===!1?Y=Ve.get(b).__webglMultisampledFramebuffer:Array.isArray(Fe)?Y=Fe[K]:Y=Fe,C.copy(b.viewport),U.copy(b.scissor),L=b.scissorTest}else C.copy(W).multiplyScalar(z).floor(),U.copy(X).multiplyScalar(z).floor(),L=D;if(Pe.bindFramebuffer($.FRAMEBUFFER,Y)&&je.drawBuffers&&Z&&Pe.drawBuffers(b,Y),Pe.viewport(C),Pe.scissor(U),Pe.setScissorTest(L),ge){const Ne=Ve.get(b.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ne.__webglTexture,K)}else if(Ee){const Ne=Ve.get(b.texture),ze=H||0;$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,Ne.__webglTexture,K||0,ze)}A=-1},this.readRenderTargetPixels=function(b,H,K,Z,Y,ge,Ee){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Ve.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce){Pe.bindFramebuffer($.FRAMEBUFFER,Ce);try{const Ne=b.texture,ze=Ne.format,Fe=Ne.type;if(ze!==ti&&nt.convert(ze)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Fe===Ka&&(Te.has("EXT_color_buffer_half_float")||je.isWebGL2&&Te.has("EXT_color_buffer_float"));if(Fe!==xr&&nt.convert(Fe)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===lr&&(je.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-Z&&K>=0&&K<=b.height-Y&&$.readPixels(H,K,Z,Y,nt.convert(ze),nt.convert(Fe),ge)}finally{const Ne=M!==null?Ve.get(M).__webglFramebuffer:null;Pe.bindFramebuffer($.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(b,H,K=0){const Z=Math.pow(2,-K),Y=Math.floor(H.image.width*Z),ge=Math.floor(H.image.height*Z);Oe.setTexture2D(H,0),$.copyTexSubImage2D($.TEXTURE_2D,K,0,0,b.x,b.y,Y,ge),Pe.unbindTexture()},this.copyTextureToTexture=function(b,H,K,Z=0){const Y=H.image.width,ge=H.image.height,Ee=nt.convert(K.format),Ce=nt.convert(K.type);Oe.setTexture2D(K,0),$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,K.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,K.unpackAlignment),H.isDataTexture?$.texSubImage2D($.TEXTURE_2D,Z,b.x,b.y,Y,ge,Ee,Ce,H.image.data):H.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,Z,b.x,b.y,H.mipmaps[0].width,H.mipmaps[0].height,Ee,H.mipmaps[0].data):$.texSubImage2D($.TEXTURE_2D,Z,b.x,b.y,Ee,Ce,H.image),Z===0&&K.generateMipmaps&&$.generateMipmap($.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(b,H,K,Z,Y=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=b.max.x-b.min.x+1,Ee=b.max.y-b.min.y+1,Ce=b.max.z-b.min.z+1,Ne=nt.convert(Z.format),ze=nt.convert(Z.type);let Fe;if(Z.isData3DTexture)Oe.setTexture3D(Z,0),Fe=$.TEXTURE_3D;else if(Z.isDataArrayTexture)Oe.setTexture2DArray(Z,0),Fe=$.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,Z.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,Z.unpackAlignment);const ke=$.getParameter($.UNPACK_ROW_LENGTH),xt=$.getParameter($.UNPACK_IMAGE_HEIGHT),yn=$.getParameter($.UNPACK_SKIP_PIXELS),Nt=$.getParameter($.UNPACK_SKIP_ROWS),yi=$.getParameter($.UNPACK_SKIP_IMAGES),ht=K.isCompressedTexture?K.mipmaps[0]:K.image;$.pixelStorei($.UNPACK_ROW_LENGTH,ht.width),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,ht.height),$.pixelStorei($.UNPACK_SKIP_PIXELS,b.min.x),$.pixelStorei($.UNPACK_SKIP_ROWS,b.min.y),$.pixelStorei($.UNPACK_SKIP_IMAGES,b.min.z),K.isDataTexture||K.isData3DTexture?$.texSubImage3D(Fe,Y,H.x,H.y,H.z,ge,Ee,Ce,Ne,ze,ht.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(Fe,Y,H.x,H.y,H.z,ge,Ee,Ce,Ne,ht.data)):$.texSubImage3D(Fe,Y,H.x,H.y,H.z,ge,Ee,Ce,Ne,ze,ht),$.pixelStorei($.UNPACK_ROW_LENGTH,ke),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,xt),$.pixelStorei($.UNPACK_SKIP_PIXELS,yn),$.pixelStorei($.UNPACK_SKIP_ROWS,Nt),$.pixelStorei($.UNPACK_SKIP_IMAGES,yi),Y===0&&Z.generateMipmaps&&$.generateMipmap(Fe),Pe.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?Oe.setTextureCube(b,0):b.isData3DTexture?Oe.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Oe.setTexture2DArray(b,0):Oe.setTexture2D(b,0),Pe.unbindTexture()},this.resetState=function(){E=0,w=0,M=null,Pe.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===cm?"display-p3":"srgb",n.unpackColorSpace=it.workingColorSpace===Wc?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===zt?ns:r1}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ns?zt:Vi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class m3 extends T1{}m3.prototype.isWebGL1Renderer=!0;class g3 extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class A1 extends gn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const pd=new At,Wv=new j,jv=new j;class v3{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pm,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Wv.setFromMatrixPosition(e.matrixWorld),n.position.copy(Wv),jv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(jv),n.updateMatrixWorld(),pd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(pd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const $v=new At,Xo=new j,md=new j;class y3 extends v3{constructor(){super(new Mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Qe(4,2),this._viewportCount=6,this._viewports=[new ft(2,1,1,1),new ft(0,1,1,1),new ft(3,1,1,1),new ft(1,1,1,1),new ft(3,0,1,1),new ft(1,0,1,1)],this._cubeDirections=[new j(1,0,0),new j(-1,0,0),new j(0,0,1),new j(0,0,-1),new j(0,1,0),new j(0,-1,0)],this._cubeUps=[new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,0,1),new j(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Xo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Xo),md.copy(i.position),md.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(md),i.updateMatrixWorld(),r.makeTranslation(-Xo.x,-Xo.y,-Xo.z),$v.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix($v)}}class _3 extends A1{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new y3}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class x3 extends A1{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class S3{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Xv();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Xv(){return(typeof performance>"u"?Date:performance).now()}class M3{constructor(e,n,i=0,r=1/0){this.ray=new c1(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new hm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return Bh(e,this,i,n),i.sort(qv),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Bh(e[r],this,i,n);return i.sort(qv),i}}function qv(t,e){return t.distance-e.distance}function Bh(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)Bh(r[s],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lm);const E3=()=>{const t=B.useRef(null),e=B.useRef(null),n=B.useRef(null),i=B.useRef(null),r=B.useRef(null),s=B.useRef(null),o=B.useRef(null),a=B.useRef({x:0,y:0}),l=B.useRef(null),u=B.useRef(null),[c,f]=B.useState(!1),[d,p]=B.useState(!1),[g,_]=B.useState({width:0,height:0}),m=B.useRef(null);B.useRef(null);const h=B.useRef(null),[y,v]=B.useState(!1),x=B.useRef(null),E=B.useRef(null),w=B.useRef(null),M=B.useRef(null),A={background:"#080808",primary:"#ffffff",accent:"#00f0ff",secondary:"#111111",tertiary:"#222222"};B.useEffect(()=>{const I=()=>{t.current&&_({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",I),I(),()=>window.removeEventListener("resize",I)},[]),B.useEffect(()=>{if(!e.current||g.width===0)return;o.current=new S3,r.current=new g3;const I=g.width/g.height;s.current=new Mn(50,I,.1,2e3),s.current.position.z=1e3,i.current=new T1({canvas:e.current,antialias:!0,alpha:!0}),i.current.setPixelRatio(window.devicePixelRatio>1?2:1),i.current.setSize(g.width,g.height),i.current.setClearColor(0,0),l.current=new M3,u.current={time:{value:0},resolution:{value:new Qe(g.width,g.height)},mouse:{value:new Qe(.5,.5)},intensity:{value:0}};const k=new Tr({uniforms:u.current,vertexShader:`
        varying vec2 vUv;
        
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float time;
        uniform vec2 resolution;
        uniform vec2 mouse;
        uniform float intensity;
        
        varying vec2 vUv;
        
        // Noise function
        float noise(vec2 p) {
          return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
        }
        
        // Smooth noise
        float smoothNoise(vec2 p) {
          vec2 ip = floor(p);
          vec2 fp = fract(p);
          
          fp = smoothstep(0.0, 1.0, fp);
          
          float n00 = noise(ip);
          float n01 = noise(ip + vec2(0.0, 1.0));
          float n10 = noise(ip + vec2(1.0, 0.0));
          float n11 = noise(ip + vec2(1.0, 1.0));
          
          float n0 = mix(n00, n01, fp.y);
          float n1 = mix(n10, n11, fp.y);
          
          return mix(n0, n1, fp.x);
        }
        
        // FBM (Fractal Brownian Motion)
        float fbm(vec2 p) {
          float f = 0.0;
          float a = 0.5;
          
          for (int i = 0; i < 5; i++) {
            f += a * smoothNoise(p);
            p *= 2.0;
            a *= 0.5;
          }
          
          return f;
        }
        
        void main() {
          // Normalized coordinates
          vec2 uv = vUv;
          
          // Mouse influence
          float distToMouse = distance(uv, mouse);
          float mouseInfluence = smoothstep(0.3, 0.0, distToMouse) * intensity;
          
          // Flow effect
          float t = time * 0.05;
          
          // Create flowing patterns with FBM
          vec2 flow1 = vec2(uv.x + sin(uv.y * 2.0 + t) * 0.05, uv.y + cos(uv.x * 2.0 - t) * 0.05);
          vec2 flow2 = vec2(uv.x + sin(uv.y * 3.0 - t * 1.2) * 0.07, uv.y + cos(uv.x * 3.0 + t * 1.4) * 0.07);
          
          float noise1 = fbm(flow1 * 3.0 + mouseInfluence);
          float noise2 = fbm(flow2 * 2.0 - mouseInfluence);
          
          // Combine noise patterns
          float pattern = noise1 * noise2;
          
          // Create flowing lines
          float lines = sin(uv.y * 100.0 + noise1 * 5.0) * sin(uv.x * 100.0 - noise2 * 5.0);
          lines = smoothstep(0.0, 0.1 + mouseInfluence * 0.2, abs(lines));
          
          // Final color with subtle gradient and lines
          vec3 baseColor = mix(
            vec3(0.03, 0.03, 0.04),
            vec3(0.06, 0.06, 0.08),
            uv.y
          );
          
          vec3 lineColor = mix(
            vec3(0.0, 0.9, 1.0),
            vec3(1.0, 1.0, 1.0),
            noise2
          );
          
          // Apply mouse highlight
          float highlight = smoothstep(0.3, 0.0, distToMouse) * intensity * 2.0;
          
          // More pronounced visual peak near mouse
          float peak = smoothstep(0.05, 0.0, distToMouse) * intensity * 5.0;
          
          // Combine all elements
          vec3 finalColor = mix(baseColor, lineColor, lines * 0.04 + highlight * 0.2 + peak * 0.4);
          
          // Add subtle vignette
          float vignette = 1.0 - smoothstep(0.5, 1.5, length(uv - 0.5) * 2.0);
          finalColor *= vignette * 1.2;
          
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `,transparent:!0}),R=new Xc(g.width,g.height),z=new Di(R,k);z.position.z=-100,r.current.add(z),h.current=z;const O=new x3(16777215,.4);r.current.add(O);const V=new _3(61695,1,1e3);V.position.set(0,0,200),r.current.add(V);const W=()=>{const X=o.current.getElapsedTime();if(u.current.time.value=X,V.position.x=(a.current.x-.5)*g.width*.8,V.position.y=(.5-a.current.y)*g.height*.8,V.intensity=d?1.5:.8,u.current.intensity.value=u2.lerp(u.current.intensity.value,d?1:.2,.05),n.current){const D=(a.current.y-.5)*.1,G=(a.current.x-.5)*.1;n.current.style.transform=`
          perspective(1000px) 
          rotateX(${D}rad) 
          rotateY(${G}rad)
        `}i.current.render(r.current,s.current),m.current=requestAnimationFrame(W)};return W(),f(!0),()=>{m.current&&cancelAnimationFrame(m.current),R.dispose(),k.dispose(),i.current&&i.current.dispose()}},[g]),B.useEffect(()=>{if(y)try{x.current=new(window.AudioContext||window.webkitAudioContext),E.current=x.current.createAnalyser(),E.current.fftSize=64;const I=E.current.frequencyBinCount;w.current=new Uint8Array(I);const k=x.current.createOscillator();k.type="sine",k.frequency.setValueAtTime(220,x.current.currentTime);const R=x.current.createGain();return R.gain.setValueAtTime(.05,x.current.currentTime),k.connect(R),R.connect(E.current),E.current.connect(x.current.destination),k.start(),M.current={oscillator:k,gainNode:R},()=>{M.current&&(M.current.oscillator.stop(),M.current.oscillator.disconnect(),M.current.gainNode.disconnect()),E.current&&E.current.disconnect(),x.current&&x.current.state!=="closed"&&x.current.close()}}catch(I){console.error("Audio initialization failed:",I)}},[y]);const S=I=>{if(a.current={x:I.clientX/g.width,y:I.clientY/g.height},u.current&&(u.current.mouse.value.x=a.current.x,u.current.mouse.value.y=a.current.y),y&&M.current&&x.current){const z=220+(a.current.x-.5)*100;M.current.oscillator.frequency.setValueAtTime(z,x.current.currentTime);const O=.05+a.current.y*.1;M.current.gainNode.gain.setValueAtTime(O,x.current.currentTime)}},C=()=>{p(!0)},U=()=>{p(!1)},L=()=>{!y&&x.current&&x.current.state==="suspended"&&x.current.resume()},Q={fontFamily:"'Space Grotesk', 'Inter', sans-serif",fontWeight:300,letterSpacing:"0.25em",textTransform:"uppercase",color:A.primary,fontSize:"clamp(2.5rem, 8vw, 6rem)",textAlign:"center",userSelect:"none"};return N.jsxs("div",{ref:t,className:"relative w-full h-screen overflow-hidden bg-[#080808]",onMouseMove:S,onMouseEnter:C,onMouseLeave:U,onClick:L,children:[N.jsx("canvas",{ref:e,className:"absolute top-0 left-0 w-full h-full z-0"}),N.jsx("div",{className:"relative w-full h-full flex items-center justify-center z-10",children:N.jsx("div",{ref:n,className:"relative transition-transform duration-700 ease-out transform-gpu will-change-transform",style:{transformStyle:"preserve-3d"},children:N.jsxs("div",{className:"relative",children:[N.jsx("h1",{className:"opacity-0 animate-fade-in",style:{...Q,animationDelay:"0.3s",animationDuration:"1.8s",animationFillMode:"forwards"},children:"We Innovate"}),N.jsx("div",{className:"relative mx-auto mt-4 h-px w-0 bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent animate-line-expand",children:[...Array(3)].map((I,k)=>N.jsx("div",{className:"absolute top-1/2 transform -translate-y-1/2 w-1 h-1 rounded-full bg-white shadow-glow opacity-0 animate-dot-appear",style:{left:`${(k+1)*25}%`,animationDelay:`${1+k*.4}s`}},`dot-${k}`))})]})})}),N.jsx("div",{className:"absolute inset-0 pointer-events-none",children:[...Array(4)].map((I,k)=>N.jsx("div",{className:"absolute w-12 h-12 opacity-0 animate-fade-in",style:{top:k<2?"20px":"auto",bottom:k>=2?"20px":"auto",left:k%2===0?"20px":"auto",right:k%2!==0?"20px":"auto",animationDelay:`${1.5+k*.2}s`,animationDuration:"2s",animationFillMode:"forwards"},children:N.jsxs("div",{className:"relative w-full h-full",children:[N.jsx("div",{className:"absolute bg-[#00f0ff]",style:{width:k%2===0?"2px":"12px",height:k%2===0?"12px":"2px",top:k<2?0:"auto",bottom:k>=2?0:"auto",left:k%2===0?0:"auto",right:k%2!==0?0:"auto",opacity:.6,boxShadow:"0 0 8px rgba(0, 240, 255, 0.6)"}}),N.jsx("div",{className:"absolute bg-[#00f0ff]",style:{width:k%2===0?"12px":"2px",height:k%2===0?"2px":"12px",top:k<2?0:"auto",bottom:k>=2?0:"auto",left:k%2===0?0:"auto",right:k%2!==0?0:"auto",opacity:.6,boxShadow:"0 0 8px rgba(0, 240, 255, 0.6)"}})]})},`corner-${k}`))}),!c&&N.jsx("div",{className:"absolute inset-0 bg-[#080808] flex items-center justify-center z-50",children:N.jsx("div",{className:"w-12 h-12 border-2 border-[#00f0ff] border-t-transparent rounded-full animate-spin"})}),N.jsx("div",{className:"absolute inset-0 pointer-events-none bg-radial-vignette z-20 opacity-60"}),N.jsx("div",{className:"absolute bottom-4 right-4 text-[10px] text-[#ffffff30] font-mono z-20",children:"Powered by NEXOR"}),N.jsx("style",{jsx:!0,global:!0,children:`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400&display=swap');
        
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes line-expand {
          0% {
            width: 0;
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% {
            width: 80%;
            opacity: 0.8;
          }
        }
        
        @keyframes dot-appear {
          0% {
            opacity: 0;
            transform: translateY(-50%) scale(0);
          }
          50% {
            opacity: 1;
            transform: translateY(-50%) scale(1.2);
          }
          100% {
            opacity: 0.8;
            transform: translateY(-50%) scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        
        .animate-line-expand {
          animation: line-expand 2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
          animation-delay: 0.8s;
        }
        
        .animate-dot-appear {
          animation: dot-appear 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }
        
        .shadow-glow {
          box-shadow: 0 0 8px 2px rgba(0, 240, 255, 0.6);
        }
        
        .bg-radial-vignette {
          background: radial-gradient(
            circle at center,
            transparent 40%,
            rgba(0, 0, 0, 0.4) 80%,
            rgba(0, 0, 0, 0.8) 100%
          );
        }
      `})]})},w3=()=>{const t=B.useRef(null),e=B.useRef(null),n=B.useRef(null),[i,r]=B.useState({width:0,height:0}),[s,o]=B.useState({x:0,y:0}),[a,l]=B.useState(!1),[u,c]=B.useState(!1),f=B.useRef(null),d=B.useRef([]),p=B.useRef([]);B.useEffect(()=>{const h=()=>{if(t.current){const{width:y,height:v}=t.current.getBoundingClientRect();r({width:y,height:v})}};return window.addEventListener("resize",h),h(),()=>window.removeEventListener("resize",h)},[]),B.useEffect(()=>{if(!e.current||i.width===0)return;const h=e.current,y=h.getContext("2d");h.width=i.width,h.height=i.height;const v=()=>{const M=[],A=Math.min(150,Math.floor(i.width*i.height/1e4));for(let S=0;S<A;S++)M.push({x:Math.random()*i.width,y:Math.random()*i.height,radius:Math.random()*2+1,color:E(.8),velocity:{x:(Math.random()-.5)*.7,y:(Math.random()-.5)*.7},life:Math.random()*.5+.5});d.current=M},x=()=>{const M=[];for(let S=0;S<i.height;S+=50)M.push({startX:0,startY:S,endX:i.width,endY:S,color:"rgba(255, 255, 255, 0.1)"});for(let S=0;S<i.width;S+=50)M.push({startX:S,startY:0,endX:S,endY:i.height,color:"rgba(255, 255, 255, 0.1)"});p.current=M},E=(M=1)=>{const A=[`rgba(0, 255, 255, ${M})`,`rgba(0, 191, 255, ${M})`,`rgba(0, 126, 255, ${M})`,`rgba(108, 0, 255, ${M})`,`rgba(200, 0, 255, ${M})`];return A[Math.floor(Math.random()*A.length)]},w=()=>{y.fillStyle="rgba(10, 12, 25, 0.3)",y.fillRect(0,0,h.width,h.height),p.current.forEach(M=>{y.beginPath(),y.moveTo(M.startX,M.startY),y.lineTo(M.endX,M.endY),y.strokeStyle=M.color,y.lineWidth=1,y.stroke()}),d.current.forEach((M,A)=>{if(M.x+=M.velocity.x,M.y+=M.velocity.y,M.x<-10&&(M.x=i.width+10),M.x>i.width+10&&(M.x=-10),M.y<-10&&(M.y=i.height+10),M.y>i.height+10&&(M.y=-10),y.beginPath(),y.arc(M.x,M.y,M.radius*M.life,0,Math.PI*2),y.fillStyle=M.color,y.fill(),d.current.forEach((S,C)=>{if(A!==C){const U=M.x-S.x,L=M.y-S.y,Q=Math.sqrt(U*U+L*L);if(Q<100){y.beginPath(),y.moveTo(M.x,M.y),y.lineTo(S.x,S.y);const I=(1-Q/100)*.2;y.strokeStyle=`rgba(255, 255, 255, ${I})`,y.lineWidth=1,y.stroke()}}}),s.x&&s.y){const S=M.x-s.x,C=M.y-s.y,U=Math.sqrt(S*S+C*C);if(U<120){const L=Math.atan2(C,S),Q=(1-U/120)*.5;if(M.velocity.x+=Math.cos(L)*Q,M.velocity.y+=Math.sin(L)*Q,U<80){y.beginPath(),y.moveTo(M.x,M.y),y.lineTo(s.x,s.y);const I=(1-U/80)*.3;y.strokeStyle=`rgba(255, 255, 255, ${I})`,y.lineWidth=1,y.stroke()}}}M.velocity.x*=.99,M.velocity.y*=.99,M.life+=(Math.random()-.5)*.01,M.life=Math.max(.3,Math.min(1,M.life))}),f.current=requestAnimationFrame(w)};return v(),x(),w(),setTimeout(()=>l(!0),500),()=>{f.current&&cancelAnimationFrame(f.current)}},[i,s]);const g=h=>{if(!t.current)return;const y=t.current.getBoundingClientRect();o({x:h.clientX-y.left,y:h.clientY-y.top})},_=()=>{c(!0)},m=()=>{c(!1)};return N.jsxs("div",{ref:t,className:"relative w-full h-screen overflow-hidden bg-gradient-to-b from-[#0B0E1F] to-[#151A36]",onMouseMove:g,children:[N.jsx("canvas",{ref:e,className:"absolute top-0 left-0 w-full h-full z-0"}),N.jsxs("div",{className:`absolute top-4 left-4 flex items-center transition-opacity duration-1000 ${a?"opacity-100":"opacity-0"}`,children:[N.jsx("div",{className:"w-2 h-2 rounded-full bg-[#00FFFF] mr-2 animate-pulse"}),N.jsx("span",{className:"text-xs font-mono text-gray-400 uppercase tracking-wider",children:"System Active"})]}),N.jsx("div",{className:"relative w-full h-full flex items-center justify-center z-10",children:N.jsxs("div",{ref:n,className:"relative group",onMouseEnter:_,onMouseLeave:m,children:[N.jsxs("div",{className:`relative transition-all duration-700 ease-in-out transform ${a?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`,children:[N.jsx("h1",{className:"text-5xl md:text-7xl lg:text-8xl font-light tracking-wider text-white relative z-10",children:"WE ENGINEER"}),N.jsx("div",{className:`absolute inset-0 blur-md transition-opacity duration-500 ${u?"opacity-70":"opacity-30"}`,children:N.jsx("h1",{className:"text-5xl md:text-7xl lg:text-8xl font-light tracking-wider text-[#00FFFF]",children:"WE ENGINEER"})}),N.jsxs("div",{className:"relative h-px mx-auto mt-6 bg-gradient-to-r from-transparent via-[#00FFFF] to-transparent overflow-hidden",children:[N.jsx("div",{className:`absolute inset-0 transition-transform duration-1000 ease-out ${a?"transform-none":"scale-x-0"}`}),N.jsx("div",{className:"absolute top-0 left-0 w-48 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-50 animate-line-scan"})]})]}),N.jsxs("div",{className:"absolute -inset-4 z-0 opacity-0 group-hover:opacity-70 transition-opacity duration-700",children:[N.jsx("div",{className:"absolute left-0 top-0 w-8 h-8 border-l-2 border-t-2 border-[#00FFFF] opacity-80"}),N.jsx("div",{className:"absolute right-0 top-0 w-8 h-8 border-r-2 border-t-2 border-[#00FFFF] opacity-80"}),N.jsx("div",{className:"absolute left-0 bottom-0 w-8 h-8 border-l-2 border-b-2 border-[#00FFFF] opacity-80"}),N.jsx("div",{className:"absolute right-0 bottom-0 w-8 h-8 border-r-2 border-b-2 border-[#00FFFF] opacity-80"})]})]})}),N.jsxs("div",{className:"absolute top-0 left-0 w-full h-full pointer-events-none z-5",children:[N.jsx("div",{className:"absolute top-0 left-0 w-full h-full opacity-20 bg-scan-lines"}),N.jsx("div",{className:"absolute top-0 left-0 w-full h-full opacity-30 bg-radial-gradient"})]}),N.jsx("div",{className:"absolute bottom-4 right-4 text-[10px] text-[#ffffff30] font-mono z-20",children:"Powered by NEXOR"}),N.jsx("style",{jsx:!0,global:!0,children:`
        @keyframes line-scan {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-line-scan {
          animation: line-scan 3s infinite ease-out;
        }
        
        .bg-scan-lines {
          background-image: linear-gradient(
            0deg,
            transparent 0%,
            transparent 98%,
            rgba(255, 255, 255, 0.08) 100%
          );
          background-size: 100% 3px;
        }
        
        .bg-radial-gradient {
          background: radial-gradient(
            circle at center,
            rgba(0, 255, 255, 0.1) 0%,
            transparent 70%
          );
        }
      `})]})},T3=()=>{const t=B.useRef(null);B.useRef(null);const e=B.useRef(null),n=B.useRef(null),i=B.useRef(null),r=B.useRef(null),s=B.useRef(null),o=B.useRef(null),a=B.useRef(null),l=B.useRef(0),[u,c]=B.useState({width:0,height:0}),[f,d]=B.useState(!1),[p,g]=B.useState({x:0,y:0}),[_,m]=B.useState({x:0,y:0}),[h,y]=B.useState(0),[v,x]=B.useState(0),[E,w]=B.useState(!1),M=B.useRef([]);B.useRef([]);const A=B.useRef([]),S=B.useRef([]);B.useEffect(()=>{const U=()=>{if(t.current){const{width:L,height:Q}=t.current.getBoundingClientRect();c({width:L,height:Q})}};return window.addEventListener("resize",U),U(),()=>window.removeEventListener("resize",U)},[]),B.useEffect(()=>{if(!n.current||u.width===0)return;const U=n.current,L=U.getContext("2d");U.width=u.width,U.height=u.height;const Q=()=>{const R=[];for(let O=0;O<5;O++)R.push({x:Math.random()*u.width,y:Math.random()*u.height,radius:u.width*(.3+Math.random()*.2),color:I(),vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,age:Math.random()*100});S.current=R},I=()=>{const R=[{r:255,g:60,b:172,a:.5},{r:120,g:75,b:160,a:.5},{r:43,g:134,b:197,a:.5},{r:0,g:184,b:230,a:.5},{r:252,g:187,b:145,a:.5}];return R[Math.floor(Math.random()*R.length)]},k=()=>{L.fillStyle="rgba(10, 1, 24, 0.03)",L.fillRect(0,0,U.width,U.height),l.current+=.01,S.current.forEach(R=>{if(R.x+=R.vx+Math.sin(R.age*.05)*.2,R.y+=R.vy+Math.cos(R.age*.04)*.2,R.age+=.1,R.x<-R.radius&&(R.x=U.width+R.radius),R.x>U.width+R.radius&&(R.x=-R.radius),R.y<-R.radius&&(R.y=U.height+R.radius),R.y>U.height+R.radius&&(R.y=-R.radius),p.x&&p.y){const O=R.x-p.x,V=R.y-p.y,W=Math.sqrt(O*O+V*V),X=300;if(W<X){const D=(1-W/X)*1,G=Math.atan2(V,O);R.vx+=Math.cos(G)*D*.02,R.vy+=Math.sin(G)*D*.02}}R.vx*=.99,R.vy*=.99;const z=L.createRadialGradient(R.x,R.y,0,R.x,R.y,R.radius);z.addColorStop(0,`rgba(${R.color.r}, ${R.color.g}, ${R.color.b}, ${R.color.a*.8})`),z.addColorStop(1,`rgba(${R.color.r}, ${R.color.g}, ${R.color.b}, 0)`),L.globalCompositeOperation="screen",L.fillStyle=z,L.beginPath(),L.arc(R.x,R.y,R.radius,0,Math.PI*2),L.fill()}),s.current=requestAnimationFrame(k)};return Q(),k(),()=>{s.current&&cancelAnimationFrame(s.current)}},[u,p]),B.useEffect(()=>{if(!i.current||u.width===0)return;const U=i.current,L=U.getContext("2d");U.width=u.width,U.height=u.height;const Q=()=>{const R=[],z=Math.min(200,u.width*u.height/1e4);for(let O=0;O<z;O++)R.push({x:Math.random()*u.width,y:Math.random()*u.height,size:Math.random()*3+1,color:I(),vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5,opacity:Math.random()*.5+.3,speedFactor:Math.random()*.5+.5,connectionRange:80+Math.random()*40});M.current=R},I=()=>{const R=[{r:255,g:255,b:255},{r:180,g:255,b:255},{r:255,g:220,b:255},{r:200,g:200,b:255}];return R[Math.floor(Math.random()*R.length)]},k=()=>{L.clearRect(0,0,U.width,U.height),M.current.forEach((R,z)=>{const O=h*R.speedFactor;if(R.x+=R.vx*(1+O),R.y+=R.vy*(1+O),R.x<0&&(R.x=u.width),R.x>u.width&&(R.x=0),R.y<0&&(R.y=u.height),R.y>u.height&&(R.y=0),p.x&&p.y){const J=R.x-p.x,ie=R.y-p.y,te=Math.sqrt(J*J+ie*ie),ce=150;if(te<ce){const ye=(1-te/ce)*h,xe=Math.atan2(ie,J);R.vx+=Math.cos(xe)*ye*.05,R.vy+=Math.sin(xe)*ye*.05,te<100&&(L.beginPath(),L.moveTo(R.x,R.y),L.lineTo(p.x,p.y),L.strokeStyle=`rgba(${R.color.r}, ${R.color.g}, ${R.color.b}, ${(1-te/100)*.2})`,L.lineWidth=.5,L.stroke())}}const V=2+h*3,W=Math.sqrt(R.vx*R.vx+R.vy*R.vy);W>V&&(R.vx=R.vx/W*V,R.vy=R.vy/W*V),R.vx*=.99,R.vy*=.99,L.globalCompositeOperation="screen";const X=L.createRadialGradient(R.x,R.y,0,R.x,R.y,R.size*3);X.addColorStop(0,`rgba(${R.color.r}, ${R.color.g}, ${R.color.b}, ${R.opacity*.5})`),X.addColorStop(1,`rgba(${R.color.r}, ${R.color.g}, ${R.color.b}, 0)`),L.fillStyle=X,L.beginPath(),L.arc(R.x,R.y,R.size*3,0,Math.PI*2),L.fill(),L.fillStyle=`rgba(${R.color.r}, ${R.color.g}, ${R.color.b}, ${R.opacity})`,L.beginPath(),L.arc(R.x,R.y,R.size*.5,0,Math.PI*2),L.fill(),L.globalCompositeOperation="screen";let D=0;const G=1;for(let J=z+1;J<M.current.length&&!(D>=G);J++){const ie=M.current[J],te=R.x-ie.x,ce=R.y-ie.y,ye=Math.sqrt(te*te+ce*ce);if(ye<R.connectionRange){L.beginPath(),L.moveTo(R.x,R.y),L.lineTo(ie.x,ie.y);const xe=(1-ye/R.connectionRange)*.15;L.strokeStyle=`rgba(${R.color.r}, ${R.color.g}, ${R.color.b}, ${xe})`,L.lineWidth=(1-ye/R.connectionRange)*1.5,L.stroke(),D++}}}),o.current=requestAnimationFrame(k)};return Q(),k(),()=>{o.current&&cancelAnimationFrame(o.current)}},[u,p,h]),B.useEffect(()=>{if(!r.current||u.width===0)return;const U=r.current,L=U.getContext("2d");U.width=u.width,U.height=u.height;const Q=()=>{const R=[];for(let O=0;O<10;O++)R.push({type:Math.random()>.4?"circle":"square",x:Math.random()*u.width,y:Math.random()*u.height,radius:30+Math.random()*50,width:60+Math.random()*100,height:60+Math.random()*100,rotation:Math.random()*Math.PI*2,rotationSpeed:(Math.random()-.5)*.01,lineWidth:1+Math.random(),color:I(),opacity:.1+Math.random()*.2,pulse:{speed:.05+Math.random()*.05,amplitude:.1+Math.random()*.2,phase:Math.random()*Math.PI*2}});A.current=R},I=()=>{const R=[{r:255,g:255,b:255},{r:0,g:210,b:255},{r:180,g:120,b:255},{r:255,g:150,b:220}];return R[Math.floor(Math.random()*R.length)]},k=()=>{L.clearRect(0,0,U.width,U.height);const R=Date.now()*.001;A.current.forEach(z=>{z.rotation+=z.rotationSpeed;const O=1+Math.sin(R*z.pulse.speed+z.pulse.phase)*z.pulse.amplitude,V=z.radius*O,W=z.width*O,X=z.height*O;L.strokeStyle=`rgba(${z.color.r}, ${z.color.g}, ${z.color.b}, ${z.opacity})`,L.lineWidth=z.lineWidth,z.type==="circle"?(L.beginPath(),L.arc(z.x,z.y,V,0,Math.PI*2),L.stroke(),L.beginPath(),L.arc(z.x,z.y,V*.7,0,Math.PI*2),L.stroke()):(L.save(),L.translate(z.x,z.y),L.rotate(z.rotation),L.beginPath(),L.rect(-W/2,-X/2,W,X),L.stroke(),L.beginPath(),L.rect(-W*.7/2,-X*.7/2,W*.7,X*.7),L.stroke(),L.restore())}),a.current=requestAnimationFrame(k)};return Q(),k(),()=>{a.current&&cancelAnimationFrame(a.current)}},[u]),B.useEffect(()=>{const U=setTimeout(()=>{d(!0);let L=0;const Q=setInterval(()=>{L+=.02,x(L),L>=1&&clearInterval(Q)},16)},800);return()=>{clearTimeout(U)}},[]);const C=U=>{if(!t.current)return;const L=t.current.getBoundingClientRect(),Q=U.clientX-L.left,I=U.clientY-L.top;g({x:Q,y:I});const k=Q/u.width*2-1,R=-(I/u.height*2-1);m({x:k,y:R}),y(z=>Math.min(1,z+.05))};return B.useEffect(()=>{let U;return h>0&&(U=setTimeout(()=>{y(L=>Math.max(0,L-.01))},50)),()=>clearTimeout(U)},[h]),N.jsxs("div",{ref:t,className:"relative w-full h-screen overflow-hidden bg-[#0a0118]",onMouseMove:C,children:[N.jsx("canvas",{ref:n,className:"absolute top-0 left-0 w-full h-full z-0"}),N.jsx("canvas",{ref:r,className:"absolute top-0 left-0 w-full h-full z-10"}),N.jsx("canvas",{ref:i,className:"absolute top-0 left-0 w-full h-full z-20"}),N.jsx("div",{className:"relative w-full h-full flex items-center justify-center z-30",children:N.jsxs("div",{ref:e,className:"relative transform-gpu perspective",style:{transform:`rotateX(${_.y*5}deg) rotateY(${_.x*5}deg)`},onMouseEnter:()=>w(!0),onMouseLeave:()=>w(!1),children:[N.jsxs("div",{className:"relative",children:[[...Array(8)].map((U,L)=>N.jsx("div",{className:"absolute left-0 right-0 text-center",style:{transform:`translateZ(${-(L*8)}px)`,opacity:(1-L/10)*.5,filter:`blur(${L*.7}px)`,color:L%2===0?"#9D72FF":"#00E5FF",transition:"all 0.5s ease-out"},children:N.jsx("span",{className:"text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-wider uppercase",children:"We Design"})},`layer-${L}`)),N.jsxs("div",{className:"relative overflow-hidden",children:[N.jsx("h1",{className:"text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-wider uppercase text-transparent bg-clip-text",style:{backgroundImage:"linear-gradient(135deg, #ffffff 0%, #e0f7ff 50%, #ffffff 100%)",WebkitBackgroundClip:"text",transition:"all 0.5s ease-out",transform:E?"scale(1.02)":"scale(1)",opacity:f?1:0},children:"We Design"}),N.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-[#0a0118]",style:{transform:`translateX(${v*100}%)`,transition:"transform 0.5s ease-out"}})]}),N.jsx("div",{className:"absolute inset-0 text-center",style:{opacity:E?.8:.4,transition:"opacity 0.5s ease-out"},children:N.jsx("span",{className:"text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-wider uppercase text-transparent",style:{textShadow:"0 0 20px rgba(255, 255, 255, 0.7), 0 0 40px rgba(157, 114, 255, 0.6), 0 0 60px rgba(0, 229, 255, 0.4)"},children:"We Design"})})]}),N.jsxs("div",{className:"relative mx-auto mt-8 overflow-hidden h-px",children:[N.jsx("div",{className:"h-full bg-gradient-to-r from-transparent via-white to-transparent",style:{width:E?"70%":"50%",maxWidth:"400px",margin:"0 auto",opacity:v,transition:"all 0.7s ease-out"}}),N.jsx("div",{className:"absolute top-0 h-full w-20 animate-line-scan",style:{background:"linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)"}}),N.jsx("div",{className:"absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center",style:{opacity:v,transition:"all 0.7s ease-out"},children:N.jsxs("div",{className:"relative",children:[N.jsx("div",{className:"absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full animate-pulse-slow",style:{width:E?"12px":"8px",height:E?"12px":"8px",background:"rgba(255,255,255,0.2)",boxShadow:"0 0 20px rgba(255,255,255,0.4)",transition:"all 0.7s ease-out"}}),N.jsx("div",{className:"absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full",style:{boxShadow:"0 0 10px rgba(255,255,255,0.9), 0 0 20px rgba(255,255,255,0.5)"}})]})})]})]})}),N.jsxs("div",{className:"absolute inset-0 pointer-events-none z-40",children:[N.jsx("div",{className:"absolute inset-0 bg-radial-vignette opacity-70"}),N.jsx("div",{className:"absolute inset-0 bg-scanlines opacity-5"}),N.jsx("div",{className:"absolute inset-0 noise-texture opacity-5 mix-blend-overlay"})]}),N.jsx("div",{className:"absolute inset-0 pointer-events-none z-45",children:[...Array(4)].map((U,L)=>N.jsx("div",{className:"absolute w-24 h-24 opacity-0 animate-fade-in",style:{top:L<2?"20px":"auto",bottom:L>=2?"20px":"auto",left:L%2===0?"20px":"auto",right:L%2!==0?"20px":"auto",animationDelay:`${.8+L*.2}s`,animationDuration:"2s",animationFillMode:"forwards"},children:N.jsx("div",{className:"relative w-full h-full",children:N.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{position:"absolute",top:L<2?0:"auto",bottom:L>=2?0:"auto",left:L%2===0?0:"auto",right:L%2!==0?0:"auto",transform:`rotate(${L*90}deg)`,filter:"drop-shadow(0 0 5px rgba(255,255,255,0.4))"},children:N.jsx("path",{d:"M0 8C0 3.58172 3.58172 0 8 0H24V1C24 5.41828 20.4183 9 16 9H0V8Z",fill:"rgba(255,255,255,0.8)"})})})},`corner-${L}`))}),N.jsx("div",{className:"absolute bottom-4 right-4 text-[10px] text-[#ffffff30] font-mono z-50",children:"Powered by NEXOR"}),N.jsx("style",{jsx:!0,global:!0,children:`
        @keyframes line-scan {
          0% {
            left: -20%;
          }
          100% {
            left: 120%;
          }
        }
        
        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 0.7;
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.5;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0.3;
          }
        }
        
        .animate-line-scan {
          animation: line-scan 3s infinite ease-in-out;
        }
        
        .animate-fade-in {
          animation: fade-in ease-out forwards;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite ease-in-out;
        }
        
        .perspective {
          perspective: 1000px;
        }
        
        .transform-gpu {
          transform-style: preserve-3d;
          will-change: transform;
        }
        
        .bg-scanlines {
          background-image: linear-gradient(
            0deg,
            transparent 0%,
            transparent 98%,
            rgba(255, 255, 255, 0.08) 100%
          );
          background-size: 100% 3px;
        }
        
        .bg-radial-vignette {
          background: radial-gradient(
            circle at center,
            transparent 30%,
            rgba(10, 1, 24, 0.4) 70%,
            rgba(10, 1, 24, 0.8) 100%
          );
        }
        
        .noise-texture {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
      `})]})},b1=B.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),Yc=B.createContext({}),gm=B.createContext(null),Kc=typeof document<"u",C1=Kc?B.useLayoutEffect:B.useEffect,R1=B.createContext({strict:!1}),vm=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),A3="framerAppearId",P1="data-"+vm(A3);function b3(t,e,n,i){const{visualElement:r}=B.useContext(Yc),s=B.useContext(R1),o=B.useContext(gm),a=B.useContext(b1).reducedMotion,l=B.useRef();i=i||s.renderer,!l.current&&i&&(l.current=i(t,{visualState:e,parent:r,props:n,presenceContext:o,blockInitialAnimation:o?o.initial===!1:!1,reducedMotionConfig:a}));const u=l.current;B.useInsertionEffect(()=>{u&&u.update(n,o)});const c=B.useRef(!!(n[P1]&&!window.HandoffComplete));return C1(()=>{u&&(u.render(),c.current&&u.animationState&&u.animationState.animateChanges())}),B.useEffect(()=>{u&&(u.updateFeatures(),!c.current&&u.animationState&&u.animationState.animateChanges(),c.current&&(c.current=!1,window.HandoffComplete=!0))}),u}function Ys(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function C3(t,e,n){return B.useCallback(i=>{i&&t.mount&&t.mount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):Ys(n)&&(n.current=i))},[e])}function Za(t){return typeof t=="string"||Array.isArray(t)}function Qc(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const ym=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],_m=["initial",...ym];function Zc(t){return Qc(t.animate)||_m.some(e=>Za(t[e]))}function L1(t){return!!(Zc(t)||t.variants)}function R3(t,e){if(Zc(t)){const{initial:n,animate:i}=t;return{initial:n===!1||Za(n)?n:void 0,animate:Za(i)?i:void 0}}return t.inherit!==!1?e:{}}function P3(t){const{initial:e,animate:n}=R3(t,B.useContext(Yc));return B.useMemo(()=>({initial:e,animate:n}),[Yv(e),Yv(n)])}function Yv(t){return Array.isArray(t)?t.join(" "):t}const Kv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ja={};for(const t in Kv)Ja[t]={isEnabled:e=>Kv[t].some(n=>!!e[n])};function L3(t){for(const e in t)Ja[e]={...Ja[e],...t[e]}}const D1=B.createContext({}),N1=B.createContext({}),D3=Symbol.for("motionComponentSymbol");function N3({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){t&&L3(t);function s(a,l){let u;const c={...B.useContext(b1),...a,layoutId:I3(a)},{isStatic:f}=c,d=P3(a),p=i(a,f);if(!f&&Kc){d.visualElement=b3(r,p,c,e);const g=B.useContext(N1),_=B.useContext(R1).strict;d.visualElement&&(u=d.visualElement.loadFeatures(c,_,t,g))}return B.createElement(Yc.Provider,{value:d},u&&d.visualElement?B.createElement(u,{visualElement:d.visualElement,...c}):null,n(r,a,C3(p,d.visualElement,l),p,f,d.visualElement))}const o=B.forwardRef(s);return o[D3]=r,o}function I3({layoutId:t}){const e=B.useContext(D1).id;return e&&t!==void 0?e+"-"+t:t}function U3(t){function e(i,r={}){return N3(t(i,r))}if(typeof Proxy>"u")return e;const n=new Map;return new Proxy(e,{get:(i,r)=>(n.has(r)||n.set(r,e(r)),n.get(r))})}const F3=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function xm(t){return typeof t!="string"||t.includes("-")?!1:!!(F3.indexOf(t)>-1||/[A-Z]/.test(t))}const cc={};function O3(t){Object.assign(cc,t)}const dl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ms=new Set(dl);function I1(t,{layout:e,layoutId:n}){return ms.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!cc[t]||t==="opacity")}const vn=t=>!!(t&&t.getVelocity),k3={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},B3=dl.length;function z3(t,{enableHardwareAcceleration:e=!0,allowTransformNone:n=!0},i,r){let s="";for(let o=0;o<B3;o++){const a=dl[o];if(t[a]!==void 0){const l=k3[a]||a;s+=`${l}(${t[a]}) `}}return e&&!t.z&&(s+="translateZ(0)"),s=s.trim(),r?s=r(t,i?"":s):n&&i&&(s="none"),s}const U1=t=>e=>typeof e=="string"&&e.startsWith(t),F1=U1("--"),zh=U1("var(--"),V3=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,H3=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Ar=(t,e,n)=>Math.min(Math.max(n,t),e),gs={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},_a={...gs,transform:t=>Ar(0,1,t)},au={...gs,default:1},xa=t=>Math.round(t*1e5)/1e5,Jc=/(-)?([\d]*\.?[\d])+/g,O1=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,G3=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function hl(t){return typeof t=="string"}const pl=t=>({test:e=>hl(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Qi=pl("deg"),gi=pl("%"),be=pl("px"),W3=pl("vh"),j3=pl("vw"),Qv={...gi,parse:t=>gi.parse(t)/100,transform:t=>gi.transform(t*100)},Zv={...gs,transform:Math.round},k1={borderWidth:be,borderTopWidth:be,borderRightWidth:be,borderBottomWidth:be,borderLeftWidth:be,borderRadius:be,radius:be,borderTopLeftRadius:be,borderTopRightRadius:be,borderBottomRightRadius:be,borderBottomLeftRadius:be,width:be,maxWidth:be,height:be,maxHeight:be,size:be,top:be,right:be,bottom:be,left:be,padding:be,paddingTop:be,paddingRight:be,paddingBottom:be,paddingLeft:be,margin:be,marginTop:be,marginRight:be,marginBottom:be,marginLeft:be,rotate:Qi,rotateX:Qi,rotateY:Qi,rotateZ:Qi,scale:au,scaleX:au,scaleY:au,scaleZ:au,skew:Qi,skewX:Qi,skewY:Qi,distance:be,translateX:be,translateY:be,translateZ:be,x:be,y:be,z:be,perspective:be,transformPerspective:be,opacity:_a,originX:Qv,originY:Qv,originZ:be,zIndex:Zv,fillOpacity:_a,strokeOpacity:_a,numOctaves:Zv};function Sm(t,e,n,i){const{style:r,vars:s,transform:o,transformOrigin:a}=t;let l=!1,u=!1,c=!0;for(const f in e){const d=e[f];if(F1(f)){s[f]=d;continue}const p=k1[f],g=H3(d,p);if(ms.has(f)){if(l=!0,o[f]=g,!c)continue;d!==(p.default||0)&&(c=!1)}else f.startsWith("origin")?(u=!0,a[f]=g):r[f]=g}if(e.transform||(l||i?r.transform=z3(t.transform,n,c,i):r.transform&&(r.transform="none")),u){const{originX:f="50%",originY:d="50%",originZ:p=0}=a;r.transformOrigin=`${f} ${d} ${p}`}}const Mm=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function B1(t,e,n){for(const i in e)!vn(e[i])&&!I1(i,n)&&(t[i]=e[i])}function $3({transformTemplate:t},e,n){return B.useMemo(()=>{const i=Mm();return Sm(i,e,{enableHardwareAcceleration:!n},t),Object.assign({},i.vars,i.style)},[e])}function X3(t,e,n){const i=t.style||{},r={};return B1(r,i,t),Object.assign(r,$3(t,e,n)),t.transformValues?t.transformValues(r):r}function q3(t,e,n){const i={},r=X3(t,e,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=r,i}const Y3=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function fc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||Y3.has(t)}let z1=t=>!fc(t);function K3(t){t&&(z1=e=>e.startsWith("on")?!fc(e):t(e))}try{K3(require("@emotion/is-prop-valid").default)}catch{}function Q3(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(z1(r)||n===!0&&fc(r)||!e&&!fc(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function Jv(t,e,n){return typeof t=="string"?t:be.transform(e+n*t)}function Z3(t,e,n){const i=Jv(e,t.x,t.width),r=Jv(n,t.y,t.height);return`${i} ${r}`}const J3={offset:"stroke-dashoffset",array:"stroke-dasharray"},eD={offset:"strokeDashoffset",array:"strokeDasharray"};function tD(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?J3:eD;t[s.offset]=be.transform(-i);const o=be.transform(e),a=be.transform(n);t[s.array]=`${o} ${a}`}function Em(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...u},c,f,d){if(Sm(t,u,c,d),f){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:p,style:g,dimensions:_}=t;p.transform&&(_&&(g.transform=p.transform),delete p.transform),_&&(r!==void 0||s!==void 0||g.transform)&&(g.transformOrigin=Z3(_,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(p.x=e),n!==void 0&&(p.y=n),i!==void 0&&(p.scale=i),o!==void 0&&tD(p,o,a,l,!1)}const V1=()=>({...Mm(),attrs:{}}),wm=t=>typeof t=="string"&&t.toLowerCase()==="svg";function nD(t,e,n,i){const r=B.useMemo(()=>{const s=V1();return Em(s,e,{enableHardwareAcceleration:!1},wm(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};B1(s,t.style,t),r.style={...s,...r.style}}return r}function iD(t=!1){return(n,i,r,{latestValues:s},o)=>{const l=(xm(n)?nD:q3)(i,s,o,n),c={...Q3(i,typeof n=="string",t),...l,ref:r},{children:f}=i,d=B.useMemo(()=>vn(f)?f.get():f,[f]);return B.createElement(n,{...c,children:d})}}function H1(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const G1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function W1(t,e,n,i){H1(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(G1.has(r)?r:vm(r),e.attrs[r])}function Tm(t,e){const{style:n}=t,i={};for(const r in n)(vn(n[r])||e.style&&vn(e.style[r])||I1(r,t))&&(i[r]=n[r]);return i}function j1(t,e){const n=Tm(t,e);for(const i in t)if(vn(t[i])||vn(e[i])){const r=dl.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;n[r]=t[i]}return n}function Am(t,e,n,i={},r={}){return typeof e=="function"&&(e=e(n!==void 0?n:t.custom,i,r)),typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"&&(e=e(n!==void 0?n:t.custom,i,r)),e}function $1(t){const e=B.useRef(null);return e.current===null&&(e.current=t()),e.current}const dc=t=>Array.isArray(t),rD=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),sD=t=>dc(t)?t[t.length-1]||0:t;function Au(t){const e=vn(t)?t.get():t;return rD(e)?e.toValue():e}function oD({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},i,r,s){const o={latestValues:aD(i,r,s,t),renderState:e()};return n&&(o.mount=a=>n(i,a,o)),o}const X1=t=>(e,n)=>{const i=B.useContext(Yc),r=B.useContext(gm),s=()=>oD(t,e,i,r);return n?s():$1(s)};function aD(t,e,n,i){const r={},s=i(t,{});for(const d in s)r[d]=Au(s[d]);let{initial:o,animate:a}=t;const l=Zc(t),u=L1(t);e&&u&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let c=n?n.initial===!1:!1;c=c||o===!1;const f=c?a:o;return f&&typeof f!="boolean"&&!Qc(f)&&(Array.isArray(f)?f:[f]).forEach(p=>{const g=Am(t,p);if(!g)return;const{transitionEnd:_,transition:m,...h}=g;for(const y in h){let v=h[y];if(Array.isArray(v)){const x=c?v.length-1:0;v=v[x]}v!==null&&(r[y]=v)}for(const y in _)r[y]=_[y]}),r}const Mt=t=>t;class ey{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const n=this.order.indexOf(e);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}function lD(t){let e=new ey,n=new ey,i=0,r=!1,s=!1;const o=new WeakSet,a={schedule:(l,u=!1,c=!1)=>{const f=c&&r,d=f?e:n;return u&&o.add(l),d.add(l)&&f&&r&&(i=e.order.length),l},cancel:l=>{n.remove(l),o.delete(l)},process:l=>{if(r){s=!0;return}if(r=!0,[e,n]=[n,e],n.clear(),i=e.order.length,i)for(let u=0;u<i;u++){const c=e.order[u];c(l),o.has(c)&&(a.schedule(c),t())}r=!1,s&&(s=!1,a.process(l))}};return a}const lu=["prepare","read","update","preRender","render","postRender"],uD=40;function cD(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=lu.reduce((f,d)=>(f[d]=lD(()=>n=!0),f),{}),o=f=>s[f].process(r),a=()=>{const f=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(f-r.timestamp,uD),1),r.timestamp=f,r.isProcessing=!0,lu.forEach(o),r.isProcessing=!1,n&&e&&(i=!1,t(a))},l=()=>{n=!0,i=!0,r.isProcessing||t(a)};return{schedule:lu.reduce((f,d)=>{const p=s[d];return f[d]=(g,_=!1,m=!1)=>(n||l(),p.schedule(g,_,m)),f},{}),cancel:f=>lu.forEach(d=>s[d].cancel(f)),state:r,steps:s}}const{schedule:ut,cancel:Hi,state:qt,steps:gd}=cD(typeof requestAnimationFrame<"u"?requestAnimationFrame:Mt,!0),fD={useVisualState:X1({scrapeMotionValuesFromProps:j1,createRenderState:V1,onMount:(t,e,{renderState:n,latestValues:i})=>{ut.read(()=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),ut.render(()=>{Em(n,i,{enableHardwareAcceleration:!1},wm(e.tagName),t.transformTemplate),W1(e,n)})}})},dD={useVisualState:X1({scrapeMotionValuesFromProps:Tm,createRenderState:Mm})};function hD(t,{forwardMotionProps:e=!1},n,i){return{...xm(t)?fD:dD,preloadedFeatures:n,useRender:iD(e),createVisualElement:i,Component:t}}function Ni(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}const q1=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function ef(t,e="page"){return{point:{x:t[e+"X"],y:t[e+"Y"]}}}const pD=t=>e=>q1(e)&&t(e,ef(e));function Ui(t,e,n,i){return Ni(t,e,pD(n),i)}const mD=(t,e)=>n=>e(t(n)),Sr=(...t)=>t.reduce(mD);function Y1(t){let e=null;return()=>{const n=()=>{e=null};return e===null?(e=t,n):!1}}const ty=Y1("dragHorizontal"),ny=Y1("dragVertical");function K1(t){let e=!1;if(t==="y")e=ny();else if(t==="x")e=ty();else{const n=ty(),i=ny();n&&i?e=()=>{n(),i()}:(n&&n(),i&&i())}return e}function Q1(){const t=K1(!0);return t?(t(),!1):!0}class Lr{constructor(e){this.isMounted=!1,this.node=e}update(){}}function iy(t,e){const n="pointer"+(e?"enter":"leave"),i="onHover"+(e?"Start":"End"),r=(s,o)=>{if(s.pointerType==="touch"||Q1())return;const a=t.getProps();t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",e),a[i]&&ut.update(()=>a[i](s,o))};return Ui(t.current,n,r,{passive:!t.getProps()[i]})}class gD extends Lr{mount(){this.unmount=Sr(iy(this.node,!0),iy(this.node,!1))}unmount(){}}class vD extends Lr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Sr(Ni(this.node.current,"focus",()=>this.onFocus()),Ni(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Z1=(t,e)=>e?t===e?!0:Z1(t,e.parentElement):!1;function vd(t,e){if(!e)return;const n=new PointerEvent("pointer"+t);e(n,ef(n))}class yD extends Lr{constructor(){super(...arguments),this.removeStartListeners=Mt,this.removeEndListeners=Mt,this.removeAccessibleListeners=Mt,this.startPointerPress=(e,n)=>{if(this.isPressing)return;this.removeEndListeners();const i=this.node.getProps(),s=Ui(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:c,globalTapTarget:f}=this.node.getProps();ut.update(()=>{!f&&!Z1(this.node.current,a.target)?c&&c(a,l):u&&u(a,l)})},{passive:!(i.onTap||i.onPointerUp)}),o=Ui(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(i.onTapCancel||i.onPointerCancel)});this.removeEndListeners=Sr(s,o),this.startPress(e,n)},this.startAccessiblePress=()=>{const e=s=>{if(s.key!=="Enter"||this.isPressing)return;const o=a=>{a.key!=="Enter"||!this.checkPressEnd()||vd("up",(l,u)=>{const{onTap:c}=this.node.getProps();c&&ut.update(()=>c(l,u))})};this.removeEndListeners(),this.removeEndListeners=Ni(this.node.current,"keyup",o),vd("down",(a,l)=>{this.startPress(a,l)})},n=Ni(this.node.current,"keydown",e),i=()=>{this.isPressing&&vd("cancel",(s,o)=>this.cancelPress(s,o))},r=Ni(this.node.current,"blur",i);this.removeAccessibleListeners=Sr(n,r)}}startPress(e,n){this.isPressing=!0;const{onTapStart:i,whileTap:r}=this.node.getProps();r&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),i&&ut.update(()=>i(e,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Q1()}cancelPress(e,n){if(!this.checkPressEnd())return;const{onTapCancel:i}=this.node.getProps();i&&ut.update(()=>i(e,n))}mount(){const e=this.node.getProps(),n=Ui(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),i=Ni(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Sr(n,i)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Vh=new WeakMap,yd=new WeakMap,_D=t=>{const e=Vh.get(t.target);e&&e(t)},xD=t=>{t.forEach(_D)};function SD({root:t,...e}){const n=t||document;yd.has(n)||yd.set(n,{});const i=yd.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(xD,{root:t,...e})),i[r]}function MD(t,e,n){const i=SD(e);return Vh.set(t,n),i.observe(t),()=>{Vh.delete(t),i.unobserve(t)}}const ED={some:0,all:1};class wD extends Lr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:ED[r]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:f}=this.node.getProps(),d=u?c:f;d&&d(l)};return MD(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(TD(e,n))&&this.startObserver()}unmount(){}}function TD({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const AD={inView:{Feature:wD},tap:{Feature:yD},focus:{Feature:vD},hover:{Feature:gD}};function J1(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function bD(t){const e={};return t.values.forEach((n,i)=>e[i]=n.get()),e}function CD(t){const e={};return t.values.forEach((n,i)=>e[i]=n.getVelocity()),e}function tf(t,e,n){const i=t.getProps();return Am(i,e,n!==void 0?n:i.custom,bD(t),CD(t))}let hc=Mt;const rs=t=>t*1e3,Fi=t=>t/1e3,RD={current:!1},eM=t=>Array.isArray(t)&&typeof t[0]=="number";function tM(t){return!!(!t||typeof t=="string"&&nM[t]||eM(t)||Array.isArray(t)&&t.every(tM))}const na=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,nM={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:na([0,.65,.55,1]),circOut:na([.55,0,1,.45]),backIn:na([.31,.01,.66,-.59]),backOut:na([.33,1.53,.69,.99])};function iM(t){if(t)return eM(t)?na(t):Array.isArray(t)?t.map(iM):nM[t]}function PD(t,e,n,{delay:i=0,duration:r,repeat:s=0,repeatType:o="loop",ease:a,times:l}={}){const u={[e]:n};l&&(u.offset=l);const c=iM(a);return Array.isArray(c)&&(u.easing=c),t.animate(u,{delay:i,duration:r,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}function LD(t,{repeat:e,repeatType:n="loop"}){const i=e&&n!=="loop"&&e%2===1?0:t.length-1;return t[i]}const rM=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,DD=1e-7,ND=12;function ID(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=rM(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>DD&&++a<ND);return o}function ml(t,e,n,i){if(t===e&&n===i)return Mt;const r=s=>ID(s,0,1,t,n);return s=>s===0||s===1?s:rM(r(s),e,i)}const UD=ml(.42,0,1,1),FD=ml(0,0,.58,1),sM=ml(.42,0,.58,1),OD=t=>Array.isArray(t)&&typeof t[0]!="number",oM=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,aM=t=>e=>1-t(1-e),bm=t=>1-Math.sin(Math.acos(t)),lM=aM(bm),kD=oM(bm),uM=ml(.33,1.53,.69,.99),Cm=aM(uM),BD=oM(Cm),zD=t=>(t*=2)<1?.5*Cm(t):.5*(2-Math.pow(2,-10*(t-1))),ry={linear:Mt,easeIn:UD,easeInOut:sM,easeOut:FD,circIn:bm,circInOut:kD,circOut:lM,backIn:Cm,backInOut:BD,backOut:uM,anticipate:zD},sy=t=>{if(Array.isArray(t)){hc(t.length===4);const[e,n,i,r]=t;return ml(e,n,i,r)}else if(typeof t=="string")return hc(ry[t]!==void 0),ry[t];return t},Rm=(t,e)=>n=>!!(hl(n)&&G3.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),cM=(t,e,n)=>i=>{if(!hl(i))return i;const[r,s,o,a]=i.match(Jc);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},VD=t=>Ar(0,255,t),_d={...gs,transform:t=>Math.round(VD(t))},Qr={test:Rm("rgb","red"),parse:cM("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+_d.transform(t)+", "+_d.transform(e)+", "+_d.transform(n)+", "+xa(_a.transform(i))+")"};function HD(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Hh={test:Rm("#"),parse:HD,transform:Qr.transform},Ks={test:Rm("hsl","hue"),parse:cM("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+gi.transform(xa(e))+", "+gi.transform(xa(n))+", "+xa(_a.transform(i))+")"},tn={test:t=>Qr.test(t)||Hh.test(t)||Ks.test(t),parse:t=>Qr.test(t)?Qr.parse(t):Ks.test(t)?Ks.parse(t):Hh.parse(t),transform:t=>hl(t)?t:t.hasOwnProperty("red")?Qr.transform(t):Ks.transform(t)},mt=(t,e,n)=>-n*t+n*e+t;function xd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function GD({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=xd(l,a,t+1/3),s=xd(l,a,t),o=xd(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}const Sd=(t,e,n)=>{const i=t*t;return Math.sqrt(Math.max(0,n*(e*e-i)+i))},WD=[Hh,Qr,Ks],jD=t=>WD.find(e=>e.test(t));function oy(t){const e=jD(t);let n=e.parse(t);return e===Ks&&(n=GD(n)),n}const fM=(t,e)=>{const n=oy(t),i=oy(e),r={...n};return s=>(r.red=Sd(n.red,i.red,s),r.green=Sd(n.green,i.green,s),r.blue=Sd(n.blue,i.blue,s),r.alpha=mt(n.alpha,i.alpha,s),Qr.transform(r))};function $D(t){var e,n;return isNaN(t)&&hl(t)&&(((e=t.match(Jc))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(O1))===null||n===void 0?void 0:n.length)||0)>0}const dM={regex:V3,countKey:"Vars",token:"${v}",parse:Mt},hM={regex:O1,countKey:"Colors",token:"${c}",parse:tn.parse},pM={regex:Jc,countKey:"Numbers",token:"${n}",parse:gs.parse};function Md(t,{regex:e,countKey:n,token:i,parse:r}){const s=t.tokenised.match(e);s&&(t["num"+n]=s.length,t.tokenised=t.tokenised.replace(e,i),t.values.push(...s.map(r)))}function pc(t){const e=t.toString(),n={value:e,tokenised:e,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&Md(n,dM),Md(n,hM),Md(n,pM),n}function mM(t){return pc(t).values}function gM(t){const{values:e,numColors:n,numVars:i,tokenised:r}=pc(t),s=e.length;return o=>{let a=r;for(let l=0;l<s;l++)l<i?a=a.replace(dM.token,o[l]):l<i+n?a=a.replace(hM.token,tn.transform(o[l])):a=a.replace(pM.token,xa(o[l]));return a}}const XD=t=>typeof t=="number"?0:t;function qD(t){const e=mM(t);return gM(t)(e.map(XD))}const br={test:$D,parse:mM,createTransformer:gM,getAnimatableNone:qD},vM=(t,e)=>n=>`${n>0?e:t}`;function yM(t,e){return typeof t=="number"?n=>mt(t,e,n):tn.test(t)?fM(t,e):t.startsWith("var(")?vM(t,e):xM(t,e)}const _M=(t,e)=>{const n=[...t],i=n.length,r=t.map((s,o)=>yM(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}},YD=(t,e)=>{const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=yM(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}},xM=(t,e)=>{const n=br.createTransformer(e),i=pc(t),r=pc(e);return i.numVars===r.numVars&&i.numColors===r.numColors&&i.numNumbers>=r.numNumbers?Sr(_M(i.values,r.values),n):vM(t,e)},el=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},ay=(t,e)=>n=>mt(t,e,n);function KD(t){return typeof t=="number"?ay:typeof t=="string"?tn.test(t)?fM:xM:Array.isArray(t)?_M:typeof t=="object"?YD:ay}function QD(t,e,n){const i=[],r=n||KD(t[0]),s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||Mt:e;a=Sr(l,a)}i.push(a)}return i}function SM(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(hc(s===e.length),s===1)return()=>e[0];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const o=QD(e,i,r),a=o.length,l=u=>{let c=0;if(a>1)for(;c<t.length-2&&!(u<t[c+1]);c++);const f=el(t[c],t[c+1],u);return o[c](f)};return n?u=>l(Ar(t[0],t[s-1],u)):l}function ZD(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=el(0,e,i);t.push(mt(n,1,r))}}function JD(t){const e=[0];return ZD(e,t.length-1),e}function eN(t,e){return t.map(n=>n*e)}function tN(t,e){return t.map(()=>e||sM).splice(0,t.length-1)}function mc({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=OD(i)?i.map(sy):sy(i),s={done:!1,value:e[0]},o=eN(n&&n.length===e.length?n:JD(e),t),a=SM(o,e,{ease:Array.isArray(r)?r:tN(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}function MM(t,e){return e?t*(1e3/e):0}const nN=5;function EM(t,e,n){const i=Math.max(e-nN,0);return MM(n-t(i),e-i)}const Ed=.001,iN=.01,rN=10,sN=.05,oN=1;function aN({duration:t=800,bounce:e=.25,velocity:n=0,mass:i=1}){let r,s,o=1-e;o=Ar(sN,oN,o),t=Ar(iN,rN,Fi(t)),o<1?(r=u=>{const c=u*o,f=c*t,d=c-n,p=Gh(u,o),g=Math.exp(-f);return Ed-d/p*g},s=u=>{const f=u*o*t,d=f*n+n,p=Math.pow(o,2)*Math.pow(u,2)*t,g=Math.exp(-f),_=Gh(Math.pow(u,2),o);return(-r(u)+Ed>0?-1:1)*((d-p)*g)/_}):(r=u=>{const c=Math.exp(-u*t),f=(u-n)*t+1;return-Ed+c*f},s=u=>{const c=Math.exp(-u*t),f=(n-u)*(t*t);return c*f});const a=5/t,l=uN(r,s,a);if(t=rs(t),isNaN(l))return{stiffness:100,damping:10,duration:t};{const u=Math.pow(l,2)*i;return{stiffness:u,damping:o*2*Math.sqrt(i*u),duration:t}}}const lN=12;function uN(t,e,n){let i=n;for(let r=1;r<lN;r++)i=i-t(i)/e(i);return i}function Gh(t,e){return t*Math.sqrt(1-e*e)}const cN=["duration","bounce"],fN=["stiffness","damping","mass"];function ly(t,e){return e.some(n=>t[n]!==void 0)}function dN(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!ly(t,fN)&&ly(t,cN)){const n=aN(t);e={...e,...n,mass:1},e.isResolvedFromDuration=!0}return e}function wM({keyframes:t,restDelta:e,restSpeed:n,...i}){const r=t[0],s=t[t.length-1],o={done:!1,value:r},{stiffness:a,damping:l,mass:u,duration:c,velocity:f,isResolvedFromDuration:d}=dN({...i,velocity:-Fi(i.velocity||0)}),p=f||0,g=l/(2*Math.sqrt(a*u)),_=s-r,m=Fi(Math.sqrt(a/u)),h=Math.abs(_)<5;n||(n=h?.01:2),e||(e=h?.005:.5);let y;if(g<1){const v=Gh(m,g);y=x=>{const E=Math.exp(-g*m*x);return s-E*((p+g*m*_)/v*Math.sin(v*x)+_*Math.cos(v*x))}}else if(g===1)y=v=>s-Math.exp(-m*v)*(_+(p+m*_)*v);else{const v=m*Math.sqrt(g*g-1);y=x=>{const E=Math.exp(-g*m*x),w=Math.min(v*x,300);return s-E*((p+g*m*_)*Math.sinh(w)+v*_*Math.cosh(w))/v}}return{calculatedDuration:d&&c||null,next:v=>{const x=y(v);if(d)o.done=v>=c;else{let E=p;v!==0&&(g<1?E=EM(y,v,x):E=0);const w=Math.abs(E)<=n,M=Math.abs(s-x)<=e;o.done=w&&M}return o.value=o.done?s:x,o}}}function uy({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:u=.5,restSpeed:c}){const f=t[0],d={done:!1,value:f},p=A=>a!==void 0&&A<a||l!==void 0&&A>l,g=A=>a===void 0?l:l===void 0||Math.abs(a-A)<Math.abs(l-A)?a:l;let _=n*e;const m=f+_,h=o===void 0?m:o(m);h!==m&&(_=h-f);const y=A=>-_*Math.exp(-A/i),v=A=>h+y(A),x=A=>{const S=y(A),C=v(A);d.done=Math.abs(S)<=u,d.value=d.done?h:C};let E,w;const M=A=>{p(d.value)&&(E=A,w=wM({keyframes:[d.value,g(d.value)],velocity:EM(v,A,d.value),damping:r,stiffness:s,restDelta:u,restSpeed:c}))};return M(0),{calculatedDuration:null,next:A=>{let S=!1;return!w&&E===void 0&&(S=!0,x(A),M(A)),E!==void 0&&A>E?w.next(A-E):(!S&&x(A),d)}}}const hN=t=>{const e=({timestamp:n})=>t(n);return{start:()=>ut.update(e,!0),stop:()=>Hi(e),now:()=>qt.isProcessing?qt.timestamp:performance.now()}},cy=2e4;function fy(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<cy;)e+=n,i=t.next(e);return e>=cy?1/0:e}const pN={decay:uy,inertia:uy,tween:mc,keyframes:mc,spring:wM};function gc({autoplay:t=!0,delay:e=0,driver:n=hN,keyframes:i,type:r="keyframes",repeat:s=0,repeatDelay:o=0,repeatType:a="loop",onPlay:l,onStop:u,onComplete:c,onUpdate:f,...d}){let p=1,g=!1,_,m;const h=()=>{m=new Promise(X=>{_=X})};h();let y;const v=pN[r]||mc;let x;v!==mc&&typeof i[0]!="number"&&(x=SM([0,100],i,{clamp:!1}),i=[0,100]);const E=v({...d,keyframes:i});let w;a==="mirror"&&(w=v({...d,keyframes:[...i].reverse(),velocity:-(d.velocity||0)}));let M="idle",A=null,S=null,C=null;E.calculatedDuration===null&&s&&(E.calculatedDuration=fy(E));const{calculatedDuration:U}=E;let L=1/0,Q=1/0;U!==null&&(L=U+o,Q=L*(s+1)-o);let I=0;const k=X=>{if(S===null)return;p>0&&(S=Math.min(S,X)),p<0&&(S=Math.min(X-Q/p,S)),A!==null?I=A:I=Math.round(X-S)*p;const D=I-e*(p>=0?1:-1),G=p>=0?D<0:D>Q;I=Math.max(D,0),M==="finished"&&A===null&&(I=Q);let J=I,ie=E;if(s){const xe=Math.min(I,Q)/L;let Se=Math.floor(xe),we=xe%1;!we&&xe>=1&&(we=1),we===1&&Se--,Se=Math.min(Se,s+1),!!(Se%2)&&(a==="reverse"?(we=1-we,o&&(we-=o/L)):a==="mirror"&&(ie=w)),J=Ar(0,1,we)*L}const te=G?{done:!1,value:i[0]}:ie.next(J);x&&(te.value=x(te.value));let{done:ce}=te;!G&&U!==null&&(ce=p>=0?I>=Q:I<=0);const ye=A===null&&(M==="finished"||M==="running"&&ce);return f&&f(te.value),ye&&O(),te},R=()=>{y&&y.stop(),y=void 0},z=()=>{M="idle",R(),_(),h(),S=C=null},O=()=>{M="finished",c&&c(),R(),_()},V=()=>{if(g)return;y||(y=n(k));const X=y.now();l&&l(),A!==null?S=X-A:(!S||M==="finished")&&(S=X),M==="finished"&&h(),C=S,A=null,M="running",y.start()};t&&V();const W={then(X,D){return m.then(X,D)},get time(){return Fi(I)},set time(X){X=rs(X),I=X,A!==null||!y||p===0?A=X:S=y.now()-X/p},get duration(){const X=E.calculatedDuration===null?fy(E):E.calculatedDuration;return Fi(X)},get speed(){return p},set speed(X){X===p||!y||(p=X,W.time=Fi(I))},get state(){return M},play:V,pause:()=>{M="paused",A=I},stop:()=>{g=!0,M!=="idle"&&(M="idle",u&&u(),z())},cancel:()=>{C!==null&&k(C),z()},complete:()=>{M="finished"},sample:X=>(S=0,k(X))};return W}function mN(t){let e;return()=>(e===void 0&&(e=t()),e)}const gN=mN(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),vN=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),uu=10,yN=2e4,_N=(t,e)=>e.type==="spring"||t==="backgroundColor"||!tM(e.ease);function xN(t,e,{onUpdate:n,onComplete:i,...r}){if(!(gN()&&vN.has(e)&&!r.repeatDelay&&r.repeatType!=="mirror"&&r.damping!==0&&r.type!=="inertia"))return!1;let o=!1,a,l,u=!1;const c=()=>{l=new Promise(v=>{a=v})};c();let{keyframes:f,duration:d=300,ease:p,times:g}=r;if(_N(e,r)){const v=gc({...r,repeat:0,delay:0});let x={done:!1,value:f[0]};const E=[];let w=0;for(;!x.done&&w<yN;)x=v.sample(w),E.push(x.value),w+=uu;g=void 0,f=E,d=w-uu,p="linear"}const _=PD(t.owner.current,e,f,{...r,duration:d,ease:p,times:g}),m=()=>{u=!1,_.cancel()},h=()=>{u=!0,ut.update(m),a(),c()};return _.onfinish=()=>{u||(t.set(LD(f,r)),i&&i(),h())},{then(v,x){return l.then(v,x)},attachTimeline(v){return _.timeline=v,_.onfinish=null,Mt},get time(){return Fi(_.currentTime||0)},set time(v){_.currentTime=rs(v)},get speed(){return _.playbackRate},set speed(v){_.playbackRate=v},get duration(){return Fi(d)},play:()=>{o||(_.play(),Hi(m))},pause:()=>_.pause(),stop:()=>{if(o=!0,_.playState==="idle")return;const{currentTime:v}=_;if(v){const x=gc({...r,autoplay:!1});t.setWithVelocity(x.sample(v-uu).value,x.sample(v).value,uu)}h()},complete:()=>{u||_.finish()},cancel:h}}function SN({keyframes:t,delay:e,onUpdate:n,onComplete:i}){const r=()=>(n&&n(t[t.length-1]),i&&i(),{time:0,speed:1,duration:0,play:Mt,pause:Mt,stop:Mt,then:s=>(s(),Promise.resolve()),cancel:Mt,complete:Mt});return e?gc({keyframes:[0,1],duration:0,delay:e,onComplete:r}):r()}const MN={type:"spring",stiffness:500,damping:25,restSpeed:10},EN=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),wN={type:"keyframes",duration:.8},TN={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},AN=(t,{keyframes:e})=>e.length>2?wN:ms.has(t)?t.startsWith("scale")?EN(e[1]):MN:TN,Wh=(t,e)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(br.test(e)||e==="0")&&!e.startsWith("url(")),bN=new Set(["brightness","contrast","saturate","opacity"]);function CN(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(Jc)||[];if(!i)return t;const r=n.replace(i,"");let s=bN.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const RN=/([a-z-]*)\(.*?\)/g,jh={...br,getAnimatableNone:t=>{const e=t.match(RN);return e?e.map(CN).join(" "):t}},PN={...k1,color:tn,backgroundColor:tn,outlineColor:tn,fill:tn,stroke:tn,borderColor:tn,borderTopColor:tn,borderRightColor:tn,borderBottomColor:tn,borderLeftColor:tn,filter:jh,WebkitFilter:jh},Pm=t=>PN[t];function TM(t,e){let n=Pm(t);return n!==jh&&(n=br),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const AM=t=>/^0[^.\s]+$/.test(t);function LN(t){if(typeof t=="number")return t===0;if(t!==null)return t==="none"||t==="0"||AM(t)}function DN(t,e,n,i){const r=Wh(e,n);let s;Array.isArray(n)?s=[...n]:s=[null,n];const o=i.from!==void 0?i.from:t.get();let a;const l=[];for(let u=0;u<s.length;u++)s[u]===null&&(s[u]=u===0?o:s[u-1]),LN(s[u])&&l.push(u),typeof s[u]=="string"&&s[u]!=="none"&&s[u]!=="0"&&(a=s[u]);if(r&&l.length&&a)for(let u=0;u<l.length;u++){const c=l[u];s[c]=TM(e,a)}return s}function NN({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}function Lm(t,e){return t[e]||t.default||t}const IN={skipAnimations:!1},Dm=(t,e,n,i={})=>r=>{const s=Lm(i,t)||{},o=s.delay||i.delay||0;let{elapsed:a=0}=i;a=a-rs(o);const l=DN(e,t,n,s),u=l[0],c=l[l.length-1],f=Wh(t,u),d=Wh(t,c);let p={keyframes:l,velocity:e.getVelocity(),ease:"easeOut",...s,delay:-a,onUpdate:g=>{e.set(g),s.onUpdate&&s.onUpdate(g)},onComplete:()=>{r(),s.onComplete&&s.onComplete()}};if(NN(s)||(p={...p,...AN(t,p)}),p.duration&&(p.duration=rs(p.duration)),p.repeatDelay&&(p.repeatDelay=rs(p.repeatDelay)),!f||!d||RD.current||s.type===!1||IN.skipAnimations)return SN(p);if(!i.isHandoff&&e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate){const g=xN(e,t,p);if(g)return g}return gc(p)};function vc(t){return!!(vn(t)&&t.add)}const bM=t=>/^\-?\d*\.?\d+$/.test(t);function Nm(t,e){t.indexOf(e)===-1&&t.push(e)}function Im(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class Um{constructor(){this.subscriptions=[]}add(e){return Nm(this.subscriptions,e),()=>Im(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const UN=t=>!isNaN(parseFloat(t));class FN{constructor(e,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(i,r=!0)=>{this.prev=this.current,this.current=i;const{delta:s,timestamp:o}=qt;this.lastUpdated!==o&&(this.timeDelta=s,this.lastUpdated=o,ut.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>ut.postRender(this.velocityCheck),this.velocityCheck=({timestamp:i})=>{i!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=UN(this.current),this.owner=n.owner}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new Um);const i=this.events[e].add(n);return e==="change"?()=>{i(),ut.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=e,this.timeDelta=i}jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?MM(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Mo(t,e){return new FN(t,e)}const CM=t=>e=>e.test(t),ON={test:t=>t==="auto",parse:t=>t},RM=[gs,be,gi,Qi,j3,W3,ON],qo=t=>RM.find(CM(t)),kN=[...RM,tn,br],BN=t=>kN.find(CM(t));function zN(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Mo(n))}function Fm(t,e){const n=tf(t,e);let{transitionEnd:i={},transition:r={},...s}=n?t.makeTargetAnimatable(n,!1):{};s={...s,...i};for(const o in s){const a=sD(s[o]);zN(t,o,a)}}function $h(t,e){[...e].reverse().forEach(i=>{const r=t.getVariant(i);r&&Fm(t,r),t.variantChildren&&t.variantChildren.forEach(s=>{$h(s,e)})})}function VN(t,e){if(Array.isArray(e))return $h(t,e);if(typeof e=="string")return $h(t,[e]);Fm(t,e)}function HN(t,e,n){var i,r;const s=Object.keys(e).filter(a=>!t.hasValue(a)),o=s.length;if(o)for(let a=0;a<o;a++){const l=s[a],u=e[l];let c=null;Array.isArray(u)&&(c=u[0]),c===null&&(c=(r=(i=n[l])!==null&&i!==void 0?i:t.readValue(l))!==null&&r!==void 0?r:e[l]),c!=null&&(typeof c=="string"&&(bM(c)||AM(c))?c=parseFloat(c):!BN(c)&&br.test(u)&&(c=TM(l,u)),t.addValue(l,Mo(c,{owner:t})),n[l]===void 0&&(n[l]=c),c!==null&&t.setBaseTarget(l,c))}}function GN(t,e){return e?(e[t]||e.default||e).from:void 0}function WN(t,e,n){const i={};for(const r in t){const s=GN(r,e);if(s!==void 0)i[r]=s;else{const o=n.getValue(r);o&&(i[r]=o.get())}}return i}function jN({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function $N(t,e){const n=t.get();if(Array.isArray(e)){for(let i=0;i<e.length;i++)if(e[i]!==n)return!0}else return n!==e}function PM(t,e,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:s=t.getDefaultTransition(),transitionEnd:o,...a}=t.makeTargetAnimatable(e);const l=t.getValue("willChange");i&&(s=i);const u=[],c=r&&t.animationState&&t.animationState.getState()[r];for(const f in a){const d=t.getValue(f),p=a[f];if(!d||p===void 0||c&&jN(c,f))continue;const g={delay:n,elapsed:0,...Lm(s||{},f)};if(window.HandoffAppearAnimations){const h=t.getProps()[P1];if(h){const y=window.HandoffAppearAnimations(h,f,d,ut);y!==null&&(g.elapsed=y,g.isHandoff=!0)}}let _=!g.isHandoff&&!$N(d,p);if(g.type==="spring"&&(d.getVelocity()||g.velocity)&&(_=!1),d.animation&&(_=!1),_)continue;d.start(Dm(f,d,p,t.shouldReduceMotion&&ms.has(f)?{type:!1}:g));const m=d.animation;vc(l)&&(l.add(f),m.then(()=>l.remove(f))),u.push(m)}return o&&Promise.all(u).then(()=>{o&&Fm(t,o)}),u}function Xh(t,e,n={}){const i=tf(t,e,n.custom);let{transition:r=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const s=i?()=>Promise.all(PM(t,i,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(l=0)=>{const{delayChildren:u=0,staggerChildren:c,staggerDirection:f}=r;return XN(t,e,u+l,c,f,n)}:()=>Promise.resolve(),{when:a}=r;if(a){const[l,u]=a==="beforeChildren"?[s,o]:[o,s];return l().then(()=>u())}else return Promise.all([s(),o(n.delay)])}function XN(t,e,n=0,i=0,r=1,s){const o=[],a=(t.variantChildren.size-1)*i,l=r===1?(u=0)=>u*i:(u=0)=>a-u*i;return Array.from(t.variantChildren).sort(qN).forEach((u,c)=>{u.notify("AnimationStart",e),o.push(Xh(u,e,{...s,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",e)))}),Promise.all(o)}function qN(t,e){return t.sortNodePosition(e)}function LM(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>Xh(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=Xh(t,e,n);else{const r=typeof e=="function"?tf(t,e,n.custom):e;i=Promise.all(PM(t,r,n))}return i.then(()=>t.notify("AnimationComplete",e))}const YN=[...ym].reverse(),KN=ym.length;function QN(t){return e=>Promise.all(e.map(({animation:n,options:i})=>LM(t,n,i)))}function ZN(t){let e=QN(t);const n=eI();let i=!0;const r=(l,u)=>{const c=tf(t,u);if(c){const{transition:f,transitionEnd:d,...p}=c;l={...l,...p,...d}}return l};function s(l){e=l(t)}function o(l,u){const c=t.getProps(),f=t.getVariantContext(!0)||{},d=[],p=new Set;let g={},_=1/0;for(let h=0;h<KN;h++){const y=YN[h],v=n[y],x=c[y]!==void 0?c[y]:f[y],E=Za(x),w=y===u?v.isActive:null;w===!1&&(_=h);let M=x===f[y]&&x!==c[y]&&E;if(M&&i&&t.manuallyAnimateOnMount&&(M=!1),v.protectedKeys={...g},!v.isActive&&w===null||!x&&!v.prevProp||Qc(x)||typeof x=="boolean")continue;let S=JN(v.prevProp,x)||y===u&&v.isActive&&!M&&E||h>_&&E,C=!1;const U=Array.isArray(x)?x:[x];let L=U.reduce(r,{});w===!1&&(L={});const{prevResolvedValues:Q={}}=v,I={...Q,...L},k=R=>{S=!0,p.has(R)&&(C=!0,p.delete(R)),v.needsAnimating[R]=!0};for(const R in I){const z=L[R],O=Q[R];if(g.hasOwnProperty(R))continue;let V=!1;dc(z)&&dc(O)?V=!J1(z,O):V=z!==O,V?z!==void 0?k(R):p.add(R):z!==void 0&&p.has(R)?k(R):v.protectedKeys[R]=!0}v.prevProp=x,v.prevResolvedValues=L,v.isActive&&(g={...g,...L}),i&&t.blockInitialAnimation&&(S=!1),S&&(!M||C)&&d.push(...U.map(R=>({animation:R,options:{type:y,...l}})))}if(p.size){const h={};p.forEach(y=>{const v=t.getBaseTarget(y);v!==void 0&&(h[y]=v)}),d.push({animation:h})}let m=!!d.length;return i&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(m=!1),i=!1,m?e(d):Promise.resolve()}function a(l,u,c){var f;if(n[l].isActive===u)return Promise.resolve();(f=t.variantChildren)===null||f===void 0||f.forEach(p=>{var g;return(g=p.animationState)===null||g===void 0?void 0:g.setActive(l,u)}),n[l].isActive=u;const d=o(c,l);for(const p in n)n[p].protectedKeys={};return d}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n}}function JN(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!J1(e,t):!1}function kr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function eI(){return{animate:kr(!0),whileInView:kr(),whileHover:kr(),whileTap:kr(),whileDrag:kr(),whileFocus:kr(),exit:kr()}}class tI extends Lr{constructor(e){super(e),e.animationState||(e.animationState=ZN(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),Qc(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let nI=0;class iI extends Lr{constructor(){super(...arguments),this.id=nI++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n,custom:i}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const s=this.node.animationState.setActive("exit",!e,{custom:i??this.node.getProps().custom});n&&!e&&s.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const rI={animation:{Feature:tI},exit:{Feature:iI}},dy=(t,e)=>Math.abs(t-e);function sI(t,e){const n=dy(t.x,e.x),i=dy(t.y,e.y);return Math.sqrt(n**2+i**2)}class DM{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Td(this.lastMoveEventInfo,this.history),d=this.startEvent!==null,p=sI(f.offset,{x:0,y:0})>=3;if(!d&&!p)return;const{point:g}=f,{timestamp:_}=qt;this.history.push({...g,timestamp:_});const{onStart:m,onMove:h}=this.handlers;d||(m&&m(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),h&&h(this.lastMoveEvent,f)},this.handlePointerMove=(f,d)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=wd(d,this.transformPagePoint),ut.update(this.updatePoint,!0)},this.handlePointerUp=(f,d)=>{this.end();const{onEnd:p,onSessionEnd:g,resumeAnimation:_}=this.handlers;if(this.dragSnapToOrigin&&_&&_(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=Td(f.type==="pointercancel"?this.lastMoveEventInfo:wd(d,this.transformPagePoint),this.history);this.startEvent&&p&&p(f,m),g&&g(f,m)},!q1(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const o=ef(e),a=wd(o,this.transformPagePoint),{point:l}=a,{timestamp:u}=qt;this.history=[{...l,timestamp:u}];const{onSessionStart:c}=n;c&&c(e,Td(a,this.history)),this.removeListeners=Sr(Ui(this.contextWindow,"pointermove",this.handlePointerMove),Ui(this.contextWindow,"pointerup",this.handlePointerUp),Ui(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Hi(this.updatePoint)}}function wd(t,e){return e?{point:e(t.point)}:t}function hy(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Td({point:t},e){return{point:t,delta:hy(t,NM(e)),offset:hy(t,oI(e)),velocity:aI(e,.1)}}function oI(t){return t[0]}function NM(t){return t[t.length-1]}function aI(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=NM(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>rs(e)));)n--;if(!i)return{x:0,y:0};const s=Fi(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Cn(t){return t.max-t.min}function qh(t,e=0,n=.01){return Math.abs(t-e)<=n}function py(t,e,n,i=.5){t.origin=i,t.originPoint=mt(e.min,e.max,t.origin),t.scale=Cn(n)/Cn(e),(qh(t.scale,1,1e-4)||isNaN(t.scale))&&(t.scale=1),t.translate=mt(n.min,n.max,t.origin)-t.originPoint,(qh(t.translate)||isNaN(t.translate))&&(t.translate=0)}function Sa(t,e,n,i){py(t.x,e.x,n.x,i?i.originX:void 0),py(t.y,e.y,n.y,i?i.originY:void 0)}function my(t,e,n){t.min=n.min+e.min,t.max=t.min+Cn(e)}function lI(t,e,n){my(t.x,e.x,n.x),my(t.y,e.y,n.y)}function gy(t,e,n){t.min=e.min-n.min,t.max=t.min+Cn(e)}function Ma(t,e,n){gy(t.x,e.x,n.x),gy(t.y,e.y,n.y)}function uI(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?mt(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?mt(n,t,i.max):Math.min(t,n)),t}function vy(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function cI(t,{top:e,left:n,bottom:i,right:r}){return{x:vy(t.x,n,r),y:vy(t.y,e,i)}}function yy(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function fI(t,e){return{x:yy(t.x,e.x),y:yy(t.y,e.y)}}function dI(t,e){let n=.5;const i=Cn(t),r=Cn(e);return r>i?n=el(e.min,e.max-i,t.min):i>r&&(n=el(t.min,t.max-r,e.min)),Ar(0,1,n)}function hI(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Yh=.35;function pI(t=Yh){return t===!1?t=0:t===!0&&(t=Yh),{x:_y(t,"left","right"),y:_y(t,"top","bottom")}}function _y(t,e,n){return{min:xy(t,e),max:xy(t,n)}}function xy(t,e){return typeof t=="number"?t:t[e]||0}const Sy=()=>({translate:0,scale:1,origin:0,originPoint:0}),Qs=()=>({x:Sy(),y:Sy()}),My=()=>({min:0,max:0}),wt=()=>({x:My(),y:My()});function In(t){return[t("x"),t("y")]}function IM({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function mI({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function gI(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Ad(t){return t===void 0||t===1}function Kh({scale:t,scaleX:e,scaleY:n}){return!Ad(t)||!Ad(e)||!Ad(n)}function Gr(t){return Kh(t)||UM(t)||t.z||t.rotate||t.rotateX||t.rotateY}function UM(t){return Ey(t.x)||Ey(t.y)}function Ey(t){return t&&t!=="0%"}function yc(t,e,n){const i=t-n,r=e*i;return n+r}function wy(t,e,n,i,r){return r!==void 0&&(t=yc(t,r,i)),yc(t,n,i)+e}function Qh(t,e=0,n=1,i,r){t.min=wy(t.min,e,n,i,r),t.max=wy(t.max,e,n,i,r)}function FM(t,{x:e,y:n}){Qh(t.x,e.translate,e.scale,e.originPoint),Qh(t.y,n.translate,n.scale,n.originPoint)}function vI(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const l=s.instance;l&&l.style&&l.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Zs(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,FM(t,o)),i&&Gr(s.latestValues)&&Zs(t,s.latestValues))}e.x=Ty(e.x),e.y=Ty(e.y)}function Ty(t){return Number.isInteger(t)||t>1.0000000000001||t<.999999999999?t:1}function er(t,e){t.min=t.min+e,t.max=t.max+e}function Ay(t,e,[n,i,r]){const s=e[r]!==void 0?e[r]:.5,o=mt(t.min,t.max,s);Qh(t,e[n],e[i],o,e.scale)}const yI=["x","scaleX","originX"],_I=["y","scaleY","originY"];function Zs(t,e){Ay(t.x,e,yI),Ay(t.y,e,_I)}function OM(t,e){return IM(gI(t.getBoundingClientRect(),e))}function xI(t,e,n){const i=OM(t,n),{scroll:r}=e;return r&&(er(i.x,r.offset.x),er(i.y,r.offset.y)),i}const kM=({current:t})=>t?t.ownerDocument.defaultView:null,SI=new WeakMap;class MI{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=wt(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=c=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(ef(c,"page").point)},s=(c,f)=>{const{drag:d,dragPropagation:p,onDragStart:g}=this.getProps();if(d&&!p&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=K1(d),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),In(m=>{let h=this.getAxisMotionValue(m).get()||0;if(gi.test(h)){const{projection:y}=this.visualElement;if(y&&y.layout){const v=y.layout.layoutBox[m];v&&(h=Cn(v)*(parseFloat(h)/100))}}this.originPoint[m]=h}),g&&ut.update(()=>g(c,f),!1,!0);const{animationState:_}=this.visualElement;_&&_.setActive("whileDrag",!0)},o=(c,f)=>{const{dragPropagation:d,dragDirectionLock:p,onDirectionLock:g,onDrag:_}=this.getProps();if(!d&&!this.openGlobalLock)return;const{offset:m}=f;if(p&&this.currentDirection===null){this.currentDirection=EI(m),this.currentDirection!==null&&g&&g(this.currentDirection);return}this.updateAxis("x",f.point,m),this.updateAxis("y",f.point,m),this.visualElement.render(),_&&_(c,f)},a=(c,f)=>this.stop(c,f),l=()=>In(c=>{var f;return this.getAnimationState(c)==="paused"&&((f=this.getAxisMotionValue(c).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new DM(e,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:kM(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&ut.update(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!cu(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=uI(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&Ys(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=cI(r.layoutBox,n):this.constraints=!1,this.elastic=pI(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&In(o=>{this.getAxisMotionValue(o)&&(this.constraints[o]=hI(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Ys(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=xI(i,r.root,this.visualElement.getTransformPagePoint());let o=fI(r.layout.layoutBox,s);if(n){const a=n(mI(o));this.hasMutatedConstraints=!!a,a&&(o=IM(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=In(c=>{if(!cu(c,n,this.currentDirection))return;let f=l&&l[c]||{};o&&(f={min:0,max:0});const d=r?200:1e6,p=r?40:1e7,g={type:"inertia",velocity:i?e[c]:0,bounceStiffness:d,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(c,g)});return Promise.all(u).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return i.start(Dm(e,i,0,n))}stopAnimation(){In(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){In(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n="_drag"+e.toUpperCase(),i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){In(n=>{const{drag:i}=this.getProps();if(!cu(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-mt(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Ys(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};In(o=>{const a=this.getAxisMotionValue(o);if(a){const l=a.get();r[o]=dI({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),In(o=>{if(!cu(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:u}=this.constraints[o];a.set(mt(l,u,r[o]))})}addListeners(){if(!this.visualElement.current)return;SI.set(this.visualElement,this);const e=this.visualElement.current,n=Ui(e,"pointerdown",l=>{const{drag:u,dragListener:c=!0}=this.getProps();u&&c&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Ys(l)&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),i();const o=Ni(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(In(c=>{const f=this.getAxisMotionValue(c);f&&(this.originPoint[c]+=l[c].translate,f.set(f.get()+l[c].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=Yh,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function cu(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function EI(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class wI extends Lr{constructor(e){super(e),this.removeGroupControls=Mt,this.removeListeners=Mt,this.controls=new MI(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Mt}unmount(){this.removeGroupControls(),this.removeListeners()}}const by=t=>(e,n)=>{t&&ut.update(()=>t(e,n))};class TI extends Lr{constructor(){super(...arguments),this.removePointerDownListener=Mt}onPointerDown(e){this.session=new DM(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:kM(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:by(e),onStart:by(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&ut.update(()=>r(s,o))}}}mount(){this.removePointerDownListener=Ui(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function AI(){const t=B.useContext(gm);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:n,register:i}=t,r=B.useId();return B.useEffect(()=>i(r),[]),!e&&n?[!1,()=>n&&n(r)]:[!0]}const bu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Cy(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Yo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(be.test(t))t=parseFloat(t);else return t;const n=Cy(t,e.target.x),i=Cy(t,e.target.y);return`${n}% ${i}%`}},bI={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=br.parse(t);if(r.length>5)return i;const s=br.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const u=mt(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=u),typeof r[3+o]=="number"&&(r[3+o]/=u),s(r)}};class CI extends c_.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;O3(RI),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),bu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,o=i.projection;return o&&(o.isPresent=s,r||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||ut.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function BM(t){const[e,n]=AI(),i=B.useContext(D1);return c_.createElement(CI,{...t,layoutGroup:i,switchLayoutGroup:B.useContext(N1),isPresent:e,safeToRemove:n})}const RI={borderRadius:{...Yo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Yo,borderTopRightRadius:Yo,borderBottomLeftRadius:Yo,borderBottomRightRadius:Yo,boxShadow:bI},zM=["TopLeft","TopRight","BottomLeft","BottomRight"],PI=zM.length,Ry=t=>typeof t=="string"?parseFloat(t):t,Py=t=>typeof t=="number"||be.test(t);function LI(t,e,n,i,r,s){r?(t.opacity=mt(0,n.opacity!==void 0?n.opacity:1,DI(i)),t.opacityExit=mt(e.opacity!==void 0?e.opacity:1,0,NI(i))):s&&(t.opacity=mt(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<PI;o++){const a=`border${zM[o]}Radius`;let l=Ly(e,a),u=Ly(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Py(l)===Py(u)?(t[a]=Math.max(mt(Ry(l),Ry(u),i),0),(gi.test(u)||gi.test(l))&&(t[a]+="%")):t[a]=u}(e.rotate||n.rotate)&&(t.rotate=mt(e.rotate||0,n.rotate||0,i))}function Ly(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const DI=VM(0,.5,lM),NI=VM(.5,.95,Mt);function VM(t,e,n){return i=>i<t?0:i>e?1:n(el(t,e,i))}function Dy(t,e){t.min=e.min,t.max=e.max}function Nn(t,e){Dy(t.x,e.x),Dy(t.y,e.y)}function Ny(t,e,n,i,r){return t-=e,t=yc(t,1/n,i),r!==void 0&&(t=yc(t,1/r,i)),t}function II(t,e=0,n=1,i=.5,r,s=t,o=t){if(gi.test(e)&&(e=parseFloat(e),e=mt(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=mt(s.min,s.max,i);t===s&&(a-=e),t.min=Ny(t.min,e,n,a,r),t.max=Ny(t.max,e,n,a,r)}function Iy(t,e,[n,i,r],s,o){II(t,e[n],e[i],e[r],e.scale,s,o)}const UI=["x","scaleX","originX"],FI=["y","scaleY","originY"];function Uy(t,e,n,i){Iy(t.x,e,UI,n?n.x:void 0,i?i.x:void 0),Iy(t.y,e,FI,n?n.y:void 0,i?i.y:void 0)}function Fy(t){return t.translate===0&&t.scale===1}function HM(t){return Fy(t.x)&&Fy(t.y)}function OI(t,e){return t.x.min===e.x.min&&t.x.max===e.x.max&&t.y.min===e.y.min&&t.y.max===e.y.max}function GM(t,e){return Math.round(t.x.min)===Math.round(e.x.min)&&Math.round(t.x.max)===Math.round(e.x.max)&&Math.round(t.y.min)===Math.round(e.y.min)&&Math.round(t.y.max)===Math.round(e.y.max)}function Oy(t){return Cn(t.x)/Cn(t.y)}class kI{constructor(){this.members=[]}add(e){Nm(this.members,e),e.scheduleRender()}remove(e){if(Im(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function ky(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y;if((r||s)&&(i=`translate3d(${r}px, ${s}px, 0) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{rotate:l,rotateX:u,rotateY:c}=n;l&&(i+=`rotate(${l}deg) `),u&&(i+=`rotateX(${u}deg) `),c&&(i+=`rotateY(${c}deg) `)}const o=t.x.scale*e.x,a=t.y.scale*e.y;return(o!==1||a!==1)&&(i+=`scale(${o}, ${a})`),i||"none"}const BI=(t,e)=>t.depth-e.depth;class zI{constructor(){this.children=[],this.isDirty=!1}add(e){Nm(this.children,e),this.isDirty=!0}remove(e){Im(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(BI),this.isDirty=!1,this.children.forEach(e)}}function VI(t,e){const n=performance.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(Hi(i),t(s-e))};return ut.read(i,!0),()=>Hi(i)}function HI(t){window.MotionDebug&&window.MotionDebug.record(t)}function GI(t){return t instanceof SVGElement&&t.tagName!=="svg"}function WI(t,e,n){const i=vn(t)?t:Mo(t);return i.start(Dm("",i,e,n)),i.animation}const By=["","X","Y","Z"],jI={visibility:"hidden"},zy=1e3;let $I=0;const Wr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function WM({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=$I++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Wr.totalNodes=Wr.resolvedTargetDeltas=Wr.recalculatedProjection=0,this.nodes.forEach(YI),this.nodes.forEach(eU),this.nodes.forEach(tU),this.nodes.forEach(KI),HI(Wr)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new zI)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Um),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=GI(o),this.instance=o;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),t){let f;const d=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=VI(d,250),bu.hasAnimatedSinceResize&&(bu.hasAnimatedSinceResize=!1,this.nodes.forEach(Hy))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:d,hasRelativeTargetChanged:p,layout:g})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const _=this.options.transition||c.getDefaultTransition()||oU,{onLayoutAnimationStart:m,onLayoutAnimationComplete:h}=c.getProps(),y=!this.targetLayout||!GM(this.targetLayout,g)||p,v=!d&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||v||d&&(y||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,v);const x={...Lm(_,"layout"),onPlay:m,onComplete:h};(c.shouldReduceMotion||this.options.layoutRoot)&&(x.delay=0,x.type=!1),this.startAnimation(x)}else d||Hy(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=g})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Hi(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(nU),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const f=this.path[c];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Vy);return}this.isUpdating||this.nodes.forEach(ZI),this.isUpdating=!1,this.nodes.forEach(JI),this.nodes.forEach(XI),this.nodes.forEach(qI),this.clearAllSnapshots();const a=performance.now();qt.delta=Ar(0,1e3/60,a-qt.timestamp),qt.timestamp=a,qt.isProcessing=!0,gd.update.process(qt),gd.preRender.process(qt),gd.render.process(qt),qt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(QI),this.sharedNodes.forEach(iU)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ut.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ut.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=wt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:o,isRoot:i(this.instance),offset:n(this.instance)})}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!HM(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;o&&(a||Gr(this.latestValues)||c)&&(r(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),aU(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:o}=this.options;if(!o)return wt();const a=o.measureViewportBox(),{scroll:l}=this.root;return l&&(er(a.x,l.offset.x),er(a.y,l.offset.y)),a}removeElementScroll(o){const a=wt();Nn(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:c,options:f}=u;if(u!==this.root&&c&&f.layoutScroll){if(c.isRoot){Nn(a,o);const{scroll:d}=this.root;d&&(er(a.x,-d.offset.x),er(a.y,-d.offset.y))}er(a.x,c.offset.x),er(a.y,c.offset.y)}}return a}applyTransform(o,a=!1){const l=wt();Nn(l,o);for(let u=0;u<this.path.length;u++){const c=this.path[u];!a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Zs(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),Gr(c.latestValues)&&Zs(l,c.latestValues)}return Gr(this.latestValues)&&Zs(l,this.latestValues),l}removeTransform(o){const a=wt();Nn(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Gr(u.latestValues))continue;Kh(u.latestValues)&&u.updateSnapshot();const c=wt(),f=u.measurePageBox();Nn(c,f),Uy(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,c)}return Gr(this.latestValues)&&Uy(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==qt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(o||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:f,layoutId:d}=this.options;if(!(!this.layout||!(f||d))){if(this.resolvedRelativeTargetAt=qt.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=wt(),this.relativeTargetOrigin=wt(),Ma(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),Nn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=wt(),this.targetWithTransforms=wt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),lI(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Nn(this.target,this.layout.layoutBox),FM(this.target,this.targetDelta)):Nn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=wt(),this.relativeTargetOrigin=wt(),Ma(this.relativeTargetOrigin,this.target,p.target),Nn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Wr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Kh(this.parent.latestValues)||UM(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===qt.timestamp&&(u=!1),u)return;const{layout:c,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||f))return;Nn(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,p=this.treeScale.y;vI(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox);const{target:g}=a;if(!g){this.projectionTransform&&(this.projectionDelta=Qs(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Qs(),this.projectionDeltaWithTransform=Qs());const _=this.projectionTransform;Sa(this.projectionDelta,this.layoutCorrected,g,this.latestValues),this.projectionTransform=ky(this.projectionDelta,this.treeScale),(this.projectionTransform!==_||this.treeScale.x!==d||this.treeScale.y!==p)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",g)),Wr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),o){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(o,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},f=Qs();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const d=wt(),p=l?l.source:void 0,g=this.layout?this.layout.source:void 0,_=p!==g,m=this.getStack(),h=!m||m.members.length<=1,y=!!(_&&!h&&this.options.crossfade===!0&&!this.path.some(sU));this.animationProgress=0;let v;this.mixTargetDelta=x=>{const E=x/1e3;Gy(f.x,o.x,E),Gy(f.y,o.y,E),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ma(d,this.layout.layoutBox,this.relativeParent.layout.layoutBox),rU(this.relativeTarget,this.relativeTargetOrigin,d,E),v&&OI(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=wt()),Nn(v,this.relativeTarget)),_&&(this.animationValues=c,LI(c,u,this.latestValues,E,y,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=E},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Hi(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ut.update(()=>{bu.hasAnimatedSinceResize=!0,this.currentAnimation=WI(0,zy,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(zy),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=o;if(!(!a||!l||!u)){if(this!==o&&this.layout&&u&&jM(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||wt();const f=Cn(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const d=Cn(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+d}Nn(a,l),Zs(a,c),Sa(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new kI),this.sharedNodes.get(o).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const u={};for(let c=0;c<By.length;c++){const f="rotate"+By[c];l[f]&&(u[f]=l[f],o.setStaticValue(f,0))}o.render();for(const c in u)o.setStaticValue(c,u[c]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return jI;const u={visibility:""},c=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Au(o==null?void 0:o.pointerEvents)||"",u.transform=c?c(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const _={};return this.options.layoutId&&(_.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,_.pointerEvents=Au(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Gr(this.latestValues)&&(_.transform=c?c({},""):"none",this.hasProjected=!1),_}const d=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=ky(this.projectionDeltaWithTransform,this.treeScale,d),c&&(u.transform=c(d,u.transform));const{x:p,y:g}=this.projectionDelta;u.transformOrigin=`${p.origin*100}% ${g.origin*100}% 0`,f.animationValues?u.opacity=f===this?(l=(a=d.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:u.opacity=f===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const _ in cc){if(d[_]===void 0)continue;const{correct:m,applyTo:h}=cc[_],y=u.transform==="none"?d[_]:m(d[_],f);if(h){const v=h.length;for(let x=0;x<v;x++)u[h[x]]=y}else u[_]=y}return this.options.layoutId&&(u.pointerEvents=f===this?Au(o==null?void 0:o.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Vy),this.root.sharedNodes.clear()}}}function XI(t){t.updateLayout()}function qI(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?In(f=>{const d=o?n.measuredBox[f]:n.layoutBox[f],p=Cn(d);d.min=i[f].min,d.max=d.min+p}):jM(s,n.layoutBox,i)&&In(f=>{const d=o?n.measuredBox[f]:n.layoutBox[f],p=Cn(i[f]);d.max=d.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[f].max=t.relativeTarget[f].min+p)});const a=Qs();Sa(a,i,n.layoutBox);const l=Qs();o?Sa(l,t.applyTransform(r,!0),n.measuredBox):Sa(l,i,n.layoutBox);const u=!HM(a);let c=!1;if(!t.resumeFrom){const f=t.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:d,layout:p}=f;if(d&&p){const g=wt();Ma(g,n.layoutBox,d.layoutBox);const _=wt();Ma(_,i,p.layoutBox),GM(g,_)||(c=!0),f.options.layoutRoot&&(t.relativeTarget=_,t.relativeTargetOrigin=g,t.relativeParent=f)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:c})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function YI(t){Wr.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function KI(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function QI(t){t.clearSnapshot()}function Vy(t){t.clearMeasurements()}function ZI(t){t.isLayoutDirty=!1}function JI(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Hy(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function eU(t){t.resolveTargetDelta()}function tU(t){t.calcProjection()}function nU(t){t.resetRotation()}function iU(t){t.removeLeadSnapshot()}function Gy(t,e,n){t.translate=mt(e.translate,0,n),t.scale=mt(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function Wy(t,e,n,i){t.min=mt(e.min,n.min,i),t.max=mt(e.max,n.max,i)}function rU(t,e,n,i){Wy(t.x,e.x,n.x,i),Wy(t.y,e.y,n.y,i)}function sU(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const oU={duration:.45,ease:[.4,0,.1,1]},jy=t=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(t),$y=jy("applewebkit/")&&!jy("chrome/")?Math.round:Mt;function Xy(t){t.min=$y(t.min),t.max=$y(t.max)}function aU(t){Xy(t.x),Xy(t.y)}function jM(t,e,n){return t==="position"||t==="preserve-aspect"&&!qh(Oy(e),Oy(n),.2)}const lU=WM({attachResizeListener:(t,e)=>Ni(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),bd={current:void 0},$M=WM({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!bd.current){const t=new lU({});t.mount(window),t.setOptions({layoutScroll:!0}),bd.current=t}return bd.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),uU={pan:{Feature:TI},drag:{Feature:wI,ProjectionNode:$M,MeasureLayout:BM}},cU=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function fU(t){const e=cU.exec(t);if(!e)return[,];const[,n,i]=e;return[n,i]}function Zh(t,e,n=1){const[i,r]=fU(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return bM(o)?parseFloat(o):o}else return zh(r)?Zh(r,e,n+1):r}function dU(t,{...e},n){const i=t.current;if(!(i instanceof Element))return{target:e,transitionEnd:n};n&&(n={...n}),t.values.forEach(r=>{const s=r.get();if(!zh(s))return;const o=Zh(s,i);o&&r.set(o)});for(const r in e){const s=e[r];if(!zh(s))continue;const o=Zh(s,i);o&&(e[r]=o,n||(n={}),n[r]===void 0&&(n[r]=s))}return{target:e,transitionEnd:n}}const hU=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),XM=t=>hU.has(t),pU=t=>Object.keys(t).some(XM),qy=t=>t===gs||t===be,Yy=(t,e)=>parseFloat(t.split(", ")[e]),Ky=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/);if(r)return Yy(r[1],e);{const s=i.match(/^matrix\((.+)\)$/);return s?Yy(s[1],t):0}},mU=new Set(["x","y","z"]),gU=dl.filter(t=>!mU.has(t));function vU(t){const e=[];return gU.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e.length&&t.render(),e}const Eo={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:Ky(4,13),y:Ky(5,14)};Eo.translateX=Eo.x;Eo.translateY=Eo.y;const yU=(t,e,n)=>{const i=e.measureViewportBox(),r=e.current,s=getComputedStyle(r),{display:o}=s,a={};o==="none"&&e.setStaticValue("display",t.display||"block"),n.forEach(u=>{a[u]=Eo[u](i,s)}),e.render();const l=e.measureViewportBox();return n.forEach(u=>{const c=e.getValue(u);c&&c.jump(a[u]),t[u]=Eo[u](l,s)}),t},_U=(t,e,n={},i={})=>{e={...e},i={...i};const r=Object.keys(e).filter(XM);let s=[],o=!1;const a=[];if(r.forEach(l=>{const u=t.getValue(l);if(!t.hasValue(l))return;let c=n[l],f=qo(c);const d=e[l];let p;if(dc(d)){const g=d.length,_=d[0]===null?1:0;c=d[_],f=qo(c);for(let m=_;m<g&&d[m]!==null;m++)p?hc(qo(d[m])===p):p=qo(d[m])}else p=qo(d);if(f!==p)if(qy(f)&&qy(p)){const g=u.get();typeof g=="string"&&u.set(parseFloat(g)),typeof d=="string"?e[l]=parseFloat(d):Array.isArray(d)&&p===be&&(e[l]=d.map(parseFloat))}else f!=null&&f.transform&&(p!=null&&p.transform)&&(c===0||d===0)?c===0?u.set(p.transform(c)):e[l]=f.transform(d):(o||(s=vU(t),o=!0),a.push(l),i[l]=i[l]!==void 0?i[l]:e[l],u.jump(d))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,u=yU(e,t,a);return s.length&&s.forEach(([c,f])=>{t.getValue(c).set(f)}),t.render(),Kc&&l!==null&&window.scrollTo({top:l}),{target:u,transitionEnd:i}}else return{target:e,transitionEnd:i}};function xU(t,e,n,i){return pU(e)?_U(t,e,n,i):{target:e,transitionEnd:i}}const SU=(t,e,n,i)=>{const r=dU(t,e,i);return e=r.target,i=r.transitionEnd,xU(t,e,n,i)},Jh={current:null},qM={current:!1};function MU(){if(qM.current=!0,!!Kc)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Jh.current=t.matches;t.addListener(e),e()}else Jh.current=!1}function EU(t,e,n){const{willChange:i}=e;for(const r in e){const s=e[r],o=n[r];if(vn(s))t.addValue(r,s),vc(i)&&i.add(r);else if(vn(o))t.addValue(r,Mo(s,{owner:t})),vc(i)&&i.remove(r);else if(o!==s)if(t.hasValue(r)){const a=t.getValue(r);!a.hasAnimated&&a.set(s)}else{const a=t.getStaticValue(r);t.addValue(r,Mo(a!==void 0?a:s,{owner:t}))}}for(const r in n)e[r]===void 0&&t.removeValue(r);return e}const Qy=new WeakMap,YM=Object.keys(Ja),wU=YM.length,Zy=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],TU=_m.length;class AU{constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,visualState:s},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>ut.render(this.render,!1,!0);const{latestValues:a,renderState:l}=s;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=l,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=o,this.isControllingVariants=Zc(n),this.isVariantNode=L1(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:u,...c}=this.scrapeMotionValuesFromProps(n,{});for(const f in c){const d=c[f];a[f]!==void 0&&vn(d)&&(d.set(a[f],!1),vc(u)&&u.add(f))}}scrapeMotionValuesFromProps(e,n){return{}}mount(e){this.current=e,Qy.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),qM.current||MU(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Jh.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Qy.delete(this.current),this.projection&&this.projection.unmount(),Hi(this.notifyUpdate),Hi(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,n){const i=ms.has(e),r=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&ut.update(this.notifyUpdate,!1,!0),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{r(),s()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}loadFeatures({children:e,...n},i,r,s){let o,a;for(let l=0;l<wU;l++){const u=YM[l],{isEnabled:c,Feature:f,ProjectionNode:d,MeasureLayout:p}=Ja[u];d&&(o=d),c(n)&&(!this.features[u]&&f&&(this.features[u]=new f(this)),p&&(a=p))}if((this.type==="html"||this.type==="svg")&&!this.projection&&o){this.projection=new o(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:u,drag:c,dragConstraints:f,layoutScroll:d,layoutRoot:p}=n;this.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:!!c||f&&Ys(f),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:s,layoutScroll:d,layoutRoot:p})}return a}updateFeatures(){for(const e in this.features){const n=this.features[e];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):wt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}makeTargetAnimatable(e,n=!0){return this.makeTargetAnimatableFromInstance(e,this.props,n)}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<Zy.length;i++){const r=Zy[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s=e["on"+r];s&&(this.propEventSubscriptions[r]=this.on(r,s))}this.prevMotionValues=EU(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const i=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(i.initial=this.props.initial),i}const n={};for(let i=0;i<TU;i++){const r=_m[i],s=this.props[r];(Za(s)||s===!1)&&(n[r]=s)}return n}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){n!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,n)),this.values.set(e,n),this.latestValues[e]=n.get()}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=Mo(n,{owner:this}),this.addValue(e,i)),i}readValue(e){var n;return this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(n=this.getBaseTargetFromProps(this.props,e))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,e,this.options)}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props,r=typeof i=="string"||typeof i=="object"?(n=Am(this.props,i))===null||n===void 0?void 0:n[e]:void 0;if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!vn(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new Um),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class KM extends AU{sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}makeTargetAnimatableFromInstance({transition:e,transitionEnd:n,...i},{transformValues:r},s){let o=WN(i,e||{},this);if(r&&(n&&(n=r(n)),i&&(i=r(i)),o&&(o=r(o))),s){HN(this,i,o);const a=SU(this,i,o,n);n=a.transitionEnd,i=a.target}return{transition:e,transitionEnd:n,...i}}}function bU(t){return window.getComputedStyle(t)}class CU extends KM{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,n){if(ms.has(n)){const i=Pm(n);return i&&i.default||0}else{const i=bU(e),r=(F1(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return OM(e,n)}build(e,n,i,r){Sm(e,n,i,r.transformTemplate)}scrapeMotionValuesFromProps(e,n){return Tm(e,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;vn(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(e,n,i,r){H1(e,n,i,r)}}class RU extends KM{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(ms.has(n)){const i=Pm(n);return i&&i.default||0}return n=G1.has(n)?n:vm(n),e.getAttribute(n)}measureInstanceViewportBox(){return wt()}scrapeMotionValuesFromProps(e,n){return j1(e,n)}build(e,n,i,r){Em(e,n,i,this.isSVGTag,r.transformTemplate)}renderInstance(e,n,i,r){W1(e,n,i,r)}mount(e){this.isSVGTag=wm(e.tagName),super.mount(e)}}const PU=(t,e)=>xm(t)?new RU(e,{enableHardwareAcceleration:!1}):new CU(e,{enableHardwareAcceleration:!0}),LU={layout:{ProjectionNode:$M,MeasureLayout:BM}},DU={...rI,...AD,...uU,...LU},We=U3((t,e)=>hD(t,e,DU,PU));function NU(t){t.values.forEach(e=>e.stop())}function IU(){const t=new Set,e={subscribe(n){return t.add(n),()=>void t.delete(n)},start(n,i){const r=[];return t.forEach(s=>{r.push(LM(s,n,{transitionOverride:i}))}),Promise.all(r)},set(n){return t.forEach(i=>{VN(i,n)})},stop(){t.forEach(n=>{NU(n)})},mount(){return()=>{e.stop()}}};return e}function UU(){const t=$1(IU);return C1(t.mount,[]),t}const Jy=UU,FU=({id:t,x:e,y:n,size:i,color:r,label:s,progress:o,completed:a,isActive:l,onClick:u,nodeType:c="standard"})=>{const f=Jy(),d=Jy(),[p,g]=B.useState(!1);return B.useEffect(()=>{l?(f.start({scale:[1,1.15,1.05],transition:{duration:.8,ease:"easeInOut"}}),d.start({opacity:[.2,.6,.2],scale:[1,1.2,1],transition:{duration:3,repeat:1/0,ease:"easeInOut"}})):(f.start({scale:1}),d.stop())},[l,f,d]),N.jsx(We.div,{className:`absolute cursor-pointer ${l?"z-30":"z-10"}`,style:{left:`${e}%`,top:`${n}%`,transform:"translate(-50%, -50%)"},initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:300,damping:20},onHoverStart:()=>g(!0),onHoverEnd:()=>g(!1),onClick:u,children:N.jsxs("div",{className:"relative",children:[N.jsx("div",{className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",children:Array.from({length:3}).map((_,m)=>N.jsx(We.div,{className:"absolute rounded-full opacity-0",style:{width:i*3,height:i*3,background:`radial-gradient(circle, rgba(${r.r}, ${r.g}, ${r.b}, 0.4) 0%, rgba(${r.r}, ${r.g}, ${r.b}, 0) 70%)`,left:"50%",top:"50%",transform:"translate(-50%, -50%)"},animate:l?{opacity:[0,.3,0],scale:[.8,1.3,.8]}:{opacity:0},transition:{duration:3+m,repeat:1/0,delay:m*.7,ease:"easeInOut"}},`field-${m}`))}),Array.from({length:2}).map((_,m)=>N.jsx(We.div,{className:"absolute rounded-full",style:{width:i*(1.8+m*.5),height:i*(1.8+m*.5),border:`1px ${m%2?"dashed":"solid"} rgba(${r.r}, ${r.g}, ${r.b}, ${.3-m*.1})`,left:"50%",top:"50%",transform:"translate(-50%, -50%)"},animate:l?{rotate:m%2?360:-360,scale:d}:{},transition:{rotate:{duration:20+m*10,repeat:1/0,ease:"linear"}}},`ring-${m}`)),N.jsxs(We.div,{className:"absolute rounded-full flex items-center justify-center overflow-hidden",style:{width:i*1.4,height:i*1.4,background:`radial-gradient(circle, rgba(${r.r}, ${r.g}, ${r.b}, 0.15) 0%, rgba(${r.r}, ${r.g}, ${r.b}, 0.05) 70%)`,boxShadow:`0 0 20px rgba(${r.r}, ${r.g}, ${r.b}, 0.3)`,left:"50%",top:"50%",transform:"translate(-50%, -50%)"},animate:f,children:[c==="processing"&&N.jsx("div",{className:"absolute inset-0",children:Array.from({length:8}).map((_,m)=>N.jsx(We.div,{className:"absolute left-1/2 top-1/2 h-full w-0.5",style:{background:`rgba(${r.r}, ${r.g}, ${r.b}, 0.5)`,transform:`translate(-50%, -50%) rotate(${m*45}deg)`,transformOrigin:"center",opacity:.7},animate:l?{opacity:[.2,.7,.2],height:["0%","100%","0%"]}:{},transition:{duration:3,repeat:1/0,delay:m*.2,ease:"easeInOut"}},`line-${m}`))}),c==="quantum"&&N.jsx("div",{className:"absolute inset-0",children:Array.from({length:3}).map((_,m)=>N.jsx(We.div,{className:"absolute rounded-full left-1/2 top-1/2",style:{border:`1px solid rgba(${r.r}, ${r.g}, ${r.b}, ${.7-m*.2})`,width:"30%",height:"30%",x:"-50%",y:"-50%"},animate:l?{width:["30%","90%","30%"],height:["30%","90%","30%"],opacity:[.7,.2,.7]}:{},transition:{duration:3,repeat:1/0,delay:m*.7,ease:"easeInOut"}},`wave-${m}`))}),c==="neural"&&N.jsxs("div",{className:"absolute inset-0",children:[Array.from({length:5}).map((_,m)=>{const h=m/5*Math.PI*2,y=Math.cos(h)*30,v=Math.sin(h)*30;return N.jsx(We.div,{className:"absolute w-1.5 h-1.5 rounded-full",style:{background:`rgba(${r.r}, ${r.g}, ${r.b}, 0.8)`,left:`calc(50% + ${y}%)`,top:`calc(50% + ${v}%)`,boxShadow:`0 0 5px rgba(${r.r}, ${r.g}, ${r.b}, 0.8)`},animate:l?{opacity:[.3,1,.3]}:{},transition:{duration:2,repeat:1/0,delay:m*.3,ease:"easeInOut"}},`neural-${m}`)}),l&&N.jsx("svg",{className:"absolute inset-0 w-full h-full",children:Array.from({length:5}).map((_,m)=>{const h=m/5*Math.PI*2,y=50+Math.cos(h)*30,v=50+Math.sin(h)*30,x=(m+2)%5/5*Math.PI*2,E=50+Math.cos(x)*30,w=50+Math.sin(x)*30;return N.jsx(We.line,{x1:`${y}%`,y1:`${v}%`,x2:`${E}%`,y2:`${w}%`,stroke:`rgba(${r.r}, ${r.g}, ${r.b}, 0.5)`,strokeWidth:"1",initial:{pathLength:0,opacity:0},animate:{pathLength:1,opacity:.5},transition:{duration:1.5,delay:m*.2,ease:"easeInOut"}},`connection-${m}`)})})]})]}),N.jsxs(We.div,{className:"absolute rounded-full flex items-center justify-center overflow-hidden",animate:f,style:{width:i,height:i,background:`rgba(${r.r}, ${r.g}, ${r.b}, 0.15)`,border:`1px solid rgba(${r.r}, ${r.g}, ${r.b}, 0.5)`,boxShadow:`0 0 15px rgba(${r.r}, ${r.g}, ${r.b}, 0.4)`,left:"50%",top:"50%",transform:"translate(-50%, -50%)"},children:[N.jsx(We.div,{className:"absolute bottom-0 left-0 w-full transition-all duration-300",style:{height:`${o*100}%`,background:`linear-gradient(0deg, 
                rgba(${r.r}, ${r.g}, ${r.b}, 0.8) 0%,
                rgba(${r.r}, ${r.g}, ${r.b}, 0.4) 100%
              )`}}),N.jsx(We.div,{className:"absolute w-1/2 h-1/2 rounded-full",style:{background:`radial-gradient(circle, 
                rgba(${r.r}, ${r.g}, ${r.b}, 0.9) 0%,
                rgba(${r.r}, ${r.g}, ${r.b}, 0.5) 100%
              )`,boxShadow:`0 0 10px rgba(${r.r}, ${r.g}, ${r.b}, 0.8)`},animate:l?{scale:[1,1.2,1],opacity:[.7,1,.7]}:{},transition:{duration:2,repeat:1/0,ease:"easeInOut"}}),a&&N.jsx(We.div,{className:"absolute z-10 text-white",initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:300,damping:20},children:N.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:N.jsx("polyline",{points:"20 6 9 17 4 12"})})})]}),N.jsxs("div",{className:"absolute whitespace-nowrap text-center",style:{bottom:-(i*.7),left:"50%",transform:"translateX(-50%)",width:i*2},children:[N.jsx("div",{className:"text-xs font-mono text-white opacity-90",children:s}),l&&N.jsx(We.div,{className:"text-[9px] font-mono mt-1 text-cyan-400 opacity-80",initial:{opacity:0},animate:{opacity:.8},transition:{duration:.5},children:a?"EXECUTION COMPLETE":`EXECUTING... ${Math.round(o*100)}%`})]})]})})},OU=({startX:t,startY:e,endX:n,endY:i,progress:r=1,color:s,thickness:o=2,animated:a=!1,delay:l=0,isActive:u=!1,particleSpeed:c=3,particleCount:f=2})=>{const d=B.useRef(null),[p,g]=B.useState(0);B.useEffect(()=>{d.current&&g(d.current.getTotalLength())},[t,e,n,i]);const m=(()=>{const h=(t+n)/2,y=(e+i)/2,v=.2,x=Math.abs(n-t),E=h,w=y-x*v;return`M ${t}% ${e}% Q ${E}% ${w}%, ${n}% ${i}%`})();return N.jsxs("svg",{className:"absolute top-0 left-0 w-full h-full z-5 pointer-events-none",style:{filter:`drop-shadow(0 0 3px rgba(${s.r}, ${s.g}, ${s.b}, 0.5))`},children:[N.jsxs("defs",{children:[N.jsxs("linearGradient",{id:`gradient-${t}-${e}-${n}-${i}`,x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[N.jsx("stop",{offset:"0%",stopColor:`rgba(${s.r}, ${s.g}, ${s.b}, 0.9)`}),N.jsx("stop",{offset:"50%",stopColor:`rgba(${s.r}, ${s.g}, ${s.b}, 0.7)`}),N.jsx("stop",{offset:"100%",stopColor:`rgba(${s.r}, ${s.g}, ${s.b}, 0.4)`})]}),N.jsx("pattern",{id:`dash-${t}-${e}`,x:"0",y:"0",width:"10",height:"4",patternUnits:"userSpaceOnUse",children:N.jsx("line",{x1:"0",y1:"0",x2:"10",y2:"0",stroke:`rgba(${s.r}, ${s.g}, ${s.b}, 0.7)`,strokeWidth:"2",strokeDasharray:"4 6"})}),N.jsxs("filter",{id:`glow-${t}-${e}`,x:"-20%",y:"-20%",width:"140%",height:"140%",children:[N.jsx("feGaussianBlur",{stdDeviation:"2",result:"blur"}),N.jsx("feComposite",{in:"SourceGraphic",in2:"blur",operator:"over"})]})]}),N.jsx(We.path,{ref:d,d:m,fill:"none",stroke:`url(#gradient-${t}-${e}-${n}-${i})`,strokeWidth:o,strokeLinecap:"round",initial:a?{pathLength:0,opacity:0}:{pathLength:r,opacity:1},animate:{pathLength:r,opacity:1},transition:{duration:a?1.5:0,delay:a?l:0,ease:"easeInOut"},filter:`url(#glow-${t}-${e})`}),N.jsx(We.path,{d:m,fill:"none",stroke:`rgba(${s.r}, ${s.g}, ${s.b}, 0.2)`,strokeWidth:o+3,strokeLinecap:"round",initial:a?{pathLength:0,opacity:0}:{pathLength:r,opacity:.2},animate:{pathLength:r,opacity:.2},transition:{duration:a?1.5:0,delay:a?l:0,ease:"easeInOut"}}),r>0&&u&&N.jsx(N.Fragment,{children:Array.from({length:f}).map((h,y)=>N.jsx(We.circle,{r:o+1,fill:`rgba(${s.r}, ${s.g}, ${s.b}, 1)`,filter:`blur(${o*.7}px)`,animate:{offsetDistance:["0%","100%"],opacity:[0,1,0]},transition:{duration:c,repeat:1/0,delay:y*(c/f),ease:"easeInOut"},style:{offsetPath:`path("${m}")`}},`particle-${y}`))})]})},kU=({x:t,y:e,width:n,height:i,title:r,color:s,content:o,isExecuting:a,isComplete:l,progress:u,delay:c,className:f=""})=>{const[d,p]=B.useState([]),[g,_]=B.useState(0);return B.useEffect(()=>{if(a&&o){const m=setInterval(()=>{g<o.length?_(h=>h+1):clearInterval(m)},150);return()=>clearInterval(m)}},[a,o,g]),B.useEffect(()=>{p((o==null?void 0:o.slice(0,g))||[])},[g,o]),N.jsxs(We.div,{className:`absolute ${f}`,style:{left:`${t}%`,top:`${e}%`,width:`${n}px`,transform:"translate(-50%, -50%)"},initial:{opacity:0,scale:.8,y:10},animate:{opacity:1,scale:1,y:0},transition:{duration:.6,delay:c,type:"spring",stiffness:100},children:[N.jsx(We.div,{className:"absolute inset-0 rounded-md opacity-20",style:{background:`radial-gradient(circle, rgba(${s.r}, ${s.g}, ${s.b}, 0.4) 0%, rgba(${s.r}, ${s.g}, ${s.b}, 0) 70%)`,filter:"blur(20px)",transform:"translateZ(0)"},animate:a?{opacity:[.1,.3,.1]}:{},transition:{duration:3,repeat:1/0,ease:"easeInOut"}}),N.jsxs("div",{className:"relative overflow-hidden rounded-md backdrop-blur-sm",style:{background:`linear-gradient(135deg, 
            rgba(${s.r}, ${s.g}, ${s.b}, 0.05) 0%, 
            rgba(${s.r}, ${s.g}, ${s.b}, 0.15) 100%
          )`,border:`1px solid rgba(${s.r}, ${s.g}, ${s.b}, 0.3)`,boxShadow:`0 0 20px rgba(${s.r}, ${s.g}, ${s.b}, 0.2)`},children:[a&&N.jsx(We.div,{className:"absolute left-0 w-full h-1 z-20",style:{background:`linear-gradient(90deg, 
                rgba(${s.r}, ${s.g}, ${s.b}, 0) 0%,
                rgba(${s.r}, ${s.g}, ${s.b}, 0.8) 50%,
                rgba(${s.r}, ${s.g}, ${s.b}, 0) 100%
              )`,boxShadow:`0 0 10px rgba(${s.r}, ${s.g}, ${s.b}, 0.8)`},animate:{top:["0%","100%","0%"]},transition:{duration:3,repeat:1/0,ease:"easeInOut"}}),N.jsxs("div",{className:"terminal-header flex items-center justify-between px-3 py-1 backdrop-blur-sm",style:{background:`rgba(${s.r}, ${s.g}, ${s.b}, 0.2)`,borderBottom:`1px solid rgba(${s.r}, ${s.g}, ${s.b}, 0.5)`},children:[N.jsxs("div",{className:"flex items-center space-x-1.5",children:[N.jsx("div",{className:"h-2 w-2 rounded-full bg-red-500 opacity-70"}),N.jsx("div",{className:"h-2 w-2 rounded-full bg-yellow-500 opacity-70"}),N.jsx("div",{className:"h-2 w-2 rounded-full bg-green-500 opacity-70"})]}),N.jsx("span",{className:"text-xs font-mono text-white opacity-80",children:r}),N.jsx("div",{className:"text-[9px] font-mono bg-black bg-opacity-30 rounded px-1.5 py-0.5 text-green-400",children:l?"COMPLETE":a?"ACTIVE":"READY"})]}),N.jsxs("div",{className:"terminal-content p-3 font-mono text-xs space-y-1 rounded-b-md relative overflow-hidden",style:{background:`rgba(${s.r}, ${s.g}, ${s.b}, 0.05)`,maxHeight:`${i}px`,color:"rgba(255, 255, 255, 0.9)",minHeight:"120px"},children:[N.jsx("div",{className:"absolute inset-0 text-[8px] leading-tight font-mono opacity-10 overflow-hidden z-0",style:{color:`rgba(${s.r}, ${s.g}, ${s.b}, 1)`},children:Array.from({length:20}).map((m,h)=>N.jsx("div",{children:Array.from({length:50}).map((y,v)=>N.jsx("span",{children:Math.round(Math.random())},v))},h))}),N.jsxs("div",{className:"relative z-10",children:[d.map((m,h)=>N.jsx(We.div,{className:"flex items-start",initial:{opacity:0,x:-5},animate:{opacity:1,x:0},transition:{duration:.3},children:m.startsWith(">")?N.jsxs(N.Fragment,{children:[N.jsx("span",{className:"text-cyan-500 mr-1",children:">"}),N.jsx("span",{className:"text-green-400",children:m.substring(1)})]}):m.includes("ERROR")?N.jsx("span",{className:"text-red-400",children:m}):m.includes("SUCCESS")?N.jsx("span",{className:"text-green-400",children:m}):N.jsx("span",{className:"opacity-90",children:m})},h)),a&&g<(o==null?void 0:o.length)&&N.jsx(We.span,{className:"inline-block h-3 w-2 align-middle bg-white",animate:{opacity:[1,0,1]},transition:{duration:.8,repeat:1/0}})]}),l&&N.jsx(We.div,{className:"absolute inset-0 bg-white",initial:{opacity:.7},animate:{opacity:0},transition:{duration:.5}})]}),a&&N.jsx(We.div,{className:"absolute bottom-0 left-0 h-0.5 bg-gradient-to-r",style:{width:`${u*100}%`,background:`linear-gradient(90deg, 
                rgba(${s.r}, ${s.g}, ${s.b}, 0.7) 0%,
                rgba(${s.r}, ${s.g}, ${s.b}, 1) 100%
              )`,boxShadow:`0 0 8px rgba(${s.r}, ${s.g}, ${s.b}, 0.8)`},initial:{width:0},animate:{width:`${u*100}%`},transition:{duration:.5}})]})]})},BU=()=>{const t=B.useRef(null),e=B.useRef([]),n=B.useRef(null),i=B.useRef({x:0,y:0});return B.useEffect(()=>{const r=t.current;if(!r)return;const s=r.getContext("2d"),o=()=>{r.width=window.innerWidth,r.height=window.innerHeight,l()},a=f=>{const d=r.getBoundingClientRect();i.current={x:f.clientX-d.left,y:f.clientY-d.top}},l=()=>{e.current=[];const f=Math.min(Math.floor(window.innerWidth*window.innerHeight/1e4),200);for(let d=0;d<f;d++)e.current.push({x:Math.random()*r.width,y:Math.random()*r.height,z:Math.random()*1e3,size:Math.random()*2.5+.5,color:u(),speed:Math.random()*.5+.2,originX:Math.random()*r.width,originY:Math.random()*r.height,vx:(Math.random()-.5)*.2,vy:(Math.random()-.5)*.2,w:Math.random()*Math.PI*2})},u=()=>{const f=[{r:58,g:124,b:207},{r:45,g:226,b:230},{r:133,g:92,b:255},{r:255,g:255,b:255}],d=f[Math.floor(Math.random()*f.length)];return{r:Math.min(255,d.r+(Math.random()*30-15)),g:Math.min(255,d.g+(Math.random()*30-15)),b:Math.min(255,d.b+(Math.random()*30-15))}},c=()=>{s.clearRect(0,0,r.width,r.height);const f=r.width/2,d=r.height/2,p=Date.now()*1e-4;e.current.forEach(g=>{g.w+=.01;const _=Math.sin(g.w)*.3;if(g.z-=g.speed,g.x+=g.vx+Math.cos(p+g.w)*_,g.y+=g.vy+Math.sin(p+g.w)*_,i.current.x&&i.current.y){const v=i.current.x-g.x,x=i.current.y-g.y,E=Math.sqrt(v*v+x*x);if(E<200){const w=(200-E)/5e3;g.x+=v*w,g.y+=x*w}}(g.z<1||g.x<0||g.x>r.width||g.y<0||g.y>r.height)&&(g.z=1e3,g.x=g.originX,g.y=g.originY,g.vx=(Math.random()-.5)*.2,g.vy=(Math.random()-.5)*.2);const m=g.size*(1e3/g.z)*.8,h=(g.x-f)*(1e3/g.z)+f,y=(g.y-d)*(1e3/g.z)+d;if(h>-m&&h<r.width+m&&y>-m&&y<r.height+m&&m>.2){const v=Math.min(1,Math.max(0,1-g.z/1e3)),x=s.createRadialGradient(h,y,0,h,y,m*2);x.addColorStop(0,`rgba(${g.color.r}, ${g.color.g}, ${g.color.b}, ${v})`),x.addColorStop(1,`rgba(${g.color.r}, ${g.color.g}, ${g.color.b}, 0)`),s.beginPath(),s.arc(h,y,m*1.5,0,Math.PI*2),s.fillStyle=x,s.fill(),s.beginPath(),s.arc(h,y,m*.5,0,Math.PI*2),s.fillStyle=`rgba(${g.color.r}, ${g.color.g}, ${g.color.b}, ${v*1.5})`,s.fill()}}),n.current=requestAnimationFrame(c)};return window.addEventListener("resize",o),r.addEventListener("mousemove",a),o(),c(),()=>{window.removeEventListener("resize",o),r.removeEventListener("mousemove",a),n.current&&cancelAnimationFrame(n.current)}},[]),N.jsx("canvas",{ref:t,className:"absolute top-0 left-0 w-full h-full z-0",style:{opacity:.8}})},zU=({isActive:t})=>{const e=B.useRef(null);return B.useEffect(()=>{const n=e.current;if(!n)return;const i=n.getContext("2d");let r;const s=()=>{n.width=window.innerWidth,n.height=window.innerHeight},o=()=>{i.clearRect(0,0,n.width,n.height);const l=Date.now()*2e-4;a(i,n,l),r=requestAnimationFrame(o)},a=(l,u,c)=>{const f=u.height*.5,d=u.width*.5,p=20,g=12;l.beginPath(),l.strokeStyle="rgba(45, 226, 230, 0.4)",l.lineWidth=2,l.moveTo(0,f),l.lineTo(u.width,f),l.stroke();for(let m=0;m<=g;m++){const h=m/g,y=f+h*h*(u.height-f),v=.1*(1-h),x=Math.sin(c*2+m*.2)*.05,E=Math.max(0,v+x),w=.5+(1-h)*1.5;l.beginPath(),l.lineWidth=w,l.strokeStyle=`rgba(45, 226, 230, ${E})`;for(let M=0;M<u.width;M+=5){const A=Math.sin(M*.01+c*3)*2*(1-h),S=y+A;M===0?l.moveTo(M,S):l.lineTo(M,S)}l.stroke()}for(let m=0;m<=p;m++){const h=m/p*Math.PI-Math.PI/2,y=d+Math.tan(h)*(u.height-f),v=.1,x=Math.sin(c*2+m*.5)*.05,E=Math.max(0,v+x);l.beginPath(),l.lineWidth=.5,l.strokeStyle=`rgba(133, 92, 255, ${E})`,l.moveTo(d,f);const w=d+(y-d)*.2,M=f+(u.height-f)*.3,A=d+(y-d)*.8,S=u.height-(u.height-f)*.3;l.bezierCurveTo(w,M,A,S,y,u.height),l.stroke()}for(let m=0;m<3;m++){const h=(c+m*.33)%1;if(h<1){const y=h*u.height*1.5,v=.15*(1-h),x=l.createRadialGradient(d,f,0,d,f,y);x.addColorStop(0,`rgba(45, 226, 230, ${v*1.5})`),x.addColorStop(.5,`rgba(45, 226, 230, ${v*.5})`),x.addColorStop(1,"rgba(45, 226, 230, 0)"),l.beginPath(),l.fillStyle=x,l.arc(d,f,y,0,Math.PI*2),l.fill()}}const _=l.createRadialGradient(d,f,0,d,f,50);if(_.addColorStop(0,"rgba(255, 255, 255, 0.2)"),_.addColorStop(.5,"rgba(45, 226, 230, 0.1)"),_.addColorStop(1,"rgba(45, 226, 230, 0)"),l.beginPath(),l.fillStyle=_,l.arc(d,f,50,0,Math.PI*2),l.fill(),t){const m=l.createRadialGradient(d,f,0,d,f,30);m.addColorStop(0,"rgba(255, 255, 255, 0.8)"),m.addColorStop(.5,"rgba(45, 226, 230, 0.4)"),m.addColorStop(1,"rgba(45, 226, 230, 0)"),l.beginPath(),l.fillStyle=m,l.arc(d,f,30,0,Math.PI*2),l.fill()}};return window.addEventListener("resize",s),s(),o(),()=>{window.removeEventListener("resize",s),cancelAnimationFrame(r)}},[t]),N.jsx("canvas",{ref:e,className:"absolute top-0 left-0 w-full h-full z-0"})},VU=({intensity:t=1})=>N.jsxs(N.Fragment,{children:[N.jsx("div",{className:"absolute inset-0 pointer-events-none z-50",style:{opacity:.07*t,backgroundImage:`
            linear-gradient(0deg, transparent 0%, transparent 98%, rgba(255, 255, 255, 0.08) 100%),
            linear-gradient(90deg, transparent 0%, rgba(45, 226, 230, 0.03) 50%, transparent 100%)
          `,backgroundSize:"100% 3px, 300px 100%",mixBlendMode:"overlay"}}),N.jsx("div",{className:"absolute inset-0 pointer-events-none z-40",style:{opacity:.025*t,backgroundImage:'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAABHpJREFUaEPtWt1vFEUYf2Z29tO0xZIPDaREgqaRhBTfVKIhQeo/gA/cuHtwY2KMiS8++OCDD/4BxkQTEy+AJiQmJngFJkKojQqRaCxpi7FN2e5+zDi/2d3Z3dnu9Wtbkrakk3R7M/ObZ37z+X4zkMH8wGDGQQXIbYa0EpFKRL4DQCwhv/EXAKhGvbvzfCK+QeQ7Tpv+T0RQgVQh8kQqQVcmYrMZIGFPVQBs8rUjYitRbIXWL2vr2Zj1+xpA7PMGWv9fQhRjY2Pr2Wz2wOrq6mMkbR8CJkH1FUTciwh5AJoBIER0QJvaPjChQuQhM4wfmBxfq9FoROVyeWZiYmJuenr6ZwDwbHkKRMhXkwCwn5/FYjE3PDzcdvDgwT0vDBR6OmLxS7FrwbCgJEClvq1ydSFQBhM1Gg11cnLy6pkzZ65eu3btOisNYwsxASxB8vl8ZmRkpO3QoUN7Dhzo7e7pyDIgbPh84/+nEUlKXH9S/Wt2df7s2bO/HDt2jJXFVRYbCPsZgYBCodD+5JNHHntl397uUkc2ypbrhQJEygKkbK5QF8N3Oaa1VtVqtXbq1Kmps2fPfgUAjpPpSgRtQADg4eHhweeHh/d1d7RnfBe4XchzLPu/FAlKWXBGoBIRedu5+/dXjx8/fvnatWvfAoA2hZ0tJUsqBfOPvVYrFot9e/fufeaZ/v5SIecJvusrJaQmVfCcJXJlRVS/BYIc3biwuHj73Llzf46Pj09CgJ9kJWkAYQfG2SKXy2WHhoZKQ0ND/d1dXYWM53mOL8iVWgjP10pLKR1p+EQ+B3epXlu8fv36zYmJid9nZmYuWioSW9cSY2O9BbHYRvgAwNPT03NodHS0t9TZmc9JIQkIuCQMAJRUvue6vlTaJWUOFW0srKws37x5c3Z8fJyBMBjNKikFCOuJeQZZFtpJNmVViiQ8DMoGhRkMBZOdbrfbK5bl+HxUu7+ysrKwuLh47dKlS9OXL1/+AQCs1O2E1CYf07pJ/WBs9wAMxbYpMBNhHfIBgH2XlHyv4Tha+lpLBwTnS1+SJNL1tJPrIU9rndVaa9b9+fl5BeHEyWqy41Jk+8wQi+0WERiSXAogOm4BjmcJ9V3p2Y9K4qbABnkQ2Bf+oABDFz0iUkSk+OkTkdJEipUnpKe11Fzccffqr7OLdHfj1q2FmzdufHX+/PlvAEDZcXTDapUExE5ujn06+C0MhqlN/H9scxfhJBwuFYk9WkjXRaQgCbmqkDISIgIPRCgkShJRJCOlHOU6BKWbRdbVfxcWHsxfvfrdxMTEZ0tLSwxGJxW5xKEmgNiJnrSSJbl2g4C97v+f9bw1eNbKZDLEZ5fwvCAipRBCuIIIiWQmNEGE9Knue1pLUoKkICDPJbq7srJaqVR+O3HixOcA8FtCkjfdI5JaabuHNJFoEktKY4BoaGhoYHR09NH29nZHKaUgaC/Rbre7cPv27b9Pnjz5KQAsJgS4VMm/LZ6/AbvXPibzn0+gAAAAAElFTkSuQmCC")',backgroundRepeat:"repeat",mixBlendMode:"overlay"}}),N.jsx("div",{className:"absolute inset-0 pointer-events-none z-40",style:{opacity:.8*t,background:`
            radial-gradient(circle at center, 
              transparent 30%, 
              rgba(5, 10, 20, 0.4) 70%, 
              rgba(5, 10, 20, 0.8) 100%
            )
          `}}),N.jsx("div",{className:"absolute inset-0 pointer-events-none z-40",style:{opacity:.05*t,boxShadow:`
            inset 0 0 100px rgba(45, 226, 230, 0.3),
            inset 0 0 100px rgba(133, 92, 255, 0.3)
          `,mixBlendMode:"screen"}})]}),HU=({isActive:t})=>{const e=B.useRef(null);return B.useEffect(()=>{const n=e.current;if(!n)return;const i=n.getContext("2d");let r;const s=()=>{n.width=window.innerWidth,n.height=window.innerHeight},o=()=>{i.clearRect(0,0,n.width,n.height),t&&a(i,n),r=requestAnimationFrame(o)},a=(l,u)=>{if(Math.random()<.05){const c=Math.random()*100+50,f=Math.random()*20+5,d=Math.random()*u.width,p=Math.random()*u.height;l.fillStyle=`rgba(45, 226, 230, ${Math.random()*.2+.1})`,l.fillRect(d,p,c,f)}if(Math.random()<.02){const c=Math.random()*3+1,f=Math.random()*u.height;l.fillStyle=`rgba(255, 255, 255, ${Math.random()*.3+.1})`,l.fillRect(0,f,u.width,c)}if(Math.random()<.01){const c=Math.random()*100+30,f=Math.random()*u.width,d=Math.random()*u.height;for(let p=0;p<c;p+=2)for(let g=0;g<c;g+=2)Math.random()<.5&&(l.fillStyle=`rgba(133, 92, 255, ${Math.random()*.2+.1})`,l.fillRect(f+p,d+g,2,2))}};return window.addEventListener("resize",s),s(),o(),()=>{window.removeEventListener("resize",s),cancelAnimationFrame(r)}},[t]),N.jsx("canvas",{ref:e,className:"absolute top-0 left-0 w-full h-full z-40 pointer-events-none",style:{opacity:t?1:0,transition:"opacity 0.5s"}})},GU=()=>{var E;const[t,e]=B.useState(!1),[n,i]=B.useState(null),[r,s]=B.useState(0),[o,a]=B.useState({}),[l,u]=B.useState({}),[c,f]=B.useState({x:0,y:0}),[d,p]=B.useState(!1),g=B.useRef(null),_={blue:{r:58,g:124,b:207},cyan:{r:45,g:226,b:230},purple:{r:133,g:92,b:255},white:{r:255,g:255,b:255}},m=[{id:"init",x:20,y:35,size:40,color:_.cyan,label:"QUANTUM INITIALIZATION",nodeType:"quantum"},{id:"analyze",x:40,y:25,size:45,color:_.purple,label:"NEURAL ANALYSIS",nodeType:"neural"},{id:"process",x:60,y:35,size:42,color:_.blue,label:"HYPER PROCESSING",nodeType:"processing"},{id:"optimize",x:80,y:25,size:38,color:_.cyan,label:"QUANTUM OPTIMIZATION",nodeType:"quantum"},{id:"deploy",x:50,y:60,size:50,color:_.purple,label:"EXECUTE PROTOCOL",nodeType:"neural"}],h=[{from:"init",to:"analyze",color:_.cyan,thickness:2},{from:"analyze",to:"process",color:_.purple,thickness:2},{from:"process",to:"optimize",color:_.blue,thickness:2},{from:"optimize",to:"deploy",color:_.cyan,thickness:2},{from:"init",to:"deploy",color:_.white,thickness:1}],y={init:{title:"Quantum Initialization Protocol",x:20,y:72,width:350,height:180,color:_.cyan,content:["> Initializing quantum execution framework...","Loading system kernels: NEXOR_QuantumCore v7.3.1","Allocating quantum memory buffers: 1024 qubits","Establishing neural pathways: OK","Initializing quantum entanglement modules","Calibrating dimensional stabilizers: ACTIVE","Syncing to quantum timestream: COMPLETE","Quantum coherence: 99.97%","SUCCESS: Quantum initialization complete."]},analyze:{title:"Neural Analysis Engine",x:40,y:72,width:350,height:180,color:_.purple,content:["> Running 12-dimensional probabilistic analysis...","Parsing quantum data streams at 1.8 YB/s","Deploying deep cognition algorithms...","Neural pattern recognition: ACTIVE","Quantum interference detection: ENABLED","Analyzing multidimensional matrices...","Processing probability cascades...","Optimizing solution pathways...","SUCCESS: Analysis complete with 99.92% confidence."]},process:{title:"Hyper Processing Matrix",x:60,y:72,width:350,height:180,color:_.blue,content:["> Initializing hyper-threading processing matrix...","Allocating dimensional processing units: 8192","Deploying quantum acceleration algorithms","Optimizing tensor flow networks: ACTIVE","Establishing quantum coherence bridges","Processing non-linear computation matrices","Calculating subspace optimization parameters","Synchronizing parallel execution threads","SUCCESS: Hyper processing complete."]},optimize:{title:"Quantum Optimization Engine",x:80,y:72,width:350,height:180,color:_.cyan,content:["> Initiating quantum optimization protocols...","Establishing quantum coherence fields","Analyzing probability collapse vectors","Optimizing energy pathways: ACTIVE","Calculating quantum efficiency matrices","Resolving quantum state superpositions","Finalizing dimensional stability parameters","Verifying computational integrity: 100%","SUCCESS: Quantum optimization complete."]},deploy:{title:"Execution Protocol",x:50,y:80,width:400,height:200,color:_.purple,content:["> Initiating final execution sequence...","Verifying system integrity: PASSED","Deploying execution resources: ALLOCATED","Establishing quantum execution pathways","Enabling neural network verification","Syncing execution parameters across dimensions","Deploying quantum integrity shields","Calculating final execution vectors","EXECUTING FINAL SEQUENCE...","[█████████████████████] 100%","SUCCESS: Execution complete. Protocol deployed."]}};B.useEffect(()=>{if(!t){setTimeout(()=>{e(!0),setTimeout(()=>{v("init")},1500)},800);const w={};m.forEach(M=>{w[M.id]=0}),a(w)}},[t]),B.useEffect(()=>{if(!n)return;(async()=>{const M=m.findIndex(U=>U.id===n);u(U=>({...U,[n]:{...y[n],isExecuting:!0,isComplete:!1,progress:0}}));let A=0;const S=.005+Math.random()*.005,C=setInterval(()=>{A+=S,a(U=>({...U,[n]:Math.min(A,1)})),u(U=>({...U,[n]:{...U[n],progress:Math.min(A,1)}})),A>=1&&(clearInterval(C),u(U=>({...U,[n]:{...U[n],isExecuting:!1,isComplete:!0}})),s(U=>U+1),setTimeout(()=>{if(M<m.length-1){const U=m[M+1].id;v(U)}else n!=="deploy"?v("deploy"):(i(null),p(!0))},1e3))},30)})()},[n]);const v=w=>{i(w)},x=w=>{if(!g.current)return;const M=g.current.getBoundingClientRect();f({x:(w.clientX-M.left)/M.width*100,y:(w.clientY-M.top)/M.height*100})};return N.jsxs("div",{ref:g,className:"relative w-full h-screen overflow-hidden bg-[#030810]",onMouseMove:x,children:[N.jsx(zU,{isActive:d}),N.jsx(BU,{}),N.jsxs("div",{className:"absolute inset-0 z-20",children:[m.map(w=>N.jsx(FU,{id:w.id,x:w.x,y:w.y,size:w.size,color:w.color,label:w.label,nodeType:w.nodeType,progress:o[w.id]||0,completed:o[w.id]>=1,isActive:n===w.id,onClick:()=>v(w.id)},w.id)),h.map((w,M)=>{const A=m.find(I=>I.id===w.from),S=m.find(I=>I.id===w.to),C=m.findIndex(I=>I.id===w.from),U=m.findIndex(I=>I.id===w.to),L=r>=C;let Q=0;return r>U?Q=1:r===C&&(Q=o[w.from]||0),N.jsx(OU,{startX:A.x,startY:A.y,endX:S.x,endY:S.y,progress:L?Q:0,color:w.color,thickness:w.thickness,animated:L,delay:M*.3,isActive:L&&Q>=1,particleSpeed:3+Math.random()*2,particleCount:2},`${w.from}-${w.to}`)}),Object.entries(l).map(([w,M])=>N.jsx(kU,{x:M.x,y:M.y,width:M.width,height:M.height,title:M.title,color:M.color,content:M.content,isExecuting:M.isExecuting,isComplete:M.isComplete,progress:M.progress,delay:.3},w))]}),N.jsx("div",{className:"relative z-30 h-full flex flex-col items-center justify-center pointer-events-none",children:N.jsxs("div",{className:"mb-24",children:[N.jsxs(We.div,{className:"relative text-center",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:1,delay:.5},children:[N.jsx(We.div,{className:"absolute top-0 left-0 w-full h-full filter blur-md",animate:{opacity:[.2,.5,.2]},transition:{duration:4,repeat:1/0,ease:"easeInOut"},style:{background:"radial-gradient(ellipse at center, rgba(45, 226, 230, 0.3) 0%, rgba(45, 226, 230, 0) 70%)",transform:"translateZ(0)"}}),N.jsxs(We.h1,{className:"text-6xl md:text-8xl font-extralight tracking-widest text-white relative",animate:t?{textShadow:["0 0 10px rgba(45, 226, 230, 0.3)","0 0 20px rgba(45, 226, 230, 0.5)","0 0 10px rgba(45, 226, 230, 0.3)"]}:{},transition:{duration:4,repeat:1/0,ease:"easeInOut"},children:["WE EXECUTE",N.jsx(We.div,{className:"absolute -bottom-4 left-1/2 h-[2px]",style:{width:"0%",background:"linear-gradient(90deg, rgba(45, 226, 230, 0), rgba(45, 226, 230, 1), rgba(45, 226, 230, 0))",transform:"translateX(-50%)",boxShadow:"0 0 10px rgba(45, 226, 230, 0.5)"},animate:{width:t?"80%":"0%"},transition:{duration:1.5,delay:1.2}})]})]}),N.jsx("div",{className:"mt-10 flex justify-center space-x-3",children:m.map((w,M)=>N.jsx(We.div,{className:"progress-indicator",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.3,delay:1+M*.1},children:N.jsx("div",{className:"h-1 w-10 md:w-14 rounded-full overflow-hidden",style:{background:`rgba(${w.color.r}, ${w.color.g}, ${w.color.b}, 0.15)`,boxShadow:`0 0 5px rgba(${w.color.r}, ${w.color.g}, ${w.color.b}, 0.2)`},children:N.jsx(We.div,{className:"h-full rounded-full relative",style:{width:`${o[w.id]*100}%`,background:`rgba(${w.color.r}, ${w.color.g}, ${w.color.b}, 0.8)`,boxShadow:o[w.id]>0?`0 0 5px rgba(${w.color.r}, ${w.color.g}, ${w.color.b}, 0.8)`:"none"},transition:{duration:.3},children:o[w.id]>0&&o[w.id]<1&&N.jsx(We.div,{className:"absolute right-0 top-0 h-full w-1",style:{background:`rgba(${w.color.r}, ${w.color.g}, ${w.color.b}, 1)`},animate:{opacity:[1,.3,1]},transition:{duration:.8,repeat:1/0,ease:"easeInOut"}})})})},w.id))})]})}),N.jsxs("div",{className:"absolute top-4 left-4 flex items-center z-50",style:{opacity:t?1:0,transition:"opacity 0.5s"},children:[N.jsx(We.div,{className:"w-2 h-2 rounded-full bg-cyan-400 mr-2",animate:{opacity:[.4,1,.4]},transition:{duration:2,repeat:1/0}}),N.jsxs("div",{className:"flex flex-col",children:[N.jsx("span",{className:"text-xs font-mono text-cyan-400 uppercase tracking-wider",children:n?`EXECUTING: ${(E=m.find(w=>w.id===n))==null?void 0:E.label}`:d?"EXECUTION COMPLETE":"SYSTEM READY"}),N.jsxs("div",{className:"text-[9px] font-mono text-gray-500 tracking-wider mt-0.5",children:["NEXOR QUANTUM CORE v3.7.22 | ",Math.floor(Math.random()*900+8e3)," QUBITS | INTEGRITY: 100%"]})]})]}),d&&N.jsxs(We.div,{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50",initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[Array.from({length:3}).map((w,M)=>N.jsx(We.div,{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full",style:{border:"1px solid rgba(45, 226, 230, 0.5)",boxShadow:"0 0 20px rgba(45, 226, 230, 0.3)"},animate:{width:["100px","500px"],height:["100px","500px"],opacity:[.8,0],borderColor:["rgba(45, 226, 230, 0.5)","rgba(45, 226, 230, 0.1)"]},transition:{duration:4,repeat:1/0,delay:M*1.3,ease:"easeOut"}},`pulse-${M}`)),N.jsxs(We.div,{className:"relative w-20 h-20 flex items-center justify-center rounded-full",style:{background:"radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(45, 226, 230, 0.1) 70%)",border:"2px solid rgba(45, 226, 230, 0.5)",boxShadow:"0 0 30px rgba(45, 226, 230, 0.5)"},animate:{scale:[1,1.1,1],boxShadow:["0 0 30px rgba(45, 226, 230, 0.5)","0 0 50px rgba(45, 226, 230, 0.7)","0 0 30px rgba(45, 226, 230, 0.5)"]},transition:{duration:3,repeat:1/0,repeatType:"mirror"},children:[N.jsx(We.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10,stiffness:100,delay:.5},children:N.jsx("svg",{width:"30",height:"30",viewBox:"0 0 24 24",fill:"none",className:"text-cyan-400",children:N.jsx("polyline",{points:"20 6 9 17 4 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),N.jsx(We.div,{className:"absolute w-full h-full rounded-full",style:{border:"1px dashed rgba(45, 226, 230, 0.3)"},animate:{rotate:360},transition:{duration:20,repeat:1/0,ease:"linear"}}),N.jsx(We.div,{className:"absolute w-[150%] h-[150%] rounded-full",style:{background:"radial-gradient(circle, rgba(45, 226, 230, 0.1) 0%, rgba(45, 226, 230, 0) 70%)"},animate:{opacity:[.3,.7,.3]},transition:{duration:3,repeat:1/0,ease:"easeInOut"}})]}),N.jsxs(We.div,{className:"absolute -bottom-12 left-1/2 -translate-x-1/2 text-center",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.8},children:[N.jsx("div",{className:"text-cyan-400 font-mono text-sm tracking-wider",children:"EXECUTION COMPLETE"}),N.jsx("div",{className:"text-gray-400 font-mono text-xs mt-1",children:"Protocol deployed successfully"})]})]}),N.jsx("div",{className:"absolute bottom-4 right-4 text-[10px] text-[#ffffff30] font-mono z-50",children:"Powered by NEXOR"}),N.jsx(HU,{isActive:n==="deploy"||d}),N.jsx(VU,{intensity:1.2})]})};function WU(){return N.jsxs("div",{className:"relative min-h-screen font-sans overflow-hidden",children:[N.jsx(YA,{}),N.jsx("section",{className:"TranscendentFusion-Section",children:N.jsx(T3,{})}),N.jsx("section",{className:"Section-2",children:N.jsx(E3,{})}),N.jsx("section",{className:"Section-3",children:N.jsx(w3,{})}),N.jsx("section",{className:"Execution-Section",children:N.jsx(GU,{})}),N.jsx("section",{className:"Packages-Section"}),N.jsx("div",{className:"fixed bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00E4FF]/30 to-transparent z-20"}),N.jsx("div",{className:"fixed top-0 right-0 w-28 h-28 md:w-44 md:h-44 rounded-full bg-[#00E4FF]/5 blur-3xl z-10"}),N.jsx("div",{className:"fixed top-2/3 left-1/3 w-20 h-20 rounded-full bg-[#E18CB5]/10 blur-2xl z-10"})]})}pS(document.getElementById("root")).render(N.jsx(B.StrictMode,{children:N.jsx(WU,{})}));
