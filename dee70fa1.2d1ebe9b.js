(window.webpackJsonp=window.webpackJsonp||[]).push([[1509],{1574:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(1784),r=n(1785),b=(n(0),n(1786)),c={title:"\u7f16\u5199\u7aef\u5e73\u53f0\u63d2\u4ef6"},i={unversionedId:"platform-plugin-how",id:"platform-plugin-how",isDocsHomePage:!1,title:"\u7f16\u5199\u7aef\u5e73\u53f0\u63d2\u4ef6",description:"\u6269\u5c55\u4e00\u4e2a\u7f16\u8bd1\u5e73\u53f0\uff0c\u9700\u8981\u7f16\u5199\u4e00\u4e2a Taro \u63d2\u4ef6\uff0c\u5bf9\u7f16\u8bd1\u65f6\u548c\u8fd0\u884c\u65f6\u5206\u522b\u8fdb\u884c\u517c\u5bb9\u3002",source:"@site/docs/platform-plugin-how.md",slug:"/platform-plugin-how",permalink:"/taro/docs/next/platform-plugin-how",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/platform-plugin-how.md",version:"current",sidebar:"docs",previous:{title:"\u6982\u8ff0",permalink:"/taro/docs/next/platform-plugin"},next:{title:"TaroPlatformBase",permalink:"/taro/docs/next/platform-plugin-base"}},l=[{value:"\u7aef\u5e73\u53f0\u63d2\u4ef6\u67b6\u6784",id:"\u7aef\u5e73\u53f0\u63d2\u4ef6\u67b6\u6784",children:[{value:"\u63d2\u4ef6\u76ee\u5f55\u7ec4\u7ec7",id:"\u63d2\u4ef6\u76ee\u5f55\u7ec4\u7ec7",children:[]},{value:"\u67b6\u6784\u56fe",id:"\u67b6\u6784\u56fe",children:[]}]},{value:"\u7f16\u8bd1\u65f6",id:"\u7f16\u8bd1\u65f6",children:[{value:"\u4e00\u3001\u7f16\u5199 Taro \u63d2\u4ef6",id:"\u4e00\u3001\u7f16\u5199-taro-\u63d2\u4ef6",children:[]},{value:"\u4e8c\u3001\u7f16\u5199\u5e73\u53f0\u7c7b",id:"\u4e8c\u3001\u7f16\u5199\u5e73\u53f0\u7c7b",children:[]}]},{value:"\u8fd0\u884c\u65f6",id:"\u8fd0\u884c\u65f6",children:[{value:"\u4e00\u3001\u5904\u7406\u8fd0\u884c\u65f6\u5165\u53e3",id:"\u4e00\u3001\u5904\u7406\u8fd0\u884c\u65f6\u5165\u53e3",children:[]},{value:"\u4e8c\u3001\u5904\u7406 API",id:"\u4e8c\u3001\u5904\u7406-api",children:[]}]},{value:"\u6253\u5305",id:"\u6253\u5305",children:[]},{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]}],o={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u6269\u5c55\u4e00\u4e2a\u7f16\u8bd1\u5e73\u53f0\uff0c\u9700\u8981\u7f16\u5199\u4e00\u4e2a ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"./plugin"}),"Taro \u63d2\u4ef6"),"\uff0c\u5bf9\u7f16\u8bd1\u65f6\u548c\u8fd0\u884c\u65f6\u5206\u522b\u8fdb\u884c\u517c\u5bb9\u3002"),Object(b.b)("h2",{id:"\u7aef\u5e73\u53f0\u63d2\u4ef6\u67b6\u6784"},"\u7aef\u5e73\u53f0\u63d2\u4ef6\u67b6\u6784"),Object(b.b)("h3",{id:"\u63d2\u4ef6\u76ee\u5f55\u7ec4\u7ec7"},"\u63d2\u4ef6\u76ee\u5f55\u7ec4\u7ec7"),Object(b.b)("p",null,"\u4ee5 ",Object(b.b)("inlineCode",{parentName:"p"},"@tarojs/plugin-platform-weapp")," \u4e3a\u4f8b\uff1a"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"\u251c\u2500\u2500 src                      \u6e90\u7801\u76ee\u5f55\n|   \u251c\u2500\u2500 index.ts             \u63d2\u4ef6\u5165\u53e3\n|   \u251c\u2500\u2500 program.ts           \u7f16\u8bd1\u65f6\u5165\u53e3\n|   \u251c\u2500\u2500 template.ts          \u6a21\u677f\u5904\u7406\u903b\u8f91\n|   \u251c\u2500\u2500 runtime.ts           \u8fd0\u884c\u65f6\u5165\u53e3\n|   \u251c\u2500\u2500 runtime-utils.ts     \u8fd0\u884c\u65f6\u4f9d\u8d56\u5de5\u5177\n|   \u251c\u2500\u2500 apis.ts              API \u76f8\u5173\u5904\u7406\n|   \u251c\u2500\u2500 apis-list.ts         API \u5217\u8868\n|   \u251c\u2500\u2500 components.ts        \u7ec4\u4ef6\u5217\u8868\n|   \u2514\u2500\u2500 components-react.ts  \u7ed9 React \u4f7f\u7528\u7684\u7ec4\u4ef6\u7c7b\u578b\n\u251c\u2500\u2500 types                    \u7c7b\u578b\n\u251c\u2500\u2500 index.js                 \u7f16\u8bd1\u65f6\u5165\u53e3\n\u251c\u2500\u2500 tsconfig.json\n\u251c\u2500\u2500 rollup.config.json\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 README.md\n")),Object(b.b)("h3",{id:"\u67b6\u6784\u56fe"},"\u67b6\u6784\u56fe"),Object(b.b)("p",null,Object(b.b)("img",Object(a.a)({parentName:"p"},{src:"http://storage.jd.com/cjj-pub-images/platform-plugin-construct.png",alt:null}))),Object(b.b)("h2",{id:"\u7f16\u8bd1\u65f6"},"\u7f16\u8bd1\u65f6"),Object(b.b)("p",null,"\u5904\u7406\u7f16\u8bd1\u76f8\u5173\u64cd\u4f5c\uff0c\u5982 Webpack \u914d\u7f6e\u3001\u6a21\u677f\u751f\u6210\u89c4\u5219\u7b49\u3002"),Object(b.b)("h3",{id:"\u4e00\u3001\u7f16\u5199-taro-\u63d2\u4ef6"},"\u4e00\u3001\u7f16\u5199 Taro \u63d2\u4ef6"),Object(b.b)("p",null,"\u524d\u7f6e\u9605\u8bfb\uff1a",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"./plugin#%E5%A6%82%E4%BD%95%E7%BC%96%E5%86%99%E4%B8%80%E4%B8%AA%E6%8F%92%E4%BB%B6"}),"\u3010\u5982\u4f55\u7f16\u5199\u4e00\u4e2a Taro \u63d2\u4ef6\u3011"),"\u3002"),Object(b.b)("p",null,"\u9996\u5148\u6211\u4eec\u9700\u8981\u7f16\u5199\u4e00\u4e2a Taro \u63d2\u4ef6\u6765\u6ce8\u518c\u6211\u4eec\u7684\u7f16\u8bd1\u5e73\u53f0\uff0c\u5982\uff1a"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="index.ts"',title:'"index.ts"'}),"export default (ctx) => {\n  ctx.registerPlatform({\n    name: 'weapp',\n    useConfigName: 'mini',\n    async fn (arg) {\n      // ...\n    }\n  })\n}\n")),Object(b.b)("h4",{id:"ctxregisterplatformoptions-object"},"ctx.registerPlatform(options: object)"),Object(b.b)("p",null,"\u6ce8\u518c\u4e00\u4e2a\u7f16\u8bd1\u5e73\u53f0"),Object(b.b)("h5",{id:"optionsname"},"options.name"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"string")),Object(b.b)("p",null,"\u5e73\u53f0\u540d\u79f0\uff0c\u7528\u4e8e CLI \u7f16\u8bd1\u547d\u4ee4\u3002"),Object(b.b)("p",null,"\u5982\u914d\u7f6e\u4e86 'xxx'\uff0c\u5219\u7f16\u8bd1\u6b64\u5e73\u53f0\u65f6\u4f7f\u7528\u7684 CLI \u547d\u4ee4\u4e3a\uff1a"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"taro build --type xxx\ntaro build --type xxx --watch\n")),Object(b.b)("h5",{id:"optionsuseconfigname"},"options.useConfigName"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"string")),Object(b.b)("p",null,"\u628a Taro \u7f16\u8bd1\u914d\u7f6e\u4e2d\u7684\u6307\u5b9a\u5b57\u6bb5\u7eb3\u5165\u7f16\u8bd1\u3002"),Object(b.b)("p",null,"Taro \u5c0f\u7a0b\u5e8f\u76f8\u5173\u914d\u7f6e\u9ed8\u8ba4\u653e\u5728 ",Object(b.b)("inlineCode",{parentName:"p"},"mini")," \u5b57\u6bb5\u4e0b\uff0c\u56e0\u6b64\u4e00\u822c\u60c5\u51b5\u914d\u7f6e ",Object(b.b)("inlineCode",{parentName:"p"},"usingConfigName: mini")," \u5373\u53ef\u3002"),Object(b.b)("h5",{id:"optionsfnarg"},"options.fn(arg)"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"function")),Object(b.b)("p",null,"\u7aef\u5e73\u53f0\u7f16\u8bd1\u7684\u5165\u53e3\u51fd\u6570\uff0c\u63a5\u53d7\u4e00\u4e2a\u53c2\u6570 ",Object(b.b)("inlineCode",{parentName:"p"},"arg"),"\uff0c\u5728\u6b64\u51fd\u6570\u5185\u6211\u4eec\u53ef\u4ee5\u5f00\u59cb\u7f16\u5199\u7aef\u5e73\u53f0\u7f16\u8bd1\u7684\u903b\u8f91\u3002"),Object(b.b)("h6",{id:"arg"},"arg"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"object")),Object(b.b)("p",null,"\u6574\u5408\u4e0a\u8ff0 ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"./platform-plugin-how#optionsuseconfigname"}),"options.useConfigName")," \u6307\u5b9a\u5b57\u6bb5\u540e\u7684 Taro \u7f16\u8bd1\u914d\u7f6e\uff0c\u7f16\u8bd1\u914d\u7f6e\u5404\u5b57\u6bb5\u8be6\u60c5\u8bf7\u770b",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/taro/docs/next/config-detail"}),"\u7f16\u8bd1\u914d\u7f6e\u8be6\u60c5"),"\u3002"),Object(b.b)("h3",{id:"\u4e8c\u3001\u7f16\u5199\u5e73\u53f0\u7c7b"},"\u4e8c\u3001\u7f16\u5199\u5e73\u53f0\u7c7b"),Object(b.b)("p",null,"\u63a5\u4e0b\u6765\u7ed9\u4e0a\u4e00\u8282\u4e2d\u63d0\u5230\u7684\u63d2\u4ef6\u5165\u53e3\u51fd\u6570\u6dfb\u52a0\u5185\u5bb9\u3002"),Object(b.b)("p",null,"\u6211\u4eec\u628a\u7f16\u8bd1\u65f6\u5e38\u7528\u7684\u903b\u8f91\u62bd\u8c61\u51fa\u4e86\u4e00\u4e2a\u57fa\u7c7b ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"./platform-plugin-base"}),"TaroPlatformBase"),"\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"./platform-plugin-base#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%B9%B3%E5%8F%B0%E7%B1%BB"}),"\u7ee7\u627f"),"\u4e8e\u6b64\u57fa\u7c7b\uff0c\u4ece\u800c\u5b9e\u73b0\u7aef\u5e73\u53f0\u7684\u7f16\u8bd1\u3002"),Object(b.b)("p",null,"\u7136\u540e\u5728\u63d2\u4ef6\u5165\u53e3\u51fd\u6570\u4e2d\u8c03\u7528\u4e0a\u8ff0\u81ea\u5b9a\u4e49\u5e73\u53f0\u7c7b\u7684\u7f16\u8bd1\u63a5\u53e3\uff1a"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="index.ts"',title:'"index.ts"'}),"import Weapp from './program'\n\nexport default (ctx) => {\n  ctx.registerPlatform({\n    name: 'weapp',\n    useConfigName: 'mini',\n    async fn (arg) {\n      // \u8c03\u7528\u81ea\u5b9a\u4e49\u5e73\u53f0\u7c7b\u7684 start \u51fd\u6570\uff0c\u5f00\u59cb\u7aef\u5e73\u53f0\u7f16\u8bd1\n      const program = new Weapp(ctx, config)\n      await program.start()\n    }\n  })\n}\n")),Object(b.b)("h2",{id:"\u8fd0\u884c\u65f6"},"\u8fd0\u884c\u65f6"),Object(b.b)("p",null,"\u5904\u7406\u8fd0\u884c\u65f6\u76f8\u5173\u64cd\u4f5c\uff0c\u5982 API\u3001\u7ec4\u4ef6\u3001Taro runtime \u903b\u8f91\u7b49\u3002"),Object(b.b)("h3",{id:"\u4e00\u3001\u5904\u7406\u8fd0\u884c\u65f6\u5165\u53e3"},"\u4e00\u3001\u5904\u7406\u8fd0\u884c\u65f6\u5165\u53e3"),Object(b.b)("h4",{id:"1-\u7f16\u5199-runtimets"},"1. \u7f16\u5199 runtime.ts"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"runtime.ts")," \u662f\u6211\u4eec\u8fd0\u884c\u65f6\u7684\u5165\u53e3\u6587\u4ef6\uff0c",Object(b.b)("inlineCode",{parentName:"p"},"Webpack")," \u7f16\u8bd1\u65f6\u4f1a\u628a\u5b83\u6ce8\u5165\u5230 ",Object(b.b)("inlineCode",{parentName:"p"},"app.js")," \u4e2d\u8fdb\u884c\u5f15\u7528\u3002"),Object(b.b)("p",null,"\u4f8b\u5b50\uff1a"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="runtime.ts"',title:'"runtime.ts"'}),"import { mergeReconciler, mergeInternalComponents } from '@tarojs/shared'\nimport { hostConfig, components } from './runtime-utils'\n\nmergeReconciler(hostConfig)\nmergeInternalComponents(components)\n")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="runtime-utils.ts"',title:'"runtime-utils.ts"'}),"export * from './components'\nexport const hostConfig = {}\n")),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"runtime.ts")," \u4e3b\u8981\u8d1f\u8d23\uff1a"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u4f7f\u7528 ",Object(b.b)("inlineCode",{parentName:"li"},"mergeReconciler")," \u51fd\u6570\u628a\u81ea\u5b9a\u4e49\u7684 ",Object(b.b)("inlineCode",{parentName:"li"},"hostConfig")," \u5408\u5e76\u5230\u5168\u5c40 ",Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"./platform-plugin-reconciler"}),"Reconciler")," \u4e2d\u3002"),Object(b.b)("li",{parentName:"ul"},"\u4f7f\u7528 ",Object(b.b)("inlineCode",{parentName:"li"},"mergeInternalComponents")," \u51fd\u6570\u628a\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4fe1\u606f ",Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"./platform-plugin-base#31-%E7%BC%96%E5%86%99-componentsts"}),"components.ts")," \u5408\u5e76\u5230\u5168\u5c40 ",Object(b.b)("inlineCode",{parentName:"li"},"internalComponents")," \u7ec4\u4ef6\u4fe1\u606f\u5bf9\u8c61\u4e2d\u3002")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u62bd\u53d6 runtime-utils.ts \u662f\u4e3a\u4e86\u65b9\u4fbf\u5176\u5b83\u63d2\u4ef6\u5f15\u7528")),Object(b.b)("h4",{id:"2-\u8fde\u63a5\u63d2\u4ef6\u5165\u53e3"},"2. \u8fde\u63a5\u63d2\u4ef6\u5165\u53e3"),Object(b.b)("p",null,"\u4e3a\u4e86\u8ba9 ",Object(b.b)("inlineCode",{parentName:"p"},"Webpack")," \u77e5\u9053\u53bb\u54ea\u91cc\u5f15\u7528\u4e0a\u8ff0\u8fd0\u884c\u65f6\u5165\u53e3\u6587\u4ef6\uff0c\u9700\u8981\u914d\u7f6e ",Object(b.b)("inlineCode",{parentName:"p"},"runtimePath"),"\uff1a"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="program.ts"',title:'"program.ts"'}),"class Weapp extends TaroPlatformBase {\n  runtimePath = '@tarojs/plugin-platform-weapp/dist/runtime'\n}\n")),Object(b.b)("h3",{id:"\u4e8c\u3001\u5904\u7406-api"},"\u4e8c\u3001\u5904\u7406 API"),Object(b.b)("p",null,"\u5728 Taro \u4e2d\uff0c\u7528\u6237\u9700\u8981\u4ece ",Object(b.b)("inlineCode",{parentName:"p"},"@tarojs/taro")," \u4e2d\u5f15\u7528 Taro \u7684\u5185\u7f6e API \u548c ",Object(b.b)("strong",{parentName:"p"},"Promise \u5316")," \u540e\u7684\u5c0f\u7a0b\u5e8f API\u3002"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import Taro from '@tarojs/taro'\n\n// \u5185\u7f6e API\nTaro.getCurrentInstance()\n// \u5c0f\u7a0b\u5e8f API\nTaro.request()\n")),Object(b.b)("h4",{id:"1-\u914d\u7f6e-initnativeapi"},"1. \u914d\u7f6e initNativeApi"),Object(b.b)("p",null,"\u539f\u59cb\u7684 ",Object(b.b)("inlineCode",{parentName:"p"},"@tarojs/taro")," \u5305\u53ea\u63d0\u4f9b\u4e86\u5185\u7f6e API\u3002\u6211\u4eec\u9700\u8981\u901a\u8fc7\u914d\u7f6e ",Object(b.b)("inlineCode",{parentName:"p"},"Reconciler")," \u7684 ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"./platform-plugin-reconciler#initnativeapi-taro"}),"initNativeApi")," \u9009\u9879\uff0c\u4e3a\u5168\u5c40 Taro \u5bf9\u8c61\u589e\u52a0\u5c0f\u7a0b\u5e8f\u7684 API \u548c\u6211\u4eec\u60f3\u8981\u6302\u8f7d\u5728 Taro \u5bf9\u8c61\u4e0a\u7684 API\u3002"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="apis-list.ts"',title:'"apis-list.ts"'}),"// \u9700\u8981\u65b0\u589e\u989d\u5916\u7684\u539f\u751f API \u65f6\uff0c\u5206\u62c6\u4e00\u4e2a\u5355\u72ec\u7684 `apis-list.ts` \u6587\u4ef6\u80fd\u6709\u5229\u4e8e\u7ef4\u62a4\u3002\n\n// \u540c\u6b65 API\nexport const noPromiseApis = new Set([\n  'getAccountInfoSync'\n])\n\n// \u5f02\u6b65 API\uff0c\u8fd9\u4e9b API \u90fd\u53ef\u4ee5\u8bbe\u7f6e `success`\u3001`fail`\u3001`complete` \u56de\u8c03\uff0c\u9700\u8981\u5bf9\u5b83\u4eec\u8fdb\u884c Promise \u5316\u3002\nexport const needPromiseApis = new Set([\n  'addCard'\n])\n")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="apis.ts"',title:'"apis.ts"'}),"import { processApis } from '@tarojs/shared'\nimport { noPromiseApis, needPromiseApis } from './apis-list'\n\ndeclare const wx: any\n\nexport function initNativeApi (taro) {\n  // \u4e0b\u6587\u5c06\u8be6\u7ec6\u4ecb\u7ecd processApis \u51fd\u6570\n  processApis(taro, wx, {\n    noPromiseApis,\n    needPromiseApis\n  })\n  // \u53ef\u4ee5\u4e3a taro \u6302\u8f7d\u4efb\u610f\u7684 API\n  taro.cloud = wx.cloud\n}\n")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="runtime-utils.ts"',title:'"runtime-utils.ts"'}),"import { initNativeApi } from './apis'\nexport const hostConfig = { initNativeApi }\n")),Object(b.b)("h4",{id:"2-processapistaro-global-options"},"2. processApis(taro, global, options)"),Object(b.b)("h5",{id:"\u5165\u53c2"},"\u5165\u53c2"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"taro"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"object"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Taro \u5bf9\u8c61")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"global"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"object"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u5c0f\u7a0b\u5e8f\u5168\u5c40\u5bf9\u8c61\uff0c\u5982\u5fae\u4fe1\u7684 wx")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"options"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"object"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u914d\u7f6e\u9879")))),Object(b.b)("h6",{id:"options"},"options"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"\u5c5e\u6027"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"noPromiseApis"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Set",Object(b.b)("inlineCode",{parentName:"td"},"<string>")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u65b0\u589e\u7684\u540c\u6b65 API")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"needPromiseApis"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Set",Object(b.b)("inlineCode",{parentName:"td"},"<string>")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u65b0\u589e\u7684\u5f02\u6b65 API")))),Object(b.b)("p",null,"\u4e0a\u8ff0 ",Object(b.b)("inlineCode",{parentName:"p"},"processApis")," \u51fd\u6570\u5e2e\u52a9\u6211\u4eec\u505a\u4e86\u4e09\u4ef6\u4e8b\u60c5\uff1a"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"\u6302\u8f7d\u6240\u6709\u5e73\u53f0\u516c\u5171\u7684\u5c0f\u7a0b\u5e8f API \u5230 Taro \u5bf9\u8c61\u4e0a"),Object(b.b)("li",{parentName:"ol"},"\u6302\u8f7d\u5e38\u7528\u7684\u5c0f\u7a0b\u5e8f\u5168\u5c40\u5bf9\u8c61\u5c5e\u6027 \u5230 Taro \u5bf9\u8c61\u4e0a"),Object(b.b)("li",{parentName:"ol"},"\u6302\u8f7d\u7528\u6237\u4f20\u5165\u7684\u5c0f\u7a0b\u5e8f API \u5230 Taro \u5bf9\u8c61\u4e0a")),Object(b.b)("h2",{id:"\u6253\u5305"},"\u6253\u5305"),Object(b.b)("p",null,"\u63d2\u4ef6\u4f7f\u7528 ",Object(b.b)("inlineCode",{parentName:"p"},"Rollup")," \u8fdb\u884c\u6253\u5305\uff0c\u9700\u8981\u6253\u5305\u51fa\u4ee5\u4e0b\u6587\u4ef6\uff1a"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"\u5165\u53e3\u6587\u4ef6"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"\u6a21\u5f0f"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"\u5fc5\u8981"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"src/index.ts"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"cjs"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u662f"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u63d2\u4ef6\u5165\u53e3\uff0c\u4f9b Taro CLI \u89e3\u6790")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"src/runtime.ts"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"es"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u662f"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u8fd0\u884c\u65f6\u5165\u53e3")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"src/runtime-utils.ts"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"es"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u5426"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u8fd0\u884c\u65f6\u5de5\u5177\u96c6\u5408\uff0c\u4f9b\u7ee7\u627f\u7684\u5b50\u7c7b\u5f15\u7528")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"src/components-react.ts"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"es"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u5426"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u6709\u65b0\u589e\u7ec4\u4ef6\u65f6\u9700\u8981\u5b9e\u73b0\uff0c\u4f9b React \u5f15\u7528")))),Object(b.b)("p",null,"\u6ce8\u610f\uff0cTaro \u76f8\u5173\u7684\u5305\u9700\u8981\u914d\u7f6e ",Object(b.b)("inlineCode",{parentName:"p"},"external"),"\uff0c\u4ee5\u514d\u91cd\u590d\u6253\u5305\uff1a"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="rollup.config.js"',title:'"rollup.config.js"'}),"{\n  external: ['@tarojs/shared', '@tarojs/service']\n}\n")),Object(b.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(b.b)("p",null,"Taro \u6838\u5fc3\u5e93\u7ef4\u62a4\u7684\u7c7b\u578b\u53ef\u80fd\u6ca1\u6709\u5305\u62ec\u5f53\u524d\u63d2\u4ef6\u65b0\u589e\u7684\u7ec4\u4ef6\u548c API\uff0c\u8fd9\u65f6\u6211\u4eec\u9700\u8981\u5bf9 ",Object(b.b)("inlineCode",{parentName:"p"},"@tarojs/taro")," \u548c ",Object(b.b)("inlineCode",{parentName:"p"},"@tarojs/components")," \u8fdb\u884c",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation"}),"\u6a21\u5757\u8865\u5145 (module augmentation)"),"\u3002"),Object(b.b)("p",null,"\u521b\u5efa\u4e00\u4e2a\u7c7b\u578b\u5b9a\u4e49\u6587\u4ef6\uff1a"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="types/shims-iot.d.ts"',title:'"types/shims-iot.d.ts"'}),"// \u4e3a\u652f\u4ed8\u5b9d IOT \u5c0f\u7a0b\u5e8f\u62d3\u5c55\u65b0\u589e\u7684 API \u548c\u7ec4\u4ef6\u5b9a\u4e49\nimport { ComponentType } from 'react'\nimport Taro from '@tarojs/taro'\n\ndeclare module '@tarojs/taro' {\n  namespace ix {\n    function onCashierEventReceive (cb: any): void\n  }\n}\n\ninterface PosterProps {\n  posid: string\n  audible?: boolean\n  onSuccess?: () => void\n  onFail?: () => void\n  onChange?: () => void\n}\n\ndeclare module '@tarojs/components' {\n  export const Poster: ComponentType<PosterProps>\n}\n")),Object(b.b)("p",null,"\u5f00\u53d1\u8005\u5728\u7c7b\u578b\u5b9a\u4e49\u6587\u4ef6\u4e2d\u5f15\u5165\u6b64\u6587\u4ef6\u5373\u53ef\uff1a"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="global.d.ts"',title:'"global.d.ts"'}),'/// <reference path="node_modules/@tarojs/plugin-platform-alipay-iot/types/shims-iot.d.ts" />\n')))}p.isMDXComponent=!0},1784:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},1785:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))},1786:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,O=s["".concat(c,".").concat(m)]||s[m]||j[m]||b;return n?r.a.createElement(O,i(i({ref:t},o),{},{components:n})):r.a.createElement(O,i({ref:t},o))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,c=new Array(b);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var o=2;o<b;o++)c[o]=n[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);