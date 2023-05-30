<template>
  <div class="px-[16px] py-[8px] border-2 rounded-[5px] mb-[10px]">
    <div class="text-[13px] leading-[16px] text-light-gray">{{props.label}}</div>
    <input v-if="props.label==='Имя'" :placeholder="`Введите ${props.label.toLowerCase()} родителя`" class="w-full outline-0"
           v-model.trim="inputValue"
           @input="changeValue(props.label,$event.target.value)">
    <input v-else :placeholder="`Введите ${props.label.toLowerCase()} родителя`" class="w-full outline-0"
           type="number"
           v-model.number="inputValue"
           @input="changeValue(props.label,$event.target.value)">
  </div>
</template>

<script lang=ts setup>
import {defineProps,ref,defineEmits,defineExpose} from 'vue'
//import defineProps for Webstorm,because it not found
const props=defineProps({
  label:{
    type:String,
    required:true
  },
})
const inputValue=ref('')
const emits = defineEmits<{
  changeInputValue: [label: string,value:string]
}>()

const changeValue=(label:string,value:string)=>{
  emits('changeInputValue',label,value)
}

defineExpose({inputValue})
</script>
