<script setup lang="ts">
    const params = useRoute().params;

    const { data: categories } = await useWpApi().getCategory(params.slug as string);

    const category = categories.value[0];

    const { data: posts, error: postsError } = await useWpApi().getPosts(
        category.id
    );

    useHead({
        title: `Archive: ${category.name}`,
        meta: [
            {
                name: "description",
                content: `Category ${params.slug}`,
            },
        ],
    });



</script>

<template>
    <section class="py-10">
        <div class="container mx-auto">
            <div class="grid gap-10 sm:grid-cols-3">
                <BlogGrid
                v-for="post in posts"
                :key="post.id"
                :title="post.title.rendered"
                :image="post._embedded['wp:featuredmedia'][0]?.source_url"
                :excerpt="post.excerpt.rendered"
                :slug="post.slug"
                ></BlogGrid>
            </div>
            <div v-if="posts?.length == 0">
                <p class="text-center">ไม่พบเนื้อหาในหมวดหมู่นี้</p>
            </div>
        </div>
    </section>
</template>


<style scoped>

</style>