import{_ as r,x as n,o as l,c as i,d as t,U as d,ag as v,w as m,v as b,j as c,cY as g,z as x,g as _,p,b as f,N as S}from"./index-dd7dc6e8.js";const y={props:{list:{type:Array,default:()=>[]}},setup(){return{bol:n({isExpand:!1})}}},M={class:"mt10"},w={class:"mt10"},E={class:"markDown mt20"};function I(a,e,s,o,h,u){const D=g;return l(),i("div",M,[t("div",w,[t("div",{class:"hide mt20 text_align_center pointer",onClick:e[0]||(e[0]=()=>{o.bol.isExpand=!o.bol.isExpand})},d(o.bol.isExpand?"收起":"展开"),1),v(a.$slots,"default",{},void 0,!0),t("div",E,[m(t("div",null,[c(D,{list:s.list},null,8,["list"])],512),[[b,o.bol.isExpand]]),t("div",{class:"mt20 text_align_center pointer",onClick:e[1]||(e[1]=()=>{o.bol.isExpand=!o.bol.isExpand})},d(o.bol.isExpand?"收起文档":"显示文档"),1)])])])}const k=r(y,[["render",I],["__scopeId","data-v-2e6e631c"]]);const $=a=>(p("data-v-6f84ddd6"),a=a(),f(),a),B={class:"mt10"},O={class:"border_bottom"},C=$(()=>t("span",{class:"ft20 fw700 mr8"},"子组件",-1)),N={__name:"son",props:{fatherData:{type:String,default:""},fatherData02:{type:String,default:""}},setup(a){const e=a;return x(()=>e.fatherData02,()=>{console.log("子-watch监听fatherData02",e.fatherData02)}),_(()=>{console.log("子-onMounted 打印",e.fatherData),console.log("子-onMounted 打印02",e.fatherData02)}),(s,o)=>(l(),i("div",null,[t("div",B,[t("div",O,[C,t("div",null,d(a.fatherData02),1)])])]))}},T=r(N,[["__scopeId","data-v-6f84ddd6"]]);const V=a=>(p("data-v-e23b15b2"),a=a(),f(),a),j={class:"common_container"},z={class:"codeWrap mt10"},A={class:"border_bottom"},F=V(()=>t("div",null,[t("span",{class:"ft20 fw700 mr8"},"父组件"),t("div",null," 父组件onMounted中异步获取数据, 然后将数据传递给子组件; 子组件周期函数 onMounted 将获取不到数据, 但是DOM中可正常渲染传递过来的数据! "),t("div",null,"按F12查看打印")],-1)),H={__name:"comm",setup(a){const e=n({list:[{title:"HTML",code:`
                <!-- 父组件 -->
                <div class="border_bottom">
                    <div>
                        <span class="ft20 fw700 mr8">父组件</span>
                        <div>
                            父组件onMounted中异步获取数据, 然后将数据传递给子组件; 子组件周期函数 onMounted 将获取不到数据, 但是DOM中可正常渲染传递过来的数据!
                        </div>
                    </div>

                    <!-- <div class="mt15">
                        <a-button type="primary" @click="getData">点击调接口, 数据可传递到子组件, 子组件也可监听到传递过来的数据</a-button>
                    </div> -->

                    <!-- 子组件 -->
                    <Son :fatherData="content.fatherData" :fatherData02="content.fatherData02" />
                </div>
            `},{title:"JS",code:`
                // 子组件
                // TODO
                const props = defineProps({
                    fatherData: {
                        type: String,
                        default: '',
                    },

                    fatherData02: {
                        type: String,
                        default: '',
                    },
                })

                watch(() => props.fatherData02, () => {
                    // 这里可以打印出 props.fatherData02
                    console.log('子-watch监听fatherData02', props.fatherData02)
                })

                onMounted(() => {
                    console.log('子-onMounted 打印', props.fatherData)

                    // 这里可以打印不出来 props.fatherData02,也就是获取不到父组件异步加载传递过来的数据
                    console.log('子-onMounted 打印02', props.fatherData02)
                })
            `}]}),s=n({fatherData:"fatherData",fatherData02:""}),o=()=>{setTimeout(()=>{s.fatherData02="fatherData02"},1e3)};return _(()=>{o(),console.log("父-onMounted 打印：",s.fatherData),console.log("父-onMounted 打印02: ",s.fatherData02)}),(h,u)=>(l(),i("div",j,[t("div",z,[c(k,{list:e.list},{default:S(()=>[t("div",A,[F,c(T,{fatherData:s.fatherData,fatherData02:s.fatherData02},null,8,["fatherData","fatherData02"])])]),_:1},8,["list"])])]))}},L=r(H,[["__scopeId","data-v-e23b15b2"]]);export{L as default};
