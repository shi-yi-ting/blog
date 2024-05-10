import{e as f,x as h,o as w,c as m,d as a,j as s,N as u,W as r,S as y,T as R,U as F,V as p,r as x,g as T,aS as I,p as v,b as S,_ as j}from"./index-dd7dc6e8.js";import{_ as P,S as D}from"./index-83c7a765.js";import"./index-1b684100.js";import"./index-457d39c3.js";import"./index-30a33ba1.js";import{_ as V}from"./markDownBox-67bb66e6.js";import"./fromPairs-e099444b.js";import"./debounce-b561923b.js";import"./isSymbol-8bec81fc.js";import"./scrollTo-207b2f91.js";import"./isPlainObject-0555b062.js";const L=l=>(v("data-v-1e4753f0"),l=l(),S(),l),H={class:"common_container"},O={class:"mt10"},C=L(()=>a("div",null,[a("span",{class:"ft20 fw700 mr8"},"AntTable"),a("div",null,"表格展示树结构数据")],-1)),K={class:"mt15"},N={key:1},B=f({__name:"antTable04",setup(l){const _=h({spinning:!1});function b(){const t=h({totalTitle:void 0,startingPoint:void 0,direction:void 0,originationRecent:void 0,originationForward:void 0}),i=h({loading:!1,total:0,list:[],selectKeys:[],columns:[{title:"序号",key:"index",dataIndex:"index",align:"center",width:"6%"},{title:"站别",key:"startingPoint",dataIndex:"startingPoint",align:"center",width:"25%"},{title:"方向",key:"direction",dataIndex:"direction",align:"center",width:"25%"},{title:"始发对数近期",key:"originationRecent",dataIndex:"originationRecent",align:"center",width:"25%"},{title:"始发对数远期",key:"originationForward",dataIndex:"originationForward",align:"center",width:"25%"}],columnsTwo:[{title:()=>t.totalTitle,key:"index",dataIndex:"index",align:"center",width:"6%"},{title:()=>t.startingPoint,key:"startingPoint",dataIndex:"startingPoint",align:"center",width:"25%"},{title:()=>t.direction,key:"direction",dataIndex:"direction",align:"center",width:"25%"},{title:()=>t.originationRecent,key:"originationRecent",dataIndex:"originationRecent",align:"center",width:"25%"},{title:()=>t.originationForward,key:"originationForward",dataIndex:"originationForward",align:"center",width:"25%"}]}),g=()=>{try{i.loading=!0,i.total=0,i.list=[];const e={data:[{id:480731308601428,rowindex:1,startingPoint:"南昌西",end:null,path:null,jdId:null,originationRecent:113,originationForward:122,takeonRecent:0,takeonForward:0,numerallocatedvehiclesRecent:0,numerallocatedvehiclesForward:0,checkThelibrarylineRecent:null,checkThelibrarylineForward:null,storagetrackRecent:null,storagetrackForward:null,projectId:null,bxorSn:null,initialLogarithm:0,direction:null,affiliatedHub:"南昌枢纽",children:[{startingPoint:"南昌西",end:null,path:null,jdId:null,originationRecent:10,originationForward:13,takeonRecent:0,takeonForward:0,numerallocatedvehiclesRecent:0,numerallocatedvehiclesForward:0,checkThelibrarylineRecent:0,checkThelibrarylineForward:0,storagetrackRecent:0,storagetrackForward:0,projectId:1,bxorSn:"2",initialLogarithm:null,direction:"发抚州方向",affiliatedHub:"南昌枢纽",createDate:"2023-11-09T11:09:43",modifyDate:"2023-11-09T11:09:43",isDelete:!1,rowVersion:null,id:480600806047825},{startingPoint:"南昌西",end:null,path:null,jdId:null,originationRecent:7,originationForward:7,takeonRecent:0,takeonForward:0,numerallocatedvehiclesRecent:0,numerallocatedvehiclesForward:0,checkThelibrarylineRecent:0,checkThelibrarylineForward:0,storagetrackRecent:0,storagetrackForward:0,projectId:1,bxorSn:"2",initialLogarithm:null,direction:"发景德镇方向",affiliatedHub:"南昌枢纽",createDate:"2023-11-09T11:09:43",modifyDate:"2023-11-09T11:09:43",isDelete:!1,rowVersion:null,id:480600806047826}]},{id:480731308601429,rowindex:2,startingPoint:"南昌东",end:null,path:null,jdId:null,originationRecent:102,originationForward:136,takeonRecent:0,takeonForward:0,numerallocatedvehiclesRecent:0,numerallocatedvehiclesForward:0,checkThelibrarylineRecent:null,checkThelibrarylineForward:null,storagetrackRecent:null,storagetrackForward:null,projectId:null,bxorSn:null,initialLogarithm:0,direction:null,affiliatedHub:"南昌枢纽",children:[{startingPoint:"南昌东",end:null,path:null,jdId:null,originationRecent:3,originationForward:5,takeonRecent:0,takeonForward:0,numerallocatedvehiclesRecent:0,numerallocatedvehiclesForward:0,checkThelibrarylineRecent:0,checkThelibrarylineForward:0,storagetrackRecent:0,storagetrackForward:0,projectId:1,bxorSn:"2",initialLogarithm:null,direction:"发长沙方向",affiliatedHub:"南昌枢纽",createDate:"2023-11-09T11:09:43",modifyDate:"2023-11-09T11:09:43",isDelete:!1,rowVersion:null,id:480600806047815},{startingPoint:"南昌东",end:null,path:null,jdId:null,originationRecent:5,originationForward:8,takeonRecent:0,takeonForward:0,numerallocatedvehiclesRecent:0,numerallocatedvehiclesForward:0,checkThelibrarylineRecent:0,checkThelibrarylineForward:0,storagetrackRecent:0,storagetrackForward:0,projectId:1,bxorSn:"2",initialLogarithm:null,direction:"发鹰潭方向",affiliatedHub:"南昌枢纽",createDate:"2023-11-09T11:09:43",modifyDate:"2023-11-09T11:09:43",isDelete:!1,rowVersion:null,id:480600806047814}]}],totalObject:{totalTitle:"合计",startingPoint:"",direction:"",originationRecent:"2324",originationForward:"3434"}};i.list=e.data,t.totalTitle=e.totalObject.totalTitle,t.startingPoint=e.totalObject.startingPoint,t.direction=e.totalObject.direction,t.originationRecent=e.totalObject.originationRecent,t.originationForward=e.totalObject.originationForward,i.loading=!1}catch(e){console.error(e)}},d=x({checkStrictly:!1,onChange:(e,n)=>{console.log(`selectedRowKeys: ${e}`,"selectedRows: ",n),i.selectKeys=e},onSelect:(e,n,o)=>{console.log(e,n,o)},onSelectAll:(e,n,o)=>{console.log(e,n,o)}});return T(()=>{g()}),{table:i,rowSelection:d}}const{table:c,rowSelection:k}=b();return(t,i)=>{const g=I,d=P,e=D;return w(),m("div",H,[a("div",O,[s(V,{url:"static/file/md/demo/antDesign/table/antTable04.md"},{default:u(()=>[a("div",null,[C,a("div",K,[s(e,{spinning:_.spinning,tip:"Loading..."},{default:u(()=>[s(d,{loading:r(c).loading,"data-source":r(c).list,columns:r(c).columns,bordered:!0,size:"small",rowKey:n=>n.id,rowSelection:r(k),style:{width:"100%",background:"border-box"},scroll:{y:500},pagination:!1},{bodyCell:u(({record:n,column:o,index:z})=>[o.dataIndex==="index"&&n.direction===null?(w(),y(g,{key:0},{default:u(()=>[R(F(n.rowindex),1)]),_:2},1024)):p("",!0),o.dataIndex==="startingPoint"&&n.direction!==null?(w(),m("span",N)):p("",!0)]),_:1},8,["loading","data-source","columns","rowKey","rowSelection"]),s(d,{columns:r(c).columnsTwo,bordered:!0,size:"small",rowKey:"id",style:{width:"100%",background:"border-box"},scroll:{y:0},pagination:!1},null,8,["columns"])]),_:1},8,["spinning"])])])]),_:1},8,["url"])])])}}});const Y=j(B,[["__scopeId","data-v-1e4753f0"]]);export{Y as default};