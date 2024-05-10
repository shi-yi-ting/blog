# 加载动画组件封装

## lazy组件封装

```
<template>
    <div v-if="show">
        <slot />
    </div>
    <div v-else-if="showTip" style="text-align: center;">正在加载, 请稍候...</div>
</template>

<script>
export default {
    props: {
        time: {
            type: Number,
            default: 100,
        },
        showTip: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            show: false,
        }
    },
    created() {
        this.$nextTick(() => {
            setTimeout(() => {
                this.show = true
            }, this.time)
        })
    },
}
</script>

<style scoped>
</style>

```


## lazy组件使用

```
<template>
    <div class="common_container">
        <div class="mt10">
            <MarkDownBox :url="'static/file/md/enclosure/lazy.md'">
                <div class="ft20 fw700">加载提示</div>

                <div class="lazy">
                    <div v-if="isShow" @click="() => isShow = !isShow">
                    <Lazy :showTip="isShow">
                        <div>加载中提示语,3秒之后自动关闭...</div>
                    </Lazy>
                    </div>
                </div>
            </MarkDownBox>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'

import Lazy from './vue/lazy.vue'

export default {
    components: {
        Lazy,
    },

    setup() {
        const isShow = ref(true)

        // 定时器在离开页面的时候应该进行清理
        setTimeout(() => {
            isShow.value = false
        }, 3000)

        return {
            isShow,
        }
    },
}
</script>

<style lang="less" scoped>
.lazy {
    display: flex;
    justify-content: center;
}
</style>

```
