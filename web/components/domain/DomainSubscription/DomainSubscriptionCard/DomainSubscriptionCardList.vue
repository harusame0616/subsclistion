<script setup lang="ts">
import { Subscription } from '~/domains/subscription/types/subscription-types';

const props =
  defineProps<{
    subscriptions: Subscription[];
  }>();
</script>

<template>
  <ul class="grow max-w-sm relative flex flex-col gap-2">
    <DomainSubscriptionCard
      v-for="subscription of props.subscriptions"
      :key="subscription.id"
      :subscription="subscription"
    />
  </ul>
</template>
