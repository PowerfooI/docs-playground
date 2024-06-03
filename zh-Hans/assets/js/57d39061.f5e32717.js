"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[6212],{1039:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var a=n(4848),o=n(8453);const s={slug:"challenges-facing-AP-performance-improvement",title:"Challenges facing AP performance improvement"},i=void 0,c={permalink:"/docs-playground/zh-Hans/blog/challenges-facing-AP-performance-improvement",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/engine-self-adjust.md",source:"@site/blog/engine-self-adjust.md",title:"Challenges facing AP performance improvement",description:'I have been studying the book "An Interpretation of OceanBase Database Source Code" and noticed that it contains very little content about the SQL executor. The book focuses on parallel execution in the executor. This blog post introduces some common adaptive techniques in the executor of OceanBase Database. You can take it as a supplement to the executor part in this book.',date:"2024-06-03T12:01:00.897Z",formattedDate:"2024\u5e746\u67083\u65e5",tags:[],readingTime:11.445,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"challenges-facing-AP-performance-improvement",title:"Challenges facing AP performance improvement"},unlisted:!1,prevItem:{title:"IO Isolation in OceanBase Database",permalink:"/docs-playground/zh-Hans/blog/io-isolation"},nextItem:{title:"Distributed Push down",permalink:"/docs-playground/zh-Hans/blog/distributed-push-down"}},r={authorsImageUrls:[]},l=[{value:"Challenges facing AP performance improvement",id:"challenges-facing-ap-performance-improvement",level:2}];function u(e){const t={blockquote:"blockquote",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:'I have been studying the book "An Interpretation of OceanBase Database Source Code" and noticed that it contains very little content about the SQL executor. The book focuses on parallel execution in the executor. This blog post introduces some common adaptive techniques in the executor of OceanBase Database. You can take it as a supplement to the executor part in this book.'}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"challenges-facing-ap-performance-improvement",children:"Challenges facing AP performance improvement"}),"\n",(0,a.jsx)(t.p,{children:"If you want to improve the AP performance of a database, you will face three challenges:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"First, the optimizer cannot ensure that its estimates are always absolutely accurate. The reasons are complex. For example, the statistics are inaccurate in some scenarios, or the cost model is inconsistent with the actual model. These reasons will contribute to a non-optimal execution plan."}),"\n",(0,a.jsx)(t.li,{children:"Second, data skew often occurs in production and business scenarios, which will significantly affect the execution efficiency, especially the parallel execution efficiency."}),"\n",(0,a.jsx)(t.li,{children:"Third, the semantics of NULL are special. Characteristics of widespread NULL values are different from those of normal values in operations such as joins, but this is easily ignored. The executor must perform special processing on NULL values. Otherwise, various bad cases can occur."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Adaptive techniques enable the execution engine to dynamically adjust the execution strategy based on the actual situation, thereby improving the execution performance. In a word, adaptive techniques are introduced to address the preceding challenges. Next, let me introduce some typical adaptive techniques in the executor of OceanBase Database."})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var a=n(6540);const o={},s=a.createContext(o);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);