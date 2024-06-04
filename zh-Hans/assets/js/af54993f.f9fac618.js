"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[7568],{7834:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>r,toc:()=>l});var i=a(4848),s=a(8453);const n={slug:"adaptive-sql-execution-engine",title:"Adaptive Techniques in the OceanBase SQL Execution Engine"},o=void 0,r={permalink:"/docs-playground/zh-Hans/blog/adaptive-sql-execution-engine",editUrl:"https://github.com/powerfooi/docs-playground/tree/main/blog/tech-adaptive-engine.md",source:"@site/blog/tech-adaptive-engine.md",title:"Adaptive Techniques in the OceanBase SQL Execution Engine",description:'I have been studying the book "An Interpretation of OceanBase Database Source Code" and noticed that it contains very little content about the SQL executor. The book focuses on parallel execution in the executor. This blog post introduces some common adaptive techniques in the executor of OceanBase Database. You can take it as a supplement to the executor part in this book.',date:"2024-06-03T13:23:07.000Z",formattedDate:"2024\u5e746\u67083\u65e5",tags:[],readingTime:11.445,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"adaptive-sql-execution-engine",title:"Adaptive Techniques in the OceanBase SQL Execution Engine"},unlisted:!1,prevItem:{title:"How OB Cloud Achieves Cost Reduction and Efficiency Improvement in Replacing MySQL Scenarios \uff1f",permalink:"/docs-playground/zh-Hans/blog/obcloud"},nextItem:{title:"OceanBase Distributed Pushdown Technology",permalink:"/docs-playground/zh-Hans/blog/distributed-push-down"}},h={authorsImageUrls:[]},l=[{value:"Challenges facing AP performance improvement",id:"challenges-facing-ap-performance-improvement",level:2},{value:"Adaptive join filter",id:"adaptive-join-filter",level:2},{value:"Adaptive HASH GROUP BY",id:"adaptive-hash-group-by",level:2},{value:"Adaptive hybrid hash shuffling",id:"adaptive-hybrid-hash-shuffling",level:2},{value:"Adaptive NULL-aware hash join",id:"adaptive-null-aware-hash-join",level:2},{value:"Preview of the next post",id:"preview-of-the-next-post",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:'I have been studying the book "An Interpretation of OceanBase Database Source Code" and noticed that it contains very little content about the SQL executor. The book focuses on parallel execution in the executor. This blog post introduces some common adaptive techniques in the executor of OceanBase Database. You can take it as a supplement to the executor part in this book.'}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"challenges-facing-ap-performance-improvement",children:"Challenges facing AP performance improvement"}),"\n",(0,i.jsx)(t.p,{children:"If you want to improve the AP performance of a database, you will face three challenges:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"First, the optimizer cannot ensure that its estimates are always absolutely accurate. The reasons are complex. For example, the statistics are inaccurate in some scenarios, or the cost model is inconsistent with the actual model. These reasons will contribute to a non-optimal execution plan."}),"\n",(0,i.jsx)(t.li,{children:"Second, data skew often occurs in production and business scenarios, which will significantly affect the execution efficiency, especially the parallel execution efficiency."}),"\n",(0,i.jsx)(t.li,{children:"Third, the semantics of NULL are special. Characteristics of widespread NULL values are different from those of normal values in operations such as joins, but this is easily ignored. The executor must perform special processing on NULL values. Otherwise, various bad cases can occur."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Adaptive techniques enable the execution engine to dynamically adjust the execution strategy based on the actual situation, thereby improving the execution performance. In a word, adaptive techniques are introduced to address the preceding challenges. Next, let me introduce some typical adaptive techniques in the executor of OceanBase Database."}),"\n",(0,i.jsx)(t.h2,{id:"adaptive-join-filter",children:"Adaptive join filter"}),"\n",(0,i.jsx)(t.p,{children:"Let me take a hash join shown in the following figure as an example to introduce the background of join filters. The hash join involves two tables and uses hash repartitioning as the data shuffle mode. In other words, each row in the left-side and right-side tables will be repartitioned based on the hash value."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2024-01/1705636564738.png",alt:"1705636564"})}),"\n",(0,i.jsx)(t.p,{children:"Generally, the right-side table of a hash join is very large in size, which will lead to a high cost in data shuffle. When the left-side table is read to build the hash table, a join filter can extract the data characteristics of the left-side table and send them to the right-side table. This can filter out some of the data in the right-side table before a shuffle. If the join filter has high filtering performance, this step can significantly reduce the network overhead."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2024-01/1705636577135.png",alt:"1705636577"})}),"\n",(0,i.jsx)(t.p,{children:"OceanBase Database has implemented join filters as early as in V3.x and has been undergoing join filter optimization ever since. The following figure shows the impact of join filters on the overall performance during the TPC-H benchmark run in 2021, in which OceanBase Database won the first place in the world."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2024-01/1705636587368.png",alt:"1705636587"})}),"\n",(0,i.jsx)(t.p,{children:"Join filters help significantly improve the performance for joins on large tables, such as Q9 shown in the preceding figure."}),"\n",(0,i.jsx)(t.p,{children:"However, join filters cannot always bring positive benefits in all scenarios, such as Q18 shown in the preceding figure. The overhead of a join filter is used for three tasks:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Create the join filter. This is to extract the data characteristics of the left-side table in a hash join when the left-side table is read to build the hash table."}),"\n",(0,i.jsx)(t.li,{children:"Send the join filter. This is to send the data characteristics of the left-side table to the right-side table."}),"\n",(0,i.jsx)(t.li,{children:"Apply the join filter. This is to apply the data characteristics of the left-side table on the right-side table for row filtering."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"If the selectivity of the join filter is low, the reduced network overhead cannot make up the preceding overhead, and the overall performance will deteriorate."}),"\n",(0,i.jsx)(t.p,{children:"The optimizer determines whether to allocate a join filter based on the cost. The optimizer can roughly estimate the selectivity of a join filter based on statistics such as the number of distinct values (NDV) and MIN/MAX values. However, the optimizer cannot provide accurate estimates of intermediate calculation results in the executor."}),"\n",(0,i.jsx)(t.p,{children:"To resolve this issue, OceanBase Database V4.1 implements sliding window-based adaptive join filters. This algorithm aims to make up the performance loss when an incorrect join filter is applied."}),"\n",(0,i.jsx)(t.p,{children:"This algorithm splits data into multiple sliding windows and collects statistics on the apply process of each window. If the algorithm detects that the filtering effects of a window are not as expected, it will not apply the join filter on the next window and pass this window. If the filtering effects of continuous windows are not as expected, the number of passed windows will also increase linearly to reduce the apply cost."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2024-01/1705636596184.png",alt:"1705636596"})}),"\n",(0,i.jsx)(t.p,{children:"The following figure shows a bad case of join filter. Different strategies are used for performance tests. In the performance test where an adaptive join filter is used, the performance loss is made up by half. However, the performance after compensation is still lower than that achieved when the join filter is not allocated."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2024-01/1705636604838.png",alt:"1705636604"})}),"\n",(0,i.jsx)(t.p,{children:"Although this solution makes up the performance loss caused by applying a join filter on the right-side table, the cost in creating and sending the join filter is not made up. OceanBase Database will enhance the capability for adaptive join filter creation in later versions."}),"\n",(0,i.jsx)(t.h2,{id:"adaptive-hash-group-by",children:"Adaptive HASH GROUP BY"}),"\n",(0,i.jsx)(t.p,{children:"This section introduces the adaptive algorithm for HASH GROUP BY in OceanBase Database."}),"\n",(0,i.jsx)(t.p,{children:"The following figures show the execution plans for HASH GROUP BY in a parallel scenario."}),"\n",(0,i.jsx)(t.p,{children:"Here is the execution plan for two-phase HASH GROUP BY."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2024-01/1705636615372.png",alt:"1705636615"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2024-01/1705636625338.png",alt:"1705636625"})}),"\n",(0,i.jsx)(t.p,{children:"Here is the execution plan for one-phase HASH GROUP BY."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2024-01/1705636635870.png",alt:"1705636636"})}),"\n",(0,i.jsx)(t.p,{children:"The difference is that two-phase HASH GROUP BY performs a partial GROUP BY operation on data before a shuffle. Like join filters, one-phase and two-phase HASH GROUP BY have their own advantages and disadvantages."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Two-phase HASH GROUP BY applies to scenarios with a high data aggregation rate, where the amount of data to be shuffled can be decreased through pre-aggregation."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2024-01/1705636648890.png",alt:"1705636648"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"One-phase HASH GROUP BY applies to scenarios with a low data aggregation rate."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2024-01/1705636705335.png",alt:"1705636705"})}),"\n",(0,i.jsx)(t.p,{children:"If the data aggregation rate is low, the network overhead will still be high because a two-phase plan will consume extra CPU resources to probe the hash table, leading to poorer performance than a one-phase plan."}),"\n",(0,i.jsx)(t.p,{children:"The following figure compares the performance of two-phase and one-phase plans for queries in ClickBench. It can be observed that some queries are suitable for two-phase execution while others are suitable for one-phase execution. Generally, the optimizer tends to select a two-phase plan to avoid serious performance deterioration."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2024-01/1705636714319.png",alt:"1705636714"})}),"\n",(0,i.jsx)(t.p,{children:"In versions earlier than OceanBase Database V4.x, the optimizer will determine whether to select a two-phase plan or one-phase plan based on the NDV value in the statistics. You can also use the session variable _GROUPBY_NOPUSHDOWN_CUT_RATIO to set the plan preference. If the ratio of the input data amount to the data amount after aggregation is greater than the specified value, a two-phase plan is generated. Otherwise, a one-phase plan is generated. In practice, it is difficult to use this variable. The input and output data amounts of GROUP BY are estimated by the optimizer based on statistics. Generally, it is challenging for O&M personnel to set this variable to an appropriate value, ensuring that the optimizer selects a better plan for GROUP BY."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2024-01/1705636723981.png",alt:"1705636724"})}),"\n",(0,i.jsx)(t.p,{children:"In OceanBase Database V4.x, the _GROUPBY_NOPUSHDOWN_CUT_RATIO variable is deprecated and the optimizer is forced to select a two-phase plan. In a two-phase plan in V4.x, the first phase must be adaptive GROUP BY."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2024-01/1705636736767.png",alt:"1705636736"})}),"\n",(0,i.jsx)(t.p,{children:"The core idea of the adaptive GROUP BY technique is to determine whether to perform deduplication or directly send data based on an NDV value collected in real time. The technique splits data into multiple rounds and measures the aggregation rate of each round. If the deduplication rate of a round is not as expected, the technique will clear the hash table, flush all the data obtained in the first phase to the network, and aggregate the final data in the second phase."}),"\n",(0,i.jsx)(t.p,{children:"Data is split into rounds based on the size of three-level CPU caches. This is because if the hash table can be accommodated in the L2 cache, the performance can be improved by more than 30% compared with that of a large hash table. A cache-aware mechanism is provided to increase the size of data in each round from the L2 cache size to the L3 cache size when the deduplication rate becomes low so that data will be accommodated in the L3 cache."}),"\n",(0,i.jsx)(t.p,{children:"If the hash deduplication effects of multiple consecutive rounds are poor, the bypass strategy is used. Specifically, rows are directly delivered to the upper-layer operator without hash deduplication, which looks like a one-phase plan."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2024-01/1705636744584.png",alt:"1705636744"})}),"\n",(0,i.jsx)(t.p,{children:"This strategy greatly improves the performance but also has bad cases where a large amount of data is involved while the overall deduplication rate is favorable. If the overall deduplication rate is estimated based on only a small part of the data, the estimate is probably inaccurate. In OceanBase Database V4.2, the NDV values of multiple data rounds are merged to improve the estimate accuracy."}),"\n",(0,i.jsx)(t.p,{children:"The following figure compares the performance of one-phase, adaptive, and two-phase GROUP BY for queries in ClickBench."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2024-01/1705636754240.png",alt:"1705636754"})}),"\n",(0,i.jsx)(t.p,{children:"The result shows that adaptive GROUP BY can select an appropriate execution strategy almost in all scenarios. With adaptive GROUP BY, one plan applies to different data models. This is the goal we aim to achieve. OceanBase Database V4.3 will support a global NDV estimate strategy to make adaptive decision-making more accurate."}),"\n",(0,i.jsx)(t.h2,{id:"adaptive-hybrid-hash-shuffling",children:"Adaptive hybrid hash shuffling"}),"\n",(0,i.jsx)(t.p,{children:"Next, let me introduce some adaptive techniques we have developed based on data skew. The following figures show two common plans for a simple distributed hash join."}),"\n",(0,i.jsx)(t.p,{children:"One is a broadcast plan, which broadcasts the left-side table to each thread of the right-side table. The threads will use data in the right-side table to probe data in the left-side table."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2024-01/1705636765811.png",alt:"1705636765"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2024-01/1705636772964.png",alt:"1705636773"})}),"\n",(0,i.jsx)(t.p,{children:"The other is a hash repartitioning plan, which distributes the data in the left-side and right-side tables to different threads based on the hash value. Each thread performs a join separately."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2024-01/1705636780959.png",alt:"1705636781"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2024-01/1705636790880.png",alt:"1705636790"})}),"\n",(0,i.jsx)(t.p,{children:"The two plans have their own advantages and disadvantages. Generally, the broadcast plan applies to a scenario where a large table is joined with a small table. In this scenario, the small table is broadcast to limit the broadcast cost. In a scenario where two large tables are joined and repartitioning based on the join key is not supported, hash-hash is almost the only choice. However, the hash-hash strategy also has bad cases in data skew scenarios. For example, the following figure shows a high-frequency value. Since data is distributed to different threads based on the hash value for hash repartitioning, all instances of the high-frequency value are distributed to the same hash join, leading to a long-tail situation of the hash join."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2024-01/1705636798440.png",alt:"1705636798"})}),"\n",(0,i.jsx)(t.p,{children:"The following figure shows a similar business scenario as observed by the SQL plan monitor tool."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2024-01/1705636805216.png",alt:"1705636805"})}),"\n",(0,i.jsx)(t.p,{children:"To resolve this issue, OceanBase Database V4.x implements the hybrid hash shuffling algorithm. The following figure shows an execution plan that uses this algorithm. It looks like a plan that uses the hash repartitioning algorithm. The only difference is that a HYBRID keyword is contained in the EXCHANGE operator."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2024-01/1705636812110.png",alt:"1705636812"})}),"\n",(0,i.jsx)(t.p,{children:"The hybrid hash shuffling algorithm will obtain related information about high-frequency values from the optimizer. For regular values, normal hash shuffling is used for hash repartitioning. For a high-frequency value, if it exists on the left side (hash join build side), the value will be broadcast to all threads to build the hash table. If it exists on the right side (hash join probe side), the instances of this value are randomly distributed to ensure the evenness. This algorithm can effectively resolve performance issues caused by hash repartitioning in data skew scenarios."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2024-01/1705636821493.png",alt:"1705636821"})}),"\n",(0,i.jsx)(t.h2,{id:"adaptive-null-aware-hash-join",children:"Adaptive NULL-aware hash join"}),"\n",(0,i.jsx)(t.p,{children:"Finally, let me briefly introduce some optimization techniques we have applied to handle NULL values. For a join, the return result of a NULL value is always NULL in an equal condition. However, the semantics of NULL vary based on the join method."}),"\n",(0,i.jsx)(t.p,{children:"In inner joins and semi-joins, values whose join key is NULL can be ignored."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2024-01/1705636829687.png",alt:"1705636829"})}),"\n",(0,i.jsx)(t.p,{children:"In left outer joins, NULL values on the left side also need to be output."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2024-01/1705636835954.png",alt:"1705636836"})}),"\n",(0,i.jsx)(t.p,{children:"If NULL values are processed as normal values, correct results can be obtained. However, data skew of NULL values or a useless network shuffle of massive NULL values may occur. The following special measures are taken inside hash joins and during a hash join shuffle:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Skip NULL values in join keys. This measure usually applies to inner joins and semi-joins, in which values whose join key is NULL will not be output."}),"\n",(0,i.jsx)(t.li,{children:"Randomly distribute NULL values to avoid data skew. Generally, for an outer join, specifically, the left side of a left outer join, right side of a right outer join, or both sides of a full outer join, if the NULL values of one side or both sides need to be output, these NULL values will not successfully match any value. In this case, random hash values are assigned to these NULL values and the NULL values are randomly distributed to different threads. A NULL value that does not need to be output will still be skipped."}),"\n",(0,i.jsx)(t.li,{children:"Use the NULL-aware anti-join algorithm, which will not be described in this post, to process anti-joins that contain NOT IN. The semantics of such anti-joins are special."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2024-01/1705636844393.png",alt:"1705636844"})}),"\n",(0,i.jsx)(t.h2,{id:"preview-of-the-next-post",children:"Preview of the next post"}),"\n",(0,i.jsxs)(t.p,{children:["This post introduces some representative adaptive techniques in the executor of OceanBase Database, based on the assumption that you have a basic understanding of the two-phase pushdown technique for HASH GROUP BY. If you are unfamiliar with the multi-phase pushdown technique of the executor, please look forward to the next post ",(0,i.jsx)(t.a,{href:"https://open.oceanbase.com/blog/5382203648",children:"Distributed Pushdown Techniques of OceanBase Database"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>r});var i=a(6540);const s={},n=i.createContext(s);function o(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);