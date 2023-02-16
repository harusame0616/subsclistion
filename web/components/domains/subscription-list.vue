<script setup lang="ts">
const subscriptionList = useSubscriptionList();
</script>

<template>
  <ul>
    <DomainsSubscriptionCard
      v-for="subscription of subscriptionList.list.value"
      :key="subscription.id"
      class="border border-gray-300 shadow-sm mb-2 rounded-sm"
      :subscription="subscription"
    />
  </ul>
</template>
