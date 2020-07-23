<template>
  <div class="detail-comment-info" v-if="Object.keys(commentInfo).length !==0">
    <div class="comment-top">
      <span class="top-left">用户评价</span>
      <span class="top-right right">更多</span>
      <!-- <i class="arrow-right"></i> -->
    </div>

    <div class="user-info">
        <img :src="commentInfo.user.avatar" alt />
      <span class="uname">{{commentInfo.user.uname}}</span>
    </div>

    
      <div>{{commentInfo.content}}</div>
      <div class="comment-bottom">
      <span class="comment-date">{{commentInfo.created | showDate}}</span>
      <span>{{commentInfo.style}}</span>
    </div>
    <div class="content-img">
        <img :src="item" alt="" v-for="(item,index) in commentInfo.images" :key="index">
    </div>
  </div>
</template>

<script>
import {formatDate} from "common/Utils"
export default {
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters:{
      showDate(value){
          //1.将时间戳转换成Date对象
          //时间戳单位为秒，但Date的要为毫秒
          const date=new Date(value * 1000)
          //2.导入formatDate，对date进行格式化
          return formatDate(date,"yyyy-MM-dd")
      }
  }
};
</script>

<style scoped>
.detail-comment-info{
    padding:8px;
    margin: 14px 0 20px;
}
.comment-top{
    border-bottom: 1px solid #ccc;
    padding-bottom: 8px;
}
.user-info img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
}
.user-info{
    display:flex;
    align-items:center;
    margin:10px 0;
}
.uname{
    margin-left: 8px;
    font-weight: bold;
}
.comment-date{
    margin-right: 18px;
}
.comment-bottom{
    margin: 15px 0;
    font-size: 14px;
}
.content-img img{
width: 75px;
height: 75px;
margin-right: 5px;
}
</style>