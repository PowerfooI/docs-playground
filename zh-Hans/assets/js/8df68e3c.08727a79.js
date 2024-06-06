"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[2856],{72154:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>x,frontMatter:()=>l,metadata:()=>c,toc:()=>t});var s=r(74848),i=r(28453);const l={title:"OceanBase\u5982\u4f55\u5b9e\u73b0\u8bfb\u5199\u5206\u79bb",weight:15},o="OceanBase\u5982\u4f55\u5b9e\u73b0\u8bfb\u5199\u5206\u79bb",c={id:"operation_maintenance/how_to_split_read_write",title:"OceanBase\u5982\u4f55\u5b9e\u73b0\u8bfb\u5199\u5206\u79bb",description:"\u5728\u6211\u4eec\u5b9e\u9645\u4e1a\u52a1\u573a\u666f\u4e2d\uff0c\u7ecf\u5e38\u4f1a\u9047\u5230\u4e00\u7c7b\u4e1a\u52a1\u573a\u666f\uff0c\u65e2\u6709OLTP\u7c7b\u7684\u5728\u7ebf\u4e1a\u52a1\uff0c\u53c8\u6709OLAP\u7c7b\u7684\u5206\u6790\u4e1a\u52a1\uff0c\u4e24\u79cd\u7c7b\u578b\u7684\u4e1a\u52a1\u540c\u65f6\u8dd1\u5728\u4e00\u5957\u6570\u636e\u5e93\u96c6\u7fa4\u4e0a\uff0c\u8fd9\u5bf9\u6570\u636e\u5e93\u7684\u914d\u7f6e\u7b49\u8981\u6c42\u5c31\u76f8\u5bf9\u8f83\u9ad8\uff0c\u56e0\u6b64\u6211\u4eec\u4e00\u822c\u4f1a\u91c7\u7528\u8bfb\u5199\u5206\u79bb\u7684\u65b9\u5f0f\uff0c\u5c06\u4e00\u90e8\u5206\u7684\u8bfb\u8bf7\u6c42\uff0c\u8def\u7531\u5230 Follower \u526f\u672c\u4e0a\uff0c\u4ece\u800c\u964d\u4f4e\u590d\u6742\u5206\u6790\u8ba1\u7b97\u5bf9\u8d44\u6e90\u7684\u4fb5\u5360\uff0c\u5f71\u54cd\u5728\u7ebf\u4e1a\u52a1\u7684\u54cd\u5e94\u5ef6\u8fdf\u3002",source:"@site/docs/operation_maintenance/how_to_split_read_write.md",sourceDirName:"operation_maintenance",slug:"/operation_maintenance/how_to_split_read_write",permalink:"/docs-playground/zh-Hans/docs/operation_maintenance/how_to_split_read_write",draft:!1,unlisted:!1,editUrl:"https://github.com/powerfooi/docs-playground/tree/main/docs/operation_maintenance/how_to_split_read_write.md",tags:[],version:"current",frontMatter:{title:"OceanBase\u5982\u4f55\u5b9e\u73b0\u8bfb\u5199\u5206\u79bb",weight:15}},d={},t=[{value:"<strong>OBProxy\u8def\u7531\u7b56\u7565</strong>",id:"obproxy\u8def\u7531\u7b56\u7565",level:2},{value:"<strong>Primary Zone \u8def\u7531</strong>",id:"primary-zone-\u8def\u7531",level:3},{value:"<strong>LDC \u8def\u7531</strong>",id:"ldc-\u8def\u7531",level:3},{value:"<strong>\u968f\u673a\u8def\u7531</strong>",id:"\u968f\u673a\u8def\u7531",level:3},{value:"<strong>\u8bfb\u5199\u5206\u79bb\u914d\u7f6e</strong>",id:"\u8bfb\u5199\u5206\u79bb\u914d\u7f6e",level:2},{value:"<strong>\u5f31\u4e00\u81f4\u6027\u8bfb\u8bbe\u7f6e</strong>",id:"\u5f31\u4e00\u81f4\u6027\u8bfb\u8bbe\u7f6e",level:3},{value:"<strong>LDC\u8bbe\u7f6e</strong>",id:"ldc\u8bbe\u7f6e",level:3},{value:"<strong>FOLLOWER_FIRST\u8bbe\u7f6e</strong>",id:"follower_first\u8bbe\u7f6e",level:3},{value:"<strong>\u8bfb\u5199\u5206\u79bb\u6848\u4f8b</strong>",id:"\u8bfb\u5199\u5206\u79bb\u6848\u4f8b",level:2},{value:"<strong>\u6848\u4f8b\u4e00\uff1a\u672c\u5730\u5907\u4f18\u5148\u8bfb</strong>",id:"\u6848\u4f8b\u4e00\u672c\u5730\u5907\u4f18\u5148\u8bfb",level:3},{value:"<strong>\u6848\u4f8b\u4e8c\uff1a\u53ea\u8bfbzone</strong>",id:"\u6848\u4f8b\u4e8c\u53ea\u8bfbzone",level:3},{value:"<strong>\u65b9\u6848\u4e09\uff1a\u53ea\u8bfb\u526f\u672c</strong>",id:"\u65b9\u6848\u4e09\u53ea\u8bfb\u526f\u672c",level:3},{value:"<strong>\u5927\u67e5\u8be2\u7b56\u7565</strong>",id:"\u5927\u67e5\u8be2\u7b56\u7565",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"oceanbase\u5982\u4f55\u5b9e\u73b0\u8bfb\u5199\u5206\u79bb",children:(0,s.jsx)(n.strong,{children:"OceanBase\u5982\u4f55\u5b9e\u73b0\u8bfb\u5199\u5206\u79bb"})}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u6211\u4eec\u5b9e\u9645\u4e1a\u52a1\u573a\u666f\u4e2d\uff0c\u7ecf\u5e38\u4f1a\u9047\u5230\u4e00\u7c7b\u4e1a\u52a1\u573a\u666f\uff0c\u65e2\u6709OLTP\u7c7b\u7684\u5728\u7ebf\u4e1a\u52a1\uff0c\u53c8\u6709OLAP\u7c7b\u7684\u5206\u6790\u4e1a\u52a1\uff0c\u4e24\u79cd\u7c7b\u578b\u7684\u4e1a\u52a1\u540c\u65f6\u8dd1\u5728\u4e00\u5957\u6570\u636e\u5e93\u96c6\u7fa4\u4e0a\uff0c\u8fd9\u5bf9\u6570\u636e\u5e93\u7684\u914d\u7f6e\u7b49\u8981\u6c42\u5c31\u76f8\u5bf9\u8f83\u9ad8\uff0c\u56e0\u6b64\u6211\u4eec\u4e00\u822c\u4f1a\u91c7\u7528\u8bfb\u5199\u5206\u79bb\u7684\u65b9\u5f0f\uff0c\u5c06\u4e00\u90e8\u5206\u7684\u8bfb\u8bf7\u6c42\uff0c\u8def\u7531\u5230 Follower \u526f\u672c\u4e0a\uff0c\u4ece\u800c\u964d\u4f4e\u590d\u6742\u5206\u6790\u8ba1\u7b97\u5bf9\u8d44\u6e90\u7684\u4fb5\u5360\uff0c\u5f71\u54cd\u5728\u7ebf\u4e1a\u52a1\u7684\u54cd\u5e94\u5ef6\u8fdf\u3002\nOceanBase\u6570\u636e\u5e93\u4e5f\u63d0\u4f9b\u4e86\u8bfb\u5199\u5206\u79bb\u7684\u80fd\u529b\uff0c\u901a\u8fc7\u591a\u79cd\u914d\u7f6e\u65b9\u5f0f\u53ef\u4ee5\u8f7b\u677e\u5b9e\u73b0\uff0c\u5728\u914d\u7f6e\u4e4b\u524d\uff0c\u5148\u7b80\u5355\u4ecb\u7ecd\u4e0bOceanBase\u7684\u67b6\u6784\u548c\u8def\u7531\u7b56\u7565"}),"\n",(0,s.jsx)(n.h2,{id:"obproxy\u8def\u7531\u7b56\u7565",children:(0,s.jsx)(n.strong,{children:"OBProxy\u8def\u7531\u7b56\u7565"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u90e8\u7f72OceanBase\u96c6\u7fa4\u65f6\uff0c\u9700\u8981\u90e8\u7f72\u4e00\u4e2aOBProxy\u6765\u505a\u8bf7\u6c42\u7684\u8def\u7531\u8f6c\u53d1\uff0c\u5982\u4e0b\u56fe\uff0c\u6240\u6709\u4e1a\u52a1\u7684\u8bf7\u6c42\uff0c\u7ecf\u8fc7OBProxy\u8f6c\u53d1\u4e4b\u540e\uff0c\u4f1a\u81ea\u52a8\u8bbf\u95ee\u5230\u6570\u636e\u7684 Leader \u526f\u672c\u4e0a\u3002\n",(0,s.jsx)(n.img,{alt:"image.png",src:r(53493).A+"",width:"1628",height:"1202"}),"\n\u8fd9\u91cc\u7684OBProxy\u8def\u7531\u7b56\u7565\u5176\u5b9e\u9075\u5faa\u4ee5\u4e0b\u4e09\u4e2a\u7b56\u7565\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Primary Zone \u8def\u7531\uff1a\u7b2c\u4e00\u4f18\u5148\u7ea7"}),"\n",(0,s.jsx)(n.li,{children:"LDC \u8def\u7531\uff1a\u7b2c\u4e8c\u4f18\u5148\u7ea7"}),"\n",(0,s.jsx)(n.li,{children:"\u968f\u673a\u8def\u7531\uff1a\u7b2c\u4e09\u4f18\u5148\u7ea7"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"primary-zone-\u8def\u7531",children:(0,s.jsx)(n.strong,{children:"Primary Zone \u8def\u7531"})}),"\n",(0,s.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\uff0c\u5373\u4f1a\u5c06\u79df\u6237\u8bf7\u6c42\u53d1\u9001\u5230\u79df\u6237\u7684 primary zone \u6240\u5728\u7684\u673a\u5668\u4e0a\uff0cOBProxy \u5728\u4e3b\u526f\u672c\u8def\u7531\u65f6\uff0c\u5b58\u5728\u627e\u4e0d\u5230\u8868\u6216\u8005\u5206\u533a Leader \u526f\u672c\u7684\u60c5\u51b5\uff08\u9996\u6b21\u8fde\u63a5\u3001\u7f13\u5b58\u5931\u6548\u3001\u5206\u533a\u8ba1\u7b97\u5931\u8d25\u3001\u65e0\u6cd5\u83b7\u53d6\u8868\u540d\u7b49\u539f\u56e0\uff09\uff0c\u901a\u8fc7 Primary Zone \u8def\u7531\u53ef\u4ee5\u5c3d\u91cf\u53d1\u5f80\u4e3b\u526f\u672c\uff0c\u65b9\u4fbf\u5feb\u901f\u5bfb\u627e Leader \u526f\u672c\u3002\nOBProxy \u914d\u7f6e\u9879 enable_primary_zone \u63a7\u5236\u662f\u5426\u542f\u7528Primary zone\u8def\u7531\uff0c\u9ed8\u8ba4\u662f\u5f00\u542f\u7684\u3002\n\u5173\u4e8ePrimary Zone\u76f8\u5173\u6982\u5ff5\u4ee5\u53ca\u914d\u7f6e\u65b9\u5f0f\uff0c\u53ef\u53c2\u8003\u5b98\u65b9\u6587\u6863\u4ecb\u7ecd\uff1a",(0,s.jsx)(n.a,{href:"https://www.oceanbase.com/docs/common-oceanbase-database-1000000000036283",children:"\u526f\u672c\u7ba1\u7406"})]}),"\n",(0,s.jsx)(n.h3,{id:"ldc-\u8def\u7531",children:(0,s.jsx)(n.strong,{children:"LDC \u8def\u7531"})}),"\n",(0,s.jsx)(n.p,{children:"LDC \u8def\u7531\u662f\u57fa\u4e8e\u5730\u7406\u4f4d\u7f6e\u7684\u8def\u7531\uff0c\u5176\u4e2d\u6709\u4e24\u4e2a\u91cd\u8981\u7684\u6982\u5ff5\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"IDC\uff1a\u8868\u793a\u903b\u8f91\u673a\u623f\u6982\u5ff5"}),"\n",(0,s.jsx)(n.li,{children:"Region\uff1a\u8868\u793a\u57ce\u5e02\u7684\u6982\u5ff5\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"OBProxy \u548c OBServer \u90fd\u53ef\u4ee5\u8bbe\u7f6e LDC \u4fe1\u606f\u3002\u901a\u8fc7 LDC \u4fe1\u606f\uff0cOBProxy \u53ef\u4ee5\u786e\u5b9a\u548c OceanBase \u6570\u636e\u5e93\u7684\u4f4d\u7f6e\u5173\u7cfb\u3002\u5f53\u8bbe\u7f6e\u4e86 LDC \u4fe1\u606f\u540e\uff0cOBProxy \u5c31\u4f1a\u9ed8\u8ba4\u4f7f\u7528 LDC \u8def\u7531\u3002\nLDC\u8def\u7531\u7b56\u7565\uff1a\u662f\u6307OBProxy\u6309\u7167\u6839\u636e\u57ce\u5e02/\u673a\u623f\u7b49\u4fe1\u606f\u5c31\u8fd1\u8def\u7531\u8bbf\u95eeOBServer\u3002\nOBProxy \u914d\u7f6e\u9879 proxy_idc_name \u63a7\u5236\u662f\u5426\u5f00\u542f LDC \u8def\u7531\u7b56\u7565\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u968f\u673a\u8def\u7531",children:(0,s.jsx)(n.strong,{children:"\u968f\u673a\u8def\u7531"})}),"\n",(0,s.jsxs)(n.p,{children:["\u901a\u8fc7\u4f18\u5148\u7ea7\u8def\u7531\u540e\uff0c\u5982\u679c\u8fd8\u6709\u591a\u4e2a\u526f\u672c\uff0c\u5219\u8fdb\u884c\u968f\u673a\u8def\u7531\u3002\u5982\u672a\u5f00\u542f Primary Zone \u8def\u7531\u6216\u8005\u672a\u8bbe\u7f6e LDC \u8def\u7531\uff0c\u5c31\u4f1a\u76f4\u63a5\u4f7f\u7528\u968f\u673a\u8def\u7531\u3002\n\u5173\u4e8eOBProxy\u8def\u7531\u8be6\u7ec6\u4fe1\u606f\uff0c\u53ef\u53c2\u8003\u5b98\u7f51\u6587\u6863\u4ecb\u7ecd\uff1a",(0,s.jsx)(n.a,{href:"https://www.oceanbase.com/docs/enterprise-odp-enterprise-cn-10000000001715896",children:"\u6570\u636e\u8def\u7531"})]}),"\n",(0,s.jsx)(n.h2,{id:"\u8bfb\u5199\u5206\u79bb\u914d\u7f6e",children:(0,s.jsx)(n.strong,{children:"\u8bfb\u5199\u5206\u79bb\u914d\u7f6e"})}),"\n",(0,s.jsx)(n.p,{children:"\u8981\u5b9e\u73b0\u771f\u6b63\u7684\u8bfb\u5199\u5206\u79bb\uff0c\u8fd8\u9700\u8981\u8fdb\u4e00\u6b65\u8bbe\u7f6e\uff0c\u56e0\u4e3a\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6240\u6709\u7684\u8bf7\u6c42\u90fd\u662f\u53d1\u9001\u5230\u6570\u636e\u7684 Leader \u526f\u672c\u4e0a\uff0c\u5373\u5f3a\u4e00\u81f4\u6027\u7684\u8bf7\u6c42\uff0c\u56e0\u4e3a OLAP \u7684\u5206\u6790\u8ba1\u7b97\uff0c\u4e00\u822c\u5bf9\u4e8e\u6570\u636e\u7684\u4e00\u81f4\u6027\u8981\u6c42\u4e0d\u9ad8\uff0c\u56e0\u6b64\u53ef\u4ee5\u5728\u5f00\u542f\u5f31\u4e00\u81f4\u6027\u67e5\u8be2\u4e4b\u540e\uff0c\u5b9e\u73b0\u8bf7\u6c42\u8bbf\u95ee\u5230 Follower \u526f\u672c\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u5f31\u4e00\u81f4\u6027\u8bfb\u8bbe\u7f6e",children:(0,s.jsx)(n.strong,{children:"\u5f31\u4e00\u81f4\u6027\u8bfb\u8bbe\u7f6e"})}),"\n",(0,s.jsx)(n.p,{children:"\u5f31\u4e00\u81f4\u6027\u8bfb\u8bbe\u7f6e\u6709\u4e09\u79cd\u65b9\u5f0f\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"SQL\u7ea7\u522b\u8bbe\u7f6e"}),"\n",(0,s.jsx)(n.li,{children:"\u4f1a\u8bdd\u7ea7\u522b\u8bbe\u7f6e"}),"\n",(0,s.jsx)(n.li,{children:"\u4fee\u6539OBProxy\u914d\u7f6e\u9879\u5b9e\u73b0"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"1\u3001SQL\u7ea7\u522b\u8bbe\u7f6e\uff0c\u5373\u5728\u8bf7\u6c42\u7684SQL\u4e2d\uff0c\u52a0\u4e0a\u5f31\u4e00\u81f4\u6027\u8bfb\u7684Hint\uff0c\u65b9\u6cd5\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"obclient> select /*+READ_CONSISTENCY(WEAK)*/ * from t1;\n"})}),"\n",(0,s.jsx)(n.p,{children:"2\u3001\u4f1a\u8bdd\u7ea7\u522b\u8bbe\u7f6e\uff0c\u5206Global\u7ea7\u522b\u548cSession\u7ea7\u522b\uff0c\u4fee\u6539\u53d8\u91cf ob_read_consistency"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u5c5e\u6027"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u63cf\u8ff0"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,s.jsx)(n.td,{children:"enum"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u9ed8\u8ba4\u503c"}),(0,s.jsx)(n.td,{children:"STRONG"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u53d6\u503c\u8303\u56f4"}),(0,s.jsx)(n.td,{children:"0\uff1a\u7a7a\u5b57\u7b26\u4e32  1\uff1aFROZEN   2\uff1aWEAK   3\uff1aSTRONG"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u751f\u6548\u8303\u56f4"}),(0,s.jsx)(n.td,{children:"Global     Session"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u8fdb\u884c\u8bbe\u7f6e"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"obclient> set global ob_read_consistency=\u2018weak\u2019\n"})}),"\n",(0,s.jsx)(n.p,{children:"3\u3001\u4fee\u6539OBProxy\u914d\u7f6e\u9879\u5b9e\u73b0\uff1a\u901a\u8fc7 Hint \u7684\u65b9\u5f0f\u8bbe\u7f6e\u5f31\u8bfb\u9700\u8981\u4fee\u6539 SQL\uff0c\u4fee\u6539 SQL \u4f1a\u6709\u4e00\u5b9a\u7684\u4e1a\u52a1\u4fb5\u5165\u6027\uff0c\u4e3a\u4e86\u4e0d\u4fb5\u5165\u4e1a\u52a1\uff0c\u53ef\u4ee5\u6307\u5b9a\u8fde\u63a5\u67d0\u4e2aOBProxy\u7684\u6240\u6709\u8bf7\u6c42\u90fd\u4e3a\u5f31\u4e00\u81f4\u6027\u8bfb\uff0c\u4fee\u6539\u65b9\u5f0f\u5982\u4e0b\uff1a\n\u901a\u8fc7\u8981\u8bbe\u7f6e\u4e3a\u5f31\u4e00\u81f4\u6027\u8bfb\u7684OBProxy\u8fde\u63a5\u5230\u6570\u636e\u5e93\uff0c\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u8fdb\u884c\u4fee\u6539"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"alter proxyconfig set obproxy_read_consistency = 1;\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u8be5\u914d\u7f6e\u9879\u53d6\u503c\u4e3a 0 \u548c 1\uff0c\u9ed8\u8ba4\u4e3a 0\uff0c\u8868\u793a\u5f3a\u8bfb\uff08\u9700\u8981\u8bfb\u5230\u6700\u65b0\u7684\u6570\u636e\uff09\u30021 \u8868\u793a\u5f31\u8bfb\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5\u4e0a\u4e09\u79cd\u65b9\u5f0f\u5404\u6709\u4f18\u52a3\u52bf\uff0c\u901a\u8fc7Hint\u7684\u65b9\u5f0f\uff0c\u9700\u8981\u4fee\u6539SQL\uff0c\u5982\u679cSQL\u6570\u91cf\u6bd4\u8f83\u591a\uff0c\u5219\u4fee\u6539\u8d77\u6765\u5de5\u4f5c\u91cf\u5927\uff0c\u5e76\u4e14\u5bf9\u4e1a\u52a1\u4ee3\u7801\u6709\u4e00\u5b9a\u4fb5\u5165\u6027\uff0c\u4f46\u662f\u6bd4\u8f83\u65b9\u4fbf\u7075\u6d3b\uff0c\u5bf9\u4e8e\u5206\u6790\u8bf7\u6c42\u573a\u666f\u9700\u6c42\u4e0d\u9ad8\u7684\u60c5\u51b5\uff0c\u53ef\u4fee\u6539\u4e2a\u522bSQL\u5feb\u901f\u5b9e\u73b0\u5f31\u4e00\u81f4\u6027\u3002\u4f1a\u8bdd\u7ea7\u522b\u7684\u8bbe\u7f6e\uff0c\u5982\u679c\u662f\u5168\u5c40\u8bbe\u7f6e\uff0c\u5219\u4f1a\u5bfc\u81f4\u6240\u6709\u7684\u8fde\u63a5\u4f1a\u8bdd\u90fd\u5f00\u542f\u5f31\u4e00\u81f4\u6027\u8bfb\uff0c\u5982\u679c\u53ea\u5f00\u542fSession\u7ea7\u522b\uff0c\u5219\u6bcf\u5f00\u542f\u4e00\u4e2aSession\u90fd\u9700\u8981\u5148\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u4e5f\u6709\u4e00\u5b9a\u4e1a\u52a1\u7684\u5165\u4fb5\u3002\u901a\u8fc7\u4fee\u6539OBProxy\u914d\u7f6e\uff0c\u5728\u5206\u6790\u8bf7\u6c42\u6bd4\u8f83\u591a\u4e14\u590d\u6742\u7684\u573a\u666f\uff0c\u5219\u662f\u6700\u65b9\u4fbf\u7684\u65b9\u5f0f\uff0c\u6240\u6709\u8fde\u63a5\u8fd9\u4e2aOBProxy\u7684SQL\u9ed8\u8ba4\u5f00\u542f\u5f31\u4e00\u81f4\u6027\u8bfb\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5f00\u542f\u5f31\u4e00\u81f4\u6027\u8bfb\u53ea\u662f\u914d\u7f6e\u8bfb\u5199\u5206\u79bb\u7684\u7b2c\u4e00\u6b65\uff0c\u5728\u5f00\u542f\u5f31\u4e00\u81f4\u6027\u8bfb\u65f6\uff0c\u5982\u679c\u6ca1\u6709\u8bbe\u7f6eLDC\u7b56\u7565\uff0c\u6240\u6709\u7684\u8bf7\u6c42\u8fd8\u662f\u4f1a\u6309\u7167\u6700\u5f00\u59cb\u8bb2\u5230\u7684 OBProxy \u8def\u7531\u7b56\u7565\uff0c\u4f18\u5148\u53d1\u9001\u5230primary zone\uff0c\u5982\u679c\u672a\u8bbe\u7f6eprimary zone\uff0c\u5373primary zone\u4e3arandom\uff0c\u90a3\u4e48\u8bf7\u6c42\u4f1a\u6309\u7167\u968f\u673a\u8def\u7531\u7684\u7b56\u7565\uff0c\u968f\u673a\u53d1\u9001\u5230\u4efb\u610f\u526f\u672c\uff0c\u56e0\u6b64\u65f6\u6709\u53ef\u80fd\u53d1\u9001\u5230 Leader \u526f\u672c\uff0c\u5e76\u672a\u5b9e\u73b0\u5b8c\u5168\u7684\u8bfb\u5199\u5206\u79bb\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"ldc\u8bbe\u7f6e",children:(0,s.jsx)(n.strong,{children:"LDC\u8bbe\u7f6e"})}),"\n",(0,s.jsxs)(n.p,{children:["\u524d\u9762\u4ecb\u7ecd\u5230 LDC \u5305\u542b\u4e86 IDC \u673a\u623f\u4fe1\u606f\u548c Region \u57ce\u5e02\u4fe1\u606f\u3002\u4e00\u4e2a\u57ce\u5e02\uff0c\u5305\u542b\u4e00\u4e2a\u6216\u591a\u4e2aIDC\uff0c\u6bcf\u4e2aIDC\u4e2d\u53ef\u90e8\u7f72\u4e00\u4e2a\u6216\u591a\u4e2aZone\u3002\u5982\u4e0b\u56fe\uff0c\u662f\u4e00\u4e2a\u5178\u578b\u7684\u4e24\u5730\u4e09\u4e2d\u5fc3\u90e8\u7f72\u65b9\u6848\uff0c\u4e24\u4e2a\u57ce\u5e02Region1 \u548c Region2\uff0c\u4ee5\u53ca\u4e09\u4e2a\u673a\u623f idc1\u3001idc2 \u548c idc3\uff0c\u5176\u4e2d idc1 \u548c idc 3\u90fd\u5305\u542b\u4e86\u4e24\u4e2azone\u3002\u53e6\u5916\u8fd8\u67093\u4e2aOBProxy\uff0c\u5206\u522b\u90e8\u7f72\u5728\u4e09\u4e2aidc\u4e2d\u3002\n",(0,s.jsx)(n.img,{alt:"image.png",src:r(67742).A+"",width:"832",height:"278"}),"\nLDC\u7684\u8bbe\u7f6e\uff0c\u8981\u5206\u522b\u8bbe\u7f6eOBProxy\u548cOBServer\uff0c\u4f7f\u5176\u5bf9\u5e94\u4e0a\u4e4b\u540e\uff0c\u624d\u4f1a\u5b9e\u73b0\u771f\u6b63\u7684\u5c31\u8fd1\u8bbf\u95ee\u3002\n1\u3001OBServer\u8bbe\u7f6e\uff1a\nOceanBase \u6570\u636e\u5e93\u7684\u6bcf\u4e2a Zone \u90fd\u53ef\u4ee5\u8bbe\u7f6e Region \u5c5e\u6027\u6216 IDC \u5c5e\u6027\uff0cRegion \u901a\u5e38\u8bbe\u7f6e\u4e3a\u57ce\u5e02\u540d\uff08\u5927\u5c0f\u5199\u654f\u611f\uff09\uff0cIDC \u4ee3\u8868\u8be5 Zone \u6240\u5904\u7684\u673a\u623f\u4fe1\u606f\uff0c\u901a\u5e38\u8bbe\u7f6e\u673a\u623f\u540d\uff08\u5c0f\u5199\uff09\n\u8bbe\u7f6eSQL\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'alter system modify zone "zone1" set region = "BEIJING";\nalter system modify zone "zone1" set idc = "idc1";\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u4fee\u6539\u5b8c\u6210\u540e\uff0c\u901a\u8fc7\u6267\u884c select * from DBA_OB_ZONES; \u8fdb\u884c\u67e5\u8be2"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"obclient [oceanbase]> select * from DBA_OB_ZONES;\n+-------+----------------------------+----------------------------+--------+------+----------+-----------+\n| ZONE  | CREATE_TIME                | MODIFY_TIME                | STATUS | IDC  | REGION   | TYPE      |\n+-------+----------------------------+----------------------------+--------+------+----------+-----------+\n| zone1 | 2023-06-16 18:32:40.102484 | 2023-08-17 17:36:57.810787 | ACTIVE | idc1 | BEIJING  | ReadWrite |\n| zone2 | 2023-06-16 18:32:40.102484 | 2023-08-17 17:37:06.622934 | ACTIVE | idc2 | BEIJING  | ReadWrite |\n| zone3 | 2023-06-16 18:32:40.102484 | 2023-08-17 17:37:11.816791 | ACTIVE | idc3 | SHANGHAI | ReadWrite |\n+-------+----------------------------+----------------------------+--------+------+----------+-----------+\n3 rows in set (0.012 sec)\n"})}),"\n",(0,s.jsx)(n.p,{children:"2\u3001OBProxy\u8bbe\u7f6e\uff1a\n\u65b9\u6cd5\u4e00\uff1aODP \u8fdb\u7a0b\u542f\u52a8\u65f6\u901a\u8fc7 -o \u53c2\u6570\u6307\u5b9a\u8bbe\u7f6e LDC \u4fe1\u606f"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"cd /opt/taobao/install/obproxy\n./bin/obproxy -o proxy_idc_name=idc1\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u65b9\u6cd5\u4e8c\uff1a\u901a\u8fc7\u6267\u884c SQL \u8bed\u53e5\u8bbe\u7f6e LDC \u4fe1\u606f"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"obclient> alter proxyconfig set proxy_idc_name='idc1';\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u901a\u8fc7\u6267\u884c show proxyinfo idc \u547d\u4ee4\uff0c\u53ef\u68c0\u67e5\u662f\u5426\u8bbe\u7f6e\u6210\u529f"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'obclient [oceanbase]> show proxyinfo idc;\n+-----------------+--------------+----------------+----------------+--------------+--------------+--------------+\n| global_idc_name | cluster_name | match_type     | regions_name   | same_idc     | same_region  | other_region |\n+-----------------+--------------+----------------+----------------+--------------+--------------+--------------+\n| idc1            | obcluster    | MATCHED_BY_IDC | [[0]"BEIJING"] | [[0]"zone1"] | [[0]"zone2"] | [[0]"zone3"] |\n+-----------------+--------------+----------------+----------------+--------------+--------------+--------------+\n1 row in set (0.001 sec)\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u5728OBProxy\u8bbe\u7f6e\u5b8c\u6210\u4e4b\u540e\uff0c\u67e5\u770bOBProxy\u7684LDC\u4fe1\u606f\uff0c\u53ef\u4ee5\u5728regions_name \u548c same_idc\u4e2d\u770b\u5230\uff0cOBProxy\u548c\u5bf9\u5e94\u7684region\u548czone\u5df2\u7ecf\u5b9e\u73b0\u4e86\u81ea\u52a8\u5339\u914d\uff0c\u8fd9\u4e2a\u65f6\u5019\uff0c\u4e1a\u52a1\u8bbf\u95eeidc1 \u7684\u8fd9\u4e2aOBProxy\uff0c\u9ed8\u8ba4\u4f1a\u5c06\u8bf7\u6c42\u8def\u7531\u5230zone1\u7684OBServer\u4e0a\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4f46\u662f\u8fd9\u6837\u4e5f\u65e0\u6cd5\u4fdd\u8bc1OLAP\u7c7b\u7684\u8bfb\u8bf7\u6c42\u90fd\u8bbf\u95ee\u5230 Follower\u526f\u672c\uff0c\u56e0\u6b64\u8fd8\u9700\u8981\u518d\u8fdb\u4e00\u6b65\u8bbe\u7f6e\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"follower_first\u8bbe\u7f6e",children:(0,s.jsx)(n.strong,{children:"FOLLOWER_FIRST\u8bbe\u7f6e"})}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u8bbe\u7f6e\u4e86LDC\u8def\u7531\u7b56\u7565\u4e4b\u540e\uff0c\u5f31\u4e00\u81f4\u6027\u7684\u8bfb\u8bf7\u6c42\u53ea\u4f1a\u5c31\u8fd1\u8bbf\u95ee\uff0c\u4e3a\u4e86\u4fdd\u8bc1\u5f31\u4e00\u81f4\u6027\u7684\u8bfb\u8bf7\u6c42\u80fd\u591f\u4f18\u5148\u8def\u7531\u5230Follower \u526f\u672c\u4e0a\uff0c\u8fd8\u9700\u8981\u5bf9OBProxy\u8bbe\u7f6e proxy_route_policy \u53c2\u6570\uff0c\u8fd9\u4e2a\u53c2\u6570\u6709\u4e24\u4e2a\u503c\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"FOLLOWER_FIRST\uff1a\u4f18\u5148\u53d1\u5f80\u5907\u526f\u672c\uff0c\u5982\u679c\u65e0\u5907\u526f\u672c\u53ef\u7528\u5219\u53d1\u5f80\u4e3b\u526f\u672c\u3002"}),"\n",(0,s.jsx)(n.li,{children:"FOLLOWER_ONLY\uff1a\u53ea\u80fd\u53d1\u5f80\u5907\u526f\u672c\uff0c\u5982\u679c\u65e0\u5907\u526f\u672c\u53ef\u7528\u5219\u62a5\u9519\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u8bbe\u7f6e\u65b9\u5f0f\u5982\u4e0b\uff0c\u901a\u8fc7\u8fde\u63a5OBProxy\uff0c\u6267\u884c\u5982\u4e0b\u547d\u4ee4"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'obclient [oceanbase]> alter proxyconfig set proxy_route_policy="follower_first";\nQuery OK, 0 rows affected (0.005 sec)\n\nobclient [oceanbase]> show proxyconfig like "%proxy_route_policy%";\n+--------------------+----------------+--------------------+-------------+---------------+\n| name               | value          | info               | need_reboot | visible_level |\n+--------------------+----------------+--------------------+-------------+---------------+\n| proxy_route_policy | follower_first | proxy route policy | false       | SYS           |\n+--------------------+----------------+--------------------+-------------+---------------+\n1 row in set (0.002 sec)\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u901a\u8fc7\u4ee5\u4e0a\u7684\u8bbe\u7f6e\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u5b9e\u73b0\u5f31\u4e00\u81f4\u6027\u7684\u4f18\u5148\u8bbf\u95ee follower \u526f\u672c\u7684\u7b56\u7565\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u901a\u8fc7\u4ee5\u4e0a\u96c6\u4e2d\u65b9\u5f0f\u7684\u8bbe\u7f6e\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u7075\u6d3b\u914d\u7f6e\u8bfb\u5199\u5206\u79bb\u7684\u65b9\u6848\uff0c\u4ee5\u4e0b\u4e3e\u51e0\u4e2a\u5e38\u89c1\u7684\u8bfb\u5199\u5206\u79bb\u6848\u4f8b\uff0c\u4ee5\u4f9b\u5927\u5bb6\u53c2\u8003"}),"\n",(0,s.jsx)(n.h2,{id:"\u8bfb\u5199\u5206\u79bb\u6848\u4f8b",children:(0,s.jsx)(n.strong,{children:"\u8bfb\u5199\u5206\u79bb\u6848\u4f8b"})}),"\n",(0,s.jsx)(n.h3,{id:"\u6848\u4f8b\u4e00\u672c\u5730\u5907\u4f18\u5148\u8bfb",children:(0,s.jsx)(n.strong,{children:"\u6848\u4f8b\u4e00\uff1a\u672c\u5730\u5907\u4f18\u5148\u8bfb"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u8bbe\u7f6e\u6761\u4ef6\uff1a"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4f1a\u8bdd\u7ea7\u522b\u8bbe\u7f6e\u5f31\u4e00\u81f4\u6027\u8bfb ",(0,s.jsx)(n.strong,{children:"\u6216\u8005"})," SQL \u8bf7\u6c42\u52a0 \u5f31\u4e00\u81f4\u6027\u8bfb Hint"]}),"\n",(0,s.jsx)(n.li,{children:"\u8bbe\u7f6eLDC\u7b56\u7565\uff0cOBProxy \u548c OBServer \u7ed1\u5b9a"}),"\n",(0,s.jsx)(n.li,{children:"\u914d\u7f6e\u4e86FOLLOWER_FIRST"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u8def\u7531\u7b56\u7565\uff1a"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5f3a\u4e00\u81f4\u6027\u8bfb\u4ee5\u53ca\u589e\u5220\u6539\u7684SQL\uff0c\u4f9d\u7136\u8bbf\u95ee Leader \u526f\u672c\uff1b"}),"\n",(0,s.jsx)(n.li,{children:"\u5f00\u542f\u5f31\u4e00\u81f4\u6027\u8bfb\u7684 SQL \u8bf7\u6c42\uff0c\u8fde\u63a5\u4e32\u4e2d\u6307\u5b9a\u8bbf\u95ee\u7684 OBProxy\uff0cOBProxy \u9ed8\u8ba4\u4f1a\u5c06\u8bf7\u6c42\u8def\u7531\u5230\u672c\u5730 Follower \u526f\u672c\uff0c\u5982\u679c\u672c\u5730\u8be5\u6570\u636e\u7684\u526f\u672c\u4e3a Leader \u526f\u672c\uff0c\u5219\u81ea\u52a8\u8def\u7531\u5230\u540c Region \u4e2d\u5176\u4ed6 IDC \u7684 Follower \u526f\u672c\uff0c\u5982\u4e0b\u56fe\u4e2d\u7ea2\u8272\u7ebf\u6761\uff0c\u8de8 IDC \u8bbf\u95ee\u6570\u636e\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u4f18\u7f3a\u70b9\uff1a"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u4f18\u70b9\uff1a\u914d\u7f6e\u7b80\u5355\uff0c\u4e0d\u9700\u8981\u5355\u72ec\u914d\u7f6e\u4e00\u4e2a\u5f31\u4e00\u81f4\u6027\u8bfb\u7684 OBProxy\uff1b"}),"\n",(0,s.jsx)(n.li,{children:"\u7f3a\u70b9\uff1a\u5982\u679c\u672c\u5730\u526f\u672c\u662f Leader \u526f\u672c\uff0c\u5219\u4f1a\u8de8 IDC \u8bbf\u95ee\uff0cSQL \u9700\u8981\u6539\u9020\uff0c\u5bf9\u4e1a\u52a1\u6709\u4e00\u5b9a\u5f71\u54cd\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image.png",src:r(55431).A+"",width:"2056",height:"1696"})}),"\n",(0,s.jsx)(n.h3,{id:"\u6848\u4f8b\u4e8c\u53ea\u8bfbzone",children:(0,s.jsx)(n.strong,{children:"\u6848\u4f8b\u4e8c\uff1a\u53ea\u8bfbzone"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u8bbe\u7f6e\u6761\u4ef6\uff1a"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u8bbe\u7f6e\u5f31\u4e00\u81f4\u6027\u8bfb OBProxy\uff1aobproxy_read_consistency = 1;"}),"\n",(0,s.jsx)(n.li,{children:"\u8bbe\u7f6ePrimary Zone\u4e3a\uff1azone1,zone2;zone3"}),"\n",(0,s.jsx)(n.li,{children:"\u8bbe\u7f6eLDC\u7b56\u7565\uff0cOBProxy \u548c OBServer \u7ed1\u5b9a"}),"\n",(0,s.jsx)(n.li,{children:"\u914d\u7f6e\u4e86FOLLOWER_FIRST"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u8def\u7531\u7b56\u7565\uff1a"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u9700\u8981\u5f31\u4e00\u81f4\u6027\u8bfb\u7684SQL\uff0c\u8fde\u63a5\u8bbe\u7f6e\u4e86\u5f31\u8bfb\u7684 OBProxy\uff0c\u5176\u4f59SQL\u8fde\u63a5\u6b63\u5e38OBProxy\uff1b"}),"\n",(0,s.jsx)(n.li,{children:"\u901a\u8fc7\u8fde\u63a5\u5f31\u8bfb\u7684 OBProxy \u7684\u6240\u6709 SQL\uff0c\u4f1a\u57fa\u4e8e LDC \u8def\u7531\u7b56\u7565\uff0c\u4ee5\u53ca FOLLOWER_FIRST\u7b56\u7565\uff0c\u4f1a\u81ea\u52a8\u8bbf\u95ee\u672c\u5730 Follower \u526f\u672c\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u56e0\u4e3a\u8bbe\u7f6e\u4e86 Primary Zone\uff08zone1,zone2;zone3\uff09\uff0c\u6240\u6709\u7684 Leader \u526f\u672c\u90fd\u88ab\u8fc1\u79fb\u5230\u4e86zone1 \u548czone2\u4e2d\uff0c\u56e0\u6b64zone3\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u90fd\u4e3aFollower \u526f\u672c\uff0c\u90a3\u4e48zone3\u7684\u526f\u672c\u5c31\u53ef\u4ee5\u53ea\u7ed9\u5f31\u4e00\u81f4\u6027\u8bfb\u7684\u5206\u6790\u8ba1\u7b97\u7c7bSQL\u63d0\u4f9b\u670d\u52a1\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u4f18\u7f3a\u70b9\uff1a"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u4f18\u70b9\uff1azone\u7ea7\u522b\u9694\u79bb\u8bfb\u5199\u8bf7\u6c42\uff0c\u9694\u79bb\u76f8\u6bd4\u65b9\u6848\u4e00\u66f4\u5f7b\u5e95\uff1b"}),"\n",(0,s.jsx)(n.li,{children:"\u7f3a\u70b9\uff1a\u9700\u8981\u5355\u72ec\u914d\u7f6e\u4e00\u4e2a\u5f31\u8bfb\u7684OBProxy\uff0c\u9700\u8981\u8bbe\u7f6ePrimary Zone\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image.png",src:r(63912).A+"",width:"2032",height:"1708"})}),"\n",(0,s.jsx)(n.h3,{id:"\u65b9\u6848\u4e09\u53ea\u8bfb\u526f\u672c",children:(0,s.jsx)(n.strong,{children:"\u65b9\u6848\u4e09\uff1a\u53ea\u8bfb\u526f\u672c"})}),"\n",(0,s.jsx)(n.p,{children:"OceanBase \u4e2d\u9664\u4e86\u9ed8\u8ba4\u7684\u5168\u529f\u80fd\u6027\u526f\u672c\u4e4b\u5916\uff0c\u8fd8\u6709\u4e00\u79cd\u53ea\u8bfb\u578b\u526f\u672c\uff0c\u53ea\u8bfb\u578b\u526f\u672c\u7684\u540d\u79f0\u4e3a READONLY\uff0c\u7b80\u79f0 R\uff0c\u533a\u522b\u4e8e\u5168\u529f\u80fd\u526f\u672c\uff0c\u53ea\u8bfb\u526f\u672c\u63d0\u4f9b\u8bfb\u7684\u80fd\u529b\uff0c\u4e0d\u63d0\u4f9b\u5199\u7684\u80fd\u529b\uff0c\u53ea\u80fd\u4f5c\u4e3a\u65e5\u5fd7\u6d41\u7684 Follower \u526f\u672c\uff0c\u4e0d\u53c2\u4e0e\u9009\u4e3e\u53ca\u65e5\u5fd7\u7684\u6295\u7968\uff0c\u4e0d\u80fd\u5f53\u9009\u4e3a\u65e5\u5fd7\u6d41\u7684 Leader \u526f\u672c\u3002\n\u5229\u7528\u53ea\u8bfb\u526f\u672c\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u4e13\u95e8\u518d\u914d\u7f6e\u4e00\u4e2azone\uff0c\u53ea\u653e\u53ea\u8bfb\u578b\u526f\u672c\uff0c\u4e13\u95e8\u63d0\u4f9b\u7ed9OLAP\u5206\u6790\u8ba1\u7b97\u7c7b\u8bf7\u6c42\uff0c\u5e76\u4e14\u53ea\u8bfb\u526f\u672c\u51fa\u73b0\u6545\u969c\uff0c\u5e76\u4e0d\u4f1a\u5f71\u54cd\u4e3b\u96c6\u7fa4\u670d\u52a1\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u8bbe\u7f6e\u6761\u4ef6\uff1a"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u8bbe\u7f6e\u5f31\u4e00\u81f4\u6027\u8bfb OBProxy\uff1aobproxy_read_consistency = 1;"}),"\n",(0,s.jsx)(n.li,{children:"\u914d\u7f6e\u53ea\u8bfb\u578b\u526f\u672c"}),"\n",(0,s.jsx)(n.li,{children:"\u8bbe\u7f6eLDC\u7b56\u7565\uff0cOBProxy \u548c OBServer \u7ed1\u5b9a"}),"\n",(0,s.jsx)(n.li,{children:"\u914d\u7f6e\u4e86FOLLOWER_FIRST"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u8def\u7531\u7b56\u7565\uff1a"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u4e3b\u96c6\u7fa4\u6b63\u5e38\u63d0\u4f9b\u670d\u52a1\uff0cAP\u7c7b\u8bf7\u6c42\uff0c\u8d70\u72ec\u7acb\u7684OBProxy\uff0c\u8bbf\u95ee\u53ea\u8bfb\u578b\u526f\u672c\uff1b"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u4f18\u7f3a\u70b9\uff1a"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u4f18\u70b9\uff1aOLAP\u4e0eOLTP\u5b8c\u5168\u9694\u79bb\uff0c\u4e92\u76f8\u4e0d\u53d7\u4efb\u4f55\u5f71\u54cd\uff1b"}),"\n",(0,s.jsx)(n.li,{children:"\u7f3a\u70b9\uff1a\u9700\u8981\u66f4\u591a\u7684\u8d44\u6e90\u6765\u63d0\u4f9b\u7ed9\u53ea\u8bfb\u578b\u526f\u672c\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image.png",src:r(3857).A+"",width:"2358",height:"1524"})}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5\u4e0a\u662f\u51e0\u79cd\u6bd4\u8f83\u5178\u578b\u7684\u8bfb\u5199\u5206\u79bb\u65b9\u6848\uff0c\u7528\u6237\u8fd8\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u60c5\u51b5\uff0c\u7075\u6d3b\u914d\u7f6e\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u5927\u67e5\u8be2\u7b56\u7565",children:(0,s.jsx)(n.strong,{children:"\u5927\u67e5\u8be2\u7b56\u7565"})}),"\n",(0,s.jsx)(n.p,{children:"\u9664\u6b64\u4e4b\u5916\uff0c\u5728\u5185\u6838\u5c42\u9762\uff0cOceanBase \u8fd8\u4f1a\u5bf9\u5927\u67e5\u8be2\u8fdb\u884c\u8d44\u6e90\u9650\u5236\uff0c\u51cf\u5c11\u5927\u67e5\u8be2\u5bf9\u5c0f\u67e5\u8be2\u7684\u8d44\u6e90\u5360\u7528\u3002\n\u914d\u7f6e\u5927\u67e5\u8be2\u7684\u53c2\u6570\u4e3a large_query_threshold\uff0c\u8d85\u8fc7\u8fd9\u4e2a\u53c2\u6570\u8bbe\u7f6e\u7684\u9608\u503c\uff0c\u5219\u8ba4\u4e3a\u662f\u5927\u67e5\u8be2"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u5c5e\u6027"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u63cf\u8ff0"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,s.jsx)(n.td,{children:"\u65f6\u95f4\u7c7b\u578b"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u9ed8\u8ba4\u503c"}),(0,s.jsx)(n.td,{children:"5s"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u53d6\u503c\u8303\u56f4"}),(0,s.jsx)(n.td,{children:"[1ms, +\u221e)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u662f\u5426\u91cd\u542f OBServer \u8282\u70b9\u751f\u6548"}),(0,s.jsx)(n.td,{children:"\u5426"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u7cfb\u7edf\u4e2d\u540c\u65f6\u8fd0\u884c\u7740\u5927\u67e5\u8be2\u548c\u5c0f\u67e5\u8be2\uff0cOceanBase \u6570\u636e\u5e93\u4f1a\u5c06\u4e00\u90e8\u5206 CPU \u8d44\u6e90\u5206\u914d\u7ed9\u5927\u67e5\u8be2\uff0c\u5e76\u901a\u8fc7\u914d\u7f6e\u53c2\u6570 large_query_worker_percentage\uff08\u9ed8\u8ba4\u503c\u4e3a 30%\uff09\u6765\u9650\u5236\u6267\u884c\u5927\u67e5\u8be2\u6700\u591a\u53ef\u4ee5\u4f7f\u7528\u7684\u79df\u6237\u6d3b\u8dc3\u5de5\u4f5c\u7ebf\u7a0b\u6570\u3002"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u5c5e\u6027"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u63cf\u8ff0"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,s.jsx)(n.td,{children:"\u53cc\u7cbe\u5ea6\u6d6e\u70b9\u6570"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u9ed8\u8ba4\u503c"}),(0,s.jsx)(n.td,{children:"30"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u53d6\u503c\u8303\u56f4"}),(0,s.jsx)(n.td,{children:"[0, 100]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u662f\u5426\u91cd\u542f OBServer \u8282\u70b9\u751f\u6548"}),(0,s.jsx)(n.td,{children:"\u5426"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"OceanBase \u6570\u636e\u5e93\u901a\u8fc7\u9650\u5236\u5927\u67e5\u8be2\u80fd\u4f7f\u7528\u7684\u79df\u6237\u6d3b\u8dc3\u5de5\u4f5c\u7ebf\u7a0b\u6570\u6765\u7ea6\u675f\u5927\u67e5\u8be2\u6700\u591a\u80fd\u591f\u4f7f\u7528\u7684 CPU \u8d44\u6e90\uff0c\u4ee5\u6b64\u6765\u4fdd\u8bc1\u7cfb\u7edf\u8fd8\u4f1a\u6709\u8db3\u591f\u7684 CPU \u8d44\u6e90\u6765\u6267\u884c OLTP\uff08\u4f8b\u5982\uff0c\u4ea4\u6613\u578b\u7684\u5c0f\u4e8b\u52a1\uff09\u8d1f\u8f7d\u3002\u901a\u8fc7\u8fd9\u6837\u7684\u65b9\u5f0f\u6765\u4fdd\u8bc1\u5bf9\u54cd\u5e94\u65f6\u95f4\u6bd4\u8f83\u654f\u611f\u7684 OLTP \u8d1f\u8f7d\u80fd\u591f\u5f97\u5230\u8db3\u591f\u591a\u7684 CPU \u8d44\u6e90\u5c3d\u5feb\u5730\u88ab\u6267\u884c\u3002\u53e6\u5916\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u867d\u7136 OceanBase \u6570\u636e\u5e93\u53ef\u4ee5\u505a\u5230\u5927\u67e5\u8be2\u548c OLTP \u8d44\u6e90\u7684\u5206\u914d\uff0clarge_query_threshold \u53c2\u6570\u4e5f\u5e94\u8bbe\u7f6e\u5728\u4e00\u4e2a\u5728\u5408\u7406\u7684\u8303\u56f4\u5185\uff0c\u4e0d\u5e94\u8be5\u8bbe\u7f6e\u6210\u4e3a\u4e00\u4e2a\u8fc7\u5927\u7684\u503c\u3002\u5426\u5219\u5927\u67e5\u8be2\u5f88\u5bb9\u6613\u62a2\u5360\u7cfb\u7edf\u7684 CPU \u8d44\u6e90\u800c\u6324\u8fdb\u800c\u5f15\u53d1 OLTP \u54cd\u5e94\u8fc7\u6162\u751a\u81f3\u961f\u5217\u5806\u79ef\u7684\u95ee\u9898\u3002"})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},53493:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/a-149690b9b762dca75a7fc28bc93e874a.png"},67742:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/b-71ac0e8bad864dc3116e1d5c80f28c1d.png"},55431:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/c-86dc0cce3ff96a3893a442e8b4fefb33.png"},63912:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/d-9f9a3cd1d06d2ed19613e82de9a091b2.png"},3857:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/e-32a9ff948d793cb1433325bfcf833348.png"},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>c});var s=r(96540);const i={},l=s.createContext(i);function o(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);