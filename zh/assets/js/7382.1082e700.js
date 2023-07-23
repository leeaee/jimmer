"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[7382,8766,2062,5578],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=i,v=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(v,o(o({ref:t},s),{},{components:r})):n.createElement(v,o({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},67720:function(e,t,r){var n=r(80102),i=r(83117),a=r(67294),o=r(93680),l=r(94780),c=r(41796),u=r(90948),s=r(71657),d=r(35097),p=r(85893);const f=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],v=(0,u.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,i.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,c.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({ownerState:e})=>(0,i.Z)({},e.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}})),(({theme:e,ownerState:t})=>(0,i.Z)({},t.children&&"vertical"!==t.orientation&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`}})),(({theme:e,ownerState:t})=>(0,i.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(e.vars||e).palette.divider}`}})),(({ownerState:e})=>(0,i.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),h=(0,u.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,i.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}))),m=a.forwardRef((function(e,t){const r=(0,s.Z)({props:e,name:"MuiDivider"}),{absolute:a=!1,children:c,className:u,component:m=(c?"div":"hr"),flexItem:b=!1,light:g=!1,orientation:w="horizontal",role:y=("hr"!==m?"separator":void 0),textAlign:x="center",variant:O="fullWidth"}=r,Z=(0,n.Z)(r,f),E=(0,i.Z)({},r,{absolute:a,component:m,flexItem:b,light:g,orientation:w,role:y,textAlign:x,variant:O}),S=(e=>{const{absolute:t,children:r,classes:n,flexItem:i,light:a,orientation:o,textAlign:c,variant:u}=e,s={root:["root",t&&"absolute",u,a&&"light","vertical"===o&&"vertical",i&&"flexItem",r&&"withChildren",r&&"vertical"===o&&"withChildrenVertical","right"===c&&"vertical"!==o&&"textAlignRight","left"===c&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,l.Z)(s,d.V,n)})(E);return(0,p.jsx)(v,(0,i.Z)({as:m,className:(0,o.Z)(S.root,u),role:y,ref:t,ownerState:E},Z,{children:c?(0,p.jsx)(h,{className:S.wrapper,ownerState:E,children:c}):null}))}));t.Z=m},35097:function(e,t,r){r.d(t,{V:function(){return a}});var n=r(1588),i=r(34867);function a(e){return(0,i.Z)("MuiDivider",e)}const o=(0,n.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=o},85162:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(67294),i=r(34334),a="tabItem_Ymn6";function o(e){var t=e.children,r=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(a,o),hidden:r},t)}},65488:function(e,t,r){r.d(t,{Z:function(){return f}});var n=r(83117),i=r(67294),a=r(34334),o=r(72389),l=r(67392),c=r(7094),u=r(12466),s="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,r,o=e.lazy,p=e.block,f=e.defaultValue,v=e.values,h=e.groupId,m=e.className,b=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=v?v:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),w=(0,l.l)(g,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===f?f:null!=(t=null!=f?f:null==(r=b.find((function(e){return e.props.default})))?void 0:r.props.value)?t:b[0].props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,c.U)(),O=x.tabGroupChoices,Z=x.setTabGroupChoices,E=(0,i.useState)(y),S=E[0],T=E[1],j=[],C=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var A=O[h];null!=A&&A!==S&&g.some((function(e){return e.value===A}))&&T(A)}var k=function(e){var t=e.currentTarget,r=j.indexOf(t),n=g[r].value;n!==S&&(C(t),T(n),null!=h&&Z(h,String(n)))},N=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n,i=j.indexOf(e.currentTarget)+1;r=null!=(n=j[i])?n:j[0];break;case"ArrowLeft":var a,o=j.indexOf(e.currentTarget)-1;r=null!=(a=j[o])?a:j[j.length-1]}null==(t=r)||t.focus()};return i.createElement("div",{className:(0,a.Z)("tabs-container",s)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},m)},g.map((function(e){var t=e.value,r=e.label,o=e.attributes;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return j.push(e)},onKeyDown:N,onFocus:k,onClick:k},o,{className:(0,a.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":S===t})}),null!=r?r:t)}))),o?(0,i.cloneElement)(b.filter((function(e){return e.props.value===S}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function f(e){var t=(0,o.Z)();return i.createElement(p,(0,n.Z)({key:String(t)},e))}}}]);