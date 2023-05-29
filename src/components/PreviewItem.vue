<template>
  <div>
    {{props.parentName}} {{props.parentAge}}
    </div>


</template>

<script lang=ts setup>
import { defineProps,PropType} from 'vue'
import {IParent} from "../interfaces";

const props=defineProps({
  parentName:{
    type:String
  },
  parentAge:{
    type:String
  },
  children:{
    type:Array as PropType<IParent[]>
  }
})

</script>
