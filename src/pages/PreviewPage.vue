<template>
  <div class="w-full px-[20px] pt-[30px] flex items-center ">
    <div class="w-[616px] mx-auto overflow-y-auto">
      <div class="w-full mb-[33px] flex flex-wrap justify-between ">
        <preview-item v-for="item in itemsArray" :parentName="item.name" :parentAge="item.age" :children="item.children"/>
    </div>
  </div>

  </div>

</template>

<script lang=ts setup>
import {PARENT_ARRAY_KEY} from '../keys'
import {IParent} from "../interfaces";
import PreviewItem from '../components/PreviewItem.vue'


const itemsArray: IParent[] = JSON.parse(localStorage.getItem(PARENT_ARRAY_KEY)) || []


</script>

