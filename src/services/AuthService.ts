import {baseHost} from "../api"
import {AxiosResponse} from 'axios'
import {AuthResponse} from "../api/authorization/by-username/model/response";
import {RefreshTokenResponse} from "../api/authorization/refresh_token/RefreshTokenResponse";
import {isTokenExpired} from "../utils/JWT";
import {LOGIN_ROUTE} from "../app/routes";

export default class AuthService {
    static async login(user: string, pass: string): Promise<AxiosResponse<AuthResponse>> {
        const qs = require('qs')
        return baseHost.post<AuthResponse>(LOGIN_ROUTE, qs.stringify({user, pass}))
    }

    static async refresh(refreshToken: string): Promise<AxiosResponse<RefreshTokenResponse>> {
        return baseHost.post<RefreshTokenResponse>(LOGIN_ROUTE, null, {params: {token: refreshToken}})
    }

    static async checkAuth(): Promise<boolean> {
        const accessToken = ''
        if (accessToken) {
            if (!isTokenExpired(accessToken)) {
                const refreshToken = ''
                if (refreshToken) {
                    if (isTokenExpired(refreshToken)) {
                        await this.refresh(refreshToken)
                        return true
                    }
                }
            } else {
                return true
            }
        }
        return false
    }
}