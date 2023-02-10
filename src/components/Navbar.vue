<template>
  <div class="nav--bar">
    <van-icon name="wap-nav" size="28" @click="goMore" />
    <div class="nav--bar-logo">
      <img src="@/assets/vue.svg" alt="">
    </div>
    <choice-lang />
  </div>
</template>

<script setup>
import ChoiceLang from './components/choice-lang.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
function goMore() {
  router.push({ path: '/more' })
}

</script>

<style lang="scss">
.nav--bar {
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  color: #888686;
  border-bottom: 1px solid #ccc;
  background: #fff;
}

.nav--bar-logo {
  width: 40px;
  height: 40px;
  position: absolute;
  display: inline-block;
  top: calc(50% - 20px);
  left: calc(50% - 20px);

  &>img{
    width: 100%;
    height: 100%;
  }
}

</style>