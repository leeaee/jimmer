"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9152],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=l,b=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(b,o(o({ref:t},p),{},{components:n})):a.createElement(b,o({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),l=n(34334);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(83117),l=n(67294),r=n(34334),o=n(72389),i=n(67392),s=n(7094),u=n(12466);const p="tabList__CuJ",c="tabItem_LNqP";function m(e){var t;const{lazy:n,block:o,defaultValue:m,values:d,groupId:b,className:f}=e,k=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),N=(0,i.l)(h,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===m?m:m??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:y}=(0,s.U)(),[T,_]=(0,l.useState)(g),w=[],{blockElementScrollPositionUntilNextRender:C}=(0,u.o5)();if(null!=b){const e=v[b];null!=e&&e!==T&&h.some((t=>t.value===e))&&_(e)}const O=e=>{const t=e.currentTarget,n=w.indexOf(t),a=h[n].value;a!==T&&(C(t),_(a),null!=b&&y(b,String(a)))},j=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},f)},h.map((e=>{let{value:t,label:n,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>w.push(e),onKeyDown:j,onFocus:O,onClick:O},o,{className:(0,r.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,l.cloneElement)(k.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,o.Z)();return l.createElement(m,(0,a.Z)({key:String(t)},e))}},74218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var a=n(83117),l=(n(67294),n(3905)),r=n(65488),o=n(85162);const i={sidebar_position:1,title:"Update Statement"},s=void 0,u={unversionedId:"mutation/update-statement",id:"mutation/update-statement",title:"Update Statement",description:"Premise of This Article",source:"@site/docs/mutation/update-statement.mdx",sourceDirName:"mutation",slug:"/mutation/update-statement",permalink:"/jimmer/docs/mutation/update-statement",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/mutation/update-statement.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Update Statement"},sidebar:"tutorialSidebar",previous:{title:"Mutation",permalink:"/jimmer/docs/mutation/"},next:{title:"Delete Statement",permalink:"/jimmer/docs/mutation/delete-statement"}},p={},c=[{value:"Premise of This Article",id:"premise-of-this-article",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Using JOIN",id:"using-join",level:2},{value:"MySQL",id:"mysql",level:3},{value:"Postgres",id:"postgres",level:3}],m={toc:c};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"premise-of-this-article"},"Premise of This Article"),(0,l.kt)("p",null,"Jimmer supports ",(0,l.kt)("a",{parentName:"p",href:"./trigger"},"triggers"),", including BinLog Triggers and Transaction Triggers."),(0,l.kt)("p",null,"If using Transaction Triggers, it will cause Jimmer modification operations to generate more complete query statements to simulate triggers."),(0,l.kt)("p",null,"The various scenarios discussed in this article and their respective generated SQL are all based on the premise of not using Transaction Triggers."),(0,l.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,l.kt)("p",null,"The usage of the update statement is:"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'AuthorTable author = AuthorTable.$;\n\nint affectedRowCount = sqlClient\n    .createUpdate(author)\n    .set(\n        author.firstName(),\n        author.firstName().concat("*")  \n    )\n    .where(author.firstName().eq("Dan"))\n    .execute();\nSystem.out.println("Affected row count: " + affectedRowCount);\n'))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val affectedRowCount = sqlClient\n    .createUpdate(Author::class) {\n        set(\n            table.firstName,\n            concat(table.firstName, value("*"))\n        )\n        where(table.firstName eq "Dan")\n    }\n    .execute()\nprintln("Affected row count: $affectedRowCount") \n')))),(0,l.kt)("p",null,"The finally generated SQL is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"update AUTHOR tb_1_  \nset FIRST_NAME = concat(tb_1_.FIRST_NAME, ?)\nwhere tb_1_.FIRST_NAME = ?\n")),(0,l.kt)("h2",{id:"using-join"},"Using JOIN"),(0,l.kt)("p",null,"By default, update statements do not support joins, which will cause exceptions:"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'AuthorTableEx author = AuthorTableEx.$;\n\nint affectedRowCount = sqlClient\n    .createUpdate(author)\n    .set(\n        author.firstName(),\n        author.firstName().concat("*")\n    )\n    .where(\n        author\n            // highlight-next-line\n            .books()\n            .name()\n            .eq("Learning GraphQL") \n    )\n    .execute();\nSystem.out.println("Affected row count: " + affectedRowCount);\n'))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val affectedRowCount = sqlClient\n    .createUpdate(Author::class) {\n        set(\n            table.firstName, \n            concat(table.firstName, value("*"))\n        )\n        where(\n            table\n                // highlight-next-line\n                .books\n                .name\n                eq "Learning GraphQL"\n        )\n    }\n    .execute()\nprintln("Affected row count: $affectedRowCount")\n')))),(0,l.kt)("p",null,"The exception is:"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Table joins for update statement is forbidden by the current dialect, but there is a join ",(0,l.kt)("inlineCode",{parentName:"p"},"'Author.books'"),".")),(0,l.kt)("p",null,"When using MySQL or Postgres, update statements can use JOIN clauses."),(0,l.kt)("h3",{id:"mysql"},"MySQL"),(0,l.kt)("p",null,"First, MySQLDialect needs to be specified when creating SqlClient:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Spring Boot configuration:"),(0,l.kt)("p",{parentName:"li"},"Declare configuration in ",(0,l.kt)("inlineCode",{parentName:"p"},"application.yml")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"application.properties"),", named ",(0,l.kt)("inlineCode",{parentName:"p"},"jimmer.dialect")," with value ",(0,l.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.sql.dialect.MySqlDialect"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Non-Spring Boot configuration:"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setDialect(\n        new org.babyfish.jimmer.sql.dialect.MySqlDialect()\n    )\n    ...\n    .build();\n"))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val sqlClient = newKSqlClient {\n    setDialect(org.babyfish.jimmer.sql.dialect.MySqlDialect())\n}\n")))))),(0,l.kt)("p",null,"Then JOIN can be used in update:"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'AuthorTableEx author = AuthorTableEx.$;\n\nint affectedRowCount = sqlClient\n    .createUpdate(author) \n    .set(\n        author.firstName(),\n        author.firstName().concat("*")\n    )\n    .set(\n        author.books().name(),\n        author.books().name().concat("*")  \n    )\n    .set(\n        author.books().store().name(),\n        author.books().store().name().concat("*")\n    )\n    .where(\n        author.books().store().name().eq("MANNING")\n    )\n    .execute();\nSystem.out.println("Affected row count: " + affectedRowCount);\n'))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val affectedRowCount = sqlClient\n    .createUpdate(Author::class) {\n        set(\n            table.firstName,\n            concat(table.firstName, value("*")) \n        )\n        set(\n            table.books.name,\n            concat(table.books.name, value("*"))\n        )\n        set(\n            table.books.store.name, \n            concat(table.books.store.name, value("*"))\n        )\n        where(\n            table.books.store.name eq "MANNING"  \n        )\n    }\n    .execute()\nprintln("Affected row count: $affectedRowCount")\n')))),(0,l.kt)("p",null,"The finally generated SQL for MySQL is: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"update\n    AUTHOR tb_1_\n    inner join BOOK_AUTHOR_MAPPING as tb_2_\n        on tb_1_.ID = tb_2_.AUTHOR_ID\n    inner join BOOK as tb_3_\n        on tb_2_.BOOK_ID = tb_3_.ID\n    inner join BOOK_STORE as tb_4_\n        on tb_3_.STORE_ID = tb_4_.ID\nset\n    tb_1_.FIRST_NAME = concat(tb_1_.FIRST_NAME, ?),\n    tb_3_.NAME = concat(tb_3_.NAME, ?),\n    tb_4_.NAME = concat(tb_4_.NAME, ?)\nwhere\n    tb_4_.NAME = ? \n")),(0,l.kt)("h3",{id:"postgres"},"Postgres"),(0,l.kt)("p",null,"First, PostgresDialect needs to be specified when creating SqlClient:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Spring Boot configuration:"),(0,l.kt)("p",{parentName:"li"},"Declare configuration in ",(0,l.kt)("inlineCode",{parentName:"p"},"application.yml")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"application.properties"),", named ",(0,l.kt)("inlineCode",{parentName:"p"},"jimmer.dialect")," with value ",(0,l.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.sql.dialect.PostgresDialect"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Non-Spring Boot configuration:"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setDialect(\n        new org.babyfish.jimmer.sql.dialect.PostgresDialect()\n    )\n    ...\n    .build();\n"))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val sqlClient = newKSqlClient {\n    setDialect(org.babyfish.jimmer.sql.dialect.PostgresDialect())\n}\n")))))),(0,l.kt)("p",null,"Then JOIN can be used in update:"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'AuthorTableEx author = AuthorTableEx.$;\n\nint affectedRowCount = sqlClient\n    .createUpdate(author)\n    .set(\n        author.firstName(),\n        author.firstName().concat("*")\n    ) \n    .where(\n        author.books().store().name().eq("MANNING")\n    )\n    .execute();\nSystem.out.println("Affected row count: " + affectedRowCount);\n'))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val affectedRowCount = sqlClient\n    .createUpdate(Author::class) {\n        set(\n            table.firstName,\n            concat(table.firstName, value("*"))\n        )\n        where(\n            table.books.store.name eq "MANNING" \n        )\n    }\n    .execute()\nprintln("Affected row count: $affectedRowCount")\n')))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Unlike MySQL, using JOIN in update statements in Postgres has the following restrictions:"),(0,l.kt)("ol",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"JOIN can only be used in the ",(0,l.kt)("inlineCode",{parentName:"p"},"where")," clause, not in the ",(0,l.kt)("inlineCode",{parentName:"p"},"set")," clause. That is, Postgres still only allows modifying fields of the current table, supporting joins to other tables only for condition filtering.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The join path can have multiple levels, such as ",(0,l.kt)("inlineCode",{parentName:"p"},"author.books().store()"),", where ",(0,l.kt)("inlineCode",{parentName:"p"},"books()")," is level 1 and ",(0,l.kt)("inlineCode",{parentName:"p"},"store()")," is level 2. The join type of the first level must be ",(0,l.kt)("inlineCode",{parentName:"p"},"inner join"),".  ")))),(0,l.kt)("p",null,"The finally generated SQL for Postgres is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"update\n    AUTHOR tb_1_\nset\n    FIRST_NAME = concat(tb_1_.FIRST_NAME, ?)\nfrom BOOK_AUTHOR_MAPPING as tb_2_ \u2776 \ninner join BOOK as tb_3_ \u2777\n    on tb_2_.BOOK_ID = tb_3_.ID\ninner join BOOK_STORE as tb_4_ \u2778\n    on tb_3_.STORE_ID = tb_4_.ID\nwhere\n    tb_1_.ID = tb_2_.AUTHOR_ID \u2779 \nand\n    tb_4_.NAME = ?\n")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The join path ",(0,l.kt)("inlineCode",{parentName:"p"},"author.books().store()")," has two levels, ",(0,l.kt)("inlineCode",{parentName:"p"},"books()")," is level 1 and ",(0,l.kt)("inlineCode",{parentName:"p"},"store()")," is level 2. "),(0,l.kt)("ol",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ol"},"Level 1 ",(0,l.kt)("inlineCode",{parentName:"li"},"books()")," involves two tables:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BOOK_AUTHOR_MAPPING")," table at \u2776, but the join condition is missing here, supplemented at \u2779."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BOOK")," table at \u2777."))),(0,l.kt)("li",{parentName:"ol"},"Level 2 ",(0,l.kt)("inlineCode",{parentName:"li"},"store()")," involves one table:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BOOK_STORE")," table at \u2778.")))),(0,l.kt)("p",{parentName:"admonition"},"As you can see, in the update statement of Postgres, table joins directly related to the main table cannot use the ",(0,l.kt)("inlineCode",{parentName:"p"},"join")," + ",(0,l.kt)("inlineCode",{parentName:"p"},"on")," syntax, they must be equivalently transformed into ",(0,l.kt)("inlineCode",{parentName:"p"},"from")," + ",(0,l.kt)("inlineCode",{parentName:"p"},"where"),"."),(0,l.kt)("p",{parentName:"admonition"},"This is why Jimmer requires the join type of level 1 to be ",(0,l.kt)("inlineCode",{parentName:"p"},"inner join")," for update statements in Postgres dialect. ")))}d.isMDXComponent=!0}}]);