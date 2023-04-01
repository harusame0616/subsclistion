<script setup lang="ts">
import { Subscription } from '~/domains/subscription/types/subscription-types';

const props =
  defineProps<{
    subscriptions: Subscription[];
  }>();
</script>

<template>
  <ul class="grow relative flex flex-col gap-2">
    <li v-for="subscription of props.subscriptions" :key="subscription.id">
      <DomainSubscriptionCard :subscription="subscription" />
    </li>
  </ul>
</template>
