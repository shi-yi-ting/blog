# ibTools

##

```
<template>
    <div class="container">
        <div class="section-banner" :style="{ backgroundImage: 'url(' + ibtools_banner + ')' }">

            <div class="title-wrap">
                <div class="section-title">
                    <span>标题</span>
                </div>

                <div class="section-subtitle">
                    <span>构建投行产品库，评级数据库，业务案例库，培训资源库，为用户提供投融资专业辅导(背景可放图片)</span>
                </div>
            </div>


            <div class="section-menu">
                <div v-for="(item, index) of list" :key="index" class="section-menu-item pointer">
                    <img :src="item.imgUrl" alt="">
                    <span>{{ item.title }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ibtools_banner: new URL('@/assets/img/banner/ibTools.png', import.meta.url).href,

            list: [
                {
                    id: '0',
                    title: '标题',
                    // imgUrl: require('@/assets/img/banner/编组16.png'),
                    imgUrl: new URL('@/assets/img/banner/编组16.png', import.meta.url).href,
                },

                {
                    id: '1',
                    title: '标题',
                    // imgUrl: require('@/assets/img/banner/编组20.png'),
                    imgUrl: new URL('@/assets/img/banner/编组20.png', import.meta.url).href,
                },

                {
                    id: '2',
                    title: '标题',
                    // imgUrl: require('@/assets/img/banner/编组44.png'),
                    imgUrl: new URL('@/assets/img/banner/编组44.png', import.meta.url).href,
                },

                {
                    id: '3',
                    title: '标题',
                    // imgUrl: require('@/assets/img/banner/编组45.png'),
                    imgUrl: new URL('@/assets/img/banner/编组45.png', import.meta.url).href,
                },

                {
                    id: '4',
                    title: '标题',
                    // imgUrl: require('@/assets/img/banner/编组46.png'),
                    imgUrl: new URL('@/assets/img/banner/编组46.png', import.meta.url).href,
                },
            ],
        }
    },
}
</script>

<style lang="less" scoped>
.container {
    height: 666px;
}
.section-banner {
    position: relative;
    width: 100%;
    height: 405px;
    background-color: #6eb4e8;
    background: no-repeat;
    background-size: cover;
}

.title-wrap {
    position: absolute;
    top: 56px;
    left: 62%;
    transform: translateX(-50%);
    margin-left: -108px;
}

.section-title {
    // position: absolute;
    // top: 150px;
    // left: 360px;
    font-size: 70px;
    color: #fff;
    font-weight: 400;
}

.section-subtitle {
    // position: absolute;
    // top: 260px;
    // left: 360px;
    font-size: 20px;
    color: #fff;
}

.section-menu {
    position: absolute;
    left: 50%;
    top: 282px;
    // transform: translate(-50%, -50%);
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    width: 960px;
    height: 260px;
    padding: 50px 72px;
    // margin-left: -600px;
    box-shadow: 0px 22px 54px 0px rgba(18, 17, 39, 0.1);
    background-color: #fff;
    border-radius: 8px;
}

.section-menu-item {
    height: 150px;
    width: 180px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 32px;

    img {
        width: 86px;
        height: 86px;
        margin: 0 auto;
    }

    span {
        margin: 0 auto;
        font-size: 20px;
    }
}
.section-content {
    padding-top: 130px;
    width: 1200px;
    margin: 0 auto;
}
</style>

```
