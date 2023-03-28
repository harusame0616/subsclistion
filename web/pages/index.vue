<script setup lang="ts"></script>

<template>
  <main class="flex flex-col items-center h-full">
    <h1 class="px-8 py-16 mb-8">
      <img
        src="~/assets/images/logo.svg"
        width="700px"
        height="400px"
        class="mx-auto w-full"
        alt="Subsc-Listion かんたんサブスク管理"
      />
    </h1>
    <ul class="flex flex-col gap-1">
      <li>
        <NuxtLink to="/">
          <img
            src="~/assets/images/social_signin/google/normal.png"
            width="220"
            alt="Sign in With Google"
          />
        </NuxtLink>
      </li>
      <li class="text-xs flex justify-end mt-2">
        <NuxtLink to="/home">ログインせずに使う</NuxtLink>
      </li>
    </ul>
  </main>
</template>
