import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Store } from './redux/store';
import App from './App';
import { Gprov } from "./context";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/scss/sb-admin-2.scss';
import './assets/js/scripts';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={Store}>
        <Gprov>
            <App />
        </Gprov>
    </Provider>
);