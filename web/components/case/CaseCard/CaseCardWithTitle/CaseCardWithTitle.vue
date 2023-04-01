<script setup lang="ts"></script>

<template>
  <BaseCard>
    <h2 class="text-xl font-bold mb-3">
      <slot name="title"> </slot>
    </h2>
    <p>
      <slot></slot>
    </p>
  </BaseCard>
</template>

<style scoped></style>
