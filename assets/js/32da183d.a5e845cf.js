"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[6523],{4448:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=o(4848),r=o(8453);const a={},s="Delete a tenant",c={id:"ob-operator/ob-operator-user-guide/tenant-management-of-ob-operator/delete-tenant-of-ob-operator",title:"Delete a tenant",description:"This topic describes how to use ob-operator to delete a tenant from a Kubernetes environment.",source:"@site/docs/ob-operator/500.ob-operator-user-guide/200.tenant-management-of-ob-operator/300.delete-tenant-of-ob-operator.md",sourceDirName:"ob-operator/500.ob-operator-user-guide/200.tenant-management-of-ob-operator",slug:"/ob-operator/ob-operator-user-guide/tenant-management-of-ob-operator/delete-tenant-of-ob-operator",permalink:"/docs-playground/docs/ob-operator/ob-operator-user-guide/tenant-management-of-ob-operator/delete-tenant-of-ob-operator",draft:!1,unlisted:!1,editUrl:"https://github.com/powerfooi/docs-playground/tree/main/docs/ob-operator/500.ob-operator-user-guide/200.tenant-management-of-ob-operator/300.delete-tenant-of-ob-operator.md",tags:[],version:"current",sidebarPosition:300,frontMatter:{}},i={},d=[{value:"Procedure",id:"procedure",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"delete-a-tenant",children:"Delete a tenant"}),"\n",(0,n.jsx)(t.p,{children:"This topic describes how to use ob-operator to delete a tenant from a Kubernetes environment."}),"\n",(0,n.jsx)(t.h2,{id:"procedure",children:"Procedure"}),"\n",(0,n.jsxs)(t.p,{children:["You can delete the specified tenant resources from the cluster by using the configuration file ",(0,n.jsx)(t.code,{children:"tenant.yaml"}),". For more information about the configuration file, visit ",(0,n.jsx)(t.a,{href:"https://github.com/oceanbase/ob-operator/blob/2.1.0_release/deploy/tenant.yaml",children:"GitHub"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Run the following command to delete a tenant. This command deletes an OceanBase Database tenant with custom resources in the current Kubernetes cluster."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"kubectl delete -f tenant.yaml\n"})}),"\n",(0,n.jsx)(t.p,{children:"Run the following command to check whether the current Kubernetes cluster contains the custom resources of the deleted tenant:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"kubectl get obtenants.oceanbase.oceanbase.com -A -o yaml\n"})}),"\n",(0,n.jsx)(t.p,{children:"If not, the tenant is deleted."})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>c});var n=o(6540);const r={},a=n.createContext(r);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);