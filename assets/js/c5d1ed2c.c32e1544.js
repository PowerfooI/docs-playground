"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[2204],{8845:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var r=o(4848),s=o(8453);const t={},a="Add OBServer nodes to zones",c={id:"ob-operator/ob-operator-user-guide/cluster-management-of-ob-operator/server-management/add-server",title:"Add OBServer nodes to zones",description:"This topic describes how to scale out a cluster by adding OBServer nodes to zones in the cluster.",source:"@site/docs/ob-operator/500.ob-operator-user-guide/100.cluster-management-of-ob-operator/400.server-management/100.add-server.md",sourceDirName:"ob-operator/500.ob-operator-user-guide/100.cluster-management-of-ob-operator/400.server-management",slug:"/ob-operator/ob-operator-user-guide/cluster-management-of-ob-operator/server-management/add-server",permalink:"/docs-playground/docs/ob-operator/ob-operator-user-guide/cluster-management-of-ob-operator/server-management/add-server",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ob-operator/500.ob-operator-user-guide/100.cluster-management-of-ob-operator/400.server-management/100.add-server.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{}},d={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Procedure",id:"procedure",level:2}];function i(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"add-observer-nodes-to-zones",children:"Add OBServer nodes to zones"}),"\n",(0,r.jsx)(n.p,{children:"This topic describes how to scale out a cluster by adding OBServer nodes to zones in the cluster."}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"Before you add an OBServer node to a zone, make sure that the following conditions are met:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The server has sufficient resources for the new OBServer node."}),"\n",(0,r.jsxs)(n.li,{children:["The OceanBase cluster is in the ",(0,r.jsx)(n.code,{children:"Running"})," state."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"procedure",children:"Procedure"}),"\n",(0,r.jsxs)(n.p,{children:["Assume that the current cluster has three zones, ",(0,r.jsx)(n.code,{children:"zone1"}),", ",(0,r.jsx)(n.code,{children:"zone2"}),", and ",(0,r.jsx)(n.code,{children:"zone3"}),", each zone contains one OBServer node, and you want to add one OBServer node to each zone so that each zone contains two OBServer nodes. Perform the following steps:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Open the ",(0,r.jsx)(n.code,{children:"obcluster.yaml"})," configuration file and change the value of the ",(0,r.jsx)(n.code,{children:"replica"})," parameter of each zone from ",(0,r.jsx)(n.code,{children:"1"})," to ",(0,r.jsx)(n.code,{children:"2"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"# For example, assume that an OceanBase cluster has three zones.\ntopology:\n    - zone: zone1\n    replica: 1\n    - zone: zone2\n    replica: 1\n    - zone: zone3\n    replica: 1\n\n# Add an OBServer node to each zone.\ntopology:\n    - zone: zone1\n    replica: 2\n    - zone: zone2\n    replica: 2\n    - zone: zone3\n    replica: 2\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run the following command for the modification to take effect:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f obcluster.yaml\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Query the status of custom resources in the OceanBase cluster to check whether the operation succeeds."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Run the following command to query the status of custom resources in the OceanBase cluster."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"kubectl get obclusters.oceanbase.oceanbase.com test -n oceanbase -o yaml\n\n# obcluster desired output, only displays status here\nstatus:\n  image: oceanbase/oceanbase-cloud-native:4.2.0.0-101000032023091319\n  obzones:\n  - status: running\n    zone: obcluster-1-zone1\n  - status: running\n    zone: obcluster-1-zone2\n  - status: running\n    zone: obcluster-1-zone3\n  parameters: []\n  status: running\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Run the following command to check whether the number of OBServer nodes is correct and whether they are all in the ",(0,r.jsx)(n.code,{children:"Running"})," state:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"kubectl get observers.oceanbase.oceanbase.com -n oceanbase\n\n# observer desired output, only displays status here\noceanbase     obcluster-1-zone1-7b0e9f7e7675   10.42.0.241   running   7h48m\noceanbase     obcluster-1-zone2-67f3d1fe0b40   10.42.0.251   running   28m\noceanbase     obcluster-1-zone3-914ef208ac46   10.42.0.252   running   28m\noceanbase     obcluster-1-zone2-2336549ba883   10.42.0.19    running   3m15s\noceanbase     obcluster-1-zone3-d7011a909e2b   10.42.0.26    running   3m10s\noceanbase     obcluster-1-zone1-0f5d712adb19   10.42.0.27    running   3m10s\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>c});var r=o(6540);const s={},t=r.createContext(s);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);