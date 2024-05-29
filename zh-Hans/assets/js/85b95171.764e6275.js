"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[279],{7838:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=s(4848),r=s(8453);const o={},c="FAQ",a={id:"ob-operator/appendix/FAQ",title:"FAQ",description:"1. \u5982\u4f55\u67e5\u770b\u8d44\u6e90\u5df2\u7ecf ready",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/ob-operator/900.appendix/200.FAQ.md",sourceDirName:"ob-operator/900.appendix",slug:"/ob-operator/appendix/FAQ",permalink:"/docs-playground/zh-Hans/docs/ob-operator/appendix/FAQ",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ob-operator/900.appendix/200.FAQ.md",tags:[],version:"current",sidebarPosition:200,frontMatter:{}},d={},l=[{value:"1. \u5982\u4f55\u67e5\u770b\u8d44\u6e90\u5df2\u7ecf ready",id:"1-\u5982\u4f55\u67e5\u770b\u8d44\u6e90\u5df2\u7ecf-ready",level:2},{value:"2. \u5982\u4f55\u67e5\u770b\u8d44\u6e90\u7684\u8fd0\u7ef4\u72b6\u6001",id:"2-\u5982\u4f55\u67e5\u770b\u8d44\u6e90\u7684\u8fd0\u7ef4\u72b6\u6001",level:2},{value:"3. ob-operator \u5982\u4f55\u6392\u67e5\u95ee\u9898",id:"3-ob-operator-\u5982\u4f55\u6392\u67e5\u95ee\u9898",level:2},{value:"4. ob-operator \u5982\u4f55\u4fee\u590d\u201c\u5361\u6b7b\u201d\u7684\u8d44\u6e90",id:"4-ob-operator-\u5982\u4f55\u4fee\u590d\u5361\u6b7b\u7684\u8d44\u6e90",level:2},{value:"\u91cd\u7f6e",id:"\u91cd\u7f6e",level:3},{value:"\u5220\u9664",id:"\u5220\u9664",level:3},{value:"\u91cd\u8bd5",id:"\u91cd\u8bd5",level:3},{value:"\u8df3\u8fc7",id:"\u8df3\u8fc7",level:3}];function i(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"faq",children:"FAQ"}),"\n",(0,t.jsx)(n.h2,{id:"1-\u5982\u4f55\u67e5\u770b\u8d44\u6e90\u5df2\u7ecf-ready",children:"1. \u5982\u4f55\u67e5\u770b\u8d44\u6e90\u5df2\u7ecf ready"}),"\n",(0,t.jsx)(n.p,{children:"\u4ee5\u96c6\u7fa4\u4e3a\u4f8b\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u6765\u67e5\u770b\u8d44\u6e90\u72b6\u6001\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl get obclusters.oceanbase.oceanbase.com test -n oceanbase \n"})}),"\n",(0,t.jsx)(n.p,{children:"\u786e\u8ba4 status \u72b6\u6001\uff0c\u4e3a running \u5219\u8868\u793a\u8d44\u6e90\u53ef\u7528\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# desired output \nNAME   STATUS    AGE\ntest   running   6m2s\n"})}),"\n",(0,t.jsx)(n.h2,{id:"2-\u5982\u4f55\u67e5\u770b\u8d44\u6e90\u7684\u8fd0\u7ef4\u72b6\u6001",children:"2. \u5982\u4f55\u67e5\u770b\u8d44\u6e90\u7684\u8fd0\u7ef4\u72b6\u6001"}),"\n",(0,t.jsx)(n.p,{children:"\u4ee5\u96c6\u7fa4\u4e3a\u4f8b\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u6765\u67e5\u770b\u8d44\u6e90\u72b6\u6001\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl get obclusters.oceanbase.oceanbase.com test -n oceanbase -o yaml\n"})}),"\n",(0,t.jsx)(n.p,{children:"operationContext \u4e2d\u8bb0\u5f55\u4e86\u8fd0\u7ef4\u7684\u72b6\u6001\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u89c2\u5bdf\u8fd9\u4e2a\u5b57\u6bb5\u4e86\u89e3\u8fd0\u7ef4\u7684\u72b6\u6001\u548c\u8fdb\u5ea6\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"status:\n  image: oceanbase/oceanbase-cloud-native:4.2.0.0-101000032023091319\n  obzones:\n  - status: delete observer\n    zone: obcluster-1-zone1\n  - status: delete observer\n    zone: obcluster-1-zone2\n  - status: delete observer\n    zone: obcluster-1-zone3\n  operationContext:\n    failureRule:\n      failureStatus: running\n      failureStrategy: retry over\n      retryCount: 0\n    idx: 2\n    name: modify obzone replica\n    targetStatus: running\n    task: wait obzone topology match\n    taskId: c04aeb28-01e7-4f85-b390-8d855b9f30e3\n    taskStatus: running\n    tasks:\n    - modify obzone replica\n    - wait obzone topology match\n    - wait obzone running\n  parameters: []\n  status: modify obzone replica\n"})}),"\n",(0,t.jsx)(n.h2,{id:"3-ob-operator-\u5982\u4f55\u6392\u67e5\u95ee\u9898",children:"3. ob-operator \u5982\u4f55\u6392\u67e5\u95ee\u9898"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"ob-operator \u7684\u65e5\u5fd7\u6587\u4ef6, \u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u6765\u67e5\u770b\uff0c\u4e00\u822c\u90fd\u662f\u5148\u5206\u6790 operator \u7684\u65e5\u5fd7\u6765\u627e\u5230\u5177\u4f53\u54ea\u91cc\u51fa\u73b0\u4e86\u9519\u8bef\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl logs oceanbase-controller-manager-86cfc8f7bf-js95z -n oceanbase-system -c manager  | less\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"observer \u7684\u65e5\u5fd7\u6587\u4ef6"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# \u767b\u5f55\u5230 observer \u7684\u5bb9\u5668\nkubectl exec -it obcluster-1-zone1-8ab645f4d0f9 -n oceanbase -c observer -- bash\n\n# \u65e5\u5fd7\u6587\u4ef6\u6240\u5728\u76ee\u5f55\ncd /home/admin/oceanbase/log\n"})}),"\n",(0,t.jsx)(n.h2,{id:"4-ob-operator-\u5982\u4f55\u4fee\u590d\u5361\u6b7b\u7684\u8d44\u6e90",children:"4. ob-operator \u5982\u4f55\u4fee\u590d\u201c\u5361\u6b7b\u201d\u7684\u8d44\u6e90"}),"\n",(0,t.jsxs)(n.p,{children:["\u56e0\u4e3a ob-operator \u91c7\u7528\u57fa\u4e8e\u72b6\u6001\u673a\u548c\u4efb\u52a1\u6d41\u7684\u673a\u5236\u6765\u7ba1\u7406 CR (Custom Resource\uff0c\u81ea\u5b9a\u4e49\u8d44\u6e90)\u53ca\u5176\u8fd0\u7ef4\u64cd\u4f5c\uff0c\u5728\u914d\u7f6e\u51fa\u9519\u3001\u7cfb\u7edf\u8d44\u6e90\u4e0d\u8db3\u6216\u8005\u8d44\u6e90\u4e0d\u5339\u914d\u65f6\uff0cCR \u6709\u53ef\u80fd\u4f1a\u9677\u5165\u9884\u671f\u4e4b\u5916\u7684\u72b6\u6001\uff0c\u4f8b\u5982\uff1a\u4e0d\u65ad\u91cd\u8bd5\u4e00\u4e2a\u5fc5\u5b9a\u5931\u8d25\u7684\u4efb\u52a1\u6d41\u3001\u65e0\u6cd5\u5220\u9664\u4e00\u4e2a\u8d44\u6e90\u3001\u8bef\u5220\u8d44\u6e90\u4f46\u5e0c\u671b\u8d44\u6e90\u6062\u590d\u8fd0\u8f6c\u7b49\u3002\u5f53\u901a\u8fc7\u5e38\u89c4\u7684 kubectl \u64cd\u4f5c\u65e0\u6cd5\u5c06\u67d0\u4e00 CR \u6062\u590d\u6b63\u5e38\u65f6\uff0c\u53ef\u4ee5\u501f\u52a9 ",(0,t.jsx)(n.code,{children:"OBResourceRescue"})," \u8d44\u6e90\u5bf9\u95ee\u9898 CR \u8fdb\u884c\u6551\u6cbb\u3002",(0,t.jsx)(n.code,{children:"OBResourceRescue"})," \u8d44\u6e90\u5305\u542b\u4e86\u56db\u7c7b\u64cd\u4f5c\uff1a",(0,t.jsx)(n.code,{children:"\u91cd\u7f6e"}),"\u3001",(0,t.jsx)(n.code,{children:"\u5220\u9664"}),"\u3001",(0,t.jsx)(n.code,{children:"\u91cd\u8bd5"}),"\u3001",(0,t.jsx)(n.code,{children:"\u8df3\u8fc7"}),"\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4e00\u4e2a\u5178\u578b\u7684 ",(0,t.jsx)(n.code,{children:"OBResourceRescue"})," CR \u914d\u7f6e\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: oceanbase.oceanbase.com/v1alpha1\nkind: OBResourceRescue\nmetadata:\n  generateName: rescue-reset- # generateName \u9700\u642d\u914d kubectl create -f \u4f7f\u7528\nspec:\n  type: reset\n  targetKind: OBCluster\n  targetResName: test\n  targetStatus: running # type \u4e3a reset \u65f6\u9700\u8981\u586b\u5199\u76ee\u6807\u72b6\u6001\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5176\u4e2d\u5173\u952e\u914d\u7f6e\u5982\u4e0b\u8868\u8bf4\u660e:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u914d\u7f6e\u9879"}),(0,t.jsx)(n.th,{children:"\u53ef\u9009\u9879"}),(0,t.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"type"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"reset"}),", ",(0,t.jsx)(n.code,{children:"delete"}),", ",(0,t.jsx)(n.code,{children:"retry"}),", ",(0,t.jsx)(n.code,{children:"skip"})]}),(0,t.jsx)(n.td,{children:"\u8d44\u6e90\u6551\u6cbb\u52a8\u4f5c\u7684\u7c7b\u578b"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"targetKind"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"OBCluster"}),", ",(0,t.jsx)(n.code,{children:"OBZone"}),", ",(0,t.jsx)(n.code,{children:"OBTenant"})," \u7b49\u53d7 ob-operator \u7ba1\u7406\u7684 CRD Kind"]}),(0,t.jsx)(n.td,{children:"\u9700\u8981\u8fdb\u884c\u6551\u6cbb\u7684\u8d44\u6e90 Kind"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"targetResName"}),(0,t.jsx)(n.td,{children:"/"}),(0,t.jsx)(n.td,{children:"\u5f85\u6551\u6cbb\u7684\u8d44\u6e90\u540d\u79f0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"targetStatus"}),(0,t.jsx)(n.td,{children:"/"}),(0,t.jsx)(n.td,{children:"type \u4e3a reset \u9700\u8981\u586b\u5199\u8be5\u5b57\u6bb5\uff0c\u8868\u793a\u8d44\u6e90\u91cd\u7f6e\u540e\u7684\u72b6\u6001"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"\u91cd\u7f6e",children:"\u91cd\u7f6e"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e0a\u8ff0\u5178\u578b CR \u914d\u7f6e\u793a\u4f8b\u7684\u914d\u7f6e\u4fe1\u606f\u5c31\u662f\u91cd\u7f6e\u7c7b\u578b\u7684\u6551\u6cbb\u8d44\u6e90\uff0c\u5c06\u8be5\u8d44\u6e90\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"kubectl create -f"})," \u547d\u4ee4\u521b\u5efa\u5230 K8s \u96c6\u7fa4\u4e2d\u540e\uff0c\u4f1a\u5c06 Kind \u4e3a OBCluster\uff0c\u540d\u4e3a test \u7684\u8d44\u6e90\u7684 ",(0,t.jsx)(n.code,{children:"status.status"})," \u8bbe\u7f6e\u4e3a ",(0,t.jsx)(n.code,{children:"running"}),"\uff08\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u8bbe\u7f6e\u7684 targetStatus\uff09\uff0c\u5c06\u8be5\u8d44\u6e90\u7684 ",(0,t.jsx)(n.code,{children:"status.operationContext"})," \u7f6e\u4e3a\u7a7a\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u5220\u9664",children:"\u5220\u9664"}),"\n",(0,t.jsxs)(n.p,{children:["\u5220\u9664\u7c7b\u578b\u7684\u6551\u6cbb\u52a8\u4f5c\u914d\u7f6e\u793a\u4f8b\u5982\u4e0b\uff0c\u5b83\u521b\u5efa\u5230\u96c6\u7fa4\u4e2d\u540e\uff0cob-operator \u4f1a\u5c06\u76ee\u6807\u8d44\u6e90\u7684 ",(0,t.jsx)(n.code,{children:"finalizers"})," \u5b57\u6bb5\u6e05\u7a7a\uff0c\u5e76\u5c06\u8be5\u8d44\u6e90\u7684 ",(0,t.jsx)(n.code,{children:"deletionTimestamp"})," \u8bbe\u7f6e\u4e3a\u5f53\u524d\u65f6\u523b\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"# ...\nspec:\n  type: delete\n  targetKind: OBCluster\n  targetResName: test\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u91cd\u8bd5",children:"\u91cd\u8bd5"}),"\n",(0,t.jsxs)(n.p,{children:["\u91cd\u8bd5\u7c7b\u578b\u7684\u6551\u6cbb\u52a8\u4f5c\u914d\u7f6e\u793a\u4f8b\u5982\u4e0b\uff0c\u5b83\u521b\u5efa\u5230\u96c6\u7fa4\u4e2d\u540e\uff0cob-operator \u4f1a\u5c06\u76ee\u6807\u8d44\u6e90\u7684 ",(0,t.jsx)(n.code,{children:"status.operationContext.retryCount"})," \u7f6e\u4e3a 0\uff0c\u5e76\u4e14\u5c06 ",(0,t.jsx)(n.code,{children:"status.operationContext.taskStatus"})," \u7f6e\u4e3a ",(0,t.jsx)(n.code,{children:"pending"}),"\u3002\u5904\u5728\u8be5\u72b6\u6001\u7684\u8d44\u6e90\u5c06\u91cd\u8bd5\u5f53\u524d\u4efb\u52a1\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"# ...\nspec:\n  type: retry\n  targetKind: OBCluster\n  targetResName: test\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u8df3\u8fc7",children:"\u8df3\u8fc7"}),"\n",(0,t.jsxs)(n.p,{children:["\u8df3\u8fc7\u7c7b\u578b\u7684\u6551\u6cbb\u52a8\u4f5c\u914d\u7f6e\u793a\u4f8b\u5982\u4e0b\uff0c\u88ab\u521b\u5efa\u5230\u96c6\u7fa4\u5f53\u4e2d\u540e\uff0cob-operator \u4f1a\u628a\u76ee\u6807\u8d44\u6e90\u7684 ",(0,t.jsx)(n.code,{children:"status.operationContext.taskStatus"})," \u76f4\u63a5\u7f6e\u4e3a ",(0,t.jsx)(n.code,{children:"successful"}),"\uff0c\u4efb\u52a1\u7ba1\u7406\u5668\u5f97\u5230\u8fd9\u4e2a\u6d88\u606f\u540e\u4f1a\u6267\u884c ",(0,t.jsx)(n.code,{children:"tasks"})," \u4e2d\u7684\u4e0b\u4e00\u4e2a\u4efb\u52a1\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"# ...\nspec:\n  type: skip\n  targetKind: OBCluster\n  targetResName: test\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>a});var t=s(6540);const r={},o=t.createContext(r);function c(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);