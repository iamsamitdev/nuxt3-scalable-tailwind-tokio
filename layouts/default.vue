<script lang="ts" setup></script>

<template>
  <div>

    <AppHeader />
    
    <div class="container px-4 py-4 mx-auto max-w-7xl lg:px-8 sm:px-0">
      <slot />
    </div>

    <AppFooter />

  </div>
</template>

<style scoped></style>
