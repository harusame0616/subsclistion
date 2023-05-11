<script setup lang="ts">
const emit =
  defineEmits<{
    (e: 'click:title'): void;
  }>();
</script>

<template>
  <BaseCard>
    <h2 class="text-xl font-bold mb-3" @click="emit('click:title')">
      <slot name="title"> </slot>
    </h2>
    <div>
      <slot></slot>
    </div>
  </BaseCard>
</template>

<style scoped></style>
