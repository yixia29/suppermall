<template>
  <div id="shopcart">
    <nav-bar class="shopcart-nav">
      <div slot="center">购物车 ({{cartLength}})</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../components/common/nav/NavBar";
export default {
  components: {
    NavBar
  },
  computed:{
    cartLength(){
      return this.$store.state.cartList.length
    }
  }
};
</script>

<style scoped>
.shopcart-nav {
  background-color: var(--color-tint);
  color:#fff;}
</style>