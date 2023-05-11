<script setup lang="ts">
const props =
  defineProps<{
    modelValue: string;
    noBorder?: boolean;
  }>();

const emits =
  defineEmits<{
    (e: 'change', v: string): void;
    (e: 'update:modelValue', v: string): void;
  }>();

const defaultBorderClass = ['border'];
const noBorderClass = ['border-transparent'];
const dynamicClass = computed(() =>
  props.noBorder ? noBorderClass : defaultBorderClass
);
</script>

<template>
  <input
    :value="props.modelValue"
    class="px-2 py-1 rounded-sm border w-full"
    :class="dynamicClass"
    @input="emits('update:modelValue', (($event.target as HTMLInputElement).value))"
    @change="emits('change', ($event.target as HTMLInputElement).value)"
  />
</template>
