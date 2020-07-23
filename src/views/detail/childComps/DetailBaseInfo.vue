<template>
  <div v-if="Object.keys(goods).length !==0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>

    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>

    <div class="info-services">
      <span class="info-services-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt />
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style>
.info-title{
    font-weight:bold;
    margin: 5px;
    font-size:18px;
}
.n-price{
    color:deepPink;
    font-size:25px;
    margin:10px;
}
.o-price{
    text-decoration: line-through;
}
.info-price .discount{
    background-color: deepPink;
    color:#fff;
    font-size:14px;
    border-radius: 8px;
    padding:3px;
    margin:8px;
}
.info-other{
    display:flex;
    border-bottom:1px solid #ccc;
     padding-left:4px;
    margin-top:5px;
}
.info-other span{
    flex:1;
    margin:18px 0 10px 5px;
    font-size: 15px;
}
.info-services img{
    width: 14px;
    height: 14px;
}
.info-services{
    display:flex;
    font-size: 14px;
    padding-left:2px;
    font-weight: bold;
    margin:8px;
}
.info-services-item{
    flex:1;
}
</style>