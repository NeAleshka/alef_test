<template>
  <div class="w-full px-[20px] pt-[30px] flex flex-col items-center">
    <div class="w-[616px]">
      <h2 class="mb-[20px] font-medium">Персональные данные</h2>
      <parent-input label="Имя" @changeInputValue="changeValue" ref="nameParentRef"/>
      <parent-input label="Возраст" @changeInputValue="changeValue" ref="ageParentRef"/>
      <solid-button text="Сохранить" @clickBtn="btnClick" :disabled="isInvalidForSave"/>
    </div>

  </div>
</template>

<script lang=ts setup>

import ParentInput from '../components/ParentInput.vue'
import SolidButton from '../components/SolidButton.vue'
import {ref} from "vue";
import {IParent} from "../interfaces";
import {PARENT_ARRAY_KEY} from "../keys";

const isInvalidForSave=ref(true)
const parentName=ref('')
const parentAge=ref('')
const parentArray:IParent[]=[]
const nameParentRef=ref()
const ageParentRef=ref()

const changeValue = (label: string, inputValue: string) => {
  if(!nameParentRef.value.inputValue.length || !ageParentRef.value.inputValue){
    isInvalidForSave.value=true
  }else{
    label==='Имя'?parentName.value=inputValue:parentAge.value=inputValue
    isInvalidForSave.value=false
  }
}

const btnClick = () => {
  const newParent={name:parentName.value,age:parentAge.value}
  parentArray.push(newParent)
  localStorage.setItem(PARENT_ARRAY_KEY,JSON.stringify(parentArray))
  cleanData()
}

const cleanData=()=>{
  parentAge.value=''
  parentName.value=''
  nameParentRef.value.inputValue=''
  ageParentRef.value.inputValue=''
  isInvalidForSave.value=true
}

</script>
