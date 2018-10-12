import React from 'react';
import {Layout, Menu, Icon} from 'antd';
import logo from './logo.png';
import './navbar.css'
import {Link} from 'react-router-dom'


const {Sider} = Layout;


const style = {
    logo: {
        width: "100%",
        height: "80px"
    }
}
const NavMenu=({categories, collapsed,toggleClose})=>  {

       
        return (
            <div>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                trigger={null}
                collapsible
                collapsed={collapsed}
                style={{
                width:"300px",
                position: 'fixed',
                height:"100%",
                top:"0",
                left:"0",
                boxShadow: "2px 0px 5px rgba(0,0,0,0.5)",
                backgroundColor:"#ffff",
                zIndex: 200         
            }}>

                <div className ="div-logo" > 
                    <img src={logo} style={style.logo} alt=""/> 
                </div>
                <Menu  inlineCollapsed={collapsed} o theme="light" mode="inline" >
                                <Menu.Item  key="a" className="mostrar_menu" >
                                    <span className="nav-text"><Link to="/" onClick={toggleClose}> <Icon type="check-circle"  /> Inicio</Link></span>
                                </Menu.Item>
                                <Menu.Item key="b"  className="mostrar_menu">
                                    <span className="nav-text"><Link to='/directorio'onClick={toggleClose}> <Icon type="check-circle"  /> Directorio</Link></span>
                                </Menu.Item>
                       
                        {categories && categories.length > 0 ?
                            categories.map((c, key) => (
                                <Menu.Item key={key}>
                                    <span className="nav-text"><Link to={`/modulo/${c.nombrecategoria}`} onClick={toggleClose}> <Icon type="check-circle"  /> {c.nombrecategoria}</Link></span>
                                </Menu.Item>
                            )) : null
                        }

                </Menu>
                
            </Sider>  

            </div>
           
        );
    }


export default NavMenu;

