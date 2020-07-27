<template>
  <div id="shopcart">
    <nav-bar class="shopcart-nav">
      <div slot="center">购物车 ({{cartLength}})</div>
    </nav-bar>
    <scroll class="content">
    <cart-list></cart-list>
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
//导入compoments下的comment
import NavBar from "../../components/common/nav/NavBar";
import Scroll from "../../components/common/scroll/Scroll"
//导入子组件
import CartList from "./childComps/CartList"
import CartBottomBar from "./childComps/CartBottomBar"


// import {mapGetters} from "vuex"
export default {
  components: {
    NavBar,
    CartList,
    Scroll,
    CartBottomBar
  },
  computed:{
    cartLength(){
      // return this.$store.state.cartList.length
      return this.$store.getters.cartLength
    },
    //!!!让getters里的方法可以在comouted中直接使用
      //先从vuex中导入mapGetters
      //第一种写法：
      // ...mapGetters(['cartLength','cartList'])
      //另一种起别名的写法：
      // ...mapGetters({
      //   length:"cartLength",
      // list:"cartList"
      // })
  }
};
</script>

<style scoped>
#shopcart{
  height:100vh;
}
.shopcart-nav {
  background-color: var(--color-tint);
  color:#fff;}
  .content{
    height:calc(100% - 44px - 49px - 40px);
    overflow: hidden;
  }
</style>