(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(81),r=n.n(a),o=n(645),i=n.n(o)()(r());i.push([e.id,"body {\n\tcolor: white;\n}\n\n#content {\n\theight: 100vh;\n\twidth: 100vw;\n\tdisplay: grid;\n\tgrid-template-rows: minmax(70px, 8vh) 92vh;\n\tgrid-template-columns: minmax(140px, 15vw) 85vw;\n}\n\n.header {\n\tgrid-area: 1 / 1 / 2 / 3;\n\tbackground-color: darkblue;\n}\n\n.sidebar {\n\tgrid-area: 2 / 1 / 3 / 2;\n\tbackground-color: darkslategrey;\n\tpadding: 2%;\n\n\tdisplay: grid;\n\tgrid-template-rows: minmax(170px, 18%) 1fr;\n}\n\n.sidebar-top {\n\tborder-bottom: 5px solid black;\n\n\tdisplay: grid;\n /* gap: 1rem; */\n}\n\n.projects-list {\n\tpadding-top: 5%;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n}\n\n.modal-launch {\n\twidth: 100%;\n}\n\n.modal {\n\t--bs-modal-color: black;\n}\n\n.modal-body {\n\tdisplay: grid;\n\tgrid-template-rows: auto;\n}\n\n.main-task {\n\tgrid-area: 2 / 2 / 3 / 3;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 5%;\n\tbackground-color: darkgray;\n\tpadding: 1% 5%;\n}\n\n.main-task-header {\n\tdisplay: grid;\n\tgrid-template-columns: 50% 50%;\n\n\tpadding-bottom: 3%;\n\tborder-bottom: 5px solid black;\n}\n\n.main-task-list {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 5%;\n}\n\n.task {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.accordion-item {\n\twidth: 100% !important;\n\tmax-width: 100% !important;\n}\n\n.accordion-body p {\n\tword-wrap: break-word;\n}\n\n.task-trash:hover,\n.task-edit:hover {\n\tcursor: pointer;\n\ttransition: 0.5s;\n\ttransform: scale(1.1);\n}\n\n.task-trash:active,\n.task-edit:active {\n\ttransition: 0.5s;\n\ttransform: scale(0.9);\n}\n",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);a&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var o={},i=[],s=0;s<e.length;s++){var l=e[s],c=a.base?l[0]+a.base:l[0],d=o[c]||0,u="".concat(c," ").concat(d);o[c]=d+1;var p=n(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var v=r(m,a);a.byIndex=s,t.splice(s,0,{identifier:u,updater:v,references:1})}i.push(u)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=n(o[i]);t[s].references--}for(var l=a(e,r),c=0;c<o.length;c++){var d=n(o[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=l}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,r&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={id:a,exports:{}};return e[a](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var a={};(()=>{n.d(a,{k:()=>U,d:()=>G});var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),s=n.n(i),l=n(565),c=n.n(l),d=n(216),u=n.n(d),p=n(589),m=n.n(p),v=n(426),f={};f.styleTagTransform=m(),f.setAttributes=c(),f.insert=s().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=u(),t()(v.Z,f),v.Z&&v.Z.locals&&v.Z.locals;const h=e=>{const t=document.createElement("div");return t.classList.add("sidebarNav",`${e}-nav`),t.innerHTML=`\n    <h3>${e}</h3>\n    `,t},b=()=>{const e=document.createElement("div");return e.classList.add("projects-list"),e.innerHTML='\n    <div class="list">\n        <h1>Lists</h1>\n        <ul class="projects-lists">\n            <li class="project-list-item">General</li>\n        </ul>\n    </div>\n\n    <div class="input-group mb-3">\n        <input type="text" class="form-control projects-input" placeholder="New List" aria-label="Name" maxlength="12" required>\n        <button class="btn btn-outline-secondary add-list" type="button" id="button-addon2">+</button>\n    </div>\n    ',e.appendChild((()=>{const e=document.createElement("div");return e.innerHTML='\n    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">\n      <div class="modal-dialog">\n        <div class="modal-content">\n          <div class="modal-header">\n            <h1 class="modal-title fs-5" id="exampleModalLabel">Add Task</h1>\n            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n          </div>\n          <div class="modal-body">\n\n            <div class="input-group mb-3">\n                <span class="input-group-text" id="basic-addon1">Name</span>\n                <input type="text" class="form-control task-input" aria-label="Name" aria-describedby="basic-addon1" maxlength="30">\n            </div>\n                \n            <div class="input-group">\n                <span class="input-group-text">Description</span>\n                <textarea class="form-control task-input" aria-label="Description"></textarea>\n            </div>\n\n            <div class="input-group mb-3" style="margin-top: 15px;">\n                <span class="input-group-text" id="basic-addon1">Due Date</span>\n                <input type="date" class="form-control task-input" aria-label="Date" aria-describedby="basic-addon1">\n            </div>\n\n            <div class="input-group mb-3">\n            <label class="input-group-text" for="inputGroupSelect01">Priority</label>\n            <select class="form-select" id="inputGroupSelect01">\n                <option selected value="low">Low</option>\n                <option value="medium">Medium</option>\n                <option value="high">High</option>\n            </select>\n            </div>\n\n            <div class="input-group mb-3">\n            <label class="input-group-text" for="choose-project">List</label>\n            <select class="form-select" id="choose-project">\n                <option selected value="General">General</option>\n            </select>\n            </div>\n\n          </div>\n          <div class="modal-footer">\n            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>\n            <button type="button" class="btn btn-primary confirm-add-task" data-bs-dismiss="modal">Save Task</button>\n          </div>\n        </div>\n      </div>\n    </div>\n    ',e})()),e};function g(){G.forEach((e=>{JSON.stringify(e)})),localStorage.setItem("tasks",JSON.stringify(G))}function y(){U.forEach((e=>{JSON.stringify(e)})),localStorage.setItem("projects",JSON.stringify(U))}function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function k(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function S(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}var x={};function L(){return x}function E(e,t){var n,a,r,o,i,s,l,c;k(1,arguments);var d=L(),u=S(null!==(n=null!==(a=null!==(r=null!==(o=null==t?void 0:t.weekStartsOn)&&void 0!==o?o:null==t||null===(i=t.locale)||void 0===i||null===(s=i.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==r?r:d.weekStartsOn)&&void 0!==a?a:null===(l=d.locale)||void 0===l||null===(c=l.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==n?n:0);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=function(e){k(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===w(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}(e),m=p.getDay(),v=(m<u?7:0)+m-u;return p.setDate(p.getDate()-v),p.setHours(0,0,0,0),p}Math.pow(10,8);var N=36e5;var T={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},D=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,M=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,A=/^([+-])(\d{2})(?::?(\d{2}))?$/;function j(e){return e?parseInt(e):1}function C(e){return e&&parseFloat(e.replace(",","."))||0}var $=[31,null,31,30,31,30,31,31,30,31,30,31];function H(e){return e%400==0||e%4==0&&e%100!=0}const q=e=>{let t,n=document.querySelector(".main-task-list"),a=document.querySelector(".header-text");n.innerHTML="",a.innerHTML="All",e.forEach((e=>{switch(e.prio){case"low":t="green";break;case"medium":t="yellow";break;case"high":t="red"}n.appendChild(function(e,t,n,a,r,o,i){document.querySelector(".main-task-list");let s=document.createElement("div");return s.classList.add("accordion","task"),s.setAttribute("id",`${o}`),s.style=`--bs-accordion-border-color: ${i};`,s.innerHTML=`\n        <div class="accordion-item">\n            <h2 class="accordion-header">\n                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-${o}" aria-expanded="true" aria-controls="collapseOne">\n                    \n                    <h4>${e}</h4>\n                    <h4>${n}</h4>\n\n                    <div class="task-buttons">\n                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-pencil-square task-edit" data-bs-toggle="modal" data-bs-target="#exampleModal" name="${e}" desc="${t}" date="${n}" prio="${a}" project="${r}" id=${o} viewBox="0 0 16 16">\n                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>\n                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>\n                        </svg>\n                    \n                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" class="bi bi-trash3 task-trash" id=${o} viewBox="0 0 16 16">\n                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>\n                        </svg>\n                    </div>\n\n                </button>\n            </h2>\n\n            <div id="accordion-${o}" class="accordion-collapse collapse" data-bs-parent="accordion-${o}">\n                <div class="accordion-body">\n                    <h4>List: ${r}</h4> \n                    <p>${t}</p>\n                </div>\n            </div>\n        </div>\n    `,s}(e.name,e.desc,e.date,e.prio,e.project,e.id,t))})),(()=>{function e(e){G.forEach((t=>{t.id==e&&(G.splice(G.indexOf(t),1),g(),q(G))}))}document.querySelectorAll(".task-trash").forEach((t=>{t.addEventListener("click",(function(){e(t.getAttribute("id"))}))})),document.querySelectorAll(".task-edit").forEach((t=>{t.addEventListener("click",(function(){let n=document.querySelectorAll(".task-input"),a=document.querySelectorAll(".form-select"),r=document.querySelector(".confirm-add-task");n[0].value=t.getAttribute("name"),n[1].value=t.getAttribute("desc"),n[2].value=t.getAttribute("date"),a[0].value=t.getAttribute("prio"),a[1].value=t.getAttribute("project"),r.addEventListener("click",(function(){e(t.getAttribute("id"))}))}))}))})()},Z=e=>{let t=document.querySelector(".projects-lists");t.innerHTML="",e.forEach((e=>{t.innerHTML+="General"===e?`\n            <li class="project-list-item">\n                ${e}\n                <button class="sort-by-project" id="${e}">Sort</button>\n            </li>\n            `:`<li class="project-list-item">\n                ${e}\n                <button class="sort-by-project" id="${e}">Sort</button>\n                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" class="bi bi-trash3 list-trash" id=${e} viewBox="0 0 16 16">\n                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>\n                </svg>\n            </li>`})),O(e),document.querySelectorAll(".list-trash").forEach((e=>{e.addEventListener("click",(function(){var t;t=e.getAttribute("id"),U.forEach((e=>{e===t&&(U.splice(U.indexOf(e),1),G.forEach((e=>{e.project===t&&(e.project="General")})),y(),g(),Z(U),O(U),q(G))}))}))})),(()=>{let e=document.querySelectorAll(".sort-by-project"),t=document.querySelector(".All-nav"),n=document.querySelector(".header-text");!function(){const t=e=>{let t=[];G.forEach((n=>{n.project===e&&t.push(n)})),q(t),n.innerHTML=`${e}`};e.forEach((e=>e.removeEventListener("click",t))),e.forEach((e=>e.addEventListener("click",(()=>t(e.getAttribute("id"))))))}(),function(){const e=()=>{q(G),n.innerHTML="All"};t.removeEventListener("click",e),t.addEventListener("click",e)}()})(),(()=>{let e=document.querySelector(".Today-nav"),t=document.querySelector(".Week-nav"),n=document.querySelector(".header-text");!function(){const t=()=>{let e=new Date,t=[];G.forEach((n=>{n.date.toString().substring(8,10)===e.toString().substring(8,10)&&t.push(n)})),q(t),n.innerHTML="Today"};e.removeEventListener("click",t),e.addEventListener("click",t)}(),function(){const e=()=>{let e=(new Date).getDate(),t=[];console.log(e),G.forEach((n=>{(function(e,t){return k(1,arguments),function(e,t,n){k(2,arguments);var a=E(e,n),r=E(t,n);return a.getTime()===r.getTime()}(e,Date.now(),t)})(function(e,t){var n;k(1,arguments);var a=S(null!==(n=null==t?void 0:t.additionalDigits)&&void 0!==n?n:2);if(2!==a&&1!==a&&0!==a)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var r,o=function(e){var t,n={},a=e.split(T.dateTimeDelimiter);if(a.length>2)return n;if(/:/.test(a[0])?t=a[0]:(n.date=a[0],t=a[1],T.timeZoneDelimiter.test(n.date)&&(n.date=e.split(T.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var r=T.timezone.exec(t);r?(n.time=t.replace(r[1],""),n.timezone=r[1]):n.time=t}return n}(e);if(o.date){var i=function(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),a=e.match(n);if(!a)return{year:NaN,restDateString:""};var r=a[1]?parseInt(a[1]):null,o=a[2]?parseInt(a[2]):null;return{year:null===o?r:100*o,restDateString:e.slice((a[1]||a[2]).length)}}(o.date,a);r=function(e,t){if(null===t)return new Date(NaN);var n=e.match(D);if(!n)return new Date(NaN);var a=!!n[4],r=j(n[1]),o=j(n[2])-1,i=j(n[3]),s=j(n[4]),l=j(n[5])-1;if(a)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,s,l)?function(e,t,n){var a=new Date(0);a.setUTCFullYear(e,0,4);var r=7*(t-1)+n+1-(a.getUTCDay()||7);return a.setUTCDate(a.getUTCDate()+r),a}(t,s,l):new Date(NaN);var c=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=($[t]||(H(e)?29:28))}(t,o,i)&&function(e,t){return t>=1&&t<=(H(e)?366:365)}(t,r)?(c.setUTCFullYear(t,o,Math.max(r,i)),c):new Date(NaN)}(i.restDateString,i.year)}if(!r||isNaN(r.getTime()))return new Date(NaN);var s,l=r.getTime(),c=0;if(o.time&&(c=function(e){var t=e.match(M);if(!t)return NaN;var n=C(t[1]),a=C(t[2]),r=C(t[3]);return function(e,t,n){return 24===e?0===t&&0===n:n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,a,r)?n*N+6e4*a+1e3*r:NaN}(o.time),isNaN(c)))return new Date(NaN);if(!o.timezone){var d=new Date(l+c),u=new Date(0);return u.setFullYear(d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate()),u.setHours(d.getUTCHours(),d.getUTCMinutes(),d.getUTCSeconds(),d.getUTCMilliseconds()),u}return s=function(e){if("Z"===e)return 0;var t=e.match(A);if(!t)return 0;var n="+"===t[1]?-1:1,a=parseInt(t[2]),r=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,r)?n*(a*N+6e4*r):NaN}(o.timezone),isNaN(s)?new Date(NaN):new Date(l+c+s)}(n.date),{weekStartsOn:e})&&(t.push(n),console.log(n.date))})),q(t),n.innerHTML="Week"};t.removeEventListener("click",e),t.addEventListener("click",e)}()})()};function O(e){let t=document.querySelector("#choose-project");t.innerHTML="",e.forEach((e=>{t.innerHTML+="General"==e?`<option selected value="${e}">${e}</option>`:`<option value="${e}">${e}</option>`}))}const I=()=>{function e(e,t,n,a,r,o){this.name=e,this.desc=t,this.date=n,this.prio=a,this.project=r,this.id=o}let t=document.querySelectorAll(".task-input"),n=document.querySelectorAll(".form-select"),a=document.querySelector(".confirm-add-task"),r=0;a.addEventListener("click",(function(){let a=new e(t[0].value,t[1].value,t[2].value,n[0].value,n[1].value,(G.forEach((e=>{r=0,e.id>r&&(r=e.id)})),r+=1,r));G.push(a),q(G),t[0].value="",t[1].value="",t[2].value="",n[0].value="low",n[1].value="General",g()}))};let U=["General"],G=[];(()=>{const e=document.querySelector("#content");e.appendChild((()=>{const e=document.createElement("div");return e.classList.add("header"),e.innerHTML="\n    <h1>To-Do List</h1>\n    ",e})()),e.appendChild((()=>{const e=document.createElement("div");e.classList.add("sidebar");const t=document.createElement("div");return t.classList.add("sidebar-top"),e.appendChild(t),t.appendChild(h("All")),t.appendChild(h("Today")),t.appendChild(h("Week")),e.appendChild(b()),e})()),e.appendChild((()=>{const e=document.createElement("div");e.classList.add("main-task");const t=document.createElement("div");t.classList.add("main-task-header"),t.innerHTML='\n    <h1 class="header-text">All</h1>\n    <button type="button" class="btn btn-primary modal-launch" data-bs-toggle="modal" data-bs-target="#exampleModal">\n        Add a Task\n    </button>\n    ',e.appendChild(t);const n=document.createElement("div");return n.classList.add("main-task-list"),e.appendChild(n),e})()),I(),(()=>{let e,t=document.querySelector(".projects-input");document.querySelector(".add-list").addEventListener("click",(function(){e=!0,""!==t.value&&(U.forEach((n=>{n===t.value&&(e=!1)})),e&&(U.push(t.value),t.value="",Z(U),y()))}))})(),JSON.parse(localStorage.getItem("tasks")).forEach((e=>{G.push(e)})),JSON.parse(localStorage.getItem("projects")).forEach((e=>{"General"!=e&&U.push(e)})),q(G),Z(U)})()})()})();