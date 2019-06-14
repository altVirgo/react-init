import React, { lazy } from 'react'
import { Route, Redirect } from 'react-router-dom'

const Dashboard = lazy(() => import('../layout/dashboard/dashboard.jsx'));
const Index = lazy(() => import('../components/index.jsx'));
const Error404Page = lazy(() => import('../components/error404Page.jsx'));
const Login = lazy(() => import('../components/login/login.jsx'));

const isLogin = localStorage.getItem('username');
const routes = [
    {
        path: "/",
        redirect: "/dashboard/index",
        exact: true,
        auth: true
    },
    {
        path: "/dashboard",
        component: Dashboard,
        auth: true,
        routes: [
            {
                path: "/dashboard/index",
                component: Index
            },
            {
                path: "/dashboard/about",
                component: Index
            }
        ]
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/404",
        component: Error404Page
    },
    {
        path: "/index",
        component: Index,
        auth: true
    }
]

const RouterWithRoutes = (route) => {
    let isExist = route && route.location ? checkTargetPathExist(routes, route.location.pathname) : true;
    if (!isExist) {
        return (<Redirect exact to="/404" />);
    } else if (route.auth && !isLogin) {
        return (<Redirect exact to="/login" />);
    } else if (route.redirect) {
        return (<Redirect exact path={route.path} to={route.redirect} />);
    } else if (route.exact) {
        return (<Route exact path={route.path} render={
            props => (
                <route.component {...props} routes={route.routes} />
            )
        } />);
    } else {
        return (<Route path={route.path} render={
            props => (
                <route.component {...props} routes={route.routes} />
            )
        } />);
    }
}

const checkTargetPathExist = (routes, targetPath) => {
    if (!targetPath) return true;
    let targetRoute;
    while (!targetRoute) {
        targetRoute = routes.find((val) =>
            targetPath === val.path
        );
        if (!targetRoute) {
            routes.map((val) => {
                if (!targetRoute && val.routes) {
                    targetRoute = checkTargetPathExist(val.routes, targetPath);
                }
            })
        }

    }
    return targetRoute;
}

export { routes, RouterWithRoutes };
