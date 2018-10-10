import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import logo from './logo.png';
import './navbar.css'
import {connect} from 'react-redux'
import {categories} from '../../actions'
import {bindActionCreators} from 'redux'
 

const {Sider} = Layout;
//const SubMenu = Menu.SubMenu;

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

 
     
  
    render() {
        console.log(this.props.collapsed)
        let categorias=this.props.noticias.categoriesData
        return (
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                trigger={null}
                collapsible
                collapsed={this.props.collapsed}
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
                <Menu  inlineCollapsed={this.props.collapsed}  theme="light" mode="inline" >
                
                 
                        {categorias && categorias.length > 0 ?
                            categorias.map((c, key) => (
                                <Menu.Item key={key}>
                                    <span className="nav-text"><a href={`/modulo/${c.nombrecategoria}`}> <Icon type="check-circle" theme="twoTone" twoToneColor="#212121" /> {c.nombrecategoria}</a></span>
                                </Menu.Item>
                            )) : null
                        }

           
                    
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

