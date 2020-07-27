<template>
  <div class="cart-bottom-bar">
      <div class="bottom-bar-left">
          <CheckButton :is-check="isSelectAll"
          @click.native="allSelectClick"></CheckButton>
          <span>全选</span>
      </div>

      <div class="bottom-bar-center">
          合计：￥{{totalPrice}}
      </div>

      <div class="bottom-bar-right">
          去结算：({{checkLength}})
      </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton"
export default {
components:{
    CheckButton
},
computed:{
    totalPrice(){
        return this.$store.state.cartList.filter(item=>{
            return item.check
        }).reduce((preValue,item)=>{
            return preValue+item.realPrice*item.count
        },0).toFixed(2)
    },
    checkLength(){
        return this.$store.state.cartList.filter(item=>item.check).length
    },
    isSelectAll(){
        if(this.$store.state.cartList.length===0) return false
        // return !(this.$store.state.cartList.filter(item=>!item.check).length)
        return !(this.$store.state.cartList.find(item=>!item.check))

    }
},
methods:{
    allSelectClick(){
        if(this.isSelectAll){//全选状态
            this.$store.state.cartList.forEach(item =>item.check=false);
        } else {
            this.$store.state.cartList.forEach(item =>item.check=true);
        }
        // 错误this.$store.state.cartList.forEach(item =>item.check=!this.isSelectAll)
    }
}
}
</script>

<style>
.cart-bottom-bar{
    padding: 8px;
    background-color: #eee;
    height: 40px;
    display: flex;
    align-items: center;
}
.bottom-bar-left{
    display: flex;
}
.bottom-bar-left span{
    margin: 0 25px 0 8px;
}
.bottom-bar-right{
    align-self:right;
     
     position:absolute;
     right:0;
     text-align: center;
     width: 120px;
     height: 40px;
     line-height: 40px;
    color:#fff;
     background-color:rgb(226, 67, 67);
}
</style>