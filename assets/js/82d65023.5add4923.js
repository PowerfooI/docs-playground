"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[717],{4248:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var n=t(4848),r=t(8453);const s={},a="Quick start",c={id:"ob-operator/quick-start-of-ob-operator",title:"Quick start",description:"This topic describes how to deploy ob-operator and an OceanBase cluster and use ob-operator to manage OceanBase Database.",source:"@site/docs/ob-operator/200.quick-start-of-ob-operator.md",sourceDirName:"ob-operator",slug:"/ob-operator/quick-start-of-ob-operator",permalink:"/docs-playground/docs/ob-operator/quick-start-of-ob-operator",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ob-operator/200.quick-start-of-ob-operator.md",tags:[],version:"current",sidebarPosition:200,frontMatter:{}},l={},i=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deploy ob-operator",id:"deploy-ob-operator",level:2},{value:"Deploy an OceanBase cluster",id:"deploy-an-oceanbase-cluster",level:2},{value:"What to do next",id:"what-to-do-next",level:2}];function d(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"quick-start",children:"Quick start"}),"\n",(0,n.jsx)(o.p,{children:"This topic describes how to deploy ob-operator and an OceanBase cluster and use ob-operator to manage OceanBase Database."}),"\n",(0,n.jsx)(o.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(o.p,{children:"Before you start the deployment, make sure that the following conditions are met:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"You have an available Kubernetes cluster, which has at least 2 CPU cores, 10 GB of memory, and 100 GB of storage space."}),"\n",(0,n.jsxs)(o.li,{children:["You have installed cert-manager. For more information about how to install cert-manager, see the ",(0,n.jsx)(o.a,{href:"https://cert-manager.io/docs/installation/",children:"installation document"}),"."]}),"\n",(0,n.jsxs)(o.li,{children:["You have installed local-path-provisioner and confirmed that the specified destination has sufficient storage space. For more information about how to install local-path-provisioner, see the documentation on ",(0,n.jsx)(o.a,{href:"https://github.com/rancher/local-path-provisioner",children:"GitHub"}),"."]}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"deploy-ob-operator",children:"Deploy ob-operator"}),"\n",(0,n.jsx)(o.p,{children:"Run the following command to deploy ob-operator in the Kubernetes cluster:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"Deploy the stable version of ob-operator"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-shell",children:"kubectl apply -f https://raw.githubusercontent.com/oceanbase/ob-operator/2.1.0_release/deploy/operator.yaml\n"})}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"Deploy the developing version of ob-operator"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-shell",children:"kubectl apply -f https://raw.githubusercontent.com/oceanbase/ob-operator/master/deploy/operator.yaml\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"Run the following command to verify that ob-operator is deployed:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-shell",children:"kubectl get pod -n oceanbase-system\n"})}),"\n",(0,n.jsx)(o.p,{children:"The expected output is as follows:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-shell",children:"NAME                                            READY   STATUS    RESTARTS   AGE\noceanbase-controller-manager-86cfc8f7bf-4hfnj   2/2     Running   0          1m\n"})}),"\n",(0,n.jsx)(o.h2,{id:"deploy-an-oceanbase-cluster",children:"Deploy an OceanBase cluster"}),"\n",(0,n.jsx)(o.p,{children:"Perform the following steps to deploy an OceanBase cluster in the Kubernetes cluster:"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"Create secrets\nBefore you create an OceanBase cluster, you must create secrets required for specific users. Run the following commands to create secrets:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-shell",children:"kubectl create secret generic root-password --from-literal=password='root_password'\nkubectl create secret generic proxyro-password --from-literal=password='proxyro_password'\nkubectl create secret generic monitor-password --from-literal=password='monitor_password'\nkubectl create secret generic operator-password --from-literal=password='operator_password'\n"})}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"Deploy an OceanBase cluster\nRun the following command to deploy an OceanBase cluster in the Kubernetes cluster:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-shell",children:"kubectl apply -f https://raw.githubusercontent.com/oceanbase/ob-operator/2.1.0_release/example/quickstart/obcluster.yaml\n"})}),"\n",(0,n.jsx)(o.p,{children:"In general, it takes about 2 minutes to create a cluster. Run the following command to check the cluster status:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-shell",children:"kubectl get obclusters.oceanbase.oceanbase.com test\n"})}),"\n",(0,n.jsx)(o.p,{children:"The expected output is as follows:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-shell",children:"NAME   STATUS    AGE\ntest   running   6m2s\n"})}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"Connect to the OceanBase cluster\nPerform the following steps to connect to the created OceanBase cluster:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-shell",children:"# Run the following command to obtain the IP address and name of the pod for the server where the OceanBase cluster is deployed.\n# The pod name is in the {cluster_name}-{cluster_id}-{zone}-uuid format.\nkubectl get pods -o wide\n# Run the following command to connect to the cluster.\nmysql -h{POD_IP} -P2881 -uroot -p'root_password' oceanbase -A -c\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"If you have any questions or need help, contact OceanBase Technical Support."}),"\n",(0,n.jsx)(o.h2,{id:"what-to-do-next",children:"What to do next"}),"\n",(0,n.jsxs)(o.p,{children:["This topic describes how to deploy ob-operator and an OceanBase cluster. You can use the method to quickly set up the environment. For more information about the deployment and O&M of clusters in a production environment, see ",(0,n.jsx)(o.a,{href:"/docs-playground/docs/ob-operator/ob-operator-user-guide/cluster-management-of-ob-operator/cluster-management-intro",children:"Manage clusters"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["After you create a cluster, you need to create a business tenant. For more information about tenant management, see ",(0,n.jsx)(o.a,{href:"/docs-playground/docs/ob-operator/ob-operator-user-guide/tenant-management-of-ob-operator/tenant-management-intro",children:"Manage OceanBase Database tenants"}),"."]})]})}function u(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,o,t)=>{t.d(o,{R:()=>a,x:()=>c});var n=t(6540);const r={},s=n.createContext(r);function a(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);