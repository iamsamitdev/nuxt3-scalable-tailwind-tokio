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

const { data: categories } = await useWpApi().getCategories();

</script>

<template>
  <section class="py-10">
    <div class="container mx-auto">
      <div class="flex flex-wrap gap-5">

        <NuxtLink
          v-for="category in categories"
          :key="(category as any).id"
          :to="`/categories/${(category as any).slug}`"
          class="flex items-center justify-center px-4 py-2 text-2xl text-white uppercase duration-200 rounded shadow-md hover:shadow-lg"
          :style="{ backgroundColor: colorGenerator() }">
          <span class="font-semibold">#{{ (category as any).name }}</span>
        </NuxtLink>

      </div>
    </div>
  </section>
</template>