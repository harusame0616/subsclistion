<script setup lang="ts">
import {
  IntervalAmount,
  Subscription,
} from '~/domains/subscription/composables/useSubscriptionList';

const props =
  defineProps<{
    subscription: Subscription;
  }>();
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
  <article>
    <CaseCardWithTitle>
      <template #title>
        {{ props.subscription.serviceName }}
      </template>

      <div class="flex flex-col gap-2">
        <div>
          <div class="text-xs text-stone-600 mr-2">初回支払日</div>
          <div>
            {{ formatDate(props.subscription.firstPaymentDate) }}
          </div>
        </div>
        <div>
          <div class="text-xs text-stone-500 mr-2">値段</div>
          <div>
            {{ formatPrice(props.subscription.price) }} /
            {{
              formatInterval(
                props.subscription.intervalValue,
                props.subscription.intervalAmount
              )
            }}
          </div>
        </div>
      </div>
    </CaseCardWithTitle>
  </article>
</template>
