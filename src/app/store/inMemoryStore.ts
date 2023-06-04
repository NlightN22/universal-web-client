const ACCESS_TOKEN = 'access_token'
const REFRESH_TOKEN = 'refresh_token'

export default class InMemoryStore {
    private _accessToken: string | null = null
    private _refreshToken: string | null = null

    get accessToken() {
        this._accessToken = localStorage.getItem(ACCESS_TOKEN)
        return this._accessToken
    }

    set accessToken(token) {
        if (token) localStorage.setItem(ACCESS_TOKEN, token)
        this._accessToken = token
    }

    get refreshToken() {
        this._refreshToken = localStorage.getItem(REFRESH_TOKEN)
        return this._accessToken
    }

    set refreshToken(token) {
        if (token) localStorage.setItem(REFRESH_TOKEN, token)
        this._refreshToken = token
    }
}

