<template>
  <div style="width: 100%">
    <div class="top--nav-more">
      <van-icon name="cross" size="20" color="#888686" @click="goback" />
    </div>

    更多
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
function goback() {
  router.go(-1)
}
</script>

<style lang="scss">
.top--nav-more {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 20px;
  color: #888686;
}


</style>