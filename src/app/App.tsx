import React, {FC} from 'react';
import AppRouter from "./AppRouter";
import {BrowserRouter} from "react-router-dom";
import './App.scss'

const App: FC = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </div>
    )
}

export default App