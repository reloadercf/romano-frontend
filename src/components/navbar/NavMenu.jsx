import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import logo from './logo.png';
import './navbar.css'
import {connect} from 'react-redux'
import {categories} from '../../actions'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router-dom' 

const {Sider} = Layout;
const SubMenu = Menu.SubMenu;

const style = {
    logo: {
        width: "100%",
        height: "80px"
    }
}
class NavMenu extends Component {
    state = {
        collapsed: false,
      }
    
    componentWillMount(){
        this.props.categories();
    }

 
      toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      }

  
    render() {

        console.log(this.props.noticias.categoriesData)
        let categorias=this.props.noticias.categoriesData
        return (
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                collapsible={true}
                onCollapse={(collapsed, type) => 
            {
                console.log(collapsed, type);
            }}
                style={{
                height: '100vh',
                width:"300px",
                position: 'fixed',
                backgroundColor:"#ffff",
                zIndex: 2
            }}>

                <div className ="div-logo" > 
                    <img src={logo} style={style.logo} alt=""/> 
                </div>
                <Menu inlineCollapsed={this.state.collapsed}  theme="light" mode="inline" >
                    <Menu.Item key="a">
                        <span className="nav-text"><Link to='/' > <Icon type="check-circle" theme="twoTone" twoToneColor="#212121" />INICIO</Link></span>
                    </Menu.Item>
                    <Menu.Item key="b">
                        <span className="nav-text"><Link to='/directorio' > <Icon type="check-circle" theme="twoTone" twoToneColor="#212121" />DIRECTORIO</Link></span>
                    </Menu.Item>
                    <SubMenu key="sub1" title={<span className="submenu-text"><a href="#"> <Icon type="check-circle" theme="twoTone" twoToneColor="#212121" />CATEGORIAS</a></span>}>
                        {categorias && categorias.length > 0 ?
                            categorias.map((c, key) => (
                                <Menu.Item key={key}>
                                    <span className="nav-text"><Link to={`/modulo/${c.nombrecategoria}`}> <Icon type="check-circle" theme="twoTone" twoToneColor="#212121" /> {c.nombrecategoria}</Link></span>
                                </Menu.Item>
                            )) : null
                        }

                    </SubMenu>
                    
                </Menu>
                
            </Sider>
        );
    }
}

function mapStateToProps(state){
    return{
        noticias:state.noticias
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({categories}, dispatch)
   
}
export default connect(mapStateToProps,mapDispatchToProps)(NavMenu);

