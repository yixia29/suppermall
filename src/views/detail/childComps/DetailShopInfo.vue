<template>
  <div class="shop-info">
      <!-- 顶部 -->
        <div class="shop-top">
            <img :src="shop.logo">
            <span class="title">{{shop.name}}</span>
        </div>
        <!-- 中间 -->
        <div class="shop-middle">
            <!-- 中间左边部分 -->
            <div class="shop-middle-item shop-middle-left">
                <div class="info-sells">
                    <div class="sells-count">
                        <!-- {{shop.sells}} -->
                        <!-- 数据|方法名，将调用filters(过滤器)里该方法 -->
                        {{shop.sells | sellCountFilter}}
                    </div>
                    <div class="sells-text">总销量</div>
                </div>
                <div class="info-goods">
                    <div class="goods-count">
                        {{shop.goodCount}}
                    </div>
                    <div class="goods-text">全部宝贝</div>
                </div>
            </div>
            <!-- 中间右边部分 -->
            <div class="shop-middle-item shop-middle-right">
                <table>
                <tr v-for="(item, index) in shop.score" :key="index">
                    <td>{{item.name}}</td>
                    <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
                    <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
                </tr>
                </table>
            </div>
        </div>
        <!-- 底部 -->
        <div class="shop-bottom">
            <div class="enter-shop">进店逛逛</div>
        </div>
  </div> 
</template>

<script>
export default {
    props: {
        shop: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    filters: {
        sellCountFilter: function (value) {
            if (value < 10000) return value;
            return (value/10000).toFixed(1) + '万'
        }
    }
}
</script>

<style scoped>
    .shop-info {
        padding: 25px 8px;
        border-bottom:8px solid #eee;
    }
    .shop-top {
        /* line-height: 45px; */
        /* 设置侧轴的子元素的对齐方式，让元素（文字）垂直中心对齐 */
        display: flex;
        align-items: center;
    }
    .shop-top img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        border: 1px solid rgba(0,0,0,.1);
    }
    .shop-top .title {
        margin-left: 10px;
        /* vertical-align: center; */
    }
    .shop-middle {
        margin-top: 15px;
        display: flex;
        align-items: center;
    }
    .shop-middle-item {
        flex: 1;
    }
    .shop-middle-left {
        display: flex;
        justify-content: space-evenly;
        color: #333;
        text-align: center;
        border-right: 1px solid rgba(0,0,0,.1);
    }
    .sells-count, .goods-count {
        font-size: 18px;
    }
    .sells-text, .goods-text {
        margin-top: 10px;
        font-size: 14px;
    }
    .shop-middle-right {
        font-size: 13px;
        color: #333;
    }
    .shop-middle-right table {
        width: 120px;
        margin-left: 30px;
    }
    .shop-middle-right table td {
        padding: 5px 0;
    }
    .shop-middle-right .score {
        color: #5ea732;
    }
    .shop-middle-right .score-better {
        color: #f13e3a;
    }
    .shop-middle-right .better span {
        background-color: #5ea732;
        color: #fff;
        text-align: center;
    }
    .shop-middle-right .better-more span {
        background-color: #f13e3a;
    }
    .shop-bottom {
        text-align: center;
        margin-top: 10px;
    }
    .enter-shop {
        display: inline-block;
        /* margin:0 auto; */
        font-size: 14px;
        background-color: #f2f5f8;
        width: 150px;
        height: 30px;
        line-height: 30px;
        border-radius: 10px;
    }
</style>