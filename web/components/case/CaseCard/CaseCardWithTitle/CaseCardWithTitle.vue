<script setup lang="ts"></script>

<template>
  <BaseCard>
    <h2 class="text-xl font-bold mb-3">
      <slot name="title"> </slot>
    </h2>
    <div>
      <slot></slot>
    </div>
  </BaseCard>
</template>

<style scoped></style>
