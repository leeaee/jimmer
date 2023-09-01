"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9872],{17222:(e,n,t)=>{t.d(n,{ZP:()=>l});var i=t(83117),a=(t(67294),t(3905)),o=t(87918),r=t(67720);const s={toc:[]};function l(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Currently, other technologies that operate on SQL, whether ORM or non-ORM, have a blank area: they only consider dynamic ",(0,a.kt)("inlineCode",{parentName:"p"},"where"),", and do not consider ",(0,a.kt)("inlineCode",{parentName:"p"},"dynamic join"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Dynamic JOIN")," is defined as: If some dynamic query conditions are for tables other than the current table. This means"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When the condition is met: First join to other tables through associative attributes, then add dynamic where conditions to the joined table")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When the condition is not met: Cannot join other tables through associative attributes"))),(0,a.kt)(r.Z,{mdxType:"Divider"},(0,a.kt)(o.Z,{label:"Scene-1",mdxType:"Chip"})),(0,a.kt)("p",null,"Let's first look at the first scene, taking MyBatis oriented to native SQL as an example"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Define MyBatis Mapper interface"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@Mapper\npublic interface BookMapper {\n\n    List<Book> findBooks(\n        @Nullable String name,\n        @Nullable String storeName, \n        @Nullable String storeWebsite\n    );\n}\n")),(0,a.kt)("p",{parentName:"li"},"Here, all query parameters may be null, which is clearly a dynamic query."),(0,a.kt)("p",{parentName:"li"},"The last two query parameters: ",(0,a.kt)("inlineCode",{parentName:"p"},"storeName")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"storeWebsite"),", their filtering conditions are not applied on the current table ",(0,a.kt)("inlineCode",{parentName:"p"},"BOOK"),", but on the parent table ",(0,a.kt)("inlineCode",{parentName:"p"},"BOOK_STORE"),".\nThat is, when any of these two parameters is non-null, a JOIN to the ",(0,a.kt)("inlineCode",{parentName:"p"},"BOOK_STORE")," table will be generated. This table connection dynamically determined by the parameter value is referred to as ",(0,a.kt)("inlineCode",{parentName:"p"},"dynamic JOIN")," in this article.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Define MyBatis SQL mapping XML"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8" ?>\n<!DOCTYPE mapper\n        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"\n        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">\n<mapper namespace="somepackage.BookMapper">\n    <select id="findBooks" resultType="somepackage.Book">\n        select * from BOOK as book\n        \x3c!-- highlight-next-line --\x3e\n        <if test="storeName != null or storeWebsite != null"> \u2776\n            inner join BOOK_STORE as store\n                on book.STORE_ID = store.ID\n        </if>\n        <where>\n            <if test="name != null">\n                and book.NAME = #{name}\n            </if>\n            <if test="storeName != null"> \u2777\n                and store.NAME = #{storeName}\n            </if>\n            <if test="storeWebsite != null">\n                and store.WEBSITE = #{storeWebsite} \u2778\n            </if>\n        </where>\n    </select>\n</mapper>\n')),(0,a.kt)("p",{parentName:"li"},"Here, \u2776 is the dynamic JOIN. However, for developers, \u2777 and \u2778 are the purpose, and \u2776 is the work that has to be done to support \u2777 and \u2778. Its judgment condition is a burden."),(0,a.kt)("p",{parentName:"li"},"You may have noticed that \u2776 uses ",(0,a.kt)("inlineCode",{parentName:"p"},"or"),". This is easy to understand."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"However, this is only the simplest dynamic connection between two tables. For deeper multi-table connection operations, the complexity of dynamic connections will increase dramatically!")))),(0,a.kt)(r.Z,{mdxType:"Divider"},(0,a.kt)(o.Z,{label:"Scene-2",mdxType:"Chip"})),(0,a.kt)("p",null,"Let's take a look at the second scene. With the previous example as the basis, this example is decoupled from any business."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8" ?>\n<!DOCTYPE mapper\n    PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"\n    "http://mybatis.org/dtd/mybatis-3-mapper.dtd">\n<mapper namespace="somepackage.AMapper">\n  <select id="findAObjects" resultType="somepackage.A">\n    select distinct A.id\n    from A\n    \x3c!-- highlight-start --\x3e  \n    <if test="bId != null or cId != null or dId != null or eId != null">\n      inner join B on A.ID = B.A_ID \n    </if>\n    <if test="cId != null or dId != null or eId != null">\n      inner join C on B.ID = C.B_ID\n    </if>\n    <if test="dId != null or eId != null">\n      inner join D on C.ID = D.C_ID \n    </if>\n    <if test="eId != null">\n      inner join E on D.ID = E.D_ID\n    </if>\n    \x3c!-- highlight-end --\x3e\n    <where>\n      <if test="aId != null">\n        and A.ID = #{aId}  \n      </if>\n      <if test="bId != null">\n        and B.ID = #{bId}\n      </if>\n      <if test="cId != null">\n        and C.ID = #{cId}\n      </if>\n      <if test="dId != null">\n        and D.ID = #{dId}\n      </if>\n      <if test="eId != null">\n        and E.ID = #{eId}\n      </if>\n    </where>\n  </select>\n</mapper>\n')),(0,a.kt)("p",null,"The logic of this example is simple. The five tables A, B, C, D and E form a JOIN chain, and each table has a dynamic query condition. However, as you can see, the complexity of dynamic JOIN has become unacceptable."))}l.isMDXComponent=!0},1055:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=t(83117),a=(t(67294),t(3905)),o=t(17222);t(65488),t(85162);const r={sidebar_position:1,title:"Problems with Other Solutions"},s=void 0,l={unversionedId:"query/dynamic-join/problem",id:"query/dynamic-join/problem",title:"Problems with Other Solutions",description:"In the previous doc, we discussed dynamic queries. In this section, we will explore the problems with dynamic table joins.",source:"@site/docs/query/dynamic-join/problem.mdx",sourceDirName:"query/dynamic-join",slug:"/query/dynamic-join/problem",permalink:"/jimmer/docs/query/dynamic-join/problem",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/query/dynamic-join/problem.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Problems with Other Solutions"},sidebar:"tutorialSidebar",previous:{title:"Dynamic JOIN",permalink:"/jimmer/docs/query/dynamic-join/"},next:{title:"Association Path Chaining",permalink:"/jimmer/docs/query/dynamic-join/chain-style"}},p={},d=[],m={toc:d};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the ",(0,a.kt)("a",{parentName:"p",href:"../dynamic-where"},"previous doc"),", we discussed dynamic queries. In this section, we will explore the problems with dynamic table joins."),(0,a.kt)(o.ZP,{mdxType:"DynamicJoinProblem"}))}c.isMDXComponent=!0}}]);