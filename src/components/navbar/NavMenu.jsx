import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
const {Sider} = Layout;

class NavMenu extends Component {
    render() {
        return (
            <Sider
                style={{background:"#222831"}}
                breakpoint="lg"
                collapsedWidth="0"
                onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}>
                <div className="logo"/>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
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

            </Sider>
        );
    }
}

export default NavMenu;