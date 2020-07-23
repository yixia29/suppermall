<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad:{
      type:Boolean,
      defaule:false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp(){
      //实现多次上拉加载更多
      this.scroll.finishPullUp()
    },
    refresh(){
      console.log('利用防抖函数后，scroll的refresh函数就不会频繁调用了');
      this.scroll && this.scroll.refresh()
    }
  },
  mounted() {
    //1.创建scroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      //click为false，button可以点击，div等不可点击
      click: true,
      pullUpLoad: this.pullUpLoad
    });
    //2.监听滚动的位置
    this.scroll.on("scroll", position => {
      // console.log(position);
      this.$emit("scroll", position);
    });
    //3.监听上拉加载更多
    this.scroll.on('pullingUp',()=>{
      this.$emit("pullingUp")
    })
    console.log(this.scroll);
  }
};
</script>

<style>
</style>