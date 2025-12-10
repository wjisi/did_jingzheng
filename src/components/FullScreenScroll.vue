<script setup lang="ts">
const currentScreen = ref(0)
let isScrolling = false
let scrollTimeout: ReturnType<typeof setTimeout> | null = null

// 处理Header组件的滚动请求
function handleScrollToScreen(event: CustomEvent) {
  const index = event.detail
  const container = document.querySelector('.full-screen-container') as HTMLElement
  const screens = document.querySelectorAll('.screen-wrapper > div')

  if (index >= 0 && index < screens.length) {
    isScrolling = true
    const targetScreen = screens[index] as HTMLElement
    container.scrollTo({
      top: targetScreen.offsetTop,
      behavior: 'smooth',
    })

    // 滚动完成后重置标志
    setTimeout(() => {
      isScrolling = false
    }, 800)
  }
}

// 监听滚动事件，检测当前屏幕
function handleScroll() {
  // 如果正在滚动中，忽略滚动检测
  if (isScrolling)
    return

  // 防抖处理
  if (scrollTimeout) {
    clearTimeout(scrollTimeout)
  }

  scrollTimeout = setTimeout(() => {
    const container = document.querySelector('.full-screen-container') as HTMLElement
    const screens = document.querySelectorAll('.screen-wrapper > div')
    const scrollTop = container.scrollTop
    const containerHeight = container.clientHeight

    // 计算当前屏幕索引
    for (let i = 0; i < screens.length; i++) {
      const screen = screens[i] as HTMLElement
      const screenTop = screen.offsetTop
      const screenHeight = screen.clientHeight

      // 只有当屏幕的大部分区域可见时才认为是当前屏幕
      const visibleThreshold = 0.7 // 70%可见
      const screenVisibleHeight = Math.min(
        screenHeight,
        Math.max(0, scrollTop + containerHeight - screenTop),
        Math.max(0, screenTop + screenHeight - scrollTop),
      )

      const visibleRatio = screenVisibleHeight / screenHeight

      if (visibleRatio >= visibleThreshold) {
        if (currentScreen.value !== i) {
          currentScreen.value = i
        }
        break
      }
    }
  }, 50) // 50ms防抖
}

// 监听屏幕变化并发送事件
watch(currentScreen, (newValue) => {
  const event = new CustomEvent('screen-change', { detail: newValue })
  window.dispatchEvent(event)
})

// 添加事件监听器
onMounted(() => {
  const container = document.querySelector('.full-screen-container') as HTMLElement
  container.addEventListener('wheel', handleScroll)
  window.addEventListener('scroll-to-screen', handleScrollToScreen as EventListener)

  // 初始检测当前屏幕
  setTimeout(handleScroll, 100)
})

// 移除事件监听器
onUnmounted(() => {
  const container = document.querySelector('.full-screen-container') as HTMLElement
  container.removeEventListener('wheel', handleScroll)
  window.removeEventListener('scroll-to-screen', handleScrollToScreen as EventListener)

  if (scrollTimeout) {
    clearTimeout(scrollTimeout)
  }
})
</script>

<template>
  <div class="full-screen-container screen-wrapper">
    <!-- 首页 -->
    <Home />
    <!-- 关于我们 -->
    <AboutUs />
    <!-- 产品服务 -->
    <ProductService />
    <!-- 技术架构 -->
    <TechnicalArchitecture />
    <!-- 应用场景 -->
    <AppScenarios />
    <!-- 合作伙伴 -->
    <Partnership />
    <!-- 联系我们 -->
    <ContactUs />
    <!-- Footer备案信息 -->
    <div class="w-full snap-start bg-gray-100 from-[#4142F1] to-[#7651F5] bg-gradient-to-r">
      <div class="border-box w-full h-160px px-8rem flex flex-col items-start justify-center">
        <img src="@/images/logo.png" alt="" class="h-3.33rem w-auto">
        <span class="text-16px text-#E9E9F2 mt-20px">
          JDID致力于打造自主可控、安全可信的去中心化身份基础设施，让每个人都能真正拥有并掌控自己的数字身份与数据。
        </span>
      </div>
      <div class="border-box w-full h-60px px-8rem flex items-center justify-between bg-#1b1d36 text-#b3b3bd">
        <p class="text-base">
          © 2025 上海光元信息科技有限公司 版权所有
        </p>
        <a href="https://beian.mps.gov.cn" class="text-base hover:text-#fff" target="_blank">沪公网安备31011502404457号</a>
        <a href="https://beian.miit.gov.cn/" class="text-base hover:text-#fff" target="_blank">沪ICP备20001408号-3</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.full-screen-container {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}

/* 自定义滚动条隐藏 */
.full-screen-container {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.full-screen-container::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}
</style>
