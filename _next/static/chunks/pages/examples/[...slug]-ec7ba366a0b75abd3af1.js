(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[910],{34699:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(82961);function s(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,s=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(c){s=!0,a=c}finally{try{r||null==u.return||u.return()}finally{if(s)throw a}}return t}}(e,n)||(0,r.Z)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},68399:function(e,n,t){"use strict";t.d(n,{V:function(){return c}});var r=t(85893),s=t(34699),a=t(17375),i=t(22152),u=t(4404),c=(t(67294),function(e){e.className;var n=e.releases,t=void 0===n?[]:n,c=e.namespace,f=void 0===c?"guides":c,d=(0,a.Z)(e,["className","releases","namespace"]),m=(0,u.MR)(t,"date","desc"),p=(0,s.Z)(m,1)[0];return(0,r.jsxs)("div",{className:"space-y-5",children:[p&&(0,r.jsxs)("a",{className:"underline text-xl text-gray-800",href:"#",children:["News: ",p.title]}),d.sections.map((function(e){return(0,r.jsx)(i.Menu,{title:e.name,children:e.guides.sort(l).map((function(e,n){return(0,r.jsxs)("div",{className:"flex text-gray-500",children:[(0,r.jsxs)("span",{className:"w-2.5",children:[n+1,"."]}),(0,r.jsx)("li",{className:"ml-2",children:(0,r.jsx)(i.NavLink,{href:o(f,e),reverse:!0,children:e.title})})]},e.slug)}))},e.name)}))]})}),o=function(e,n){return"/".concat(e,"/").concat(n.slug)},l=function(e,n){return e.number>n.number?1:0};t(54319),t(94184)},62393:function(e,n,t){"use strict";t.d(n,{VO:function(){return r.V}});var r=t(68399);t(85893),t(41664),t(67294),t(4404)},53293:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return u}});var r=t(85893),s=t(56925),a=t(4404),i=t(62393),u=(t(67294),!0);n.default=function(e){return(0,r.jsxs)(s.VY.A,{className:"space-y-3",breadcrumbs:["Examples",e.guide.title],right:(0,r.jsx)(i.VO,{namespace:"examples",sections:e.sections,releases:e.releases}),children:[(0,r.jsx)("h2",{className:"text-gray-400",children:(0,a.MI)(e.guide.section)}),(0,r.jsx)("h1",{className:"prose text-4xl",children:e.guide.title}),(0,r.jsx)("div",{className:"mt-10 space-y-5",dangerouslySetInnerHTML:{__html:e.guide.content}})]})}},4404:function(e,n,t){"use strict";t.d(n,{p6:function(){return i},MR:function(){return c},MI:function(){return a}});var r=t(53406),s=t.n(r);function a(e){return s()(e.replace("-"," "))}function i(e){var n="string"===typeof e?new Date(e):e;return new Intl.DateTimeFormat(void 0,{dateStyle:"long"}).format(n)}var u=t(87329);function c(e,n,t){var r="asc"===t?function(e,t){return e[n]<t[n]?-1:1}:function(e,t){return e[n]>t[n]?-1:1};return(0,u.Z)(e.sort(r))}},63681:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/[...slug]",function(){return t(53293)}])},53406:function(e){"use strict";const n=e=>{if("string"!==typeof e)throw new TypeError("Expected a string");return e.toLowerCase().replace(/(?:^|\s|-)\S/g,(e=>e.toUpperCase()))};e.exports=n,e.exports.default=n}},function(e){e.O(0,[774,403,925,888,179],(function(){return n=63681,e(e.s=n);var n}));var n=e.O();_N_E=n}]);