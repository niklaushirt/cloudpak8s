(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{PMMY:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return o}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i={},c={_frontmatter:i},b=r.a;function o(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(b,l({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Overview"),Object(n.b)("h3",null,"Prerequisites"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"OCP 4.0+"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Install CLI Tools")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Helm CLI"),Object(n.b)("li",{parentName:"ul"},"Kubernetes CLI"),Object(n.b)("li",{parentName:"ul"},"IBM Cloud Pak CLI")),Object(n.b)("p",{parentName:"li"},"For CLI install help, check out the Knowledge Center guides ",Object(n.b)("a",{href:"https://www.ibm.com/support/knowledgecenter/en/SSFC4F_1.2.0/cli/cli_guide_mcm.html"},"here"),"."))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"/content/mcm/cp4mcm_mcm_install/"}),"Install MCM")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Install Service Catalog")," (Required for OCP 4.0+. See install ",Object(n.b)("a",{href:"https://docs.openshift.com/container-platform/4.2/applications/service_brokers/installing-service-catalog.html"},"here"),")")),Object(n.b)("h2",null,"Online Installation"),Object(n.b)("h2",null,"Offline Installation"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Download the installer file from Passport Advantage (PPA):")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:"center"}),"File Name"),Object(n.b)("th",l({parentName:"tr"},{align:"left"}),"Part Number"),Object(n.b)("th",l({parentName:"tr"},{align:"left"}),"Version"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:"center"}),"icp-cam-x86_64-4.1.tar.gz"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"CC4E1EN"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"1.2")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:"center"}),"IBM_CLOUD_AUTO_MGR_4.2_Lnx.tar.gz"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"CC5QFEN"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"1.3")))),Object(n.b)("ol",{start:2},Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Create SCC policy"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",l({parentName:"pre"},{}),"oc adm policy add-scc-to-user ibm-anyuid-hostpath-scc system:serviceaccount:services:default\n")),Object(n.b)("p",{parentName:"li"},Object(n.b)("em",{parentName:"p"},"Note"),": Persistent volumes with RWX mode is needed for Cloud Automation Manager. Visit ",Object(n.b)("a",{href:"https://www.ibm.com/support/knowledgecenter/SS2L37_4.1.0.0/cam_create_pv.html"},"here")," for more information.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Generate a deployment ServiceID API Key in the ",Object(n.b)("inlineCode",{parentName:"p"},"services")," namespace using the following commands:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",l({parentName:"pre"},{}),"export serviceIDName='service-deploy'\nexport serviceApiKeyName='service-deploy-api-key'\ncloudctl login -a <ibm_cloud_pak_mcm_console_url> --skip-ssl-validation -u admin -p <ibm_cloud_pak_mcm_admin_password> -n services\ncloudctl iam service-id-create ${serviceIDName} -d 'Service ID for service-deploy'\ncloudctl iam service-policy-create ${serviceIDName} -r Administrator,ClusterAdministrator --service-name 'idmgmt'\ncloudctl iam service-policy-create ${serviceIDName} -r Administrator,ClusterAdministrator --service-name 'identity'\ncloudctl iam service-api-key-create ${serviceApiKeyName} ${serviceIDName} -d 'Api key for service-deploy'\n")),Object(n.b)("p",{parentName:"li"},"The output with the API Key should look something like this:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",l({parentName:"pre"},{}),"Name          service-deploy-api-key\nDescription   Api key for service-deploy\nBound To      crn:v1:icp:private:iam-identity:mycluster:n/services::serviceid:ServiceId-163c213a-37f5-4f8b-8a3c-2fd7b3887a4f\nCreated At    2020-01-22T14:46+0000\nAPI Key       <API KEY HERE>\n")),Object(n.b)("p",{parentName:"li"},"Save the API Key for use during install configuration in Step 5b.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Load the PPA Archive using ",Object(n.b)("inlineCode",{parentName:"p"},"cloudctl")," assuming you already logged in from the previous command"),Object(n.b)("p",{parentName:"li"},"Run the following commands with a user with Cluster Admin access:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",l({parentName:"pre"},{}),"docker login -u $(oc whoami) -p $(oc whoami -t) $(oc registry info)\ncloudctl catalog load-archive --archive <archive-name> --registry $(oc registry info)/services\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Sync CAM Helm Charts"))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Login to MCM UI and sync helm repositories;  Go to ",Object(n.b)("strong",{parentName:"li"},"Administer")," > ",Object(n.b)("strong",{parentName:"li"},"Helm repository")),Object(n.b)("li",{parentName:"ul"},"Click ",Object(n.b)("strong",{parentName:"li"},"Sync All")," in the upper-right corner")),Object(n.b)("ol",{start:6},Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Configure and Install CAM")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"In upper right-hand corner, click the ",Object(n.b)("strong",{parentName:"p"},"Catalog")," icon")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Search for ",Object(n.b)("inlineCode",{parentName:"p"},"ibm-cam")," and click the chart from the ",Object(n.b)("inlineCode",{parentName:"p"},"local-helm")," repository")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Click ",Object(n.b)("strong",{parentName:"p"},"Configure")," in the bottom-right, or click the ",Object(n.b)("strong",{parentName:"p"},"Configuration")," tab")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Enter the following install parameters:"))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Release name")," - Enter ",Object(n.b)("inlineCode",{parentName:"p"},"cam")," in release name.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Target namespace")," - From the drop down list, select ",Object(n.b)("inlineCode",{parentName:"p"},"services"),".")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Select ",Object(n.b)("strong",{parentName:"p"},"I have read and agreed to license agreements")," to accept the license agreements.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Expand ",Object(n.b)("strong",{parentName:"p"},"Parameters")," > ",Object(n.b)("strong",{parentName:"p"},"All Parameters")," section")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Worker node architecture")," - select amd64")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Docker image pull secret"),": for offline installation, set to ",Object(n.b)("em",{parentName:"p"},"default"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Product Identifier")," - Enter ",Object(n.b)("inlineCode",{parentName:"p"},"IBMCloudAutomationManager_5737E67_4100_EE_000")," (v1.2) or  ",Object(n.b)("inlineCode",{parentName:"p"},"IBMCloudAutomationManager_5737E67_4200_EE_000")," (v1.3)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"IAM Service API Key")," - Enter the IAM service API Key you created earlier")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Optionally, select ",Object(n.b)("strong",{parentName:"p"},"Optimize the installation for offline")," to optimize the installation for offline. For example, skip internet access to import public starter templates from github.com on the public internet during the installation.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Optionally, select ",Object(n.b)("strong",{parentName:"p"},"Enable audit")," to enable the audit for actions in Cloud Automation Manager. It requires the management logging service to be installed. For installing the Cloud Automation Manager on IBM Multicloud Manager 3.2.1, select ",Object(n.b)("inlineCode",{parentName:"p"},"Enable legacy audit"),". For installing the Cloud Automation Manager on IBM Multicloud Manager 3.2.x or higher, select ",Object(n.b)("inlineCode",{parentName:"p"},"ICP32"),". For audit related installation parameters, see ",Object(n.b)("a",l({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SS2L37_4.1.0.0/cam_installation_parameters.html?view=kc"}),"Installation parameters"),".")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Optionally, select ",Object(n.b)("strong",{parentName:"p"},"Enable FIPS for CAM")," to enable FIPS.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Under ",Object(n.b)("strong",{parentName:"p"},"IBM Cloud Private")," > ",Object(n.b)("strong",{parentName:"p"},"Port"),", enter port value 443, or choose your own port")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Under ",Object(n.b)("strong",{parentName:"p"},"Image"),", set Repository value to ",Object(n.b)("inlineCode",{parentName:"p"},"image-registry.openshift-image-registry.svc:5000/services/"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"If using Dynamic Storage, Check ",Object(n.b)("strong",{parentName:"p"},"Enable Dynamic Provisioning")," and set your Storage Class Name. Repeat for each volume. Note that the Storage Class must support RWM mode"),Object(n.b)("p",{parentName:"li"},"Click ",Object(n.b)("strong",{parentName:"p"},"Install")))),Object(n.b)("ol",{start:5},Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Confirm Installation"),Object(n.b)("p",{parentName:"li"},"Monitor your install with"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",l({parentName:"pre"},{}),"watch oc get pods\n")),Object(n.b)("p",{parentName:"li"}," You should see something like this:"),Object(n.b)("img",l({parentName:"li"},{src:"/assets/img/cp4mcm/cam_install_pods.png",alt:"CAM Install Pods"})),Object(n.b)("p",{parentName:"li"},"Once completed, access CAM in a browser using the url from"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",l({parentName:"pre"},{}),"oc get routes\n")))),Object(n.b)("h2",null,"Additional Resources"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{href:"https://www.ibm.com/support/knowledgecenter/SS2L37_4.1.0.0/cam_prereq.html"},"Knowledge Center - CAM Prerequisites")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{href:"https://www.ibm.com/support/knowledgecenter/SS2L37_4.1.0.0/cam_install_offline_icpos.html"},"Knowledge Center - CAM Offline Installation Guide"))))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-mcm-cp-4-mcm-cam-install-index-mdx-0fc8399848eddbc20ee8.js.map