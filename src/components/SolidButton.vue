<template>
  <button
    :class="[
      'px-[20px] py-[10px] bg-[#01A7FD] rounded-[100px]',
      { 'bg-gray-200': props.disabled },
    ]"
    :style="props.buttonStyles"
    @click="emitClick"
    :disabled="props.disabled"
  >
    <span
      v-if="!props.useSlot"
      class="text-white text-[14px] leading-[24px]"
      :style="props.textStyles"
    >
      {{ props.text || "Text" }}
    </span>
    <slot v-else name="text"></slot>
  </button>
</template>

<script lang="ts" setup>
import { CSSProperties, PropType } from "vue";

const props = defineProps({
  text: {
    type: String,
  },
  buttonStyles: {
    type: Object as PropType<CSSProperties>,
    required: false,
  },
  textStyles: {
    type: Object as PropType<CSSProperties>,
    required: false,
  },
  disabled: {
    type: Boolean,
    required: false,
  },
  useSlot: {
    type: Boolean,
    required: false,
  },
});

const emits = defineEmits<{
  clickBtn: [];
}>();

const emitClick = () => {
  emits("clickBtn");
};
</script>
