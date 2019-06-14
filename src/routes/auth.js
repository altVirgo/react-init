import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

export class FrontendAuth extends Component {
    componentWillMount() {
        let { history: { replace }, authorization, location } = this.props
        if (authorization) replace('./login')
        if (location.pathname === '/') replace('./asd')
        console.log('路由跳转前的拦截', this.props)
    }
    render() {

    }
}