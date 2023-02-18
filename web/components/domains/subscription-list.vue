<script setup lang="ts">
import { Subscription } from '~~/domains/subscription/types/subscription-types';

const props = defineProps<{
  subscriptions: Subscription[];
}>();
</script>

<template>
  <ul class="grow max-w-sm relative">
    <DomainsSubscriptionCard
      v-for="subscription of props.subscriptions"
      :key="subscription.id"
      class="border border-gray-300 shadow-sm mb-2 rounded-sm"
      :subscription="subscription"
    />
  </ul>
</template>
