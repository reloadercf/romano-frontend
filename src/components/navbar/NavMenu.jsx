import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import logo from './logo.png';



import {connect} from 'react-redux'
import {categories} from '../../actions'
import {bindActionCreators} from 'redux'
const {Sider} = Layout;

const style = {
    logo: {
        width: "100%",
        height: "80px"
    }
}
class NavMenu extends Component {

    componentWillMount(){
        this.props.categories();
    }

  
    render() {

        console.log(this.props.noticias.categoriesData)
        let categorias=this.props.noticias.categoriesData
        return (
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
            
                collapsible={true}
                //defaultCollapsed={false}
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

                <div className = "div-logo" > 
                    <img src={logo} style={style.logo} alt=""/> 
                </div>
                <Menu theme="light" mode="inline" defaultSelectedKeys={['4']}>
                    {categorias &&  categorias.length> 0? 
                    categorias.map((c, key) => (
                                <Menu.Item key={key}>
                                    <Icon type="shop" />
                                    <span className="nav-text">{c.nombrecategoria}</span>
                                </Menu.Item>
                    )):null
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

