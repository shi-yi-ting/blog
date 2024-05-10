# Rating

## 代码

```
<template>
    <div>
        <div class="rating-wrap" style="margin-top: 20px; background: #fff">
            <div class="rating-content">
                <div v-for="item of level" :key="item.name" class="item" :class="(item.name === name) ? 'active' : ''" :style="{ 'background-color': item.color }" @mouseover="tabClick(item)">
                    {{ item.name }}
                </div>
            </div>

            <div class="subTitle">{{ subTitle }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'AAA',
            subTitle: 'AAA: 企业ESG综合表现水平很高,潜在ESG风险很小',

            level: [
                {
                    name: 'AAA',
                    color: '#01695a',
                    title: 'AAA: 企业ESG综合表现水平很高,潜在ESG风险很小',
                },

                {
                    name: 'AA',
                    color: '#02897a',
                    title: 'AA: 企业ESG综合表现水平很高,潜在ESG风险很小',
                },

                {
                    name: 'A',
                    color: '#039588',
                    title: 'A: 企业ESG综合表现水平很高,潜在ESG风险很小',
                },

                {
                    name: 'BBB',
                    color: '#27a69a',
                    title: 'BBB: 企业ESG综合表现水平很高,潜在ESG风险很小',
                },

                {
                    name: 'BB',
                    color: '#4db6ab',
                    title: 'BB: 企业ESG综合表现水平很高,潜在ESG风险很小',
                },

                {
                    name: 'B',
                    color: '#81ccc7',
                    title: 'B: 企业ESG综合表现水平很高,潜在ESG风险很小',
                },

                {
                    name: 'C',
                    color: '#7fdbca',
                    title: 'C: 企业ESG综合表现水平很高,潜在ESG风险很小',
                },

                {
                    name: 'NA',
                    color: '#e6e6e6',
                    title: 'NA: 企业ESG综合表现水平很高,潜在ESG风险很小',
                },
            ],
        }
    },

    methods: {
        tabClick(item) {
            this.name = item.name
            this.subTitle = item.title
        },
    },
}
</script>

<style lang="less" scoped>
.rating-wrap {
    padding: 20px;
    .rating-content {
        display: flex;
        align-items: center;
        height: 88px;
        line-height: 88px;

        .item {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 80px;
            line-height: 80px;
            color: #fff;
            &:hover {
                cursor: pointer;
            }
        }

        .active {
            height: 88px;
            line-height: 88px;
        }
    }

    .subTitle {
        padding: 24px 0 30px 0;
        font-size: 16px;
        color: #666;
    }
}
</style>

```
