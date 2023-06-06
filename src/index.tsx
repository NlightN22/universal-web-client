import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import Store from "./app/store/store";
import InMemoryStore from "./app/store/inMemoryStore";
import {Notifications} from '@mantine/notifications';
import {MantineProvider} from '@mantine/core';

interface State {
    store: Store,
    inMemoryStore: InMemoryStore
}

const store = new Store()
const inMemoryStore = new InMemoryStore()


export const Context = createContext<State>({
    store,
    inMemoryStore
})

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <MantineProvider
        withGlobalStyles
        withNormalizeCSS
    >
        <Context.Provider value={{
            store,
            inMemoryStore
        }}>
            <React.StrictMode>
                <Notifications/>
                <App/>
            </React.StrictMode>
        </Context.Provider>

    </MantineProvider>
);

// reportWebVitals(console.log);
