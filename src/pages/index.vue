<script setup lang="ts">
definePage({
  name: 'home',
})
</script>

<template>
  <div class="min-h-screen">
    <Header />
    <FullScreenScroll />
  </div>
</template>

<style scoped>
/* 确保页面高度正确 */
.min-h-screen {
  min-height: 100vh;
}
</style>
