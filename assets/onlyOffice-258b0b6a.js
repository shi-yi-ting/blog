import{e as f,o as v,c as m,_ as p,aA as w,S as _}from"./index-28e7baee.js";function g(n,t,i,a){function r(e){return e instanceof i?e:new i(function(s){s(e)})}return new(i||(i=Promise))(function(e,s){function u(c){try{o(a.next(c))}catch(l){s(l)}}function d(c){try{o(a.throw(c))}catch(l){s(l)}}function o(c){c.done?e(c.value):r(c.value).then(u,d)}o((a=a.apply(n,t||[])).next())})}function y(n,t){var i={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},a,r,e,s;return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(o){return function(c){return d([o,c])}}function d(o){if(a)throw new TypeError("Generator is already executing.");for(;s&&(s=0,o[0]&&(i=0)),i;)try{if(a=1,r&&(e=o[0]&2?r.return:o[0]?r.throw||((e=r.return)&&e.call(r),0):r.next)&&!(e=e.call(r,o[1])).done)return e;switch(r=0,e&&(o=[o[0]&2,e.value]),o[0]){case 0:case 1:e=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(e=i.trys,!(e=e.length>0&&e[e.length-1])&&(o[0]===6||o[0]===2)){i=0;continue}if(o[0]===3&&(!e||o[1]>e[0]&&o[1]<e[3])){i.label=o[1];break}if(o[0]===6&&i.label<e[1]){i.label=e[1],e=o;break}if(e&&i.label<e[2]){i.label=e[2],i.ops.push(o);break}e[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(n,i)}catch(c){o=[6,c],r=0}finally{a=e=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}var R=function(n,t){return g(void 0,void 0,void 0,function(){return y(this,function(i){return[2,new Promise(function(a,r){try{if(document.getElementById(t)){if(window.DocsAPI)return a(null);var e=setInterval(function(){if(window.DocsAPI)return clearInterval(e),a(null)},500)}else{var s=document.createElement("script");s.setAttribute("type","text/javascript"),s.setAttribute("id",t),s.onload=a,s.onerror=r,s.src=n,s.async=!0,document.body.appendChild(s)}}catch(u){console.error(u)}})]})})},h=f({name:"DocumentEditor",props:{id:{type:String,required:!0},documentServerUrl:{type:String,required:!0},config:{type:Object,required:!0},document_fileType:String,document_title:String,documentType:String,editorConfig_lang:String,height:String,type:String,width:String,onLoadComponentError:Function,events_onAppReady:Function,events_onDocumentStateChange:Function,events_onMetaChange:Function,events_onDocumentReady:Function,events_onInfo:Function,events_onWarning:Function,events_onError:Function,events_onRequestSharingSettings:Function,events_onRequestRename:Function,events_onMakeActionLink:Function,events_onRequestInsertImage:Function,events_onRequestSaveAs:Function,events_onRequestMailMergeRecipients:Function,events_onRequestCompareFile:Function,events_onRequestEditRights:Function,events_onRequestHistory:Function,events_onRequestHistoryClose:Function,events_onRequestHistoryData:Function,events_onRequestRestore:Function},mounted:function(){var n=this,t=this.documentServerUrl;t.endsWith("/")||(t+="/");var i="".concat(t,"web-apps/apps/api/documents/api.js");R(i,"onlyoffice-api-script").then(function(){return n.onLoad()}).catch(function(){n.onError(-2)})},unmounted:function(){var n,t=this.id||"";!((n=window==null?void 0:window.DocEditor)===null||n===void 0)&&n.instances[t]&&(window.DocEditor.instances[t].destroyEditor(),window.DocEditor.instances[t]=void 0)},watch:{config:{handler:function(n,t){this.onChangeProps()},deep:!0},document_fileType:function(n,t){this.onChangeProps()},document_title:function(n,t){this.onChangeProps()},documentType:function(n,t){this.onChangeProps()},editorConfig_lang:function(n,t){this.onChangeProps()},height:function(n,t){this.onChangeProps()},type:function(n,t){this.onChangeProps()},width:function(n,t){this.onChangeProps()}},methods:{onLoad:function(){var n,t;try{var i=this.id||"";if(window.DocsAPI||this.onError(-3),!((n=window==null?void 0:window.DocEditor)===null||n===void 0)&&n.instances[i]){console.log("Skip loading. Instance already exists",i);return}!((t=window==null?void 0:window.DocEditor)===null||t===void 0)&&t.instances||(window.DocEditor={instances:{}});var a=Object.assign({document:{fileType:this.document_fileType,title:this.document_title},documentType:this.documentType,editorConfig:{lang:this.editorConfig_lang},events:{onAppReady:this.onAppReady,onDocumentStateChange:this.events_onDocumentStateChange,onMetaChange:this.events_onMetaChange,onDocumentReady:this.events_onDocumentReady,onInfo:this.events_onInfo,onWarning:this.events_onWarning,onError:this.events_onError,onRequestSharingSettings:this.events_onRequestSharingSettings,onRequestRename:this.events_onRequestRename,onMakeActionLink:this.events_onMakeActionLink,onRequestInsertImage:this.events_onRequestInsertImage,onRequestSaveAs:this.events_onRequestSaveAs,onRequestMailMergeRecipients:this.events_onRequestMailMergeRecipients,onRequestCompareFile:this.events_onRequestCompareFile,onRequestEditRights:this.events_onRequestEditRights,onRequestHistory:this.events_onRequestHistory,onRequestHistoryClose:this.events_onRequestHistoryClose,onRequestHistoryData:this.events_onRequestHistoryData,onRequestRestore:this.events_onRequestRestore},height:this.height,type:this.type,width:this.width},this.config||{}),r=window.DocsAPI.DocEditor(i,a);window.DocEditor.instances[i]=r}catch(e){console.error(e),this.onError(-1)}},onError:function(n){var t;switch(n){case-2:t="Error load DocsAPI from "+this.documentServerUrl;break;case-3:t="DocsAPI is not defined";break;default:t="Unknown error loading component",n=-1}typeof this.onLoadComponentError>"u"?console.error(t):this.onLoadComponentError(n,t)},onAppReady:function(){var n=this.id||"";this.events_onAppReady(window.DocEditor.instances[n])},onChangeProps:function(){var n,t=this.id||"";!((n=window==null?void 0:window.DocEditor)===null||n===void 0)&&n.instances[t]&&(window.DocEditor.instances[t].destroyEditor(),window.DocEditor.instances[t]=void 0,console.log("Important props have been changed. Load new Editor."),this.onLoad())}}});const E=["id"];function D(n,t,i,a,r,e){return v(),m("div",{id:n.id},null,8,E)}h.render=D;h.__file="src/components/DocumentEditor.vue";const q=f({name:"ExampleComponent",components:{DocumentEditor:h},data(){return{config:{document:{fileType:"docx",key:"Khirz6zTPdfd7",title:"Example Document Title.docx",url:"https://example.com/url-to-example-document.docx"},documentType:"word",editorConfig:{callbackUrl:"https://example.com/url-to-callback.ashx"}}}},methods:{onDocumentReady(){console.log("Document is loaded")}}});function C(n,t,i,a,r,e){const s=w("DocumentEditor");return v(),_(s,{id:"docEditor",documentServerUrl:"http://documentserver/",config:n.config,events_onDocumentReady:n.onDocumentReady},null,8,["config","events_onDocumentReady"])}const b=p(q,[["render",C]]);export{b as default};