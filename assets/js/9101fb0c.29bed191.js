"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[2383],{2616:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>r});var t=n(4848),d=n(8453);const c={},a="Quick deployment command",i={id:"obd/user-guide/obd-command/obd-demo",title:"Quick deployment command",description:"obd demo",source:"@site/docs/obd/300.user-guide/300.obd-command/000.obd-demo.md",sourceDirName:"obd/300.user-guide/300.obd-command",slug:"/obd/user-guide/obd-command/obd-demo",permalink:"/docs-playground/docs/obd/user-guide/obd-command/obd-demo",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/obd/300.user-guide/300.obd-command/000.obd-demo.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{}},s={},r=[{value:"obd demo",id:"obd-demo",level:2}];function l(e){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"quick-deployment-command",children:"Quick deployment command"}),"\n",(0,t.jsx)(o.h2,{id:"obd-demo",children:"obd demo"}),"\n",(0,t.jsxs)(o.p,{children:["You can use this command to deploy and start the specified component on the local server without loading the configuration file. The fixed name of the cluster deployed is ",(0,t.jsx)(o.code,{children:"demo"}),". After the deployment, you can run the ",(0,t.jsx)(o.code,{children:"obd cluster list"})," command to view the cluster in the cluster list. You can also run other cluster commands, such as ",(0,t.jsx)(o.code,{children:"obd cluster display demo"}),", to manage the cluster."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"obd demo [-c/--components]\n"})}),"\n",(0,t.jsx)(o.p,{children:"The following table describes the parameters."}),"\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Parameter"}),(0,t.jsx)(o.th,{children:"Required"}),(0,t.jsx)(o.th,{children:"Data type"}),(0,t.jsx)(o.th,{children:"Default value"}),(0,t.jsx)(o.th,{children:"Description"})]})}),(0,t.jsx)(o.tbody,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"-c/--components"}),(0,t.jsx)(o.td,{children:"No"}),(0,t.jsx)(o.td,{children:"String"}),(0,t.jsx)(o.td,{children:"oceanbase-ce,obproxy-ce,obagent,prometheus,grafana"}),(0,t.jsxs)(o.td,{children:["The list of components that are separated with commas (",(0,t.jsx)(o.code,{children:","}),"). You can use this parameter to specify the components to be deployed."]})]})})]}),"\n",(0,t.jsx)(o.p,{children:"By default, this command deploys the minimum specifications in the home directory of the current user, and the latest versions are deployed by default. You can use this command to deploy OceanBase Community Edition, OBProxy Community Edition, OBAgent, Grafana, and Prometheus."}),"\n",(0,t.jsx)(o.p,{children:"You can select the version and specify the configurations of a component to be deployed."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"# Deploy components of the specified version.\nobd demo -c oceanbase-ce,obproxy-ce --oceanbase-ce.version=3.1.3\n# Specify the components to be deployed and the package hash of OceanBase Community Edition.\nobd demo -c oceanbase-ce,obproxy-ce --oceanbase-ce.package_hash=f38723204d49057d3e062ffad778edc1552a7c114622bf2a86fea769fbd202ea\n# Specify the installation path for all components to be deployed.\n## Deploy OceanBase Community Edition and OBProxy Community Edition in the /data/demo directory and create corresponding working directories for them.\nobd demo -c oceanbase-ce,obproxy-ce --home_path=/data/demo\n# Specify the installation path for all components to be deployed.\nobd demo --home_path=/path\n# Specify the installation path for a specific component to be deployed.\n## Deploy OceanBase Community Edition in the home directory and create a working directory for it, and deploy OBProxy Community Edition in the /data/playground/obproxy-ce directory.\nobd demo -c oceanbase-ce,obproxy-ce --obproxy-ce.home_path=/data/demo/\n# Specify the configurations of a component to be deployed.\n## Specify the mysql_port parameter of OceanBase Community Edition.\nobd demo --oceanbase-ce.mysql_port=3881\n"})}),"\n",(0,t.jsxs)(o.p,{children:["For more information about the relevant configuration items in the configuration file, refer to ",(0,t.jsx)(o.a,{href:"/docs-playground/docs/obd/configuration-file-description",children:"Configuration file description"}),"."]}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.strong,{children:"Notice"})}),"\n",(0,t.jsx)(o.p,{children:"This command supports only level-1 configurations under global that are specified by using options."}),"\n"]})]})}function m(e={}){const{wrapper:o}={...(0,d.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>a,x:()=>i});var t=n(6540);const d={},c=t.createContext(d);function a(e){const o=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),t.createElement(c.Provider,{value:o},e.children)}}}]);