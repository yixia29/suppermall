<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav-bar"></detail-nav-bar>
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probeType="3">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
      <detail-goods-param :goods-params="goodsParams"></detail-goods-param>
      <detail-comment-info :comment-info="commentInfo"></detail-comment-info>
      <div class="recommend-goods">推荐商品</div>
      <goods-list :goods="recommends"></goods-list>
    </scroll>
    <back-top v-show="isShowBackTop" @click.native="toTop"></back-top>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <!-- <Toast :message="message" :toastShow="toastShow"></Toast> -->
  </div>
</template>

<script>
//导入Detail的子组件
import DetailNavBar from "views/detail/childComps/DetailNavBar";
import DetailSwiper from "views/detail/childComps/DetailSwiper";
import DetailBaseInfo from "views/detail/childComps/DetailBaseInfo";
import DetailShopInfo from "views/detail/childComps/DetailShopInfo";
import DetailGoodsInfo from "views/detail/childComps/DetailGoodsInfo";
import DetailGoodsParam from "views/detail/childComps/DetailGoodsParams";
import DetailCommentInfo from "views/detail/childComps/DetailCommentInfo";
import DetailBottomBar from "views/detail/childComps/DetailBottomBar";
//导入common的组件
import Scroll from "components/common/scroll/Scroll";
// import Toast from "components/common/toast/Toast";
//导入content的组件
import GoodsList from "components/content/goods/GoodsList";
// import BackTop from "components/content/backTop/BackTop";
//导入混入的内容
import { backTopMixin } from "common/mixin";
//网络请求
import {
  getDetail,
  Goods,
  Shop,
  GoodsParams,
  getDetailRecommend,
} from "network/detail";
export default {
  name: "Detail",
  mixins: [backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      goodsParams: {},
      commentInfo: {},
      recommends: [],
      // message: "",
      // toastShow: false,
      // isShowBackTop: false
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailGoodsParam,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    GoodsList,
    // Toast,
    // BackTop
  },
  methods: {
    debounce(func, delay) {
      //声明计数器
      let timer = null;
      return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
          //如果在delay这断时间内，没有清除timer，则会执行func
        }, delay);
      };
    },
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000;
    },
    getDetailRecommend() {
      getDetailRecommend().then((res) => {
        console.log(res);
        this.recommends = res.data.list;
      });
    },
    addToCart() {
      //1.获取购物车需要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.realPrice = this.goods.realPrice;
      product.iid = this.iid;
      //2.将商品添加到购物车（vuex）
      // this.$store.commit("addCart",product)
      this.$store.dispatch("addCart", product).then((res) => {
        console.log(res);
        // this.message = res;
        // this.toastShow = true;
        // setTimeout(() => {
        //   this.toastShow = false;
        //   // this.message = ''
        // }, 1000);
        this.$toast.toastShow(res,15000)
        //dispatch返回promise
      });
    },
    // toTop(){
    //   this.$refs.scroll.scrollTo(0,0)
    // }
  },
  created() {
    //1.保存传入的iid
    this.iid = this.$route.params.iid;
    //2.根据iid发送详情页的网络请求
    getDetail(this.iid).then((res) => {
      console.log(res);
      //2.1获取轮播图数据
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      //2.2获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      console.log(this.goods);
      //2.3创建店铺信息的对象
      this.shop = new Shop(data.shopInfo);
      //2.4保存商品详情数据
      this.detailInfo = data.detailInfo;
      //2.5获取参数信息
      this.goodsParams = new GoodsParams(
        data.itemParams.info,
        data.itemParams.rule
      );
      //2.6获取第一条评论信息
      if (data.rate.cRate != 0) {
        this.commentInfo = data.rate.list[0];
      }
      //2.7请求详情页下面推荐部分的数据
      this.getDetailRecommend();
    });
  },
  mounted() {
    const refresh = this.debounce(this.$refs.scroll.refresh, 500);
    this.$bus.$on("imgLoad", () => {
      refresh();
    });
  },
};
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 10;
  background-color: #fff;
  height: 100vh;
}
.detail-nav-bar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  height: calc(100% - 93px);
  overflow: hidden;
}
.recommend-goods {
  margin: 20px 0 5px;
  text-align: center;
  font-size: 16px;
}
</style>