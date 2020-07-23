import { ADD_COUNTER, ADD_TO_CART } from "./mutation-types"

export default {
    //mutations的唯一目的就是修改state的状态
    //mutations中的每个方法尽可能完成的事情比较单一
    //像含有逻辑判断的if等的代码，最好放到actions里
    // addCart(state, payload) {
    //     //payload为新添加的商品
    //     //1.如果cartList中没有这个iid商品，
    //     //2.则让payload的数量等于1，并把它push到cartList数组中。
    //     //3.如果cartList已有这个iid，则让payload的数量加1
    //     //法一：
    //     // let oldProduct = null
    //     // for (let item of state.cartList) {
    //     //     if (item.iid === payload.iid) {
    //     //         oldProduct = item
    //     //     }
    //     // }
    //     //法二：
    //     //1.查找数组是否已有该商品，如果有find为真，则把item给oldProduct是吗
    //     let oldProduct = state.cartList.find(item => item.iid === payload.iid)
    //         //2.都是判断oldProduct
    //     if (oldProduct) {
    //         oldProduct.count += 1
    //     } else {
    //         payload.count = 1
    //         state.cartList.push(payload)
    //     }

    // }
    [ADD_COUNTER](state, payload) {
        payload.count++
    },
    [ADD_TO_CART](state, payload) {
        state.cartList.push(payload)
    }

}