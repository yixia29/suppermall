<template>
  <div id="home">
    <!-- 1.封装了导航栏 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 复制的第二个tabControl -->
     <tab-control :title="['流行','新款','精选']"
      @tabClick="tabClick" class="tab-control2"
      ref="tabControl2" v-show="tabControlIsShow"
      ></tab-control>
      <!-- better-scroll滚动区域的内容 -->
    <scroll
      class="scroll-content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <!-- 2.轮播图部分 -->
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"></home-swiper>
      <!-- 3.推荐部分 -->
      <recommend-view :recommends="recommends"></recommend-view>
      <!-- 本周推荐部分的图片 -->
      <feature-view></feature-view>
      <!-- tab-control点击文字转换内容部分 -->
      <tab-control :title="['流行','新款','精选']" class="tab-control" 
      @tabClick="tabClick" ref="tabControl"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="toTop" v-show="isShowBackTop"></back-top>
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
// import BackTop from "components/content/backTop/BackTop.vue";
//组件来自view-home-childComps
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "views/home/childComps/FeatureView";
//导入common中的Utils
import deBounce from "common/Utils"
//导入混入的内容
import {backTopMixin} from "common/mixin"
//导入发送网络请求的两个函数
import { getHomeMultidata, getHomeGoods } from "network/home.js";
export default {
  name: "Home",
  components: {
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    GoodsListItem,
    // BackTop,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  mixins:[backTopMixin],
  data() {
    return {
      //封装组件进行展示banners
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      // isShowBackTop: false,
      saveY:0,
      tabOffsetTop:0,
      tabControlIsShow:false
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  created() {
    //当组件创建好就要发送网络请求，用生命周期函数created
    //created中的this指向的是当前组件
    //发送网络请求是异步操作
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
  mounted() {
    //refresh接收debounce返回的函数
    const refresh=this.debounce(this.$refs.scroll.refresh,500)
    //在生命周期mounted函数(哪了scroll)中监听item的图片加载完成
    this.$bus.$on("itemImgLoad", () => {
      //监听到图片加载完成后，对scrollerHeight进行更新
      refresh()
      // this.$refs.scroll.refresh();
      //一张图片加载完就调用一次refresh()，调用过于频繁，进行防抖
    });
     
  },
  methods: {
    /**
     * 事件监听相关的方法
     */
    debounce(func,delay){
      //声明计数器
      let timer= null

      return function(...args){
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
          func.apply(this,args) 
          //如果在delay这断时间内，没有清除timer，则会执行func
        },delay)
      }

    },
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
      this.$refs.tabControl.currentIndex=index;
      this.$refs.tabControl2.currentIndex=index;
    },
    // toTop() {
    //返回顶部功能
    //   // this.$refs.scroll.scroll.scrollTo(0,0,500)
    //   this.$refs.scroll.scrollTo(0, 0);
    // },
    contentScroll(position) {
    //判断BackTop是否显示
      this.isShowBackTop = -(position.y) > 1000;
      //决定tabControl是否吸顶（position:fixed）
      this.tabControlIsShow=-(position.y)>this.tabOffsetTop

    },
    loadMore() {
      //针对类型加载更多(请求数据)
      this.getHomeGoods(this.currentType);
      //上拉加载更多有时会出现卡顿的情况
      //让它在异步加载完图片时，重新刷新
      //refresh重新计算可滚动区域
      this.$refs.scroll.scroll.refresh();
    },
    swiperImgLoad(){
      this.tabOffsetTop=this.$refs.tabControl.$el.offsetTop-44
      // console.log(this.tabOffsetTop);
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

        // this.$refs.scroll.scroll.finishPullUp()
        this.$refs.scroll.finishPullUp();
      });
    }
  },
  activated(){
   this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0,this.saveY,0)
  },
  deactivated(){
    this.saveY=this.$refs.scroll.scroll.y
    console.log(this.saveY);
  }
};
</script>

<style scoped>
#home {
  height: 100vh;
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
/* .tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
} */
.tab-control2{
  position:fixed;
  top:44px;
  left: 0;
  right: 0;
  z-index:9;
}
.scroll-content {
  height: calc(100% - 93px);
  overflow: hidden;
}
/* .tab-control2{
  position:absolute;
  z-index:9;
} */
</style>