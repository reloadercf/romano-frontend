import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import logo from './logo.png';
const { Header} = Layout;



const style={
    logo:{
        width: "auto",
        height: "80px"
    }
}
class NavMenu extends Component {
    render() {
        return (
            <Header
                style={{
                position: 'fixed',
                zIndex: 1,
                width: '100%',
                background: "#ffff"
            }}>
               
                <div className="div-logo" >
                    <img src={logo} style={style.logo} alt=""/>
                </div>
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{
                    lineHeight: '64px',
                    width: '100%',
                }}>
                    <Menu theme="light" mode="inline" defaultSelectedKeys={['4']}>
                        <Menu.Item key="1">
                            <Icon type="user"/>
                            <span className="nav-text">Deportes</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera"/>
                            <span className="nav-text">Fiananzas</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload"/>
                            <span className="nav-text">Salud</span>
                        </Menu.Item>

                    </Menu>

                </Menu>
            </Header>
        );
    }
}

export default NavMenu;