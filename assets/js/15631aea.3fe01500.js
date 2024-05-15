"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[2612],{9110:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=n(4848),a=n(8453);const o={},r="Restore data from a backup",c={id:"ob-operator/ob-operator-user-guide/high-availability/data-recovery-of-ob-operator",title:"Restore data from a backup",description:"This topic describes how to restore data from a backup. OBTenant and OBTenantRestore resources are important to data restore from a backup. You must use parameters in the spec.source section in the configuration file of the OBTenant resource to specify the tenant restore source. When the specified parameters take effect, ob-operator creates the OBTenantRestore resources required to execute restore jobs.",source:"@site/docs/ob-operator/500.ob-operator-user-guide/300.high-availability/500.data-recovery-of-ob-operator.md",sourceDirName:"ob-operator/500.ob-operator-user-guide/300.high-availability",slug:"/ob-operator/ob-operator-user-guide/high-availability/data-recovery-of-ob-operator",permalink:"/docs-playground/docs/ob-operator/ob-operator-user-guide/high-availability/data-recovery-of-ob-operator",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ob-operator/500.ob-operator-user-guide/300.high-availability/500.data-recovery-of-ob-operator.md",tags:[],version:"current",sidebarPosition:500,frontMatter:{}},i={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration file for restoring data",id:"configuration-file-for-restoring-data",level:2},{value:"Example",id:"example",level:2},{value:"Initiate a data restore job",id:"initiate-a-data-restore-job",level:3},{value:"View the data restore status",id:"view-the-data-restore-status",level:3},{value:"Check whether the tenant is restored",id:"check-whether-the-tenant-is-restored",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"restore-data-from-a-backup",children:"Restore data from a backup"}),"\n",(0,s.jsxs)(t.p,{children:["This topic describes how to restore data from a backup. OBTenant and OBTenantRestore resources are important to data restore from a backup. You must use parameters in the ",(0,s.jsx)(t.code,{children:"spec.source"})," section in the configuration file of the OBTenant resource to specify the tenant restore source. When the specified parameters take effect, ob-operator creates the OBTenantRestore resources required to execute restore jobs."]}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Data has been backed up and can be restored."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"The cluster is running properly and the available resources are sufficient to create a recovery tenant."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"If the restore source is a Network File System (NFS) volume, make sure that the volume mounted to the OceanBase cluster can be accessed."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"configuration-file-for-restoring-data",children:"Configuration file for restoring data"}),"\n",(0,s.jsx)(t.p,{children:"You can use the configuration file to define tenant resources required for restoring data:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",metastring:"tenant_restore.yaml",children:'apiVersion: oceanbase.oceanbase.com/v1alpha1  \nkind: OBTenant  \nmetadata:  \n  name: t1s\n  # namespace: oceanbase\nspec:\n  obcluster: obcluster\n  tenantName: t1s\n  unitNum: 1\n  tenantRole: STANDBY\n  source:\n    restore:\n      bakDataSource:\n        # type: "NFS"\n        # path: "t1/dataBackup"\n        type: "OSS"\n        path: "oss://bucket/backup?host=oss-cn-hangzhou.aliyuncs.com"\n        ossAccessSecret: "oss-access"\n      archiveSource:\n        # type: "NFS"\n        # path: "t1/logArchive"\n        type: "OSS"\n        path: "oss://bucket/archive?host=oss-cn-hangzhou.aliyuncs.com"\n        ossAccessSecret: "oss-access"\n      until:\n        unlimited: true\n      replayLogUntil:\n        unlimited: true\n    tenant: t1\n  fields: values\n'})}),"\n",(0,s.jsx)(t.p,{children:"The parameters are described as follows:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["tenantRole: the role of the tenant to be created. Valid values are ",(0,s.jsx)(t.code,{children:"PRIMARY"})," and ",(0,s.jsx)(t.code,{children:"STANDBY"}),", which represent the primary and standby tenants, respectively. The default value is ",(0,s.jsx)(t.code,{children:"PRIMARY"}),". For more information about standby tenants and physical standby databases, see ",(0,s.jsx)(t.a,{href:"/docs-playground/docs/ob-operator/ob-operator-user-guide/high-availability/standby-tenant-of-ob-operator",children:"Physical standby database"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["source: the source of tenant data.","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["restore: the source of the backup data for restore.","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"bakDataSource: the path to the source of the backup data for restore. The data restore source is the same as the data backup destination."}),"\n",(0,s.jsx)(t.li,{children:"archiveSource: the path to the source of archived logs for restore. The log restore source is the same as the log archiving destination."}),"\n",(0,s.jsxs)(t.li,{children:["until: the checkpoint to which the data is to be restored.","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"unlimited: specifies whether to restore data to the latest checkpoint."}),"\n",(0,s.jsxs)(t.li,{children:["timestamp: the timestamp, in the ",(0,s.jsx)(t.code,{children:"YYYY-MM-DD HH:mm:ss"})," format, to which you want to restore data. For example, ",(0,s.jsx)(t.code,{children:"2023-11-10 09:00:00"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"scn: the system change number (SCN) to which the data is restored."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["replayLogUntil: the checkpoint to which the logs of the primary tenant are replayed after data restore. This parameter takes effect only if the standby tenant is restored and the ",(0,s.jsx)(t.code,{children:"unlimited"})," parameter is not specified. You can specify this parameter as a supplement to the ",(0,s.jsx)(t.code,{children:"until"})," parameter by using the same configuration method."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"tenant: the name of the primary tenant. This parameter takes effect only if the standby tenant is restored."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"The configuration of other parameters is the same as that of a normal tenant."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.h3,{id:"initiate-a-data-restore-job",children:"Initiate a data restore job"}),"\n",(0,s.jsx)(t.p,{children:"Run the following command to restore data to a tenant."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"kubectl apply -f tenant_restore.yaml\n"})}),"\n",(0,s.jsx)(t.h3,{id:"view-the-data-restore-status",children:"View the data restore status"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Run the following command to view the status of the tenant to be restored."}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"kubectl get obtenants.oceanbase.oceanbase.com -n oceanbase\n"})}),"\n",(0,s.jsx)(t.p,{children:"The command output is as follows:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"NAME   STATUS      TENANTNAME   TENANTROLE   CLUSTERNAME   AGE\nt1s    restoring   t1s          STANDBY      obcluster     27s\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Run the following command to view the created tenant restore job."}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"kubectl get obtenantrestores.oceanbase.oceanbase.com -n oceanbase\n"})}),"\n",(0,s.jsx)(t.p,{children:"The command output is as follows:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"NAME          STATUS    AGE    TARGETTENANT   TARGETCLUSTER   RESTOREROLE   STATUSINDB\nt1s-restore   RUNNING   113s   t1s            obcluster       STANDBY       WAIT_TENANT_RESTORE_FINISH\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Run the following command to view details of the tenant restore job:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"kubectl describe obtenantrestores.oceanbase.oceanbase.com -n oceanbase\n"})}),"\n",(0,s.jsx)(t.p,{children:"The command output is as follows:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"Name:         t1s-restore\nNamespace:    oceanbase\nLabels:       oceanbase.oceanbase.com/tenant-name=t1s\n            ref-obcluster=obcluster\n            ref-uid=b9317541-6566-4ac0-84fb-9a4c6fca03ba\nAnnotations:  <none>\nAPI Version:  oceanbase.oceanbase.com/v1alpha1\nKind:         OBTenantRestore\nMetadata:\nCreation Timestamp:  2023-11-13T03:13:26Z\nGeneration:          1\nOwner References:\n  API Version:           oceanbase.oceanbase.com/v1alpha1\n  Block Owner Deletion:  true\n  Kind:                  OBTenant\n  Name:                  t1s\n  UID:                   b9317541-6566-4ac0-84fb-9a4c6fca03ba\nResource Version:        927784\nUID:                     e439a060-9758-4074-a170-661d3e23a836\nSpec:\nPrimary Tenant:  t1\nRestore Option:  pool_list=pool_t1s_zone1&primary_zone=zone1;&locality=FULL{1}@zone1\nRestore Role:    STANDBY\nSource:\n  Archive Source:\n    Oss Access Secret:  oss-access\n    Path:               oss://bucket/archive?host=oss-cn-hangzhou.aliyuncs.com\n    Type:               OSS\n  Bak Data Source:\n    Oss Access Secret:  oss-access\n    Path:               oss://bucket/backup?host=oss-cn-hangzhou.aliyuncs.com\n    Type:               OSS\n  Replay Log Until:\n    Unlimited:  true\n  Until:\n    Unlimited:   true\nTarget Cluster:  obcluster\nTarget Tenant:   t1s\nStatus:\nRestore Progress:\n  backup_cluster_name:     obcluster\n  backup_cluster_version:  \n  backup_dest:             oss://bucket/backup?host=oss-cn-hangzhou.aliyuncs.com&access_id=xxx&access_key=yyy,oss://bucket/archive?host=oss-cn-hangzhou.aliyuncs.com&access_id=xxx&access_key=yyy\n  backup_piece_list:       oss://bucket/archive/piece_d1005r10p10?host=oss-cn-hangzhou.aliyuncs.com&access_id=xxx&access_key=yyy\n  backup_set_list:         oss://bucket/backup/backup_set_25_full?host=oss-cn-hangzhou.aliyuncs.com&access_id=xxx&access_key=yyy,oss://bucket/backup/backup_set_26_inc?host=oss-cn-hangzhou.aliyuncs.com&access_id=xxx&access_key=yyy\n  backup_tenant_id:        1016\n  backup_tenant_name:      t1\n  Description:             \n  finish_ls_count:         0\n  finish_tablet_count:     0\n  finish_timestamp:        \n  job_id:                  5\n  ls_count:                0\n  restore_option:          pool_list=pool_t1s_zone1&primary_zone=zone1;&locality=FULL{1}@zone1\n  restore_scn:             1697098764718466986\n  restore_scn_display:     2023-10-12 16:19:24.718466\n  restore_tenant_id:       1004\n  restore_tenant_name:     t1s\n  start_timestamp:         2023-11-13 11:13:46.220513\n  Status:                  WAIT_TENANT_RESTORE_FINISH\n  tablet_count:            0\n  tenant_id:               1\nStatus:                    RUNNING\nEvents:                      <none>\n"})}),"\n",(0,s.jsx)(t.h2,{id:"check-whether-the-tenant-is-restored",children:"Check whether the tenant is restored"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Connect to the sys tenant."}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"mysql -h$(kubectl get pods -l ref-obcluster=test -o jsonpath='{.items[0].status.podIP}') -P2881 -uroot oceanbase -A -c\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Check whether the target tenant is restored."}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"select * from DBA_OB_TENANTS;\n"})})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var s=n(6540);const a={},o=s.createContext(a);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);