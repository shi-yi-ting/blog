
## 原生表格封装

```
<template>
    <div>
        <!-- <p class="mt10">只是简单的记录一下, 将页面html以图片的形式下载为pdf</p> -->
        <!-- <el-button @click="handleDown">下载PDF报告</el-button> -->

        <div id="pdfBox" class="mt10">
            <div class="mt10">
                <table class="lightTable">
                    <thead>
                        <tr>
                            <th v-for="(data, index) in columns" :key="index">{{ data }}</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(row, r) in dataList" :key="r">
                            <td>{{ row.errorCode }}</td>
                            <td>{{ row.datails }}</td>
                        </tr>

                        <tr>
                            <span class="orderFlag"></span>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
// import htmlToPdf from '@/utils/htmlToPdf.js'

export default {
    data() {
        return {
            columns: ['错误码', '详情'],
            dataList: [
                {
                    errorCode: '参数规则错误',
                    datails: '参数值缺失',
                },
                {
                    errorCode: '参数规则错误',
                    datails: '参数值缺失',
                },
                {
                    errorCode: '参数规则错误',
                    datails: '参数值缺失',
                },
            ],
        }
    },

    methods: {
        // handleDown() {
        //     htmlToPdf.downloadPDF(document.getElementById('pdfBox'), '下载pdf文件名')
        // },
    },
}
</script>

<style scoped>
.lightTable {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    text-align: center;
    color: #d1d6dd;
}
.lightTable th {
    padding: 8px;
    border: 1px solid #2d374e;
    background: #303a52;
}
.lightTable tr {
    height: 48px;
    line-height: 48px;
}
.lightTable td {
    padding: 8px;
    border: 1px solid #2d374e;
    background: #3a4562;
}

/* 字节画圆圈 */
.lightTable tr .orderFlag {
    position: absolute;
    width: 14px;
    height: 14px;
    line-height: 14px;
    font-size: 12px;
    color: #c1c7d0;
    border-radius: 50%;
    background-color: #f30;
}
</style>

```

## 封装表格使用

```
<template>
    <div class="common_container">
        <div class="mt10">
            <MarkDownBox :url="'static/file/md/enclosure/eleForm.md'">
                <div>
                    <div class="ft20 fw700">原生表格</div>
                    <div class="mt20">
                        <Table />
                    </div>
                </div>
            </MarkDownBox>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Table from './table.vue'


// TODO

</script>

<style scoped>
</style>


```
