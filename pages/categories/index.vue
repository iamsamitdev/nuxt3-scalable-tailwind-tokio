<script lang="ts" setup>
useHead({
  title: "Categories",
  meta: [
    {
      name: "description",
      content: "Categories",
    },
  ],
});
</script>

<template>
  <section class="py-10">
    <div class="container mx-auto">
      <div class="flex flex-wrap gap-5">

        <NuxtLink
          to="/categories/clean-code"
          class="flex items-center justify-center px-4 py-2 text-2xl text-white uppercase duration-200 bg-blue-600 rounded shadow-md hover:shadow-lg">
          <span class="font-semibold">#CLEAN CODE</span>
        </NuxtLink>

        <NuxtLink
          to="/categories/clean-code"
          class="flex items-center justify-center px-4 py-2 text-2xl text-white uppercase duration-200 bg-blue-600 rounded shadow-md hover:shadow-lg">
          <span class="font-semibold">#JAVASCRIPT</span>
        </NuxtLink>

        <NuxtLink
          to="/categories/clean-code"
          class="flex items-center justify-center px-4 py-2 text-2xl text-white uppercase duration-200 bg-blue-600 rounded shadow-md hover:shadow-lg">
          <span class="font-semibold">#DEVOPS</span>
        </NuxtLink>

      </div>
    </div>
  </section>
</template>