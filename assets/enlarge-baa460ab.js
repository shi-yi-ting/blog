import{_ as v}from"./markDownBox-67bb66e6.js";import{_ as x,e as k,o as B,c as W,d as i,j as w,N,p as C,b as H}from"./index-dd7dc6e8.js";function p(e){e.style.display="block"}function u(e){e.style.display="none"}const I="/blog/assets/001-bf7da789.jpg",M="/blog/assets/0001-fee60a37.jpg";const E=k({setup(){return{mouseenter:()=>{let t=document.getElementsByClassName("box")[0],o=t.children[1],l=t.children[0].children[1];p(l),p(o)},mouseleave:()=>{let t=document.getElementsByClassName("box")[0],o=t.children[1],l=t.children[0].children[1];u(l),u(o)},mousemove:t=>{let o=document.getElementsByClassName("box")[0],l=o.children[0],c=o.children[1],s=o.children[0].children[1],m=c.children[0];t=t||window.event;let g=t.pageX||scroll().left+t.clientX,h=t.pageY||scroll().top+t.clientY,a=g-o.offsetLeft-s.offsetWidth/2,d=h-o.offsetTop-s.offsetHeight/2;a<0&&(a=0),a>l.offsetWidth-s.offsetWidth&&(a=l.offsetWidth-s.offsetWidth),d<0&&(d=0),d>l.offsetHeight-s.offsetHeight&&(d=l.offsetHeight-s.offsetHeight),s.style.left=a+"px",s.style.top=d+"px";let r=m.offsetWidth/l.offsetWidth,b=r*a,y=r*d;m.style.marginLeft=-b+"px",m.style.marginTop=-y+"px"}}}}),f=e=>(C("data-v-5a0c0d0e"),e=e(),H(),e),$={class:"common_container"},j={class:"mt10"},S={class:"box"},D=f(()=>i("img",{src:I,alt:""},null,-1)),L=f(()=>i("div",{class:"mask"},null,-1)),T=[D,L],V=f(()=>i("div",{class:"big"},[i("img",{src:M,alt:""})],-1));function X(e,n,_,t,o,l){const c=v;return B(),W("div",$,[i("div",j,[w(c,{url:"static/file/md/demo/DOM/放大镜.md"},{default:N(()=>[i("div",S,[i("div",{class:"small",onMouseenter:n[0]||(n[0]=(...s)=>e.mouseenter&&e.mouseenter(...s)),onMouseleave:n[1]||(n[1]=(...s)=>e.mouseleave&&e.mouseleave(...s)),onMousemove:n[2]||(n[2]=(...s)=>e.mousemove&&e.mousemove(...s))},T,32),V])]),_:1},8,["url"])])])}const q=x(E,[["render",X],["__scopeId","data-v-5a0c0d0e"]]);export{q as default};