<template>
  <div class="toast" v-show="isShow">
      {{message}}
  </div>
</template>

<script>
export default {
props:{
    // message:{
    //     type:String,
    //     default:''
    // },
    // toastShow:{
    //     type:Boolean,
    //     default:false
    // }
},
data(){
    return {
        message:"",
        isShow:false
    }
},
methods:{
    toastShow(message,duration){
        this.isShow=true,
        this.message=message

        setTimeout(()=>{
            this.isShow=false,
            this.message=""
        },duration)
    }
}
}
</script>

<style scoped>
.toast{
    position:fixed;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    color:#fff;
    background-color:rgba(0,0,0,.7);
    padding: 8px 10px;
    z-index:999
    
}
</style>