"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[3304],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=o,b=m["".concat(c,".").concat(d)]||m[d]||p[d]||r;return t?a.createElement(b,i(i({ref:n},u),{},{components:t})):a.createElement(b,i({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(67294),o=t(34334);const r="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(83117),o=t(67294),r=t(34334),i=t(72389),l=t(67392),c=t(7094),s=t(12466);const u="tabList__CuJ",p="tabItem_LNqP";function m(e){var n;const{lazy:t,block:i,defaultValue:m,values:d,groupId:b,className:g}=e,k=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??k.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),v=(0,l.l)(f,((e,n)=>e.value===n.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===m?m:m??(null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)??k[0].props.value;if(null!==h&&!f.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:x}=(0,c.U)(),[N,T]=(0,o.useState)(h),C=[],{blockElementScrollPositionUntilNextRender:j}=(0,s.o5)();if(null!=b){const e=y[b];null!=e&&e!==N&&f.some((n=>n.value===e))&&T(e)}const w=e=>{const n=e.currentTarget,t=C.indexOf(n),a=f[t].value;a!==N&&(j(n),T(a),null!=b&&x(b,String(a)))},E=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;t=C[n]??C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;t=C[n]??C[C.length-1];break}}null==(n=t)||n.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},g)},f.map((e=>{let{value:n,label:t,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:e=>C.push(e),onKeyDown:E,onFocus:w,onClick:w},i,{className:(0,r.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":N===n})}),t??n)}))),t?(0,o.cloneElement)(k.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==N})))))}function d(e){const n=(0,i.Z)();return o.createElement(m,(0,a.Z)({key:String(n)},e))}},66775:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=t(83117),o=(t(67294),t(3905)),r=t(65488),i=t(85162);const l={sidebar_position:2,title:"Connection Manager"},c=void 0,s={unversionedId:"configuration/connection-manager",id:"configuration/connection-manager",title:"Connection Manager",description:"In Jimmer, all executable statements and instructions support two execution modes:",source:"@site/docs/configuration/connection-manager.mdx",sourceDirName:"configuration",slug:"/configuration/connection-manager",permalink:"/jimmer/docs/configuration/connection-manager",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/configuration/connection-manager.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Connection Manager"},sidebar:"tutorialSidebar",previous:{title:"Dialect",permalink:"/jimmer/docs/configuration/dialect"},next:{title:"Batch Control",permalink:"/jimmer/docs/configuration/batch-size"}},u={},p=[{value:"Simple ConnectionManager",id:"simple-connectionmanager",level:2},{value:"ConnectionManager managed by Spring transaction",id:"connectionmanager-managed-by-spring-transaction",level:2}],m={toc:p};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In Jimmer, all executable statements and instructions support two execution modes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Execute based on the JDBC connection specified by the user  ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Executed by Jimmer automatically determining based on a JDBC connection"))),(0,o.kt)("p",null,"Here, take ",(0,o.kt)("inlineCode",{parentName:"p"},"Executable")," (Java) or ",(0,o.kt)("inlineCode",{parentName:"p"},"KExecutable")," (Kotlin) interface as an example"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Executable.java"',title:'"Executable.java"'},"package org.babyfish.jimmer.sql.ast;\n\nimport java.sql.Connection;\n\npublic interface Executable<R> {\n\n    R execute();\n\n    R execute(Connection con);\n}\n"))),(0,o.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="KExecutable.kt"',title:'"KExecutable.kt"'},"package org.babyfish.jimmer.sql.kt\n\nimport java.sql.Connection  \n\ninterface KExecutable<R> {\n  fun execute(con: Connection? = null): R\n}\n")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"execute(Connection)"),": Execute on the JDBC connection specified by the user."),(0,o.kt)("p",{parentName:"li"},"Take query as an example:"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},"BookTable book = BookTable.$;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .select(book)\n    // highlight-next-line\n    .execute(con);\n"))),(0,o.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val books = sqlClient\n    .createQuery(Book::class) {\n        select(table)\n    }\n    // highlight-next-line\n    .execute(con)\n"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"execute()")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"execute(null)"),": Determined by Jimmer to execute on a JDBC connection."),(0,o.kt)("p",{parentName:"li"},"Take query as an example:"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},"BookTable book = BookTable.$;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .select(book)\n    // highlight-next-line  \n    .execute();\n"))),(0,o.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val books = sqlClient\n    .createQuery(Book::class) {\n        select(table)\n    }\n    // highlight-next-line\n    .execute()\n")))))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To use the 1st behavior, no special configuration is required for SqlClient."),(0,o.kt)("p",{parentName:"admonition"},"To use the 2nd behavior, ",(0,o.kt)("inlineCode",{parentName:"p"},"ConnectionManager")," must be configured for SqlClient. Otherwise it will cause exceptions."),(0,o.kt)("p",{parentName:"admonition"},"Undoubtedly, the 2nd approach is more in line with the requirements of business system development, so it is recommended. So it is strongly recommended to configure ",(0,o.kt)("inlineCode",{parentName:"p"},"ConnectionManager")," for SqlClient.")),(0,o.kt)("h2",{id:"simple-connectionmanager"},"Simple ConnectionManager"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"javax.sql.DataSource dataSource = ...;\n\nJSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setConnectionManager(\n        ConnectionManager\n        // highlight-next-line\n        .simpleConnectionManager(dataSource)\n    )\n    .builde(); \n"))),(0,o.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val dataSource: javax.sql.DataSource = ...\n\nval sqlClient = newKSqlClient {\n    setConnectionManager {\n        ConnectionManager\n        dataSoruce.connection.use {\n            // highlight-next-line\n            proceed(it)\n        }\n    }\n}\n")))),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"This way is only responsible for getting connections from DataSource and has no transaction management mechanism."),(0,o.kt)("p",{parentName:"admonition"},"However, transactions are very important in actual projects. Therefore, except for learning and trying, it is not recommended to use this approach in actual projects.")),(0,o.kt)("h2",{id:"connectionmanager-managed-by-spring-transaction"},"ConnectionManager managed by Spring transaction"),(0,o.kt)("p",null,"This topic has been discussed in detail in ",(0,o.kt)("a",{parentName:"p",href:"../spring/transaction"},"Spring Section/Integrate Spring Transaction"),". This article will not repeat the explanation."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Letting Jimmer be managed by Spring transaction is the recommended usage.")))}d.isMDXComponent=!0}}]);