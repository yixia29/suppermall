<template>
  <div class="wrapper" ref="aaa">
    <ul class="content">
      <button @click='btnClick'>按钮</button>
      <li>fenlei1</li>
      <li>fenlei2</li>
      <li>fenlei3</li>
      <li>fenlei4</li>
      <li>fenlei5</li>
      <li>fenlei6</li>
      <li>fenlei7</li>
      <li>fenlei8</li>
      <li>fenlei9</li>
      <li>fenlei10</li>
      <li>fenlei11</li>
      <li>fenlei12</li>
      <li>fenlei13</li>
      <li>fenlei14</li>
      <li>fenlei15</li>
      <li>fenlei16</li>
      <li>fenlei17</li>
      <li>fenlei18</li>
      <li>fenlei19</li>
      <li>fenlei20</li>
      <li>fenlei21</li>
      <li>fenlei22</li>
      <li>fenlei23</li>
      <li>fenlei24</li>
      <li>fenlei25</li>
      <li>fenlei26</li>
      <li>fenlei27</li>
      <li>fenlei28</li>
      <li>fenlei29</li>
      <li>fenlei30</li>
      <li>fenlei31</li>
      <li>fenlei32</li>
      <li>fenlei33</li>
      <li>fenlei34</li>
      <li>fenlei35</li>
      <li>fenlei36</li>
      <li>fenlei37</li>
      <li>fenlei38</li>
      <li>fenlei39</li>
      <li>fenlei40</li>
      <li>fenlei41</li>
      <li>fenlei42</li>
      <li>fenlei43</li>
      <li>fenlei44</li>
      <li>fenlei45</li>
      <li>fenlei46</li>
      <li>fenlei47</li>
      <li>fenlei48</li>
      <li>fenlei49</li>
      <li>fenlei50</li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Category",
  data() {
    return {
      scroll: null
    };
  },
  methods:{
btnClick(){
  console.log('jjjjjjjj');
}
  },
  //dom没有挂载
  // created(){
  //   // new BScroll('.conter',
  // },
  mounted() {
    this.scroll = new BScroll(document.querySelector(".wrapper"), {
      // mouseWheel:true,
      probeType: 3,
      pullUpLoad: true,
      click:false
    });
    this.scroll.on("scroll", (position) => {
      // console.log(position);
    });

    this.scroll.on('pullingUp',()=>{
      console.log('上拉加载更多');
    })
  }
};
</script>

<style scoped>
.wrapper {
  height: 170px;
  background-color: pink;
  overflow: hidden;
  /* overflow-y:scroll; */
}
</style>