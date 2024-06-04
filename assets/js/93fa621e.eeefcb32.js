"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[2654],{8902:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=o(4848),s=o(8453);const i={slug:"distributed-push-down",title:"OceanBase Distributed Pushdown Technology"},a=void 0,u={permalink:"/docs-playground/blog/distributed-push-down",editUrl:"https://github.com/powerfooi/docs-playground/tree/main/blog/tech-distributed-push-down.md",source:"@site/blog/tech-distributed-push-down.md",title:"OceanBase Distributed Pushdown Technology",description:'I have been studying the book "An Interpretation of OceanBase Database Source Code" and noticed that it contains very little content about the SQL executor. Therefore, I want to write some blog posts about the SQL executor as a supplement to this book. In my last post Adaptive Techniques in the OceanBase Database Execution Engine, I introduced some representative adaptive techniques in the executor, based on the assumption that you have a basic understanding of the two-phase pushdown technique for HASH GROUP BY. If you are unfamiliar with the multi-phase pushdown technique of the executor, you are welcome to read this post to learn about common adaptive distributed pushdown techniques in OceanBase Database.',date:"2024-06-03T13:23:07.000Z",formattedDate:"June 3, 2024",tags:[],readingTime:13.545,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"distributed-push-down",title:"OceanBase Distributed Pushdown Technology"},unlisted:!1,prevItem:{title:"Adaptive Techniques in the OceanBase SQL Execution Engine",permalink:"/docs-playground/blog/adaptive-sql-execution-engine"},nextItem:{title:"OceanBase Technical Insights for High-Concurrency Scenarios",permalink:"/docs-playground/blog/high-concurrency"}},r={authorsImageUrls:[]},c=[{value:"What is distributed pushdown?",id:"what-is-distributed-pushdown",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",h2:"h2",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:['I have been studying the book "An Interpretation of OceanBase Database Source Code" and noticed that it contains very little content about the SQL executor. Therefore, I want to write some blog posts about the SQL executor as a supplement to this book. In my last post ',(0,n.jsx)(t.a,{href:"https://open.oceanbase.com/blog/5250647552",children:"Adaptive Techniques in the OceanBase Database Execution Engine"}),", I introduced some representative adaptive techniques in the executor, based on the assumption that you have a basic understanding of the two-phase pushdown technique for HASH GROUP BY. If you are unfamiliar with the multi-phase pushdown technique of the executor, you are welcome to read this post to learn about common adaptive distributed pushdown techniques in OceanBase Database."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"what-is-distributed-pushdown",children:"What is distributed pushdown?"}),"\n",(0,n.jsx)(t.p,{children:"To better utilize parallel execution capabilities and reduce CPU and network overheads during distributed execution, the optimizer often pushes down some operators to lower-layer compute nodes when it generates execution plans. This is to make full use of the computing resources of the cluster to improve the execution efficiency. Next, I'm going to introduce the most common distributed pushdown techniques in OceanBase Database."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>u});var n=o(6540);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);