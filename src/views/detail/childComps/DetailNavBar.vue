<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <div slot="left" class="back" @click="backClick"><img src="~assets/img/common/back.svg" alt=""></div>
      <div slot="center" class="title">
        <div v-for="(item,index) in title" :key="index"
          class="title-item"
          @click="titleClick(index)"
          :class="{active:currentIndex===index}"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/nav/NavBar";
export default {
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    titleClick(index) {
        this.currentIndex=index
        
    },
    backClick(){
        this.$router.back()
        // this.$router.go(-1)
    }
  },
  components: {
    NavBar
  }
};
</script>

<style scoped>
.title {
  display: flex;
  font-size: 16px;
}
.title-item {
  flex: 1;
}
.active{
    color:deepPink;
}
.back img{
    margin-top:12px;
}
</style>