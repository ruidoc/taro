(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1784:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},1785:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}r.d(t,"a",(function(){return n}))},1786:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),c=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var i=c.a.createContext({}),u=function(e){var t=c.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},O=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),p=u(r),O=n,d=p["".concat(o,".").concat(O)]||p[O]||s[O]||a;return r?c.a.createElement(d,l(l({ref:t},i),{},{components:r})):c.a.createElement(d,l({ref:t},i))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=O;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var i=2;i<a;i++)o[i]=r[i];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"},76:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return u}));var n=r(1784),c=r(1785),a=(r(0),r(1786)),o={title:"Taro.onSocketError(callback)",sidebar_label:"onSocketError"},l={unversionedId:"apis/network/webSocket/onSocketError",id:"version-3.x/apis/network/webSocket/onSocketError",isDocsHomePage:!1,title:"Taro.onSocketError(callback)",description:"\u76d1\u542c WebSocket \u9519\u8bef\u4e8b\u4ef6",source:"@site/versioned_docs/version-3.x/apis/network/webSocket/onSocketError.md",slug:"/apis/network/webSocket/onSocketError",permalink:"/taro/docs/apis/network/webSocket/onSocketError",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/network/webSocket/onSocketError.md",version:"3.x",sidebar_label:"onSocketError",sidebar:"version-3.x/API",previous:{title:"Taro.onSocketMessage(callback)",permalink:"/taro/docs/apis/network/webSocket/onSocketMessage"},next:{title:"Taro.onSocketClose(callback)",permalink:"/taro/docs/apis/network/webSocket/onSocketClose"}},b=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Callback",id:"callback",children:[]},{value:"CallbackResult",id:"callbackresult",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:b};function u(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u76d1\u542c WebSocket \u9519\u8bef\u4e8b\u4ef6"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.onSocketError.html"}),"\u53c2\u8003\u6587\u6863"))),Object(a.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"(callback: (result: Callback) => void) => void\n")),Object(a.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(a.b)("h3",{id:"callback"},"Callback"),Object(a.b)("p",null,"WebSocket \u9519\u8bef\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"(result: CallbackResult) => void\n")),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"result"),Object(a.b)("td",null,Object(a.b)("code",null,"CallbackResult"))))),Object(a.b)("h3",{id:"callbackresult"},"CallbackResult"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"errMsg"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",null,"\u9519\u8bef\u4fe1\u606f")))),Object(a.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.connectSocket({\n  url: 'test.php'\n})\nTaro.onSocketOpen(function (res){\n  console.log('WebSocket\u8fde\u63a5\u5df2\u6253\u5f00\uff01')\n})\nTaro.onSocketError(function (res){\n  console.log('WebSocket\u8fde\u63a5\u6253\u5f00\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\uff01')\n})\n")),Object(a.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.onSocketError"),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0}}]);