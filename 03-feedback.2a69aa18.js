!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,y=function(){return s.Date.now()};function p(e,t,n){var r,i,a,u,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function O(e){return c=e,f=setTimeout(j,t),d?p(e):u}function h(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function j(){var e=y();if(h(e))return w(e);f=setTimeout(j,function(e){var n=t-(e-l);return s?g(n,a-(e-c)):n}(e))}function w(e){return f=void 0,v&&r?p(e):(r=i=void 0,u)}function T(){var e=y(),n=h(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return O(l);if(s)return f=setTimeout(j,t),p(l)}return void 0===f&&(f=setTimeout(j,t)),u}return t=S(t)||0,b(n)&&(d=!!n.leading,a=(s="maxWait"in n)?m(S(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},T.flush=function(){return void 0===f?u:w(y())},T}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};var O=document.querySelector(".feedback-form"),h=document.querySelector(".feedback-form input"),j=document.querySelector(".feedback-form textarea");O.addEventListener("submit",(function(e){e.preventDefault();var t=JSON.parse(localStorage.getItem(w)),n=Object.keys(t),r=Object.values(t),o=!0,i=!1,a=void 0;try{for(var u,f=r[Symbol.iterator]();!(o=(u=f.next()).done);o=!0){if(""===u.value)return alert("Fields are empty")}}catch(e){i=!0,a=e}finally{try{o||null==f.return||f.return()}finally{if(i)throw a}}if(2!==n.length)return alert("Fields are empty");console.log(t),e.currentTarget.reset(),localStorage.removeItem(w),T={}})),O.addEventListener("input",e(t)((function(e){T[e.target.name]=e.target.value,localStorage.setItem(w,JSON.stringify(T))}),500));var w="feedback-form-state",T=JSON.parse(localStorage.getItem(w))||{};!function(){var e=localStorage.getItem(w);if(e)try{var t=JSON.parse(e);void 0===t.email?h.value="":h.value=t.email,void 0===t.message?j.value="":j.value=t.message}catch(e){console.log(e.name),console.log(e.message)}}()}();
//# sourceMappingURL=03-feedback.2a69aa18.js.map
