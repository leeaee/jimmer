"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9761],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,k=u["".concat(s,".").concat(d)]||u[d]||c[d]||r;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),i=n(34334);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(83117),i=n(67294),r=n(34334),l=n(72389),o=n(67392),s=n(7094),p=n(12466);const m="tabList__CuJ",c="tabItem_LNqP";function u(e){var t;const{lazy:n,block:l,defaultValue:u,values:d,groupId:k,className:f}=e,h=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=d??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,o.l)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===u?u:u??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==v&&!y.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:N}=(0,s.U)(),[w,O]=(0,i.useState)(v),j=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=k){const e=g[k];null!=e&&e!==w&&y.some((t=>t.value===e))&&O(e)}const E=e=>{const t=e.currentTarget,n=j.indexOf(t),a=y[n].value;a!==w&&(T(t),O(a),null!=k&&N(k,String(a)))},D=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=j.indexOf(e.currentTarget)+1;n=j[t]??j[0];break}case"ArrowLeft":{const t=j.indexOf(e.currentTarget)-1;n=j[t]??j[j.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",m)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},f)},y.map((e=>{let{value:t,label:n,attributes:l}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>j.push(e),onKeyDown:D,onFocus:E,onClick:E},l,{className:(0,r.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,i.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,l.Z)();return i.createElement(u,(0,a.Z)({key:String(t)},e))}},10028:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=n(83117),i=(n(67294),n(3905)),r=n(65488),l=n(85162);const o={sidebar_position:2,title:"Different Entities"},s=void 0,p={unversionedId:"overview/entity",id:"overview/entity",title:"Different Entities",description:"Style of Jimmer Entities",source:"@site/docs/overview/entity.mdx",sourceDirName:"overview",slug:"/overview/entity",permalink:"/jimmer/docs/overview/entity",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/overview/entity.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Different Entities"},sidebar:"tutorialSidebar",previous:{title:"Project Introduction",permalink:"/jimmer/docs/overview/introduction"},next:{title:"Example(Fastest learning way)",permalink:"/jimmer/docs/overview/standard-demo"}},m={},c=[{value:"Style of Jimmer Entities",id:"style-of-jimmer-entities",level:2},{value:"Who Implements These Interfaces?",id:"who-implements-these-interfaces",level:2},{value:"What Capabilities Do These Entities Have?",id:"what-capabilities-do-these-entities-have",level:2},{value:"1. Dynamicity",id:"1-dynamicity",level:3},{value:"2. Immutability",id:"2-immutability",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"style-of-jimmer-entities"},"Style of Jimmer Entities"),(0,i.kt)("p",null,"Whether you open the demo project per ",(0,i.kt)("a",{parentName:"p",href:"./standard-demo"},"Example(Fastest learning way)")," or continue reading the docs, you'll find Jimmer entities are quite different:"),(0,i.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},"@Entity\npublic interface Book {\n\n    @Id \n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    long id();\n    \n    String name();\n    \n    int edition();\n\n    BigDecimal price();\n\n    @Nullable\n    @ManyToOne\n    BookStore store();\n\n    @ManyToMany\n    List<Author> authors();  \n}\n"))),(0,i.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},"@Entity\ninterface Book {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n    \n    val name: String\n\n    val edition: Int\n\n    val price: BigDecimal\n\n    @ManyToOne\n    val store: BookStore?\n\n    @ManyToMany\n    val authors: List<Author>\n}\n")))),(0,i.kt)("p",null,"You'll notice Jimmer entities are quite different from other ORMs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Defined as interfaces rather than classes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"All properties are read-only, cannot be set:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For Java, only getters, no setters"),(0,i.kt)("p",{parentName:"li"},"Here, getters can keep the prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," like POJO, or drop the ",(0,i.kt)("inlineCode",{parentName:"p"},"prefix")," like Java record ",(0,i.kt)("em",{parentName:"p"},"(as you see here)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For Kotlin, all properties are declared by ",(0,i.kt)("inlineCode",{parentName:"p"},"val")," rather than ",(0,i.kt)("inlineCode",{parentName:"p"},"var")))))),(0,i.kt)("p",null,"These distinct entity styles will be explained in detail in ",(0,i.kt)("a",{parentName:"p",href:"../object"},"Object"),",\nbut some introductory discussion is warranted here for initial understanding."),(0,i.kt)("p",null,"This article will briefly discuss two questions from two perspectives:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Who implements these interfaces?"),(0,i.kt)("li",{parentName:"ul"},"What capabilities do these entities have?")),(0,i.kt)("p",null,"Again, this is just a simple intro - full details are in ",(0,i.kt)("a",{parentName:"p",href:"../object"},"Object"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This entity style is crucial for many of Jimmer's powerful capabilities. ")),(0,i.kt)("h2",{id:"who-implements-these-interfaces"},"Who Implements These Interfaces?"),(0,i.kt)("p",null,"Jimmer entities are not simple POJOs - they contain non-trivial logic. So developers cannot define them via simple POJOs."),(0,i.kt)("p",null,"Instead, Jimmer lets developers define abstract interfaces, and generates more code at compile-time to implement them:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For Java, this is via ",(0,i.kt)("a",{parentName:"p",href:"https://www.baeldung.com/java-annotation-processing-builder"},"Annotation Processor"),". "),(0,i.kt)("p",{parentName:"li"},"The well-known library ",(0,i.kt)("inlineCode",{parentName:"p"},"Lombok")," is implement by it.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For Kotlin, this is via ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/ksp-overview.html"},"KSP"),"."))),(0,i.kt)("p",null,"Jimmer provides ",(0,i.kt)("a",{parentName:"p",href:"https://www.baeldung.com/java-annotation-processing-builder"},"Annotation Processor")," and ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/ksp-overview.html"},"KSP")," for Java and Kotlin respectively,\nto generate source code, including implementing these interfaces."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"./get-started/generate-code"},"Get Started/Generate Code")," for details - not repeated here."),(0,i.kt)("h2",{id:"what-capabilities-do-these-entities-have"},"What Capabilities Do These Entities Have?"),(0,i.kt)("p",null,"Jimmer entities have two important capabilities:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Dynamicity")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Immutability"))),(0,i.kt)("h3",{id:"1-dynamicity"},"1. Dynamicity"),(0,i.kt)("p",null,"Jimmer entities introduce dynamicity to entity objects without compromising spell-checking, type-safety, null-safety ",(0,i.kt)("em",{parentName:"p"},"(kotlin)")," of strongly typed languages."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"So Jimmer is both static and dynamic. ")),(0,i.kt)("p",null,"Dynamicity means specifying an property as null vs not specifying an property are completely different:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Specified as null: we know the value, it really has no data.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Not specified: we don't know the value, the current context does not care about it."),(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Accessing an unspecified property directly leads to ",(0,i.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.UnloadedException"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Jackson serialization ",(0,i.kt)("em",{parentName:"p"},"(needs ",(0,i.kt)("inlineCode",{parentName:"em"},"org.babyfish.jimmer.jackson.ImmutableModule"),")")," automatically ingores all unspecified properties.")))))),(0,i.kt)("p",null,"Dynamicity enables two powerful capabilities for the ORM:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"../query/object-fetcher"},"Object Fetcher")),(0,i.kt)("p",{parentName:"li"},"One statement to query data structure of arbitrary shape, like GraphQL.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"../mutation/save-command"},"Save Command")),(0,i.kt)("p",{parentName:"li"},"One statement to save data structure of arbitrary shape, like React/Vue ",(0,i.kt)("em",{parentName:"p"},"(Jimmer finds the ",(0,i.kt)("inlineCode",{parentName:"em"},"diff")," to change database)"),"."))),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"../object/dynamic"},"Object/Dynamicity")," for full details."),(0,i.kt)("h3",{id:"2-immutability"},"2. Immutability"),(0,i.kt)("p",null,"Immutability has many well-known benefits, but here we only focus on the benefits Jimmer attempts to derive from it."),(0,i.kt)("p",null,"As an ORM, of course, Jimmer allows declaring bidirectional associations between entity types."),(0,i.kt)("p",null,"However, when creating objects, once an object holds associated objects, the direction is fixed - associated objects cannot back reference the current object."),(0,i.kt)("p",null,"That means:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Circular references are allowed in type definition. "),(0,i.kt)("p",{parentName:"li"},"Whether to declare bidirectional associations is decided when designing the Global Entity Association Model.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Circular references are forbidden in object creating. "),(0,i.kt)("p",{parentName:"li"},"Which direction to associate is chosen by each business scenario, unrelated to the global design."))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Jimmer guarantees no circular references between objects.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Immutability ensures users cannot violate this later.")))),(0,i.kt)("p",null,"Data structure without circular references can be easily JSON serialized, and the JSON is standard and simple enough so that any language of HTTP client can understand and handle it."),(0,i.kt)("p",null,"Therefore, for queries, Jimmer allows directly returning entities instead of DTOs."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Jimmer does support a DTO language making DTOs very cheap and fast, but it advocates ",(0,i.kt)("inlineCode",{parentName:"p"},"Input DTOs")," over ",(0,i.kt)("inlineCode",{parentName:"p"},"Output DTOs"),", so returning entities directly in query is recommended.")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"../object/immutable"},"Object/Immutability")," for details."))}d.isMDXComponent=!0}}]);