"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[3618],{6246:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>i});var r=o(4848),s=o(8453);const t={},a="Delete OBServer nodes from zones",c={id:"ob-operator/ob-operator-user-guide/cluster-management-of-ob-operator/server-management/delete-server",title:"Delete OBServer nodes from zones",description:"This topic describes how to scale in a cluster by removing OBServer nodes from zones in the cluster.",source:"@site/docs/ob-operator/500.ob-operator-user-guide/100.cluster-management-of-ob-operator/400.server-management/200.delete-server.md",sourceDirName:"ob-operator/500.ob-operator-user-guide/100.cluster-management-of-ob-operator/400.server-management",slug:"/ob-operator/ob-operator-user-guide/cluster-management-of-ob-operator/server-management/delete-server",permalink:"/docs-playground/docs/ob-operator/ob-operator-user-guide/cluster-management-of-ob-operator/server-management/delete-server",draft:!1,unlisted:!1,editUrl:"https://github.com/powerfooi/docs-playground/tree/main/docs/ob-operator/500.ob-operator-user-guide/100.cluster-management-of-ob-operator/400.server-management/200.delete-server.md",tags:[],version:"current",sidebarPosition:200,frontMatter:{}},l={},i=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Procedure",id:"procedure",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"delete-observer-nodes-from-zones",children:"Delete OBServer nodes from zones"}),"\n",(0,r.jsx)(n.p,{children:"This topic describes how to scale in a cluster by removing OBServer nodes from zones in the cluster."}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The OceanBase cluster is in the ",(0,r.jsx)(n.code,{children:"Running"})," state."]}),"\n",(0,r.jsx)(n.li,{children:"After the OBServer nodes are deleted, the cluster has sufficient resources for the units of tenants."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"procedure",children:"Procedure"}),"\n",(0,r.jsxs)(n.p,{children:["Assume that the current cluster has three zones, ",(0,r.jsx)(n.code,{children:"zone1"}),", ",(0,r.jsx)(n.code,{children:"zone2"}),", and ",(0,r.jsx)(n.code,{children:"zone3"}),", each zone contains two OBServer nodes, and you want to delete one OBServer node from each zone so that each zone contains one OBServer node."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Open the ",(0,r.jsx)(n.code,{children:"obcluster.yaml"})," configuration file and change the value of the ",(0,r.jsx)(n.code,{children:"replica"})," parameter of each zone from ",(0,r.jsx)(n.code,{children:"2"})," to ",(0,r.jsx)(n.code,{children:"1"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"# For example, assume that an OceanBase cluster has three zones.\ntopology:\n  - zone: zone1\n    replica: 2\n  - zone: zone2\n    replica: 2\n  - zone: zone3\n    replica: 2\n\n# Delete an OBServer node from each zone.\ntopology:\n  - zone: zone1\n    replica: 1\n  - zone: zone2\n    replica: 1\n  - zone: zone3\n    replica: 1  \n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run the following command for the modification to take effect:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"kubectl apply -f obcluster.yaml\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Query the status of custom resources in the OceanBase cluster to check whether the operation succeeds.\nRun the following command to query the status of the OceanBase cluster."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"kubectl get obclusters.oceanbase.oceanbase.com test -n oceanbase -o yaml\n\n# obcluster desired output, only displays status here\nstatus:\n  image: oceanbase/oceanbase-cloud-native:4.2.0.0-101000032023091319\n  obzones:\n  - status: running\n    zone: obcluster-1-zone1\n  - status: running\n    zone: obcluster-1-zone2\n  - status: running\n    zone: obcluster-1-zone3\n  parameters: []\n  status: running\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Run the following command to check whether the number of OBServer nodes is correct and whether they are all in the ",(0,r.jsx)(n.code,{children:"Running"})," state:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"kubectl get observers.oceanbase.oceanbase.com -n oceanbase\n\n# observer desired output, only displays status here\noceanbase     obcluster-1-zone1-7b0e9f7e7675   10.42.0.241   running   7h48m\noceanbase     obcluster-1-zone2-67f3d1fe0b40   10.42.0.251   running   28m\noceanbase     obcluster-1-zone3-914ef208ac46   10.42.0.252   running   28m\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>c});var r=o(6540);const s={},t=r.createContext(s);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);