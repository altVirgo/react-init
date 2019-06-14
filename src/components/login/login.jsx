import React, { Component } from 'react';
import { Form, Input, Button } from 'element-react';
import Css from "./login.less";

import axios from "axios";
import store from '../../redux/stores/store';
import { login } from '../../redux/actions/user';
class Login extends Component {
    constructor() {
        super();
        this.state = {
            form: {
                username: "",
                password: ""
            }
        }

    }
    onChange(key, value) {
        this.state.form[key] = value;
        this.forceUpdate();
    }
    onSubmit(e) {
        e.preventDefault();
        axios.post("http://localhost:9000/users/login",
            this.state.form
        ).then((res) => {
            if (res.data.success) {
                debugger;
                localStorage.setItem("username", res.data.data.username);
                localStorage.setItem("userid", res.data.data._id);
                store.dispatch(login({ username: res.data.data.username, userid: res.data.data._id }));
                this.props.history.push('/dashboard/index');
            }
        }).catch((err) => {
            console.log(err);
        });
    }
    render() {
        return (
            <div className={Css.host}>
                <div className="full_screen">
                    <div className={Css.login_box}>
                        <Form model={this.state.form} labelWidth="56" onSubmit={this.onSubmit.bind(this)}>
                            <Form.Item label="用户名">
                                <Input value={this.state.form.username} onChange={this.onChange.bind(this, 'username')}></Input>
                            </Form.Item>
                            <Form.Item label="密  码">
                                <Input value={this.state.form.password} onChange={this.onChange.bind(this, 'password')}></Input>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" nativeType="submit">登录</Button>
                                <Button>取消</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;