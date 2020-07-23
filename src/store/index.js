import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "./mutations"
import actions from "./actions"
Vue.use(Vuex)

const state = {
    cartList: []
}
export default new Vuex.Store({
    state,
    //不能直接修改state里的变量，要通过mutations修改
    mutations,
    actions,
    modules: {}
})