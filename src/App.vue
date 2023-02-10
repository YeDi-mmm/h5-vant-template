<template>
  <Navbar v-if="!coverStore.isShowCover" />
  <!-- <router-view /> -->
  <router-view v-slot="{ Component, route }" v-cloak>
    <transition name="slide" mode="out-in" :duration="{ enter: 500, leave: 0 }">
      <component :is="Component" :key="route.name" />
    </transition>
  </router-view>
  <Tabbar v-if="!coverStore.isShowCover" />
</template>

<script setup>
import Tabbar from '@/components/Tabbar.vue'
import Navbar from '@/components/Navbar.vue'
import { showCover } from '@/pinia'

const coverStore = showCover();

// 禁止页面缩放
window.onload = function () {
  document.addEventListener("touchstart", function (event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  });
  document.addEventListener("gesturestart", function (event) {
    event.preventDefault();
  });
};
</script>

<style>
[v-cloak] {
  display: none !important;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-to {
  position: absolute;
  right: 0;
}

.slide-enter-from {
  position: absolute;
  right: -100%;
}

.slide-leave-to {
  position: absolute;
  left: -100%;
}

.slide-leave-from {
  position: absolute;
  left: 0;
}

</style>
