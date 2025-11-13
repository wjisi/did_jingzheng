<script setup lang="ts">
</script>

<template>
  <!-- 首页 -->
  <div class="relative h-screen w-full flex snap-start items-center justify-between bg-[url('@/images/bg1.jpg')] bg-cover">
    <div class="z-1 ml-10rem">
      <div class="h-3.33rem w-18.33rem flex items-center justify-center gap-0.25rem bg-[url('@/images/home2.png')] bg-cover">
        <img src="@/images/home3.png" alt="" class="h-1.33rem w-1rem">
        <span class="text-1.33rem text-#C6BADE font-400">去中心化身份基础设施</span>
      </div>
      <div class="mt-2rem text-4.67rem text-white font-700">
        <p>
          构建可信的
        </p>
        <p>
          去中心化身份生态
        </p>
      </div>
      <div class="mt-2rem w-48.33rem text-1.5rem text-#DFDFE8 font-400">
        JDID提供基于区块链的去中心化身份解决方案，让每个人、每个组织都能拥有自主可控的数字身份，实现安全、隐私、可验证的身份交互。
      </div>
      <div class="mt-8rem flex gap-5rem">
        <div class="h-5rem w-13.33rem flex items-center justify-center gap-0.5rem rounded-0.83rem from-[#5651F5] to-[#007DFE] bg-gradient-to-b shadow-[inset_0_0.17rem_0.33rem_rgba(255,255,255,0.25)]">
          <img src="@/images/rocket.png" alt="" class="h-1.6rem w-1.6rem">
          <span class="text-1.3rem text-white">了解产品</span>
        </div>
        <div class="h-5rem w-13.33rem flex items-center justify-center gap-0.83rem rounded-0.83rem bg-#3B226E shadow-[inset_0_0.17rem_0.33rem_rgba(255,255,255,0.25)]">
          <img src="@/images/document.png" alt="" class="h-1.6rem w-1.6rem">
          <span class="text-1.3rem text-white">技术文档</span>
        </div>
      </div>
    </div>
    <img
      src="@/images/home1.png"
      class="absolute right-0 top-30% z-0 w-67rem"
    >
  </div>
</template>

<style scoped>

</style>
