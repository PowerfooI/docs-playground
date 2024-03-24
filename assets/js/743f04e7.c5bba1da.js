"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[6945],{5925:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var o=d(4848),s=d(8453);const t={},i="Tool commands",c={id:"obd/user-guide/obd-command/tools-commands",title:"Tool commands",description:"OceanBase Deployer (OBD) provides a series of tool commands, including general commands that deliver a better experience for developers.",source:"@site/docs/obd/300.user-guide/300.obd-command/400.tools-commands.md",sourceDirName:"obd/300.user-guide/300.obd-command",slug:"/obd/user-guide/obd-command/tools-commands",permalink:"/docs-playground/docs/obd/user-guide/obd-command/tools-commands",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/obd/300.user-guide/300.obd-command/400.tools-commands.md",tags:[],version:"current",sidebarPosition:400,frontMatter:{},sidebar:"obdSidebar",previous:{title:"Testing commands",permalink:"/docs-playground/docs/obd/user-guide/obd-command/test-command-group"},next:{title:"Use OCP to take over a cluster deployed by OBD",permalink:"/docs-playground/docs/obd/user-guide/OCP-takeover-OBD-deployment-cluster"}},r={},l=[{value:"obd devmode enable",id:"obd-devmode-enable",level:2},{value:"obd devmode disable",id:"obd-devmode-disable",level:2},{value:"obd env show",id:"obd-env-show",level:2},{value:"obd env set",id:"obd-env-set",level:2},{value:"obd env unset",id:"obd-env-unset",level:2},{value:"obd env clear",id:"obd-env-clear",level:2},{value:"obd tool command",id:"obd-tool-command",level:2},{value:"obd tool db_connect",id:"obd-tool-db_connect",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"tool-commands",children:"Tool commands"}),"\n",(0,o.jsx)(n.p,{children:"OceanBase Deployer (OBD) provides a series of tool commands, including general commands that deliver a better experience for developers."}),"\n",(0,o.jsxs)(n.p,{children:["You can use the ",(0,o.jsx)(n.code,{children:"-h/--help"})," option to view the help information of sub-commands. Similarly, you can also use ",(0,o.jsx)(n.code,{children:"-v/--verbose"})," to view the detailed execution process of commands when the execution of sub commands reports an error."]}),"\n",(0,o.jsx)(n.h2,{id:"obd-devmode-enable",children:"obd devmode enable"}),"\n",(0,o.jsx)(n.p,{children:"You can run this command to enable the developer mode, which is a prerequisite for using other tool commands. After you enable the developer mode, OBD will downgrade the level of some exceptions and ignore some parameter exceptions. If you are not a kernel developer, use this command with caution."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"obd devmode enable\n"})}),"\n",(0,o.jsx)(n.h2,{id:"obd-devmode-disable",children:"obd devmode disable"}),"\n",(0,o.jsx)(n.p,{children:"You can run this command to disable the developer mode."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"obd devmode disable\n"})}),"\n",(0,o.jsx)(n.h2,{id:"obd-env-show",children:"obd env show"}),"\n",(0,o.jsx)(n.p,{children:"You can run this command to display the environment variables of OBD."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"obd env show\n"})}),"\n",(0,o.jsx)(n.h2,{id:"obd-env-set",children:"obd env set"}),"\n",(0,o.jsx)(n.p,{children:"You can run this command to set the environment variables of OBD. Environment variables can affect the performance of OBD. Therefore, we recommend that you use this command only when it is necessary."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"obd env set [key] [value]\n"})}),"\n",(0,o.jsx)(n.p,{children:"You can set the following variables:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"OBD_DISABLE_RSYNC"}),": OBD allows you to run the ",(0,o.jsx)(n.code,{children:"rsync"})," command for remote data transmission when the prerequisites are met. If this environment variable is set to ",(0,o.jsx)(n.code,{children:"1"}),", the ",(0,o.jsx)(n.code,{children:"rsync"})," command is disabled. Valid values: ",(0,o.jsx)(n.code,{children:"0"})," and ",(0,o.jsx)(n.code,{children:"1"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"OBD_DEV_MODE"}),": specifies whether to enable the developer mode. Valid values: ",(0,o.jsx)(n.code,{children:"0"})," and ",(0,o.jsx)(n.code,{children:"1"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"obd-env-unset",children:"obd env unset"}),"\n",(0,o.jsx)(n.p,{children:"You can run this command to delete the specified environment variable."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"obd env unset [key] [value]\n"})}),"\n",(0,o.jsx)(n.h2,{id:"obd-env-clear",children:"obd env clear"}),"\n",(0,o.jsx)(n.p,{children:"You can run this command to clear environment variables of OBD. Use this command with caution."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"obd env clear\n"})}),"\n",(0,o.jsx)(n.h2,{id:"obd-tool-command",children:"obd tool command"}),"\n",(0,o.jsx)(n.p,{children:"You can use this command to run some general commands."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"obd tool command <deploy name> <command> [options]\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Valid values of the ",(0,o.jsx)(n.code,{children:"command"})," field:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"pid"}),": allows you to view the process ID (PID) of a service. This is a non-interactive command."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"ssh"}),": allows you to log on to the specified server and enter the log directory. This is an interactive command."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"less"}),": allows you to view the logs of the specified service. This is an interactive command."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"gdb"}),": allows you to attach GNU Debugger (GDB) to a template service. This is an interactive command."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The following table describes the options of the command."}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Option"}),(0,o.jsx)(n.th,{children:"Required"}),(0,o.jsx)(n.th,{children:"Data type"}),(0,o.jsx)(n.th,{children:"Default value"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"-c/--components"}),(0,o.jsx)(n.td,{children:"No"}),(0,o.jsx)(n.td,{children:"String"}),(0,o.jsx)(n.td,{children:"In an interactive command, the first component specified in the configuration file is used by default. In a non-interactive command, all components are used."}),(0,o.jsxs)(n.td,{children:["The name of the component on which the command is executed. Separate multiple component names with commas (",(0,o.jsx)(n.code,{children:","}),")."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"-s/--servers"}),(0,o.jsx)(n.td,{children:"No"}),(0,o.jsx)(n.td,{children:"String"}),(0,o.jsx)(n.td,{children:"In an interactive command, the first node of the current component specified in the configuration file is used by default. In a non-interactive command, all available nodes are used."}),(0,o.jsxs)(n.td,{children:["The name of the node under the specified component. Separate multiple node names with commas (",(0,o.jsx)(n.code,{children:","}),")."]})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"obd-tool-db_connect",children:"obd tool db_connect"}),"\n",(0,o.jsx)(n.p,{children:"You can run this command to create a connection to the database."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"obd tool db_connect <deploy name> [options]\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"deploy name"})," parameter indicates the name of the deployed cluster, which is also the alias of the configuration file."]}),"\n",(0,o.jsx)(n.p,{children:"The following table describes the options of the command."}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Option"}),(0,o.jsx)(n.th,{children:"Required"}),(0,o.jsx)(n.th,{children:"Data type"}),(0,o.jsx)(n.th,{children:"Default value"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"-c or --component"}),(0,o.jsx)(n.td,{children:"No"}),(0,o.jsx)(n.td,{children:"String"}),(0,o.jsx)(n.td,{children:"By default, the first component specified in the configuration file is used."}),(0,o.jsxs)(n.td,{children:["The name of the component to be connected. Valid values: ",(0,o.jsx)(n.code,{children:"obproxy"}),", ",(0,o.jsx)(n.code,{children:"obproxy-ce"}),", ",(0,o.jsx)(n.code,{children:"oceanbase"}),", and ",(0,o.jsx)(n.code,{children:"oceanbase-ce"}),"."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"-s or --server"}),(0,o.jsx)(n.td,{children:"No"}),(0,o.jsx)(n.td,{children:"String"}),(0,o.jsx)(n.td,{children:"By default, the first node of the current component specified in the configuration file is used."}),(0,o.jsx)(n.td,{children:"The name of the node under the specified component."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"-u or --user"}),(0,o.jsx)(n.td,{children:"No"}),(0,o.jsx)(n.td,{children:"String"}),(0,o.jsx)(n.td,{children:"root"}),(0,o.jsx)(n.td,{children:"The username for connecting to the database."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"-p or --password"}),(0,o.jsx)(n.td,{children:"No"}),(0,o.jsx)(n.td,{children:"String"}),(0,o.jsx)(n.td,{children:"Empty"}),(0,o.jsx)(n.td,{children:"The password for connecting to the database."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"-t or --tenant"}),(0,o.jsx)(n.td,{children:"No"}),(0,o.jsx)(n.td,{children:"String"}),(0,o.jsx)(n.td,{children:"sys"}),(0,o.jsx)(n.td,{children:"The tenant for connecting to the database."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"-D or --database"}),(0,o.jsx)(n.td,{children:"No"}),(0,o.jsx)(n.td,{children:"String"}),(0,o.jsx)(n.td,{children:"Empty"}),(0,o.jsx)(n.td,{children:"The name of the database to be connected."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"--obclient-bin"}),(0,o.jsx)(n.td,{children:"No"}),(0,o.jsx)(n.td,{children:"String"}),(0,o.jsx)(n.td,{children:"obclient"}),(0,o.jsx)(n.td,{children:"The path to the directory where the binary files of OBClient are stored."})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8453:(e,n,d)=>{d.d(n,{R:()=>i,x:()=>c});var o=d(6540);const s={},t=o.createContext(s);function i(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);