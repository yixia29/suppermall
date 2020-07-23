<template>
  <div class="tab-control">
    <!-- 只是文字不一样，没有必要用插槽 -->
    <div v-for="(item,index) in title" :key='index' 
    class='tab-control-item'
    :class="{active:index===currentIndex}"
    @click='itemClick(index)'
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        title:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
      return{
        currentIndex:0
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex=index;
        this.$emit('tabClick',index)
      }
    }
};
</script>

<style>
.tab-control{
  display:flex;
  background-color: #fff;
}
.tab-control-item{
flex:1;
text-align:center;
height: 40px;
line-height:40px;
}
.tab-control-item span{
  padding: 5px;
}
.active{
  color:var(--color-high-text);
}
.active span{
  border-bottom:3px solid var(--color-tint)

}
</style>