# hotFocus

## 代码

```
<template>
    <div class="hotFocus">
        <div v-for="(item, index) of content.list" :key="item.id">
            <div class="content-wrap">
                <div class="content" @mouseover="activeIndex = index" @mouseout="activeIndex = -1">
                    <div class="imgBox" :style="{ 'backgroundImage': `url(${item.img})`, 'backgroundSize': '100%' }">
                        <span class="title">{{ item.title }}</span>
                    </div>

                    <div v-show="activeIndex === index" class="learMore-wrap pointer">
                        <div class="learMore c_fff">了解更多</div>
                    </div>
                </div>

                <div class="article">
                    <div class="article-content">
                        <div v-for="(itemTwo, indexTwo) in content.obj[item.id]" :key="indexTwo + 'seconed'" class="article-item">
                            <div class="article-item-title">
                                {{ itemTwo.title }}
                            </div>

                            <div class="date">{{ itemTwo.date }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
    setup() {
        const activeIndex = ref(undefined)
        const content = reactive({
            list: [
                {
                    id: '0',
                    title: '科技创新',
                    // img: require('@/assets/img/banner/hotFocus01.png'),
                    img: new URL('@/assets/img/banner/hotFocus01.png', import.meta.url).href,
                },

                {
                    id: '1',
                    title: '乡村振兴',
                    // img: require('@/assets/img/banner/hotFocus02.png'),
                    img: new URL('@/assets/img/banner/hotFocus02.png', import.meta.url).href,
                },

                {
                    id: '2',
                    title: '双碳经济',
                    // img: require('@/assets/img/banner/hotFocus03.png'),
                    img: new URL('@/assets/img/banner/hotFocus03.png', import.meta.url).href,
                },
            ],

            obj: {
                '0': [
                    {
                        id: '0',
                        title: '内容介绍',
                        date: '2022-12-24',
                    },

                    {
                        id: '1',
                        title: '内容介绍',
                        date: '2022-12-24',
                    },

                    {
                        id: '2',
                        title: '内容介绍',
                        date: '2022-12-24',
                    },

                    {
                        id: '3',
                        title: '内容介绍',
                        date: '2022-12-24',
                    },

                    {
                        id: '4',
                        title: '内容介绍',
                        date: '2022-12-24',
                    },

                    {
                        id: '5',
                        title: '内容介绍',
                        date: '2022-12-24',
                    },
                ],

                '1': [
                    {
                        id: '0',
                        title: '内容介绍',
                        date: '2022-12-24',
                    },

                    {
                        id: '1',
                        title: '内容介绍',
                        date: '2022-12-24',
                    },
                ],

                '2': [
                    {
                        id: '0',
                        title: '内容介绍',
                        date: '2022-12-24',
                    },

                    {
                        id: '1',
                        title: '内容介绍',
                        date: '2022-12-24',
                    },
                ],
            },
        })

        return {
            activeIndex,
            content,
        }
    },
}
</script>

<style scoped>
.content-wrap {
    display: flex;
    justify-content: space-between;
    height: 236px;
    margin-bottom: 48px;
}
.content {
    position: relative;
}
.imgBox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 422px;
    height: 236px;
    background-color: #e1e1e1;
    background-size: contain;
}
.title {
    color: #fff;
    font-size: 32px;
    font-weight: 700;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}
.learMore-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 80px;
    background-color: #01bd9f;
}
.learMore {
    padding: 5px 20px;
}

.article {
    flex: 1;
}

.article-content {
    /* display: flex;
    justify-content: space-between;
    flex-direction: column; */
    height: 236px;
    padding: 15px 0 15px 24px;
    cursor: pointer;
    overflow: hidden;
}
.article-item {
    min-height: 22px;
    margin-bottom: 14px;
}
.article-item:last-child {
    margin-bottom: 0;
}
.article-item-title {
    display: inline;
    margin-right: 20px;
    line-height: 22px;
    color: #333;
    font-size: 16px;
}
.date {
    float: right;
    line-height: 22px;
    color: #999;
    font-size: 14px;
}
</style>

```
