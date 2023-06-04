import jwtDecode from "jwt-decode";
import IUser from "../entities/UserService";

//"exp": 1685366930
export const isTokenExpired = (token: string): boolean => {
    try {
        const { exp } = jwtDecode(token) as {
            exp: number
        }
        const expirationDatetimeInSeconds = exp * 1000

        return Date.now() >= expirationDatetimeInSeconds
    } catch {
        return true
    }
}

export const getTokenUser = (token: string): IUser | null => {
    try {
        const { username } = jwtDecode(token) as {
            username: string
        }
        return { username }
    } catch (err) {
        return null
    }
}