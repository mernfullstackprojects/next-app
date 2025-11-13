import axios, { InternalAxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL
})

axiosInstance.interceptors.request.use(
    function(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
        const token = localStorage.getItem("token")
        if (token) {
            config.headers["token"] = token
        }

        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)

export default axiosInstance