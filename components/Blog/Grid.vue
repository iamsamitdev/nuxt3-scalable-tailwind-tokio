<script lang="ts" setup>
defineProps<{
  title: string;
  excerpt?: string;
  image?: string;
  slug?: string;
}>();
</script>

<template>
  <div class="grid overflow-hidden rounded shadow-xl group">
    <div
      v-if="image"
      class="grid__image h-[180px] w-full relative overflow-hidden"
    >
      <img
        :src="image"
        :alt="title"
        class="absolute object-cover w-full h-full duration-300 group-hover:scale-110"
      />
    </div>
    <div class="p-5 grid__content">
      <h3 class="mb-2 text-xl font-semibold grid__content-title">
        {{ title }}
      </h3>
      <p
        v-if="excerpt"
        class="grid__content-excerpt mb-2 text-sm text-clip overflow-hidden ..."
      >
        {{ excerpt }}
      </p>
      <NuxtLink
        v-if="slug"
        class="inline-flex items-center border-b-2 blog__readmore border-primary-500"
        :to="`/${slug}`"
        >Read more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4 ml-1 duration-200 group-hover:ml-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>