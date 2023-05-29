<template>
  <div>
    <div>
      <preview-item v-for="item in itemsArray" :parentName="item.name" :parentAge="item.age"/>
    </div>
  </div>

</template>

<script lang=ts setup>
import {PARENT_ARRAY_KEY} from '../keys'
import {IParent} from "../interfaces";
import PreviewItem from '../components/PreviewItem.vue'


const itemsArray: IParent[] = JSON.parse(localStorage.getItem(PARENT_ARRAY_KEY)) || []


</script>
