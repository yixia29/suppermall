<template>
  <div id="home">
    <!-- 1.封装了导航栏 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class='scroll-content' ref='scroll' :probe-type='3' @scroll='contentScroll'>
      <!-- 2.轮播图部分 -->
      <home-swiper :banners="banners"></home-swiper>
      <!-- 3.推荐部分 -->
      <recommend-view :recommends="recommends"></recommend-view>
      <!-- 本周推荐部分的图片 -->
      <feature-view></feature-view>
      <!-- tab-control点击文字转换内容部分 -->
      <tab-control :title="['流行','新款','精选']" class="tab-control" @tabClick="tabClick"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native='backClick' v-show='isShowBackTop'></back-top>
    <!-- <ul>
      <li>hhh1</li>
      <li>hhh2</li>
      <li>hhh3</li>
      <li>hhh4</li>
      <li>hhh5</li>
      <li>hhh6</li>
      <li>hhh7</li>
      <li>hhh8</li>
      <li>hhh9</li>
      <li>hhh10</li>
      <li>hhh11</li>
      <li>hhh12</li>
      <li>hhh13</li>
      <li>hhh14</li>
      <li>hhh15</li>
      <li>hhh16</li>
      <li>hhh17</li>
      <li>hhh18</li>
      <li>hhh19</li>
      <li>hhh20</li>
    </ul> -->
  </div>
</template>

<script>
//view的组件导入
// 组件来自comonents--common
import NavBar from "components/common/nav/NavBar.vue";
import Scroll from "components/common/scroll/Scroll.vue";

//组件来自components--content
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import GoodsListItem from "components/content/goods/GoodsListItem";
import BackTop from 'components/content/backTop/BackTop.vue'
//组件来自view-home-childComps
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "views/home/childComps/FeatureView";

import { getHomeMultidata, getHomeGoods } from "network/home.js";
export default {
  name: "Home",
  components: {
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    GoodsListItem,
    BackTop,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowBackTop:false
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  created() {
    //这是个异步操作
    //1.请求multidata的数据
    this.getHomeMultidata();
    //2.请求data中的商品数据
    // getHomeGoods("pop", 1).then(res => {
    //     console.log(res);
    //   });
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    /**
     * 事件监听相关的方法
     */
    tabClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }

    },
    backClick(){
      // this.$refs.scroll.scroll.scrollTo(0,0,500)
      this.$refs.scroll.scrollTo(0,0)
      },
      contentScroll(position){
        this.isShowBackTop=(-position.y)>1000
      },
    /**
     * 网络请求相关的方法
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    }
  }
};
</script>

<style scoped>
#home{
  height:100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: sticky;
  top: 0;
  /* left:0;
  right:0; */
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
.scroll-content{
  height: calc(100% - 93px);
  overflow: hidden;
}
</style>