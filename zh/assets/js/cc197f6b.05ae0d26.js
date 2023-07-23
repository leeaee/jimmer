"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5091],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,d=p["".concat(l,".").concat(f)]||p[f]||s[f]||o;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},39511:function(e,t,n){n.d(t,{b:function(){return k}});var r=n(83117),a=n(83321),o=n(50657),i=n(42293),c=n(10155),l=n(15861),u=n(6514),m=n(67294),s=n(54776),p=n(93946),f=n(9137),d=n(61274),b=n(50594),k=(0,m.memo)((function(e){var t=e.buttonText,n=e.fullScreen,r=void 0!==n&&n,s=e.title,k=void 0===s?t:s,v=e.variant,h=void 0===v?"contained":v,g=e.children,w=(0,m.useState)(!1),x=w[0],O=w[1],E=(0,m.useState)(r),j=E[0],Z=E[1],C=(0,m.useCallback)((function(){O(!0)}),[]),T=(0,m.useCallback)((function(){O(!1)}),[]),P=(0,m.useCallback)((function(){Z((function(e){return!e}))}),[]);return m.createElement(m.Fragment,null,m.createElement(a.Z,{onClick:C,variant:h,size:"outlined"==h?"small":"medium"},t),m.createElement(o.Z,{open:x,onClose:T,fullScreen:j,TransitionComponent:y,maxWidth:"md"},m.createElement(i.Z,{sx:{position:"relative"}},m.createElement(c.Z,null,m.createElement(l.Z,{sx:{ml:2,flex:1},variant:"h6",component:"div"},k),m.createElement(p.Z,{onClick:P,style:{color:"white"}},j?m.createElement(d.Z,null):m.createElement(f.Z,null)),m.createElement(p.Z,{"aria-label":"close",onClick:T,style:{color:"white"}},m.createElement(b.Z,null)))),m.createElement(u.Z,null,g)))})),y=m.forwardRef((function(e,t){return m.createElement(s.Z,(0,r.Z)({direction:"up",ref:t},e))}))},16062:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return m},metadata:function(){return p},toc:function(){return d}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=n(39511),c=n(66501),l=n(36701),u=["components"],m={sidebar_position:5,title:"\u7f13\u5b58\u7bc7"},s=void 0,p={unversionedId:"team-work/cache/index",id:"team-work/cache/index",title:"\u7f13\u5b58\u7bc7",description:"Jimmer\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u7f13\u5b58\u652f\u6301\u80fd\u529b\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/team-work/cache/index.mdx",sourceDirName:"team-work/cache",slug:"/team-work/cache/",permalink:"/jimmer/zh/docs/team-work/cache/",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/team-work/cache/index.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"\u7f13\u5b58\u7bc7"},sidebar:"tutorialSidebar",previous:{title:"\u89e6\u53d1\u5668",permalink:"/jimmer/zh/docs/team-work/mutation/trigger"},next:{title:"\u542f\u7528\u7f13\u5b58",permalink:"/jimmer/zh/docs/team-work/cache/enable-cache"}},f={},d=[],b={toc:d};function k(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Jimmer\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u7f13\u5b58\u652f\u6301\u80fd\u529b\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u662f\u5426\u4f7f\u7528\u7f13\u5b58\uff0c\u5bf9\u5f00\u53d1\u4eba\u5458\u5b8c\u5168\u900f\u660e")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u4f7f\u7528\u54ea\u4e9b\u7f13\u5b58\u6280\u672f\uff0c\u7531\u5f00\u53d1\u4eba\u5458\u51b3\u5b9a")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u4e0d\u4ec5\u652f\u6301\u7b80\u5355\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"id->\u5bf9\u8c61"),"\u7f13\u5b58\uff0c\u8fd8\u652f\u6301\u5c5e\u6027\u7ea7\u7f13\u5b58\uff0c\u5305\u62ec",(0,o.kt)(i.b,{buttonText:"\u5173\u8054\u7f13\u5b58",variant:"text",mdxType:"ViewMore"},(0,o.kt)("img",{src:c.Z})),"\u548c",(0,o.kt)(i.b,{buttonText:"\u8ba1\u7b97\u7f13\u5b58",variant:"text",mdxType:"ViewMore"},(0,o.kt)("img",{src:l.Z})),"\u3002\n\u6700\u7ec8\u63d0\u4f9b\u4efb\u610f\u5f62\u72b6\u7684\u6570\u636e\u7ed3\u6784\u7684\u7f13\u5b58\u80fd\u529b\uff0c\u800c\u975e\u7b80\u5355\u5bf9\u8c61\u7684\u7f13\u5b58\u80fd\u529b")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5f3a\u5927\u7684\u7f13\u5b58\u4e00\u81f4\u6027\u652f\u6301\uff0c\u5f00\u53d1\u4eba\u5458\u4e13\u6ce8\u4e8e\u4fee\u6539\u6570\u636e\u5e93\u5373\u53ef\uff0cJimmer\u81ea\u52a8\u4fdd\u8bc1\u7f13\u5b58\u548c\u6570\u636e\u5e93\u6570\u636e\u7684\u4e00\u81f4\u6027"))))}k.isMDXComponent=!0},66501:function(e,t,n){t.Z=n.p+"assets/images/association-cache-a56183bba7a369821e88cbfb277c9464.png"},36701:function(e,t,n){t.Z=n.p+"assets/images/calculated-cache-fed29948e1b2f8fb93bf45851e5668b3.png"}}]);