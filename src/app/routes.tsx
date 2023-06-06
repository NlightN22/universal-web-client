import Main from "../pages/Main";
import React, {JSX} from "react";
import Login from "../pages/Login/Login";
import TestPage from "../pages/Test/test";
import DefaultAppShell from "../pages/Test/DefaultAppShell";

export const LOGIN_ROUTE = '/login'
export const ALL_STATUS_ROUTE = '/monitors'
export const TEST_ROUTE = '/test'

interface IRoute {
    path: string,
    component: JSX.Element
}

export const authRoutes: IRoute[] = [
    {
        path: ALL_STATUS_ROUTE,
        component: <Main />
    },
]

export const publicRoutes: IRoute[] = [
    {
        path: LOGIN_ROUTE,
        component: <Login />
    },
    {
        path: TEST_ROUTE,
        component: <TestPage />
    }
]