import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Css from "./header.less";
import store from './../../redux/stores/store';
class Header extends Component {
    constructor() {
        super();
        this.state = {
            value: "header",
            userInfo: store.getState().user,
            menuList: [
                {
                    title: "菜单一",
                    path: "/dashboard/index",
                    subMenu: [
                        {
                            title: "菜单一：A",
                            path: "/dashboard/index"
                        },
                        {
                            title: "菜单一：B",
                            path: "/dashboard/index"
                        }
                    ]
                }, {
                    title: "菜单二",
                    path: "/dashboard/index"
                }, {
                    title: "菜单三",
                    path: "/dashboard/index",
                    subMenu: [
                        {
                            title: "菜单三：A",
                            path: "/dashboard/index"
                        },
                        {
                            title: "菜单三：B",
                            path: "/dashboard/index"
                        }
                    ]
                }
            ]
        }
    }
    render() {
        return (
            <header>
                <div className="container">
                    <ul id={Css.top_menu}>
                        <li className={Css.logo}>
                            <Link to="/dashboard/index">
                                {/* <img src={require("../../assets/images/logo.png")} alt="" /> */}
                                LOGO
                            </Link>
                        </li>
                        {
                            this.state.menuList.map((item, i) => {
                                if (!item.subMenu) {
                                    return <li key={i}><Link to={item.path}>{item.title}</Link></li>
                                } else {
                                    return <li key={i}><Link to={item.path}>{item.title}</Link>
                                        <ul>
                                            {item.subMenu.map((subItem, subI) => {
                                                return <li key={subI}><Link to={subItem.path}>{subItem.title}</Link></li>
                                            })}
                                        </ul>
                                    </li>
                                }
                            })
                        }

                        <li className="pull-right">
                        {(this.state.userInfo.userid && (<span> {this.state.userInfo.username}</span>))}
                        {(!this.state.userInfo.userid && (<Link to="/login">登录</Link>))}</li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;