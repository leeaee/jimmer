"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[8074],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(t),d=l,b=p["".concat(s,".").concat(d)]||p[d]||m[d]||r;return t?a.createElement(b,i(i({ref:n},c),{},{components:t})):a.createElement(b,i({ref:n},c))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(67294),l=t(34334);const r="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(83117),l=t(67294),r=t(34334),i=t(72389),o=t(67392),s=t(7094),u=t(12466);const c="tabList__CuJ",m="tabItem_LNqP";function p(e){var n;const{lazy:t,block:i,defaultValue:p,values:d,groupId:b,className:h}=e,k=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=d??k.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),f=(0,o.l)(y,((e,n)=>e.value===n.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===p?p:p??(null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)??k[0].props.value;if(null!==g&&!y.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,s.U)(),[w,x]=(0,l.useState)(g),_=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=b){const e=v[b];null!=e&&e!==w&&y.some((n=>n.value===e))&&x(e)}const T=e=>{const n=e.currentTarget,t=_.indexOf(n),a=y[t].value;a!==w&&(E(n),x(a),null!=b&&N(b,String(a)))},I=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=_.indexOf(e.currentTarget)+1;t=_[n]??_[0];break}case"ArrowLeft":{const n=_.indexOf(e.currentTarget)-1;t=_[n]??_[_.length-1];break}}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},h)},y.map((e=>{let{value:n,label:t,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:e=>_.push(e),onKeyDown:I,onFocus:T,onClick:T},i,{className:(0,r.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":w===n})}),t??n)}))),t?(0,l.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},k.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==w})))))}function d(e){const n=(0,i.Z)();return l.createElement(p,(0,a.Z)({key:String(n)},e))}},40410:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>m});var a=t(83117),l=(t(67294),t(3905)),r=t(65488),i=t(85162);const o={sidebar_position:3,title:"Dynamic Filtering"},s=void 0,u={unversionedId:"query/dynamic-where",id:"query/dynamic-where",title:"Dynamic Filtering",description:"Basic Usage",source:"@site/docs/query/dynamic-where.mdx",sourceDirName:"query",slug:"/query/dynamic-where",permalink:"/jimmer/docs/query/dynamic-where",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/query/dynamic-where.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Dynamic Filtering"},sidebar:"tutorialSidebar",previous:{title:"Working with Spring Data",permalink:"/jimmer/docs/query/object-fetcher/spring-data"},next:{title:"Dynamic JOIN",permalink:"/jimmer/docs/query/dynamic-join/"}},c={},m=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Notes for Java Developers",id:"notes-for-java-developers",level:2},{value:"Multi-table Operations",id:"multi-table-operations",level:2},{value:"QBE",id:"qbe",level:2}],p={toc:m};function d(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Java API uses fluent style to build DSL, ",(0,l.kt)("inlineCode",{parentName:"p"},"whereIf")," is provided to add conditional where clauses without breaking the fluent chaining.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Kotlin API uses lambdas to build DSL, no special API is needed to support dynamic queries."))),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public List<Book> findBooks(@Nullable String name) {\n\n    BookTable table = BookTable.$;\n\n    return sqlClient\n        .createQuery(table)\n        // highlight-next-line\n        .whereIf(\n            name != null && !name.isEmpty(),\n            table.name().eq(name)\n        )\n        .orderBy(table.name().asc(), table.edition().desc())\n        .select(table)\n        .execute();\n}\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun findBooks(name: String?): List<Book> =\n    sqlClient\n        .createQuery(Book::class) {\n            // highlight-next-line\n            name?.takeIf { it.isNotEmpty() }?.let {\n                where(table.name eq it)\n            }\n            orderBy(table.name.asc(), table.edition.desc())\n            select(table)\n        }\n        .execute()\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Calling ",(0,l.kt)("inlineCode",{parentName:"p"},"findBooks(null)")," generates:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\norder by\n    tb_1_.NAME asc,\n    tb_1_.EDITION desc\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Calling ",(0,l.kt)("inlineCode",{parentName:"p"},'findBooks("SQL in Action")')," generates:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\nwhere\n    tb_1_.NAME = ? /* SQL in Action */\norder by\n    tb_1_.NAME asc,\n    tb_1_.EDITION desc\n")))),(0,l.kt)("h2",{id:"notes-for-java-developers"},"Notes for Java Developers"),(0,l.kt)("p",null,"Java developers please note that in the code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},".whereIf(\n    name != null && !name.isEmpty(),\n    table.name().eq(name) \n)\n")),(0,l.kt)("p",null,"Even if ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," is null, the second parameter ",(0,l.kt)("inlineCode",{parentName:"p"},"table.name().eq(name)")," would still be evaluated. This is the behavior of most programming languages."),(0,l.kt)("p",null,"For ",(0,l.kt)("inlineCode",{parentName:"p"},"eq")," ",(0,l.kt)("em",{parentName:"p"},"(or ",(0,l.kt)("inlineCode",{parentName:"em"},"ne"),")"),", passing in null does not cause problems. ",(0,l.kt)("inlineCode",{parentName:"p"},"eq(null)")," would be automatically changed to ",(0,l.kt)("inlineCode",{parentName:"p"},"isNull()"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"ne(null)")," would become ",(0,l.kt)("inlineCode",{parentName:"p"},"isNotNull()"),"."),(0,l.kt)("p",null,"However, for most other conditional expressions, using null would cause exceptions."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Don't worry, if you accidentally make mistakes, the exception messages are very informative to guide you to use the correct approach introduced below.")),(0,l.kt)("p",null,"For greater than or equals ",(0,l.kt)("inlineCode",{parentName:"p"},"ge"),", dynamic query conditions can be added like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},".whereIf(\n    minPrice != null, \n    // highlight-next-line\n    () -> table.price().ge(minPrice)\n)\n")),(0,l.kt)("p",null,"Here, a lambda expression is used to delay the expression construction until the condition is met."),(0,l.kt)("p",null,"For Kotlin there are no such issues, no precautions needed."),(0,l.kt)("p",null,"Let's look at a more complete example:"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public List<Book> findBooks(\n    @Nullable String name,\n    @Nullable BigDecimal minPrice,\n    @Nullable BigDecimal maxPrice\n) {\n\n    BookTable table = BookTable.$;\n\n    return sqlClient\n        .createQuery(table)\n        // highlight-next-line\n        .whereIf(\n            name != null && !name.isEmpty(),\n            table.name().eq(name)\n        )\n        // highlight-next-line\n        .whereIf(\n            minPrice != null,\n            () -> table.price().ge(minPrice)\n        )\n        // highlight-next-line\n        .whereIf(\n            maxPrice != null,\n            () -> table.price().le(maxPrice)\n        )\n        .orderBy(table.name().asc(), table.edition().desc())\n        .select(table)\n        .execute();\n} \n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun findBooks(\n    name: String? = null,\n    minPrice: BigDecimal? = null,\n    maxPrice: BigDecimal? = null\n): List<Book> =\n    sqlClient\n        .createQuery(Book::class) {\n            // highlight-next-line\n            name?.takeIf { it.isNotEmpty() }?.let {\n                where(table.name eq it)\n            }\n            // highlight-next-line\n            minPrice?.let {\n                where(table.price ge it)\n            }\n            // highlight-next-line\n            maxPrice?.let {\n                where(table.price le it)\n            }\n            orderBy(table.name.asc(), table.edition.desc())\n            select(table)\n        }\n        .execute()\n")))),(0,l.kt)("h2",{id:"multi-table-operations"},"Multi-table Operations"),(0,l.kt)("p",null,"So far, the dynamic queries are based on a single table."),(0,l.kt)("p",null,"Consider a more complex scenario where some dynamic conditions are on other tables instead of the current table ",(0,l.kt)("em",{parentName:"p"},"(that is, those tables need to be joined first before dynamic where conditions can be added)"),". How can this be achieved?"),(0,l.kt)("p",null,"No other higher level SQL access solutions have elegantly solved this problem, it had been a blank in the domain. Jimmer perfectly solves this difficult problem ",(0,l.kt)("em",{parentName:"p"},"(which is the very reason Jimmer was created)"),"."),(0,l.kt)("p",null,"We will systematically discuss this in ",(0,l.kt)("a",{parentName:"p",href:"./dynamic-join"},"next doc"),". "),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"In ",(0,l.kt)("a",{parentName:"p",href:"./dynamic-join"},"next doc")," you will see the uniqueness of Jimmer SQL DSL, gaining a powerful capability no other solution in the industry supports.")),(0,l.kt)("h2",{id:"qbe"},"QBE"),(0,l.kt)("p",null,"This doc introduces fully functional dynamic queries."),(0,l.kt)("p",null,"However, for very simple dynamic queries, you can also choose to use QBE queries, see ",(0,l.kt)("a",{parentName:"p",href:"./qbe"},"QBE Queries"),"."))}d.isMDXComponent=!0}}]);