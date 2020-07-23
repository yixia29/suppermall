<template>
  <div class="detail-goods-info" v-if="Object.keys(detailInfo).length !=0">
    <div class="desc-start left"></div>
    <div class="goods-desc">{{ detailInfo.desc }}</div>
    <div class="desc-end right"></div>

    <div class="goods-key">{{ detailInfo.detailImage[0].key}}</div>

    <div class="goods-img" v-for="(item, index) in detailInfo.detailImage[0].list" :key="index">
      <img :src="item" alt="" @load="imgLoad">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods:{
    imgLoad(){
      this.$bus.$emit('imgLoad')
    }
  }
};
</script>

<style scoped>
.detail-goods-info {
  padding: 20px 3px;
  border-bottom: 5px solid #f2f5f8;
  background: #fff;
  border-bottom: 5px solid #ccc;

}
.desc-start,
.desc-end {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}
.desc-start::before,
.desc-end::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}
.goods-desc {
  margin: 10px 2px;
}
.goods-key{
  margin:30px 2px 10px;
}
img {
  width: 100%;
}
</style>