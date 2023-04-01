import { DomainSubscriptionCardEditd } from '../../../../.nuxt/components';
<script setup lang="ts">
import {
  NewSubscription,
  Subscription,
} from '~/domains/subscription/types/subscription-types';

const props = defineProps<{ subscription?: Subscription }>();
const emits =
  defineEmits<{
    (e: 'register', subscription: Subscription | NewSubscription): void;
    (e: 'cancel'): void;
  }>();

const cancel = async () => {
  emits('cancel');
};
const register = async (subscription: Subscription | NewSubscription) => {
  emits('register', subscription);
};
</script>

<template>
  <div class="fixed w-full h-full flex justify-center items-center">
    <div class="fixed w-full h-full bg-black opacity-90"></div>
    <DomainSubscriptionCardEdit
      class="relative z-10 max-w-sm w-full bg-black"
      :subscription="props.subscription"
      @cancel="cancel"
      @register="register"
    />
  </div>
</template>
