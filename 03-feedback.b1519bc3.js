function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return l.Date.now()};function v(e,t,n){var r,o,i,a,f,u,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,f=setTimeout(h,t),l?b(e):a}function O(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function h(){var e=g();if(O(e))return j(e);f=setTimeout(h,function(e){var n=t-(e-u);return s?m(n,i-(e-c)):n}(e))}function j(e){return f=void 0,v&&r?b(e):(r=o=void 0,a)}function T(){var e=g(),n=O(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return S(u);if(s)return f=setTimeout(h,t),b(u)}return void 0===f&&(f=setTimeout(h,t)),a}return t=y(t)||0,p(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=o=f=void 0},T.flush=function(){return void 0===f?a:j(g())},T}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};const b=document.querySelector(".feedback-form"),S=document.querySelector(".feedback-form input"),O=document.querySelector(".feedback-form textarea");b.addEventListener("submit",(function(e){e.preventDefault();try{const t=JSON.parse(localStorage.getItem("feedback-form-state")),n=Object.keys(t),r=Object.values(t);for(let e of r)if(""===e)return alert("Fields are empty");if(2!==n.length)return alert("Fields are empty");console.log(t),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),h={}}catch(e){return alert("Fields are empty")}})),b.addEventListener("input",e(t)((function(e){h[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(h))}),500));let h=JSON.parse(localStorage.getItem("feedback-form-state"))||{};!function(){const e=localStorage.getItem("feedback-form-state");if(e)try{const t=JSON.parse(e);void 0===t.email?S.value="":S.value=t.email,void 0===t.message?O.value="":O.value=t.message}catch(e){console.log(e.name),console.log(e.message)}}();
//# sourceMappingURL=03-feedback.b1519bc3.js.map
