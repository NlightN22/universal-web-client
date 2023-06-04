import {AuthResponse} from "./model/response";
import {Result} from "./model/result";
import {AxiosResponse} from "axios";

const validation = (response: AxiosResponse<AuthResponse>): Result => {
    let result: Result = {
        errorMessage: 'Undefined exception',
        isSuccess: false
    }
    if (response.status == 200) return {...result, isSuccess:true}
    return  result
}

export { validation }