import axios from "axios";

const request = axios.create({
    baseURL: '/api',
    timeout: 6600,
    auth: {
        username: 'user',
        password: 'c0c827c2-4573-43e9-b867-54e9b4f6cf0f'
    },
    // proxy: {
    //     protocol: 'http',
    //     host: 'localhost',
    //     port: 8080,
    //     auth: {
    //         username: 'user',
    //         password: '7e2bff04-3e80-42c0-b24d-8a2b912016aa'
    //     }
    // },
})

console.log(import.meta.env.VITE_BACKEND_URL)

request.interceptors.request.use(
    function (config) {
        // 在发送请求之前做些什么
        return config
    },
    function (error) {
        // 对请求错误做些什么
        console.log(error)
        return Promise.reject(error)
    }
)

// 拦截器
request.interceptors.response.use(
    function (response) {
        return Promise.resolve({
            status: response.status,
            code: response.data.code,
            msg: response.data.msg,
        })
    },
    function (error) {
        console.log(error)
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        return Promise.reject({
            status: error.response.status,
            code: error.response.data.code,
            msg: error.response.data.msg,
        })
    }
)

export default request