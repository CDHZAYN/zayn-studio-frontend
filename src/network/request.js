import axios from "axios";

const request = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    timeout: 10000,
    auth: {
        username: 'user',
        password: 'd08adba1-3041-462e-986c-ed8e464e43d5'
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
        console.log(response)
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        // dataAxios 是 axios 返回数据中的 data
        const dataAxios = response.data
        // 这个状态码是和后端约定的
        const code = dataAxios.reset
        return dataAxios
    },
    function (error) {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        console.log(error)
        return Promise.reject(error)
    }
)

export default request