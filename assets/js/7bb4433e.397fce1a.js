"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[8549],{4800:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var r=i(4848),s=i(8453);const t={},o="Changelog",a={id:"ob-operator/changelog",title:"Changelog",description:"2.2.0",source:"@site/docs/ob-operator/999.changelog.md",sourceDirName:"ob-operator",slug:"/ob-operator/changelog",permalink:"/docs-playground/docs/ob-operator/changelog",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ob-operator/999.changelog.md",tags:[],version:"current",sidebarPosition:999,frontMatter:{},sidebar:"oboperatorSidebar",previous:{title:"FAQ",permalink:"/docs-playground/docs/ob-operator/appendix/FAQ"}},d={},l=[{value:"2.2.0",id:"220",level:2},{value:"New features",id:"new-features",level:3},{value:"Bug fixes",id:"bug-fixes",level:3},{value:"Optimization",id:"optimization",level:3},{value:"2.1.2 (Released on 2024.01.24)",id:"212-released-on-20240124",level:2},{value:"New features",id:"new-features-1",level:3},{value:"Bug fixes",id:"bug-fixes-1",level:3},{value:"Optimization",id:"optimization-1",level:3},{value:"2.1.1 (Released on 2023.12.20)",id:"211-released-on-20231220",level:2},{value:"New features",id:"new-features-2",level:3},{value:"Bug fixes",id:"bug-fixes-2",level:3},{value:"Optimization",id:"optimization-2",level:3},{value:"2.1.0 (Released on 2023.11.20)",id:"210-released-on-20231120",level:2},{value:"New features",id:"new-features-3",level:3},{value:"Bug fixes",id:"bug-fixes-3",level:3},{value:"Optimization",id:"optimization-3",level:3},{value:"2.0.0 (Released on 2023.09.26)",id:"200-released-on-20230926",level:2},{value:"New features",id:"new-features-4",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"changelog",children:"Changelog"}),"\n",(0,r.jsx)(n.h2,{id:"220",children:"2.2.0"}),"\n",(0,r.jsx)(n.h3,{id:"new-features",children:"New features"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Support for binding static IP address of observer without depending on certain CNI by introducing the ",(0,r.jsx)(n.code,{children:"service"})," mode of OBCluster."]}),"\n",(0,r.jsxs)(n.li,{children:["Support for correcting ",(0,r.jsx)(n.code,{children:"Status"})," of OceanBase related resources using ",(0,r.jsx)(n.code,{children:"delete"}),", ",(0,r.jsx)(n.code,{children:"reset"}),", ",(0,r.jsx)(n.code,{children:"skip"})," and ",(0,r.jsx)(n.code,{children:"retry"})," operations offered by CRD ",(0,r.jsx)(n.code,{children:"OBResourceRescue"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Support for expanding PVCs dynamically when the OBCluster is running."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"bug-fixes",children:"Bug fixes"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Fixed infinite retry when creating a tenant that requires resource (CPU, Memory etc.) more than available."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"optimization",children:"Optimization"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Accelerated reconciliation when sub resource changes."}),"\n",(0,r.jsx)(n.li,{children:"Exposed metrics of controller manager through prometheus standard interface."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"212-released-on-20240124",children:"2.1.2 (Released on 2024.01.24)"}),"\n",(0,r.jsx)(n.h3,{id:"new-features-1",children:"New features"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Support for creating OceanBase clusters in standalone mode by adding annotation ",(0,r.jsx)(n.code,{children:'"oceanbase.oceanbase.com/mode": "standalone"'}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Support for scaling cluster's resources (CPU and Memory) in place in standalone mode."}),"\n",(0,r.jsxs)(n.li,{children:["Support for binding single PVC with pods by setting annotation ",(0,r.jsx)(n.code,{children:'"oceanbase.oceanbase.com/single-pvc": "true"'}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Support for binding a service account with pods by configuring ",(0,r.jsx)(n.code,{children:"spec.serviceAccount"})," for OBCluster."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"bug-fixes-1",children:"Bug fixes"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Fixed unexpected behavior when ob-operator restarts during observer recovery."}),"\n",(0,r.jsx)(n.li,{children:"Avoided random deletion of OBServer when modifying OBZone replicas."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"optimization-1",children:"Optimization"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Optimized task manager by adding token pool to limit maximum number of concurrent running tasks."}),"\n",(0,r.jsxs)(n.li,{children:["Optimized database connection pool by replacing ",(0,r.jsx)(n.code,{children:"sync.Map"})," with expirable LRU cache."]}),"\n",(0,r.jsxs)(n.li,{children:["Reduced required user credentials to create OBCluster. Automatically create credentials for user ",(0,r.jsx)(n.code,{children:"proxyro"}),", ",(0,r.jsx)(n.code,{children:"monitor"})," and ",(0,r.jsx)(n.code,{children:"operator"})," if not specified."]}),"\n",(0,r.jsxs)(n.li,{children:["Reduced required user credentials to create OBTenant. Automatically create credentials for user ",(0,r.jsx)(n.code,{children:"root"})," and ",(0,r.jsx)(n.code,{children:"standbyro"})," if not specified."]}),"\n",(0,r.jsx)(n.li,{children:"Ensured the deploying image is ready before the OceanBase cluster is actually created."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"211-released-on-20231220",children:"2.1.1 (Released on 2023.12.20)"}),"\n",(0,r.jsx)(n.h3,{id:"new-features-2",children:"New features"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Support for adding annotation ",(0,r.jsx)(n.code,{children:"oceanbase.oceanbase.com/independent-pvc-lifecycle"})," to the ",(0,r.jsx)(n.code,{children:"OBCluster"})," resource to make PVC remain after the ",(0,r.jsx)(n.code,{children:"OBCluster"})," resource is deleted."]}),"\n",(0,r.jsxs)(n.li,{children:["Support for tenant upgrade with the ",(0,r.jsx)(n.code,{children:"OBTenantOperation"})," resource, which is a feature introduced since OceanBase Database V4.1."]}),"\n",(0,r.jsxs)(n.li,{children:["Support for setting cluster parameters with ",(0,r.jsx)(n.code,{children:"optstr"})," in startup command of ",(0,r.jsx)(n.code,{children:"observer"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"bug-fixes-2",children:"Bug fixes"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Fixed the issue of unrestricted memory consumption in some container runtimes by explicitly setting the ",(0,r.jsx)(n.code,{children:"memory_limit"})," parameter."]}),"\n",(0,r.jsx)(n.li,{children:"Avoided long waits for changes to take effect when parameters are altered after cluster bootstraps by setting these parameters during startup."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"optimization-2",children:"Optimization"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Reduced initial value of ",(0,r.jsx)(n.code,{children:"datafile_size"})," and use incremental step to scale up when needed."]}),"\n",(0,r.jsxs)(n.li,{children:["Enhanced resource validation, especially for ",(0,r.jsx)(n.code,{children:"OBCluster"})," and ",(0,r.jsx)(n.code,{children:"OBTenant"})," resources."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"210-released-on-20231120",children:"2.1.0 (Released on 2023.11.20)"}),"\n",(0,r.jsx)(n.h3,{id:"new-features-3",children:"New features"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Added toleration and affinity options to cluster parameters."}),"\n",(0,r.jsx)(n.li,{children:"Support for restoring tenant and creating standby tenant from backup data."}),"\n",(0,r.jsx)(n.li,{children:"The ARM image is now provided."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"bug-fixes-3",children:"Bug fixes"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Fixed issues that may be caused by concurrent writes to map."}),"\n",(0,r.jsx)(n.li,{children:"Fixed the issue where expired database connections were used during tenant backup."}),"\n",(0,r.jsx)(n.li,{children:"Fixed the issue of SQL syntax compatibility with OceanBase Database 4.2.1."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"optimization-3",children:"Optimization"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Optimized failed task retry with backoff."}),"\n",(0,r.jsx)(n.li,{children:"Added event logging and improved log outputs."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"200-released-on-20230926",children:"2.0.0 (Released on 2023.09.26)"}),"\n",(0,r.jsx)(n.h3,{id:"new-features-4",children:"New features"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Support OceanBase Cluster management."}),"\n",(0,r.jsx)(n.li,{children:"Support Oceanbase Tenant management."}),"\n",(0,r.jsx)(n.li,{children:"Support for monitoring OceanBase database with OBAgent."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var r=i(6540);const s={},t=r.createContext(s);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);