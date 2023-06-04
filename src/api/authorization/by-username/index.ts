import {AxiosError, AxiosResponse} from "axios";
import {AuthResponse} from "./model/response";
import {baseHost} from "../../index";
import {Result} from "./model/result";
import qs from 'qs';
import {validation} from "./validation";

const LOGIN_URL = "/api/host/login.json"

const query = async (user: string, pass: string): Promise<AxiosResponse<AuthResponse>> => {
    return baseHost.post<AuthResponse>(LOGIN_URL, qs.stringify({user, pass}))
}

const byUsername = async (user: string, pass: string): Promise<Result> => {
    let result: Result = {
        errorMessage: 'Undefined exception',
        isSuccess: false
    }
    try {
        const response = await query(user, pass)
        return validation(response)
    } catch (err) {
        if (err instanceof Error) {
            if (err instanceof AxiosError) {
                console.log('Axios error', err.toJSON())
                if (err.code === 'ERR_NETWORK') return {...result, errorMessage: 'Connection timeout'}
                if (err.response?.status === 401) return {...result, errorMessage: 'User is not authorized'}
                if (err.response) return {...result, errorMessage: JSON.stringify(err.response.data) }
                return {...result, errorMessage: JSON.stringify(err)}
            }
            console.log('Message', err.message)
            return {
                ...result,
                errorMessage: err.message.toString(),
            }
        }
        return result
    }
}

export {byUsername}