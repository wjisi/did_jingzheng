<script setup lang="ts">
import { ref } from 'vue'

const currentScreen = ref(0) // 0表示第一屏，1表示第二屏

function nextScreen() {
  currentScreen.value = (currentScreen.value + 1) % 2
}

function prevScreen() {
  currentScreen.value = (currentScreen.value - 1 + 2) % 2
}
</script>

<template>
  <!-- 技术架构 -->
  <div class="relative h-screen snap-start overflow-hidden">
    <!-- 第一屏 -->
    <div
      class="absolute inset-0 h-screen w-full flex flex-col items-center bg-[url('@/images/bg4-1.jpg')] bg-cover pt-5rem transition-transform duration-500 ease-in-out"
      :class="{ 'translate-x-0': currentScreen === 0, '-translate-x-full': currentScreen === 1 }"
    >
      <div class="mt-7rem h-3.33rem w-39.25rem flex items-center justify-center gap-0.25rem bg-[url('@/images/about5.png')] bg-cover">
        <img src="@/images/about4.png" alt="" class="h-1.33rem w-1rem">
        <span class="text-1.33rem text-#F7F5FF font-400">技术架构</span>
      </div>
      <div class="mt-3rem text-center">
        <p class="text-2.83rem text-white font-500">
          安全可靠的去中心化技术底座
        </p>
        <p class="mt-2rem text-1.5rem text-#D0D0D9">
          JDID基于SWTC区块链技术，遵循W3C DID标准，构建多层次、可扩展的去中心化身份基础设施。
        </p>
      </div>
      <img src="@/images/architecture.png" alt="" class="mt-3rem w-73.33rem">
    </div>

    <!-- 第二屏 -->
    <div
      class="absolute inset-0 h-screen w-full flex flex-col items-center bg-[url('@/images/bg4-2.jpg')] bg-cover transition-transform duration-500 ease-in-out"
      :class="{ 'translate-x-0': currentScreen === 1, 'translate-x-full': currentScreen === 0 }"
    >
      <div class="grid grid-cols-3 mt-8rem items-center justify-center gap-5rem">
        <div class="h-25rem w-30rem border-0.17rem border-#EBD6FF/30 rounded-2.67rem border-solid bg-#FFF/15 p-4rem">
          <img src="@/images/architecture1.png" alt="" class="h-5rem w-5rem">
          <div class="mt-3rem text-1.6rem text-white font-700">
            安全可靠
          </div>
          <div class="mt-2rem text-1.2rem text-#EDEDF5">
            采用加密算法，结合分布式存储与多签机制，确保身份信息不可篡改、不可伪造，私钥安全可控。
          </div>
        </div>
        <div class="h-25rem w-30rem border-0.17rem border-#EBD6FF/30 rounded-2.67rem border-solid bg-#FFF/15 p-4rem">
          <img src="@/images/architecture2.png" alt="" class="h-5rem w-5rem">
          <div class="mt-3rem text-1.6rem text-white font-700">
            标准兼容
          </div>
          <div class="mt-2rem text-1.2rem text-#EDEDF5">
            完全兼容W3C DID/VC标准，支持跨链、跨平台互操作，可与以太坊主流区块链和身份系统无缝对接。
          </div>
        </div>
        <div class="h-25rem w-30rem border-0.17rem border-#EBD6FF/30 rounded-2.67rem border-solid bg-#FFF/15 p-4rem">
          <img src="@/images/architecture3.png" alt="" class="h-5rem w-5rem">
          <div class="mt-3rem text-1.6rem text-white font-700">
            高性能
          </div>
          <div class="mt-2rem text-1.2rem text-#EDEDF5">
            创新的链下计算与链上存证架构，支持每秒万级身份验证请求，满足大规模商业应用需求。
          </div>
        </div>
        <div class="h-25rem w-30rem border-0.17rem border-#EBD6FF/30 rounded-2.67rem border-solid bg-#FFF/15 p-4rem">
          <img src="@/images/architecture4.png" alt="" class="h-5rem w-5rem">
          <div class="mt-3rem text-1.6rem text-white font-700">
            灵活可扩展
          </div>
          <div class="mt-2rem text-1.2rem text-#EDEDF5">
            模块化设计，支持自定义凭证类型与验证规则，可根据业务需求灵活扩展功能与性能。
          </div>
        </div>
        <div class="h-25rem w-30rem border-0.17rem border-#EBD6FF/30 rounded-2.67rem border-solid bg-#FFF/15 p-4rem">
          <img src="@/images/architecture5.png" alt="" class="h-5rem w-5rem">
          <div class="mt-3rem text-1.6rem text-white font-700">
            隐私保护
          </div>
          <div class="mt-2rem text-1.2rem text-#EDEDF5">
            基于加密技术，数据主人同意的情况下实现数据最小化披露，保护用户隐私与数据主权。
          </div>
        </div>
        <div class="h-25rem w-30rem border-0.17rem border-#EBD6FF/30 rounded-2.67rem border-solid bg-#FFF/15 p-4rem">
          <img src="@/images/architecture6.png" alt="" class="h-5rem w-5rem">
          <div class="mt-3rem text-1.6rem text-white font-700">
            去中心化治理
          </div>
          <div class="mt-2rem text-1.2rem text-#EDEDF5">
            无许可的身份自建协议，符合国家法律法规，确保系统公平、透明、可持续发展。
          </div>
        </div>
      </div>
    </div>

    <!-- 左箭头 -->
    <button
      class="absolute left-8 top-1/2 z-10 h-12 w-12 flex transform items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 -translate-y-1/2 hover:bg-white/30"
      :class="{ 'opacity-50 cursor-not-allowed': currentScreen === 0 }"
      :disabled="currentScreen === 0"
      @click="prevScreen"
    >
      <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <!-- 右箭头 -->
    <button
      class="absolute right-8 top-1/2 z-10 h-12 w-12 flex transform items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 -translate-y-1/2 hover:bg-white/30"
      :class="{ 'opacity-50 cursor-not-allowed': currentScreen === 1 }"
      :disabled="currentScreen === 1"
      @click="nextScreen"
    >
      <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <!-- 指示器 -->
    <div class="absolute bottom-8 left-1/2 z-10 flex transform -translate-x-1/2 space-x-3">
      <button
        class="h-3 w-3 rounded-full transition-all duration-300"
        :class="currentScreen === 0 ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/70'"
        @click="currentScreen = 0"
      />
      <button
        class="h-3 w-3 rounded-full transition-all duration-300"
        :class="currentScreen === 1 ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/70'"
        @click="currentScreen = 1"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
