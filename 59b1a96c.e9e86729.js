(window.webpackJsonp=window.webpackJsonp||[]).push([[608],{1784:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},1785:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))},1786:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),b=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=b(n),f=a,m=s["".concat(o,".").concat(f)]||s[f]||p[f]||c;return n?r.a.createElement(m,i(i({ref:t},u),{},{components:n})):r.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<c;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1787:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},1788:function(e,t,n){"use strict";var a=n(0),r=n(1789);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1789:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},1790:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(1788),o=n(1787),i=n(51),l=n.n(i),u=37,b=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.children,s=e.defaultValue,p=e.values,f=e.groupId,m=e.className,v=Object(c.a)(),h=v.tabGroupChoices,d=v.setTabGroupChoices,O=Object(a.useState)(s),j=O[0],g=O[1];if(null!=f){var N=h[f];null!=N&&N!==j&&p.some((function(e){return e.value===N}))&&g(N)}var w=function(e){g(e),null!=f&&d(f,e)},y=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(a.cloneElement)(i.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},i.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},1791:function(e,t,n){"use strict";var a=n(1784),r=n(0),c=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return c.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}},1793:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return l}));var a=n(0),r=n.n(a),c=function(){return r.a.createElement("span",{className:"footer_link_connect_wrap"},r.a.createElement("span",{className:"footer_link_connect footer_link_wechat"},"\u5fae\u4fe1\u5f00\u53d1\u8005\u7fa4",r.a.createElement("span",{className:"wechat_qrcode_icon"},r.a.createElement("svg",{t:"1554966525626",className:"icon svgicon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2588","data-spm-anchor-id":"a313x.7781069.0.i0"},r.a.createElement("path",{d:"M240.071 241.095h59.278v59.278h-59.278v-59.278z",fill:"","p-id":"2589"}),r.a.createElement("path",{d:"M405.959 134.485h-272.611v272.611h106.723v47.445h59.278v-47.445h106.723v-59.278h47.445v-47.445h-47.445l-0.114-165.888zM346.795 347.819h-154.169v-154.055h154.055v154.055h0.114zM240.071 727.154h59.278v59.278h-59.278v-59.278zM726.016 241.095h59.278v59.278h-59.278v-59.278zM512.683 509.042v63.943h59.278v-59.165h47.445v-59.278h-47.445v-47.445h-59.278v101.945zM512.683 725.789v60.643h59.278v-106.723h47.445v-59.278h-106.723v105.358zM571.961 786.432h47.445v47.445h-47.445v-47.445zM453.405 833.877v59.165h118.557v-59.165h-118.557z",fill:"","p-id":"2590"}),r.a.createElement("path",{d:"M678.685 679.709h-59.278v106.723h106.61v-59.278h-47.331v-47.445zM726.016 893.042h166.002v-59.165h-106.723v-47.445h-59.278v106.61zM892.018 513.821v-59.278h-106.723v59.278h106.723zM832.739 727.154h59.278v59.278h-59.278v-59.278zM453.405 347.819h59.278v59.278h-59.278v-59.278zM726.016 454.542v-47.445h166.002v-272.611h-272.611v59.278h-106.723v47.445h106.723v59.165h-47.445v47.445h47.445v59.278h59.278v47.445h47.331zM678.685 193.763h154.055v154.055h-154.055v-154.055zM678.685 572.985h47.331v47.445h-47.331v-47.445zM785.294 679.709h-59.278v47.445h106.723v-106.723h59.278v-47.445h-106.723v106.723zM453.405 241.095h59.278v59.278h-59.278v-59.278zM299.349 513.821h47.445v59.165h-47.445v-59.165zM453.405 454.542h-106.61v59.278h59.165v59.165h47.445v-118.443z",fill:"","p-id":"2591"}),r.a.createElement("path",{d:"M405.959 786.432v-106.723h47.445v-59.278h-213.333v-106.61h-106.723v59.278h59.278v47.445h-59.278v272.611h272.611v-59.278h47.445v-47.445h-47.445zM346.795 833.877h-154.169v-154.169h154.055v154.169h0.114zM453.405 572.985h59.278v47.445h-59.278v-47.445zM619.406 513.821h59.278v59.165h-59.278v-59.165zM726.016 513.821h59.278v59.165h-59.278v-59.165z",fill:"","p-id":"2592"})))),r.a.createElement("span",{className:"footer_link_wechat_img inline"},r.a.createElement("img",{src:"https://camo.githubusercontent.com/10834a234b99a5880b5dff7c0ca7235e2a0772e7/687474703a2f2f696d6732302e333630627579696d672e636f6d2f7562612f6a66732f7432303139372f3238332f313638373136383837342f3133363034322f32623464383131662f35623330613635634e39643166303366312e706e67"})))};function o(){return r.a.createElement("span",null,r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"inline-svg-icon",viewBox:"0 0 1024 1024"},r.a.createElement("defs",null,r.a.createElement("style",null)),r.a.createElement("path",{fill:"#41B883",d:"M615.6 123.6h165.5L512 589.7 242.9 123.6H63.5L512 900.4l448.5-776.9z"}),r.a.createElement("path",{fill:"#34495E",d:"M781.1 123.6H615.6L512 303 408.4 123.6H242.9L512 589.7z"})),r.a.createElement("span",{style:{color:i}},"Vue"))}var i="#4fc08d";function l(){return r.a.createElement("span",null,r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200",className:"inline-svg-icon",viewBox:"0 0 1024 1024"},r.a.createElement("defs",null,r.a.createElement("style",null)),r.a.createElement("path",{fill:"#61DAFB",d:"M432 511.8a80 80 0 10160 0 80 80 0 10-160 0z"}),r.a.createElement("path",{fill:"#61DAFB",d:"M960.5 511.8c0-62.8-73.8-117.2-188.5-150.1 28.9-115.8 18.7-206.9-35.7-238.3-54.5-31.4-138.5 5.3-224.3 88.2-85.8-82.9-169.8-119.6-224.3-88.2-54.4 31.4-64.6 122.6-35.7 238.3C137.3 394.6 63.5 449 63.5 511.8S137.3 629 252 661.9c-28.9 115.7-18.7 206.9 35.7 238.3 13.4 7.8 28.6 11.6 45.2 11.6 39.7 0 87.8-21.8 140-64.2 13-10.6 26.1-22.6 39.1-35.2 13 12.6 26.1 24.6 39.1 35.2 52.2 42.4 100.2 64.2 140 64.2 16.6 0 31.8-3.8 45.2-11.6 54.4-31.4 64.6-122.5 35.7-238.3 114.7-32.9 188.5-87.3 188.5-150.1zM716.8 157.2c35.3 20.4 42.7 94.3 17.6 194.8-36.7-8.4-76.7-14.7-119.3-18.6-24.7-34.9-50.2-66.4-75.8-94 59.2-57.3 114.2-88.4 152-88.4 9.6-.1 18.2 2 25.5 6.2zM637 584c-13.8 24-28.4 47-43.3 69-26.1 2-53.3 3.1-81.7 3.1-28.3 0-55.5-1.1-81.6-3.1-15-22-29.5-45.1-43.3-69-14.1-24.5-26.7-48.6-38.1-72.2 11.4-23.6 24-47.7 38.1-72.2 14.1-24.5 28.7-47.4 43.4-69.1 26.1-2 53.3-3.1 81.6-3.1 28.3 0 55.5 1.1 81.6 3.1 14.7 21.6 29.3 44.6 43.4 69 14.1 24.5 26.7 48.6 38.1 72.2-11.5 23.7-24.1 47.8-38.2 72.3zm58.8-26.4c11.2 26.6 20.4 52.1 28 76.5-24.9 5.6-51.7 10.4-80.3 14 9.3-14.5 18.4-29.3 27.3-44.6 8.8-15.4 17.1-30.7 25-45.9zM512 756.5c-17.7-19.2-35.1-40.1-52.2-62.6 17.1.8 34.5 1.3 52.2 1.3 17.7 0 35.1-.5 52.2-1.3-17.1 22.5-34.5 43.4-52.2 62.6zM380.5 648.1c-28.6-3.6-55.3-8.4-80.3-14 7.6-24.4 16.8-49.9 28-76.5 7.9 15.2 16.1 30.5 25 45.9 8.9 15.2 18 30 27.3 44.6zM328.2 466c-11.2-26.6-20.4-52.1-28-76.5 24.9-5.6 51.6-10.4 80.2-14-9.2 14.4-18.4 29.2-27.2 44.6-8.8 15.4-17.1 30.7-25 45.9zM512 267.1c17.3 18.7 34.8 39.8 52.1 62.7-17.1-.8-34.4-1.3-52.1-1.3-17.7 0-35 .5-52.1 1.3 17.3-22.9 34.8-44 52.1-62.7zm158.7 153c-8.9-15.3-18-30.1-27.2-44.6 28.6 3.6 55.3 8.4 80.2 14-7.6 24.4-16.8 49.9-28 76.5-7.8-15.2-16.1-30.5-25-45.9zM307.2 157.2c7.2-4.2 15.8-6.2 25.6-6.2 37.8 0 92.7 31.1 151.9 88.4-25.6 27.6-51.1 59.2-75.8 94-42.5 3.9-82.6 10.2-119.3 18.6-25.1-100.6-17.6-174.5 17.6-194.8zM102.5 511.8c0-40.8 60.3-84.2 160-112.6 11.1 36 25.6 73.8 43.5 112.6-17.8 38.8-32.4 76.6-43.5 112.6-99.7-28.4-160-71.9-160-112.6zm345.8 305.5c-59.7 48.5-111.1 66.4-141.1 49.2-35.3-20.4-42.7-94.3-17.6-194.8 36.7 8.4 76.7 14.7 119.3 18.6 24.4 34.5 49.9 66.1 75.8 94.2-12.1 11.7-24.2 22.9-36.4 32.8zm268.5 49.2c-29.9 17.3-81.4-.6-141.1-49.2-12.1-9.9-24.3-21.1-36.5-32.8 26-28.1 51.4-59.7 75.8-94.2 42.5-3.9 82.6-10.2 119.3-18.7 25.2 100.6 17.7 174.5-17.5 194.9zm44.8-242.1c-11.1-36-25.6-73.8-43.5-112.6 17.8-38.8 32.4-76.6 43.5-112.6 99.7 28.5 160 71.9 160 112.6-.1 40.7-60.4 84.2-160 112.6z"})),r.a.createElement("span",{style:{color:"#61dafb"}},"React"))}},1794:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(7),o=n(1797),i=n(8),l=Object(a.createContext)({collectLink:function(){}}),u=n(1795),b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,n,s,p=e.isNavLink,f=e.to,m=e.href,v=e.activeClassName,h=e.isActive,d=e["data-noBrokenLinkCheck"],O=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),j=Object(u.b)().withBaseUrl,g=Object(a.useContext)(l),N=f||m,w=Object(o.a)(N),y=null==N?void 0:N.replace("pathname://",""),E=void 0!==y?function(e){return e.startsWith("/")}(n=y)?j(n):n:void 0,x=Object(a.useRef)(!1),M=p?c.e:c.c,z=i.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!z&&w&&window.docusaurus.prefetch(E),function(){z&&s&&s.disconnect()}}),[E,z,w]);var T=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,k=!E||!w||T;return E&&w&&!T&&!d&&g.collectLink(E),k?r.a.createElement("a",Object.assign({href:E},N&&!w&&{target:"_blank",rel:"noopener noreferrer"},O)):r.a.createElement(M,Object.assign({},O,{onMouseEnter:function(){x.current||(window.docusaurus.preload(E),x.current=!0)},innerRef:function(e){var t,n;z&&e&&w&&(t=e,n=function(){window.docusaurus.prefetch(E)},(s=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(t),s.disconnect(),n())}))}))).observe(t))},to:E||""},p&&{isActive:h,activeClassName:v}))}},1795:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));var a=n(20),r=n(1797);function c(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var c=void 0===a?{}:a,o=c.forcePrependBaseUrl,i=void 0!==o&&o,l=c.absolute,u=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(i)return t+n;var b=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+b:b}(c,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},1797:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},674:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return m}));var a=n(1784),r=n(1785),c=(n(0),n(1786)),o=n(1790),i=n(1791),l=n(1793),u=n(1794),b={title:"Taro \u4ecb\u7ecd"},s={unversionedId:"README",id:"README",isDocsHomePage:!1,title:"Taro \u4ecb\u7ecd",description:"\u7b80\u4ecb",source:"@site/docs/README.mdx",slug:"/README",permalink:"/taro/docs/next/README",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/README.mdx",version:"current",sidebar:"docs",next:{title:"Taro \u7248\u672c\u8bf4\u660e",permalink:"/taro/docs/next/version"}},p=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[]},{value:"\u7279\u6027",id:"\u7279\u6027",children:[{value:"\u591a\u7aef\u8f6c\u6362\u652f\u6301",id:"\u591a\u7aef\u8f6c\u6362\u652f\u6301",children:[]},{value:"\u6846\u67b6\u652f\u6301",id:"\u6846\u67b6\u652f\u6301",children:[]}]},{value:"Taro UI",id:"taro-ui",children:[]},{value:"\u5b66\u4e60\u8d44\u6e90",id:"\u5b66\u4e60\u8d44\u6e90",children:[]},{value:"\u4f7f\u7528\u6848\u4f8b",id:"\u4f7f\u7528\u6848\u4f8b",children:[]}],f={rightToc:p};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Taro")," \u662f\u4e00\u4e2a\u5f00\u653e\u5f0f\u8de8\u7aef\u8de8\u6846\u67b6\u89e3\u51b3\u65b9\u6848\uff0c\u652f\u6301\u4f7f\u7528 React/Vue/Nerv \u7b49\u6846\u67b6\u6765\u5f00\u53d1 ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://mp.weixin.qq.com/"}),"\u5fae\u4fe1")," / ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://mp.jd.com/?entrance=taro"}),"\u4eac\u4e1c")," / ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://smartprogram.baidu.com/"}),"\u767e\u5ea6")," / ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://mini.open.alipay.com/"}),"\u652f\u4ed8\u5b9d")," / ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.toutiao.com/"}),"\u5b57\u8282\u8df3\u52a8")," / ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://q.qq.com/"}),"QQ")," \u5c0f\u7a0b\u5e8f / H5 / RN \u7b49\u5e94\u7528\u3002"),Object(c.b)("p",null,"\u73b0\u5982\u4eca\u5e02\u9762\u4e0a\u7aef\u7684\u5f62\u6001\u591a\u79cd\u591a\u6837\uff0cWeb\u3001React Native\u3001\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7b49\u5404\u79cd\u7aef\u5927\u884c\u5176\u9053\u3002\u5f53\u4e1a\u52a1\u8981\u6c42\u540c\u65f6\u5728\u4e0d\u540c\u7684\u7aef\u90fd\u8981\u6c42\u6709\u6240\u8868\u73b0\u7684\u65f6\u5019\uff0c\u9488\u5bf9\u4e0d\u540c\u7684\u7aef\u53bb\u7f16\u5199\u591a\u5957\u4ee3\u7801\u7684\u6210\u672c\u663e\u7136\u975e\u5e38\u9ad8\uff0c\u8fd9\u65f6\u5019\u53ea\u7f16\u5199\u4e00\u5957\u4ee3\u7801\u5c31\u80fd\u591f\u9002\u914d\u5230\u591a\u7aef\u7684\u80fd\u529b\u5c31\u663e\u5f97\u6781\u4e3a\u9700\u8981\u3002"),Object(c.b)("h2",{id:"\u7279\u6027"},"\u7279\u6027"),Object(c.b)("h3",{id:"\u591a\u7aef\u8f6c\u6362\u652f\u6301"},"\u591a\u7aef\u8f6c\u6362\u652f\u6301"),Object(c.b)("p",null,"Taro 3 \u53ef\u4ee5\u652f\u6301\u8f6c\u6362\u5230 H5\u3001ReactNative \u4ee5\u53ca\u4efb\u610f\u5c0f\u7a0b\u5e8f\u5e73\u53f0\u3002"),Object(c.b)("p",null,"\u76ee\u524d\u5b98\u65b9\u652f\u6301\u8f6c\u6362\u7684\u5e73\u53f0\u5982\u4e0b\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"H5"),Object(c.b)("li",{parentName:"ul"},"ReactNative"),Object(c.b)("li",{parentName:"ul"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("li",{parentName:"ul"},"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f"),Object(c.b)("li",{parentName:"ul"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(c.b)("li",{parentName:"ul"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(c.b)("li",{parentName:"ul"},"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),Object(c.b)("li",{parentName:"ul"},"QQ \u5c0f\u7a0b\u5e8f"),Object(c.b)("li",{parentName:"ul"},"\u9489\u9489\u5c0f\u7a0b\u5e8f"),Object(c.b)("li",{parentName:"ul"},"\u4f01\u4e1a\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("li",{parentName:"ul"},"\u652f\u4ed8\u5b9d IOT \u5c0f\u7a0b\u5e8f")),Object(c.b)("h3",{id:"\u6846\u67b6\u652f\u6301"},"\u6846\u67b6\u652f\u6301"),Object(c.b)("p",null,"\u5728 Taro 3 \u4e2d\u53ef\u4ee5\u4f7f\u7528\u5b8c\u6574\u7684 ",Object(c.b)("strong",{parentName:"p"},"React / Vue / Vue3 / Nerv")," \u5f00\u53d1\u4f53\u9a8c\uff0c\u5177\u4f53\u8bf7\u53c2\u8003\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"./react-overall"}),"\u57fa\u7840\u6559\u7a0b\u2014\u2014React")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"./vue-overall"}),"\u57fa\u7840\u6559\u7a0b\u2014\u2014Vue")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"./vue3"}),"\u57fa\u7840\u6559\u7a0b\u2014\u2014Vue3"))),Object(c.b)(o.a,{defaultValue:"React",values:[{label:Object(c.b)(l.a,{mdxType:"ReactIcon"}),value:"React"},{label:Object(c.b)(l.b,{mdxType:"VueIcon"}),value:"Vue"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"React",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"import React, { Component } from 'react'\nimport { View, Text } from '@tarojs/components'\n\nexport default class Index extends Component {\n  state = {\n    msg: 'Hello World\uff01'\n  }\n\n  componentWillMount () { }\n\n  componentDidShow () { }\n\n  componentDidHide () { }\n\n  render () {\n    return (\n      <View className='index'>\n        <Text>{this.state.msg}</Text>\n      </View>\n    )\n  }\n}\n"))),Object(c.b)(i.a,{value:"Vue",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"<template>\n  <view class=\"index\">\n    <text>{{msg}}</text>\n  </view>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      msg: 'Hello World\uff01'\n    }\n  },\n  created () {},\n  onShow () {},\n  onHide () {}\n}\n<\/script>\n")))),Object(c.b)("h2",{id:"taro-ui"},"Taro UI"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Taro 3 \u53ea\u80fd\u914d\u5408\u4f7f\u7528 taro-ui@next \u7248\u672c"),Object(c.b)("p",{parentName:"blockquote"},"\u5b89\u88c5\u547d\u4ee4\uff1a ",Object(c.b)("inlineCode",{parentName:"p"},"npm i taro-ui@next"))),Object(c.b)("p",null,"\u4e00\u6b3e\u57fa\u4e8e ",Object(c.b)("inlineCode",{parentName:"p"},"Taro")," \u6846\u67b6\u5f00\u53d1\u7684\u591a\u7aef UI \u7ec4\u4ef6\u5e93\u3002"),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://taro-ui.jd.com"}),"Taro UI")," \u7279\u6027\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u57fa\u4e8e ",Object(c.b)("inlineCode",{parentName:"li"},"Taro")," \u5f00\u53d1 UI \u7ec4\u4ef6"),Object(c.b)("li",{parentName:"ul"},"\u4e00\u5957\u7ec4\u4ef6\u53ef\u4ee5\u5728\u591a\u7aef\u9002\u914d\u8fd0\u884c\uff08",Object(c.b)("inlineCode",{parentName:"li"},"ReactNative")," \u7aef\u6682\u4e0d\u652f\u6301\uff09"),Object(c.b)("li",{parentName:"ul"},"\u63d0\u4f9b\u53cb\u597d\u7684 API\uff0c\u53ef\u7075\u6d3b\u7684\u4f7f\u7528\u7ec4\u4ef6")),Object(c.b)("h2",{id:"\u5b66\u4e60\u8d44\u6e90"},"\u5b66\u4e60\u8d44\u6e90"),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.taro.zone/blog"}),"\u3010\u8d44\u8baf\u3011Taro \u56e2\u961f\u535a\u5ba2 ")),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.taro.zone/docs/guide"}),"\u3010\u6559\u7a0b\u30115 \u5206\u949f\u4e0a\u624b Taro \u5f00\u53d1")),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://mp.weixin.qq.com/s?__biz=MzU3NDkzMTI3MA==&mid=2247484205&idx=1&sn=935bb7a35c11c33563eeb7c3aaca3321&chksm=fd2bab04ca5c2212b4cd8aeb5858bd08517aeb31e20727b22d1eee00b394184e7e61359e7dd9&token=1180618535&lang=zh_CN#rd"}),"\u3010\u89c6\u9891\u30115\u5206\u949f\u5feb\u901f\u4e0a\u624b Taro \u5f00\u53d1\u5c0f\u7a0b\u5e8f")),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://juejin.im/book/5b73a131f265da28065fb1cd?referrer=5ba228f16fb9a05d3251492d"}),"\u3010\u6398\u91d1\u5c0f\u518c\u3011Taro \u591a\u7aef\u5f00\u53d1\u5b9e\u73b0\u539f\u7406\u4e0e\u5b9e\u6218")),Object(c.b)("p",null,"\u66f4\u591a\u7684\u8d44\u6e90\u8bf7\u70b9\u51fb\u67e5\u770b ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/taro/docs/next/composition"}),"\u66f4\u591a\u8d44\u6e90")," \uff0c\u5982\u679c\u60a8\u6709\u597d\u7684\u8d44\u6e90\u6216\u6559\u7a0b\u548c\u5927\u5bb6\u5206\u4eab\uff0c\u6b22\u8fce\u63d0\u4ea4\u8d44\u6e90\u5230 ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/NervJS/awesome-taro"}),"awesome-taro"),"\u3002"),Object(c.b)("h2",{id:"\u4f7f\u7528\u6848\u4f8b"},"\u4f7f\u7528\u6848\u4f8b"),Object(c.b)("p",null,"Taro \u5df2\u7ecf\u6295\u5165\u4e86\u6211\u4eec\u7684\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528\uff0c\u4e1a\u754c\u4e5f\u5728\u5e7f\u6cdb\u5730\u4f7f\u7528 Taro \u5f00\u53d1\u591a\u7aef\u5e94\u7528\u3002"),Object(c.b)(u.a,{to:"/showcase",mdxType:"Link"},"\u67e5\u770b\u66f4\u591a\u7684\u6848\u4f8b\uff0c\u8bf7\u70b9\u51fb"),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/NervJS/taro/issues/244"}),"\u6211\u4eec\u6b63\u5728\u5f81\u96c6\u66f4\u591a\u4f18\u79c0\u6848\u4f8b\uff0c\u6b22\u8fce\u70b9\u51fb\u63d0\u4ea4")),Object(c.b)("a",{href:"https://nervjs.github.io/taro-user-cases/"},Object(c.b)("img",{src:"https://raw.githubusercontent.com/NervJS/taro-user-cases/master/user-cases.jpg"})))}m.isMDXComponent=!0}}]);