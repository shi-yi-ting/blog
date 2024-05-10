import{_ as v}from"./markDownBox-67bb66e6.js";import{_ as b,aA as x,o as r,c as o,d as a,k as h,n as p,aM as S,S as m,V as c,e as T,j as g,N as B,x as f,p as N,b as k}from"./index-dd7dc6e8.js";const I={name:"InputText",props:{value:{type:[String,Number],default:""},textarea:{type:Boolean,default:!1},noLineBreaks:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},search:{type:Boolean,default:!1},clear:{type:Boolean,default:!1},enterPromise:{type:Function,default:void 0},number:{type:[Boolean,String],default:!1,validator:e=>[!0,!1,">=0",">0",">=0.",">0.","0","0."].includes(e)},placeholder:{type:String,default:void 0},height:{type:Number},left:{type:Boolean,default:!1},center:{type:Boolean,default:!1},right:{type:Boolean,default:!1},noBorder:{type:Boolean,default:!1}},data(){return{forbid:!1}},computed:{heightSync(){return this.height!==void 0?this.height:this.textarea?80:32},inputStyle(){let e={};if(this.left?e.textAlign="left":this.center?e.textAlign="center":this.right&&(e.textAlign="right"),this.textarea)e.height=`${this.heightSync}px`;else if(e.height=`${this.heightSync}px`,e.lineHeight=`${this.heightSync-2}px`,this.search||this.clear){let t=4;this.search&&(t+=this.heightSync-10-2),this.clear&&(t+=this.heightSync-10-2),e.paddingRight=`${t}px`}return e},placeholderText(){return this.placeholder?this.placeholder:this.search?`请输入搜索关键字${this.enterPromise?"后回车":""}`:""},numberConfig(){let e=this.number;return this.number===!0&&(e=">=0"),e}},watch:{value(){if(this.number){let e=this.$refs.input.value;if(this.value===0&&["0","-0","0.","-0."].includes(e)||this.numberConfig.includes(".")&&this.value.toString()+"."===e)return}this.setValueText(),this.emitValue()}},methods:{getFocus(){this.$refs.input.focus()},execEnterPromise(){this.enterPromise&&(this.forbid=!0,this.$nextTick(async()=>{let e=await this.enterPromise();e===void 0&&(e=!0),this.forbid=!1,e&&this.$nextTick(()=>{this.getFocus()})}))},pasteEmit(e){this.$emit("paste",e)},clearClick(){this.$refs.input.value="",this.emitValue(),this.execEnterPromise()},inputEnter(){this.$emit("inputEnter"),this.execEnterPromise()},blurInput(){this.setValueText(),this.$nextTick(()=>{this.$emit("blur")})},setValueText(){let e=this.value;this.noLineBreaks&&(e=e.replace(/\n/g,"")),this.number&&(Number.isNaN(this.value)||this.value===void 0||this.value===null?e="":e=String(this.value)),this.$refs.input.value!==e&&(this.$refs.input.value=e)},emitValue(){let e=this.$refs.input.value,t=e;if(this.number){let l=this.formatNumberText(e);if(e!==l&&(this.$refs.input.value=l),l==="0."||l==="-"||l==="-0.")return;let n;if(l==="")n=NaN;else{if(this.numberConfig.includes(".")?n=parseFloat(l):n=parseInt(l,10),n===0&&this.numberConfig===">0.")return;this.numberConfig.includes(">=0")?(Number.isNaN(n)||n<0)&&(n=0):this.numberConfig.includes(">0")?(Number.isNaN(n)||n<=0)&&(n=1):Number.isNaN(n)&&(n=0)}t=n}t!==this.value&&this.$emit("input",t)},formatNumberText(e){e=e.replace(/[^\d\-.]/,"");let t=e.split(".");return t.length>2&&(e=t.slice(0,2).join(".")),t=e.split("-"),t.length>2&&(e=t.slice(0,2).join("-")),e.indexOf("-")>0&&(e=e.replace("-","")),this.numberConfig.includes(".")||(e=e.replace(".","")),this.numberConfig.includes(">")&&(e=e.replace("-","")),(e==="."||e==="-.")&&(e=""),e}},mounted(){this.setValueText(),this.emitValue()}},V=["placeholder","disabled"],C={key:0,class:"button-wp"},E=["placeholder","disabled"];function P(e,t,l,n,d,i){const u=x("el-icon");return l.textarea?(r(),o("textarea",{key:1,ref:"input",placeholder:i.placeholderText,disabled:l.disabled||d.forbid,style:h(i.inputStyle),class:p(["textarea",{noBorder:l.noBorder}]),onInput:t[4]||(t[4]=(...s)=>i.emitValue&&i.emitValue(...s)),onBlur:t[5]||(t[5]=(...s)=>i.blurInput&&i.blurInput(...s)),onPaste:t[6]||(t[6]=(...s)=>i.pasteEmit&&i.pasteEmit(...s))},null,46,E)):(r(),o("span",{key:0,class:"inputWp",style:h({height:`${i.heightSync}px`})},[a("input",{ref:"input",style:h(i.inputStyle),placeholder:i.placeholderText,disabled:l.disabled||d.forbid,class:p(["input",{noBorder:l.noBorder}]),onInput:t[0]||(t[0]=(...s)=>i.emitValue&&i.emitValue(...s)),onBlur:t[1]||(t[1]=(...s)=>i.blurInput&&i.blurInput(...s)),onKeyup:t[2]||(t[2]=S((...s)=>i.inputEnter&&i.inputEnter(...s),["enter"])),onPaste:t[3]||(t[3]=(...s)=>i.pasteEmit&&i.pasteEmit(...s))},null,46,V),l.search||l.clear?(r(),o("div",C,[l.clear&&!["",NaN].includes(l.value)?(r(),m(u,{key:0,type:"md-close",size:i.heightSync-10,onClick:i.clearClick},null,8,["size","onClick"])):c("",!0),l.search?(r(),m(u,{key:1,type:"ios-search",size:i.heightSync-10,onClick:i.inputEnter},null,8,["size","onClick"])):c("",!0)])):c("",!0)],4))}const w=b(I,[["render",P],["__scopeId","data-v-2b9c0f76"]]);const j=T({components:{InputText:w},setup(){const e=f({isExpand01:!1}),t=f({list01:[{title:"HTML",code:`
                        <div>
                            <label class="item-label">SR: </label>

                            <!-- enterPromise,输入参数回车调接口 -->
                            <InputText v-model.trim="search.params" :enterPromise="ajaxData" placeholder="请输入" class="inputText" />
                        </div>
                    `},{title:"JS",code:`
                        const ajaxData = () => {
                            // 调接口获取数据
                            console.log('调接口获取数据')
                        }
                    `},{title:"CSS",code:`
                        <style scoped>
                        .inputText {
                            width: 220px;
                            margin-right: 20px;
                        }
                        .item-label {
                            display: inline-block;
                            height: 32px;
                            padding-right: 16px;
                            padding-top: 9px;
                            padding-bottom: 9px;
                            font-size: 14px;
                            line-height: 14px;
                            color: #545454;
                            vertical-align: middle;
                        }
                        .required {
                            position: relative;
                        }
                        .required:before {
                            content: "*";
                            display: inline-block;
                            width: 8px;
                            height: 14px;
                            margin-right: 3px;
                            color: red;
                            text-align: center;
                            font-weight: 700;
                        }
                        </style>
                    `}]}),l=f({params:""});return{bol:e,content:t,search:l,ajaxData:()=>{console.log("调接口获取数据")}}}}),y=e=>(N("data-v-dbd37b46"),e=e(),k(),e),z={class:"common_container"},D={class:"mt10"},F=y(()=>a("div",null,[a("span",{class:"ft20 fw700 mr8"},"输入框组件"),a("p",{class:"mt10"}," 自封输入框组件，之所以要封装是因为UI组件库的输入框样式不满足开发要求; 组件通过vue.component进行注册之后,可直接使用 ")],-1)),A={class:"mt10"},M=y(()=>a("label",{class:"item-label"},"SR: ",-1));function R(e,t,l,n,d,i){const u=x("InputText",!0),s=v;return r(),o("div",z,[a("div",D,[g(s,{url:"static/file/md/demo/antDesign/modal/modal.md"},{default:B(()=>[a("div",null,[F,a("div",A,[a("div",null,[M,g(u,{modelValue:e.search.params,"onUpdate:modelValue":t[0]||(t[0]=_=>e.search.params=_),modelModifiers:{trim:!0},enterPromise:e.ajaxData,placeholder:"请输入",class:"inputText"},null,8,["modelValue","enterPromise"])])])])]),_:1},8,["url"])])])}const H=b(j,[["render",R],["__scopeId","data-v-dbd37b46"]]);export{H as default};
