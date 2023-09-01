"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1730],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),m=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=m(a),d=n,h=c["".concat(s,".").concat(d)]||c[d]||p[d]||o;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var m=2;m<o;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},67720:(e,t,a)=>{a.d(t,{Z:()=>v});var r=a(80102),n=a(83117),o=a(67294),i=a(93680),l=a(94780),s=a(41796),m=a(90948),u=a(71657),p=a(35097),c=a(85893);const d=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],h=(0,m.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.absolute&&t.absolute,t[a.variant],a.light&&t.light,"vertical"===a.orientation&&t.vertical,a.flexItem&&t.flexItem,a.children&&t.withChildren,a.children&&"vertical"===a.orientation&&t.withChildrenVertical,"right"===a.textAlign&&"vertical"!==a.orientation&&t.textAlignRight,"left"===a.textAlign&&"vertical"!==a.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,n.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,s.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({ownerState:e})=>(0,n.Z)({},e.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}})),(({theme:e,ownerState:t})=>(0,n.Z)({},t.children&&"vertical"!==t.orientation&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`}})),(({theme:e,ownerState:t})=>(0,n.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(e.vars||e).palette.divider}`}})),(({ownerState:e})=>(0,n.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),f=(0,m.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.wrapper,"vertical"===a.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,n.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}))),v=o.forwardRef((function(e,t){const a=(0,u.Z)({props:e,name:"MuiDivider"}),{absolute:o=!1,children:s,className:m,component:v=(s?"div":"hr"),flexItem:k=!1,light:g=!1,orientation:C="horizontal",role:w=("hr"!==v?"separator":void 0),textAlign:b="center",variant:y="fullWidth"}=a,N=(0,r.Z)(a,d),J=(0,n.Z)({},a,{absolute:o,component:v,flexItem:k,light:g,orientation:C,role:w,textAlign:b,variant:y}),x=(e=>{const{absolute:t,children:a,classes:r,flexItem:n,light:o,orientation:i,textAlign:s,variant:m}=e,u={root:["root",t&&"absolute",m,o&&"light","vertical"===i&&"vertical",n&&"flexItem",a&&"withChildren",a&&"vertical"===i&&"withChildrenVertical","right"===s&&"vertical"!==i&&"textAlignRight","left"===s&&"vertical"!==i&&"textAlignLeft"],wrapper:["wrapper","vertical"===i&&"wrapperVertical"]};return(0,l.Z)(u,p.V,r)})(J);return(0,c.jsx)(h,(0,n.Z)({as:v,className:(0,i.Z)(x.root,m),role:w,ref:t,ownerState:J},N,{children:s?(0,c.jsx)(f,{className:x.wrapper,ownerState:J,children:s}):null}))}))},35097:(e,t,a)=>{a.d(t,{V:()=>o,Z:()=>i});var r=a(1588),n=a(34867);function o(e){return(0,n.Z)("MuiDivider",e)}const i=(0,r.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"])},47167:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a(67294).createContext(void 0)},15704:(e,t,a)=>{function r({props:e,states:t,muiFormControl:a}){return t.reduce(((t,r)=>(t[r]=e[r],a&&void 0===e[r]&&(t[r]=a[r]),t)),{})}a.d(t,{Z:()=>r})},74423:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(47167);function o(){return r.useContext(n.Z)}},15861:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(80102),n=a(83117),o=a(67294),i=a(93680),l=a(39707),s=a(94780),m=a(90948),u=a(71657),p=a(98216),c=a(1588),d=a(34867);function h(e){return(0,d.Z)("MuiTypography",e)}(0,c.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var f=a(85893);const v=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],k=(0,m.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.variant&&t[a.variant],"inherit"!==a.align&&t[`align${(0,p.Z)(a.align)}`],a.noWrap&&t.noWrap,a.gutterBottom&&t.gutterBottom,a.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,n.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),g={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},C={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},w=o.forwardRef((function(e,t){const a=(0,u.Z)({props:e,name:"MuiTypography"}),o=(e=>C[e]||e)(a.color),m=(0,l.Z)((0,n.Z)({},a,{color:o})),{align:c="inherit",className:d,component:w,gutterBottom:b=!1,noWrap:y=!1,paragraph:N=!1,variant:J="body1",variantMapping:x=g}=m,D=(0,r.Z)(m,v),S=(0,n.Z)({},m,{align:c,color:o,className:d,component:w,gutterBottom:b,noWrap:y,paragraph:N,variant:J,variantMapping:x}),E=w||(N?"p":x[J]||g[J])||"span",O=(e=>{const{align:t,gutterBottom:a,noWrap:r,paragraph:n,variant:o,classes:i}=e,l={root:["root",o,"inherit"!==e.align&&`align${(0,p.Z)(t)}`,a&&"gutterBottom",r&&"noWrap",n&&"paragraph"]};return(0,s.Z)(l,h,i)})(S);return(0,f.jsx)(k,(0,n.Z)({as:E,ref:t,ownerState:S,className:(0,i.Z)(O.root,d)},D))}))},72021:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(67294);const n=function({controlled:e,default:t,name:a,state:n="value"}){const{current:o}=r.useRef(void 0!==e),[i,l]=r.useState(t);return[o?e:i,r.useCallback((e=>{o||l(e)}),[])]}},39707:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(83117),n=a(80102),o=a(59766),i=a(44920);const l=["sx"];function s(e){const{sx:t}=e,a=(0,n.Z)(e,l),{systemProps:s,otherProps:m}=(e=>{var t,a;const r={systemProps:{},otherProps:{}},n=null!=(t=null==e||null==(a=e.theme)?void 0:a.unstable_sxConfig)?t:i.Z;return Object.keys(e).forEach((t=>{n[t]?r.systemProps[t]=e[t]:r.otherProps[t]=e[t]})),r})(a);let u;return u=Array.isArray(t)?[s,...t]:"function"==typeof t?(...e)=>{const a=t(...e);return(0,o.P)(a)?(0,r.Z)({},s,a):s}:(0,r.Z)({},s,t),(0,r.Z)({},m,{sx:u})}},10209:(e,t,a)=>{function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}a.d(t,{Z:()=>n});const n=function(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(34334);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,i),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(83117),n=a(67294),o=a(34334),i=a(72389),l=a(67392),s=a(7094),m=a(12466);const u="tabList__CuJ",p="tabItem_LNqP";function c(e){var t;const{lazy:a,block:i,defaultValue:c,values:d,groupId:h,className:f}=e,v=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??v.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),g=(0,l.l)(k,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const C=null===c?c:c??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==C&&!k.some((e=>e.value===C)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${C}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:b}=(0,s.U)(),[y,N]=(0,n.useState)(C),J=[],{blockElementScrollPositionUntilNextRender:x}=(0,m.o5)();if(null!=h){const e=w[h];null!=e&&e!==y&&k.some((t=>t.value===e))&&N(e)}const D=e=>{const t=e.currentTarget,a=J.indexOf(t),r=k[a].value;r!==y&&(x(t),N(r),null!=h&&b(h,String(r)))},S=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=J.indexOf(e.currentTarget)+1;a=J[t]??J[0];break}case"ArrowLeft":{const t=J.indexOf(e.currentTarget)-1;a=J[t]??J[J.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},f)},k.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>J.push(e),onKeyDown:S,onFocus:D,onClick:D},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":y===t})}),a??t)}))),a?(0,n.cloneElement)(v.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function d(e){const t=(0,i.Z)();return n.createElement(c,(0,r.Z)({key:String(t)},e))}},32360:(e,t,a)=>{a.d(t,{L:()=>v});var r=a(67294),n=a(63012),o=a(7906),i=a(295),l=a(53252),s=a(53184),m=a(53816),u=a(65488),p=a(85162),c=a(53457),d=a(50480),h=a(85071),f=a(67720);const v=e=>{let{type:t,locale:a}=e;const[n,o]=(0,r.useState)("OPS"!==t),i=(0,r.useCallback)(((e,t)=>{o(t)}),[]);return r.createElement(u.Z,{groupId:"chart-mode"},r.createElement(p.Z,{value:"chart",label:"zh"===a?"\u56fe\u8868":"Chart",default:!0},"OPS"===t&&r.createElement(r.Fragment,null,r.createElement(c.Z,null,r.createElement(d.Z,{control:r.createElement(h.Z,{value:n,onChange:i}),label:"zh"===a?"\u663e\u793a\u539f\u751fJDBC\u6307\u6807":"Show native JDBC metrics"})),r.createElement(f.Z,null)),"OPS"==t?r.createElement(k,{rows:y,scale:C,showJdbc:n}):r.createElement(k,{rows:N,scale:w,showJdbc:n})),r.createElement(p.Z,{value:"data",label:"zh"===a?"\u6570\u636e":"Data"},"OPS"===t?r.createElement(g,{rows:x,valueTitle:"Ops/s"}):r.createElement(g,{rows:D,valueTitle:"Time(\u03bcs)"})))},k=e=>{let{rows:t,scale:a,showJdbc:o}=e;return r.createElement(n.Chart,{filter:o?void 0:{framework:e=>!e.startsWith("JDBC")},height:400,padding:"auto",data:t,scale:a,autoFit:!0},r.createElement(n.Interval,{adjust:[{type:"dodge",marginRatio:0}],color:"framework",position:"dataCount*value"}),r.createElement(n.Axis,{name:"value",title:!0}),r.createElement(n.Legend,{position:"left"}),r.createElement(n.Tooltip,{shared:!0}),r.createElement(n.Interaction,{type:"active-region"}))},g=e=>{let{rows:t,valueTitle:a}=e;return r.createElement(o.Z,null,r.createElement(s.Z,null,r.createElement(m.Z,null,r.createElement(l.Z,null,"Framework"),r.createElement(l.Z,null,"Data count"),r.createElement(l.Z,null,a))),r.createElement(i.Z,null,t.map((e=>r.createElement(m.Z,{key:`${e.framework}-${e.dataCount}`},r.createElement(l.Z,null,e.framework),r.createElement(l.Z,null,e.dataCount),r.createElement(l.Z,null,e.value))))))},C={dataCount:{alias:"Data count"},value:{alias:"Ops/s"}},w={dataCount:{alias:"Data count"},value:{alias:"Time(\u03bcs)"}},b=[{framework:"JDBC(ColIndex)",dataCount:"10",value:668548},{framework:"JDBC(ColIndex)",dataCount:"20",value:485607},{framework:"JDBC(ColIndex)",dataCount:"50",value:260938},{framework:"JDBC(ColIndex)",dataCount:"100",value:133789},{framework:"JDBC(ColIndex)",dataCount:"200",value:71362},{framework:"JDBC(ColIndex)",dataCount:"500",value:32131},{framework:"JDBC(ColIndex)",dataCount:"1000",value:16088},{framework:"JDBC(ColName)",dataCount:"10",value:340571},{framework:"JDBC(ColName)",dataCount:"20",value:239359},{framework:"JDBC(ColName)",dataCount:"50",value:128565},{framework:"JDBC(ColName)",dataCount:"100",value:70058},{framework:"JDBC(ColName)",dataCount:"200",value:38895},{framework:"JDBC(ColName)",dataCount:"500",value:16152},{framework:"JDBC(ColName)",dataCount:"1000",value:8172},{framework:"Jimmer(Java)",dataCount:"10",value:348417},{framework:"Jimmer(Java)",dataCount:"20",value:251418},{framework:"Jimmer(Java)",dataCount:"50",value:135241},{framework:"Jimmer(Java)",dataCount:"100",value:78190},{framework:"Jimmer(Java)",dataCount:"200",value:41688},{framework:"Jimmer(Java)",dataCount:"500",value:17355},{framework:"Jimmer(Java)",dataCount:"1000",value:8815},{framework:"Jimmer(Kotlin)",dataCount:"10",value:339465},{framework:"Jimmer(Kotlin)",dataCount:"20",value:245564},{framework:"Jimmer(Kotlin)",dataCount:"50",value:133790},{framework:"Jimmer(Kotlin)",dataCount:"100",value:74563},{framework:"Jimmer(Kotlin)",dataCount:"200",value:39329},{framework:"Jimmer(Kotlin)",dataCount:"500",value:16647},{framework:"Jimmer(Kotlin)",dataCount:"1000",value:8717},{framework:"EasyQuery",dataCount:"10",value:225383},{framework:"EasyQuery",dataCount:"20",value:144832},{framework:"EasyQuery",dataCount:"50",value:76663},{framework:"EasyQuery",dataCount:"100",value:39687},{framework:"EasyQuery",dataCount:"200",value:20858},{framework:"EasyQuery",dataCount:"500",value:8452},{framework:"EasyQuery",dataCount:"1000",value:4511},{framework:"MyBatis",dataCount:"10",value:75843},{framework:"MyBatis",dataCount:"20",value:43330},{framework:"MyBatis",dataCount:"50",value:19353},{framework:"MyBatis",dataCount:"100",value:10430},{framework:"MyBatis",dataCount:"200",value:5273},{framework:"MyBatis",dataCount:"500",value:2099},{framework:"MyBatis",dataCount:"1000",value:1070},{framework:"Exposed",dataCount:"10",value:92778},{framework:"Exposed",dataCount:"20",value:61642},{framework:"Exposed",dataCount:"50",value:30785},{framework:"Exposed",dataCount:"100",value:16518},{framework:"Exposed",dataCount:"200",value:9050},{framework:"Exposed",dataCount:"500",value:3831},{framework:"Exposed",dataCount:"1000",value:1950},{framework:"JPA(Hibernate)",dataCount:"10",value:102253},{framework:"JPA(Hibernate)",dataCount:"20",value:59467},{framework:"JPA(Hibernate)",dataCount:"50",value:26257},{framework:"JPA(Hibernate)",dataCount:"100",value:13539},{framework:"JPA(Hibernate)",dataCount:"200",value:6977},{framework:"JPA(Hibernate)",dataCount:"500",value:2791},{framework:"JPA(Hibernate)",dataCount:"1000",value:1396},{framework:"JPA(EclipseLink)",dataCount:"10",value:64726},{framework:"JPA(EclipseLink)",dataCount:"20",value:33448},{framework:"JPA(EclipseLink)",dataCount:"50",value:13420},{framework:"JPA(EclipseLink)",dataCount:"100",value:6473},{framework:"JPA(EclipseLink)",dataCount:"200",value:3378},{framework:"JPA(EclipseLink)",dataCount:"500",value:1362},{framework:"JPA(EclipseLink)",dataCount:"1000",value:667},{framework:"JOOQ",dataCount:"10",value:68624},{framework:"JOOQ",dataCount:"20",value:35257},{framework:"JOOQ",dataCount:"50",value:15514},{framework:"JOOQ",dataCount:"100",value:7871},{framework:"JOOQ",dataCount:"200",value:4856},{framework:"JOOQ",dataCount:"500",value:1895},{framework:"JOOQ",dataCount:"1000",value:879},{framework:"Nutz",dataCount:"10",value:70429},{framework:"Nutz",dataCount:"20",value:38999},{framework:"Nutz",dataCount:"50",value:17200},{framework:"Nutz",dataCount:"100",value:8268},{framework:"Nutz",dataCount:"200",value:4629},{framework:"Nutz",dataCount:"500",value:1859},{framework:"Nutz",dataCount:"1000",value:957},{framework:"ObjectiveSQL",dataCount:"10",value:47800},{framework:"ObjectiveSQL",dataCount:"20",value:30930},{framework:"ObjectiveSQL",dataCount:"50",value:13229},{framework:"ObjectiveSQL",dataCount:"100",value:6633},{framework:"ObjectiveSQL",dataCount:"200",value:3289},{framework:"ObjectiveSQL",dataCount:"500",value:1338},{framework:"ObjectiveSQL",dataCount:"1000",value:617},{framework:"Spring Data JDBC",dataCount:"10",value:20647},{framework:"Spring Data JDBC",dataCount:"20",value:10672},{framework:"Spring Data JDBC",dataCount:"50",value:4452},{framework:"Spring Data JDBC",dataCount:"100",value:2032},{framework:"Spring Data JDBC",dataCount:"200",value:1084},{framework:"Spring Data JDBC",dataCount:"500",value:460},{framework:"Spring Data JDBC",dataCount:"1000",value:233},{framework:"Ktorm",dataCount:"10",value:18816},{framework:"Ktorm",dataCount:"20",value:10157},{framework:"Ktorm",dataCount:"50",value:4185},{framework:"Ktorm",dataCount:"100",value:2137},{framework:"Ktorm",dataCount:"200",value:1036},{framework:"Ktorm",dataCount:"500",value:361},{framework:"Ktorm",dataCount:"1000",value:229}],y=b.map((e=>({...e,value:Math.round(e.value)}))),N=b.map((e=>({...e,value:Math.round(1e6/e.value)})));function J(e,t){return parseInt(e.dataCount)-parseInt(t.dataCount)}const x=y.sort(J),D=N.sort(J)},24379:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=a(83117),n=(a(67294),a(3905)),o=a(32360);const i={sidebar_position:4,title:"Benchmark Report"},l=void 0,s={unversionedId:"overview/benchmark",id:"overview/benchmark",title:"Benchmark Report",description:"The source code for benchmarking is here, using H2 in-memory database, no environment preparation needed to run directly.",source:"@site/docs/overview/benchmark.mdx",sourceDirName:"overview",slug:"/overview/benchmark",permalink:"/jimmer/docs/overview/benchmark",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/overview/benchmark.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Benchmark Report"},sidebar:"tutorialSidebar",previous:{title:"Final Usage",permalink:"/jimmer/docs/overview/get-started/usage"},next:{title:"Mapping",permalink:"/jimmer/docs/mapping/"}},m={},u=[{value:"Report",id:"report",level:2},{value:"Operations Per Second",id:"operations-per-second",level:3},{value:"Operation Time",id:"operation-time",level:3},{value:"Implementation Principles",id:"implementation-principles",level:2},{value:"Value",id:"value",level:2},{value:"Why so fast?",id:"why-so-fast",level:2}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The source code for benchmarking is ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/babyfish-ct/jimmer/tree/main/benchmark"},"here"),", using H2 in-memory database, no environment preparation needed to run directly."),(0,n.kt)("h2",{id:"report"},"Report"),(0,n.kt)("h3",{id:"operations-per-second"},"Operations Per Second"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The x-axis indicates the number of data objects queried from the database each time."),(0,n.kt)("li",{parentName:"ul"},"The y-axis indicates the number of operations per second.")),(0,n.kt)(o.L,{type:"OPS",locale:"en",mdxType:"Benchmark"}),(0,n.kt)("h3",{id:"operation-time"},"Operation Time"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The x-axis indicates the number of data objects queried from the database each time."),(0,n.kt)("li",{parentName:"ul"},"The y-axis indicates the operation time (microseconds) for each operation.")),(0,n.kt)(o.L,{type:"TIME",locale:"en",mdxType:"Benchmark"}),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Since Spring removed support for OpenJPA, this benchmark test does not include ",(0,n.kt)("inlineCode",{parentName:"p"},"JPA(OpenJPA)"),". ")),(0,n.kt)("h2",{id:"implementation-principles"},"Implementation Principles"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Disable caching for all frameworks")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Turn off logs for all frameworks")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"For all frameworks, open and close connections/sessions each time, no sharing; rely on connection pools to ensure performance.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use Spring's connection management mechanism. The implementation is slightly different due to the different APIs of different frameworks."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Some use ",(0,n.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/jdbc/datasource/DataSourceUtils.html"},"DataSourceUtils"),"'s getConnection and releaseConnection"),(0,n.kt)("li",{parentName:"ul"},"Some use ",(0,n.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/jdbc/datasource/TransactionAwareDataSourceProxy.html"},"TransactionAwareDataSourceProxy"))),(0,n.kt)("p",{parentName:"li"},"But the end result is the same")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Do not use transactions"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"Exposed")," is special in that its API mandates transactions, so it is given a fake implementation.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use embedded H2 database to compress database overhead as much as possible, highlighting the performance of the ORM itself, i.e. the performance of mapping."))),(0,n.kt)("h2",{id:"value"},"Value"),(0,n.kt)("p",null,"A common view: the performance of the ORM itself is not important. In actual projects, the database is not an in-memory database, so the time consumed by the ORM itself is negligible compared to the time consumed by the database."),(0,n.kt)("p",null,"Rebuttal: After the release of Java 19, virtual threads are supported. The faster the ORM completes the mapping, the more virtual threads the JVM can schedule, which can increase system throughput."),(0,n.kt)("h2",{id:"why-so-fast"},"Why so fast?"),(0,n.kt)("p",null,"There are two programming styles in JDBC for reading values from ",(0,n.kt)("inlineCode",{parentName:"p"},"java.sql.ResultSet")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"JDBC(ColIndex)"),", i.e. reading by column index, ",(0,n.kt)("inlineCode",{parentName:"p"},"rs.getString(1)")," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"JDBC(ColName)"),", reading by column name: ",(0,n.kt)("inlineCode",{parentName:"p"},'rs.getString("VALUE_1")')))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"JDBC(ColIndex)")," is faster than ",(0,n.kt)("inlineCode",{parentName:"p"},"JDBC(ColName)"),", so Jimmer itself also uses ",(0,n.kt)("inlineCode",{parentName:"p"},"JDBC(ColIndex)")," as the underlying means of accessing ",(0,n.kt)("inlineCode",{parentName:"p"},"ResultSet"),", providing the possibility of exceeding the performance metrics of ",(0,n.kt)("inlineCode",{parentName:"p"},"JDBC(ColName)"),".  "),(0,n.kt)("p",null,"Now let's focus on discussing the two cases in the charts ",(0,n.kt)("em",{parentName:"p"},"(select native JDBC metrics)"),": "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Querying 10 rows of data each time, the OPS of ",(0,n.kt)("inlineCode",{parentName:"p"},"JDBC(ColName)")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Jimmer(Java)")," are close."),(0,n.kt)("p",{parentName:"li"},"In this scenario, the performance of Jimmer and ",(0,n.kt)("inlineCode",{parentName:"p"},"JDBC(ColName)")," is similar. The test code of ",(0,n.kt)("inlineCode",{parentName:"p"},"JDBC(ColName)")," directly hardcodes the SQL, while Jimmer needs to dynamically construct the SQL using the DSL mechanism, from which perspective Jimmer should be slower. However, the process of Jimmer converting ",(0,n.kt)("inlineCode",{parentName:"p"},"ResultSet")," to objects is faster than ",(0,n.kt)("inlineCode",{parentName:"p"},"JDBC(ColName)"),", canceling each other out. So the performance is similar."),(0,n.kt)("p",{parentName:"li"},"Of course, the SQL statement used in Benchmark is not complex. If more complex SQL is used, the hardcoded SQL ",(0,n.kt)("inlineCode",{parentName:"p"},"JDBC(ColName)")," will be faster, which is also an area Jimmer can optimize in subsequent versions.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Querying 1000 rows of data each time, Jimmer's ops are significantly higher than ",(0,n.kt)("inlineCode",{parentName:"p"},"JDBC(ColName)"),"'s OPS."),(0,n.kt)("p",{parentName:"li"},"In this case, the performance advantage of Jimmer converting ",(0,n.kt)("inlineCode",{parentName:"p"},"ResultSet")," to objects is fully demonstrated. Even if Jimmer slowed down due to dynamically generating SQL using DSL, the overall result is still faster than ",(0,n.kt)("inlineCode",{parentName:"p"},"JDBC(ColName)"),"."),(0,n.kt)("p",{parentName:"li"},"The main reasons why Jimmer converts ",(0,n.kt)("inlineCode",{parentName:"p"},"ResultSet")," to objects so fast are:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"JDBC(ColIndex)")," at the bottom layer")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Do not use Java reflection to dynamically set properties for objects."),(0,n.kt)("p",{parentName:"li"},"At compile time, Jimmer generates a modifiable ",(0,n.kt)("inlineCode",{parentName:"p"},"DraftImpl")," class for each immutable entity type, which provides a generic ",(0,n.kt)("inlineCode",{parentName:"p"},"__set(PropId propId, Object value)")," method to achieve dynamic setting of object properties similar to Java reflection."),(0,n.kt)("p",{parentName:"li"},"At the same time, the compiler assigns each property an integer as id. The ",(0,n.kt)("inlineCode",{parentName:"p"},"__set")," method in the ",(0,n.kt)("inlineCode",{parentName:"p"},"DraftImpl")," class uses a ",(0,n.kt)("inlineCode",{parentName:"p"},"switch")," statement internally to identify the passed property id. For example, the generated Java code is:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},"@Override\npublic void __set(PropId prop, Object value) {\n    int __propIndex = prop.asIndex();\n    switch (__propIndex) {\n        case -1:\n            __set(prop.asName(), value);\n            return;\n        // highlight-next-line\n        case 0:  \n            setId((Long)value);\n            break;\n        // highlight-next-line\n        case 1:\n            setName((String)value);\n            break;\n        // highlight-next-line \n        case 2:\n            setEdition((Integer)value);\n            break;\n        ...Omitted...\n    }\n}\n")),(0,n.kt)("p",{parentName:"li"},"Modern compilers have sufficient optimization for such integer-based ",(0,n.kt)("inlineCode",{parentName:"p"},"switch")," statements, so it can be considered that Jimmer's dynamic assignment of entity objects is not much slower than the hardcoded JDBC test code."))))),(0,n.kt)("p",null,"These two reasons are the most important reasons why Jimmer's object mapping performance is so high."))}c.isMDXComponent=!0}}]);