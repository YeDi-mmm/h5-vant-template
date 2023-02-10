<template>
  <div class="nav--bar-language" @click="showPopover = !showPopover">
    {{ langText }}
    <img src="@/assets/down-arrow.svg" alt="">
  </div>
    
  <van-overlay v-model:show="showPopover" @click="showPopover = !showPopover">
    <div class="block" @click.stop>
      <ul>
        <li v-for="item in actions" :key="item.value" :class="[item.text === langText ? 'lang--select' : '', 'lang--fixed']" @click="onSelect(item.value, item.text), showPopover = !showPopover">
          <img src="" alt="">
          <p>{{ item.text }}</p>
        </li>
      </ul>
    </div>
  </van-overlay>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from "vue-i18n";
import { appLangStore } from '@/pinia' //store存放语言配置

// 语言切换
const { t } = useI18n();
const { locale } = useI18n();
const langstore = appLangStore();

// 点击切换语言
function handleSetLanguage(val) {
  locale.value = val;
  langstore.SET_LOCALE(val)
}

const showPopover = ref(false);

// 通过 actions 属性来定义菜单选项
const actions = [
  { text: '中文', value: 'zh' },
  { text: 'English', value: 'en' },
];

// 显示当前语言
let langText = ref('')
langText = actions.filter(item => item.value === langstore.language)[0]['text']

const onSelect = (value, text) => {
  handleSetLanguage(value)
  langText = text
};
// / 语言切换
</script>

<style lang="scss">
.nav--bar-language {
  font-size: 13px;
  display: flex;
  align-items: center;
  &>img{
    width: 13px;
    margin-left: 5px;
  }
}

.block {
  width: 500px;
  // height: 120px;
  background-color: #fff;
  margin: 160px auto;
  padding: 40px;
  border-radius: 15px;
  animation: bounce-in 0.4s;
}

.lang--fixed {
  margin-bottom: 15px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  color: #999999;
  background: rgba(242, 242, 242, 1);
  font-size: 26px;

  &>img {
    width: 100px;
    height: 70px;
    border-radius: 10px;
    margin-right: 20px;
  }
}

.lang--fixed:last-child {
  margin-bottom: 0;
}

.lang--select {
  background: rgba(170, 170, 170, 1);
  color: rgb(255, 255, 255);
  font-weight: bold;
}

@keyframes bounce-in {
  0%, 100% {transform: translateY(0);}
  10%, 20%, 50%, 60%, 90% {transform: translateY(-30px);}
  30%, 40%, 70%, 80% {transform: translateY(30px);}
}
</style>