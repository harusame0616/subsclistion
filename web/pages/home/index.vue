<script lang="ts" setup>
import {
  NewSubscription,
  Subscription,
} from '~/domains/subscription/types/subscription-types';

const subscriptionList = useSubscriptionList();
const editSubscription = computed(() => undefined);
const isEditModalOpened = ref(false);

const toggleEditModal = () => {
  isEditModalOpened.value = !isEditModalOpened.value;
};
const closeEditModal = () => {
  isEditModalOpened.value = false;
};
const isNewSubscription = (v: unknown): v is NewSubscription =>
  (v as any).id === undefined;

const register = async (subscription: Subscription | NewSubscription) => {
  if (isNewSubscription(subscription)) {
    await subscriptionList.create(subscription);
  }

  closeEditModal();
};
const cancel = () => {
  closeEditModal();
};
</script>

<template>
  <div class="flex justify-center">
    <DomainSubscriptionCardList
      :subscriptions="subscriptionList.list.value"
      class="w-full max-w-md"
    />
    <DomainSubscriptionModalEdit
      v-if="isEditModalOpened"
      :subscription="editSubscription"
      @cancel="cancel"
      @register="register"
    />
    <div
      class="
        w-full
        max-w-sm
        fixed
        mx-auto
        inset-x-0
        bottom-4
        flex
        justify-end
        items-end
        p-4
      "
    >
      <button
        v-if="!isEditModalOpened"
        class="
          border border-gray-300
          shadow-sm
          rounded-full
          text-gray-200 text-sm
          h-8
          w-8
          flex
          justify-center
          items-center
          bg-sky-600
        "
        @click="toggleEditModal()"
      >
        +
      </button>
    </div>
  </div>
</template>

<style scoped></style>
