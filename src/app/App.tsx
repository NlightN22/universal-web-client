import React, {FC, useEffect} from 'react';
import AppRouter from "./AppRouter";
import {BrowserRouter} from "react-router-dom";

const App: FC = () => {

    useEffect(() => {
        console.log("Render app")
    })

    return (
        <div className="app">
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </div>
    )
}

export default App