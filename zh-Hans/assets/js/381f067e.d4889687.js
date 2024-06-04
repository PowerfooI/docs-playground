"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[3205],{7071:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var a=n(4848),t=n(8453);const o={slug:"obcloud",title:"How OB Cloud Achieves Cost Reduction and Efficiency Improvement in Replacing MySQL Scenarios \uff1f"},i=void 0,r={permalink:"/docs-playground/zh-Hans/blog/obcloud",editUrl:"https://github.com/powerfooi/docs-playground/tree/main/blog/misc-obcloud.md",source:"@site/blog/misc-obcloud.md",title:"How OB Cloud Achieves Cost Reduction and Efficiency Improvement in Replacing MySQL Scenarios \uff1f",description:"Cost reduction and efficiency improvement seem an eternal topic for any enterprises that are seeking sustainable development and profit. However, hasty rigid cost reduction measures tend to cause uncontrollable impact, leading to inefficient operation and slow business growth. By promoting cost reduction, we should aim at improving productivity while cutting operation costs.",date:"2024-06-03T13:23:07.000Z",formattedDate:"2024\u5e746\u67083\u65e5",tags:[],readingTime:16.635,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"obcloud",title:"How OB Cloud Achieves Cost Reduction and Efficiency Improvement in Replacing MySQL Scenarios \uff1f"},unlisted:!1,prevItem:{title:"Hello OceanBase! The first lesson for becoming an OceanBase contributor",permalink:"/docs-playground/zh-Hans/blog/hello-oceanbase"},nextItem:{title:"Adaptive Techniques in the OceanBase SQL Execution Engine",permalink:"/docs-playground/zh-Hans/blog/adaptive-sql-execution-engine"}},c={authorsImageUrls:[]},l=[{value:"<strong>I. Consolidate multiple instances into tenants of one cluster to optimize resource utilization and make O&amp;M easier</strong>",id:"i-consolidate-multiple-instances-into-tenants-of-one-cluster-to-optimize-resource-utilization-and-make-om-easier",level:2},{value:"<strong>II. Reduce storage costs by using an advanced LSM-tree-based compression engine</strong>",id:"ii-reduce-storage-costs-by-using-an-advanced-lsm-tree-based-compression-engine",level:2},{value:"<strong>III. Handle peak traffic with rapid flexible scaling</strong>",id:"iii-handle-peak-traffic-with-rapid-flexible-scaling",level:2},{value:"<strong>IV. Handle OLTP and OLAP in one HTAP-capable system</strong>",id:"iv-handle-oltp-and-olap-in-one-htap-capable-system",level:2},{value:"Example 1: Cost reduction plan for an SME",id:"example-1-cost-reduction-plan-for-an-sme",level:3},{value:"Example 2: Cost reduction plan for a corporation",id:"example-2-cost-reduction-plan-for-a-corporation",level:2}];function d(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"Cost reduction and efficiency improvement seem an eternal topic for any enterprises that are seeking sustainable development and profit. However, hasty rigid cost reduction measures tend to cause uncontrollable impact, leading to inefficient operation and slow business growth. By promoting cost reduction, we should aim at improving productivity while cutting operation costs."}),"\n",(0,a.jsx)(s.p,{children:"In the years when the conventional centralized databases dominated the industry, reducing costs without hurting database efficiency was really a headache for IT departments of many enterprises. Based on the content shared by OceanBase solution architect Gao Jiwei in OceanBase Cloud Open Class, this post compares OceanBase Cloud with MySQL, analyzes features that help enterprises increase efficiency with reduced costs, and discusses how to make cost reduction plans for small and medium-sized enterprises (SMEs) and large corporations by using two examples."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2023-08/1691647401464.png",alt:"1691647401"})}),"\n",(0,a.jsx)(s.p,{children:"In recent years, enterprises have been increasing their efforts to reduce costs and increase efficiency, but mostly by downgrading resource specifications, which could pose unbearable risk, especially for databases, the cornerstone of a software architecture."}),"\n",(0,a.jsx)(s.p,{children:"Therefore, it is crucial to find a way that reduces costs while ensuring a very high throughput without compromising performance stability. This is what OceanBase is doing right now. We are designing cost reduction solutions leveraging our technical know-how. Let's first look at the following figure, which shows a general comparison between MySQL and OceanBase Cloud."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2023-08/1691647424030.png",alt:"1691647424"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"MySQL downside No. 1: numerous complex instances"}),". In a MySQL cluster, the resource usage of some instances is higher than others. This resource usage imbalance makes O&M more difficult. OceanBase Cloud features a natively distributed architecture, which allows you to consolidate MySQL instances into tenants of one cluster. This simplifies O&M and improves the overall utilization of cluster resources."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"MySQL downside No. 2: uncompressed data"}),". MySQL adopts a B+ tree-based storage structure, which has been in use for years. An inherent flaw of this structure is that unused space exists on each page. OceanBase Cloud comes with a fully self-developed log-structured merge-tree (LSM-tree)-based storage structure. By using unique compression algorithms, OceanBase Cloud compresses a data set to 1/4 to 1/5 or even less of its original size in MySQL. Such a high compression ratio greatly reduces the storage costs."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"MySQL downside No. 3: poor scalability"}),". MySQL Database runs in primary/secondary mode. Server replacement is inevitable if you want to scale its capacity. To replace a server, a primary/secondary switchover is performed, which causes considerable application interruptions. For that reason, it is often necessary to configure a MySQL database against the maximum possible traffic to avoid a switchover. For example, if eight CPU cores are enough most of the time, but 16 CPU cores are required to handle occasional peak traffic, a MySQL database must be configured with 16 CPU cores. OceanBase Cloud is capable of fast and flexible scaling. You can scale specifications up and down as needed, saving costs significantly."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"MySQL downside No. 4: weak analysis capabilities"}),". A MySQL database handles only online transaction processing (OLTP) tasks. To cope with the business involving analytical reports, users must migrate data to a separately built analytical instance, leading to doubled costs. OceanBase Cloud provides hybrid transaction/analytical processing (HTAP) capabilities, which allow users to complete most less complicated tasks all in the same database without creating an analytical instance."]}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["To reduce the overall cost, OceanBase provides targeted solutions to address inherent drawbacks of the MySQL architecture, such as low resource utilization and high resource redundancy. In fact, OceanBase Cloud reduces the total cost of ownership (TCO) by 30%. For more information, see ",(0,a.jsx)(s.a,{href:"https://mp.weixin.qq.com/s?__biz=MzU0ODg0OTIyNw==&mid=2247500776&idx=1&sn=eb7f931f2d1c59fdac8ca07d55f15c5a&chksm=fbba50cccccdd9daf6b0bfb49d68196450e64bbabe5fbb0d9a6e43c8724ba01fd73453a73d83&scene=21#wechat_redirect",children:"How can OceanBase Cloud help users achieve sustainable cost reduction and efficiency improvement? "})]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2023-08/1691647534704.png",alt:"1691647534"})}),"\n",(0,a.jsx)(s.p,{children:"Before we delve into the features, let me walk you through the overall system architecture of OceanBase Cloud, so that you can get familiar with the following terms: OBProxy, OBServer node, partition, zone, and Paxos group."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2023-08/1691647552979.png",alt:"1691647553"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"OBProxy:"})," Applications connect to OceanBase Cloud through a component called OBProxy. Unlike other middleware, OBProxy is a lightweight node. It only forwards SQL queries without evaluating them. In OceanBase Cloud, OBProxy is not charged."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Zone:"})," A zone of OceanBase Cloud corresponds to an IDC. By default, an OceanBase cluster is deployed across three zones. Each zone contains at least one OBServer node, and hosts many partitions. Therefore, OceanBase Cloud provides IDC-level high availability by default."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"OBServer node:"})," An OBServer node is where OceanBase Cloud execute SQL queries or stores data. OceanBase Cloud supports powerful horizontal scaling, which allows users to add more OBServer nodes to each zone."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Partition:"})," A partition is the elementary unit of load balancing in OceanBase Cloud. If a table is divided into several parts, each part is a partition. The whole of a non-partitioned table can be considered as a partition."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Paxos group:"})," In the preceding figure, for example, the three replicas of partition P7 distributed in three zones form a Paxos group. Unlike the primary/secondary mode of MySQL, OceanBase Cloud synchronizes data among replicas based on the Paxos consensus algorithm, which supports automatic elections without external intervention. In other words, the three replicas of P7 can automatically elect the leader. As shown in the figure, the leader is in zone1 at the moment."]}),"\n",(0,a.jsx)(s.p,{children:"In a MySQL database, the data to be synchronized is converted into logical binary logs (binlogs), which are then synchronized from the primary node to the secondary nodes and then converted back into physical logs."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"Not involving such complex conversion, the Paxos consensus algorithm works with less latency and higher reliability. At any given moment, Paxos requires the agreement of two of the three replicas to elect the leader and commit logs. This way, OceanBase Cloud can maintain data integrity even in the case of an IDC-level failure. In fact, OceanBase Cloud can recover its service from failures of any level within 30 seconds. In the latest version, the recovery time is reduced to 8 seconds, showing great availability improvement compared with MySQL."}),"\n",(0,a.jsx)(s.h2,{id:"i-consolidate-multiple-instances-into-tenants-of-one-cluster-to-optimize-resource-utilization-and-make-om-easier",children:(0,a.jsx)(s.strong,{children:"I. Consolidate multiple instances into tenants of one cluster to optimize resource utilization and make O&M easier"})}),"\n",(0,a.jsx)(s.p,{children:"The left part of the figure shows a common deployment mode, where one database instance is created for each application. However, this deployment mode often leads to resource utilization imbalance among multiple database instances. For example:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Instance 1 hosts an internal HR system with very low daily traffic, and the resource utilization ranges from 5% to 10%."}),"\n",(0,a.jsx)(s.li,{children:"Instance 2 hosts an e-commerce system, which handles flash sales from time to time, leading to fluctuating transaction volumes. As a result, the resource utilization also severely fluctuates from 3% to 80%"}),"\n",(0,a.jsx)(s.li,{children:"Instance 3 hosts a busy system, whose resource utilization remains high all the time."}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"When a DBA or O&M engineer maintains those systems, they have to check multiple MySQL instances in the console, which means high O&M complexity and risks."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2023-08/1691647654901.png",alt:"1691647655"})}),"\n",(0,a.jsx)(s.p,{children:"In an OceanBase cluster, you can deploy a resource pool of many OBServer nodes and resources. Then, you can allocate resources exclusive to each tenant, and host each original RDS or MySQL instance in a tenant of the OceanBase cluster. This way, you need to maintain only one OceanBase cluster, significantly reducing the O&M complexity."}),"\n",(0,a.jsx)(s.p,{children:"The benefits are that you can dynamically adjust tenant specifications anytime without affecting your business, and flexibly schedule resources to optimize the overall resource utilization, leading to a significant cost cut."}),"\n",(0,a.jsx)(s.h2,{id:"ii-reduce-storage-costs-by-using-an-advanced-lsm-tree-based-compression-engine",children:(0,a.jsx)(s.strong,{children:"II. Reduce storage costs by using an advanced LSM-tree-based compression engine"})}),"\n",(0,a.jsx)(s.p,{children:"OceanBase Cloud uses an advanced LSM-tree-based storage engine developed in house. Unlike B+ tree, the OceanBase storage engine first stores written data in memory, and when the amount of data in memory reaches a specified threshold, dumps the data to disk. The storage engine compresses the data dumps and merges them with baseline SSTables (ROS) on a daily basis during off-peak hours, starting from 2:00 a.m. by default. This process is named as major compaction. The LSM-tree-based storage stores baseline data in a compact manner. Therefore, compared with B+ tree-based MySQL, OceanBase Cloud inherently provides a higher compression ratio."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2023-08/1691647698306.png",alt:"1691647698"})}),"\n",(0,a.jsx)(s.p,{children:"In addition, on top of the effect of the LSM-tree architecture, OceanBase Cloud compresses a data set twice."}),"\n",(0,a.jsx)(s.p,{children:"OceanBase Cloud uses hybrid row-column storage architecture based on microblocks. Each microblock corresponds to a layer of a MySQL page. This way, row-based storage is converted to columnar storage. One of the benefits of columnar storage is that, OceanBase Cloud can compress the columnar storage for the first time by encoding."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2023-08/1691647731261.png",alt:"1691647731"})}),"\n",(0,a.jsxs)(s.p,{children:["We often deal with highly repeated columns in development, such as the ",(0,a.jsx)(s.code,{children:"RATE_ID"})," column that contains four values that occur repeatedly in the preceding figure. In this case, we can map the values to a dictionary. For example, the value ",(0,a.jsx)(s.code,{children:"1901321"})," in the column maps to ",(0,a.jsx)(s.code,{children:"0"})," in the dictionary. As long as the dictionary is maintained, values of each column can be simply stored as, for example, ",(0,a.jsx)(s.code,{children:"0"}),", ",(0,a.jsx)(s.code,{children:"1"}),", and ",(0,a.jsx)(s.code,{children:"2"}),", thus greatly compressing the storage. In practice, OceanBase will adaptively design a encoding method suitable for each application."]}),"\n",(0,a.jsx)(s.p,{children:"After the first compression, a data set of 100 GB may be compressed to 30 GB. Then, OceanBase Cloud will compress the 30 GB of data further by using a general compression algorithm, such as LZ4."}),"\n",(0,a.jsx)(s.p,{children:"After the second compression, the data set may be compressed to 15 GB. In other words, 100 GB of data in MySQL may occupy only 15 GB of disk space in OceanBase Cloud. In practice, we have compressed data to less than 15% its original size for many of our customers, significantly reducing storage costs."}),"\n",(0,a.jsx)(s.p,{children:"Some may worry that such a high compression ratio will affect the real-time read/write performance. Well, relax. The LSM-tree-based storage engine compresses data during the daily major compaction, which often takes place after 2:00 a.m. Besides, you can specify when to start the major compaction based on your actual off-peak hours. This way, your business will not suffer from performance loss during the day, and the high compression ratio allows you to cut the storage costs."}),"\n",(0,a.jsx)(s.h2,{id:"iii-handle-peak-traffic-with-rapid-flexible-scaling",children:(0,a.jsx)(s.strong,{children:"III. Handle peak traffic with rapid flexible scaling"})}),"\n",(0,a.jsx)(s.p,{children:"With the multi-level auto scaling capability of OceanBase Cloud, you can adjust resources of an OceanBase cluster at any time as your business grows. This way, you can flexibly control your resource bills and O&M tasks. OceanBase Cloud supports triple-level scalability. Specifically, you can scale your database by adjusting tenant specifications, OBServer node specifications, and the number of OBServer nodes."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"\u25fc Level 1 scaling: adjustment of tenant specifications"})}),"\n",(0,a.jsx)(s.p,{children:"With a distributed architecture, OceanBase Cloud contains multiple OBServer nodes in a resource pool, which is divided into isolated resource groups. Each resource group is called a tenant. To increase the capacity of your database, you can first scale up tenant specifications. The adjustment of tenant specifications is completed within the OceanBase Database kernel, and does not involve changes of physical resources. In addition, the adjustment takes effect within seconds and has no impact on applications."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2023-08/1691647784065.png",alt:"1691647784"})}),"\n",(0,a.jsx)(s.p,{children:"The O&M team can adjust the number of CPU cores and memory size of a tenant at any time to smoothly improve the maximum transactions that can be processed per second (TPS) by the tenant. For example, they can adjust the resources during normal business hours."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2023-08/1691647808099.png",alt:"1691647808"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"\u25fc Level 2 scaling: adjustment of OBServer node specifications"})}),"\n",(0,a.jsx)(s.p,{children:"If the Level 1 scaling cannot handle the soaring business traffic, you can increase specifications of the OBServer nodes, which is also known as vertical scaling. For example, you can scale the number of CPU cores of a cluster from 30 to 62. Unlike a MySQL database, whose capacity expansion involves a primary/secondary switchover, and causes business interruptions, OceanBase Cloud synchronizes data among nodes over the Paxos protocol, which features automatic leader election and automatic decision of whether to commit a log."}),"\n",(0,a.jsx)(s.p,{children:"This brings two advantages:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"OceanBase Cloud synchronizes data by a smaller data unit, delivering higher performance and flexibility. Compared with node-level log synchronization of MySQL, partitions of a Paxos group in OceanBase Cloud are smaller in size. This avoids the need of compromising performance for ensuring the global order. In addition, OceanBase Cloud supports distributed transactions and allows leaders to be stored on different nodes. As shown in the figure depicting the overall system architecture of OceanBase Cloud, the leaders (indicated in dark blue) are distributed on different nodes to support multi-point writing. This makes full use of resources of multiple servers and allows you to add more nodes."}),"\n",(0,a.jsx)(s.li,{children:"OceanBase Cloud synchronizes data by using more lightweight physical transaction logs (clogs) at lower costs over the Paxos protocol. When a MySQL database synchronizes data, the primary node generates logical binlogs, which are synchronized to the secondary nodes and then converted into relay logs for execution. With lighter and more efficient clogs, plus the partition-level synchronization granularity of the Paxos protocol, OceanBase Cloud is not affected by the troublesome primary/secondary synchronization latency like MySQL."}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"When you adjust node specifications during scaling, OceanBase Cloud first mounts a node and synchronizes data to it from the leader. When the leader commits its last clog, OceanBase Cloud initiates a Paxos-based leader election, where the current leader gives up its leader role and votes for another node. Then, the leader role is smoothly switched to another node. This scale-up process of OceanBase Cloud, compared with MySQL, is nearly transparent to applications."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2023-08/1691647875877.png",alt:"1691647876"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"\u25fc Level 3 scaling: adjustment of the number of OBServer nodes"})}),"\n",(0,a.jsx)(s.p,{children:"This is something that cannot be done by using a MySQL database in primary/secondary architecture. With its native distributed architecture, OceanBase Cloud supports distributed transactions and horizontal scale-out with zero business interruptions. Specifically, once an OBServer node is added to an OceanBase cluster, business traffic is automatically channeled to this new node. During this process, applications use the cluster like a standalone MySQL database without being affected. This benefit has been proven to be a better solution than database and table sharding in many engineering practices."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2023-08/1691647918807.png",alt:"1691647918"})}),"\n",(0,a.jsx)(s.h2,{id:"iv-handle-oltp-and-olap-in-one-htap-capable-system",children:(0,a.jsx)(s.strong,{children:"IV. Handle OLTP and OLAP in one HTAP-capable system"})}),"\n",(0,a.jsx)(s.p,{children:"MySQL is a typical OLTP database system. Therefore, its optimizer shows unsatisfactory performance in joining large tables and handling queries with large result sets. In a MySQL database, it sometimes takes forever to execute an SQL query, and it does not support flexible resource isolation. Transaction processing (TP) tasks are often affected by large SQL statements. That is why everybody is avoiding using MySQL for analytical processing (AP) tasks."}),"\n",(0,a.jsx)(s.p,{children:"What if AP tasks are unavoidable? A common solution is to build a dedicated analytical instance and execute AP tasks through the asynchronous extract-transform-load (ETL) process. This solution inevitably incurs costs of the transmission service and the analytical instance."}),"\n",(0,a.jsx)(s.p,{children:"OceanBase Cloud is an HTAP-capable system that handles both OLTP and online analytical processing (OLAP) requests in the same cluster. So why does OceanBase Cloud outperform MySQL in this regard? We have strengthened its AP capabilities from the following four aspects:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"OceanBase Cloud provides an enterprise-level optimizer that is comparable to the Oracle optimizer. Despite the query complexity, for example, joining more than 10 tables, or the way an SQL statement is written, the OceanBase optimizer generates optimal execution plans to guarantee the lowest cost of SQL executions."}),"\n",(0,a.jsx)(s.li,{children:"As mentioned earlier, OceanBase Cloud stores data in microblocks by column. AP tasks that are executed by columns can be faster based on columnar storage."}),"\n",(0,a.jsx)(s.li,{children:"OceanBase Cloud supports parallel execution. It divides a large SQL execution plan into multiple smaller tasks and launch multiple threads to process these small tasks in parallel. At present, SQL queries and DML and DDL operations can be executed in parallel to accelerate AP tasks."}),"\n",(0,a.jsx)(s.li,{children:"OceanBase Cloud provides a vectorized execution engine. Compared with a volcano model that reads data by row, the vectorized engine reads data in batches, which is more friendly to large analytical SQL queries."}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2023-08/1691647973201.png",alt:"1691647973"})}),"\n",(0,a.jsx)(s.p,{children:"The HTAP capabilities of OceanBase Cloud allow you to handle AP and TP requests in one system by using the same data set, without incurring extra costs or the need of creating a dedicated analytical node."}),"\n",(0,a.jsx)(s.p,{children:"You may be worried that TP tasks are impacted by AP tasks. OceanBase Cloud solves that issue by providing multiple resource isolation methods:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Physical isolation between tenants: A dedicated tenant is created to handle AP business."}),"\n",(0,a.jsx)(s.li,{children:"Physical isolation between zones in the same tenant: A dedicated zone that contains only read-only replicas is created to handle AP business."}),"\n",(0,a.jsx)(s.li,{children:"Isolation between resource groups in the same tenant: Dedicated resources of a node are allocated to handle AP business through resource isolation."}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2023-08/1691648013527.png",alt:"1691648013"})}),"\n",(0,a.jsx)(s.p,{children:"As a DBA or O&M engineer, how can you make use of OceanBase Cloud capabilities to achieve significant cost reduction for your enterprise?"}),"\n",(0,a.jsx)(s.p,{children:"Generally, you can deploy an OceanBase cluster whose CPU and memory resources are 80% to 95% of those of your original MySQL database and storage capacity is 15% to 20% thereof. Here are two examples to help you develop a cost reduction plan based on OceanBase Cloud and estimate the result."}),"\n",(0,a.jsx)(s.h3,{id:"example-1-cost-reduction-plan-for-an-sme",children:"Example 1: Cost reduction plan for an SME"}),"\n",(0,a.jsx)(s.p,{children:"As shown in the following figure, the enterprise has one RDS instance with 16 CPU cores, two RDS instances with 16 CPU cores each, and four RDS instances with 2 CPU cores each, which is a typical product array."}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"The largest 16C instance hosts core external business of the enterprise, and runs with high resource utilization."}),"\n",(0,a.jsx)(s.li,{children:"The two 4C instances handle secondary business, such as the business of an inventory or order management system. Their resource utilization is lower than the core instance."}),"\n",(0,a.jsx)(s.li,{children:"The four 2C instances handle internal business."}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"The resource utilization of these instances will fluctuate with the business traffic, causing troubles in O&M. Given the aforesaid specification estimation rule, the enterprise can migrate all its business systems to an OceanBase cluster with 30 CPU cores and 1.5 TB of storage. The OceanBase cluster not only takes care of all its business modules, but also optimizes its imbalanced resource utilization to a healthy level."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2023-08/1691648052884.png",alt:"1691648052"})}),"\n",(0,a.jsx)(s.p,{children:"In this example, OceanBase Cloud is deployed across multiple zones and is compared against a MySQL cluster. The MySQL cluster also requires multi-zone deployment where each zone is configured with exclusive resources. They are tested by using Sysbench with 1,000 concurrent read/write processes. OceanBase Cloud reduces the cost by about 30%, and the result comparison is shown in the following figure."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2023-08/1691648078609.png",alt:"1691648078"})}),"\n",(0,a.jsx)(s.h2,{id:"example-2-cost-reduction-plan-for-a-corporation",children:"Example 2: Cost reduction plan for a corporation"}),"\n",(0,a.jsx)(s.p,{children:"This corporation runs a 32C RDS instance to support its core business, a 16C RDS instance to support its secondary business, and five 4C RDS instances to support its internal low-traffic business. The overall resource utilization of the RDS instances is roughly the same with that in Example 1. The corporation can host all its RDS instances in an OceanBase cluster with 62 CPU cores and 4 TB of storage."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2023-08/1691648109839.png",alt:"1691648109"})}),"\n",(0,a.jsx)(s.p,{children:"Regarding how to plan costs, here is a brief introduction to the difference between the two. In the Sysbench test scenario with 1,000 concurrent read/write processes, if the primary node of a MySQL database uses 68 CPU cores, another 136 CPU cores must be used for the secondary nodes, resulting in serious resource waste. OceanBase Cloud, on the contrary, allows both its leader and follower replicas to share the 62 CPU cores of all OBServer nodes, reducing the total cost by about 40%. The result comparison is shown in the following figure."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2023-08/1691648148198.png",alt:"1691648148"})}),"\n",(0,a.jsx)(s.p,{children:"In general, we should combine cost reduction with efficiency improvement. OceanBase Cloud relies on technical means to reduce costs, in the expectation that the overall value of a database can be improved without sacrificing data throughput, high availability, online DDL capability, or O&M friendliness for cost reduction."}),"\n",(0,a.jsx)(s.p,{children:"As OceanBase Cloud becomes better, we hope that it can bring more benefits to enterprises and help enterprises boost efficiency at reduced costs. In this way, related personnel such as DBAs and O&M engineers can be freed from burdensome maintenance chores and have more time to create greater value for the enterprise."})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>r});var a=n(6540);const t={},o=a.createContext(t);function i(e){const s=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(o.Provider,{value:s},e.children)}}}]);