import{_ as u}from"./markDownBox-eba479d5.js";import{_ as r,o as l,c,d as e,ag as p,k as n,e as m,aA as S,j as s,N as a,x as b}from"./index-28e7baee.js";const h={name:"Tag",props:{fontColor:{type:String,default:"#666666"},bgColor:{type:String,default:void 0},borderColor:{type:String,default:void 0},tagImg:{type:String,default:void 0}},computed:{contentStyle(){let t={};return t.color=this.fontColor,this.bgColor&&(t.backgroundColor=this.bgColor),t.lineHeight="22px",this.borderColor&&(t.border=`1px solid ${this.borderColor}`,t.borderRight="0",t.lineHeight="20px"),t},imgStyle(){let t={};return this.tagImg&&(t.backgroundImage=`url(${this.tagImg})`),this.borderColor&&(t.top="-1px"),t}}},C={class:"tag"};function y(t,i,d,f,g,o){return l(),c("span",C,[e("span",{style:n(o.contentStyle),class:"content"},[p(t.$slots,"default",{},void 0,!0),e("i",{style:n(o.imgStyle),class:"img"},null,4)],4)])}const x=r(h,[["render",y],["__scopeId","data-v-4cc9ab9e"]]),v=m({components:{Tag:x},setup(){return{tag:b({tagImg:new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAMAAAAMCGV4AAAAPFBMVEUAAAD8bSf8bSf8bSf8bSf8bSf8bSf8bSf8bSf8bSf8bSf8bSf8bSf8bSf8bSf8bSf8bSf8bSf8bSf8bSf4xS1dAAAAFHRSTlMA2MOkiFDdqlslFOYeOhC5gnRoRGA5w+QAAABxSURBVAjXZU9JEsAgCAMEqVq7/v+vBfRkc4gTMgkIjk2xoW4wUCizdOFMJSSmGvOa0AeUjPZ3N05k2WyuoGaLVyNlNwSe015WQIEAe0wQWg95kxf0Nv2jmQxfOfQ1Qjr6ofIB0T/3Fxr71/t+96//+wB/TAMoFnYh1wAAAABJRU5ErkJggg==",self.location).href})}}}),k={class:"common_container"},B={class:"mt10"},I=e("div",null,[e("span",{class:"ft20 fw700"},"Tag")],-1),$={class:"mt10"},w=e("span",null,"标题",-1);function M(t,i,d,f,g,o){const _=S("Tag",!0),A=u;return l(),c("div",k,[e("div",B,[s(A,{url:"static/file/md/enclosure/tag.md"},{default:a(()=>[e("div",null,[I,e("div",$,[s(_,{tagImg:t.tag.tagImg},{default:a(()=>[w]),_:1},8,["tagImg"])])])]),_:1},8,["url"])])])}const U=r(v,[["render",M]]);export{U as default};
