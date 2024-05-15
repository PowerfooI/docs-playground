"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[7015],{4038:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var t=o(4848),s=o(8453);const a={},r="Configuration file description",i={id:"obd/configuration-file-description",title:"Configuration file description",description:"The configuration file in OBD has a fixed format. The following example shows what each module in the configuration file means.",source:"@site/docs/obd/400.configuration-file-description.md",sourceDirName:"obd",slug:"/obd/configuration-file-description",permalink:"/docs-playground/docs/obd/configuration-file-description",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/obd/400.configuration-file-description.md",tags:[],version:"current",sidebarPosition:400,frontMatter:{}},c={},l=[];function h(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"configuration-file-description",children:"Configuration file description"}),"\n",(0,t.jsx)(n.p,{children:"The configuration file in OBD has a fixed format. The following example shows what each module in the configuration file means."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'# Only need to configure when remote login is required\nuser:   # The SSH login configuration.\n  username: your username\n  password: your password if need\n  key_file: your ssh-key file path if need\n  port: your ssh port, default 22\n  timeout: ssh connection timeout (second), default 30\noceanbase-ce:  # The name of the component that is configured as follows.\n  # version: 3.1.3    # Specify the version of the component, which is usually not required. \n  # package_hash: 589c4f8ed2662835148a95d5c1b46a07e36c2d346804791364a757aef4f7b60d  # Specify the hash of the component, which is usually not required. \n  # tag: dev    # Specify the tag of the component, which is usually not required. \n  servers:  # The list of nodes.\n    - name: z1  # The node name,  which can be left blank. The default node name is the same as the IP address if this name is left blank. The node name is z1 in this example.\n      # Please don\'t use hostname, only IP can be supported\n      ip: 192.168.1.2\n    - name: z2\n      ip: 192.168.1.3\n    - name: z3\n      ip: 192.168.1.4\n  global:  # The global configuration. The identical configuration in the same component can be written here.\n           # The node configuration is used if it has the same configuration item as the global configuration.\n    # Please set devname as the network adaptor\'s name whose ip is in the setting of severs.\n    # if set severs as "127.0.0.1", please set devname as "lo"\n    # if current ip is 192.168.1.10, and the ip\'s network adaptor\'s name is "eth0", please use "eth0"\n    devname: eth0\n    # if current hardware\'s memory capacity is smaller than 50G, please use the setting of "mini-single-example.yaml" and do a small adjustment.\n    memory_limit: 64G\n    datafile_disk_percentage: 20\n    syslog_level: INFO\n    enable_syslog_wf: false\n    enable_syslog_recycle: true\n    max_syslog_file_count: 4\n    cluster_id: 1\n    # observer cluster name, consistent with obproxy\'s cluster_name    \n    appname: obcluster\n    # root_password: # root user password, can be empty\n    # proxyro_password: # proxyro user pasword, consistent with obproxy\'s observer_sys_password, can be empty\n  # In this example, support multiple ob process in single node, so different process use different ports.\n  # If deploy ob cluster in multiple nodes, the port and path setting can be same.\n  z1:  # The node configuration. Here is the configuration of the z1 node, that is, the 192.168.1.2 server. The priority of node configuration is the highest.\n    mysql_port: 2881 # External port for OceanBase Database. The default value is 2881.\n    rpc_port: 2882 # Internal port for OceanBase Database. The default value is 2882.\n    #  The working directory for OceanBase Database. OceanBase Database is started under this directory. This is a required field.\n    home_path: /root/observer\n    zone: zone1\n  z2:  # The node configuration. Here is the configuration of the z2 node, that is, the 192.168.1.3 server.\n    mysql_port: 2881 # External port for OceanBase Database. The default value is 2881.\n    rpc_port: 2882 # Internal port for OceanBase Database. The default value is 2882.\n    #  The working directory for OceanBase Database. OceanBase Database is started under this directory. This is a required field.\n    home_path: /root/observer\n    zone: zone2\n  z3:   # The node configuration. Here is the configuration of the z3 node, that is, 192.168.1.4 server.\n    mysql_port: 2881 # External port for OceanBase Database. The default value is 2881.\n    rpc_port: 2882 # Internal port for OceanBase Database. The default value is 2882.\n    #  The working directory for OceanBase Database. OceanBase Database is started under this directory. This is a required field.\n    home_path: /root/observer\n    zone: zone3\nobproxy-ce:  # The name of the component that is configured as follows.\n  # version: 3.2.3    # Specify the version of the component, which is usually not required.\n  # package_hash: 73cccf4d05508de0950ad1164aec03003c4ddbe1415530e031ac8b6469815fea  # Specify the hash of the component, which is usually not required. \n  # tag: dev    # Specify the tag of the component, which is usually not required. \n  servers:\n    - 192.168.1.5\n  global:\n    listen_port: 2883 # External port. The default value is 2883.\n    prometheus_listen_port: 2884 # The Prometheus port. The default value is 2884.\n    home_path: /root/obproxy\n    # oceanbase root server list\n    # format: ip:mysql_port;ip:mysql_port\n    rs_list: 192.168.1.2:2881;192.168.1.3:2881;192.168.1.4:2881\n    enable_cluster_checkout: false\n    # observer cluster name, consistent with oceanbase-ce\'s appname\n    cluster_name: obcluster\n    # obproxy_sys_password: # obproxy sys user password, can be empty\n    # observer_sys_password: # proxyro user pasword, consistent with oceanbase-ce\'s proxyro_password, can be empty\n'})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>i});var t=o(6540);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);