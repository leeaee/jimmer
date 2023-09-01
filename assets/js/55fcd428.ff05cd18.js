"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1713],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=i,k=u["".concat(m,".").concat(c)]||u[c]||d[c]||o;return n?a.createElement(k,r(r({ref:t},s),{},{components:n})):a.createElement(k,r({ref:t},s))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),i=n(34334);const o="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,r),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(83117),i=n(67294),o=n(34334),r=n(72389),l=n(67392),m=n(7094),p=n(12466);const s="tabList__CuJ",d="tabItem_LNqP";function u(e){var t;const{lazy:n,block:r,defaultValue:u,values:c,groupId:k,className:g}=e,y=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=c??y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,l.l)(N,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===u?u:u??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==h&&!N.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:f}=(0,m.U)(),[I,T]=(0,i.useState)(h),M=[],{blockElementScrollPositionUntilNextRender:j}=(0,p.o5)();if(null!=k){const e=v[k];null!=e&&e!==I&&N.some((t=>t.value===e))&&T(e)}const x=e=>{const t=e.currentTarget,n=M.indexOf(t),a=N[n].value;a!==I&&(j(t),T(a),null!=k&&f(k,String(a)))},Z=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=M.indexOf(e.currentTarget)+1;n=M[t]??M[0];break}case"ArrowLeft":{const t=M.indexOf(e.currentTarget)-1;n=M[t]??M[M.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,o.Z)("tabs-container",s)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},g)},N.map((e=>{let{value:t,label:n,attributes:r}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:e=>M.push(e),onKeyDown:Z,onFocus:x,onClick:x},r,{className:(0,o.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":I===t})}),n??t)}))),n?(0,i.cloneElement)(y.filter((e=>e.props.value===I))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==I})))))}function c(e){const t=(0,r.Z)();return i.createElement(u,(0,a.Z)({key:String(t)},e))}},47787:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>m,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(83117),i=(n(67294),n(3905)),o=n(65488),r=n(85162);const l={sidebar_position:3,title:"Define Entities"},m=void 0,p={unversionedId:"overview/get-started/define-entity",id:"overview/get-started/define-entity",title:"Define Entities",description:"Unlike ORMs like JPA/Hibernate, entities in Jimmer are defined as interfaces instead of classes. The reasons are discussed in Why Interfaces.",source:"@site/docs/overview/get-started/define-entity.mdx",sourceDirName:"overview/get-started",slug:"/overview/get-started/define-entity",permalink:"/jimmer/docs/overview/get-started/define-entity",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/overview/get-started/define-entity.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Define Entities"},sidebar:"tutorialSidebar",previous:{title:"Create Database",permalink:"/jimmer/docs/overview/get-started/create-database"},next:{title:"Generate Code",permalink:"/jimmer/docs/overview/get-started/generate-code"}},s={},d=[{value:"Define Non-Associated Fields",id:"define-non-associated-fields",level:2},{value:"One-to-Many Association <code>Book.store</code>",id:"one-to-many-association-bookstore",level:2},{value:"One-to-Many Association <code>BookStore.books</code>",id:"one-to-many-association-bookstorebooks",level:2},{value:"Many-to-Many Association <code>Book.authors</code>",id:"many-to-many-association-bookauthors",level:2},{value:"Many-to-Many Association <code>Author.books</code>",id:"many-to-many-association-authorbooks",level:2},{value:"Complete TreeNode Definition",id:"complete-treenode-definition",level:2},{value:"Why Interfaces",id:"why-interfaces",level:2}],u={toc:d};function c(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Unlike ORMs like JPA/Hibernate, entities in Jimmer are defined as interfaces instead of classes. The reasons are discussed in ",(0,i.kt)("a",{parentName:"p",href:"#why-interfaces"},"Why Interfaces"),"."),(0,i.kt)("p",null,"Before defining entities, two concepts need to be introduced:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Jimmer entities are not simple Java beans, but dynamic objects."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"That is, an unset property is completely different from a property set to null."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Jimmer entities are immutable, so interfaces only have getters, no setters."))),(0,i.kt)("h2",{id:"define-non-associated-fields"},"Define Non-Associated Fields"),(0,i.kt)("p",null,'Assume the entity package is "com.example.model". ',(0,i.kt)("strong",{parentName:"p"},"Ignore associated properties first"),", entity definitions are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"BookStore"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookStore.java"',title:'"BookStore.java"'},"package com.example.model;\n\nimport org.babyfish.jimmer.sql.*;\nimport org.jetbrains.annotations.Nullable;\n\n@Entity\npublic interface BookStore {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    long id();\n    \n    String name();\n\n    @Nullable\n    String website();\n}\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookStore.kt"',title:'"BookStore.kt"'},"package com.example.model\n\nimport org.babyfish.jimmer.sql.*\n\n@Entity\ninterface BookStore {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n    \n    val name: String\n\n    val website: String?\n}\n"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Book"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},"package com.example.model;\n\nimport org.babyfish.jimmer.sql.*;\nimport java.math.BigDecimal;\n\n@Entity\npublic interface Book {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    long id();\n    \n    String name();\n\n    int edition();\n\n    BigDecimal price();\n}\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},"package com.example.model\n\nimport org.babyfish.jimmer.sql.*\nimport java.math.BigDecimal\n\n@Entity\ninterface Book {\n\n    @Id \n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n    \n    val name: String\n\n    val edition: Int\n\n    val price: BigDecimal\n}\n"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Author"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Author.java"',title:'"Author.java"'},"package com.example.model;\n\nimport org.babyfish.jimmer.sql.*;\n\n@Entity\npublic interface Author {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    long id();\n    \n    String firstName();\n\n    String lastName();\n\n    /*\n     * Gender is an enum defined later  \n     */\n    Gender gender();\n}\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Author.kt"',title:'"Author.kt"'},"package com.example.model\n\nimport org.babyfish.jimmer.sql.*\n\n@Entity\ninterface Author {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n    \n    val firstName: String\n\n    val lastName: String\n\n    /*\n     * Gender is an enum defined later\n     */\n    val gender: Gender\n}\n")))),(0,i.kt)("p",{parentName:"li"},"Where ",(0,i.kt)("inlineCode",{parentName:"p"},"Gender")," is an enum with two options: ",(0,i.kt)("inlineCode",{parentName:"p"},"MALE")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"FEMALE"),". "),(0,i.kt)("p",{parentName:"li"},"ORMs can map enums to strings (default) or numbers."),(0,i.kt)("p",{parentName:"li"},"Although this example maps enum to string by default, the database has a check constraint limiting values to ",(0,i.kt)("inlineCode",{parentName:"p"},"'M'")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"'F'"),", not default ",(0,i.kt)("inlineCode",{parentName:"p"},"'MALE'")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"'FEMALE'"),". So the enum needs to be configured as:"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Author.java"',title:'"Author.java"'},'package com.example.model;\n\nimport org.babyfish.jimmer.sql.EnumItem;\n\npublic enum Gender {\n\n    @EnumItem(name = "M")\n    MALE,\n\n    @EnumItem(name = "F")\n    FEMALE\n}\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Author.kt"',title:'"Author.kt"'},'package com.example.model\n\nimport org.babyfish.jimmer.sql.EnumItem\n\nenum class Gender {\n\n    @EnumItem(name = "M")\n    MALE,\n\n    @EnumItem(name = "F")\n    FEMALE\n}\n'))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"TreeNode"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="TreeNode.java"',title:'"TreeNode.java"'},'package com.example.model;\n\nimport org.babyfish.jimmer.sql.*;\n\n@Entity\npublic interface TreeNode {\n\n    @Id\n    @Column(name = "NODE_ID") \n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    long id();\n    \n    String name();\n}\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="TreeNode.kt"',title:'"TreeNode.kt"'},'package com.example.model\n\nimport org.babyfish.jimmer.sql.*\n\n@Entity\ninterface TreeNode {\n\n    @Id\n    @Column(name = "NODE_ID")\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n    \n    val name: String\n}\n'))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For Java, each getter can use the traditional Java bean ",(0,i.kt)("inlineCode",{parentName:"p"},"get/is")," prefix like ",(0,i.kt)("inlineCode",{parentName:"p"},"getName()"),", or omit it like ",(0,i.kt)("inlineCode",{parentName:"p"},"name()")," in this example."),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Breaking the Java bean convention of getter prefixes is enabled by Java 14 records, not Jimmer. The new style allows more concise immutable objects."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Jimmer entities are very sensitive to nullability:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For Kotlin, use language's own nullity."),(0,i.kt)("li",{parentName:"ul"},"For Java:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Primitives like boolean, char, byte, short, int, long, float, double are non-null."),(0,i.kt)("li",{parentName:"ul"},"Boxed types like Boolean, Character, Byte, Short, Integer, Long, Float, Double are nullable."),(0,i.kt)("li",{parentName:"ul"},"Other types are non-null by default. Add ",(0,i.kt)("inlineCode",{parentName:"li"},"@Nullable")," to allow null."))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Annotations used in example:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@Entity")," - Indicates entity type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@Id")," - Specifies ID property. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@GeneratedValue")," - Specifies auto-generated ID, using database autoincrement here."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Java/Kotlin interface short name is converted to table name using ",(0,i.kt)("inlineCode",{parentName:"p"},"word1Word2...WordN -> WORD1_WORD2_..._WORDN"),"."),(0,i.kt)("p",{parentName:"li"},"If mismatch, use ",(0,i.kt)("inlineCode",{parentName:"p"},"@Table")," on interface.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Similarly, property name is converted to column name."),(0,i.kt)("p",{parentName:"li"},"If mismatch, use ",(0,i.kt)("inlineCode",{parentName:"p"},"@Column")," on property."),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Note ",(0,i.kt)("inlineCode",{parentName:"p"},"@Column")," can be used on non-foreign key fields, not just foreign keys discussed later."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Entities have non-null ID like ",(0,i.kt)("inlineCode",{parentName:"p"},"long"),", not nullable ID like ",(0,i.kt)("inlineCode",{parentName:"p"},"Long"),", otherwise framework will error."),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"JPA/Hibernate users note this difference in handling ID nullability.")))),(0,i.kt)("h2",{id:"one-to-many-association-bookstore"},"One-to-Many Association ",(0,i.kt)("inlineCode",{parentName:"h2"},"Book.store")),(0,i.kt)("p",null,"Modify ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.java"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"Book.kt")," to add ",(0,i.kt)("inlineCode",{parentName:"p"},"store")," association:"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},"package com.example.model;\n\n...imports omitted...\n\n@Entity\npublic interface Book {\n\n    ...other properties omitted...  \n\n    // highlight-next-line\n    @ManyToOne\n    @Nullable\n    BookStore store();\n}\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},"package com.example.model\n\n...imports omitted...\n\n@Entity  \ninterface Book {\n\n    ...other properties omitted...\n\n    // highlight-next-line\n    @ManyToOne\n    val store: BookStore?\n}\n")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"@ManyToOne")," declares one-to-many association, mapping foreign key to associated entity.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Property name is converted to foreign key column like ",(0,i.kt)("inlineCode",{parentName:"p"},"store -> STORE_ID"),", matching database."),(0,i.kt)("p",{parentName:"li"},"If mismatch, use ",(0,i.kt)("inlineCode",{parentName:"p"},"@JoinColumn")," on property."))),(0,i.kt)("h2",{id:"one-to-many-association-bookstorebooks"},"One-to-Many Association ",(0,i.kt)("inlineCode",{parentName:"h2"},"BookStore.books")),(0,i.kt)("p",null,"Modify ",(0,i.kt)("inlineCode",{parentName:"p"},"BookStore.java"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"BookStore.kt")," to add ",(0,i.kt)("inlineCode",{parentName:"p"},"books")," association:"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookStore.java"',title:'"BookStore.java"'},'package com.example.model;\n\n...imports omitted...\n\n@Entity\npublic interface BookStore {\n\n    ...other properties omitted...\n\n    // highlight-next-line \n    @OneToMany(mappedBy = "store")\n    List<Book> books();\n}\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookStore.kt"',title:'"BookStore.kt"'},'package com.example.model  \n\n...imports omitted...\n\n@Entity\ninterface BookStore {\n\n    ...other properties omitted...\n\n    // highlight-next-line\n    @OneToMany(mappedBy = "store") \n    val books: List<Book>\n}\n')))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"@OneToMany")," declares one-to-many association."),(0,i.kt)("p",{parentName:"li"},"It does not map any database field, just mirrors ",(0,i.kt)("inlineCode",{parentName:"p"},"@ManyToOne")," to make association bidirectional."),(0,i.kt)("p",{parentName:"li"},"Here, ",(0,i.kt)("inlineCode",{parentName:"p"},'mappedBy = "store"')," means ",(0,i.kt)("inlineCode",{parentName:"p"},"BookStore.books")," is mirror of ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.store"),"."),(0,i.kt)("div",{style:{display:"flex",alignItems:"start"}},(0,i.kt)("div",null,(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\npublic interface BookStore {\n\n    @OneToMany(\n        // highlight-next-line\n        mappedBy = "store" \n    )\n    List<Book> books();\n\n    ...\n}\n'))),(0,i.kt)("div",null,(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"mirror",src:n(79442).Z,width:"130",height:"239"}))),(0,i.kt)("div",null,(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Entity\npublic interface Book {\n\n    @ManyToOne\n    @Nullable\n    // highlight-next-line\n    BookStore store();\n\n    ...\n}\n")))),(0,i.kt)("p",{parentName:"li"},"The side with ",(0,i.kt)("inlineCode",{parentName:"p"},"mappedBy")," is called the mirror side.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Mirroring is optional, bidirectional is not required.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Unlike JPA/Hibernate, ",(0,i.kt)("inlineCode",{parentName:"p"},"@OneToMany")," in Jimmer can only mirror ",(0,i.kt)("inlineCode",{parentName:"p"},"@ManyToOne"),", always implying bidirection."))),(0,i.kt)("h2",{id:"many-to-many-association-bookauthors"},"Many-to-Many Association ",(0,i.kt)("inlineCode",{parentName:"h2"},"Book.authors")),(0,i.kt)("p",null,"Modify ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.java"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"Book.kt")," to add ",(0,i.kt)("inlineCode",{parentName:"p"},"authors")," association:"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'package com.example.model;\n\n...imports omitted...  \n\n@Entity\npublic interface Book {\n\n    ...other properties omitted...\n\n    // highlight-next-line\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_id"\n    )\n    List<Author> authors();\n}\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'package com.example.model\n\n...imports omitted...\n\n@Entity\ninterface Book {\n\n    ...other properties omitted...\n\n    // highlight-next-line\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_id"\n    )\n    val authors: List<Author>\n}\n')))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"@ManyToMany")," declares many-to-many association.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"There are two sides of many-to-many: owner and mirror. This is the owner side.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For owner, ",(0,i.kt)("inlineCode",{parentName:"p"},"@JoinTable")," can specify join table:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"name: Join table name (default based on entities)"),(0,i.kt)("li",{parentName:"ul"},"joinColumnName: FK to current entity (Book) "),(0,i.kt)("li",{parentName:"ul"},"inverseJoinColumnName: FK to target entity (Author)")),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Here ",(0,i.kt)("inlineCode",{parentName:"p"},"@JoinTable")," uses all default values, so it can be omitted for readability.")))),(0,i.kt)("h2",{id:"many-to-many-association-authorbooks"},"Many-to-Many Association ",(0,i.kt)("inlineCode",{parentName:"h2"},"Author.books")),(0,i.kt)("p",null,"Modify ",(0,i.kt)("inlineCode",{parentName:"p"},"Author.java"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"Author.kt")," to add ",(0,i.kt)("inlineCode",{parentName:"p"},"books")," association:"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Author.java"',title:'"Author.java"'},'package com.example.model;\n\n...imports omitted...\n\n@Entity\npublic interface Author {\n\n    ...other properties omitted...  \n\n    // highlight-next-line\n    @ManyToMany(mappedBy = "authors")\n    List<Book> books();\n}\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Author.kt"',title:'"Author.kt"'},'package com.example.model\n\n...imports omitted...\n\n@Entity\ninterface Author {\n\n    ...other properties omitted...\n\n    // highlight-next-line\n    @ManyToMany(mappedBy = "authors")\n    val books: List<Book>\n} \n')))),(0,i.kt)("p",null,"Here, ",(0,i.kt)("inlineCode",{parentName:"p"},"mappedBy")," makes this the mirror side of the many-to-many mapping. "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'@ManyToMany(mappedBy = "authors")')," means ",(0,i.kt)("inlineCode",{parentName:"p"},"Author.books")," mirrors ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.authors"),"."),(0,i.kt)("div",{style:{display:"flex",alignItems:"start"}},(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\npublic interface Author {\n\n    @ManyToMany(\n        // highlight-next-line\n        mappedBy = "authors"\n    )\n    List<Book> books();\n\n    ...\n}\n'))),(0,i.kt)("div",null,(0,i.kt)("p",null,(0,i.kt)("img",{alt:"mirror",src:n(79442).Z,width:"130",height:"239"}))),(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Entity\npublic interface Book {\n\n    @ManyToMany\n    @JoinTable(...\u7565...)\n    // highlight-next-line\n    List<Author> authors();\n\n    ...\n}\n")))),(0,i.kt)("p",null,"Mirroring many-to-many is optional, bidirection is optional. But if bidirectional, one side must be owner and one mirror."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Unlike JPA/Hibernate, owner vs mirror does not affect save behavior in Jimmer. You can choose freely.  ")),(0,i.kt)("h2",{id:"complete-treenode-definition"},"Complete TreeNode Definition"),(0,i.kt)("p",null,"Now we understand associations. Let's quickly complete TreeNode:"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="TreeNode.java"',title:'"TreeNode.java"'},'package com.example.model;\n\n...imports omitted...\n\n@Entity\npublic interface TreeNode {\n\n    ...other properties omitted...\n\n    // highlight-next-line\n    @ManyToOne  \n    @Nullable\n    TreeNode parent();\n\n    // highlight-next-line\n    @OneToMany(mappedBy = "parent")\n    List<TreeNode> childNodes();\n}\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="TreeNode.kt"',title:'"TreeNode.kt"'},'package com.example.model\n\n...imports omitted... \n\n@Entity\ninterface TreeNode {\n\n    ...other properties omitted...\n\n    // highlight-next-line\n    @ManyToOne\n    val parent: TreeNode?\n\n    // highlight-next-line\n    @OneToMany(mappedBy = "parent") \n    val childNodes: List<TreeNode>\n}\n')))),(0,i.kt)("h2",{id:"why-interfaces"},"Why Interfaces"),(0,i.kt)("p",null,"We've seen entities declared as interfaces, not classes. Why?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Dynamicity"),(0,i.kt)("p",{parentName:"li"},"Jimmer entities are not simple Java beans, but dynamic objects."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Unset vs null property are totally different")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Accessing non-existent property throws ",(0,i.kt)("inlineCode",{parentName:"p"},"UnloadedException"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Serializing with Jackson omits unset properties"))),(0,i.kt)("p",{parentName:"li"},"See ",(0,i.kt)("strong",{parentName:"p"},"TODO")," for details on dynamicity."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Benefits of dynamicity"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Easily express arbitrary complex data structures. Entities can be partial, complete, or aggregate root of complex tree.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Since data structure is flexible, ORM can load, save, query entire object graph in one go instead of individual entities. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For querying, dynamic entity graphs can directly return from HTTP services without needing DTOs."),(0,i.kt)("p",{parentName:"li"},"  :::tip\nServer utilizes dynamicity to simplify development."),(0,i.kt)("p",{parentName:"li"},"  But Jimmer can restore static typing on client by auto-generating TypeScript DTOs for all use cases."),(0,i.kt)("p",{parentName:"li"},"  See ",(0,i.kt)("a",{parentName:"p",href:"../../object/dynamic"},"Dynamic")," for more.\n:::")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Compared to dynamic language ORMs"),(0,i.kt)("p",{parentName:"li"},"  As discussed, Jimmer exploits dynamicity for flexibility unmatched by static language ORMs."),(0,i.kt)("p",{parentName:"li"},"  But it rejects unsafety and unmaintainability of dynamic languages. Jimmer entities remain ordinary Java/Kotlin objects with all static typing, even null safety in Kotlin."),(0,i.kt)("p",{parentName:"li"},"  :::note\nThe only unsafety is ",(0,i.kt)("inlineCode",{parentName:"p"},"UnloadedException")," when accessing unloaded properties, similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"LazyInitializationException")," in JPA/Hibernate."),(0,i.kt)("p",{parentName:"li"},"  This is a necessary cost universally accepted in ORM.\n:::"),(0,i.kt)("p",{parentName:"li"},"  :::tip",(0,i.kt)("br",{parentName:"p"}),"\n","Jimmer finds the optimal balance between dynamic language flexibility and static language safety.\n:::\n")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Immutability"),(0,i.kt)("p",{parentName:"li"},"We've seen entities only have getters, meaning they are immutable."),(0,i.kt)("p",{parentName:"li"},"Mutable shared data can lead to inadvertent changes and inconsistencies. Immutable data avoids this risk."),(0,i.kt)("p",{parentName:"li"},"Enjoying immutable objects while suppressing downsides is hard, especially for complex object graphs like in ORM. "),(0,i.kt)("p",{parentName:"li"},"Here is an English translation of the Chinese text:"),(0,i.kt)("p",{parentName:"li"},"Luckily, in the JavaScript/TypeScript domain, there is a framework called ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/immerjs/immer"},"immer"),"\nthat provides a perfect way to handle deep immutability. Jimmer ports ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/immerjs/immer"},"immer"),'\nto Java/Kotlin and makes it the foundational programming model for the entire ORM.\nThe name "Jimmer" is also a tribute to ',(0,i.kt)("a",{parentName:"p",href:"https://github.com/immerjs/immer"},"immer"),". "),(0,i.kt)("p",{parentName:"li"},"See ",(0,i.kt)("a",{parentName:"p",href:"../../object/immutable/solution"},"Immutability/Solution"),' for details on how to create and "modify" immutable objects.'))),(0,i.kt)("p",null,"In summary, because Jimmer entities themselves are dynamic and immutable, they are not simple Java objects.\nTheir types have complex internal implementations. Therefore, Jimmer chooses to have developers write interfaces,\nand generate implementations at compile-time using AnnotationProcessors (Java) or KSP (Kotlin)."))}c.isMDXComponent=!0},79442:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/svg+xml;base64,PHN2ZyBpZD0iU3ZnanNTdmcxMDAxIiB3aWR0aD0iMTI5LjUiIGhlaWdodD0iMjM5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIj48ZGVmcyBpZD0iU3ZnanNEZWZzMTAwMiI+PC9kZWZzPjxnIGlkPSJTdmdqc0cxMDA4Ij48cGF0aCBpZD0iU3ZnanNQYXRoMTAwOSIgZD0iTTY1IDI1TDY1IDExOS41TDY1IDExOS41TDY1IDIxNCIgc3Ryb2tlPSIjMzIzMjMyIiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiPjwvcGF0aD48L2c+PGcgaWQ9IlN2Z2pzRzEwMTAiIHRyYW5zZm9ybT0ibWF0cml4KDYuMTIzMjMzOTk1NzM2NzY2ZS0xNywxLC0xLDYuMTIzMjMzOTk1NzM2NzY2ZS0xNywxMDUsMjcpIj48cGF0aCBpZD0iU3ZnanNQYXRoMTAxMSIgZD0iTSAwIDBMIDE4NCAwTCAxNzQgMjBMIDEwIDIwTCAwIDBaIiBzdHJva2U9InJnYmEoMzMsNDEsNDgsMSkiIHN0cm9rZS13aWR0aD0iMiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PGcgaWQ9IlN2Z2pzRzEwMTIiPjx0ZXh0IGlkPSJTdmdqc1RleHQxMDEzIiBmb250LWZhbWlseT0i5b6u6L2v6ZuF6buRIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEzcHgiIHdpZHRoPSIxNDhweCIgZmlsbD0iIzMyMzIzMiIgZm9udC13ZWlnaHQ9IjQwMCIgYWxpZ249Im1pZGRsZSIgbGluZUhlaWdodD0iMTI1JSIgYW5jaG9yPSJtaWRkbGUiIGZhbWlseT0i5b6u6L2v6ZuF6buRIiBzaXplPSIxM3B4IiB3ZWlnaHQ9IjQwMCIgZm9udC1zdHlsZT0iIiBvcGFjaXR5PSIxIiB5PSItMC42MjUiIHRyYW5zZm9ybT0icm90YXRlKDApIj48L3RleHQ+PC9nPjwvZz48ZyBpZD0iU3ZnanNHMTAxNCIgdHJhbnNmb3JtPSJtYXRyaXgoLTEuODM2OTcwMTk4NzIxMDI5N2UtMTYsLTEsMSwtMS44MzY5NzAxOTg3MjEwMjk3ZS0xNiwyNS41MDAwMDAwMDAwMDAwMTgsMjEzLjUpIj48cGF0aCBpZD0iU3ZnanNQYXRoMTAxNSIgZD0iTSAwIDBMIDE4NyAwTCAxNzcgMjBMIDEwIDIwTCAwIDBaIiBzdHJva2U9InJnYmEoMzMsNDEsNDgsMSkiIHN0cm9rZS13aWR0aD0iMiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PGcgaWQ9IlN2Z2pzRzEwMTYiPjx0ZXh0IGlkPSJTdmdqc1RleHQxMDE3IiBmb250LWZhbWlseT0i5b6u6L2v6ZuF6buRIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEzcHgiIHdpZHRoPSIxNTBweCIgZmlsbD0iIzMyMzIzMiIgZm9udC13ZWlnaHQ9IjQwMCIgYWxpZ249Im1pZGRsZSIgbGluZUhlaWdodD0iMTI1JSIgYW5jaG9yPSJtaWRkbGUiIGZhbWlseT0i5b6u6L2v6ZuF6buRIiBzaXplPSIxM3B4IiB3ZWlnaHQ9IjQwMCIgZm9udC1zdHlsZT0iIiBvcGFjaXR5PSIxIiB5PSItMC42MjUiIHRyYW5zZm9ybT0icm90YXRlKDApIj48L3RleHQ+PC9nPjwvZz48L3N2Zz4="}}]);