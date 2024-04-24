import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {rootReducer} from "./redux/reducers/reducers";
import {thunk} from "redux-thunk";

const store= createStore(rootReducer,applyMiddleware(thunk))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);


