"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[147],{2342:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=r(4848),s=r(8453);const o={},a="Add GUI-based monitoring for an existing cluster",i={id:"obd/user-guide/add-white-screen-monitoring",title:"Add GUI-based monitoring for an existing cluster",description:"OceanBase Deployer (OBD) supports the deployment of Prometheus and Grafana since V1.6.0. This topic describes how to add GUI-based monitoring for a deployed cluster.",source:"@site/docs/obd/300.user-guide/500.add-white-screen-monitoring.md",sourceDirName:"obd/300.user-guide",slug:"/obd/user-guide/add-white-screen-monitoring",permalink:"/docs-playground/docs/obd/user-guide/add-white-screen-monitoring",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/obd/300.user-guide/500.add-white-screen-monitoring.md",tags:[],version:"current",sidebarPosition:500,frontMatter:{}},c={},l=[{value:"Scenario 1: OBAgent is not deployed in the cluster",id:"scenario-1-obagent-is-not-deployed-in-the-cluster",level:2},{value:"Scenario 2: OBAgent is deployed in the cluster",id:"scenario-2-obagent-is-deployed-in-the-cluster",level:2},{value:"Scenario 3: Monitor multiple clusters and dynamically synchronize OBAgent changes",id:"scenario-3-monitor-multiple-clusters-and-dynamically-synchronize-obagent-changes",level:2},{value:"Modify the configurations of a monitored cluster",id:"modify-the-configurations-of-a-monitored-cluster",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"add-gui-based-monitoring-for-an-existing-cluster",children:"Add GUI-based monitoring for an existing cluster"}),"\n",(0,t.jsx)(n.p,{children:"OceanBase Deployer (OBD) supports the deployment of Prometheus and Grafana since V1.6.0. This topic describes how to add GUI-based monitoring for a deployed cluster."}),"\n",(0,t.jsx)(n.p,{children:"This topic describes three scenarios. You can refer to the descriptions based on the actual conditions of your cluster."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Note"})}),"\n",(0,t.jsxs)(n.p,{children:["The configuration examples in this topic are for reference only. For more information about the detailed configurations, go to the ",(0,t.jsx)(n.code,{children:"/usr/obd/example"})," directory and view the examples of different components."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"scenario-1-obagent-is-not-deployed-in-the-cluster",children:"Scenario 1: OBAgent is not deployed in the cluster"}),"\n",(0,t.jsx)(n.p,{children:"To add GUI-based monitoring for a cluster in which OBAgent is not deployed, you must create a cluster and deploy OBAgent, Prometheus, and Grafana in the cluster."}),"\n",(0,t.jsx)(n.p,{children:"OBAgent is separately configured for collecting monitoring information of OceanBase Database. It is declared in the configuration file that Prometheus depends on OBAgent and that Grafana depends on Prometheus."}),"\n",(0,t.jsx)(n.p,{children:"Sample configuration file:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"# user:\r\n#   username: your username\r\n#   password: your password if need\r\n#   key_file: your ssh-key file path if need\r\n#   port: your ssh port, default 22\r\n#   timeout: ssh connection timeout (second), default 30\r\nobagent:\r\n  servers:\r\n    # Please don't use hostname, only IP can be supported\r\n    - 192.168.1.2\r\n    - 192.168.1.3\r\n    - 192.168.1.4\r\n  global:\r\n    # The working directory for obagent. obagent is started under this directory. This is a required field.\r\n    home_path: /root/obagent\r\n    # The port that pulls and manages the metrics. The default port number is 8088.\r\n    server_port: 8088\r\n    # Debug port for pprof. The default port number is 8089.\r\n    pprof_port: 8089\r\n    # Log level. The default value is INFO.\r\n    log_level: INFO\r\n    # Log path. The default value is log/monagent.log.\r\n    log_path: log/monagent.log\r\n    # Encryption method. OBD supports aes and plain. The default value is plain.\r\n    crypto_method: plain\r\n    # Path to store the crypto key. The default value is conf/.config_secret.key.\r\n    # crypto_path: conf/.config_secret.key\r\n    # Size for a single log file. Log size is measured in Megabytes. The default value is 30M.\r\n    log_size: 30\r\n    # Expiration time for logs. The default value is 7 days.\r\n    log_expire_day: 7\r\n    # The maximum number for log files. The default value is 10.\r\n    log_file_count: 10\r\n    # Whether to use local time for log files. The default value is true.\r\n    # log_use_localtime: true\r\n    # Whether to enable log compression. The default value is true.\r\n    # log_compress: true\r\n    # Username for HTTP authentication. The default value is admin.\r\n    http_basic_auth_user: ******\r\n    # Password for HTTP authentication. The default value is root.\r\n    http_basic_auth_password: ******\r\n    # Username for debug service. The default value is admin.\r\n    pprof_basic_auth_user: ******\r\n    # Password for debug service. The default value is root.\r\n    pprof_basic_auth_password: ******\r\n    # Monitor username for OceanBase Database. The user must have read access to OceanBase Database as a system tenant. The default value is root.\r\n    monitor_user: root\r\n    # Monitor password for OceanBase Database. The default value is empty. When a depends exists, OBD gets this value from the oceanbase-ce of the depends. The value is the same as the root_password in oceanbase-ce.\r\n    monitor_password:\r\n    # The SQL port for observer. The default value is 2881. When a depends exists, OBD gets this value from the oceanbase-ce of the depends. The value is the same as the mysql_port in oceanbase-ce.\r\n    sql_port: 2881\r\n    # The RPC port for observer. The default value is 2882. When a depends exists, OBD gets this value from the oceanbase-ce of the depends. The value is the same as the rpc_port in oceanbase-ce.\r\n    rpc_port: 2882\r\n    # Cluster name for OceanBase Database. When a depends exists, OBD gets this value from the oceanbase-ce of the depends. The value is the same as the appname in oceanbase-ce.\r\n    cluster_name: obcluster\r\n    # Cluster ID for OceanBase Database. When a depends exists, OBD gets this value from the oceanbase-ce of the depends. The value is the same as the cluster_id in oceanbase-ce.\r\n    cluster_id: 1\r\n    # Monitor status for OceanBase Database.  Active is to enable. Inactive is to disable. The default value is active. When you deploy an cluster automatically, OBD decides whether to enable this parameter based on depends.\r\n    ob_monitor_status: active\r\n    # Monitor status for your host. Active is to enable. Inactive is to disable. The default value is active.\r\n    host_monitor_status: active\r\n    # Whether to disable the basic authentication for HTTP service. True is to disable. False is to enable. The default value is false.\r\n    disable_http_basic_auth: false\r\n    # Whether to disable the basic authentication for the debug interface. True is to disable. False is to enable. The default value is false.\r\n    disable_pprof_basic_auth: false\r\n    # Synchronize the obagent-related information to the specified path of the remote host, as the targets specified by `file_sd_config` in the Prometheus configuration.\r\n    # For prometheus that depends on obagent, it can be specified to $home_path/targets of prometheus.\r\n    # For independently deployed prometheus, specify the files to be collected by setting `config` -> `scrape_configs` -> `file_sd_configs` -> `files`. For details, please refer to prometheus-only-example.yaml.\r\n    # target_sync_configs:\r\n    #   - host: 192.168.1.1\r\n    #     target_dir: /root/prometheus/targets\r\n    #     username: your username\r\n    #     password: your password if need\r\n    #     key_file: your ssh-key file path if need\r\n    #     port: your ssh port, default 22\r\n    #     timeout: ssh connection timeout (second), default 30\r\n  192.168.1.2:\r\n    # Zone name for your observer. The default value is zone1. When a depends exists, OBD gets this value from the oceanbase-ce of the depends. The value is the same as the zone name in oceanbase-ce.\r\n    zone_name: zone1\r\n  192.168.1.3:\r\n    # Zone name for your observer. The default value is zone1. When a depends exists, OBD gets this value from the oceanbase-ce of the depends. The value is the same as the zone name in oceanbase-ce.\r\n    zone_name: zone2\r\n  192.168.1.4:\r\n    # Zone name for your observer. The default value is zone1. When a depends exists, OBD gets this value from the oceanbase-ce of the depends. The value is the same as the zone name in oceanbase-ce.\r\n    zone_name: zone3\r\nprometheus:\r\n  depends:\r\n    - obagent\r\n  servers:\r\n    - 192.168.1.5\r\n  global:\r\n    home_path: /root/prometheus\r\ngrafana:\r\n  depends:\r\n    - prometheus\r\n  servers:\r\n    - 192.168.1.5\r\n  global:\r\n    home_path: /root/grafana\r\n    login_password: oceanbase\n"})}),"\n",(0,t.jsx)(n.p,{children:"After you modify the configuration file, run the following command to deploy and start a new cluster:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"obd cluster deploy <new deploy name> -c new_config.yaml\r\nobd cluster start <new deploy name>\n"})}),"\n",(0,t.jsx)(n.p,{children:"After the cluster is started, go to the Grafana page as prompted. Then, you can view the monitoring information of the existing cluster."}),"\n",(0,t.jsx)(n.h2,{id:"scenario-2-obagent-is-deployed-in-the-cluster",children:"Scenario 2: OBAgent is deployed in the cluster"}),"\n",(0,t.jsx)(n.p,{children:"To add GUI-based monitoring for a cluster in which OBAgent is deployed, you must create a cluster and deploy Prometheus and Grafana in the cluster."}),"\n",(0,t.jsxs)(n.p,{children:["In this scenario, it cannot be declared that Prometheus depends on OBAgent. Therefore, you must manually associate them. Open the ",(0,t.jsx)(n.code,{children:"conf/prometheus_config/prometheus.yaml"})," file in the installation directory of OBAgent in the existing cluster, and copy the corresponding configuration to the ",(0,t.jsx)(n.code,{children:"conifg"})," parameter in the ",(0,t.jsx)(n.code,{children:"global"})," section of the Prometheus settings. Sample configuration file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"# user:\r\n#   username: your username\r\n#   password: your password if need\r\n#   key_file: your ssh-key file path if need\r\n#   port: your ssh port, default 22\r\n#   timeout: ssh connection timeout (second), default 30\r\nprometheus:\r\n  servers:\r\n    - 192.168.1.5\r\n  global:\r\n    # The working directory for prometheus. prometheus is started under this directory. This is a required field.\r\n    home_path: /root/prometheus\r\n    config: # Configuration of the Prometheus service. The format is consistent with the Prometheus config file. Corresponds to the `config.file` parameter.\r\n      global:\r\n        scrape_interval: 1s\r\n        evaluation_interval: 10s\r\n\r\n      rule_files:\r\n        - \"rules/*rules.yaml\"\r\n\r\n      scrape_configs:\r\n        - job_name: prometheus\r\n          metrics_path: /metrics\r\n          scheme: http\r\n          static_configs:\r\n            - targets:\r\n                - 'localhost:9090'\r\n        - job_name: node\r\n          basic_auth:\r\n            username: ******\r\n            password: ******\r\n          metrics_path: /metrics/node/host\r\n          scheme: http\r\n          static_configs:\r\n            - targets:\r\n                - 192.168.1.2:8088\r\n        - job_name: ob_basic\r\n          basic_auth:\r\n            username: ******\r\n            password: ******\r\n          metrics_path: /metrics/ob/basic\r\n          scheme: http\r\n          static_configs:\r\n            - targets:\r\n                - 192.168.1.2:8088\r\n        - job_name: ob_extra\r\n          basic_auth:\r\n            username: ******\r\n            password: ******\r\n          metrics_path: /metrics/ob/extra\r\n          scheme: http\r\n          static_configs:\r\n            - targets:\r\n                - 192.168.1.2:8088\r\n        - job_name: agent\r\n          basic_auth:\r\n            username: ******\r\n            password: ******\r\n          metrics_path: /metrics/stat\r\n          scheme: http\r\n          static_configs:\r\n            - targets:\r\n                - 192.168.1.2:8088\r\ngrafana:\r\n  servers:\r\n    - 192.168.1.5\r\n  depends:\r\n    - prometheus\r\n  global:\r\n    home_path: /root/grafana\r\n    login_password: oceanbase # Grafana login password. The default value is 'oceanbase'.\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Note"})}),"\n",(0,t.jsxs)(n.p,{children:["In the preceding sample configuration file, the username and password of ",(0,t.jsx)(n.code,{children:"basic_auth"})," must be the same as those of ",(0,t.jsx)(n.code,{children:"http_basic_auth_xxx"})," in the configuration file of OBAgent."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"After you modify the configuration file, run the following command to deploy a new cluster:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"obd cluster deploy <new deploy name> -c new_config.yaml\n"})}),"\n",(0,t.jsxs)(n.p,{children:["After the deployment is completed, copy the ",(0,t.jsx)(n.code,{children:"conf/prometheus_config/rules"})," directory in the installation directory of OBAgent to the installation directory of Prometheus."]}),"\n",(0,t.jsx)(n.p,{children:"Run the following command to start the new cluster:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"obd cluster start <new deploy name>\n"})}),"\n",(0,t.jsx)(n.p,{children:"After the cluster is started, go to the Grafana page as prompted. Then, you can view the monitoring information of the existing cluster."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notice"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the monitoring metrics of Prometheus in ",(0,t.jsx)(n.code,{children:"scrape_configs"}),", ",(0,t.jsx)(n.code,{children:"localhost:9090"})," must be modified based on the current listening address of Prometheus. If authentication is enabled for Prometheus, ",(0,t.jsx)(n.code,{children:"basic_auth"})," must be specified. Here the listening address is the address of the server where Prometheus is deployed, namely, the address and port in the Prometheus configurations."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If the OBAgent node of the existing cluster changes, you must run the ",(0,t.jsx)(n.code,{children:"obd cluster edit-config <new deploy name>"})," command to synchronize the content in the ",(0,t.jsx)(n.code,{children:"conf/prometheus_config/prometheus.yaml"})," installation directory of OBAgent."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"scenario-3-monitor-multiple-clusters-and-dynamically-synchronize-obagent-changes",children:"Scenario 3: Monitor multiple clusters and dynamically synchronize OBAgent changes"}),"\n",(0,t.jsx)(n.p,{children:"To enable Prometheus to collect the monitoring information of multiple clusters or dynamically synchronize OBAgent changes, you can make a few changes on the basis of scenario 2."}),"\n",(0,t.jsxs)(n.p,{children:["Specifically, replace ",(0,t.jsx)(n.code,{children:"static_configs"})," in Prometheus configurations with ",(0,t.jsx)(n.code,{children:"file_sd_config"})," to obtain and synchronize the information about the OBAgent node. In the following example, all ",(0,t.jsx)(n.code,{children:".yaml"})," files in the ",(0,t.jsx)(n.code,{children:"targets"})," directory of the installation directory (",(0,t.jsx)(n.code,{children:"home_path"}),") of Prometheus are collected."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Note"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"targets"})," directory will be created in the installation directory of Prometheus only if related parameters are configured for OBAgent in the configuration file of the existing cluster. For more information, see ",(0,t.jsx)(n.a,{href:"#Modify%20the%20configurations%20of%20a%20monitored%20cluster",children:"Modify the configurations of a monitored cluster"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"# user:\r\n#   username: your username\r\n#   password: your password if need\r\n#   key_file: your ssh-key file path if need\r\n#   port: your ssh port, default 22\r\n#   timeout: ssh connection timeout (second), default 30\r\nprometheus:\r\n  servers:\r\n    - 192.168.1.5\r\n  global:\r\n    # The working directory for prometheus. prometheus is started under this directory. This is a required field.\r\n    home_path: /root/prometheus\r\n    config: # Configuration of the Prometheus service. The format is consistent with the Prometheus config file. Corresponds to the `config.file` parameter.\r\n      global:\r\n        scrape_interval: 1s\r\n        evaluation_interval: 10s\r\n\r\n      rule_files:\r\n        - \"rules/*rules.yaml\"\r\n\r\n      scrape_configs:\r\n        - job_name: prometheus\r\n          metrics_path: /metrics\r\n          scheme: http\r\n          static_configs:\r\n            - targets:\r\n                - 'localhost:9090'\r\n        - job_name: node\r\n          basic_auth:\r\n            username: ******\r\n            password: ******\r\n          metrics_path: /metrics/node/host\r\n          scheme: http\r\n          file_sd_configs:\r\n            - files:\r\n              - targets/*.yaml\r\n        - job_name: ob_basic\r\n          basic_auth:\r\n            username: ******\r\n            password: ******\r\n          metrics_path: /metrics/ob/basic\r\n          scheme: http\r\n          file_sd_configs:\r\n            - files:\r\n              - targets/*.yaml\r\n        - job_name: ob_extra\r\n          basic_auth:\r\n            username: ******\r\n            password: ******\r\n          metrics_path: /metrics/ob/extra\r\n          scheme: http\r\n          file_sd_configs:\r\n            - files:\r\n              - targets/*.yaml\r\n        - job_name: agent\r\n          basic_auth:\r\n            username: ******\r\n            password: ******\r\n          metrics_path: /metrics/stat\r\n          scheme: http\r\n          file_sd_configs:\r\n            - files:\r\n              - targets/*.yaml\r\ngrafana:\r\n  servers:\r\n    - 192.168.1.5\r\n  depends:\r\n    - prometheus\r\n  global:\r\n    home_path: /root/grafana\r\n    login_password: oceanbase # Grafana login password. The default value is 'oceanbase'.\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Note"})}),"\n",(0,t.jsxs)(n.p,{children:["In the preceding sample configuration file, the username and password of ",(0,t.jsx)(n.code,{children:"basic_auth"})," must be the same as those of ",(0,t.jsx)(n.code,{children:"http_basic_auth_xxx"})," in the configuration file of OBAgent."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"After you modify the configuration file, run the following command to deploy a new cluster:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"obd cluster deploy <new deploy name> -c new_config.yaml\n"})}),"\n",(0,t.jsxs)(n.p,{children:["After the deployment is completed, copy the ",(0,t.jsx)(n.code,{children:"conf/prometheus_config/rules"})," directory in the installation directory of OBAgent to the installation directory of Prometheus."]}),"\n",(0,t.jsx)(n.p,{children:"Run the following command to start the new cluster:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"obd cluster start <new deploy name>\n"})}),"\n",(0,t.jsx)(n.p,{children:"After you deploy the new cluster, go to the Grafana page as prompted. At this time, you cannot view the monitoring information of monitored clusters. You must modify the OBAgent configurations of the monitored clusters."}),"\n",(0,t.jsx)(n.h3,{id:"modify-the-configurations-of-a-monitored-cluster",children:"Modify the configurations of a monitored cluster"}),"\n",(0,t.jsxs)(n.p,{children:["To create the ",(0,t.jsx)(n.code,{children:"targets"})," directory in the installation directory of Prometheus, you must run the ",(0,t.jsx)(n.code,{children:"obd cluster edit-config <deploy name>"})," command to modify the configuration file. Specifically, you must add the ",(0,t.jsx)(n.code,{children:"target_sync_configs"})," parameter to the configuration file to point to the ",(0,t.jsx)(n.code,{children:"targets"})," directory in the installation directory of Prometheus. By default, the user settings of the current cluster are used. If the user settings on the server where Prometheus is installed are inconsistent with the user settings in the configuration file of the current cluster, perform configuration based on the example."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"obagent:\r\n  servers:\r\n    # Please don't use hostname, only IP can be supported\r\n    - 192.168.1.2\r\n    - 192.168.1.3\r\n    - 192.168.1.4\r\n  global:\r\n    ...\r\n    target_sync_configs:\r\n      - host: 192.168.1.5\r\n        target_dir: /root/prometheus/targets\r\n    #    username: your username\r\n    #    password: your password if need\r\n    #    key_file: your ssh-key file path if need\r\n    #    port: your ssh port, default 22\r\n    #    timeout: ssh connection timeout (second), default 30\r\n    ...\n"})}),"\n",(0,t.jsx)(n.p,{children:"After you modify the configuration file, restart the cluster as prompted. Then, go to the Grafana page and view the monitoring information of the existing cluster."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notice"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the monitoring metrics of Prometheus in ",(0,t.jsx)(n.code,{children:"scrape_configs"}),", ",(0,t.jsx)(n.code,{children:"localhost:9090"})," must be modified based on the current listening address of Prometheus. If authentication is enabled for Prometheus, ",(0,t.jsx)(n.code,{children:"basic_auth"})," must be specified. Here the listening address is the address of the server where Prometheus is deployed, namely, the address and port in the Prometheus configurations."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The HTTP usernames and passwords that are collected by Prometheus must be consistent for all OBAgents. For any inconsistency, split the collection metrics."}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>i});var t=r(6540);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);