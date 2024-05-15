"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[5990],{1387:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var r=o(4848),t=o(8453);const s={},a="\u5728\u96c6\u7fa4\u4e2d\u51cf\u5c11 Zone",c={id:"ob-operator/ob-operator-user-guide/cluster-management-of-ob-operator/zone-management/delete-zone",title:"\u5728\u96c6\u7fa4\u4e2d\u51cf\u5c11 Zone",description:"\u672c\u8282\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u5728\u96c6\u7fa4\u4e2d\u51cf\u5c11 Zone\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/ob-operator/500.ob-operator-user-guide/100.cluster-management-of-ob-operator/300.zone-management/200.delete-zone.md",sourceDirName:"ob-operator/500.ob-operator-user-guide/100.cluster-management-of-ob-operator/300.zone-management",slug:"/ob-operator/ob-operator-user-guide/cluster-management-of-ob-operator/zone-management/delete-zone",permalink:"/docs-playground/zh-Hans/docs/ob-operator/ob-operator-user-guide/cluster-management-of-ob-operator/zone-management/delete-zone",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ob-operator/500.ob-operator-user-guide/100.cluster-management-of-ob-operator/300.zone-management/200.delete-zone.md",tags:[],version:"current",sidebarPosition:200,frontMatter:{}},l={},i=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u64cd\u4f5c\u6b65\u9aa4",id:"\u64cd\u4f5c\u6b65\u9aa4",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u5728\u96c6\u7fa4\u4e2d\u51cf\u5c11-zone",children:"\u5728\u96c6\u7fa4\u4e2d\u51cf\u5c11 Zone"}),"\n",(0,r.jsx)(n.p,{children:"\u672c\u8282\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u5728\u96c6\u7fa4\u4e2d\u51cf\u5c11 Zone\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u4e3a\u96c6\u7fa4\u51cf\u5c11 Zone \u4e4b\u524d\uff0c\u60a8\u9700\u8981\u786e\u4fdd\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"OceanBase \u96c6\u7fa4\u76ee\u524d\u5904\u4e8e running \u72b6\u6001\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u51cf\u5c11 zone \u540e\u4ecd\u9700\u8981\u6ee1\u8db3\u591a\u6570\u6d3e\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u64cd\u4f5c\u6b65\u9aa4",children:"\u64cd\u4f5c\u6b65\u9aa4"}),"\n",(0,r.jsx)(n.p,{children:"\u5047\u8bbe\u5f53\u524d\u96c6\u7fa4\u4e2d\u5171\u5305\u542b 5 \u4e2a\u53ef\u7528\u533a zone1\u3001zone2\u3001zone3\u3001zone4 \u548c zone5\u3002\u6bcf\u4e2a Zone \u5185\u5305\u542b 1 \u4e2a OBServer \u8282\u70b9\u3002\u73b0\u5728\u5e0c\u671b\u5c06 5 \u4e2a\u53ef\u7528\u533a\u51cf\u5c11\u4e3a 3 \u4e2a\u53ef\u7528\u533a\u3002"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u4fee\u6539\u914d\u7f6e\u6587\u4ef6 ",(0,r.jsx)(n.code,{children:"obcluster.yaml"}),"\u3002\u5b8c\u6574\u914d\u7f6e\u6587\u4ef6\u8bf7\u53c2\u8003 ",(0,r.jsx)(n.a,{href:"/docs-playground/zh-Hans/docs/ob-operator/ob-operator-user-guide/cluster-management-of-ob-operator/create-cluster",children:"\u521b\u5efa OceanBase \u96c6\u7fa4"}),"\uff0c\u5728 spec.topology \u5185\u51cf\u5c11 zone4 \u548c zone5\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"# \u793a\u4f8b: OB \u96c6\u7fa4\u4e2d\u6709 5 \u4e2a zone\ntopology:\n    - zone: zone1\n    replica: 1\n    - zone: zone2\n    replica: 1\n    - zone: zone3\n    replica: 1\n    - zone: zone4\n    replica: 1\n    - zone: zone5\n    replica: 1\n\n# \u5728\u96c6\u7fa4\u4e2d\u51cf\u5c0f zone(zone4, zone5), \u4ec5\u5269 3 \u4e2a zone\ntopology:\n    - zone: zone1\n    replica: 1\n    - zone: zone2\n    replica: 1\n    - zone: zone3\n    replica: 1\n        \n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u914d\u7f6e\u6587\u4ef6\u4fee\u6539\u540e\uff0c\u9700\u8fd0\u884c\u5982\u4e0b\u547d\u4ee4\u4f7f\u6539\u52a8\u751f\u6548\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"kubectl apply -f obcluster.yaml\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u89c2\u5bdf OceanBase \u96c6\u7fa4 CR \u7684\u72b6\u6001\u7b49\u5f85\u64cd\u4f5c\u6210\u529f\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\uff0c\u53ef\u4ee5\u83b7\u53d6 OceanBase \u96c6\u7fa4\u8d44\u6e90\u7684\u72b6\u6001\uff0c\u5f53\u96c6\u7fa4\u72b6\u6001\u548c 3 \u4e2a zone \u7684\u72b6\u6001\u5747\u4e3a running \u65f6\uff0c\u5219\u64cd\u4f5c\u6210\u529f\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"kubectl get obclusters.oceanbase.oceanbase.com test -n oceanbase -o yaml\n\n# desired output, only displays status here\nstatus:\n  image: oceanbase/oceanbase-cloud-native:4.2.0.0-101000032023091319\n  obzones:\n  - status: running\n    zone: obcluster-1-zone1\n  - status: running\n    zone: obcluster-1-zone2\n  - status: running\n    zone: obcluster-1-zone3\n  parameters: []\n  status: running\n"})})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>c});var r=o(6540);const t={},s=r.createContext(t);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);