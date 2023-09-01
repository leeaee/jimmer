"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[3796],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),u=l(a),d=r,f=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return a?n.createElement(f,i(i({ref:t},s),{},{components:a})):n.createElement(f,i({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var m={};for(var c in t)hasOwnProperty.call(t,c)&&(m[c]=t[c]);m.originalType=e,m.mdxType="string"==typeof e?e:r,i[1]=m;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},57412:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>m,toc:()=>l});var n=a(83117),r=(a(67294),a(3905));const o={sidebar_position:3,title:"Save Command"},i=void 0,m={unversionedId:"mutation/save-command/index",id:"mutation/save-command/index",title:"Save Command",description:"Save commands are a very powerful capability of Jimmer that can greatly simplify the development difficulty of persisting complex data structures.",source:"@site/docs/mutation/save-command/index.md",sourceDirName:"mutation/save-command",slug:"/mutation/save-command/",permalink:"/jimmer/docs/mutation/save-command/",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/mutation/save-command/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Save Command"},sidebar:"tutorialSidebar",previous:{title:"Delete Statement",permalink:"/jimmer/docs/mutation/delete-statement"},next:{title:"Basic Usage",permalink:"/jimmer/docs/mutation/save-command/usage"}},c={},l=[],s={toc:l};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Save commands are a very powerful capability of Jimmer that can greatly simplify the development difficulty of persisting complex data structures."),(0,r.kt)("p",null,"If ",(0,r.kt)("a",{parentName:"p",href:"../../query/object-fetcher"},"object fetchers")," enable output data to be in any shape, then save commands allow input data to also be in any shape."),(0,r.kt)("p",null,"For readers familiar with web frontend technologies, this can be analogized to ",(0,r.kt)("inlineCode",{parentName:"p"},"Virtual DOM diff")," in ",(0,r.kt)("a",{parentName:"p",href:"https://react.dev/"},"React")," or ",(0,r.kt)("a",{parentName:"p",href:"https://vuejs.org/"},"Vue"),"."),(0,r.kt)("p",null,"Calling a save command only takes one line of code, but hides countless details internally that documentation cannot exhaustively enumerate. Therefore, save commands have a dedicated sample project:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Java: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/babyfish-ct/jimmer/tree/main/example/java/save-command"},"example/java/save-command")," ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Kotlin: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/babyfish-ct/jimmer/tree/main/example/kotlin/save-command-kt"},"example/kotlin/save-command-kt")))),(0,r.kt)("p",null,"Simply open either one in an IDE, and run the unit tests."))}p.isMDXComponent=!0}}]);