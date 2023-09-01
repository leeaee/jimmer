"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[7848],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=l.createContext({}),u=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),b=n,m=p["".concat(s,".").concat(b)]||p[b]||d[b]||r;return a?l.createElement(m,i(i({ref:t},c),{},{components:a})):l.createElement(m,i({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<r;u++)i[u]=a[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}p.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(67294),n=a(34334);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return l.createElement("div",{role:"tabpanel",className:(0,n.Z)(r,i),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>b});var l=a(83117),n=a(67294),r=a(34334),i=a(72389),o=a(67392),s=a(7094),u=a(12466);const c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:a,block:i,defaultValue:p,values:b,groupId:m,className:g}=e,k=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=b??k.map((e=>{let{props:{value:t,label:a,attributes:l}}=e;return{value:t,label:a,attributes:l}})),v=(0,o.l)(f,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===p?p:p??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==h&&!f.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:_}=(0,s.U)(),[N,T]=(0,n.useState)(h),D=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=m){const e=y[m];null!=e&&e!==N&&f.some((t=>t.value===e))&&T(e)}const I=e=>{const t=e.currentTarget,a=D.indexOf(t),l=f[a].value;l!==N&&(E(t),T(l),null!=m&&_(m,String(l)))},O=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=D.indexOf(e.currentTarget)+1;a=D[t]??D[0];break}case"ArrowLeft":{const t=D.indexOf(e.currentTarget)-1;a=D[t]??D[D.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},g)},f.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,l.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>D.push(e),onKeyDown:O,onFocus:I,onClick:I},i,{className:(0,r.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,n.cloneElement)(k.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function b(e){const t=(0,i.Z)();return n.createElement(p,(0,l.Z)({key:String(t)},e))}},79589:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var l=a(83117),n=(a(67294),a(3905)),r=a(65488),i=a(85162);const o={sidebar_position:1,title:"Logical Deletion"},s=void 0,u={unversionedId:"query/global-filter/logical-deleted",id:"query/global-filter/logical-deleted",title:"Logical Deletion",description:"Mapping",source:"@site/docs/query/global-filter/logical-deleted.mdx",sourceDirName:"query/global-filter",slug:"/query/global-filter/logical-deleted",permalink:"/jimmer/docs/query/global-filter/logical-deleted",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/query/global-filter/logical-deleted.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Logical Deletion"},sidebar:"tutorialSidebar",previous:{title:"Global Filters",permalink:"/jimmer/docs/query/global-filter/"},next:{title:"Custom Filters",permalink:"/jimmer/docs/query/global-filter/user-filter"}},c={},d=[{value:"Mapping",id:"mapping",level:2},{value:"Usage",id:"usage",level:2},{value:"Filter Aggregate Roots",id:"filter-aggregate-roots",level:3},{value:"Filter Associated Objects",id:"filter-associated-objects",level:3},{value:"Ignore Logical Deletion Filter",id:"ignore-logical-deletion-filter",level:2},{value:"Reverse Logical Deletion Filter",id:"reverse-logical-deletion-filter",level:2}],p={toc:d};function b(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"mapping"},"Mapping"),(0,n.kt)("p",null,"Logical deletion, also known as soft deletion, means data is not truly deleted from the database. Instead, data is hidden to give the illusion of deletion. This leaves room for recovery in case of accidental operations."),(0,n.kt)("p",null,"Very detailed explanations of entity mapping related to logical deletion can be found in ",(0,n.kt)("a",{parentName:"p",href:"../../mapping/advanced/logical-deleted"},"Mapping/Advanced Mapping/Logical Deletion"),", so we won't repeat all details here, just a brief recap:"),(0,n.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'@Entity\npublic interface Book {\n\n    // highlight-next-line\n    @LogicalDeleted(value = "true", useMultiViewCache = true)  \n    boolean isDeleted();\n\n    ...Other code omitted...\n}\n'))),(0,n.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'@Entity\ninterface Book {\n\n    // highlight-next-line\n    @LogicalDeleted(value = "true", useMultiViewCache = true)\n    val isDeleted: Boolean\n\n    ...Other code omitted...\n}\n')))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"useMultiViewCache")," here will be explained in ",(0,n.kt)("a",{parentName:"p",href:"./multiview-cache"},"Multi-View Cache"),". Please ignore it for now.")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("h3",{id:"filter-aggregate-roots"},"Filter Aggregate Roots"),(0,n.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"BookTable table = BookTable.$;\n\nList<Book> books = sqlClient  \n    .createQuery(table)\n    .select(table)\n    .execute();\n"))),(0,n.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},"val books = sqlClient\n    .createQuery(Book::class) {\n        select(table)\n    }  \n    .execute()\n")))),(0,n.kt)("p",null,"The generated SQL:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.NAME, \n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.DELETED, \n    tb_1_.STORE_ID\nfrom BOOK tb_1_  \nwhere\n    /* highlight-next-line */  \n    tb_1_.DELETED = ? /* false */\n")),(0,n.kt)("h3",{id:"filter-associated-objects"},"Filter Associated Objects"),(0,n.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"AuthorTable author = AuthorTable.$;\n\nList<Author> authors = sqlClient\n    .createQuery(author)\n    .select(\n        author.fetch(\n            AuthorFetcher.$\n                .allScalarFields()\n                .books(\n                    BookFetcher.$\n                        .allScalarFields()\n                )\n        )\n    )\n    .execute();\n"))),(0,n.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},"val authors = sqlClient\n    .createQuery(Author::class) {\n        select(\n            table.fetchBy {\n                allScalarFields()\n                books {\n                    allScalarFields()\n                }\n            }  \n        )\n    }\n    .execute()\n")))),(0,n.kt)("p",null,"Without caching enabled, this generates two SQL statements:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Query aggregate roots:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID, \n    tb_1_.FIRST_NAME,\n    tb_1_.LAST_NAME,\n    tb_1_.GENDER\nfrom AUTHOR tb_1_\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Query associated objects, apply logical deletion filter:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_2_.AUTHOR_ID,\n    tb_1_.ID,\n    tb_1_.NAME, \n    tb_1_.EDITION,\n    tb_1_.PRICE\nfrom BOOK tb_1_ \ninner join BOOK_AUTHOR_MAPPING tb_2_\n    on tb_1_.ID = tb_2_.BOOK_ID\nwhere\n        tb_2_.AUTHOR_ID in (\n            ? /* 1 */, ? /* 2 */, ? /* 3 */, ? /* 4 */, ? /* 5 */\n        )\n    and \n        /* highlight-next-line */\n        tb_1_.DELETED = ? /* false */\n")))),(0,n.kt)("h2",{id:"ignore-logical-deletion-filter"},"Ignore Logical Deletion Filter"),(0,n.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"BookTable table = BookTable.$;\n\nList<Book> books = sqlClient\n    .filters(cfg -> { \u2776\n        cfg.disable( \u2777\n            cfg\n                .getFilterManager() \u2778\n                .builtIns() \u2779\n                .getDeclaredNotDeletedFilter(Book.class) \u277a\n        );\n    })\n    .createQuery(table)\n    .select(table)\n    .execute();\n"))),(0,n.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},"val books = sqlClient  \n    .filters { \u2776\n        disable( \u2777\n            filterManager \u2778\n                .builtIns \u2779\n                .getDeclaredNotDeletedFilter(Book::class) \u277a\n        )\n    }\n    .createQuery(table) \n    .select(table)\n    .execute()\n")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u2776 Modify filter config without affecting current ",(0,n.kt)("inlineCode",{parentName:"p"},"sqlClient"),", create new temporary ",(0,n.kt)("inlineCode",{parentName:"p"},"sqlClient"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u2777 Disable the global filter represented by parameter. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Current filter manager is \u2778, where Jimmer built-in filter manager is \u2779.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u277a Get filter for ",(0,n.kt)("inlineCode",{parentName:"p"},"Book")," entity, which filters undeleted data."))),(0,n.kt)("p",null,"This time, the generated SQL no longer contains: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.DELETED,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_ \n")),(0,n.kt)("h2",{id:"reverse-logical-deletion-filter"},"Reverse Logical Deletion Filter"),(0,n.kt)("p",null,"In fact, Jimmer provides two filters for logical deletion:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"NotDeletedFilter"),": Query undeleted data, enabled by default."),(0,n.kt)("p",{parentName:"li"},"This is also the filter we manually disabled in the previous example.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"AlreadyDeletedFilter"),": Query already deleted data, disabled by default."))),(0,n.kt)("p",null,"Next, we continue disabling ",(0,n.kt)("inlineCode",{parentName:"p"},"NotDeletedFilter")," and enable ",(0,n.kt)("inlineCode",{parentName:"p"},"AlreadyDeletedFilter"),":"),(0,n.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"BookTable table = BookTable.$;\n\nList<Book> books = sqlClient\n    .filters(cfg -> {\n        cfg.disable(\n            cfg\n                .getFilterManager()\n                .builtIns()\n                .getDeclaredNotDeletedFilter(Book.class)\n        ); \n        cfg.enable(\n            cfg\n                .getFilterManager()\n                .builtIns()\n                .getDeclaredAlreadyDeletedFilter(Book.class)\n        );\n    })\n    .createQuery(table)\n    .select(table)  \n    .execute();\n"))),(0,n.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},"val books = sqlClient\n    .filters {\n        disable(\n            filterManager\n                .builtIns\n                .getDeclaredNotDeletedFilter(Book::class) \n        )\n        enable(\n            cfg\n                .getFilterManager()\n                .builtIns()\n                .getDeclaredAlreadyDeletedFilter(Book::class)\n        )\n    }\n    .createQuery(table)\n    .select(table)\n    .execute()\n")))),(0,n.kt)("p",null,"Executing again, the generated SQL: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.NAME, \n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.DELETED,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\nwhere\n    /* highlight-next-line */\n    tb_1_.DELETED = ? /* true */ \n")),(0,n.kt)("p",null,"This time the filter condition is ",(0,n.kt)("inlineCode",{parentName:"p"},"tb_1_.DELETED = true"),", querying already deleted data, opposite of default behavior."))}b.isMDXComponent=!0}}]);