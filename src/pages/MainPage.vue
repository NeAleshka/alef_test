<template>
  <div class="w-full px-[20px] pt-[30px] flex flex-col items-center">
    <div class="w-[616px]">
      <h2 class="mb-[20px] font-medium">Персональные данные</h2>
      <div class="w-full mb-[33px]">
        <parent-input label="Имя" @changeInputValue="changeValue" ref="nameParentRef"/>
        <parent-input label="Возраст" @changeInputValue="changeValue" ref="ageParentRef"/>
        <div v-if="parentAge && parentAge<18" class="text-red-500 text-[12px] font-medium">Возраст родителя должен быть не менее
          18</div>
      </div>
      <children-inputs ref="childrenInputsRef" :parentAge="parentAge"/>
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
import ChildrenInputs from "../components/ChidrenInputs.vue";

const isInvalidForSave=ref(true)
const parentName=ref('')
const parentAge=ref('')
const parentArray:IParent[]=JSON.parse(localStorage.getItem(PARENT_ARRAY_KEY))||[]
const nameParentRef=ref()
const ageParentRef=ref()
const childrenInputsRef=ref()

const changeValue = (label: string, inputValue: string) => {
  debugger
  if(!inputValue.length){
    isInvalidForSave.value=true
  }else{
    label==='Имя'?parentName.value=inputValue:parentAge.value=inputValue
    isInvalidForSave.value=false
  }
}

const btnClick = () => {
  const newParent:IParent={name:parentName.value,age:parentAge.value}
  childrenInputsRef.value.collectValues()
  newParent.children=childrenInputsRef.value.inputValues.result
  parentArray.push(newParent)
  localStorage.setItem(PARENT_ARRAY_KEY,JSON.stringify(parentArray))
  cleanData()
}

const cleanData=()=>{
  parentAge.value=''
  parentName.value=''
  nameParentRef.value.inputValue=''
  ageParentRef.value.inputValue=''
  childrenInputsRef.value.clearData()
  isInvalidForSave.value=true
}

</script>
