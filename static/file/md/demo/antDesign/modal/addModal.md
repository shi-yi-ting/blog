```
<template>
    <span>
        <a-button type="primary" size="small" @click="addModal">新增</a-button>
        <a-modal
            v-model:visible="dialog.visiable"
            :maskClosable="false"
            :title="dialog.title"
            okText="保存"
            cancelText="取消"
            :width="580"
            @ok="save"
        >
            <a-form
                ref="formRef"
                :model="inputData"
                :rules="rules"
                :labelCol="{ span: 4 }"
                :wrapperCol="{ span: 20 }"
                autocomplete="off"
            >
                <a-form-item label="项目编号" name="code">
                    <a-input v-model:value="inputData.code" />
                </a-form-item>
                <a-form-item label="项目名称" name="proName">
                    <a-input v-model:value="inputData.proName" />
                </a-form-item>
                <a-form-item label="项目类型" name="proType">
                    <a-select v-model:value="inputData.proType" class="width_220">
                        <a-select-option v-for="(item) of options.projectTypeList" :key="item.value" :value="item.value">{{ item.label }}</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item label="项目阶段" name="proStage">
                    <a-select v-model:value="inputData.proStage" class="width_220">
                        <a-select-option v-for="(item) of options.projectStageList" :key="item.value" :value="item.value">{{ item.label }}</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item label="开始时间" name="stratTime">
                    <a-date-picker v-model:value="inputData.stratTime" :locale="locale" class="datepicker" />
                </a-form-item>
            </a-form>
        </a-modal>
    </span>
</template>

<script lang="ts" setup>
import { ref, reactive, watch, onMounted } from 'vue'
import { message } from 'ant-design-vue'

import dayjs from 'dayjs'
// import { getDictionaryApi } from '@/api/request.ts'

// props
defineProps({
    rowData: {
        // required: true,
        type: Object,
    },
})

// TODO
const formRef = ref(null)
const dialog = reactive({
    visiable: false,
    title: '',
})

const inputData = reactive({
    id: '',
    code: '',
    proName: '',
    proType: '',
    proStage: '',
    proSchedule: '',
    head: '',
    stratTime: dayjs(),
    endTime: dayjs(),
})

const rules = {
    code: [{ required: true, message: '请填写项目编号' }],
    proName: [{ required: true, message: '请填写项目名称' }],
}

const addModal = () => {
    formRef.value?.clearValidate()
    inputData.id = ''
    inputData.code = ''
    inputData.proName = ''
    inputData.proType = ''
    inputData.proStage = ''
    inputData.proSchedule = ''
    inputData.stratTime = dayjs()
    inputData.endTime = dayjs()

    dialog.visiable = true
    dialog.title = '新增'
}

// 确定/保存
const save = async () => {
    console.log('保存...');

    try {
        const params = {
            id: inputData.id,
            code: inputData.code,
            proName: inputData.proName,
            proType: inputData.proType,
            proStage: inputData.proStage,
            proSchedule: inputData.proSchedule,
            // stratTime: handleTime(inputData.stratTime.toISOString()),
            // endTime: handleTime(inputData.endTime.toISOString()),
            // access_token: Storage.getTokenFromSession()
        }

        // 调用接口
        // eslint-disable-next-line new-cap
        // const resp = await api.project.UpdateProject(params)

        // if (resp.success) {
        //     message.success('保存成功')
        //     dialog.visiable = false
        //     // 重新请求数据 (分页与检索条件不变)
        //     // getTableList() // 刷新表格
        //     formRef.value?.clearValidate()
        // }
        dialog.visiable = false
    } catch (err) {
        console.log(err)
        dialog.visiable = false
    }
}

// 下拉框列表
const options = reactive({
    projectStageList: [], // 项目阶段
    projectTypeList: [], // 项目类型
})

// 下拉框获取
const getDictionary = async (type) => {
    try {
        const params = {
            keyCode: type,
        }

        const resp = await getDictionaryApi(params)
        if (resp.success) {
            if (type === 'ProjectStage') {
                options.projectStageList = resp.data.map((item) => {
                    return {
                        label: item.dicValue,
                        value: item.dicCode
                    }
                })
            } else if (type === 'ProjectType') {
                options.projectTypeList = resp.data.map((item) => {
                    return {
                        label: item.dicValue,
                        value: item.dicCode
                    }
                })
            }
        } else {
            message.error('获取下拉选项失败')
        }

    } catch(err) {
        console.log('err', err)
    }
}

onMounted(async () => {
    // await getDictionary('ProjectStage') // 项目阶段
    // await getDictionary('ProjectType') // 项目类型
})
</script>

```
