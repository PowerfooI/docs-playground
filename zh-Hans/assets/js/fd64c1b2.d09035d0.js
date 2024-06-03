"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[1355],{6671:(o,r,e)=>{e.r(r),e.d(r,{assets:()=>a,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var n=e(4848),t=e(8453);const s={},p="\u5982\u4f55\u5347\u7ea7 obproxy \u5230 obproxy-ce 3.2.3",c={id:"obd/faq/how-to-upgrade-obproxy-to-obproxy-ce-3.2.3",title:"\u5982\u4f55\u5347\u7ea7 obproxy \u5230 obproxy-ce 3.2.3",description:"\u7531\u4e8e\u5f00\u6e90 obproxy \u7ec4\u4ef6\u6b63\u5f0f\u66f4\u540d\u4e3a obproxy-ce\uff0c\u56e0\u6b64\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5347\u7ea7\u4f1a\u62a5 No such package obproxy-3.2.3 \u9519\u8bef\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/obd/500.faq/200.how-to-upgrade-obproxy-to-obproxy-ce-3.2.3.md",sourceDirName:"obd/500.faq",slug:"/obd/faq/how-to-upgrade-obproxy-to-obproxy-ce-3.2.3",permalink:"/docs-playground/zh-Hans/docs/obd/faq/how-to-upgrade-obproxy-to-obproxy-ce-3.2.3",draft:!1,unlisted:!1,editUrl:"https://github.com/powerfooi/docs-playground/tree/main/docs/obd/500.faq/200.how-to-upgrade-obproxy-to-obproxy-ce-3.2.3.md",tags:[],version:"current",sidebarPosition:200,frontMatter:{}},a={},i=[{value:"\u811a\u672c",id:"\u811a\u672c",level:2}];function d(o){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...o.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"\u5982\u4f55\u5347\u7ea7-obproxy-\u5230-obproxy-ce-323",children:"\u5982\u4f55\u5347\u7ea7 obproxy \u5230 obproxy-ce 3.2.3"}),"\n",(0,n.jsxs)(r.p,{children:["\u7531\u4e8e\u5f00\u6e90 obproxy \u7ec4\u4ef6\u6b63\u5f0f\u66f4\u540d\u4e3a obproxy-ce\uff0c\u56e0\u6b64\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5347\u7ea7\u4f1a\u62a5 ",(0,n.jsx)(r.code,{children:"No such package obproxy-3.2.3"})," \u9519\u8bef\u3002"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",children:"obd cluster upgrade <deploy name> -c obproxy -V 3.2.3\n"})}),"\n",(0,n.jsxs)(r.p,{children:["\u60a8\u9700\u5728 OBD \u7684\u6267\u884c\u7528\u6237\u4e0b\u6267\u884c\u4e0b\u8ff0 ",(0,n.jsx)(r.strong,{children:"\u811a\u672c"})," \u4fee\u6539 meta \u4fe1\u606f\uff0c\u800c\u540e\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5bf9 ODP \u8fdb\u884c\u5347\u7ea7\u3002"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",children:"obd cluster upgrade <deploy name> -c obproxy-ce -V 3.2.3\n"})}),"\n",(0,n.jsx)(r.h2,{id:"\u811a\u672c",children:"\u811a\u672c"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:'OBD_HOME=${OBD_HOME:-${HOME}}/.obd\r\nobproxy_repository=${OBD_HOME}/repository/obproxy\r\nobproxy_ce_repository=${OBD_HOME}/repository/obproxy-ce\r\n\r\nfunction shadow_repo() {\r\n    repository_path=$1\r\n    ce_repository_path=$2\r\n    [[ $repository_path =~ ^/  ]] && a=$repository_path || a=`pwd`/$repository_path\r\n    while [ -h $a ]\r\n    do\r\n        b=`ls -ld $a|awk \'{print $NF}\'`\r\n        c=`ls -ld $a|awk \'{print $(NF-2)}\'`\r\n        [[ $real_patn =~ ^/ ]] && a=$b  || a=`dirname $c`/$b\r\n    done\r\n    instance_hash=`basename $a`\r\n    ce_version_path=`dirname ${ce_repository_path}`\r\n    ln -sf ${ce_version_path}/${instance_hash} ${ce_repository_path}\r\n}\r\n\r\nfunction copy_repository() {\r\n    VS=(`ls $obproxy_repository`)\r\n    for version in ${VS[@]}; do\r\n        version_path="${obproxy_repository}/${version}"\r\n        ce_version_path="${obproxy_ce_repository}/${version}"\r\n        repositories=(`ls $version_path`)\r\n        mkdir -p $ce_version_path\r\n        for repository in ${repositories[@]}; do\r\n            repository_path="${version_path}/${repository}"\r\n            ce_repository_path="${ce_version_path}/${repository}"\r\n            if [ -d "$ce_repository_path" ]; \r\n            then\r\n                echo "${ce_repository_path} exist"\r\n            else\r\n                if [ -L ${repository_path} ];\r\n                then \r\n                    shadow_repo ${repository_path} ${ce_repository_path}\r\n                else\r\n                    cp -r ${repository_path} ${ce_repository_path}\r\n                fi\r\n            fi\r\n        done\r\n    done\r\n}\r\n\r\nfunction change_cluster_meta() {\r\n    cluster_home_path=${OBD_HOME}/cluster\r\n    CS=(`ls ${cluster_home_path}`)\r\n    for cluster in ${CS[@]}; do\r\n        cluster_path=${cluster_home_path}/$cluster\r\n        if [ -f ${cluster_path}/.data ]; then\r\n            sed -i \'s/^  obproxy:/  obproxy-ce:/g\' ${cluster_path}/.data\r\n        fi\r\n        sed -i \'s/^obproxy:/obproxy-ce:/\' ${cluster_path}/*.yaml\r\n    done\r\n}\r\n\r\ncopy_repository && change_cluster_meta && echo \'ok\'\n'})})]})}function h(o={}){const{wrapper:r}={...(0,t.R)(),...o.components};return r?(0,n.jsx)(r,{...o,children:(0,n.jsx)(d,{...o})}):d(o)}},8453:(o,r,e)=>{e.d(r,{R:()=>p,x:()=>c});var n=e(6540);const t={},s=n.createContext(t);function p(o){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof o?o(r):{...r,...o}}),[r,o])}function c(o){let r;return r=o.disableParentContext?"function"==typeof o.components?o.components(t):o.components||t:p(o.components),n.createElement(s.Provider,{value:r},o.children)}}}]);