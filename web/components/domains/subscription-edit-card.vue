<script setup lang="ts">
import { NewSubscription } from '~~/domains/subscription/types/subscription-types';
import {
  IntervalAmount,
  Subscription,
} from '../../composables/useSubscriptionList';

const props = defineProps<{
  subscription?: Subscription;
}>();
const emits = defineEmits<{
  (e: 'register', value: Subscription | NewSubscription): void;
  (e: 'cancel'): void;
}>();

const intervalAmountOptions: { value: IntervalAmount; label: string }[] = [
  { value: 'DAILY', label: '日ごと' },
  { value: 'WEEKLY', label: '週ごと' },
  { value: 'MONTHLY', label: '月ごと' },
  { value: 'YEARLY', label: '年ごと' },
];

const subscriptionWork = ref({ ...props.subscription });
const reset = () => {
  subscriptionWork.value = { ...props.subscription };
};

const subscriptionId = computed({
  get: () => subscriptionWork.value.id,
  set: (newId?: string) => {
    subscriptionWork.value = {
      ...subscriptionWork.value,
      id: newId,
    };
  },
});
const serviceName = computed({
  get: () => subscriptionWork.value.serviceName ?? '',
  set: (newServiceName: string) => {
    subscriptionWork.value = {
      ...subscriptionWork.value,
      serviceName: newServiceName,
    };
  },
});
const price = computed({
  get: () => subscriptionWork.value.price ?? 0,
  set: (newPrice: number) => {
    subscriptionWork.value = {
      ...subscriptionWork.value,
      price: newPrice,
    };
  },
});
const firstPaymentDate = computed({
  get: () =>
    subscriptionWork.value.firstPaymentDate ??
    new Date().toISOString().slice(0, 10),
  set: (newFirstPaymentDate: string) => {
    subscriptionWork.value = {
      ...subscriptionWork.value,
      firstPaymentDate: newFirstPaymentDate,
    };
  },
});
const intervalAmount = computed({
  get: () => subscriptionWork.value.intervalAmount ?? 'MONTHLY',
  set: (newIntervalAmount: IntervalAmount) => {
    subscriptionWork.value = {
      ...subscriptionWork.value,
      intervalAmount: newIntervalAmount,
    };
  },
});
const intervalValue = computed({
  get: () => subscriptionWork.value.intervalValue ?? 1,
  set: (newIntervalValue: number) => {
    subscriptionWork.value = {
      ...subscriptionWork.value,
      intervalValue: newIntervalValue,
    };
  },
});

const cancel = () => {
  reset();
  emits('cancel');
};

const register = (subscription: Subscription | NewSubscription) => {
  reset();
  emits('register', subscription);
};
</script>

<template>
  <div class="border border-gray-300 shadow-sm mb-2 rounded-sm">
    <div class="p-2 pb-0">
      <input
        v-model="serviceName"
        class="text-2xl font-bold bg-transparent border-b-white border-b"
      />
    </div>
    <div class="p-2 flex flex-col gap-2">
      <div>
        <div class="text-xs text-stone-600 mr-2">初回支払日</div>
        <input
          v-model="firstPaymentDate"
          type="date"
          class="bg-transparent border-b-white border-b"
        />
      </div>
      <div>
        <div class="text-xs text-stone-500 mr-2">値段</div>
        <input
          v-model="price"
          class="bg-transparent border-b-white border-b"
          type="number"
        />
      </div>
      <div>
        <div class="text-xs text-stone-500 mr-2">支払い間隔</div>
        <div>
          <input
            v-model="intervalValue"
            class="bg-transparent border-b-white border-b"
            type="number"
          />
          <select
            v-model="intervalAmount"
            class="bg-transparent border-b-white border-b text-white"
          >
            <option
              v-for="option of intervalAmountOptions"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="flex gap-2 p-2">
      <button class="rounded-sm border border-white p-2" @click="cancel()">
        キャンセルする
      </button>
      <button
        class="bg-sky-600 rounded-sm border border-white p-2"
        @click="
          register({
            id: subscriptionId,
            serviceName,
            firstPaymentDate,
            price,
            intervalAmount,
            intervalValue,
          })
        "
      >
        登録する
      </button>
    </div>
  </div>
</template>
