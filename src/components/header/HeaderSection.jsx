import React from 'react'
import './header.css'
import logo from './logo.png';
import {Link} from 'react-router-dom' 
import {Menu, Icon} from 'antd'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


export const HeaderSection = ({current, handleClick}) => {
    return (
        
      
           
            <div className="header">
                <div className="header-link-img">
                     <Link to='/'  >
                    <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="menu_header">
                    <Menu
                        onClick={handleClick}
                        selectedKeys={[current]}
                        mode="horizontal"
                    >
                        <Menu.Item key="a">
                        <span className="nav-text"><Link to='/' > <Icon type="check-circle" theme="twoTone" twoToneColor="#212121" />INICIO</Link></span>
                    </Menu.Item>
                    <Menu.Item key="b">
                        <span className="nav-text"><Link to='/directorio' > <Icon type="check-circle" theme="twoTone" twoToneColor="#212121" />DIRECTORIO</Link></span>
                    </Menu.Item>
                    <Menu.Item key="c">
                        <span className="nav-text"><Link to='/' > <Icon type="check-circle" theme="twoTone" twoToneColor="#212121" />INICIO</Link></span>
                    </Menu.Item>
                    <Menu.Item key="d">
                        <span className="nav-text"><Link to='/directorio' > <Icon type="check-circle" theme="twoTone" twoToneColor="#212121" />DIRECTORIO</Link></span>
                    </Menu.Item>

                    </Menu>

                </div>
        </div>
    )
}