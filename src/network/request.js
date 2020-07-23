import axios from 'axios'

//网络模块的封装
export function request(config) {
    //1.创建axios实例
    const instance = axios.create({
            baseURL: 'http://152.136.185.210:8000/api/n3/',
            timeout: 5000
        })
        //2axios拦截器
        //2.1请求拦截
    instance.interceptors.request.use(config => {
            // console.log(config);
            return config
        }, err => {
            // console.log(err);

        })
        //2.2响应拦截
    instance.interceptors.response.use(res => {
            // console.log(res);
            return res.data
        }, err => {
            console.log(err);

        })
        //3.发送真正的网络请求，instance返回promise
        //则调用reques这个函数时，直接用.then和.catch
    return instance(config)
}



// export function request(config) {
//     return new Promise((resolve, reject) => {
//         //1.创建axios实例
//         const instance = axios.create({
//                 baseURL: 'http://123.207.32.32:8000',
//                 timeout: 10000
//             })
//             //3.发送真正的网络请求
//         instance(config)
//             .then(res => {
//                 resolve(res)
//             }).catch(err => {
//                 reject(err);
//             })
//     })
// }