(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{F8N8:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return d}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),o=a("013z");a("qKvR");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r,i={},c=(r="InlineNotification",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),l={_frontmatter:i},b=o.a;function d(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(b,s({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Scalability Overview"),Object(n.b)("p",null,"One of the major advantages of a cloud platform such as Open Shift Container Platform is the capability to scale up resources to deal with additional load and to scale down to conserve resources when there is less load.\nIn this document we will detail some of the tasks relevant to scalability in OpenShift."),Object(n.b)("p",null,"In practice, make sure to test the scalability capabilities of your infrastructure and ensure that your procedures are suitable. For example, attempt to roll out additional nodes gradually and don’t burst out with hundreds of new nodes simultaneously. This will needlessly strain the provisioning capabilties of your infrastructure and you may hit rate-limits set by your cloud provider."),Object(n.b)("p",null,"Additionally, take into account the actual availability zones your clusters require - don’t perform all your scaling in one physical location."),Object(n.b)("p",null,"In this document, we will focus on the Master Nodes scalability and Worker Nodes scalability.  "),Object(n.b)("p",null,"Note that there are two basic patterns to deploy OpenShift infrastructure:  "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"User Provisioned Infrastructure (UPI) is when the resources are provisioned externally and OpenShift uses them."),Object(n.b)("li",{parentName:"ul"},"Installer Provisioned Infrastructure (IPI) is when the OpenShift installer programmatically creates the resources.\nThe choice between UPI and IPI is done as part of the overall OpenShift architecture during Day 0 planning.")),Object(n.b)("h2",null,"Day 1 Platform"),Object(n.b)("p",null,"Care must be taken during the initial design and deployment of the OpenShift cluster to allow the cluster to expand. For example, set the cluster classless inter-domain routing (CIDR) to be large enough to accept the number of nodes you expect to grow into."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Day 1 Operations tasks for Scalability:")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"#set-the-cluster-network-cidr"}),"Set the cluster network CIDR")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"#set-the-pod-capacity-of-nodes"}),"Set the pod capacity of Nodes"))),Object(n.b)("h2",null,"Day 2 Platform"),Object(n.b)("p",null,"During regular Day 2 operations the cluster may scale up, based on ",Object(n.b)("a",s({parentName:"p"},{href:"../Capacity"}),"Capacity")," requirements."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"#add-worker-nodes"}),"Add Worker Nodes")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"#add-worker-nodes-manually"}),"Add Worker Nodes Manually")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"#add-master-nodes"}),"Add Master Nodes"))),Object(n.b)("h2",null,"Day 1 Application"),Object(n.b)("p",null,"For the purposes of this section, scaling the application is considered to be part of application management and deployment and is not covered here, but in ",Object(n.b)("a",s({parentName:"p"},{href:"../BuildDeploy"}),"Build & Deploy"),"."),Object(n.b)("h2",null,"Day 2 Application"),Object(n.b)("p",null,"For the purposes of this section, scaling the application is considered to be part of application management and deployment and is not covered here, but in ",Object(n.b)("a",s({parentName:"p"},{href:"../BuildDeploy"}),"Build & Deploy"),"."),Object(n.b)("h2",null,"Mapping to Personas"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",s({parentName:"tr"},{align:null}),"Persona"),Object(n.b)("th",s({parentName:"tr"},{align:null}),"Task"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),"SRE"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Set the cluster network CIDR")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),"SRE"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Set the pod capacity of Nodes")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),"SRE"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Add Worker Nodes")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),"SRE"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Add Worker Nodes Manually")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),"SRE"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Add Master Nodes")))),Object(n.b)("a",{name:"set-the-cluster-network-cidr"}),Object(n.b)("h2",null,"Set the cluster network CIDR"),Object(n.b)("p",null,"The ",Object(n.b)("a",s({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing"}),"CIDR")," setting defines the maximum size of the overall OpenShift network."),Object(n.b)(c,{mdxType:"InlineNotification"},"The default clusterNetwork cidr 10.128.0.0/14 cannot be used if the cluster size is more than 500 nodes. It must be set to 10.128.0.0/12 or 10.128.0.0/10 to get to larger node counts beyond 500 nodes."),Object(n.b)("p",null,"More information can be found in the ",Object(n.b)("a",s({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/scalability_and_performance/recommended-install-practices.html"}),"OpenShift 4.3 documentation"),"."),Object(n.b)("a",{name:"set-the-pod-capacity-of-nodes"}),Object(n.b)("h2",null,"Set the pod capacity of Nodes"),Object(n.b)(c,{mdxType:"InlineNotification"},"The OpenShift Container Platform node configuration file contains important options. For example, two parameters control the maximum number of pods that can be scheduled to a node: podsPerCore and maxPods."),Object(n.b)("p",null,"In Kubernetes, a pod that is holding a single container actually uses two containers. The second container is used to set up networking prior to the actual container starting. Therefore, a system running 10 pods will actually have 20 containers running."),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"maxPods")," sets the number of pods the node can run to a fixed value, regardless of the properties of the node."),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"podsPerCore")," sets the number of pods the node can run based on the number of processor cores on the node."),Object(n.b)("p",null,"Setting podsPerCore to 0 disables this limit. The default is 0. podsPerCore cannot exceed maxPods."),Object(n.b)("p",null,"When both options are in use, the lower of the two values limits the number of pods on a node. "),Object(n.b)("p",null,"More information about configuring these settings can be found in the ",Object(n.b)("a",s({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/scalability_and_performance/recommended-host-practices.html#recommended-node-host-practices_"}),"OpenShift 4.3 documentation"),"."),Object(n.b)("a",{name:"add-worker-nodes"}),Object(n.b)("h2",null,"Add Worker Nodes"),Object(n.b)("p",null,"To manage high volume workload with your applications, the OpenShift can be scaled by adding more worker nodes manually or by the AutoScaler.  There are two ways to add worker nodes; 1). adding worker nodes manually or 2). adding worker node by AutoScaler. We will talk about those ways. You also would like to understand that there will be different ways to add worker node manually. It depends on how you create you cluster environment. We will discuss several cases such as a). Cluster in IPI (AWS, Azure, GCP), b). Cluster in UPI (VMware and Bere Metal), and c). Cluster in IBM Cloud.  "),Object(n.b)("a",{name:"add-worker-nodes-manually"}),Object(n.b)("h3",null,"Add Worker Nodes manually"),Object(n.b)("p",null,"We will start discussing how to add worker nodes manually.  As mentioned, the steps will be different depends on the cluster environment.  We will cover 3 scenarios such as AWS for IPI, VMware for UPI, and IBM Cloud.  "),Object(n.b)("h3",null,"Add Worker Nodes in IPI (AWS, Azure)"),Object(n.b)("p",null,"To add worker nodes in IPI, you would need to know about the resources ",Object(n.b)("strong",{parentName:"p"},"Machine")," and ",Object(n.b)("strong",{parentName:"p"},"MachineSet"),". It is based on the Kubernets Cluster API.  You can find the information about the Cluster API in the following URL."),Object(n.b)("p",null,"Kubernetes Cluster API:",Object(n.b)("br",{parentName:"p"}),"\n",Object(n.b)("a",s({parentName:"p"},{href:"https://github.com/kubernetes-sigs/cluster-api"}),"https://github.com/kubernetes-sigs/cluster-api"),"   "),Object(n.b)("h3",null,"The Machine resource"),Object(n.b)("p",null,"The Machine is the resource which describes the status of nodes.\nWhen you deploy your cluster in IPI, the Installer automatically creates the Machine resource for the Master and Worker nodes."),Object(n.b)("p",null,"Run the ",Object(n.b)("inlineCode",{parentName:"p"},"oc get machines")," command to obtain the Machine resource information. You need to be a user which has cluster admin permission."),Object(n.b)("pre",null,Object(n.b)("code",s({parentName:"pre"},{}),"$ oc get machines -n openshift-machine-api\nNAME                                     STATE     TYPE        REGION      ZONE         AGE\ncsmo1aws-fsdjv-master-0                  running   m4.xlarge   us-west-1   us-west-1b   43h\ncsmo1aws-fsdjv-master-1                  running   m4.xlarge   us-west-1   us-west-1c   43h\ncsmo1aws-fsdjv-master-2                  running   m4.xlarge   us-west-1   us-west-1b   43h\ncsmo1aws-fsdjv-worker-us-west-1b-mkdqf   running   m4.large    us-west-1   us-west-1b   43h\ncsmo1aws-fsdjv-worker-us-west-1b-p24nk   running   m4.large    us-west-1   us-west-1b   43h\ncsmo1aws-fsdjv-worker-us-west-1c-pm2bj   running   m4.large    us-west-1   us-west-1c   43h\n$ \n")),Object(n.b)("p",null,"The Machine is defined as the resource in the Machine API project called ",Object(n.b)("strong",{parentName:"p"},"openshift-machine-api"),".\nAs you see in the command output above, the Machines are created per nodes (both Master and Worker)."),Object(n.b)("p",null,"There are a several options to display the output of ",Object(n.b)("strong",{parentName:"p"},"oc get machines")," command. "),Object(n.b)("pre",null,Object(n.b)("code",s({parentName:"pre"},{}),'$ oc get machines -n openshift-machine-api -o jsonpath=\'{range .items[*]}{"\\n"}{.metadata.name}{"\\t"}{.spec.providerSpec.value.instanceType}{end}{"\\n"}\'\n\ncsmo1aws-fsdjv-master-0 m4.xlarge\ncsmo1aws-fsdjv-master-1 m4.xlarge\ncsmo1aws-fsdjv-master-2 m4.xlarge\ncsmo1aws-fsdjv-worker-us-west-1b-mkdqf  m4.large\ncsmo1aws-fsdjv-worker-us-west-1b-p24nk  m4.large\ncsmo1aws-fsdjv-worker-us-west-1c-pm2bj  m4.large\n$ \n')),Object(n.b)("p",null,"For your reference, further examples are available ",Object(n.b)("a",s({parentName:"p"},{href:"./scalability_command_examples.md#oc-get-machines"}),"here"),"."),Object(n.b)("p",null,"You can specify ",Object(n.b)("strong",{parentName:"p"},"-o yaml")," option with the oc get machine command, you can find the meta date such as Machine name and Label as well as the spec information."),Object(n.b)("pre",null,Object(n.b)("code",s({parentName:"pre"},{}),"$ oc get machine/<machine_name> -n openshift-machine-api -o yaml\n")),Object(n.b)("h3",null,"The Machine Set resource"),Object(n.b)("p",null,"The MachineSet is the resource which makes a group of the Machine resource in the ",Object(n.b)("strong",{parentName:"p"},"openshift-machine-api")," project. The MachineSet is also created by the Installer automatically.\nThe cluster administrator can add or remove the Machine by increasing or decresing the number of replicas of the MachineSet.\nYou can find out the Machine Set information by issuing the oc get machineset command as follow."),Object(n.b)("pre",null,Object(n.b)("code",s({parentName:"pre"},{}),"$ oc get machinesets -n openshift-machine-api\nNAME                               DESIRED   CURRENT   READY   AVAILABLE   AGE\ncsmo1aws-fsdjv-worker-us-west-1b   2         2         2       2           2d12h\ncsmo1aws-fsdjv-worker-us-west-1c   1         1         1       1           2d12h\n$\n")),Object(n.b)("p",null,"You can also get the MachineSet information as the YAML format with the ",Object(n.b)("strong",{parentName:"p"},"-o yaml")," option for the oc get machineset command."),Object(n.b)("pre",null,Object(n.b)("code",s({parentName:"pre"},{}),"$ oc get machineset/<machineset_name> -n openshift-machine-api -o yaml\n")),Object(n.b)("p",null,"You can get detailed information of the machinesets by executing ",Object(n.b)("strong",{parentName:"p"},"oc describe machinesets")," command. You can find some examples of the use of ",Object(n.b)("a",s({parentName:"p"},{href:"./scalability_command_examples.md#oc-describe-machine"}),"oc commands"),"."),Object(n.b)("p",null,"The MachineSet for the Machine of Worker nodes is created automatically in the ",Object(n.b)("strong",{parentName:"p"},"Availability Zone")," which you specify during the cluster installation."),Object(n.b)("p",null,"You can find out on which Availability Zone is used if you see the ",Object(n.b)("strong",{parentName:"p"},"providerSpec"),".  You may need to add the new MachineSet if a new Region or new Availability Zone is added in your Cloud provider.  "),Object(n.b)("h3",null,"Adding / Removing Machine"),Object(n.b)("p",null,"To add the Machine to a specific Availability Zone, you can run the ",Object(n.b)("strong",{parentName:"p"},"oc scale")," command.  It will increase the number of replica of MachineSet. The following is an example to add two worker nodes."),Object(n.b)("pre",null,Object(n.b)("code",s({parentName:"pre"},{}),"$ oc scale machineset csmo1aws-fsdjv-worker-us-west-1c --replicas=2 -n openshift-machine-api\nmachineset.machine.openshift.io/csmo1aws-fsdjv-worker-us-west-1c scaled\n$\n")),Object(n.b)("p",null,"By the command above, the number of replica of the MachineSet will become 2.  The worker nodes and Machine in the availability zone in the MachineSet will be 2 as well."),Object(n.b)("p",null,"If you removed applications/services or decrease workload for some reason, you may want to reduce number of worker nodes.  If that’s the case, then you can run oc scale command and specify appropriate number of replicas as follow. "),Object(n.b)("pre",null,Object(n.b)("code",s({parentName:"pre"},{}),"$ oc scale machineset csmo1aws-fsdjv-worker-us-west-1b --replicas=1 -n openshift-machine-api\nmachineset.machine.openshift.io/csmo1aws-fsdjv-worker-us-west-1b scaled\n$\n")),Object(n.b)("p",null,"In this case, the number of replica will be 1."),Object(n.b)("p",null,"After you execute the command, you can verify the result with the commands such as ",Object(n.b)("strong",{parentName:"p"},"oc get machines")," and/or ",Object(n.b)("strong",{parentName:"p"},"oc get nodes"),".  "),Object(n.b)("p",null,"In our example above, the number of workers on us-west-1b zone is 1 and the number of workers on us-west-1c zone is 2."),Object(n.b)("pre",null,Object(n.b)("code",s({parentName:"pre"},{}),"$ oc get machines -n openshift-machine-api\nNAME                                     STATE     TYPE        REGION      ZONE         AGE\ncsmo1aws-fsdjv-master-0                  running   m4.xlarge   us-west-1   us-west-1b   2d13h\ncsmo1aws-fsdjv-master-1                  running   m4.xlarge   us-west-1   us-west-1c   2d13h\ncsmo1aws-fsdjv-master-2                  running   m4.xlarge   us-west-1   us-west-1b   2d13h\ncsmo1aws-fsdjv-worker-us-west-1b-gx8d2   running   m4.xlarge   us-west-1   us-west-1b   4m33s\ncsmo1aws-fsdjv-worker-us-west-1c-5sr2w   running   m4.xlarge   us-west-1   us-west-1c   17m\ncsmo1aws-fsdjv-worker-us-west-1c-x8gxr   running   m4.xlarge   us-west-1   us-west-1c   6m38s\n$\n")),Object(n.b)("pre",null,Object(n.b)("code",s({parentName:"pre"},{}),"$ oc get nodes\nNAME                                         STATUS   ROLES    AGE     VERSION\nip-10-0-129-227.us-west-1.compute.internal   Ready    master   2d13h   v1.14.6+cebabbf4a\nip-10-0-136-11.us-west-1.compute.internal    Ready    worker   57s     v1.14.6+cebabbf4a\nip-10-0-139-19.us-west-1.compute.internal    Ready    master   2d13h   v1.14.6+cebabbf4a\nip-10-0-146-131.us-west-1.compute.internal   Ready    worker   3m8s    v1.14.6+cebabbf4a\nip-10-0-146-194.us-west-1.compute.internal   Ready    worker   13m     v1.14.6+cebabbf4a\nip-10-0-151-108.us-west-1.compute.internal   Ready    master   2d13h   v1.14.6+cebabbf4a\n$ \n")),Object(n.b)("h3",null,"Adding / Removing worker nodes via Web Console"),Object(n.b)("p",null,"You can also add/remove worker nodes via Web Console."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Login with the cluster admin permission")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Go to Compute —> Machine Sets\n",Object(n.b)("span",s({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.91666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABnUlEQVQoz52QWy8DQRiG90egVB2rpVVKtWgbh95wIRIuiHNonM+tpE34S36Da/f+gBsSQkK1dmd3Zl/fTLt1uMJsnrzzvTvf+82uNhyNIdTTi06fH77WZnS0NCm8FZoaXGh01RG18NSX1U000t6t/Bq0edwI+n3wt7dCC4XC8Pm7EIiOIjKXQc/MAcKzh4jNnSCxmEFSspStMrpcRvoja3kkV/MYXDhDYiVHmqXASBzN3iA2do5hATAE8MZJaU+ivK989UyUzzkwQgtHExQYwPrmHq5unnB5fY+XonxFyYLabFFG8E9sXvUsplNpqr1ULdQ3pG6Y3j7A3avA7ZMBZtFh2PTQZIOBMTmfHNtWapomeQyytDgHlwgBQWjd4UF42gJIb+3D0AVKuoUi8c4s1fzw/Ijngo6SwVWDTTdjJsdryVQhcohEOIHR+Dg6gv3YPTylqfT/3mUYr9wSKBQLaoBhfjZzYUNnFFCpnUCpWmpyGgPxMWRy5/i5nE/8y9KmZuYRS6Zwlr+ohjj8rH+DNjE1i95YEkfZ3LeA/64PxzqGzN1p4QQAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"scalability_aws_1",title:"scalability_aws_1",src:"/static/46967b040e81d8fe997e740f880f4aad/3cbba/scalability_aws_1.png",srcSet:["/static/46967b040e81d8fe997e740f880f4aad/7fc1e/scalability_aws_1.png 288w","/static/46967b040e81d8fe997e740f880f4aad/a5df1/scalability_aws_1.png 576w","/static/46967b040e81d8fe997e740f880f4aad/3cbba/scalability_aws_1.png 1152w","/static/46967b040e81d8fe997e740f880f4aad/82b59/scalability_aws_1.png 1437w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Select MachineSet on the list and click it")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Click on X machine under the ",Object(n.b)("strong",{parentName:"p"},"Desired Count")," on the ",Object(n.b)("strong",{parentName:"p"},"Overview")," tab in the ",Object(n.b)("strong",{parentName:"p"},"Machine Set Details")," page\n",Object(n.b)("span",s({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.208333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAB0UlEQVQoz42SW1PTQBTH8yGE0gtipbQOTbUNaIFCAUFrR2cYHtQHfUGrn8CB6UWqyNTLV+Whpck2yV7y92zSzmgV9Mz85uxmd397NrtGIW9ibfU+8mYBS5kMbt9MIT2fHJPCQiqBRGwG8dkbSMxGOT4TkZyLYT4+R8SQXUwjRxjZ3DLy+XtYXMqhWK1j+6iFyqsPqLw+xsOjJh69bf1GrdHCk3dt1HS/0cHj913svmljr/GRcgdG6cEWCtYGUuk7ODntgQG4cAT6bgBJ7QDXhxojCD2fhJsorlaQvJXDSbML4QPMvhwzhDdyaIVEIGmJuoJA0joXknswtMwslaMK2114tB1jI/i+D84FpJRQQYCAUEpdQzRu3LXWYRbLSCxk0ex8guf56PcHsG07lDLGwqz7Wq5Dy6cjGG9qVPfqWK/uI2ta+Hz+LRwUgo7AeSjglPXOk/xPYf3gOfbrB1jZ2MGXrz8wdGzYzCWp+OslTGQTwTTG08MXeHb4EtbaNs563zEYOnAYp2MKqkpSlSq866sEfwj1cTd3a8gsl9A965FIwXV9SKF+Ef5/GCvlKix6i/rZHDdPcUnVDRwPjstD7BHHkPkh9ihCtx36zum3iCl+AtA9vdkYBfS0AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"scalability_aws_2",title:"scalability_aws_2",src:"/static/a4f71cb1e0bab66f96c7eb7c7601c9bd/3cbba/scalability_aws_2.png",srcSet:["/static/a4f71cb1e0bab66f96c7eb7c7601c9bd/7fc1e/scalability_aws_2.png 288w","/static/a4f71cb1e0bab66f96c7eb7c7601c9bd/a5df1/scalability_aws_2.png 576w","/static/a4f71cb1e0bab66f96c7eb7c7601c9bd/3cbba/scalability_aws_2.png 1152w","/static/a4f71cb1e0bab66f96c7eb7c7601c9bd/fcddc/scalability_aws_2.png 1438w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"On the Edit Count window, type the replica number which you want to have and click on Save button\n",Object(n.b)("span",s({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"38.19444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABlElEQVQoz32RX2/SUByGe+GFdxMEWlqGAcpwY+pYwU3iJ9Ir+VPanvbQBWO81mR+g10tJm43JkaFzO/BhSB+BROTx0ORBGe0yZP3nJPz/s6TVKvv1rGrNcrlCna5RKlYpL5X5/i4Tbv9mGbzIY3DpsKh0XA4dFpUKjZ5XWfbKmDlDZUWtWqVHdtGy9zOkEqlSeVM9N0WN/QqT3qC74tvTKdTZrOvihnz+ZzFYgE/f9ALT7hp7lC49whj74jc3VZCttZEy+UL3Epn2X/g4MkRT5+5vH13yf++84v3dL0AOXpBEI8UzxG/0Qxzm610hv37B/heSK/b5c3pKVdXXxiPx0wmk4Tl+uOnz7w++4B8+Yo49BkOJbGMiFVGoUBGoTI0rJWhGjjwQwIRMhgM6HQ6dNXwfr+f4Lquok/ku6ooiKREbhBFkUKiZXWTrdTKMAgEnucjhFCvD/8ijmOVMXK5vzZwfUczC3dIZw0O1B8U4cowXGYQ/IHv+0lhs7zJ+lwrlmwMq4jTOkpKS7t/Ga5L8prdJr8A9XVvrmvuAU0AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"scalability_aws_3",title:"scalability_aws_3",src:"/static/41a618b9910b576d14e86241eebf7042/3cbba/scalability_aws_3.png",srcSet:["/static/41a618b9910b576d14e86241eebf7042/7fc1e/scalability_aws_3.png 288w","/static/41a618b9910b576d14e86241eebf7042/a5df1/scalability_aws_3.png 576w","/static/41a618b9910b576d14e86241eebf7042/3cbba/scalability_aws_3.png 1152w","/static/41a618b9910b576d14e86241eebf7042/a882e/scalability_aws_3.png 1439w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"\nIn our example, we updated the replica number from 1 to 2 for the csmo1aws-fsdjv-worker-us-west-1c Machine Set.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Once it’s done, then the worker nodes will be added/removed.",Object(n.b)("br",{parentName:"p"}),"\n",Object(n.b)("span",s({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.208333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAB0ElEQVQoz4WSa08TQRSG90dwa2vFYrmWQusCtdZUQS7SkDQxMTHRD6LVX2AgvdAqJjXhg3/URGp3t3vfx7Nrq4ICJ3lyZjI7z7yZWSWbWaagrpFZzjKbTjNz+xapZOI304k48YlxYhNjUR+NY+NjJKYmScanSMYmmbubYl5QFpeyqOoG6dkFcuUKj143KL38QOnVEVuHdXbeNi6wV2vw9F2TvXBea7H7vsPmmyZPaifSWyir6w9ZUUskZxY5bnfRgW+6y7kZ4Mk44Pryh7hC+L2SW3tANn+fRGqe43oH1wZD+zGkjzWQI3yPwJMt/hUEnuwz8RwLJS8JV0WauCPCZgdbjjOMAbbt4DgunufhBwGB4Pv+NfxaV3IizN4rinCBxsknLMvm+3kPTdNEaovciHq/34/kYYXyyxUMD1VW1CKZXIH49Bz11sdo0XFdSefgDnsoCqVhghuFxfI2G6VN0kt5mu1TNF1HM8xI9r8ayUaCyygHz16wvV9FLT7m85czen0N3XAkUZjOk3R+9NZXCf4R7lefUxHyhTLds69Y8iqmaeO5/lB4049zsZSt3QN2KtXoHtunXXqSrqdb6KYToQ3kQYw/jOa69PAvCK/mb34CCvG9+IvELXEAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"scalability_aws_5",title:"scalability_aws_5",src:"/static/7fcbeca679e6daf4775d1223aceae16d/3cbba/scalability_aws_5.png",srcSet:["/static/7fcbeca679e6daf4775d1223aceae16d/7fc1e/scalability_aws_5.png 288w","/static/7fcbeca679e6daf4775d1223aceae16d/a5df1/scalability_aws_5.png 576w","/static/7fcbeca679e6daf4775d1223aceae16d/3cbba/scalability_aws_5.png 1152w","/static/7fcbeca679e6daf4775d1223aceae16d/fcddc/scalability_aws_5.png 1438w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"\nAs you see above, the Desired Count becomes 2 in our case.",Object(n.b)("br",{parentName:"p"}),"\n","You can also find out that there is a new node created in the us-west-1c zone.\n",Object(n.b)("span",s({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAACAklEQVQoz5VRa28SQRTdX2CtbbUC2iIVjAv0sdgHEmOQ1GrbYOKXftYEq/UfKIVtxDSpjw/+SptAd4F9zGP3eGcW+t1JTu7MnXvPPWfGKJtFbFkVmMUSVnI5ZO+lsZRJYTmTxjLt76dTWFyYx93b8zoqzN2cwa2ZG5ibnaX8AjKLd5DPPUCBYDw2y7CsLaw8LMCqN/GiZaP+7ivq79vYa51i/7iD/Y/daxx+6qJ5Yut4cHKGg8897H6w8fLYxm6rC2PtSQ0lq4pM9hE6vR/43xVNEE/OxlrlKUrr20gt5dGxe/rC8QKEjCESDLHkE4gJknOkYiTAw0BDcgbBAhjrmzWsVqpEWMDp2XcwIux7DD4TkEQQRbGGlJJiBKn2hDiOIdSAONGm7jnnynKiMJ0toN3tURPgBQLjUMIjTBvckQspSJGQ8EOmc1eOT244Qk5NcTLEKG/swFzd1Ja/tL8RCXDphrh0GPojZSvShQN3oBUIQuD7lKfcFcNfl8H1lJtIqzRq9T3sPGsgX7TQO/+p33Dkc4xJpa8VJoR+4OmGqTWlyBlyTabcMJHUGodvj9B4/QaV6nNc/PpDF9A2HCocBckbKQy9IYQQmpDRhynCPikcjInUF2BcajdG41WTCJswN7ZxfvFbv40XkjomEXB5TRjQD04/RhFDD1FDqY5qhUyc/APXn3al3O9p0gAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"scalability_aws_6",title:"scalability_aws_6",src:"/static/d30d2b4059edf1ca1dd49820efd9bb3b/3cbba/scalability_aws_6.png",srcSet:["/static/d30d2b4059edf1ca1dd49820efd9bb3b/7fc1e/scalability_aws_6.png 288w","/static/d30d2b4059edf1ca1dd49820efd9bb3b/a5df1/scalability_aws_6.png 576w","/static/d30d2b4059edf1ca1dd49820efd9bb3b/3cbba/scalability_aws_6.png 1152w","/static/d30d2b4059edf1ca1dd49820efd9bb3b/82b59/scalability_aws_6.png 1437w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"   "))),Object(n.b)("h2",null,"Add Worker Nodes in UPI (VMware, Bare Metal)"),Object(n.b)("p",null,"The worker nodes can be added using the same steps as the control plane nodes. "),Object(n.b)("p",null,"Create a new VM with the RHCOS installer as normal, using the ",Object(n.b)("strong",{parentName:"p"},"worker.ign")," file generated during the original install. During the machine’s start up, it will sync with the existing OpenShift cluster’s ",Object(n.b)("strong",{parentName:"p"},"Machine Config Operator")," to be admitted into the cluster."),Object(n.b)("p",null,"Note: it may be required to manually approve the node’s CSR (Certificate Signing Request) as described in the installation documentation of vSphere or Baremetal.   "),Object(n.b)("h2",null,"Add Worker Nodes in IBM Cloud (a.k.a. ROKS)"),Object(n.b)("p",null,"With IBM Cloud, adding worker nodes in the OpenShift cluster will be done by IBM Cloud Console or by using the IBM Cloud CLI with commands such as\n",Object(n.b)("inlineCode",{parentName:"p"},"ibmcloud ks worker-pool resize --cluster <cluster_name_or_ID> --worker-pool <pool_name>  --size-per-zone <number_of_workers_per_zone>"),"\nMore information can be found in the ",Object(n.b)("a",s({parentName:"p"},{href:"https://cloud.ibm.com/docs/containers?topic=containers-add_workers"}),"ROKS documentation"),"."),Object(n.b)("h2",null,"Add Worker Nodes by AutoScaler"),Object(n.b)("p",null,"In the previous section, we discussed how to add worker nodes manually.  In this section, we will show you how to add worker nodes by the AutoScaler. With the Auto Scaling capability in OpenShift, the worker nodes will be added / removed automatically based on the application deployment status. You need to understand two more resources such as ",Object(n.b)("strong",{parentName:"p"},"ClusterAutoscaler")," and ",Object(n.b)("strong",{parentName:"p"},"MachineAutoscaler")," in addition to Machine and MachineSet resources. "),Object(n.b)("h3",null,"Create ClusterAutoscaler"),Object(n.b)("p",null,"The ClusterAutoscaler is a resource for automatically adjusting the size of OpenShift cluster. In the ClusterAutoscaler resource, it describes the maximum number of nodes, the possibility of scaling down, and the minimum and maximum values of CPU, memory, and GPU that can be used by the cluster. When it does the auto scaling (scale up), the upper limit defined by the ClusterAutoscaler will not be exceeded. Note that the ClusterAutoscaler is set for the OpenShift cluster wide, so that only one ClusterAutoscaler can be created per cluster. It is not tied to a specific project. The ClusterAutoscaler is managed by the Operator.  "),Object(n.b)("p",null,"The following example creates a YAML file that describes a resource named “ca-sample” and creates a ClusterAutoscaler resource with the oc create command. In this sample resource, the upper limit of the total number of nodes in the cluster is 10 and auto scale down is enabled."),Object(n.b)("pre",null,Object(n.b)("code",s({parentName:"pre"},{}),'$ cat << EOF  > cluster-autoscaler-sample.yaml\napiVersion: "autoscaling.openshift.io/v1"\nkind: "ClusterAutoscaler"\nmetadata:\n  name: "ca-sample"          ## Name of the ClusterAutoscaler resource\nspec:  \n  resourceLimits:    \n    maxNodesTotal: 10        ## Max number of nodes in the cluser  \n  scaleDown:    \n    enabled: true            ## Enable Scale Down\nEOF\n\n$ oc create -f cluster-autoscaler-sample.yaml\n')),Object(n.b)("h3",null,"Create MachineAutoscaler"),Object(n.b)("p",null,"The MachineAutoscaler is a resource for automatically adjusting the number of Machines in the MachineSet. The number of Machines is adjusted so as not to exceed the upper limit defined by the ClusterAutoscaler. The MachineAutoscaler is required to determine which MachineSet the ClusterAutoscaler will adjust the number of replicas for.  "),Object(n.b)("p",null,"The following example creates a MachineAutoscaler resource named ma-sample01. The number of replicas is automatically adjusted within the range of 1 to 5 for the specified MachineSet. The MachineAutoscaler is created in the openshift-machine-api project as well as the Machine and the MachineSet. You can check the created the ClusterAutoscaler and the MachineAutoscaler information with the oc get command."),Object(n.b)("pre",null,Object(n.b)("code",s({parentName:"pre"},{}),'$ cat << EOF  > machine-autoscaler-sample01.yaml\napiVersion: "autoscaling.openshift.io/v1beta1"\nkind: "MachineAutoscaler"\nmetadata:\n  name: "ma-sample01"\n  namespace: "openshift-machine-api"\nspec:\n  minReplicas: 1                       ## Min replica number of MachineSet\n  maxReplicas: 5                       ## Max replica number of MachineSet\n  scaleTargetRef:    \n    apiVersion: machine.openshift.io/v1beta1\n    kind: MachineSet\n    name: <clusterID>-ap-northeast-1a   ## Specify an existing MachineSet name\nEOF\n$ oc create -f machine-autoscaler-sample01.yaml\n')),Object(n.b)("p",null,"Note that the AutoScale function by ClusterAutoscaler will not work unless the following two conditions are met."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"MachineAutoscaler is set for all MachineSets"),Object(n.b)("li",{parentName:"ul"},"The number of replicas of all MachineSets is set to 1 or more and one or more Machines are operating.  ")),Object(n.b)("p",null,"Check to see if it works. Create a job like the following, and start a large number of containers at once that only execute the sleep command."),Object(n.b)("pre",null,Object(n.b)("code",s({parentName:"pre"},{}),'$ cat << EOF  > job-work-queue-sample.yaml\napiVersion: batch/v1\nkind: Jobmetadata:\n  generateName: work-queue-  \n  namespace: autoscale-demo01\nspec:  \n  template:    \n    spec:      \n      containers:      \n      - name: work        \n        image: busybox        \n        command: ["sleep",  "300"]        \n        resources:          \n          requests:            \n            memory: 500Mi            \n            cpu: 500m        \n        restartPolicy: Never  \n  completions: 20  \n  parallelism: 20\nEOF\n\n$ oc new-project autoscale-demo01; oc project autoscale-demo01\n$ oc create -f job-work-queue-sample.yaml\n')),Object(n.b)("p",null,"Assuming that your OpenShift cluster has the default configuration. With the above example, the resource is not enough to deploy pods at once.  Therefore, after a while, the worker node will be added automatically.  The pod status will be changed from ",Object(n.b)("strong",{parentName:"p"},"Pending")," to ",Object(n.b)("strong",{parentName:"p"},"Running"),".  Then the pod which was on hold will be deployed.\nYou can run ",Object(n.b)("strong",{parentName:"p"},"oc get nodes")," command and/or oc get pods command to see those behavior.  You can also verify that the worker node will be delete automatically if you delete a newly created pod by issuing ",Object(n.b)("strong",{parentName:"p"},"oc delete project")," which will also delete the project."),Object(n.b)("p",null,"Note that there are a few cases which the ClusterAutoscaler doesn’t remove worker nodes.  For example, if the pod is using the local storage on the worker node, the worker node won’t be removed by the ClusterAutoscaler.  Another example is that the pod which won’t be move to other worker node due to the cluster resource shortage, then the worker will not be removed by the ClusterAutoscaler.  "),Object(n.b)("a",{name:"add-master-nodes"}),Object(n.b)("h2",null,"Add Master Nodes"),Object(n.b)("p",null,"There should be at least 3 Master nodes deployed with OpenShift 4.x.  If you wish to add new masters due to load (on etcd, for example) then the procedure for adding a new master is the same as adding a regular worker node, except that the node must have the label ",Object(n.b)("inlineCode",{parentName:"p"},"machineconfiguration.openshift.io/role: infra")," instead of ",Object(n.b)("inlineCode",{parentName:"p"},"worker"),"."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-day-2-scalability-index-mdx-0202b45b9716cd15990e.js.map