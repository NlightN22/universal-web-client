import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import Store from "./app/store/store";
import InMemoryStore from "./app/store/inMemoryStore";
import './index.scss'
import { Notifications } from '@mantine/notifications';

interface State {
    store: Store,
    inMemoryStore: InMemoryStore
}

const store = new Store()
const inMemoryStore = new InMemoryStore()


export const Context = createContext<State>( {
    store,
    inMemoryStore
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Context.Provider value={{
          store,
          inMemoryStore
      }}>
          <Notifications />
          <App />
      </Context.Provider>
  </React.StrictMode>
);

reportWebVitals(console.log);
