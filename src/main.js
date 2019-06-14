import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { routes, RouterWithRoutes } from './routes';
import { HashRouter as Router, BrowserHistory, Switch, Route, Redirect, Link } from 'react-router-dom'

import { Provider } from "react-redux";
import store from "./redux/stores/store"
import {login} from "./redux/actions/user"
const supportsHistory = 'pushState' in window.history;
import "./assets/css/common.less";
import "./assets/css/index.css";
const App = () => (
    <Router forceRefresh={!supportsHistory} keyLength={12}>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                {routes.map((route, i) => {
                    return <RouterWithRoutes key={i} {...route} />
                })}
            </Switch>
        </Suspense>
    </Router>
)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);
if (localStorage.getItem("username")) {
    store.dispatch(login({
        username: localStorage.getItem("username"),
        userid: localStorage.getItem("userid")
    }));
}
