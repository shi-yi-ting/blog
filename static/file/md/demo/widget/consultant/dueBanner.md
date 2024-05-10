# dueBanner

## 代码

```
<template>
    <div>
        <div class="dueBanner-wrap">
            <div class="left-content">
                <div class="line">
                    <div v-if="active.num === 1" class="line-active"></div>
                    <div v-else class="line-noActive"></div>
                </div>

                <div class="item-wrap">
                    <div class="item" :class="active.num === 1 ? 'active' : 'noActive'" @click="goRouterPage(1)">ESG评级数据库</div>
                    <div class="item" :class="active.num === 2 ? 'active' : 'noActive'" @click="goRouterPage(2)">ESG风险监测中心</div>
                </div>
            </div>

            <div v-if="active.num === 1" class="right-content">ESG评级数据库</div>

            <div v-if="active.num === 2" class="right-content">ESG风险监测中心</div>
        </div>
    </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
    setup() {
        const active = reactive({
            num: 1,
        })

        // eslint-disable-next-line consistent-return
        const goRouterPage = (num) => {
            active.num = num

            // if (active.isActive === 1) {
            //     return false
            // }

            // $this.$router.push('/esgOutlook/dueDiligence')

            // eslint-disable-next-line no-alert
            // alert('页面跳转')
        }

        return {
            active,

            goRouterPage,
        }

    },
})
</script>

<style lang="less" scoped>
.dueBanner-wrap {
    display: flex;
    align-items: center;
    height: 168px;
    padding: 0 160px;
    // background-image: url("~@/assets/img/banner/duerisk.png");
    background-image: url("@/assets/img/banner/duerisk.png");
    background-size: cover;
    .left-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 300px;

        .line {
            position: relative;
            height: 80px;
            width: 1px;
            border-left: 1px solid #aaa;

            .line-active {
                position: absolute;
                top: 0;
                left: -2px;
                width: 4px;
                height: 30px;
                border-left: 4px solid green;
            }

            .line-noActive {
                position: absolute;
                bottom: 0;
                left: -2px;
                width: 4px;
                height: 30px;
                border-left: 4px solid green;
            }
        }

        .item-wrap {
            width: 500px;
        }
        .item {
            padding-left: 16px;
            font-size: 32px;
            color: #fff;
            opacity: 0.3;
            cursor: pointer;
        }
        .active {
            color: #fff;
            opacity: 1;
            cursor: text;
        }
    }
    .right-content {
        color: #fff;
    }
}
</style>

```
