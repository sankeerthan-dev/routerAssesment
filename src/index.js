import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { createStore } from "redux";
import mainReducer from './Reducers'


const mainStore = createStore(mainReducer);
console.log(mainReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={mainStore}>
    <App />
    </Provider>
  </React.StrictMode>
);


