import axios, {InternalAxiosRequestConfig} from "axios";

import { authorization } from "./authorization";

export const API = {
    authorization
}

const baseUrl = process.env.REACT_APP_SERVER_URL

const baseHost = axios.create({
    baseURL: baseUrl,
})

const authHost = axios.create ({
    baseURL: baseUrl
})

const authConfig = (config: InternalAxiosRequestConfig) => {
    config.params = {...config.params, token: localStorage.getItem('access_token')}
    return config
}

authHost.interceptors.request.use(authConfig)

export {
    baseHost,
    authHost
}

