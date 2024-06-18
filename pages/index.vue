<script lang="ts" setup>
  useHead({
    title: 'Home',
    meta: [
      { 
        name: 'description', 
        content: 'Home Nuxt 3, IT Genius Engineering' 
      },
      {
        name: 'keywords',
        content: 'Home, Nuxt 3, Learning Nuxt 3'
      },
    ],
  })
</script>

<template>
  <main>
    <section>
        <div class="container flex flex-wrap items-center py-12 mx-auto">
          <div
            class="avatar relative h-[200px] w-[200px] rounded overflow-hidden mr-10 mb-5 sm:mb-0 shadow-xl"
          >
            <img
              src="~/assets/images/samitk.png"
              alt="Samit Koyom"
              class="absolute object-cover w-full h-full"
            />
          </div>
          <div>
            <h1 class="text-2xl font-bold">Hi, I am Samit</h1>
            <p class="mt-3 mb-5 hero__des">
              I built Nuxt 3 Blog, for Learning. <br />In my free time code something for hobby.
            </p>
            <a
              href="https://twitter.com/iamsamit"
              class="inline-flex items-center gap-2 px-4 py-2 text-white rounded bg-sky-500 hover:bg-primary-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-twitter"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                />
              </svg>
              Let's Connect</a
            >
          </div>
        </div>
    </section>

    <!-- Blog Section Starts -->
    <section class="container mx-auto">
      <div class="container py-10">
        <div class="grid gap-10 sm:grid-cols-3">
          <BlogGrid
            title="The Dark Truth About Baby Cereal"
            image="https://www.itgenius.co.th/sandbox_api/flutter_news_api/wp-content/uploads/2021/06/little-girl-home-with-cart-vegetables_231056-89.jpg"
            excerpt="Baby cereal was first introduced in the 1930s, which was when a monumental shift occurred away from real foods towards processed convenience foods. Previously known as pablum, mothers were advised to mix it into a bottle with breast milk for babies as young as six weeks old"
            slug="https://www.itgenius.co.th/sandbox_api/flutter_news_api/the-dark-truth-about-baby-cereal/"
          ></BlogGrid>

          <BlogGrid
            title="Best Baby Games: Birth to 18 Months"
            image="https://www.itgenius.co.th/sandbox_api/flutter_news_api/wp-content/uploads/2021/06/little-boy-plays-with-colorful-pyramid-white-background-with-space-text_208700-1860.jpeg"
            excerpt="Never Too Young for Fun</h2>\n\n\n\n<p>Something about the stuffed animal we dubbed “crinkle puppy” for its crinkly sound when squeezed left my daughter Emma, 3 months at the time, smiling each time I placed it in front of her. Maybe it was the contrasting colors that held Emma’s attention. It could have been the way I often “spoke” for the puppy, giving Emma an idea of what a real puppy would sound"
            slug="https://www.itgenius.co.th/sandbox_api/flutter_news_api/best-baby-games-birth-to-18-months/"
          ></BlogGrid>

          <BlogGrid
            title="Easy Tips for Grooming Your Newborn"
            image="https://www.itgenius.co.th/sandbox_api/flutter_news_api/wp-content/uploads/2021/06/woman-brushing-young-girl-s-hair-while-sitting-near-window-woman-combing-her-3-year-old-daughter-s-hair_73762-537.jpg"
            excerpt="Grooming a newborn can be a nerve-wracking experience, especially for first-time parents From caring for the umbilical cord to trimming tiny nails, parents have a lot to learn when it comes to keeping their little ones “baby fresh. Liz Drake, a clinical nurse specialist in the neonatal intensive care unit at CHOC Children"
            slug="https://www.itgenius.co.th/sandbox_api/flutter_news_api/easy-tips-for-grooming-your-newborn/"
          ></BlogGrid>

          <BlogGrid
            title="The Dark Truth About Baby Cereal"
            image="https://www.itgenius.co.th/sandbox_api/flutter_news_api/wp-content/uploads/2021/06/little-girl-home-with-cart-vegetables_231056-89.jpg"
            excerpt="Baby cereal was first introduced in the 1930s, which was when a monumental shift occurred away from real foods towards processed convenience foods. Previously known as pablum, mothers were advised to mix it into a bottle with breast milk for babies as young as six weeks old"
            slug="https://www.itgenius.co.th/sandbox_api/flutter_news_api/the-dark-truth-about-baby-cereal/"
          ></BlogGrid>

          <BlogGrid
            title="Best Baby Games: Birth to 18 Months"
            image="https://www.itgenius.co.th/sandbox_api/flutter_news_api/wp-content/uploads/2021/06/little-boy-plays-with-colorful-pyramid-white-background-with-space-text_208700-1860.jpeg"
            excerpt="Never Too Young for Fun</h2>\n\n\n\n<p>Something about the stuffed animal we dubbed “crinkle puppy” for its crinkly sound when squeezed left my daughter Emma, 3 months at the time, smiling each time I placed it in front of her. Maybe it was the contrasting colors that held Emma’s attention. It could have been the way I often “spoke” for the puppy, giving Emma an idea of what a real puppy would sound"
            slug="https://www.itgenius.co.th/sandbox_api/flutter_news_api/best-baby-games-birth-to-18-months/"
          ></BlogGrid>

          <BlogGrid
            title="Easy Tips for Grooming Your Newborn"
            image="https://www.itgenius.co.th/sandbox_api/flutter_news_api/wp-content/uploads/2021/06/woman-brushing-young-girl-s-hair-while-sitting-near-window-woman-combing-her-3-year-old-daughter-s-hair_73762-537.jpg"
            excerpt="Grooming a newborn can be a nerve-wracking experience, especially for first-time parents From caring for the umbilical cord to trimming tiny nails, parents have a lot to learn when it comes to keeping their little ones “baby fresh. Liz Drake, a clinical nurse specialist in the neonatal intensive care unit at CHOC Children"
            slug="https://www.itgenius.co.th/sandbox_api/flutter_news_api/easy-tips-for-grooming-your-newborn/"
          ></BlogGrid>
        </div>
      </div>
    </section>
    <!-- Blog Section Ends  -->
  </main>
</template>

<style scoped>

</style>