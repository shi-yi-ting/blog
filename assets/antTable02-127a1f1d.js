import{e as P,x as b,aB as Q,o as n,c as d,d as v,j as p,N as i,w as W,W as a,S as r,T as w,U as h,f as D,O as C,Q as S,V as k,g as B,aT as L,aS as H,aR as X,p as Y,b as Z,_ as ee}from"./index-28e7baee.js";import{_ as te,S as ae}from"./index-9c3ec408.js";import{S as oe,_ as ne}from"./index-daac8612.js";import{I as le}from"./index-99cbf15b.js";import"./index-2b53710f.js";import{_ as ie}from"./index-05ee9db9.js";import{_ as se}from"./markDownBox-eba479d5.js";import"./fromPairs-e099444b.js";import"./debounce-2e5a75af.js";import"./isSymbol-5cdea542.js";import"./scrollTo-a9730ee0.js";import"./isPlainObject-c94aa001.js";import"./ActionButton-bc440849.js";const re=N=>(Y("data-v-2d897f04"),N=N(),Z(),N),ce={class:"common_container"},ue={class:"mt10"},de=re(()=>v("div",null,[v("span",{class:"ft20 fw700 mr8"},"AntTable"),v("div",null,"表格部分单元格支持编辑")],-1)),pe={class:"mt15"},me={key:0},_e={key:1},fe=P({__name:"antTable02",setup(N){const V=b({spinning:!1});function j(){const e=b({list:[],filterOption:(s,u)=>(console.log("option",u),console.log("input",s),u.key.toLowerCase().indexOf(s.toLowerCase())>=0)}),l=b({selectValue:"0",quotaTypeName:[]}),m=async()=>{try{e.list=[],e.list=[{value:"Jack",label:"Jack"},{value:"Lucy",label:"Lucy"},{value:"Tom",label:"Tom"}],e.list.unshift({label:"全部",value:"0"})}catch(s){console.log("err ",s)}},c=s=>{console.log("value",s),J(s)};return B(()=>{m()}),{options:e,q:l,handleChange:c}}const{options:I,q:x,handleChange:R}=j();function U(){const e=b({activeIndex:void 0,currentRow:null}),l=b({loading:!1,total:0,list:[],selectKeys:[],columns:[{title:"序号",key:"index",dataIndex:"index",align:"center",width:"6%"},{title:"设施名称",key:"faciliityName",dataIndex:"faciliityName",align:"center",width:"10%"},{title:"定员类型",key:"quotaTypeName",dataIndex:"quotaTypeName",align:"center",width:"10%"},{title:"近期数量",key:"recentNumber",dataIndex:"recentNumber",align:"center",width:"10%"},{title:"远期数量",key:"forwardNumber",dataIndex:"forwardNumber",align:"center",width:"10%"},{title:"操作",dataIndex:"opts",align:"center",key:"opts",width:"10%"}]}),m=(t,_)=>({onClick:f=>{console.log("record",t),e.currentRow=null,e.activeIndex=_,e.currentRow=t,e.currentRow.id=t.id,e.currentRow.maxOnDuty=t.maxOnDuty,e.currentRow.projectId=t.projectId,e.currentRow.dataId=t.dataId,e.currentRow.faciliityId=t.faciliityId,e.currentRow.faciliityName=t.faciliityName,e.currentRow.quotaType=t.quotaType,e.currentRow.quotaTypeName=t.quotaTypeName,e.currentRow.recentNumber=t.recentNumber,e.currentRow.forwardNumber=t.forwardNumber,f.stopPropagation()}}),c=(t,_)=>{let f="";return e.activeIndex===_&&(f="chosedRow"),f},s=async()=>{try{l.loading=!0,l.list=[],l.list=[{id:"1",maxOnDuty:"maxOnDuty",projectId:"projectId",dataId:"123, 345",faciliityId:"faciliityId",faciliityName:"faciliityName",quotaType:"quotaType",quotaTypeName:"quotaTypeName",recentNumber:"recentNumber",forwardNumber:"forwardNumber"},{id:"2",maxOnDuty:"maxOnDuty02",projectId:"projectId02",dataId:"123, 345",faciliityId:"faciliityId",faciliityName:"faciliityName",quotaType:"quotaType",quotaTypeName:"quotaTypeName",recentNumber:"recentNumber",forwardNumber:"forwardNumber"}],l.loading=!1}catch(t){console.log("err ",t)}},u=async()=>{try{L.success("保存成功"),e.activeIndex=void 0}catch(t){console.log("err ",t)}};return B(()=>{s()}),{edit:e,table:l,customRow:m,getRowBackGround:c,getTableList:s,updateData:u}}const{edit:q,table:T,customRow:z,getRowBackGround:G,getTableList:J,updateData:K}=U(),M=e=>{console.log("id",e),L.success("删除成功")},$=()=>{q.activeIndex=void 0};return(e,l)=>{const m=H,c=X,s=ie,u=oe,t=ne,_=le,f=te,A=ae,E=Q("clickOutside");return n(),d("div",ce,[v("div",ue,[p(se,{url:"static/file/md/demo/antDesign/table/antTable02.md"},{default:i(()=>[v("div",null,[de,W((n(),d("div",pe,[p(A,{spinning:V.spinning,tip:"Loading..."},{default:i(()=>[p(f,{loading:a(T).loading,"data-source":a(T).list,columns:a(T).columns,bordered:!0,size:"small",rowKey:"id",customRow:a(z),rowClassName:a(G),pagination:!1,scroll:{y:500}},{bodyCell:i(({record:g,text:F,column:y,index:O})=>[y.dataIndex==="index"?(n(),r(m,{key:0},{default:i(()=>[w(h(Number(O)+1),1)]),_:2},1024)):y.dataIndex==="opts"?(n(),r(m,{key:1},{default:i(()=>[p(c,{size:"small",class:"mr5"},{default:i(()=>[w("编辑")]),_:1}),p(c,{size:"small",onClick:D(a(K),["stop"])},{default:i(()=>[w("保存")]),_:1},8,["onClick"]),p(s,{title:"确定删除?",okText:"删除",onConfirm:o=>M(g.id)},{default:i(()=>[p(c,{size:"small",danger:"",onClick:l[0]||(l[0]=D(()=>{},["stop"]))},{default:i(()=>[w("删除")]),_:1})]),_:2},1032,["onConfirm"])]),_:2},1024)):(n(),d(C,{key:2},[a(q).activeIndex===O?(n(),d("div",me,[y.dataIndex==="faciliityName"?(n(),r(t,{key:0,value:a(x).selectValue,"onUpdate:value":l[1]||(l[1]=o=>a(x).selectValue=o),showSearch:"",filterOption:a(I).filterOption,placeholder:"Select a person",class:"width_220",onChange:a(R)},{default:i(()=>[(n(!0),d(C,null,S(a(I).list,o=>(n(),r(u,{key:o.label,value:o.value},{default:i(()=>[w(h(o.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value","filterOption","onChange"])):k("",!0),y.dataIndex==="quotaTypeName"?(n(),r(t,{key:1,value:a(x).quotaTypeName,"onUpdate:value":l[2]||(l[2]=o=>a(x).quotaTypeName=o),mode:"multiple",allowClear:!0,filterOption:a(I).filterOption,placeholder:"Select a person",class:"width_220",onChange:a(R)},{default:i(()=>[(n(!0),d(C,null,S(a(I).list,o=>(n(),r(u,{key:o.label,value:o.label},{default:i(()=>[w(h(o.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value","filterOption","onChange"])):k("",!0),y.dataIndex==="recentNumber"?(n(),r(_,{key:2,value:g.recentNumber,"onUpdate:value":o=>g.recentNumber=o,allowClear:!0},null,8,["value","onUpdate:value"])):k("",!0),y.dataIndex==="forwardNumber"?(n(),r(_,{key:3,value:g.forwardNumber,"onUpdate:value":o=>g.forwardNumber=o,allowClear:!0},null,8,["value","onUpdate:value"])):k("",!0)])):(n(),d("div",_e,h(F||""),1))],64))]),_:1},8,["loading","data-source","columns","customRow","rowClassName"])]),_:1},8,["spinning"])])),[[E,$]])])]),_:1},8,["url"])])])}}});const qe=ee(fe,[["__scopeId","data-v-2d897f04"]]);export{qe as default};