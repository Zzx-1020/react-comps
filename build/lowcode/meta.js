!function e(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.ZhangzhexinCompsMeta=r():t.ZhangzhexinCompsMeta=r()}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function t(){return e.default}:function t(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return(t=u(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){var t=a(e,"string");return"symbol"===n(t)?t:String(t)}function a(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}r.r(t),r.d(t,"components",(function(){return M})),r.d(t,"componentList",(function(){return T}));var p,l=[{title:"GeneralImg",screenshot:"",schema:{componentName:"GeneralImg",props:{}}}],f=i(i({},{componentName:"GeneralImg",title:"GeneralImg",docUrl:"",screenshot:"",devMode:"proCode",npm:{package:"zhangzhexin-comps",version:"0.1.1",exportName:"GeneralImg",main:"src/index.tsx",destructuring:!0,subName:""},configure:{props:[{title:{label:{type:"i18n","en-US":"src","zh-CN":"src"}},name:"src",setter:{componentName:"StringSetter",isRequired:!1,initialValue:""}}],supports:{style:!0},component:{}},group:"\u4e1a\u52a1\u7ec4\u4ef6",category:"\u901a\u7528"}),{},{snippets:l});function m(e,t){return b(e)||y(e,t)||v(e,t)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function y(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,c,u=[],a=!0,p=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(u.push(n.value),u.length!==t);a=!0);}catch(e){p=!0,o=e}finally{try{if(!a&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(p)throw o}}return u}}function b(e){if(Array.isArray(e))return e}function d(e){return O(e)||h(e)||v(e)||g()}function g(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function v(e,t){if(e){if("string"==typeof e)return j(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?j(e,t):void 0}}function h(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function O(e){if(Array.isArray(e))return j(e)}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){P(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e,t,r){return(t=x(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function x(e){var t=N(e,"string");return"symbol"===A(t)?t:String(t)}function N(e,t){if("object"!==A(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==A(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var E={};function I(e){var t=[{title:"\u5e38\u7528",icon:"",children:[]},{title:"\u5bb9\u5668",icon:"",children:[]},{title:"\u5bfc\u822a",icon:"",children:[]},{title:"\u5185\u5bb9",icon:"",children:[]},{title:"Feedback \u53cd\u9988",icon:"",children:[]}],r={"\u539f\u5b50\u7ec4\u4ef6":!0},n={};return e.forEach((function(e){var o=e.category||"\u5176\u4ed6";e.group&&!n[e.componentName]&&(n[e.componentName]=e.group),e.group&&!r[e.group]&&(r[e.group]=!0);var i=t.find((function(e){return e.title===o}));i||(i={title:o,icon:"",children:[]},t.push(i)),e.snippets&&e.snippets.length&&i.children.push({componentName:e.componentName,title:e.title||e.componentName,sort:{category:i.title,group:n[e.componentName]||"\u539f\u5b50\u7ec4\u4ef6",priority:E[i.title]||0},icon:"",package:e.npm.pkg,snippets:e.snippets||[]})})),t}function k(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"zhangzhexin-comps",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0.1.2",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"@alifd/next":"1.25.23","@alifd/meet":"2.6.3",antd:"4.17.3"};if(!e||!r)return e;var o=e.npm;return o?("object"===A(n)&&n[o.package]?e.npm=w(w({},o),{},{version:n[o.package]}):o.package===t&&(e.npm=w(w({},o),{},{version:r})),e):e}["\u57fa\u7840\u5143\u7d20","\u5e03\u5c40\u5bb9\u5668\u7c7b","\u8868\u683c\u7c7b","\u8868\u5355\u8be6\u60c5\u7c7b","\u5e2e\u52a9\u7c7b","\u5bf9\u8bdd\u6846\u7c7b","\u4e1a\u52a1\u7c7b","\u901a\u7528","\u5f15\u5bfc","\u4fe1\u606f\u8f93\u5165","\u4fe1\u606f\u5c55\u793a","\u4fe1\u606f\u53cd\u9988"].reverse().forEach((function(e,t){E[e]=++t}));var D,M=[],z={};[f].forEach((function(e){if(Array.isArray(e))M.push.apply(M,d(e.map((function(e){if(!e.npm){var t=e.componentName,r=t.split("."),n=m(r,2),o=n[0],i=n[1];e.npm={exportName:o,main:"",destructuring:!0,subName:r.length>1?t.slice(t.indexOf(".")+1):i}}return e.npm=w(w({},z),e.npm||{}),k(e)}))));else if(e.components)M.push.apply(M,d(e.components.map((function(e){if(!e.npm){var t=e.componentName,r=t.split("."),n=m(r,2),o=n[0],i=n[1];e.npm={exportName:o,main:"",destructuring:!0,subName:r.length>1?t.slice(t.indexOf(".")+1):i}}return e.npm=w(w({},z),e.npm||{}),k(e)}))));else{if(!e.npm){var t=e.componentName,r=t.split("."),n=m(r,2),o=n[0],i=n[1];e.npm={exportName:o,main:"",destructuring:!0,subName:r.length>1?t.slice(t.indexOf(".")+1):i}}e.npm=w(w({},z),e.npm||{}),M.push(k(e))}}));var T=I(M),_=!0}])}));