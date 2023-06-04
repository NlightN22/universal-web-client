import React, {FC, useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {Context} from "../index";
import {authRoutes, LOGIN_ROUTE, publicRoutes, TEST_ROUTE} from "./routes";

const AppRouter: FC = () => {
    const {store} = useContext(Context)
    return (
        <Routes>
            {store.isAuth && authRoutes.map(({path, component}) =>
                <Route key={Date.now()} path={path} element={component} />
            )}
            {publicRoutes.map(({path, component}) =>
                <Route key={Date.now()} path={path} element={component} />
            )}
            <Route key={Date.now()} path="*" element={<Navigate to={TEST_ROUTE} replace /> }/>
        </Routes>
    )
}

export default AppRouter;