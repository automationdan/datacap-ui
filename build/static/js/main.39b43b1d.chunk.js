(this["webpackJsonpcapture-ui"]=this["webpackJsonpcapture-ui"]||[]).push([[0],{55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(33),i=a.n(c),l=(a(55),a(18)),o=a(19),r=a(22),d=a(21),j=(a(56),a(57),a(113)),b=a(93),u=a(94),h=a(95),x=a(115),p=a(97),g=a(98),O=a(99),m=a(100),f=a(101),v=a(102),C=a(116),y=a(103),I=a(15),N=a(104),w=a(105),F=a(106),P=a(3),D=function(){return Object(P.jsx)(b.a,{render:function(e){var t=e.isSideNavExpanded,a=e.onClickSideNavExpand;return Object(P.jsxs)(u.a,{"aria-label":"Carbon Tutorial",children:[Object(P.jsx)(h.a,{}),Object(P.jsx)(x.a,{"aria-label":"Open menu",onClick:a,isActive:t}),Object(P.jsx)(p.a,{element:I.b,to:"/",prefix:"IBM",children:"DataCap"}),Object(P.jsx)(g.a,{"aria-label":"DataCap",children:Object(P.jsx)(O.a,{element:I.b,to:"/DataCap",children:"Passports"})}),Object(P.jsx)(g.a,{"aria-label":"Invoices",children:Object(P.jsx)(O.a,{element:I.b,to:"/Invoices",children:"Invoices"})}),Object(P.jsx)(m.a,{"aria-label":"Side navigation",expanded:t,isPersistent:!1,children:Object(P.jsxs)(f.a,{children:[Object(P.jsx)(v.a,{children:Object(P.jsx)(O.a,{element:I.b,to:"/DataCap",children:"Passports"})}),Object(P.jsx)(v.a,{children:Object(P.jsx)(O.a,{element:I.b,to:"/Invoices",children:"Invoices"})})]})}),Object(P.jsxs)(C.a,{children:[Object(P.jsx)(y.a,{"aria-label":"Notifications",children:Object(P.jsx)(N.a,{})}),Object(P.jsx)(y.a,{"aria-label":"User Avatar",children:Object(P.jsx)(w.a,{})}),Object(P.jsx)(y.a,{"aria-label":"App Switcher",children:Object(P.jsx)(F.a,{})})]})]})}})},S=a(20),_=a(16),k=a(107),R=a(117),T=a(118),U=a(108),A=a(119),L={selected:0,role:"navigation"},M={role:"presentation",tabIndex:0},B=function(){return Object(P.jsxs)("div",{className:"bx--grid bx--grid--full-width landing-page",children:[Object(P.jsx)("div",{className:"bx--row landing-page__banner",children:Object(P.jsxs)("div",{className:"bx--col-lg-16",children:[Object(P.jsx)(k.a,{"aria-label":"Page navigation",children:Object(P.jsx)(R.a,{children:Object(P.jsx)("a",{href:"/",children:"Getting started"})})}),Object(P.jsx)("h1",{className:"landing-page__heading",children:"Capturing Document Information"})]})}),Object(P.jsx)("div",{className:"bx--row landing-page__r2",children:Object(P.jsx)("div",{className:"bx--col bx--no-gutter",children:Object(P.jsxs)(T.a,Object(_.a)(Object(_.a)({},L),{},{"aria-label":"Tab navigation",children:[Object(P.jsx)(U.a,Object(_.a)(Object(_.a)({},M),{},{label:"About",children:Object(P.jsx)("div",{className:"bx--grid bx--grid--no-gutter bx--grid--full-width",children:Object(P.jsx)("div",{className:"bx--row landing-page__tab-content",children:Object(P.jsxs)("div",{className:"bx--col-md-4 bx--col-lg-7",children:[Object(P.jsx)("h2",{className:"landing-page__subheading",children:"What is Carbon?"}),Object(P.jsx)("p",{className:"landing-page__p",children:"Carbon is IBM\u2019s open-source design system for digital products and experiences. With the IBM Design Language as its foundation, the system consists of working code, design tools and resources, human interface guidelines, and a vibrant community of contributors."}),Object(P.jsx)(A.a,{children:"Learn more"})]})})})})),Object(P.jsx)(U.a,Object(_.a)(Object(_.a)({},M),{},{label:"Design",children:Object(P.jsx)("div",{className:"bx--grid bx--grid--no-gutter bx--grid--full-width",children:Object(P.jsx)("div",{className:"bx--row landing-page__tab-content",children:Object(P.jsx)("div",{className:"bx--col-lg-16",children:"Rapidly build beautiful and accessible experiences. The Carbon kit contains all resources you need to get started."})})})})),Object(P.jsx)(U.a,Object(_.a)(Object(_.a)({},M),{},{label:"Develop",children:Object(P.jsx)("div",{className:"bx--grid bx--grid--no-gutter bx--grid--full-width",children:Object(P.jsx)("div",{className:"bx--row landing-page__tab-content",children:Object(P.jsx)("div",{className:"bx--col-lg-16",children:"Carbon provides styles and components in Vanilla, React, Angular, and Vue for anyone building on the web."})})})}))]}))})}),Object(P.jsxs)("div",{className:"bx--row landing-page__r3",children:[Object(P.jsx)("div",{className:"bx--col-md-4 bx--col-lg-4",children:Object(P.jsx)("h3",{className:"landing-page__label",children:"The Principles"})}),Object(P.jsx)("div",{className:"bx--col-md-4 bx--col-lg-4",children:"Carbon is Open"}),Object(P.jsx)("div",{className:"bx--col-md-4 bx--col-lg-4",children:"Carbon is Modular"}),Object(P.jsx)("div",{className:"bx--col-md-4 bx--col-lg-4",children:"Carbon is Consistent"})]})]})},E=a(26),V=a(48),G=a.n(V).a.create({baseURL:"http://localhost:3000/api/documentunderstanding/",headers:{"Content-type":"application/json"}}),J=new(function(){function e(){Object(l.a)(this,e)}return Object(o.a)(e,[{key:"upload",value:function(e,t,a){var s=new FormData;return s.append("uploadFile",e),G.post("/uploadAndPrepare/"+t,s,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:a})}},{key:"executeRule",value:function(e,t,a,s,n,c){var i=new FormData,l="/executeRule/"+e+"/"+t+"/"+a+"/"+s;return console.log(l),G.post(l,i,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:c})}},{key:"executeRules",value:function(e,t,a,s,n,c){var i=new FormData,l="/executeRules/"+e+"/"+t+"/"+a+"/"+s+"/xml/"+n;return console.log(l),G.post(l,i,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:c})}},{key:"getTransactionalFile",value:function(e,t,a,s){var n=new FormData,c="/getDataFile/"+e+"/"+t+"/"+a;return console.log(c),G.get(c,n,{onUploadProgress:s})}},{key:"getFiles",value:function(){return G.get("/files")}}]),e}()),W=a(49),Y=a.n(W),q=a(120),z=a(114),H=a(109),K=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(P.jsxs)(H.e,{ariaLabel:"Structured list",children:[Object(P.jsx)(H.c,{children:Object(P.jsxs)(H.d,{head:!0,tabIndex:0,children:[Object(P.jsx)(H.b,{head:!0,children:"Name"}),Object(P.jsx)(H.b,{head:!0,children:"Value"})]})}),Object(P.jsx)(H.a,{children:this.props.results.map((function(e){return Object(P.jsxs)(H.d,{children:[Object(P.jsxs)(H.b,{children:[Object(P.jsx)("h5",{children:e.fieldName})," "]}),Object(P.jsxs)(H.b,{children:[" ",e.fieldValue]})]},e.fieldName)}))})]})}}]),a}(s.Component),Q=K,X=a(110),Z=a(111),$=a(112),ee=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).selectFile=s.selectFile.bind(Object(E.a)(s)),s.upload=s.upload.bind(Object(E.a)(s)),s.state={selectedFiles:void 0,currentFile:void 0,progress:0,message:"Please Upload Your "+s.props.page,results:[],docUrls:[{fileData:""}],fileInfos:[],docUrl:void 0,docStatus:"Begin"},s}return Object(o.a)(a,[{key:"selectFile",value:function(e){var t=this,a=this.props.page;console.log("hello world");var s=e.target.files[0];e.target.files=null,J.upload(s,a,(function(e){t.setState({progress:Math.round(100*e.loaded/e.total)})})).then((function(e){console.log(e.data.transactionalId);var a=URL.createObjectURL(s);console.log(a),t.setState({transactionalId:e.data.transactionalId,message:"Uploaded Document",docUrl:"/api/documentunderstanding/getdoc/"+e.data.transactionalId+"/pdf",selectedFiles:s})}))}},{key:"executeRules",value:function(e,t,a,s,n,c){var i=this;console.log(c),console.log(n[c]),console.log(n);var l=n[c];this.setState({message:"Rules processed"}),n.length>c?("TradeFinance"===a&&(l="Configuration,Convert,InsightRecognition,Classify,AnalysePageLayout,EntitySearch,Collection",c=7),J.executeRule(this.state.transactionalId,t,a,l,s,(function(e){i.setState({progress:Math.round(100*e.loaded/e.total)})})).then((function(l){i.setState({message:n[c]+"processed"}),c++,console.log(c),i.executeRules(e,t,a,s,n,c)}))):J.getTransactionalFile(e,"xml",s,(function(e){i.setState({progress:Math.round(100*e.loaded/e.total)})})).then((function(e){console.log(e.data),i.setState({results:e.data.values,message:"Document Processed",transactionId:e.data.transactionalId,docStatus:"Done"}),console.log(c)}))}},{key:"upload",value:function(){var e=this.props.application,t=this.props.workflow,a=this.props.rules,s=this.props.docId;console.log("upload"+this.state.transactionalId),this.setState({docStatus:"Processing"});var n=a.split(",");console.log(n),console.log(n.length),this.executeRules(this.state.transactionalId,e,t,s,n,0),this.setState({selectedFiles:void 0})}},{key:"upload2",value:function(){var e=this,t=this.props.application,a=this.props.workflow,s=this.props.rules,n=this.props.docId;console.log("upload"+this.state.transactionalId),this.setState({docStatus:"Processing"});var c=s.split(",");console.log(c.length);J.executeRules(this.state.transactionalId,t,a,c[0],n,(function(t){e.setState({progress:Math.round(100*t.loaded/t.total)})})).then((function(t){return console.log(t.data),e.setState({results:t.data.values,message:"Document Processed",transactionId:t.data.transactionalId,docStatus:"Done"}),console.log(e.state),"stuff"})),this.setState({selectedFiles:void 0})}},{key:"render",value:function(){var e=this.state.selectedFiles;return Object(P.jsx)("div",{children:Object(P.jsxs)(X.a,{children:[Object(P.jsx)(Z.a,{children:Object(P.jsxs)($.a,{lg:16,children:[Object(P.jsx)(k.a,{"aria-label":"Page navigation",children:Object(P.jsx)(R.a,{children:Object(P.jsx)("a",{href:"/",children:this.props.page})})}),Object(P.jsx)("h1",{className:"landing-page__heading",children:this.state.message})]})}),Object(P.jsx)(Z.a,{children:Object(P.jsx)($.a,{lg:16,children:Object(P.jsx)("div",{style:{width:"500px"},children:Object(P.jsx)(q.a,{accept:[".jpg",".pdf",".tif"],onAddFiles:this.selectFile,buttonkind:"primary",buttonlabel:"Add files",filenamestatus:"edit",icondescription:"Clear file",labelText:"Add File to this container",className:"bx--file__container"})})})}),Object(P.jsx)(Z.a,{children:Object(P.jsx)($.a,{lg:16,children:Object(P.jsx)(A.a,{disabled:!e,onClick:this.upload,style:{width:"1500px"},children:"Process Document"})})}),Object(P.jsxs)(Z.a,{children:[Object(P.jsxs)($.a,{children:[Object(P.jsx)("h1",{children:"Document"}),void 0!==this.state.docUrl&&Object(P.jsx)(Y.a,{fileType:"pdf",filePath:this.state.docUrl})]}),Object(P.jsxs)($.a,{children:[Object(P.jsx)("h1",{children:"Document Details"}),"Processing"===this.state.docStatus&&Object(P.jsx)(z.a,{description:"Processing..."}),"Document Processed"===this.state.message&&Object(P.jsx)(Q,{results:this.state.results})]})]})]})})}}]),a}(s.Component),te=function(){return Object(P.jsx)("div",{children:Object(P.jsx)(ee,{page:"Passport_Page",application:"dan",workflow:"dan",rules:"Documents,NormalOCR,GenerateText,PassportFields",docId:"tm000001"})})},ae=function(){return Object(P.jsx)("div",{children:Object(P.jsx)(ee,{page:"Other",application:"TradeFinance",workflow:"TradeFinance",rules:"Configuration,Convert,InsightRecognition,Classify,AnalysePageLayout",docId:"TM000002"})})},se=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={message:""},s}return Object(o.a)(a,[{key:"render",value:function(){return Object(P.jsxs)("div",{children:[console.log("http://localhost:3000"),Object(P.jsx)(D,{}),Object(P.jsx)(j.a,{children:Object(P.jsxs)(S.c,{children:[Object(P.jsx)(S.a,{exact:!0,path:"/",component:B}),Object(P.jsx)(S.a,{path:"/DataCap",component:te}),Object(P.jsx)(S.a,{path:"/Invoices",component:ae})]})})]})}}]),a}(s.Component),ne=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,121)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))};i.a.render(Object(P.jsxs)(n.a.StrictMode,{children:[Object(P.jsx)(I.a,{children:Object(P.jsx)(se,{})}),","]}),document.getElementById("root")),ne()}},[[89,1,2]]]);
//# sourceMappingURL=main.39b43b1d.chunk.js.map