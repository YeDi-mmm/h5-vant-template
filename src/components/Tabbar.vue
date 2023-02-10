<template>
  <div class="tab--bar">
    <router-link v-for="(item, index) in tabBarData" :key="item.route" class="tab--bar-nav" active-class="router-link-active" :to="item.route">
      <div class="tab--bar-hairlines" >
        <van-icon v-show="route.path !== item.route" :name="item.icon" :size="index === 2 ? 34 : 24" />
        <van-icon v-show="route.path === item.route" :name="item.active_icon" :size="index === 2 ? 34 : 24" />
        <p>{{ $t(`route.${item.title}`) }}</p>
      </div>
    </router-link>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { reactive } from 'vue';

const route = useRoute();

const tabBarData = [
  {
    route: '/home',
    icon: 'wap-home-o',
    active_icon: 'wap-home',
    title: 'currentData'
  },
  {
    route: '/game-inlet',
    icon: 'star-o',
    active_icon: 'star',
    title: 'gameInlet'
  },
  {
    route: '/wallet',
    icon: 'cash-o',
    active_icon: 'gold-coin',
    title: 'wallet'
  },
  {
    route: '/activity',
    icon: 'gift-card-o',
    active_icon: 'gift-card',
    title: 'activity'
  },
  
  {
    route: '/setting',
    icon: 'setting-o',
    active_icon: 'setting',
    title: 'setting'
  },
]

</script>

<style lang="scss">
.tab--bar {
  width: 100%;
  height: 60px;
  background: rgb(255, 255, 255);
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  border-top: 1px #ccc solid;
  z-index: 3;
  font-family: MicrosoftYaHei;
}

.tab--bar::after {
  content: '';
  display: inline-block;
  width: 65px;
  height: 55px;
  border-top: 2px solid #ccc;
  border-radius: 50%;
  position: absolute;
  top: -15px;
  background: #fff;
  z-index: -1;
}

.tab--bar-nav:nth-child(3) > div {
  & > i {
    position: absolute;
    top: -5px;
  }

  & > p {
    flex: end;
  }
}

.tab--bar-hairlines {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 14px;
  color: #000;
  display: inline-block;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  &>p {
    margin: 3px 0;
  }
}

.tab--bar-nav {
  width: 75px;
  height: 100%;
  background: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  
  &.router-link-active{    //表示router-link激活选中时的状态
    .tab--bar-hairlines{
      color: rgb(54, 163, 196);
    }
  }
}

</style>