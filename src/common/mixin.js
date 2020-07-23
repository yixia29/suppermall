//在混入中，生命周期函数中的内部代码可以合并
//但methods只能合并里面的方法，不能合并同个方法名的部分代码

// import {debounce} from "./Utils"

//导入组件
import BackTop from "../components/content/backTop/BackTop.vue"
export const backTopMixin = {
    components: {
        BackTop
    },
    data() {
        return {
            isShowBackTop: false,
        }
    },
    methods: {
        // contentScroll(position) {
        //     //判断BackTop是否显示
        //       this.isShowBackTop = -(position.y) > 1000;
        //     },
        //点击返回顶部
        toTop() {
            this.$refs.scroll.scrollTo(0, 0)
        }
    },
}