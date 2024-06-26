import{t as te,e as ne,L as ae,F as l,aU as le,g as ie,aV as se,r as re,ae as ce,aW as L,B as ue,i as b,aX as ve,aY as de,aZ as fe,E as pe,C as me,j as i,a_ as Ce,a$ as be,b0 as ye,P as u,b1 as Pe,b2 as O,b3 as xe,aR as ge,b4 as _e}from"./index-d79f0da8.js";import{u as Te}from"./getScrollBarSize-0f9da9a5.js";import{A as ke}from"./ActionButton-ecab13f2.js";var Be=["placement","overlayClassName"],$e=function(){return l(l({},Pe()),{},{prefixCls:String,content:u.any,title:u.any,okType:{type:String,default:"primary"},disabled:{type:Boolean,default:!1},okText:u.any,cancelText:u.any,icon:u.any,okButtonProps:{type:Object,default:void 0},cancelButtonProps:{type:Object,default:void 0},showCancel:{type:Boolean,default:!0},onConfirm:Function,onCancel:Function})},Ne=ne({compatConfig:{MODE:3},name:"APopconfirm",props:ae($e(),l(l({},le()),{},{trigger:"click",transitionName:"zoom-big",placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1,arrowPointAtCenter:!1,autoAdjustOverflow:!0,okType:"primary",disabled:!1})),slots:["title","content","okText","icon","cancelText","cancelButton","okButton"],emits:["update:visible","visibleChange"],setup:function(o,f){var n=f.slots,y=f.emit,A=f.expose;ie(function(){se(o.defaultVisible===void 0,"Popconfirm","'defaultVisible' is deprecated, please use 'v-model:visible'")});var P=re();A({getPopupDomNode:function(){var e,t;return(e=P.value)===null||e===void 0||(t=e.getPopupDomNode)===null||t===void 0?void 0:t.call(e)}});var E=Te(!1,{value:ce(o,"visible"),defaultValue:o.defaultVisible}),x=L(E,2),g=x[0],z=x[1],v=function(e,t){o.visible===void 0&&z(e),y("update:visible",e),y("visibleChange",e,t)},F=function(e){v(!1,e)},_=function(e){var t;return(t=o.onConfirm)===null||t===void 0?void 0:t.call(o,e)},K=function(e){var t;v(!1,e),(t=o.onCancel)===null||t===void 0||t.call(o,e)},M=function(e){e.keyCode===_e.ESC&&g&&v(!1,e)},I=function(e){var t=o.disabled;t||v(e)},T=ue("popconfirm",o),W=T.prefixCls,p=T.getPrefixCls,U=b(function(){return p()}),s=b(function(){return p("popover")}),q=b(function(){return p("btn")}),X=ve("Popconfirm",de.Popconfirm),Y=L(X,1),k=Y[0],Z=function(){var e,t,r,c,d=o.okButtonProps,B=o.cancelButtonProps,m=o.title,C=m===void 0?(e=n.title)===null||e===void 0?void 0:e.call(n):m,$=o.cancelText,G=$===void 0?(t=n.cancel)===null||t===void 0?void 0:t.call(n):$,N=o.okText,H=N===void 0?(r=n.okText)===null||r===void 0?void 0:r.call(n):N,V=o.okType,h=o.icon,J=h===void 0?(c=n.icon)===null||c===void 0?void 0:c.call(n):h,w=o.showCancel,Q=w===void 0?!0:w,D=n.cancelButton,R=n.okButton,j=l({onClick:K,size:"small"},B),ee=l(l({onClick:_},O(V)),{},{size:"small"},d);return i("div",{class:"".concat(s.value,"-inner-content")},[i("div",{class:"".concat(s.value,"-message")},[J||i(xe,null,null),i("div",{class:"".concat(s.value,"-message-title")},[C])]),i("div",{class:"".concat(s.value,"-buttons")},[Q?D?D(j):i(ge,j,{default:function(){return[G||k.value.cancelText]}}):null,R?R(ee):i(ke,{buttonProps:l(l({size:"small"},O(V)),d),actionFn:_,close:F,prefixCls:q.value,quitOnNullishReturnValue:!0,emitEvent:!0},{default:function(){return[H||k.value.okText]}})])])};return function(){var a,e=o.placement,t=o.overlayClassName,r=fe(o,Be),c=pe(r,["title","content","cancelText","okText","onUpdate:visible","onConfirm","onCancel"]),d=me(W.value,t);return i(ye,l(l({},c),{},{prefixCls:s.value,placement:e,onVisibleChange:I,visible:g.value,overlayClassName:d,transitionName:be(U.value,"zoom-big",o.transitionName),ref:P}),{default:function(){return[Ce(((a=n.default)===null||a===void 0?void 0:a.call(n))||[],{onKeydown:function(C){M(C)}},!1)]},title:Z})}}});const De=te(Ne);export{De as _};
