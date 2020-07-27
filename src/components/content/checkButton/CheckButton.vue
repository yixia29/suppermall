<template>
  <div class="check-button" :class="{check:isCheck}">
      <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
props:{
    isCheck:{
        type:Boolean,
        default:false
    }
}
}
</script>

<style scoped>
.check-button{
    border-radius: 50%;
    border:2px solid #aaa;
    width: 20px;
    height: 20px;
}
.check{
    border-color:rgb(226, 67, 67);
    background-color: rgb(226, 67, 67);

}
</style>