import React, { Component } from 'react';

class Index extends Component {
    constructor() {
        super();
        this.state = {
            value: "404"
        }
    }
    render() {
        return (
            <div>{this.state.value}</div>
        );
    }
}

export default Index;