"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[4661],{6648:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var l=s(4848),d=s(8453);const i={},r="\u4f7f\u7528 OBD \u542f\u52a8 OceanBase \u6570\u636e\u5e93\u96c6\u7fa4",c={id:"obd/user-guide/start-the-oceanbase-cluster-by-using-obd",title:"\u4f7f\u7528 OBD \u542f\u52a8 OceanBase \u6570\u636e\u5e93\u96c6\u7fa4",description:"\u60a8\u53ef\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u542f\u52a8 OceanBase \u6570\u636e\u5e93\u96c6\u7fa4\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/obd/300.user-guide/200.start-the-oceanbase-cluster-by-using-obd.md",sourceDirName:"obd/300.user-guide",slug:"/obd/user-guide/start-the-oceanbase-cluster-by-using-obd",permalink:"/docs-playground/zh-Hans/docs/obd/user-guide/start-the-oceanbase-cluster-by-using-obd",draft:!1,unlisted:!1,editUrl:"https://github.com/powerfooi/docs-playground/tree/main/docs/obd/300.user-guide/200.start-the-oceanbase-cluster-by-using-obd.md",tags:[],version:"current",sidebarPosition:200,frontMatter:{}},a={},o=[{value:"\u9009\u62e9\u914d\u7f6e\u6587\u4ef6",id:"\u9009\u62e9\u914d\u7f6e\u6587\u4ef6",level:2},{value:"\u5c0f\u89c4\u683c\u5f00\u53d1\u6a21\u5f0f",id:"\u5c0f\u89c4\u683c\u5f00\u53d1\u6a21\u5f0f",level:3},{value:"\u4e13\u4e1a\u5f00\u53d1\u6a21\u5f0f",id:"\u4e13\u4e1a\u5f00\u53d1\u6a21\u5f0f",level:3},{value:"\u90e8\u7f72\u548c\u542f\u52a8\u6570\u636e\u5e93",id:"\u90e8\u7f72\u548c\u542f\u52a8\u6570\u636e\u5e93",level:2},{value:"\u67e5\u770b\u96c6\u7fa4\u72b6\u6001",id:"\u67e5\u770b\u96c6\u7fa4\u72b6\u6001",level:2},{value:"\u4fee\u6539\u914d\u7f6e",id:"\u4fee\u6539\u914d\u7f6e",level:2},{value:"\u505c\u6b62\u96c6\u7fa4",id:"\u505c\u6b62\u96c6\u7fa4",level:2},{value:"\u9500\u6bc1\u96c6\u7fa4",id:"\u9500\u6bc1\u96c6\u7fa4",level:2}];function t(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"\u4f7f\u7528-obd-\u542f\u52a8-oceanbase-\u6570\u636e\u5e93\u96c6\u7fa4",children:"\u4f7f\u7528 OBD \u542f\u52a8 OceanBase \u6570\u636e\u5e93\u96c6\u7fa4"}),"\n",(0,l.jsx)(n.p,{children:"\u60a8\u53ef\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u542f\u52a8 OceanBase \u6570\u636e\u5e93\u96c6\u7fa4\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u9009\u62e9\u914d\u7f6e\u6587\u4ef6",children:"\u9009\u62e9\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,l.jsxs)(n.p,{children:["OBD \u9488\u5bf9\u4e0d\u540c\u7684\u90e8\u7f72\u573a\u666f\u63d0\u4f9b\u4e86\u4e0d\u540c\u7684\u914d\u7f6e\u6587\u4ef6\u3002\u8fd9\u4e9b\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b\u653e\u5728\u76ee\u5f55 ",(0,l.jsx)(n.code,{children:"/usr/obd/example/"})," \u4e0b\u3002\u8bf7\u6839\u636e\u60a8\u7684\u8d44\u6e90\u6761\u4ef6\u9009\u62e9\u6b63\u786e\u7684\u914d\u7f6e\u6587\u4ef6\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"\u5c0f\u89c4\u683c\u5f00\u53d1\u6a21\u5f0f",children:"\u5c0f\u89c4\u683c\u5f00\u53d1\u6a21\u5f0f"}),"\n",(0,l.jsx)(n.p,{children:"\u9002\u7528\u4e8e\u4e2a\u4eba\u8bbe\u5907\uff08\u5185\u5b58\u4e0d\u4f4e\u4e8e 8G\uff09\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u672c\u5730\u5355\u8282\u70b9\u914d\u7f6e\u6837\u4f8b\uff1a/usr/obd/example/mini-local-example.yaml"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5355\u8282\u70b9\u914d\u7f6e\u6837\u4f8b\uff1a/usr/obd/example/mini-single-example.yaml"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4e09\u8282\u70b9\u914d\u7f6e\u6837\u4f8b\uff1a/usr/obd/example/mini-distributed-example.yaml"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5355\u8282\u70b9 + ODP \u914d\u7f6e\u6837\u4f8b\uff1a/usr/obd/example/mini-single-with-obproxy-example.yaml"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4e09\u8282\u70b9 + ODP \u914d\u7f6e\u6837\u4f8b\uff1a/usr/obd/example/mini-distributed-with-obproxy-example.yaml"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u4e13\u4e1a\u5f00\u53d1\u6a21\u5f0f",children:"\u4e13\u4e1a\u5f00\u53d1\u6a21\u5f0f"}),"\n",(0,l.jsx)(n.p,{children:"\u9002\u7528\u4e8e\u9ad8\u914d\u7f6e ECS \u6216\u7269\u7406\u670d\u52a1\u5668\uff08\u4e0d\u4f4e\u4e8e 16 \u6838 64G \u5185\u5b58\uff09\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u672c\u5730\u5355\u8282\u70b9\u914d\u7f6e\u6837\u4f8b\uff1a/usr/obd/example/local-example.yaml"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5355\u8282\u70b9\u914d\u7f6e\u6837\u4f8b\uff1a/usr/obd/example/single-example.yaml"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4e09\u8282\u70b9\u914d\u7f6e\u6837\u4f8b\uff1a/usr/obd/example/distributed-example.yaml"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5355\u8282\u70b9 + ODP \u914d\u7f6e\u6837\u4f8b\uff1a/usr/obd/example/single-with-obproxy-example.yaml"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4e09\u8282\u70b9 + ODP \u914d\u7f6e\u6837\u4f8b\uff1a/usr/obd/example/distributed-with-obproxy-example.yaml"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4e09\u8282\u70b9 + ODP + obagent \u914d\u7f6e\u6837\u4f8b\uff1a/usr/obd/example/obagent/distributed-with-obproxy-and-obagent-example.yaml"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u672c\u6587\u4ee5\u5c0f\u89c4\u683c\u5f00\u53d1\u6a21\u5f0f-\u672c\u5730\u5355\u8282\u70b9\uff08/usr/obd/example/mini-local-example.yaml\uff09\u4e3a\u4f8b\uff0c\u542f\u52a8\u4e00\u4e2a\u672c\u5730\u5355\u8282\u70b9\u7684 OceanBase \u6570\u636e\u5e93\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# \u4fee\u6539 OceanBase \u6570\u636e\u5e93\u7684\u5de5\u4f5c\u76ee\u5f55 home_path\u3002\n# \u4fee\u6539 OceanBase \u6570\u636e\u5e93 SQL \u670d\u52a1\u534f\u8bae\u7aef\u53e3\u53f7 mysql_port\u3002\u540e\u7eed\u5c06\u4f7f\u7528\u6b64\u7aef\u53e3\u8fde\u63a5\u6570\u636e\u5e93\u3002\n# \u4fee\u6539 OceanBase \u6570\u636e\u5e93\u96c6\u7fa4\u5185\u90e8\u901a\u4fe1\u7684\u7aef\u53e3\u53f7 rpc_port\u3002\nvi ./example/mini-local-example.yaml\n"})}),"\n",(0,l.jsxs)("main",{id:"notice",type:"notice",children:[(0,l.jsx)("h4",{children:"\u6ce8\u610f"}),(0,l.jsxs)("p",{children:["\u5982\u679c\u60a8\u7684\u76ee\u6807\u673a\u5668\uff08OceanBase \u6570\u636e\u5e93\u7a0b\u5e8f\u8fd0\u884c\u7684\u673a\u5668\uff09\u4e0d\u662f\u5f53\u524d\u673a\u5668\uff0c\u8bf7\u4e0d\u8981\u4f7f\u7528 ",(0,l.jsx)("code",{children:"\u672c\u5730\u5355\u8282\u70b9\u914d\u7f6e\u6837\u4f8b"}),"\uff0c\u6539\u7528\u5176\u4ed6\u6837\u4f8b\u3002 \u540c\u65f6\u60a8\u8fd8\u9700\u8981\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\u9876\u90e8\u7684\u7528\u6237\u5bc6\u7801\u4fe1\u606f\u3002"]})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"user:\nusername: <\u60a8\u7684\u8d26\u53f7\u540d>\npassword: <\u60a8\u7684\u767b\u5f55\u5bc6\u7801>\nkey_file: <\u60a8\u7684\u79c1\u94a5\u8def\u5f84>\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"username"})," \u4e3a\u767b\u5f55\u5230\u76ee\u6807\u673a\u5668\u7684\u7528\u6237\u540d\uff0c\u786e\u4fdd\u60a8\u7684\u7528\u6237\u540d\u6709 ",(0,l.jsx)(n.code,{children:"home_path"})," \u7684\u5199\u6743\u9650\u3002",(0,l.jsx)(n.code,{children:"password"})," \u548c ",(0,l.jsx)(n.code,{children:"key_file"})," \u5747\u7528\u4e8e\u9a8c\u8bc1\u7528\u6237\uff0c\u901a\u5e38\u60c5\u51b5\u4e0b\u53ea\u9700\u8981\u586b\u5199\u4e00\u4e2a\u3002"]}),"\n",(0,l.jsxs)("main",{id:"notice",type:"notice",children:[(0,l.jsx)("h4",{children:"\u6ce8\u610f"}),(0,l.jsxs)("p",{children:["\u5728\u914d\u7f6e\u79d8\u94a5\u8def\u5f84\u540e\uff0c\u5982\u679c\u60a8\u7684\u79d8\u94a5\u4e0d\u9700\u8981\u53e3\u4ee4\uff0c\u8bf7\u6ce8\u91ca\u6216\u8005\u5220\u9664 ",(0,l.jsx)("code",{children:"password"}),"\uff0c\u4ee5\u514d ",(0,l.jsx)("code",{children:"password"})," \u88ab\u89c6\u4e3a\u79d8\u94a5\u53e3\u4ee4\u7528\u4e8e\u767b\u5f55\uff0c\u5bfc\u81f4\u6821\u9a8c\u5931\u8d25\u3002"]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u90e8\u7f72\u548c\u542f\u52a8\u6570\u636e\u5e93",children:"\u90e8\u7f72\u548c\u542f\u52a8\u6570\u636e\u5e93"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"obd cluster deploy lo -c mini-local-example.yaml\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u6b64\u547d\u4ee4\u4f1a\u68c0\u67e5 home_path \u548c data_dir \u6307\u5411\u7684\u76ee\u5f55\u662f\u5426\u4e3a\u7a7a\u3002\u82e5\u76ee\u5f55\u4e0d\u4e3a\u7a7a\uff0c\u5219\u62a5\u9519\u3002\u6b64\u65f6\u53ef\u4ee5\u52a0\u4e0a ",(0,l.jsx)(n.code,{children:"-f"})," \u9009\u9879\uff0c\u5f3a\u5236\u6e05\u7a7a\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"obd cluster start lo\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u6b64\u547d\u4ee4\u4f1a\u68c0\u67e5\u7cfb\u7edf\u53c2\u6570 ",(0,l.jsx)(n.code,{children:"fs.aio-max-nr"})," \u662f\u5426\u4e0d\u5c0f\u4e8e ",(0,l.jsx)(n.code,{children:"1048576"}),"\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\u4e00\u53f0\u673a\u5668\u542f\u52a8\u4e00\u4e2a\u8282\u70b9\u4e0d\u9700\u8981\u4fee\u6539 ",(0,l.jsx)(n.code,{children:"fs.aio-max-nr"}),"\u3002\u4f46\u5f53\u4e00\u53f0\u673a\u5668\u9700\u8981\u542f\u52a8 4 \u4e2a\u53ca\u4ee5\u4e0a\u7684\u8282\u70b9\u65f6\uff0c\u8bf7\u52a1\u5fc5\u4fee\u6539 ",(0,l.jsx)(n.code,{children:"fs.aio-max-nr"}),"\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u67e5\u770b\u96c6\u7fa4\u72b6\u6001",children:"\u67e5\u770b\u96c6\u7fa4\u72b6\u6001"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"# \u53c2\u770b OBD \u7ba1\u7406\u7684\u96c6\u7fa4\u5217\u8868\nobd cluster list\n# \u67e5\u770b lo \u96c6\u7fa4\u72b6\u6001\nobd cluster display lo\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u4fee\u6539\u914d\u7f6e",children:"\u4fee\u6539\u914d\u7f6e"}),"\n",(0,l.jsx)(n.p,{children:"OceanBase \u6570\u636e\u5e93\u6709\u6570\u767e\u4e2a\u914d\u7f6e\u9879\uff0c\u6709\u4e9b\u914d\u7f6e\u662f\u8026\u5408\u7684\uff0c\u5728\u60a8\u719f\u6089 OceanBase \u6570\u636e\u5e93\u4e4b\u524d\uff0c\u4e0d\u5efa\u8bae\u60a8\u4fee\u6539\u793a\u4f8b\u914d\u4ef6\u6587\u4ef6\u4e2d\u7684\u914d\u7f6e\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u6b64\u5904\u793a\u4f8b\u7528\u6765\u8bf4\u660e\u5982\u4f55\u4fee\u6539\u914d\u7f6e\uff0c\u5e76\u4f7f\u4e4b\u751f\u6548\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"# \u4f7f\u7528 edit-config \u547d\u4ee4\u8fdb\u5165\u7f16\u8f91\u6a21\u5f0f\uff0c\u4fee\u6539\u96c6\u7fa4\u914d\u7f6e\nobd cluster edit-config lo\n# \u4fee\u6539 sys_bkgd_migration_retry_num \u4e3a 5\n# \u6ce8\u610f sys_bkgd_migration_retry_num \u503c\u6700\u5c0f\u4e3a 3\n# \u4fdd\u5b58\u5e76\u9000\u51fa\u540e\uff0cOBD \u4f1a\u544a\u77e5\u60a8\u5982\u4f55\u4f7f\u5f97\u6b64\u6b21\u6539\u52a8\u751f\u6548\n# \u6b64\u914d\u7f6e\u9879\u4ec5\u9700\u8981 reload \u5373\u53ef\u751f\u6548\nobd cluster reload lo\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u505c\u6b62\u96c6\u7fa4",children:"\u505c\u6b62\u96c6\u7fa4"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"stop"})," \u547d\u4ee4\u7528\u4e8e\u505c\u6b62\u4e00\u4e2a\u8fd0\u884c\u4e2d\u7684\u96c6\u7fa4\u3002\u5982\u679c ",(0,l.jsx)(n.code,{children:"start"})," \u547d\u4ee4\u6267\u884c\u5931\u8d25\uff0c\u6709\u8fdb\u7a0b\u6ca1\u6709\u9000\u51fa\uff0c\u8bf7\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"destroy"})," \u547d\u4ee4\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"obd cluster stop lo\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u9500\u6bc1\u96c6\u7fa4",children:"\u9500\u6bc1\u96c6\u7fa4"}),"\n",(0,l.jsx)(n.p,{children:"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u9500\u6bc1\u96c6\u7fa4\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"obd cluster destroy lo\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u542f\u52a8\u96c6\u7fa4\u65f6\u5931\u8d25\uff0c\u53ef\u4ee5\u80fd\u4f1a\u6709\u4e00\u4e9b\u8fdb\u7a0b\u505c\u7559\uff0c\u6b64\u65f6\u53ef\u7528 ",(0,l.jsx)(n.code,{children:"-f"})," \u9009\u9879\u5f3a\u5236\u505c\u6b62\u5e76\u9500\u6bc1\u96c6\u7fa4\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(t,{...e})}):t(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var l=s(6540);const d={},i=l.createContext(d);function r(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);