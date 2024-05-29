"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[924],{4058:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=o(4848),r=o(8453);const s={},a="Add zones to a cluster",c={id:"ob-operator/ob-operator-user-guide/cluster-management-of-ob-operator/zone-management/add-zone",title:"Add zones to a cluster",description:"This topic describes how to add zones to a cluster.",source:"@site/docs/ob-operator/500.ob-operator-user-guide/100.cluster-management-of-ob-operator/300.zone-management/100.add-zone.md",sourceDirName:"ob-operator/500.ob-operator-user-guide/100.cluster-management-of-ob-operator/300.zone-management",slug:"/ob-operator/ob-operator-user-guide/cluster-management-of-ob-operator/zone-management/add-zone",permalink:"/docs-playground/docs/ob-operator/ob-operator-user-guide/cluster-management-of-ob-operator/zone-management/add-zone",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ob-operator/500.ob-operator-user-guide/100.cluster-management-of-ob-operator/300.zone-management/100.add-zone.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{}},i={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Procedure",id:"procedure",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"add-zones-to-a-cluster",children:"Add zones to a cluster"}),"\n",(0,t.jsx)(n.p,{children:"This topic describes how to add zones to a cluster."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"Before you add a zone to a cluster, make sure that the following conditions are met:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The server must have sufficient resources for the new zone."}),"\n",(0,t.jsxs)(n.li,{children:["The OceanBase cluster is in the ",(0,t.jsx)(n.code,{children:"Running"})," state."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"procedure",children:"Procedure"}),"\n",(0,t.jsxs)(n.p,{children:["Assume that the current cluster has three zones, ",(0,t.jsx)(n.code,{children:"zone1"}),", ",(0,t.jsx)(n.code,{children:"zone2"}),", and ",(0,t.jsx)(n.code,{children:"zone3"}),", and each zone contains one OBServer node. You can perform the following steps to scale out the cluster to one that consists of five zones."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Modify the ",(0,t.jsx)(n.code,{children:"spec.topology"})," parameter in the ",(0,t.jsx)(n.code,{children:"obcluster.yaml"})," configuration file to add ",(0,t.jsx)(n.code,{children:"zone4"})," and ",(0,t.jsx)(n.code,{children:"zone5"}),". For more information about the complete configuration file, see ",(0,t.jsx)(n.a,{href:"/docs-playground/docs/ob-operator/ob-operator-user-guide/cluster-management-of-ob-operator/create-cluster",children:"Create a cluster"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"# For example, assume that an OceanBase cluster has three zones.\ntopology:\n    - zone: zone1\n    replica: 1\n    - zone: zone2\n    replica: 1\n    - zone: zone3\n    replica: 1\n\n# Add zone4 and zone5 to the cluster.\ntopology:\n    - zone: zone1\n    replica: 1\n    - zone: zone2\n    replica: 1\n    - zone: zone3\n    replica: 1\n    - zone: zone4\n    replica: 1\n    - zone: zone5\n    replica: 1\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run the following command for the modification to take effect:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"kubectl apply -f obcluster.yaml\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Query the status of custom resources in the OceanBase cluster to check whether the operation succeeds."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Run the following command to query the status of custom resources in the OceanBase cluster. If the cluster and the five zones are in the ",(0,t.jsx)(n.code,{children:"Running"})," state, the operation is successful."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl get obclusters.oceanbase.oceanbase.com test -n oceanbase -o yaml\n\n# desired output, only displays status here\nstatus:\n  image: oceanbase/oceanbase-cloud-native:4.2.0.0-101000032023091319\n  obzones:\n  - status: running\n    zone: obcluster-1-zone1\n  - status: running\n    zone: obcluster-1-zone2\n  - status: running\n    zone: obcluster-1-zone3\n  - status: running\n    zone: obcluster-1-zone4\n  - status: running\n    zone: obcluster-1-zone5\n  parameters: []\n  status: running\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>c});var t=o(6540);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);