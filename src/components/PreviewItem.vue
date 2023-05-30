<template>
  <div class="flex flex-col mb-[100px]">
    <h2 class="mb-[20px] font-medium">Персональные данные</h2>
    <div>
      <p class="font-bold mb-[60px]">
        {{ props.parentName }}, {{ props.parentAge }} лет
      </p>
    </div>
    <h2 class="font-medium-bold mb-[20px]">Дети</h2>
    <div
      v-for="child in props.children"
      class="text-[16px] bg-[#F1F1F1] px-[20px] py-[10px] font-bold mb-[20px]"
    >
      {{ child.childrenName }}, {{ child.childrenAge }} лет
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { IChildren } from "../interfaces";

const props = defineProps({
  parentName: {
    type: String,
  },
  parentAge: {
    type: String,
  },
  children: {
    type: Array as PropType<IChildren[]>,
    required: false,
    default: [],
  },
});
</script>
