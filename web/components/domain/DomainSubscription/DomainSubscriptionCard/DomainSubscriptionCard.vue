<script setup lang="ts">
import { BaseInput } from '~/components/base/BaseInput';
import {
  IntervalAmount,
  Subscription,
} from '~/domains/subscription/composables/useSubscriptionList';
import { useSubscriptionEdit } from '~/domains/subscription/composables/useSubScriptionEdit';

const props =
  defineProps<{
    subscription: Subscription;
  }>();

const { subscription, changeServiceName } = useSubscriptionEdit({
  initialSubscription: props.subscription,
});
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

const serviceNameEditing = ref(props.subscription.serviceName);
const isServiceNameEditing = ref(false);
const serviceNameInputRef = ref<InstanceType<typeof BaseInput> | null>(null);

const startServiceNameTitleEdit = () => {
  isServiceNameEditing.value = true;
};

const clearServiceNameEditStatus = () => {
  isServiceNameEditing.value = false;
  serviceNameInputRef.value?.$el.blur();
};

const finishServiceNameTitleEdit = async (
  serviceName: string = subscription.value.serviceName
) => {
  changeServiceName(serviceName);
  clearServiceNameEditStatus();
};

const cancelServiceNameTitleEdit = () => {
  serviceNameEditing.value = subscription.value.serviceName;
  clearServiceNameEditStatus();
};

watchEffect(() => {
  serviceNameEditing.value = props.subscription.serviceName;
});
</script>

<template>
  <article>
    <CaseCardWithTitle @click:title="startServiceNameTitleEdit">
      <template #title>
        <label
          :for="subscription.id + 'serviceName'"
          class="text-xs text-stone-600 mr-2 block"
          >サービス名</label
        >
        <BaseInput
          :id="subscription.id + 'serviceName'"
          ref="serviceNameInputRef"
          v-model="serviceNameEditing"
          type="text"
          class="-ml-2"
          :no-border="!isServiceNameEditing"
          @change="finishServiceNameTitleEdit"
          @blur="finishServiceNameTitleEdit()"
          @keydown.esc.prevent.stop="cancelServiceNameTitleEdit"
        />
      </template>

      <div class="flex flex-col gap-2">
        <div>
          <label class="text-xs text-stone-600 mr-2" for="firstPaymentForm"
            >初回支払日</label
          >
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
