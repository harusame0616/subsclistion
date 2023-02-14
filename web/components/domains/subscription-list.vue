<script setup lang="ts">
import { IntervalAmount } from '../../composables/useSubscriptionList';

const subscriptionList = useSubscriptionList();

const formatPrice = (price: number) => `${price.toLocaleString()}`;
const formatInterval = (value: number, amount: IntervalAmount) => {
  const amountDisplayMap: { [k in IntervalAmount]: string } = {
    DAILY: '日',
    WEEKLY: '週',
    MONTHLY: '月',
    YEARLY: '年',
  };
  return `${value}${amountDisplayMap[amount]}`;
};
const formatDate = (date: string) => new Date(date).toLocaleString();
</script>

<template>
  <ul>
    <li
      v-for="subscription of subscriptionList.list.value"
      :key="subscription.id"
      class="border border-gray-300 shadow-sm mb-2 rounded-sm"
    >
      <div class="p-2 pb-0">
        <div class="text-2xl font-bold">{{ subscription.serviceName }}</div>
      </div>
      <div class="p-2 flex flex-col gap-2">
        <div>
          <div class="text-xs text-stone-600 mr-2">初回支払日</div>
          <div>
            {{ formatDate(subscription.firstPaymentDate) }}
          </div>
        </div>
        <div>
          <div class="text-xs text-stone-500 mr-2">支払い</div>
          <div>
            {{ formatPrice(subscription.price) }} /
            {{
              formatInterval(
                subscription.intervalValue,
                subscription.intervalAmount
              )
            }}
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>
