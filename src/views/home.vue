<template>
  <div class="ct--page">
    <div class="ct--page-area">
      <swiper
        :modules="modules"
        navigation
        :slidesPerView="1"
        :loop="true"
        :pagination="{ clickable: true }"
        :autoplay="true"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide>1</swiper-slide>
        <swiper-slide>2</swiper-slide>
        <swiper-slide>3</swiper-slide>
      </swiper>

      <van-empty description="描述文字" />
      <van-empty description="描述文字" />
      <van-empty description="描述文字" />
      <van-empty description="描述文字" />
      <van-empty description="描述文字" />
      <van-empty description="描述文字" />
      <van-empty description="描述文字" />
      <van-empty description="描述文字" />
      <van-empty description="描述文字" />
      <van-empty description="描述文字" />
      <van-empty description="描述文字" />
      <van-empty description="描述文字" />
      <van-empty description="描述文字" />
      <van-empty description="描述文字" />
      <van-empty description="描述文字" />
      <van-empty description="描述文字" />
      <van-empty description="描述文字" />
      
      <van-back-top target=".ct--page-area" right="5vw" bottom="20vh" />
    </div>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, A11y, Autoplay, Navigation } from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const onSwiper = (swiper) => {
  // console.log(swiper)
}
const onSlideChange = (e) => {
  // swiper切换的时候执行的方法
  // console.log('slide change', e.activeIndex)
}
const modules = [Pagination, A11y, Autoplay, Navigation]

</script>

<style lang="scss" scoped>
.swiper:deep() {
  .swiper-slide {
    height: 300px;
    background: rgb(109, 214, 218);
    font-size: 32px;
  }

  /*自定义分页器*/
  .swiper-pagination {
    bottom:3%;
    left: 50%;
    transform: translateX(-50%);
  }

  .swiper-pagination .swiper-pagination-bullet {
    width: 35px;
    height: 6px;
    border-radius: 0;
    margin: 0 2px;
    outline: none;
  }
  
  .swiper-pagination .swiper-pagination-bullet-active {
    // background-color:#f65e62;
  }
}


</style>