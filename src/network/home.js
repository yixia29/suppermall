import { request } from './request.js'

//首页所有的网络请求
export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}

export function getHomeGoods(type, page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })

}