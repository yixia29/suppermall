import { ADD_COUNTER, ADD_TO_CART } from "./mutation-types"

export default {
    addCart(context, payload) {
        //payload为新添加的商品
        //1.如果cartList中没有这个iid商品，
        //2.则让payload的数量等于1，并把它push到cartList数组中。
        //3.如果cartList已有这个iid，则让payload的数量加1
        //法一：
        // let oldProduct = null
        // for (let item of state.cartList) {
        //     if (item.iid === payload.iid) {
        //         oldProduct = item
        //     }
        // }
        //法二：
        //1.查找数组是否已有该商品，如果有find为真，则把item给oldProduct是吗
        let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
            //2.都是判断oldProduct
        if (oldProduct) {
            // oldProduct.count += 1
            context.commit(ADD_COUNTER, oldProduct)
        } else {
            payload.count = 1
                // context.state.cartList.push(payload)
            context.commit(ADD_TO_CART, payload)
        }
        //尽量让改变state的操作在mutatios中完成
    }
}