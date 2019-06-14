import React, { Component, Suspense } from 'react'
import { Route, Switch, Link } from "react-router-dom"

import "./footer.less"
class Footer extends Component {
    constructor() {
        super();
        this.state = {
            value: "header"
        }
    }
    render() {
        return (
            <footer>
                <p>© 2019 GitHub, Inc</p>                
            </footer>
        );
    }
}

export default Footer;