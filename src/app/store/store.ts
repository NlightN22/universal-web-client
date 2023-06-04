import IUser from "../../entities/UserService";
import {makeAutoObservable} from "mobx";
import AuthService from "../../services/AuthService";
import {getTokenUser} from "../../utils/JWT";

export default class Store {
    user = {} as IUser
    isAuth = false

    constructor() {
        makeAutoObservable(this)
    }

    setAuth(bool: boolean) {
        this.isAuth = bool
    }

    setUser(user: IUser) {
        this.user = user
    }

    async login(user: string, pass: string) {
        try {
            const res = await AuthService.login(user, pass)
            console.log(res.data)
            const accessToken = res.data.access_token
            const refreshToken = res.data.refresh_token
            this.setAuth(true)
            const tokenUser = getTokenUser(accessToken)
            if (tokenUser) this.setUser(tokenUser)
        } catch (e) {
            if (e instanceof Error) {
                console.error(e.message)
            }
        }
    }

    async refreshToken(refreshToken: string) {
        try {
            const res = await AuthService.refresh(refreshToken)
            console.log(res.data)
        } catch (err) {
            if (err instanceof Error) {
                console.error(err.message)
            }
        }
    }
}