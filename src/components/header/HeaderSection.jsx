import React from 'react'
import './header.css'
import logo from './logo.png';
import {Menu, Icon, Button} from 'antd'
import {Link} from 'react-router-dom'



export const HeaderSection = ({current, handleClick, collapsed, toggleCollapsed}) => {
    return (
        
      
            <div className="header">
                <div className="header-link-img">
                      <Link to="/">
                         <img src={logo} alt="" />
                      </Link>
                </div>
                <div className="menu_header">
                
                    <Menu
                        onClick={handleClick}
                        selectedKeys={[current]}
                        className="menu"
                    >
                    <Menu.Item>
                        <Button onClick={toggleCollapsed} >
                            <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} style={{ fontSize: "20px" }} />
                        </Button>
                    </Menu.Item>
         
                    <Menu.Item key="b" className="mostrar_menu">
                        <span className="nav-text"><Link to='/' > <Icon type="check-circle" theme="twoTone" twoToneColor="#212121" />INICIO</Link></span>
                    </Menu.Item>
                    <Menu.Item key="c" className="mostrar_menu">
                        <span className="nav-text"><Link to='/directorio' > <Icon type="check-circle" theme="twoTone" twoToneColor="#212121" />DIRECTORIO</Link></span>
                    </Menu.Item>

           
                  
                   

                    </Menu>

                </div>
        </div>
    )
}