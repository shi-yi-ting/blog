import{_ as T}from"./markDownBox-eba479d5.js";import{_ as h,e as f,aA as l,o as a,c as s,d as t,j as d,N as m,O as _,Q as g,S as P,U as $,x as w,i as M}from"./index-28e7baee.js";const x=[{childrenList:[{id:"echart",name:"echart",pageType:"echart",url:"/vue/echart"},{id:"modal",name:"modal",pageType:"modal",url:"/vue/modal"},{id:"tip",name:"tip",pageType:"tip",url:"/vue/tip"},{id:"language",name:"language",pageType:"language",url:"/vue/language"},{id:"time",name:"time",pageType:"time",url:"/vue/time"},{id:"header",name:"header",pageType:"header",url:"/vue/header"},{id:"flex",name:"flex",pageType:"flex",url:"/vue/flex"},{id:"video",name:"video",pageType:"video",url:"/vue/video"}]},{childrenList:[{id:"configModal",name:"configModal",pageType:"configModal",url:"/vue/configModal"},{id:"validate",name:"validate",pageType:"validate",url:"/vue/validate"},{id:"router",name:"router",pageType:"router",url:"/vue/router"},{id:"tree",name:"tree",pageType:"tree",url:"/vue/tree"},{id:"iframePdf",name:"iframePdf",pageType:"iframePdf",url:"/vue/iframePdf"},{id:"passthrough",name:"passthrough",pageType:"passthrough",url:"/vue/passthrough"},{id:"encap",name:"encap",pageType:"encap",url:"/vue/encap"},{id:"08",name:"标题08"},{id:"09",name:"标题09"},{id:"10",name:"标题10"}]},{childrenList:[{id:"01",name:"标题01"},{id:"02",name:"标题02"},{id:"03",name:"标题03"},{id:"04",name:"标题04"},{id:"05",name:"标题05"},{id:"06",name:"标题06"},{id:"07",name:"标题07"},{id:"08",name:"标题08"},{id:"09",name:"标题09"},{id:"10",name:"标题10"}]}];const C=f({props:{list:{type:Array,default:()=>[]}},setup(e,{emit:n}){return{switchPage:o=>{n("switchPage",o)}}}}),k={class:"carousel-wrap"},L={class:"carousel"},b=["onClick"];function A(e,n,i,o,v,y){const r=l("el-carousel-item"),c=l("el-carousel");return a(),s("div",null,[t("div",k,[d(c,{arrow:"always",autoplay:!1},{default:m(()=>[(a(!0),s(_,null,g(e.list,p=>(a(),P(r,{key:p.id},{default:m(()=>[t("div",L,[(a(!0),s(_,null,g(p.childrenList,(u,N)=>(a(),s("div",{key:N,class:"item",onClick:U=>e.switchPage(u)},$(u.name),9,b))),128))])]),_:2},1024))),128))]),_:1})])])}const B=h(C,[["render",A],["__scopeId","data-v-bca78c8d"]]),S=f({components:{MyCarousel:B},setup(){const e=w({isActive:"table",list:x}),n=o=>{e.isActive=o.pageType},i=M(()=>({table:{componentName:"Table"},modal:{componentName:"Modal"},header:{componentName:"Header"},tip:{componentName:"Tip"},language:{componentName:"Language"},time:{componentName:"Time"},configModal:{componentName:"ConfigModal"},validate:{componentName:"Validate"},router:{componentName:"Router"},tree:{componentName:"Tree"},iframePdf:{componentName:"IframePdf"},encap:{componentName:"Encap"},flex:{componentName:"Flex"},echart:{componentName:"Echart"},staticPage:{componentName:"StaticPage"},test:{componentName:"Test"},passthrough:{componentName:"passthrough"},video:{componentName:"Video"}})[e.isActive]);return{carousel:e,type:i,switchPage:n}}}),V={class:"common_container"},E={class:"mt10"},I=t("span",{class:"ft20 fw700 mr8"},"基于elementUI 轮播图组件再封装",-1),D={class:"mt20"};function F(e,n,i,o,v,y){const r=l("MyCarousel"),c=T;return a(),s("div",V,[t("div",E,[d(c,{url:"static/file/md/enclosure/carousel.md"},{default:m(()=>[t("div",null,[I,t("div",D,[d(r,{list:e.carousel.list,onSwitchPage:e.switchPage},null,8,["list","onSwitchPage"])])])]),_:1},8,["url"])])])}const O=h(S,[["render",F]]);export{O as default};
