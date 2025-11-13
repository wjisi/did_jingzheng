<script setup lang="ts">
const infoStore = useInfoStore()

// 当前激活的菜单项
const activeMenu = ref(0)

// 滚动到指定屏幕
function scrollToScreen(target: number) {
  activeMenu.value = target
  // 通过事件总线或props传递给父组件
  const event = new CustomEvent('scroll-to-screen', { detail: target })
  window.dispatchEvent(event)
}

// 处理屏幕变化事件
function handleScreenChange(event: CustomEvent) {
  console.log(event.detail)
  activeMenu.value = event.detail
}

// 添加事件监听器
onMounted(() => {
  window.addEventListener('screen-change', handleScreenChange as EventListener)
})

// 移除事件监听器
onUnmounted(() => {
  window.removeEventListener('screen-change', handleScreenChange as EventListener)
})
</script>

<template>
  <div class="fixed left-0 top-0 z-50 w-full border-b border-white/20 bg-white/0 backdrop-blur-md">
    <div class="mx-auto px-5rem">
      <div class="h-5rem flex items-center justify-between">
        <div class="flex-shrink-0">
          <img src="@/images/logo.png" alt="JDID" class="h-2.5rem w-auto">
        </div>

        <nav class="item h-full flex space-x-8">
          <div
            v-for="item in infoStore.menuItems"
            :key="item.id"
            class="h-full flex cursor-pointer items-center justify-center px-3 text-1.2rem font-400"
            :class="[
              activeMenu === item.id
                ? 'text-white border-b-2 border-white font-700'
                : 'text-white/80 hover:text-white',
            ]"
            @click="scrollToScreen(item.id)"
          >
            {{ $t(item.name) }}
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
