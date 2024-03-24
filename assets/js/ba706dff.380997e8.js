"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[8139],{6565:(o,r,e)=>{e.r(r),e.d(r,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>i});var n=e(4848),t=e(8453);const s={},p="How do I upgrade an OBProxy to obproxy-ce 3.2.3?",a={id:"obd/faq/how-to-upgrade-obproxy-to-obproxy-ce-3.2.3",title:"How do I upgrade an OBProxy to obproxy-ce 3.2.3?",description:"The open source OBProxy component is formally renamed as obproxy-ce. Therefore, the error No such package obproxy-3.2.3 will be reported if you run the following command for an upgrade:",source:"@site/docs/obd/500.faq/200.how-to-upgrade-obproxy-to-obproxy-ce-3.2.3.md",sourceDirName:"obd/500.faq",slug:"/obd/faq/how-to-upgrade-obproxy-to-obproxy-ce-3.2.3",permalink:"/docs-playground/docs/obd/faq/how-to-upgrade-obproxy-to-obproxy-ce-3.2.3",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/obd/500.faq/200.how-to-upgrade-obproxy-to-obproxy-ce-3.2.3.md",tags:[],version:"current",sidebarPosition:200,frontMatter:{},sidebar:"obdSidebar",previous:{title:"FAQ",permalink:"/docs-playground/docs/obd/faq/faq"},next:{title:"Error codes",permalink:"/docs-playground/docs/obd/error-messages-in-obd"}},c={},i=[{value:"script",id:"script",level:2}];function d(o){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...o.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"how-do-i-upgrade-an-obproxy-to-obproxy-ce-323",children:"How do I upgrade an OBProxy to obproxy-ce 3.2.3?"}),"\n",(0,n.jsxs)(r.p,{children:["The open source OBProxy component is formally renamed as obproxy-ce. Therefore, the error ",(0,n.jsx)(r.code,{children:"No such package obproxy-3.2.3"})," will be reported if you run the following command for an upgrade:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",children:"obd cluster upgrade <deploy name> -c obproxy -V 3.2.3\n"})}),"\n",(0,n.jsxs)(r.p,{children:["You need to run the following ",(0,n.jsx)(r.strong,{children:"script"})," as the execution user of OBD to modify the metadata, and then run the following command to upgrade the OBProxy:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",children:"obd cluster upgrade <deploy name> -c obproxy-ce -V 3.2.3\n"})}),"\n",(0,n.jsx)(r.h2,{id:"script",children:"script"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:'OBD_HOME=${OBD_HOME:-${HOME}}/.obd\r\nobproxy_repository=${OBD_HOME}/repository/obproxy\r\nobproxy_ce_repository=${OBD_HOME}/repository/obproxy-ce\r\n\r\nfunction shadow_repo() {\r\n    repository_path=$1\r\n    ce_repository_path=$2\r\n    [[ $repository_path =~ ^/  ]] && a=$repository_path || a=`pwd`/$repository_path\r\n    while [ -h $a ]\r\n    do\r\n        b=`ls -ld $a|awk \'{print $NF}\'`\r\n        c=`ls -ld $a|awk \'{print $(NF-2)}\'`\r\n        [[ $real_patn =~ ^/ ]] && a=$b  || a=`dirname $c`/$b\r\n    done\r\n    instance_hash=`basename $a`\r\n    ce_version_path=`dirname ${ce_repository_path}`\r\n    ln -sf ${ce_version_path}/${instance_hash} ${ce_repository_path}\r\n}\r\n\r\nfunction copy_repository() {\r\n    VS=(`ls $obproxy_repository`)\r\n    for version in ${VS[@]}; do\r\n        version_path="${obproxy_repository}/${version}"\r\n        ce_version_path="${obproxy_ce_repository}/${version}"\r\n        repositories=(`ls $version_path`)\r\n        mkdir -p $ce_version_path\r\n        for repository in ${repositories[@]}; do\r\n            repository_path="${version_path}/${repository}"\r\n            ce_repository_path="${ce_version_path}/${repository}"\r\n            if [ -d "$ce_repository_path" ]; \r\n            then\r\n                echo "${ce_repository_path} exist"\r\n            else\r\n                if [ -L ${repository_path} ];\r\n                then \r\n                    shadow_repo ${repository_path} ${ce_repository_path}\r\n                else\r\n                    cp -r ${repository_path} ${ce_repository_path}\r\n                fi\r\n            fi\r\n        done\r\n    done\r\n}\r\n\r\nfunction change_cluster_meta() {\r\n    cluster_home_path=${OBD_HOME}/cluster\r\n    CS=(`ls ${cluster_home_path}`)\r\n    for cluster in ${CS[@]}; do\r\n        cluster_path=${cluster_home_path}/$cluster\r\n        if [ -f ${cluster_path}/.data ]; then\r\n            sed -i \'s/^  obproxy:/  obproxy-ce:/g\' ${cluster_path}/.data\r\n        fi\r\n        sed -i \'s/^obproxy:/obproxy-ce:/\' ${cluster_path}/*.yaml\r\n    done\r\n}\r\n\r\ncopy_repository && change_cluster_meta && echo \'ok\'\n'})})]})}function h(o={}){const{wrapper:r}={...(0,t.R)(),...o.components};return r?(0,n.jsx)(r,{...o,children:(0,n.jsx)(d,{...o})}):d(o)}},8453:(o,r,e)=>{e.d(r,{R:()=>p,x:()=>a});var n=e(6540);const t={},s=n.createContext(t);function p(o){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof o?o(r):{...r,...o}}),[r,o])}function a(o){let r;return r=o.disableParentContext?"function"==typeof o.components?o.components(t):o.components||t:p(o.components),n.createElement(s.Provider,{value:r},o.children)}}}]);