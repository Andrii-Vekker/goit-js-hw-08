function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return l.Date.now()};function p(e,t,n){var o,r,i,a,u,f,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,u=setTimeout(x,t),l?y(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function x(){var e=g();if(j(e))return O(e);u=setTimeout(x,function(e){var n=t-(e-f);return s?d(n,i-(e-c)):n}(e))}function O(e){return u=void 0,p&&o?y(e):(o=r=void 0,a)}function h(){var e=g(),n=j(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return S(f);if(s)return u=setTimeout(x,t),y(f)}return void 0===u&&(u=setTimeout(x,t)),a}return t=b(t)||0,v(n)&&(l=!!n.leading,i=(s="maxWait"in n)?m(b(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),h.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=r=u=void 0},h.flush=function(){return void 0===u?a:O(g())},h}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};const y={form:document.querySelector(".feedback-form"),input:document.querySelector("input"),textarea:document.querySelector("textarea"),button:document.querySelector("button")};y.form.addEventListener("input",e(t)((function(e){S[e.target.name]=e.target.value;const t=JSON.stringify(S);localStorage.setItem("feedback-form-state",t)}),500)),y.form.addEventListener("submit",(function(e){e.preventDefault(),(""===e.target.elements.email.value||""===e.target.elements.message.value)&&alert("Заполните все поля!");localStorage.removeItem("feedback-form-state"),e.target.reset(),console.log(S)}));const S=localStorage.getItem("feedback-form-state")?JSON.parse(localStorage.getItem("feedback-form-state")):{};!function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e),n=e?t:{};n.email&&(y.input.value=n.email),n.message&&(y.textarea.value=n.message)}();
//# sourceMappingURL=03-feedback.a3de6c0d.js.map
