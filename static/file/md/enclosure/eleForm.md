# element form

## 封装组件 baseForm

```
<template>
    <div class="base-form">
        <el-form ref="formRef" :model="formData" :rules="rules" v-bind="$attrs">
            <el-row v-bind="row">
                <el-col v-for="item in formList" :key="item.prop" v-bind="item.col">
                    <el-form-item v-bind="item" :label="item.label" :prop="item.prop">
                        <!-- 输入框 -->
                        <el-input v-if="item.type === 'input'" v-model="formData[item.prop]" v-bind="item.props"/>


                        <!-- 滑块 -->
                        <el-slider v-if="item.type === 'slider'" v-model="formData[item.prop]" v-bind="item.props"/>


                        <!-- 单选 -->
                        <el-radio-group v-if="item.type === 'radio'" v-model="formData[item.prop]" v-bind="item.groupProps">
                            <template v-for="ra in item.props?.data || []" :key="ra.value">
                                <el-radio-button v-if="item.radioType==='radio-button'" :label="ra.value" v-bind="item.props">{{ ra.label }}</el-radio-button>
                                <el-radio v-else :label="ra.value" v-bind="item.props">{{ ra.label }}</el-radio>
                            </template>
                        </el-radio-group>


                        <!-- 复选框 -->
                        <el-checkbox-group v-if="item.type === 'checkbox'" v-model="formData[item.prop]" v-bind="item.groupProps">
                            <el-checkbox v-for="ch in item.props?.data || []" :label="ch.value" :key="ch.value" v-bind="item.props">
                                {{ ch.label }}
                            </el-checkbox>
                        </el-checkbox-group>


                        <!-- 日期  日期时间 起止时间 -->
                        <el-date-picker v-if="item.type === 'date'" :type="item.dateType || 'date'" v-model="formData[item.prop]" v-bind="item.props" />


                        <!-- 时间 -->
                        <el-time-select v-if="item.type === 'time'" v-model="formData[item.prop]" v-bind="item.props" />


                        <!-- 开关 -->
                        <el-switch v-if="item.type === 'switch'" v-model="formData[item.prop]" v-bind="item.props" />


                        <!-- 下拉框 -->
                        <el-select v-if="item.type === 'select'" v-model="formData[item.prop]" v-bind="item.props">
                            <el-option v-for="op in item.props?.data || []" :label="op.label" :value="op.value" :key="op.value">
                                {{ op.label }}
                            </el-option>
                        </el-select>


                        <template v-if="item.type==='slot'">
                            <slot :name="item.prop" v-bind="{ item, formData, formList }" />
                        </template>


                        <template v-if="item.type==='render'">
                            <component :is="item.render" v-bind="{ item, formData, formList }" />
                        </template>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>


<script setup>
import { ref, computed, watch } from 'vue'

// TODO
const prop = defineProps({
    formList: {
        type: Array,
        default: () => ([])
    },

    row: {
        type: Object
    },

    modelValue: {
        type: Object,
        default: () => ({})
    }
})

const emit = defineEmits(['validate', 'update:modelValue'])

const formData = ref({})
watch(() => prop.modelValue, (newValue) => {
    formData.value = newValue
}, { immediate: true })

watch(formData, (newValue) => {
    emit('update:modelValue', newValue)
})

const rules = computed(() => {
    const rules = prop.formList.reduce((map, i) => {
        if (i.rules) {
            map[i.prop] = i.rules
        }
        return map
    }, {})
    return rules
})

const formRef = ref(null)
// 验证表单
const validate = () => {
    return formRef.value.validate()
}

// 重置表单
const resetFields = () => {
    formRef.value.resetFields()
}

// 重置验证结果
const clearValidate = () => {
    formRef.value.clearValidate()
}

defineExpose({
    validate,
    clearValidate,
    resetFields
})
</script>

<style lang="scss" scoped>
</style>
```

## baseForm的使用

```
<template>
    <div class="common_container">
        <div class="mt10">
            <MarkDownBox :url="'static/file/md/enclosure/eleForm.md'">
                <div>
                    <div class="ft20 fw700">element form表单</div>
                    <div class="mt20">
                        <BaseForm ref="formRef" v-model="formData" v-bind="formConfig" label-width="90px" label-position="right" @validate="confim">
                            <template #tests>
                                <el-button>ee</el-button>
                            </template>
                        </BaseForm>

                        <el-button @click="add">
                            提交
                        </el-button>
                        <el-button @click="reset">
                            重置
                        </el-button>
                    </div>
                </div>
            </MarkDownBox>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

import BaseForm from './vue/baseForm.vue'

import formConfig from './_js/formConfig.jsx'

// TODO
const formRef = ref(null)
const formData = ref({
    test1: '',
    test2: 15,
    test3: '',
    test4: [],
    test5: [],
    test6: '',
    test7: '',
    test8: '',
    tests: ''
})

const add = async () => {
    try {
        await formRef.value.validate()
        console.log('校验成功')
    } catch (error) {
        console.log('校验失败')
    }
}
const reset = () => {
    formRef.value.resetFields()
}
const confim = () => {
    console.log(formData.value)
}
</script>

<style scoped>
</style>
```


## formConfig 数据结构

```
import { ElButton } from 'element-plus'
const formConfig = {
    formList: [
        {
            type: 'input',
            prop: 'test1',
            label: '测试1',
            rules: [
                {
                    required: true,
                    message: 'Please select Activity count',
                    trigger: 'blur'
                }
            ],
            col: {
                span: 12
            }
        },

        {
            type: 'slider',
            prop: 'test2',
            label: '测试2',
            col: {
                span: 12
            }
        },

        {
            type: 'slider',
            prop: 'test222',
            label: '测试222',
            col: {
                span: 12
            }
        },

        {
            type: 'radio',
            props: {
                data: [
                    {
                        value: '1',
                        label: '11'
                    },
                    {
                        value: '2',
                        label: '22'
                    }
                ]
            },
            prop: 'test3',
            label: '测试3',
            col: {
                span: 12
            }
        },

        {
            type: 'checkbox',
            props: {
                data: [
                    {
                        value: '1',
                        label: '11'
                    },
                    {
                        value: '2',
                        label: '22'
                    }
                ]
            },
            prop: 'test4',
            label: '测试4'
        },

        {
            type: 'date',
            dateType: 'daterange',
            prop: 'test5',
            label: '测试5',
            props: {
                'start-placeholder': 'Start date',
                'end-placeholder': 'End date',
                'range-separator': 'To'
            },
            col: {
                span: 12
            }
        },

        {
            type: 'time',
            prop: 'test6',
            label: '测试6'
        },

        {
            type: 'switch',
            prop: 'test7',
            label: '测试7'
        },

        {
            type: 'slot',
            prop: 'tests',
            label: 'slot'
        },

        {
            type: 'render',
            render: () => {
                return (
                    <ElButton>render</ElButton>
                )
            },
            label: 'render'
        },

        {
            type: 'select',
            prop: 'test8',
            label: '测试8',
            props: {
                data: [
                    {
                        value: '1',
                        label: '11'
                    },
                    {
                        value: '2',
                        label: '22'
                    }
                ]
            }
        }
    ]
}
export default formConfig

```
