<template>
  <div id="home">
    <!-- 1.封装了导航栏 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 2.轮播图部分 -->
    <home-swiper :banners="banners"></home-swiper>
    <!-- 3.推荐部分 -->
    <recommend-view :recommends="recommends"></recommend-view>
<!-- 本周推荐部分的图片 -->
<feature-view></feature-view>
<!-- tab-control点击文字转换内容部分 -->
<tab-control :title="['流行','新款','精选']" class="tab-control"></tab-control>
<ul>
  <li>列表1</li>
  <li>列表2</li>
  <li>列表3</li>
  <li>列表4</li>
  <li>列表5</li>
  <li>列表6</li>
  <li>列表7</li>
  <li>列表1</li>
  <li>列表2</li>
  <li>列表3</li>
  <li>列表4</li>
  <li>列表5</li>
  <li>列表6</li>
  <li>列表7</li>
  <li>列表1</li>
  <li>列表2</li>
  <li>列表3</li>
  <li>列表4</li>
  <li>列表5</li>
  <li>列表6</li>
  <li>列表7</li>
  <li>列表1</li>
  <li>列表2</li>
  <li>列表3</li>
  <li>列表4</li>
  <li>列表5</li>
  <li>列表6</li>
  <li>列表7</li>
  <li>列表1</li>
  <li>列表2</li>
  <li>列表3</li>
  <li>列表4</li>
  <li>列表5</li>
  <li>列表6</li>
  <li>列表7</li>
  <li>列表1</li>
  <li>列表2</li>
  <li>列表3</li>
  <li>列表4</li>
  <li>列表5</li>
  <li>列表6</li>
  <li>列表7</li>
  <li>列表1</li>
  <li>列表2</li>
  <li>列表3</li>
  <li>列表4</li>
  <li>列表5</li>
  <li>列表6</li>
  <li>列表7</li>
  <li>列表1</li>
  <li>列表2</li>
  <li>列表3</li>
  <li>列表4</li>
  <li>列表5</li>
  <li>列表6</li>
  <li>列表7</li>
</ul>
</div>
</template>

<script>
//view的组件导入
// 组件来自comonents--common
import NavBar from "components/common/nav/NavBar.vue";

//组件来自components--content
import TabControl from 'components/content/tabControl/TabControl'

//组件来自view-home-childComps
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from 'views/home/childComps/FeatureView'


import { getHomeMultidata } from "network/home.js";
export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,

    HomeSwiper,
    RecommendView,
    FeatureView
  },
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  created() {
    //这是个异步操作
    getHomeMultidata().then(res => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  }
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position:sticky;
  top:0;
  /* left:0;
  right:0; */
  z-index:9;
}
.tab-control{
  position:sticky;
  top:44px;
}
</style>