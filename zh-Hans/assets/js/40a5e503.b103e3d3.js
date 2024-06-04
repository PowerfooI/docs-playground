"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[8616],{4996:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var s=t(4848),n=t(8453);const i={slug:"dmall",title:"DMALL \u2014\u2014 a summary of database selection experience in SaaS scenarios",tags:["User Case"]},o=void 0,r={permalink:"/docs-playground/zh-Hans/blog/dmall",editUrl:"https://github.com/powerfooi/docs-playground/tree/main/blog/user-dmall.md",source:"@site/blog/user-dmall.md",title:"DMALL \u2014\u2014 a summary of database selection experience in SaaS scenarios",description:"Feng Guangpu, head of the Dmall database team, is responsible for the stability of OceanBase, TiDB, MySQL, Redis, and other databases of Dmall and the construction of its database platform as a service (PaaS) model. Feng has a wealth of experience in multi-active database architecture and data synchronization schemes.",date:"2024-06-04T09:30:23.000Z",formattedDate:"2024\u5e746\u67084\u65e5",tags:[{label:"User Case",permalink:"/docs-playground/zh-Hans/blog/tags/user-case"}],readingTime:15.855,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"dmall",title:"DMALL \u2014\u2014 a summary of database selection experience in SaaS scenarios",tags:["User Case"]},unlisted:!1,prevItem:{title:"BOSS Zhipin \u2014\u2014 How to save 70% storage cost through OceanBase with an archive database of 1 billion rows per day?",permalink:"/docs-playground/zh-Hans/blog/boss-zhipin"},nextItem:{title:"Sichuan Hwadee \u2014\u2014 The practice of lightweight data warehouse construction of health big data based on OceanBase",permalink:"/docs-playground/zh-Hans/blog/sichuan-hwadee"}},c={authorsImageUrls:[]},d=[{value:"Characteristics and pain points of retail SaaS scenarios",id:"characteristics-and-pain-points-of-retail-saas-scenarios",level:2},{value:"Why we chose a distributed database",id:"why-we-chose-a-distributed-database",level:2},{value:"Business-based database selection considerations",id:"business-based-database-selection-considerations",level:3},{value:"Database selection based on test data",id:"database-selection-based-on-test-data",level:3},{value:"OceanBase Database in different configurations",id:"oceanbase-database-in-different-configurations",level:4},{value:"Tablespace comparison between OceanBase Database and MySQL Database",id:"tablespace-comparison-between-oceanbase-database-and-mysql-database",level:4},{value:"Why did we choose OceanBase Database and what sets it apart?",id:"why-did-we-choose-oceanbase-database-and-what-sets-it-apart",level:2},{value:"Why does OceanBase Database perform better?",id:"why-does-oceanbase-database-perform-better",level:3},{value:"Why does OceanBase Database cost less while offering superior performance?",id:"why-does-oceanbase-database-cost-less-while-offering-superior-performance",level:3},{value:"Multitenancy and resource isolation capabilities of OceanBase Database",id:"multitenancy-and-resource-isolation-capabilities-of-oceanbase-database",level:3},{value:"Summary",id:"summary",level:2}];function l(e){const a={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Feng Guangpu, head of the Dmall database team, is responsible for the stability of OceanBase, TiDB, MySQL, Redis, and other databases of Dmall and the construction of its database platform as a service (PaaS) model. Feng has a wealth of experience in multi-active database architecture and data synchronization schemes."}),"\n"]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Yang Jiaxin, a senior DBA at Dmall, is an expert in fault analysis and performance optimization and loves exploring new technologies."}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:"As the largest retail cloud solution and digital retail service provider in Asia and the only end-to-end service provider of omnichannel retail cloud solutions in China, Dmall conducts business in six countries and regions. Therefore, its model has been widely verified. The development of Dmall is a microcosm of the retail digitalization process in China and even the world."}),"\n",(0,s.jsx)(a.p,{children:"However, the rapid business growth and impressive business achievements have been accompanied by many challenges in retail software as a service (SaaS) scenarios and business system bottlenecks. This article takes a look at the data processing pain points in retail SaaS scenarios from the business perspective. It gives a glimpse into how Dmall improves its read and write performance and lowers storage costs while ensuring the stability and reliability of its business database."}),"\n",(0,s.jsx)(a.h2,{id:"characteristics-and-pain-points-of-retail-saas-scenarios",children:"Characteristics and pain points of retail SaaS scenarios"}),"\n",(0,s.jsx)(a.p,{children:"Dmall markets its services across borders. In China, our customers include large supermarkets, such as Wumart and Zhongbai, as well as multinational retailers, such as METRO AG and 7-Eleven. Dmall also serves many Chinese and international brands. It links brand owners, suppliers, and retailers with smooth data and information flows so that they can better support and serve consumers."}),"\n",(0,s.jsx)(a.p,{children:"The long service chain, from manufacturers, brand owners, and suppliers, to retailers in various shopping malls and stores, and finally to consumers, generates massive data volumes. The system complexity increases exponentially with the data volume. As a result, the retail SaaS system of Dmall faces three major challenges:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"High O&M complexity"}),"\n",(0,s.jsx)(a.p,{children:"Dmall uses a microservice architecture that involves many business links in the overall process and a large system application scale. Dmall already has more than 500 databases. Moreover, as our system continue to iterate, the data scale continues to increase, and O&M management is becoming more and more difficult."}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"Fast business growth and frequent need for horizontal scaling"}),"\n",(0,s.jsx)(a.p,{children:"Dmall formulated a global expansion strategy to cope with its business growth. According to the requirements of regional data security laws, we need to deploy a new system to undertake business traffic outside China. It is hard to predict future business scale and data growth in the initial deployment phase. Therefore, database resource allocation in the initial deployment phase is quite difficult. The common practice is to deploy the system with limited resources at low costs. However, rapid business growth and exponential data increase will require quick scaling."}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"The need to serve a large number of merchants in the same cluster"}),"\n",(0,s.jsx)(a.p,{children:"The number of stock keeping units (SKUs) of different convenience stores and supermarket chains ranges from thousands to tens of thousands. Therefore, it is impossible for us to deploy an independent system for each customer. This means that our SaaS system must support hundreds of small and medium-sized business customers, and the data generated by all merchants share database resources at the underlying layer. Moreover, we have massive individual tenants in our system, such as large chain stores. We want to isolate the resources for these tenants from those for others."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:"In short, our database needs to support a huge data scale and cope with rapid data growth."}),"\n",(0,s.jsx)(a.h2,{id:"why-we-chose-a-distributed-database",children:"Why we chose a distributed database"}),"\n",(0,s.jsx)(a.p,{children:"To address the aforementioned issues and requirements, we started looking for a new database solution. A distributed database provides larger capacity, transparent scaling, financial-level data security, higher development efficiency, and lower O&M costs. Therefore, it can better support our business development. Due to these benefits and advantages, we believe that distributed databases will become the prevalent trend in the data field. This is why we only looked at distributed database products during our database selection process."}),"\n",(0,s.jsx)(a.h3,{id:"business-based-database-selection-considerations",children:"Business-based database selection considerations"}),"\n",(0,s.jsx)(a.p,{children:"First of all, we have many MySQL databases each with over 4 TB of data, and the data size is still growing rapidly. After we migrated our largest MySQL database to a distributed database, the data size increased to 29 TB. Our DBAs are very concerned about the capacity bottleneck of MySQL:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"We have a few choices. We can continue to push R&D for data cleanup and data archiving, but this may delay other R&D jobs such as upgrades to better address our business needs."}),"\n",(0,s.jsx)(a.li,{children:"Alternatively, we can continue to expand the disks. This method may be easier to carry out on the cloud. The size of a single cloud storage disk can reach 32 TB or even larger. However, as the data volume continues to grow, this method simply puts the problem off, rather than solving it. In the end, the problem will simply become more and more difficult to solve."}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:"We can also choose the database and table sharding solution, but this is an intricate and highly risky solution, and requires several months for code reconstruction to guarantee SQL capabilities."}),"\n",(0,s.jsx)(a.p,{children:"Therefore, we want to utilize the transparent scaling capabilities of distributed databases to smoothly support rapid business growth."}),"\n",(0,s.jsx)(a.p,{children:'First, we aim to reduce the O&M complexity and costs while ensuring system stability. If we think of a MySQL database as an egg and a MySQL instance as a basket, how many MySQL instances should we deploy to house 1000 databases? Which databases should we put on the same instance? If we put two resource-demanding databases in the same instance, resource preemption may occur. In addition, some workloads have special requirements. For example, although payment transactions generate only a small amount of data, they have high business requirements. Therefore, a payment transaction database cannot be deployed in the same instance as other databases. Because of different businesses, different priorities, different data growth rates, and different QPS requirements, DBAs often need to "move eggs from one basket to another". This creates major O&M challenges, not to mention high resource costs. We hope that we can solve this problem with distributed databases, enabling automatic "egg relocation".'}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.img,{src:"https://weboffice-zjk.docs.dingtalk.com/api/v3/office/copy/QTh3bUEvNjFxcEZDNzlUK0RreXZCamNIS3VIMDBkd0NDS0d1bHd3WXZCMUJRMUpXUXFFb01vYVFMd1pVTHZtN1RwU0RzaVlyaGp3Rzh3TDg0N2hYaUNnNUZWNDVSNzVubU14TnhGR1IvV0NoRm82MU1oM1F6N0VGTE5EZHprR014TWlKeHFzaWNRS2ZxN01BYm9NMk8rNWZGVmlaZElHNjc3UWh0QWFrdDk0Si9iRWVHR2FVYkhMUXk3QUNVdHBuQ2JMdGxGS3lIeDNucFdwWEdpUT0=/attach/object/64d2cad9b954a7dde0bfe3b57ebb85c3c3a3b61a",alt:""}),(0,s.jsx)(a.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2023-09/1693993792381.png",alt:"1693993792"})]}),"\n",(0,s.jsx)(a.p,{children:'Second, we expect distributed databases to help us achieve high cluster availability. We mainly use MHA and Orchestrator to implement high availability for MySQL clusters. However, they are all in the form of "plug-ins", which does not solve the split-brain issue caused by network partitions. The database and high-availability component are two independent pieces of software. Therefore, they lack consistency and coordinated control. High-availability architectures like MySQL Group Replication are reliable because they are based on the Paxos or Raft distributed consensus protocol just like distributed databases such as OceanBase Database and TiDB. Such an architecture can achieve a recovery point objective (RPO) of 0 and a recovery time objective (RTO) of less than 30s.'}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.img,{src:"https://weboffice-zjk.docs.dingtalk.com/api/v3/office/copy/QTh3bUEvNjFxcEZDNzlUK0RreXZCamNIS3VIMDBkd0NDS0d1bHd3WXZCMUJRMUpXUXFFb01vYVFMd1pVTHZtN1RwU0RzaVlyaGp3Rzh3TDg0N2hYaUNnNUZWNDVSNzVubU14TnhGR1IvV0NoRm82MU1oM1F6N0VGTE5EZHprR014TWlKeHFzaWNRS2ZxN01BYm9NMk8rNWZGVmlaZElHNjc3UWh0QWFrdDk0Si9iRWVHR2FVYkhMUXk3QUNVdHBuQ2JMdGxGS3lIeDNucFdwWEdpUT0=/attach/object/6566a6165303bd34aca1fc2adaf2db473d4c5900",alt:""}),(0,s.jsx)(a.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2023-09/1693993807766.png",alt:"1693993807"})]}),"\n",(0,s.jsx)(a.h3,{id:"database-selection-based-on-test-data",children:"Database selection based on test data"}),"\n",(0,s.jsx)(a.p,{children:"Based on the above database selection considerations, we chose the native distributed database OceanBase Database. We then compared the storage costs and QPS performance of OceanBase Database with MySQL Database in terms of table reading and writing, table reading, and table writing. The following table shows the configurations used for this test."}),"\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{}),(0,s.jsx)(a.th,{children:"OceanBase Database"}),(0,s.jsx)(a.th,{children:"MySQL Database"})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Community Edition"}),(0,s.jsx)(a.td,{children:"v4.1.0"}),(0,s.jsx)(a.td,{children:"v5.7.16"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Memory"}),(0,s.jsx)(a.td,{children:"Tenant memory size: 16 GB"}),(0,s.jsx)(a.td,{children:"innodb_buffer_pool_size: 16 GB"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Single-node configuration"}),(0,s.jsx)(a.td,{children:"32C RAID10 SSD"}),(0,s.jsx)(a.td,{children:"32C RAID10 SSD"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Disk flush configuration"}),(0,s.jsx)(a.td,{children:"Forcible disk flush by default"}),(0,s.jsx)(a.td,{children:"sync_binlog = 1 and innodb_flush_log_at_trx_commit = 2"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Degree of parallelism (DOP)"}),(0,s.jsx)(a.td,{children:"5, 10, 20, 30, 60, and 120"}),(0,s.jsx)(a.td,{children:"5, 10, 20, 30, 60, and 120"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Test modes"}),(0,s.jsx)(a.td,{children:"read_write, read_only, and write_only"}),(0,s.jsx)(a.td,{children:"read_write, read_only, and write_only"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Duration of a single test"}),(0,s.jsx)(a.td,{children:"300s, for a total of 18 tests (Concurrency x Number of test modes)"}),(0,s.jsx)(a.td,{children:"300s, for a total of 18 tests (Concurrency x Number of test modes)"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Test method"}),(0,s.jsxs)(a.td,{children:["Run the ",(0,s.jsx)(a.code,{children:"obd test sysbench"})," command (that comes with OBD), which will run the ",(0,s.jsx)(a.code,{children:"sysbench prepare"}),", ",(0,s.jsx)(a.code,{children:"sysbench run"}),", and ",(0,s.jsx)(a.code,{children:"sysbench cleanup"})," commands in sequence."]}),(0,s.jsxs)(a.td,{children:["Run the ",(0,s.jsx)(a.code,{children:"obd test sysbench"})," command (that comes with OBD), which will run the ",(0,s.jsx)(a.code,{children:"sysbench prepare"}),", ",(0,s.jsx)(a.code,{children:"sysbench run"}),", and ",(0,s.jsx)(a.code,{children:"sysbench cleanup"})," commands in sequence."]})]})]})]}),"\n",(0,s.jsx)(a.p,{children:"Given the same configurations, MySQL Database performs slightly better than OceanBase Database in the Sysbench test with ten tables, each containing 30 million data rows, when the DOP is less than 200. However, in terms of both QPS and latency, the performance of OceanBase Database approaches that of MySQL Database when the DOP increases."}),"\n",(0,s.jsx)(a.h4,{id:"oceanbase-database-in-different-configurations",children:"OceanBase Database in different configurations"}),"\n",(0,s.jsx)(a.p,{children:"In the standalone deployment mode, the read and write performance is also affected by the mode of accessing the OBServer nodes."}),"\n",(0,s.jsx)(a.p,{children:"The performance is 30% to 50% higher when the OBServer nodes are directly accessed than when they are accessed through OBProxy."}),"\n",(0,s.jsx)(a.p,{children:"Therefore, for the standalone deployment mode, we recommend that you directly connect to OBServer nodes to avoid the extra costs of accessing OBServer nodes through OBProxy."}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.img,{src:"https://weboffice-zjk.docs.dingtalk.com/api/v3/office/copy/QTh3bUEvNjFxcEZDNzlUK0RreXZCamNIS3VIMDBkd0NDS0d1bHd3WXZCMUJRMUpXUXFFb01vYVFMd1pVTHZtN1RwU0RzaVlyaGp3Rzh3TDg0N2hYaUNnNUZWNDVSNzVubU14TnhGR1IvV0NoRm82MU1oM1F6N0VGTE5EZHprR014TWlKeHFzaWNRS2ZxN01BYm9NMk8rNWZGVmlaZElHNjc3UWh0QWFrdDk0Si9iRWVHR2FVYkhMUXk3QUNVdHBuQ2JMdGxGS3lIeDNucFdwWEdpUT0=/attach/object/1194670243918372120898947e2d916ebbf8df2e",alt:""}),(0,s.jsx)(a.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2023-09/1693993851203.png",alt:"1693993851"})]}),"\n",(0,s.jsx)(a.p,{children:"Performance also varies with tenant memory configurations. We can see that the performance of a tenant with 32 GB of memory is 14% higher than that of a tenant with 16 GB of memory."}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.img,{src:"https://weboffice-zjk.docs.dingtalk.com/api/v3/office/copy/QTh3bUEvNjFxcEZDNzlUK0RreXZCamNIS3VIMDBkd0NDS0d1bHd3WXZCMUJRMUpXUXFFb01vYVFMd1pVTHZtN1RwU0RzaVlyaGp3Rzh3TDg0N2hYaUNnNUZWNDVSNzVubU14TnhGR1IvV0NoRm82MU1oM1F6N0VGTE5EZHprR014TWlKeHFzaWNRS2ZxN01BYm9NMk8rNWZGVmlaZElHNjc3UWh0QWFrdDk0Si9iRWVHR2FVYkhMUXk3QUNVdHBuQ2JMdGxGS3lIeDNucFdwWEdpUT0=/attach/object/6f219cc28f657a56eaf7a3cff84dc4d448adbc12",alt:""}),(0,s.jsx)(a.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2023-09/1693993879936.png",alt:"1693993879"})]}),"\n",(0,s.jsx)(a.h4,{id:"tablespace-comparison-between-oceanbase-database-and-mysql-database",children:"Tablespace comparison between OceanBase Database and MySQL Database"}),"\n",(0,s.jsx)(a.p,{children:"In the monitoring snapshot scenario in the production environment, after we migrated 20 tables with a total of 0.5 billion data rows from MySQL Database to OceanBase Database, the tablespace usage was reduced by a factor of six."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2023-09/1693993904435.png",alt:"1693993904"})}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:"https://weboffice-zjk.docs.dingtalk.com/api/v3/office/copy/QTh3bUEvNjFxcEZDNzlUK0RreXZCamNIS3VIMDBkd0NDS0d1bHd3WXZCMUJRMUpXUXFFb01vYVFMd1pVTHZtN1RwU0RzaVlyaGp3Rzh3TDg0N2hYaUNnNUZWNDVSNzVubU14TnhGR1IvV0NoRm82MU1oM1F6N0VGTE5EZHprR014TWlKeHFzaWNRS2ZxN01BYm9NMk8rNWZGVmlaZElHNjc3UWh0QWFrdDk0Si9iRWVHR2FVYkhMUXk3QUNVdHBuQ2JMdGxGS3lIeDNucFdwWEdpUT0=/attach/object/ecb2401843a0b597b3c9999138346056c2e10681",alt:""})}),"\n",(0,s.jsx)(a.p,{children:"Based on the above test results, we decided to deploy OceanBase Database for the following considerations:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"In the monitoring snapshot scenario in the production environment, OceanBase Database shows excellent data compression performance, with the space required for a single replica in OceaBase storage being 1/6 that in MySQL storage."}),"\n",(0,s.jsx)(a.li,{children:"When OceanBase Database is deployed in standalone mode and is connected through OBProxy, it achieves a minimum QPS value of over 10,000 and a minimum average latency of 3 ms, which are slightly inferior to those of MySQL Database. However, the query performance of OceanBase Database increases as the memory size increases. Performance indicators of OceanBase Database show greater improvement than those of MySQL Database as the DOP increases. When the DOP exceeds 200, the performance of OceanBase Database approaches and can even exceed that of MySQL Database."}),"\n",(0,s.jsx)(a.li,{children:"The MySQL architecture has only one layer, while OceanBase has two, including the OBProxy layer and the OBServer node layer. In standalone deployment, the performance of OceanBase Database is 30% to 50% higher when the OBServer nodes are directly accessed than when they are accessed through OBProxy. This is because each additional layer incurs additional network latency."}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"why-did-we-choose-oceanbase-database-and-what-sets-it-apart",children:"Why did we choose OceanBase Database and what sets it apart?"}),"\n",(0,s.jsx)(a.p,{children:"First, OceanBase Database provides an integrated architecture that supports both standalone and distributed deployment modes. What does that mean? A standalone database, like MySQL, can achieve low latency and high performance, while a distributed database supports easy scaling. What problems can these two types of databases address?"}),"\n",(0,s.jsx)(a.p,{children:"In the early business stage, when your data volumes are relatively small, a standalone database like MySQL can offer outstanding performance. Then, when your business starts growing rapidly, a distributed database that supports transparent scaling with almost unlimited capacity can allow you to easily migrate data without code changes or downtime while ensuring high performance."}),"\n",(0,s.jsx)(a.p,{children:"Second, OceanBase Database, as a native distributed database, naturally supports automatic sharding and migration, load balancing, and other scaling capabilities, enabling transparent scaling without interrupting or affecting your business. Based on the Paxos protocol, OceanBase Database V4.x is further optimized to achieve an RPO of 0 and an RTO of less than 8s, ensuring high system availability."}),"\n",(0,s.jsx)(a.p,{children:"Third, compared to MySQL Database, OceanBase Database ensures high database performance by minimizing the overhead of the distributed architecture and reduces storage costs by over 80% with a high compression ratio. In addition, the multitenancy feature of OceanBase Database is perfectly suited to SaaS customers, offering easy resource isolation and capacity scaling."}),"\n",(0,s.jsx)(a.p,{children:"In a distributed database, data processing involves the interaction of memory, disks, and networks. The latency of data reading and writing in memory is 0.1 microseconds, the latency of SSD reading and writing is about 0.1 milliseconds, and the network latency within an IDC is about 0.1 milliseconds, while the network latency across IDCs in the same city is about 3 milliseconds. On the whole, the latency of SSD reading and writing as well as the network latency are about 100 to 1000 times greater than the in-memory read and write latency. The in-memory read and write throughput can reach 100 Gbit/s, the SSD read and write throughput is about 1 Gbit/s to 2 Gbit/s, and the read and write throughput over a 10 Gigabit network is about 1.2 Gbit/s. The SSD and network read and write throughputs are about 100 times less than the in-memory read and write throughput, a difference of two orders of magnitude."}),"\n",(0,s.jsx)(a.p,{children:"As a standalone database, MySQL places the InnoDB and Server layers in the same process, and therefore offers highly efficient data interaction, making it the undisputed leader in performance and latency. However, for distributed databases in a computing-storage separated architecture, network I/O overheads between the computing and storage layers are inevitable. It is very difficult to mitigate the resulting performance restriction. The unique architecture design of OceanBase Database implements the SQL engine, storage engine, and transaction engine in one process. That is, an OBServer node does both computing and storage. When an application is connected to the OceanBase cluster by using OBProxy, the OBServer nodes report the data routing information to OBProxy. After OBProxy receives an SQL statement from the application layer, it directly forwards the SQL statement to the most appropriate OBServer node for execution based on the routing information. If the data is on one OBServer node, the SQL statement is executed in standalone mode, just like MySQL. This minimizes the network I/O overhead."}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.img,{src:"https://weboffice-zjk.docs.dingtalk.com/api/v3/office/copy/QTh3bUEvNjFxcEZDNzlUK0RreXZCamNIS3VIMDBkd0NDS0d1bHd3WXZCMUJRMUpXUXFFb01vYVFMd1pVTHZtN1RwU0RzaVlyaGp3Rzh3TDg0N2hYaUNnNUZWNDVSNzVubU14TnhGR1IvV0NoRm82MU1oM1F6N0VGTE5EZHprR014TWlKeHFzaWNRS2ZxN01BYm9NMk8rNWZGVmlaZElHNjc3UWh0QWFrdDk0Si9iRWVHR2FVYkhMUXk3QUNVdHBuQ2JMdGxGS3lIeDNucFdwWEdpUT0=/attach/object/9fb9fc45c8819738607f8b3daabf23a16c12308f",alt:""}),(0,s.jsx)(a.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2023-09/1693993921469.png",alt:"1693993921"})]}),"\n",(0,s.jsx)(a.h3,{id:"why-does-oceanbase-database-perform-better",children:"Why does OceanBase Database perform better?"}),"\n",(0,s.jsx)(a.p,{children:"OceanBase Database significantly outperforms MySQL Database when working with large data volumes or high concurrency. To find out why, we conducted an in-depth study of its architecture. Here are the key points that contribute to the high performance of OceanBase Database:"}),"\n",(0,s.jsx)(a.p,{children:"First, OceanBase Database offers both low latency and high throughput. For production business data, the proportion of single-server transactions in OceanBase Database can reach more than 80%. This is because, in OceanBase Database, data sharding is performed at the table or partition granularity. Therefore, if we update a non-partitioned table, or a single partition of a partitioned table, OceanBase Database can implement single-server transactions with low latency. Moreover, transactions involving multiple tables in the same server are also executed in single-server mode."}),"\n",(0,s.jsx)(a.p,{children:"Second, OceanBase Database allows users to use table groups to turn cross-server join operations into single-server transactions. The sound partition granularity design can ensure that 80% of transactions are single-server transactions. The proportion can be further improved by optimizing high-frequency cross-server join operations with table groups. The performance of the database will be superb if more than 90% of all business transactions are single-server transactions."}),"\n",(0,s.jsxs)(a.p,{children:["Third, OceanBase Database distinguishes query priorities. Small queries are given the top priority. Large queries occupy up to a percentage of the worker threads as defined in the ",(0,s.jsx)(a.code,{children:"large_query_worker_percentage"})," parameter. When there are no small queries, large queries can take 100% of the worker threads. The overall mechanism is similar to highway traffic rules, with large vehicles allowed to take the rightmost lane only, allowing other vehicles to overtake them in the passing lanes. This mechanism can prevent slow SQL queries and large queries from congesting the system or causing it to crash."]}),"\n",(0,s.jsx)(a.p,{children:"These architecture designs and practical optimization ensure the high performance of OceanBase Database. So how does OceanBase Database offer higher performance at lower costs?"}),"\n",(0,s.jsx)(a.h3,{id:"why-does-oceanbase-database-cost-less-while-offering-superior-performance",children:"Why does OceanBase Database cost less while offering superior performance?"}),"\n",(0,s.jsx)(a.p,{children:"OceanBase Database uses the log-structured merge-tree (LSM-tree)-based storage engine, which supports both compression through encoding and general compression to offer a high compression ratio. As you can see in the following figure, our test data shows that it uses 75% less cluster storage space than MySQL Database."}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.img,{src:"https://weboffice-zjk.docs.dingtalk.com/api/v3/office/copy/QTh3bUEvNjFxcEZDNzlUK0RreXZCamNIS3VIMDBkd0NDS0d1bHd3WXZCMUJRMUpXUXFFb01vYVFMd1pVTHZtN1RwU0RzaVlyaGp3Rzh3TDg0N2hYaUNnNUZWNDVSNzVubU14TnhGR1IvV0NoRm82MU1oM1F6N0VGTE5EZHprR014TWlKeHFzaWNRS2ZxN01BYm9NMk8rNWZGVmlaZElHNjc3UWh0QWFrdDk0Si9iRWVHR2FVYkhMUXk3QUNVdHBuQ2JMdGxGS3lIeDNucFdwWEdpUT0=/attach/object/c8607d66d96e86236d749dbaa9e3769f9a0e32b7",alt:""}),(0,s.jsx)(a.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2023-09/1693993956548.png",alt:"1693993956"})]}),"\n",(0,s.jsx)(a.p,{children:"As the business of Dmall grows, our data is increasing rapidly, and the number of nodes is increasing exponentially. The costs of a MySQL system will soon exceed those of OceanBase Database. As shown in the figure below, the compression ratio of 6:1 is verified by the test conducted in our production environment. Our business data will continue to grow in the future. As OceanBase Database supports unlimited new nodes, its storage costs will grow much slower than those of MySQL Database."}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.img,{src:"https://weboffice-zjk.docs.dingtalk.com/api/v3/office/copy/QTh3bUEvNjFxcEZDNzlUK0RreXZCamNIS3VIMDBkd0NDS0d1bHd3WXZCMUJRMUpXUXFFb01vYVFMd1pVTHZtN1RwU0RzaVlyaGp3Rzh3TDg0N2hYaUNnNUZWNDVSNzVubU14TnhGR1IvV0NoRm82MU1oM1F6N0VGTE5EZHprR014TWlKeHFzaWNRS2ZxN01BYm9NMk8rNWZGVmlaZElHNjc3UWh0QWFrdDk0Si9iRWVHR2FVYkhMUXk3QUNVdHBuQ2JMdGxGS3lIeDNucFdwWEdpUT0=/attach/object/41f4c6bb40ce230e482c27e6385fb746232085ef",alt:""}),(0,s.jsx)(a.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2023-09/1693993976054.png",alt:"1693993976"})]}),"\n",(0,s.jsx)(a.h3,{id:"multitenancy-and-resource-isolation-capabilities-of-oceanbase-database",children:"Multitenancy and resource isolation capabilities of OceanBase Database"}),"\n",(0,s.jsx)(a.p,{children:"The multitenancy feature of OceanBase Database perfectly suits the SaaS scenario because it provides resource isolation among tenants and fast elastic scaling of tenants."}),"\n",(0,s.jsx)(a.p,{children:"Resource isolation among tenants: OceanBase Database tenants are physically isolated from each other in terms of CPU, memory, and I/O resources. This ensures zero resource preemption among different businesses and ensures that issues in one business will not affect other tenants."}),"\n",(0,s.jsx)(a.p,{children:"Fast elastic scaling for tenants: Assume that a tenant has three zones, with each zone having two nodes. The tenant has a total of six nodes, and each node has one resource unit. To scale up the tenant, you only need to execute one SQL statement. For example, you can add Zone 4 and Zone 5 to scale the tenant up from 6 resource units to 10, implementing horizontal scaling with ease. Vertical scaling is simple to carry out as well. For example, if you start out with 2 CPU cores and 8 GB of memory and do not want to add nodes, you can scale up the tenant to 6 CPU cores and 12 GB of memory without adding any nodes. The whole process is dynamic and lossless without affecting or interrupting your business. Vertical scaling requires the DBA to run only a single SQL statement, greatly reducing the workload. Therefore, the multitenancy feature perfectly meets our need for a new system for SaaS businesses that is cost-saving and easy to expand."}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.img,{src:"https://weboffice-zjk.docs.dingtalk.com/api/v3/office/copy/QTh3bUEvNjFxcEZDNzlUK0RreXZCamNIS3VIMDBkd0NDS0d1bHd3WXZCMUJRMUpXUXFFb01vYVFMd1pVTHZtN1RwU0RzaVlyaGp3Rzh3TDg0N2hYaUNnNUZWNDVSNzVubU14TnhGR1IvV0NoRm82MU1oM1F6N0VGTE5EZHprR014TWlKeHFzaWNRS2ZxN01BYm9NMk8rNWZGVmlaZElHNjc3UWh0QWFrdDk0Si9iRWVHR2FVYkhMUXk3QUNVdHBuQ2JMdGxGS3lIeDNucFdwWEdpUT0=/attach/object/c75160228d41e619d04531f05b1b71937a3a64a3",alt:""}),(0,s.jsx)(a.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2023-09/1693993992089.png",alt:"1693993992"})]}),"\n",(0,s.jsx)(a.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(a.p,{children:"As a SaaS service provider, Dmall faces many pain points, such as massive databases, fast data growth, high resource costs, and complex O&M. Distributed databases provide excellent support for our business growth, improve development efficiency, and alleviate the DBA workload. Distributed databases are the path of advancement for database technology. We verified the advantages of OceanBase Database in scalability, performance, and cost effectiveness by running our own tests. Based on our current business development needs and the multitenancy capability that suits our retail SaaS scenario, we are sure that we will continue to expand our cooperation with OceanBase in the future."})]})}function h(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,a,t)=>{t.d(a,{R:()=>o,x:()=>r});var s=t(6540);const n={},i=s.createContext(n);function o(e){const a=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(i.Provider,{value:a},e.children)}}}]);