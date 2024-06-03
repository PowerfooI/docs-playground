"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[9722],{7212:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=a(4848),o=a(8453);const s={slug:"flink-and-ob",title:"Flink CDC + OceanBase Database Data Integration Solution"},i=void 0,c={permalink:"/docs-playground/blog/flink-and-ob",editUrl:"https://github.com/powerfooi/docs-playground/tree/main/blog/flink-and-ob.md",source:"@site/blog/flink-and-ob.md",title:"Flink CDC + OceanBase Database Data Integration Solution",description:"Introduction",date:"2024-06-03T13:23:07.000Z",formattedDate:"June 3, 2024",tags:[],readingTime:5.79,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"flink-and-ob",title:"Flink CDC + OceanBase Database Data Integration Solution"},unlisted:!1,prevItem:{title:"Challenges facing AP performance improvement",permalink:"/docs-playground/blog/challenges-facing-AP-performance-improvement"},nextItem:{title:"Hello OceanBase",permalink:"/docs-playground/blog/hello-oceanbase"}},r={authorsImageUrls:[]},l=[{value:"Introduction",id:"introduction",level:2},{value:"Keypoints",id:"keypoints",level:2},{value:"I. CDC technology",id:"i-cdc-technology",level:2},{value:"Contact us",id:"contact-us",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"Change Data Capture (CDC) is a widely applied technology that captures database changes. In this post, we will introduce you to the Flink CDC + OceanBase Database data integration solution. This solution combines CDC with extraordinary pipeline capabilities and diversified ecosystem tools of Flink, to synchronize processed CDC data to the downstream, formulating a solution for integrated full and incremental synchronization based on OceanBase Database Community Edition."}),"\n",(0,t.jsx)(n.p,{children:"The solution brings two benefits. First, it synchronizes data by using one component and one link. Second, Flink SQL supports aggregation and extract-transform-load (ETL) of database and table shards, making it much easier for users to analyze, process, and synchronize CDC data by executing a Flink SQL job."}),"\n",(0,t.jsx)(n.h2,{id:"keypoints",children:"Keypoints"}),"\n",(0,t.jsx)(n.p,{children:"This post is based on the content shared by Wang He, an open source tool expert with OceanBase."}),"\n",(0,t.jsx)(n.p,{children:"It contains the following five parts:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Introduction to the CDC technology"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Introduction to OceanBase CDC components"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Introduction to Flink CDC"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Use Flink CDC OceanBase Connector"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Conclusion"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"i-cdc-technology",children:"I. CDC technology"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://gw.alipayobjects.com/zos/oceanbase/eaa84253-a48e-438c-a458-29cc39c6d194/image/2022-05-07/7f3f97dc-eb5c-43f5-a8c8-44f5064bee08.png",alt:""})}),"\n",(0,t.jsx)(n.p,{children:"The CDC technology monitors and captures changes in a database, such as the INSERT, UPDATE, and DELETE operations on the data or data tables, and then writes the changes to message-oriented middleware, so that other services can subscribe to and consume the changes."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://gw.alipayobjects.com/zos/oceanbase/7b3f7a72-e230-4ada-8f67-d1feb68d1168/image/2022-05-07/ac855f6e-3a00-44f3-b7e6-39517751fec0.png",alt:""})}),"\n",(0,t.jsx)(n.p,{children:"Alibaba Canal is a popular open source CDC tool, which is mainly used in Alibaba Cloud open-source components for incremental MySQL data subscription and consumption. The latest version of Alibaba Canal supports OceanBase Database Community Edition data sources, incremental DDL and DML operations, and filtering of databases, tables, and columns. You can use it with ZooKeeper for the deployment of high-availability clusters. The client adapter of Alibaba Canal supports multiple types of containers as the destination. You can use it with Alibaba Otter to achieve active geo-redundancy."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://gw.alipayobjects.com/zos/oceanbase/17c2e5c5-9b31-4290-8cbd-983815f1e469/image/2022-05-07/300d3459-5fa8-416c-a5d5-84e03fdcc488.png",alt:""})}),"\n",(0,t.jsx)(n.p,{children:"Another popular open source CDC framework is Debezium."}),"\n",(0,t.jsx)(n.p,{children:"It supports the synchronization of DDL and DML operation logs, uses the primary key or unique key as the key of the message body, and also supports the snapshot mode and full synchronization."}),"\n",(0,t.jsx)(n.p,{children:"Debezium also supports a variety of data sources. You can integrate Debezium Server into a program as an embedded engine to directly write data to a message system without using Kafka."}),"\n",(0,t.jsx)(n.h1,{id:"ii-oceanbase-cdc-components",children:"II. OceanBase CDC components"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://gw.alipayobjects.com/zos/oceanbase/b38cbaf6-fc19-4eef-b172-27a5016cc451/image/2022-05-07/15fd5ef4-7679-403b-aad1-a39d8700b0bc.png",alt:""})}),"\n",(0,t.jsx)(n.p,{children:"OceanBase Database Community Edition provides four CDC components:"}),"\n",(0,t.jsx)(n.p,{children:"obcdc (formerly liboblog): pulls incremental logs in sequence."}),"\n",(0,t.jsx)(n.p,{children:"oblogmsg: parses the format of incremental logs."}),"\n",(0,t.jsx)(n.p,{children:"oblogproxy: pulls the incremental logs."}),"\n",(0,t.jsx)(n.p,{children:"oblogclient: connects to oblogproxy to obtain the incremental logs."}),"\n",(0,t.jsx)(n.p,{children:"OceanBase Migration Service (OMS) Community Edition is provided. It is an all-in-one data migration tool for incremental data migration, full data migration, and full data verification."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://gw.alipayobjects.com/zos/oceanbase/0fa227bf-343a-4b54-9eb8-ec0adcb7b018/image/2022-05-07/8eceea9f-1f1e-445c-9a9f-24c7cd495cd6.png",alt:""})}),"\n",(0,t.jsx)(n.p,{children:"The preceding figure shows the CDC logic of OceanBase Database Community Edition. Data is pulled by oblogproxy and OMS Community Edition. Canal and Flink CDC are integrated with oblogclient to obtain incremental logs from oblogproxy."}),"\n",(0,t.jsx)(n.h1,{id:"iii-flink-cdc",children:"III. Flink CDC"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://gw.alipayobjects.com/zos/oceanbase/fa9a24c3-5684-40c4-b584-35992433bff5/image/2022-05-07/ba8f10ce-eacf-48ef-b6b6-402368806f09.png",alt:""})}),"\n",(0,t.jsx)(n.p,{children:"Flink CDC supports multiple data sources, such as MySQL, PostgreSQL, and Oracle. Flink CDC reads the full and incremental data from a variety of databases, and then automatically transfers data to the Flink SQL engine for processing."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://gw.alipayobjects.com/zos/oceanbase/fc9856de-09ed-4eaa-b110-dff6d75f5b32/image/2022-05-07/4d648854-a0e5-4404-83ea-18d1ce2b94cd.png",alt:""})}),"\n",(0,t.jsx)(n.p,{children:"Flink is a hybrid engine that supports both batch and streaming processing. Flink CDC converts streaming data into a dynamic table. In the preceding figure, the lower left part shows the mapping between streaming data and a dynamic table. The lower right part shows the results of multiple executions of continuous queries."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://gw.alipayobjects.com/zos/oceanbase/091b66ed-1259-46f9-a385-3353c6c77a2f/image/2022-05-07/3217492e-54fc-4dac-831f-814dfd2b855c.png",alt:""})}),"\n",(0,t.jsx)(n.p,{children:"The preceding figure shows the working principle of Flink CDC. It implements the SourceFunction API based on Debezium and supports MySQL, Oracle, MongoDB, PostgreSQL, and SQLServer."}),"\n",(0,t.jsx)(n.p,{children:"The latest version of Flink CDC supports data reads from a MySQL data source by using the Source API, which provides enhanced concurrent reading compared to the SourceFunction API."}),"\n",(0,t.jsx)(n.p,{children:"The OceanBaseRichSourceFunction API is implemented for full and incremental data reads respectively based on JDBC and oblogclient."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://gw.alipayobjects.com/zos/oceanbase/ef1db322-542c-460c-a4cc-7052711bdbb8/image/2022-05-07/7144e0a0-de64-4123-966a-4de6cf427d0b.png",alt:""})}),"\n",(0,t.jsx)(n.p,{children:"============="}),"\n",(0,t.jsx)(n.h1,{id:"iv-use-flink-cdc-oceanbase-connector",children:"IV. Use Flink CDC OceanBase Connector"}),"\n",(0,t.jsxs)(n.p,{children:["Configure the ",(0,t.jsx)(n.code,{children:"docker-compose.yml"})," file and start the container. Go to the directory where the ",(0,t.jsx)(n.code,{children:"docker-compose.yml"})," file is stored, and run the ",(0,t.jsx)(n.code,{children:"docker-compose up-d"})," command to start the required components."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://gw.alipayobjects.com/zos/oceanbase/9b5d74d0-01c9-42b7-88e8-329996981c57/image/2022-05-07/b87e2f73-36ad-47c2-b991-1bdff8fb5aba.png",alt:""})}),"\n",(0,t.jsxs)(n.p,{children:["Run the ",(0,t.jsx)(n.code,{children:"docker-compose exec observer obclient-h127.0.0.1-P2881-uroot-ppsw"})," command to log on by using newly created username and password. Download the required dependency packages and execute Flink DDL statements on the CLI of Flink SQL to create a table."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://gw.alipayobjects.com/zos/oceanbase/67ccf926-fd34-4175-b7f7-6219ce53ec66/image/2022-05-07/022ef971-e3b8-4861-8590-3734401c1020.png",alt:""})}),"\n",(0,t.jsx)(n.p,{children:"Set the checkpointing interval to 3 seconds and the local time zone to Asia/Shanghai. Then, create an order table, a commodity table, and the associated order data table. Perform data reads and writes."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://gw.alipayobjects.com/zos/oceanbase/77f314e9-0062-455a-a0aa-e34bc0f3de1a/image/2022-05-07/1a5ea095-35cf-4106-b629-7064a8a75792.png",alt:""})}),"\n",(0,t.jsx)(n.p,{children:"View the data in Kibana by visiting the following address:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"http://localhost:5601/app/kibana#/management/kibana/index_pattern",children:"http://localhost:5601/app/kibana#/management/kibana/index_pattern"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://gw.alipayobjects.com/zos/oceanbase/f79cc96e-182c-4180-808b-a7b8b091f4a7/image/2022-05-07/50904e7a-a129-46d1-b841-f9b19c64edee.png",alt:""})}),"\n",(0,t.jsxs)(n.p,{children:["Create an index pattern named ",(0,t.jsx)(n.code,{children:"enriched_orders"}),", and then view the written data by visiting ",(0,t.jsx)(n.a,{href:"http://localhost:5601/app/kibana#/discover%E7%9C%8B%E5%88%B0%E5%86%99%E5%85%A5%E7%9A%84%E6%95%B0%E6%8D%AE%E4%BA%86%E3%80%82",children:"http://localhost:5601/app/kibana#/discover"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://gw.alipayobjects.com/zos/oceanbase/69bd86f3-8601-4561-a9e0-30831203e859/image/2022-05-07/01c329c8-b97b-4dfc-8e6c-117d00e24f69.png",alt:""})}),"\n",(0,t.jsx)(n.p,{children:"Modify the data of the monitored table and view the incremental data changes. Perform the following modification operations in OceanBase Database in sequence, and refresh Kibana once after each step. We can see that the order data displayed in Kibana is updated in real time."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://gw.alipayobjects.com/zos/oceanbase/62c8b1a5-50d1-4903-a221-ce21c8f1d6c4/image/2022-05-07/991c53d2-425e-4d01-a20d-3851bff54609.png",alt:""})}),"\n",(0,t.jsxs)(n.p,{children:["Clean up the environment. Go to the directory where the ",(0,t.jsx)(n.code,{children:"docker-compose.yml"})," file is located, and run the ",(0,t.jsx)(n.code,{children:"docker-compose down"})," command to stop all containers. Go to the Flink deployment directory and run the ",(0,t.jsx)(n.code,{children:"./bin/stop-cluster.sh"})," command to stop the Flink cluster."]}),"\n",(0,t.jsx)(n.h1,{id:"v-conclusion",children:"V. Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"Flink CDC supports full and incremental data migration between many types of data sources and works with Flink SQL to perform ETL operations on streaming data. As of the release of Flink CDC 2.2, the project has 44 contributors, 4 maintainers, and more than 4,000 community members."}),"\n",(0,t.jsx)(n.p,{children:"OceanBase Connector can be integrated with Flink CDC 2.2 or later to read full data and incremental DML operations from multiple databases and tables in AT_LEAST_ONCE mode. Flink CDC OceanBase Connector will gradually support concurrent reads, incremental DDL operations, and the EXACTLY_ONCE mode in later versions."}),"\n",(0,t.jsx)(n.p,{children:"Now, let's briefly compare the existing CDC solutions. OMS Community Edition is a proven online data migration tool with a GUI-based console. It provides full data migration, incremental data migration, data verification, and O&M services. DataX + Canal/Otter is a fully open source solution. Canal supports many types of destinations and incremental DDL operations, and Otter supports active-active disaster recovery."}),"\n",(0,t.jsx)(n.h1,{id:"afterword",children:"Afterword"}),"\n",(0,t.jsx)(n.p,{children:"Flink CDC is a fully open source solution and is supported by an active community. It supports full and incremental data synchronization between many types of data sources and destinations. It is worth mentioning that Flink CDC is easy to use, and supports aggregation and ETL of database and table shards. Compared with some existing CDC solutions that involve complex data cleaning, analysis, and aggregation operations, Flink SQL allows users to easily process data for various business needs by using methods such as stream-stream join and dimension table join."}),"\n",(0,t.jsx)(n.h2,{id:"contact-us",children:"Contact us"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Feel free to contact us at any time."})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://open.oceanbase.com/answer",children:"Visit the official forum of OceanBase Database Community Edition"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/oceanbase/oceanbase/issues",children:"Report an issue of OceanBase Database Community Edition"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"DingTalk Group ID: 33254054"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://gw.alipayobjects.com/zos/oceanbase/8223c1be-2a25-4658-9d9f-5fd4594e9900/image/2022-05-07/77e7a1ce-01b1-4b45-9aaa-ff184f43f822.png",alt:""})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>c});var t=a(6540);const o={},s=t.createContext(o);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);