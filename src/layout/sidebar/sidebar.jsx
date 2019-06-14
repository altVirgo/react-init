import React, { Component, Suspense } from 'react'
import { Route, Switch, Link } from "react-router-dom"
import { RouterWithRoutes } from "../routes/index"

import Index from '../components/index.jsx';
class Sidebar extends Component {
    constructor() {
        debugger;
        super();
        this.state = {
            value: "header"
        }
    }
    render() {
        return (
            <header>
                <ul id="top-menu">
                    <li><Link to="/index">首页</Link></li>
                    <li><Link to="/dashboard/index">产品</Link></li>
                    <li><Link to="/dashboard/index">解决方案</Link>
                        <ul>
                            <li><Link to="/dashboard/index">About</Link></li>
                            <li><Link to="/dashboard/index">Message</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/dashboard/index">About</Link></li>
                    <li><Link to="/404">Message</Link></li>
                </ul>
            </header>
        );
    }
}

export default Sidebar;