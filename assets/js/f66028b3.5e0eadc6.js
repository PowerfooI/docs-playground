"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[9402],{867:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>u,frontMatter:()=>t,metadata:()=>r,toc:()=>a});var o=s(4848),l=s(8453);const t={},d="Install OBD",r={id:"obd/install-obd",title:"Install OBD",description:"You can install OBD by using these methods:",source:"@site/docs/obd/200.install-obd.md",sourceDirName:"obd",slug:"/obd/install-obd",permalink:"/docs-playground/docs/obd/install-obd",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/obd/200.install-obd.md",tags:[],version:"current",sidebarPosition:200,frontMatter:{},sidebar:"obdSidebar",previous:{title:"What is OBD",permalink:"/docs-playground/docs/obd/what-is-obd"},next:{title:"Start an OceanBase cluster",permalink:"/docs-playground/docs/obd/user-guide/quickly-start-the-oceanbase-database"}},i={},a=[{value:"Method 1: Install OBD by using RPM packages (only for CentOS 7 or later)",id:"method-1-install-obd-by-using-rpm-packages-only-for-centos-7-or-later",level:2},{value:"Method 2: Install OBD by using the source code",id:"method-2-install-obd-by-using-the-source-code",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"install-obd",children:"Install OBD"}),"\n",(0,o.jsx)(n.p,{children:"You can install OBD by using these methods:"}),"\n",(0,o.jsx)(n.h2,{id:"method-1-install-obd-by-using-rpm-packages-only-for-centos-7-or-later",children:"Method 1: Install OBD by using RPM packages (only for CentOS 7 or later)"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"sudo yum install -y yum-utils\r\nsudo yum-config-manager --add-repo https://mirrors.aliyun.com/oceanbase/OceanBase.repo\r\nsudo yum install -y ob-deploy\r\nsource /etc/profile.d/obd.sh\n"})}),"\n",(0,o.jsx)(n.h2,{id:"method-2-install-obd-by-using-the-source-code",children:"Method 2: Install OBD by using the source code"}),"\n",(0,o.jsx)(n.p,{children:"Before you install OBD by using the source code, make sure that you have installed these dependencies:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"gcc"}),"\n",(0,o.jsx)(n.li,{children:"wget"}),"\n",(0,o.jsx)(n.li,{children:"python-devel"}),"\n",(0,o.jsx)(n.li,{children:"openssl-devel"}),"\n",(0,o.jsx)(n.li,{children:"xz-devel"}),"\n",(0,o.jsx)(n.li,{children:"mysql-devel"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"To install OBD on Python2.7, run these commands:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"sh rpm/build.sh build\r\nsource /etc/profile.d/obd.sh\n"})}),"\n",(0,o.jsx)(n.p,{children:"To install OBD on Python3.8, perform the following steps"}),"\n",(0,o.jsx)(n.p,{children:"First, you should run these commands on Python2.7:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"sh rpm/build.sh executer\n"})}),"\n",(0,o.jsx)(n.p,{children:"Then run these commands on Python 3.8."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"sh rpm/build.sh build_obd\r\nsource /etc/profile.d/obd.sh\n"})})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>r});var o=s(6540);const l={},t=o.createContext(l);function d(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);