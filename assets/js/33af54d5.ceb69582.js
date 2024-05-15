"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[8826],{2154:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=t(4848),o=t(8453);const r={},s="Perform tenant O&M operations",i={id:"ob-operator/ob-operator-user-guide/tenant-management-of-ob-operator/tenant-operation",title:"Perform tenant O&M operations",description:"A tenant contains various resources. To prevent a tenant from becoming bloated and improve tenant O&M flexibility, ob-operator provides the tenant O&M resource OBTenantOperation for you to perform intra-tenant and inter-tenant O&M operations. ob-operator V2.1.0 supports three O&M operations",source:"@site/docs/ob-operator/500.ob-operator-user-guide/200.tenant-management-of-ob-operator/400.tenant-operation.md",sourceDirName:"ob-operator/500.ob-operator-user-guide/200.tenant-management-of-ob-operator",slug:"/ob-operator/ob-operator-user-guide/tenant-management-of-ob-operator/tenant-operation",permalink:"/docs-playground/docs/ob-operator/ob-operator-user-guide/tenant-management-of-ob-operator/tenant-operation",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ob-operator/500.ob-operator-user-guide/200.tenant-management-of-ob-operator/400.tenant-operation.md",tags:[],version:"current",sidebarPosition:400,frontMatter:{}},c={},p=[{value:"Examples",id:"examples",level:2},{value:"Create a standby tenant",id:"create-a-standby-tenant",level:3},{value:"View the tenant status",id:"view-the-tenant-status",level:3},{value:"Perform O&amp;M operations on the tenant",id:"perform-om-operations-on-the-tenant",level:3},{value:"Query the information about the tenant O&amp;M operations",id:"query-the-information-about-the-tenant-om-operations",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"perform-tenant-om-operations",children:"Perform tenant O&M operations"}),"\n",(0,a.jsxs)(n.p,{children:["A tenant contains various resources. To prevent a tenant from becoming bloated and improve tenant O&M flexibility, ob-operator provides the tenant O&M resource ",(0,a.jsx)(n.code,{children:"OBTenantOperation"})," for you to perform intra-tenant and inter-tenant O&M operations. ob-operator V2.1.0 supports three O&M operations: changing the password of the root user, activating a standby tenant, and executing a primary/standby tenant switchover. Standby tenant activation and primary/standby tenant switchover are related to the ",(0,a.jsx)(n.a,{href:"/docs-playground/docs/ob-operator/ob-operator-user-guide/high-availability/standby-tenant-of-ob-operator",children:"physical standby database"})," feature. Here are sample configurations of the three O&M operations:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:"op-chg-pwd.yaml",children:'# Change the password.\napiVersion: oceanbase.oceanbase.com/v1alpha1\nkind: OBTenantOperation\nmetadata:\n  name: op-chg-pwd\n  namespace: oceanbase\nspec:\n  type: "CHANGE_PASSWORD"\n  changePwd:\n    tenant: "t1"\n    secretRef: "t1-credential-new"\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:"op-failover.yaml",children:'# Upgrade a standby tenant to the primary tenant.\napiVersion: oceanbase.oceanbase.com/v1alpha1\nkind: OBTenantOperation\nmetadata:\n  name: op-failover\n  namespace: oceanbase\nspec:\n  type: "FAILOVER"\n  failover:\n    standbyTenant: "t1s"\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:"op-switchover.yaml",children:'# Perform a primary/standby tenant switchover.\napiVersion: oceanbase.oceanbase.com/v1alpha1\nkind: OBTenantOperation\nmetadata:\n  name: op-switchover\n  namespace: oceanbase\nspec:\n  type: "SWITCHOVER"\n  switchover:\n    primaryTenant: "t1"\n    standbyTenant: "t1s"\n'})}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.h3,{id:"create-a-standby-tenant",children:"Create a standby tenant"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f tenant_restore.yaml\n"})}),"\n",(0,a.jsx)(n.h3,{id:"view-the-tenant-status",children:"View the tenant status"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"kubectl get obtenants.oceanbase.oceanbase.com -n oceanbase\n"})}),"\n",(0,a.jsx)(n.p,{children:"The command output is as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"NAME   STATUS    TENANTNAME   TENANTROLE   CLUSTERNAME   AGE\nt1     running   t1           PRIMARY      obcluster     3d4h\nt1s    running   t1s          STANDBY      obcluster     3h30m\n"})}),"\n",(0,a.jsx)(n.h3,{id:"perform-om-operations-on-the-tenant",children:"Perform O&M operations on the tenant"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f tenant_op_change_pwd.yaml\nkubectl apply -f tenant_op_failover.yaml\n"})}),"\n",(0,a.jsx)(n.h3,{id:"query-the-information-about-the-tenant-om-operations",children:"Query the information about the tenant O&M operations"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"kubectl get obtenantoperations.oceanbase.oceanbase.com -n oceanbase\n"})}),"\n",(0,a.jsx)(n.p,{children:"The command output is as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"NAME          TYPE       STATUS       AGE   CLUSTER     PRIMARYTENANT\nop-failover   FAILOVER   SUCCESSFUL   8s    obcluster   t1s\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Note that the value of the ",(0,a.jsx)(n.code,{children:"PRIMARYTENANT"})," field in the output indicates the new primary tenant after the switchover. The value of the ",(0,a.jsx)(n.code,{children:"SECONDARYTENANT"})," field in the output indicates the new standby tenant after the switchover. To save space, the ",(0,a.jsx)(n.code,{children:"SECONDARYTENANT"})," field is not exported by default. You can run the ",(0,a.jsx)(n.code,{children:"kubectl get obtenantoperations.oceanbase.oceanbase.com -o wide"})," command to view it."]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var a=t(6540);const o={},r=a.createContext(o);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);