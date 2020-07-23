<template>
  <div class="detail-goods-params" v-if="Object.keys(goodsParams).length != 0">
      <table v-for="(table,index) in goodsParams.sizes" :key="index" class="sizes-table">
          <tr v-for="(tr,indey) in table" :key="indey" class="sizes-tr">
              <td v-for="(td,indez) in tr" :key="indez" class="sizes-td">{{td}}</td>
          </tr>
      </table>

      <table class="infos-table">
          <tr v-for="(tr,index) in goodsParams.infos" :key="index" class="infos-tr">
              <td>{{tr.key}}</td>
              <td>{{tr.value}}</td>
          </tr>
      </table>

      <div v-if="goodsParams.image.length != 0">
          <img :src="goodsParams.image" alt="">
      </div>
  </div>
</template>

<script>
export default {
props:{
    goodsParams:{
        type:Object,
        default(){
            return {}
        }
    }
}
}
</script>

<style scoped>
.detail-goods-params{
    padding: 20px 20px;
  border-bottom: 5px solid #eee;

}
.sizes-table,.infos-table{
    width: 100%;
    border-collapse: collapse;
}
.sizes-tr,.infos-tr{
    border-bottom: 1px solid #eee;
    height: 45px;
}
.infos-tr td:nth-child(1){
    width: 95px;
}

.infos-tr td:nth-child(2){
    color:#eb4868;
}
.detail-goods-params img{
    width: 100%;
}
</style>