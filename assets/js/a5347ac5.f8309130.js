"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[5988],{4413:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=o(4848),t=o(8453);const s={},a="Update resources",c={id:"ob-operator/ob-operator-user-guide/cluster-management-of-ob-operator/update-resources",title:"Update resources",description:"After the cluster is created and running, we may need to adjust the resource configuration of the OBServer node, such as CPU, memory, and storage volumes. This article introduces the resource configuration that can be modified and the specific operations.",source:"@site/docs/ob-operator/500.ob-operator-user-guide/100.cluster-management-of-ob-operator/650.update-resources.md",sourceDirName:"ob-operator/500.ob-operator-user-guide/100.cluster-management-of-ob-operator",slug:"/ob-operator/ob-operator-user-guide/cluster-management-of-ob-operator/update-resources",permalink:"/docs-playground/docs/ob-operator/ob-operator-user-guide/cluster-management-of-ob-operator/update-resources",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ob-operator/500.ob-operator-user-guide/100.cluster-management-of-ob-operator/650.update-resources.md",tags:[],version:"current",sidebarPosition:650,frontMatter:{}},i={},l=[{value:"Scale up: Modify CPU and memory resources",id:"scale-up-modify-cpu-and-memory-resources",level:2},{value:"Dynamically expand PVC",id:"dynamically-expand-pvc",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"update-resources",children:"Update resources"}),"\n",(0,r.jsx)(n.p,{children:"After the cluster is created and running, we may need to adjust the resource configuration of the OBServer node, such as CPU, memory, and storage volumes. This article introduces the resource configuration that can be modified and the specific operations."}),"\n",(0,r.jsx)(n.h2,{id:"scale-up-modify-cpu-and-memory-resources",children:"Scale up: Modify CPU and memory resources"}),"\n",(0,r.jsxs)("main",{id:"notice",type:"notice",children:[(0,r.jsx)("h4",{children:"Notes"}),(0,r.jsxs)("p",{children:["Only the ",(0,r.jsx)("code",{children:"standalone"})," mode cluster supports this operation."]})]}),"\n",(0,r.jsx)(n.p,{children:"Assuming that we have created a single-node standalone cluster with a resource specification of 2C+10G. The configuration in YAML format is as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"  observer:\n    # ...\n    resource:\n      cpu: 2\n      memory: 10Gi\n    # ...\n"})}),"\n",(0,r.jsx)(n.p,{children:"If you find that the resources are insufficient after running for a period of time and need to be expanded, you can directly modify this part of the configuration. For example, in the following YAML fragment, we have expanded the resource specification of the OBServer to 4C+16G."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"  observer:\n    # ...\n    resource:\n      cpu: 4\n      memory: 16Gi\n    # ...\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Upon modifying the YAML, apply it to the Kubernetes cluster. ob-operator will then perform the cluster's scale-up expansion. Once the OBCluster transitions back to a ",(0,r.jsx)(n.code,{children:"running"})," state, the expansion is complete."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f obcluster.yaml\nkubectl get obcluster -w\n\nNAME   STATUS             AGE\ntest   scale up obzone    xxx\ntest   scale up obzone    xxx\n...\ntest   running            xxx\n"})}),"\n",(0,r.jsx)(n.h2,{id:"dynamically-expand-pvc",children:"Dynamically expand PVC"}),"\n",(0,r.jsxs)("main",{id:"notice",type:"notice",children:[(0,r.jsx)("h4",{children:"Notes"}),(0,r.jsxs)("p",{children:["This operation requires that the storage class used by the cluster supports the ",(0,r.jsx)("code",{children:"AllowVolumeExpansion"})," feature."]})]}),"\n",(0,r.jsx)(n.p,{children:"Assuming that we have deployed an OBCluster, the storage configuration is shown in the following YAML fragment:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"  observer:\n    # ...\n    storage:\n      dataStorage:\n        storageClass: my-storage\n        size: 50Gi\n      redoLogStorage:\n        storageClass: my-storage\n        size: 50Gi\n      logStorage:\n        storageClass: my-storage\n        size: 20Gi\n    # ...\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To expand the mounted volume, increase the ",(0,r.jsx)(n.code,{children:"size"})," value in the YAML fragment and apply the changes via kubectl. ob-operator will handle the PVC expansion. Note that ",(0,r.jsx)(n.code,{children:"size"})," can only be increased."]}),"\n",(0,r.jsx)(n.p,{children:"After modification, the configuration is as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"  observer:\n    # ...\n    storage:\n      dataStorage:\n        storageClass: my-storage\n        size: 60Gi\n      redoLogStorage:\n        storageClass: my-storage\n        size: 60Gi\n      logStorage:\n        storageClass: my-storage\n        size: 30Gi\n    # ...\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f obcluster.yaml\nkubectl get obcluster -w\n\nNAME   STATUS             AGE\ntest   expand pvc         xxx\ntest   expand pvc         xxx\n...\ntest   running            xxx\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>c});var r=o(6540);const t={},s=r.createContext(t);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);