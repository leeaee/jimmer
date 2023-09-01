"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[4334],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>p});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),c=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return o.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},v=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),v=c(t),p=n,f=v["".concat(s,".").concat(p)]||v[p]||d[p]||a;return t?o.createElement(f,i(i({ref:r},u),{},{components:t})):o.createElement(f,i({ref:r},u))}));function p(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=v;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}v.displayName="MDXCreateElement"},93946:(e,r,t)=>{t.d(r,{Z:()=>Z});var o=t(80102),n=t(83117),a=t(67294),i=t(93680),l=t(94780),s=t(41796),c=t(90948),u=t(71657),d=t(74976),v=t(98216),p=t(1588),f=t(34867);function m(e){return(0,f.Z)("MuiIconButton",e)}const b=(0,p.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]);var g=t(85893);const y=["edge","children","className","color","disabled","disableFocusRipple","size"],h=(0,c.ZP)(d.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,"default"!==t.color&&r[`color${(0,v.Z)(t.color)}`],t.edge&&r[`edge${(0,v.Z)(t.edge)}`],r[`size${(0,v.Z)(t.size)}`]]}})((({theme:e,ownerState:r})=>(0,n.Z)({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!r.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===r.edge&&{marginLeft:"small"===r.size?-3:-12},"end"===r.edge&&{marginRight:"small"===r.size?-3:-12})),(({theme:e,ownerState:r})=>{var t;const o=null==(t=(e.vars||e).palette)?void 0:t[r.color];return(0,n.Z)({},"inherit"===r.color&&{color:"inherit"},"inherit"!==r.color&&"default"!==r.color&&(0,n.Z)({color:null==o?void 0:o.main},!r.disableRipple&&{"&:hover":(0,n.Z)({},o&&{backgroundColor:e.vars?`rgba(${o.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.Fq)(o.main,e.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===r.size&&{padding:5,fontSize:e.typography.pxToRem(18)},"large"===r.size&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${b.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})})),Z=a.forwardRef((function(e,r){const t=(0,u.Z)({props:e,name:"MuiIconButton"}),{edge:a=!1,children:s,className:c,color:d="default",disabled:p=!1,disableFocusRipple:f=!1,size:b="medium"}=t,Z=(0,o.Z)(t,y),O=(0,n.Z)({},t,{edge:a,color:d,disabled:p,disableFocusRipple:f,size:b}),w=(e=>{const{classes:r,disabled:t,color:o,edge:n,size:a}=e,i={root:["root",t&&"disabled","default"!==o&&`color${(0,v.Z)(o)}`,n&&`edge${(0,v.Z)(n)}`,`size${(0,v.Z)(a)}`]};return(0,l.Z)(i,m,r)})(O);return(0,g.jsx)(h,(0,n.Z)({className:(0,i.Z)(w.root,c),centerRipple:!0,focusRipple:!f,disabled:p,ref:r,ownerState:O},Z,{children:s}))}))},90629:(e,r,t)=>{t.d(r,{Z:()=>y});var o=t(80102),n=t(83117),a=t(67294),i=t(93680),l=t(94780),s=t(41796),c=t(90948);const u=e=>{let r;return r=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(r/100).toFixed(2)};var d=t(71657),v=t(1588),p=t(34867);function f(e){return(0,p.Z)("MuiPaper",e)}(0,v.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var m=t(85893);const b=["className","component","elevation","square","variant"],g=(0,c.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],!t.square&&r.rounded,"elevation"===t.variant&&r[`elevation${t.elevation}`]]}})((({theme:e,ownerState:r})=>{var t;return(0,n.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!r.square&&{borderRadius:e.shape.borderRadius},"outlined"===r.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===r.variant&&(0,n.Z)({boxShadow:(e.vars||e).shadows[r.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,s.Fq)("#fff",u(r.elevation))}, ${(0,s.Fq)("#fff",u(r.elevation))})`},e.vars&&{backgroundImage:null==(t=e.vars.overlays)?void 0:t[r.elevation]}))})),y=a.forwardRef((function(e,r){const t=(0,d.Z)({props:e,name:"MuiPaper"}),{className:a,component:s="div",elevation:c=1,square:u=!1,variant:v="elevation"}=t,p=(0,o.Z)(t,b),y=(0,n.Z)({},t,{component:s,elevation:c,square:u,variant:v}),h=(e=>{const{square:r,elevation:t,variant:o,classes:n}=e,a={root:["root",o,!r&&"rounded","elevation"===o&&`elevation${t}`]};return(0,l.Z)(a,f,n)})(y);return(0,m.jsx)(g,(0,n.Z)({as:s,ownerState:y,className:(0,i.Z)(h.root,a),ref:r},p))}))},2734:(e,r,t)=>{t.d(r,{Z:()=>i});t(67294);var o=t(79718),n=t(90247),a=t(10606);function i(){const e=(0,o.Z)(n.Z);return e[a.Z]||e}},39707:(e,r,t)=>{t.d(r,{Z:()=>s});var o=t(83117),n=t(80102),a=t(59766),i=t(44920);const l=["sx"];function s(e){const{sx:r}=e,t=(0,n.Z)(e,l),{systemProps:s,otherProps:c}=(e=>{var r,t;const o={systemProps:{},otherProps:{}},n=null!=(r=null==e||null==(t=e.theme)?void 0:t.unstable_sxConfig)?r:i.Z;return Object.keys(e).forEach((r=>{n[r]?o.systemProps[r]=e[r]:o.otherProps[r]=e[r]})),o})(t);let u;return u=Array.isArray(r)?[s,...r]:"function"==typeof r?(...e)=>{const t=r(...e);return(0,a.P)(t)?(0,o.Z)({},s,t):s}:(0,o.Z)({},s,r),(0,o.Z)({},c,{sx:u})}}}]);