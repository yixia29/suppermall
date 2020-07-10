<template>
  <div class='recommend'>
      <div v-for="(item,key) in recommends" :key="key" class='recommend-item'>
          <a :href='item.link'>
              <img :src='item.image'>
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    },
}
</script>

<style>
.recommend{
    display:flex;
    font-size:14px;
    text-align:center;
    padding:10px 0 20px;
    border-bottom:8px solid #eee;
}
.recommend-item{
    flex:1;
    
}
.recommend-item  img{
    width: 80%;
    height: 80%;
}
</style>