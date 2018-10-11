import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import logo from './logo.png';
import './navbar.css'
import {Link} from 'react-router-dom'


const {Sider} = Layout;
//const SubMenu = Menu.SubMenu;
const URL='https://www.mxplanb.xyz';

const style = {
    logo: {
        width: "100%",
        height: "80px"
    }
}
class NavMenu extends Component {
    state = {
        collapsed: false,
        categories:[]
      }
    
    componentWillMount(){
        this.getcategories();
    }

    getcategories=()=>{
        let url =`${URL}/article/categorias/`;
        var request = new Request(url, {
            method: 'GET',
            headers:new Headers({
                'Content-Type': 'application/json'
            }) 
        });
        fetch(request)
            .then(r => r.json())
            .then(data => {    
                this.setState({categories: data})
            })
            .catch(e => {
      
            })
   }
     
  
    render() {
        console.log(this.props.collapsed)
        console.log(this.props.collapsed)
        let {categories}=this.state
        return (
            <div>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                trigger={null}
                collapsible
                collapsed={this.props.collapsed}
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
                <Menu  inlineCollapsed={this.props.collapsed}  theme="light" mode="inline" >
                                <Menu.Item key="a"  className="mostrar_menu">
                                    <span className="nav-text"><Link to="/"> <Icon type="check-circle" theme="twoTone" twoToneColor="#212121" /> Inicio</Link></span>
                                </Menu.Item>
                                <Menu.Item key="b"  className="mostrar_menu">
                                    <span className="nav-text"><Link to='/directorio'> <Icon type="check-circle" theme="twoTone" twoToneColor="#212121" /> Directorio</Link></span>
                                </Menu.Item>
                       
                        {categories && categories.length > 0 ?
                            categories.map((c, key) => (
                                <Menu.Item key={key}>
                                    <span className="nav-text"><Link to={`/modulo/${c.nombrecategoria}`}> <Icon type="check-circle" theme="twoTone" twoToneColor="#212121" /> {c.nombrecategoria}</Link></span>
                                </Menu.Item>
                            )) : null
                        }

                </Menu>
                
            </Sider>


                

            </div>
           
        );
    }
}

export default NavMenu;

