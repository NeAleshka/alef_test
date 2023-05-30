<template>
  <div class="w-full flex flex-col">
    <div class="w-full flex justify-between items-center mb-[11px]">
      <h2 class="font-medium text-[16px] leading-[24px]">Дети (макс. 5)</h2>
      <solid-button
        v-show="!limitedChildren"
        @clickBtn="addComponent"
        :useSlot="true"
        :buttonStyles="{ background: 'white', border: '2px solid #01A7FD' }"
      >
        <template #text>
          <div class="flex space-x-[8px]">
            <img src="/images/Union.svg" alt="add" />
            <span>Добавить ребёнка</span>
          </div>
        </template>
      </solid-button>
    </div>
    <div v-for="component in components" :key="component.id">
      <div class="flex space-x-[18px]">
        <div
          class="px-[16px] py-[8px] border-2 rounded-[5px] mb-[10px] w-[260px] h-fit"
        >
          <div class="text-[13px] leading-[16px] text-light-gray">Имя</div>
          <input
            placeholder="Введите имя"
            class="w-full outline-0"
            v-model="component.childrenName"
          />
        </div>
        <div>
          <div
            class="px-[16px] py-[8px] border-2 rounded-[5px] mb-[10px] w-[260px]"
          >
            <div class="text-[13px] leading-[16px] text-light-gray">
              Возраст
            </div>
            <input
              type="number"
              placeholder="Введите возраст"
              class="w-full outline-0"
              v-model="component.childrenAge"
              @input="checkValidAge(+component.childrenAge)"
            />
          </div>
          <div
            v-if="props.parentAge && props.parentAge < component.childrenAge"
            class="text-red-500 text-[12px] font-medium"
          >
            Неверный возраст
          </div>
        </div>
        <button @click="removeChildren(component.id)" class="text-[#01A7FD]">
          Удалить
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from "vue";
import { ChildrenInput } from "../interfaces";
import SolidButton from "../components/SolidButton.vue";

const components = ref<ChildrenInput[]>([]);
const inputValues: ChildrenInput[] = reactive([]);
const limitedChildren = computed(() => Boolean(components.value.length === 5));

const props = defineProps({
  parentAge: {
    type: String,
    required: false,
  },
});
const addComponent = () => {
  components.value.push({
    id: new Date().toString(),
    childrenName: "",
    childrenAge: "",
  });
};

const isValidAge = ref(true);
const collectValues = () => {
  components.value.forEach((child) => {
    inputValues.push(child);
  });
};

const checkValidAge = (age: number) => {
  isValidAge.value = age < parseInt(props.parentAge as string);
};

const removeChildren = (removeId: string) => {
  components.value = components.value.filter((item) => item.id !== removeId);
};

const clearData = () => {
  components.value = [];
};

defineExpose({ collectValues, inputValues, clearData, isValidAge });
</script>
