# 遮罩层封装

## floatLayer组件封装

```
<template>
    <div>
        <div class="bg" :style="bgStyles" v-on="$listeners" />
        <div class="absolute_center" style="z-index: 99;">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'FloatLayer',
    props: {
        bgColor: {
            type: String,
            default: 'black',
        },
        bgOpacity: {
            type: Number,
            default: 0.7,
        },
    },
    computed: {
        bgStyles() {
            let style = {}

            style.backgroundColor = this.bgColor
            style.opacity = this.bgOpacity

            return style
        },
    },
}
</script>

<style scoped>
.bg {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 98;
}
</style>
```

## 使用

```
<FloatLayer>
    <div class="c_fff">遮罩层</div>
</FloatLayer>
```



