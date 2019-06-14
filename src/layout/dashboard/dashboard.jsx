import React, { Component, Suspense } from 'react'
import { RouterWithRoutes } from "../../routes"

import "./dashboard.less";
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import store from '../../redux/stores/store';
class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            value: "dashboard"
        }
    }
    componentDidMount() {
        console.log(store.getState());
    }
    render() {
        return (
            <div className="dashboard">
                <Header />
                <div className="main-wrap">
                    <div className="container">
                        {
                            this.props.routes.map((route, i) => {
                                return (
                                    <RouterWithRoutes key={i} {...route} />
                                )
                            })
                        }
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Dashboard;