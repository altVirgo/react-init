import React, { Component } from 'react';

import { Radio, Layout } from 'element-react';
class Index extends Component {
    constructor() {
        super();
        this.state = {
            value: "首页"
        }

    }
    onChange(value) {
        this.setState({ value });
    }
    render() {
        return (
            <div>{this.state.value}
                <Layout.Row>
                    <Layout.Col span="24"><div className="grid-content bg-purple-dark">1</div></Layout.Col>
                </Layout.Row>
                <Radio value="1" checked={this.state.value === "1"} onChange={this.onChange.bind(this)}>备选项</Radio></div>
        );
    }
}

export default Index;