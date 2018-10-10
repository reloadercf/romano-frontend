import React, { Component } from 'react';
import './App.css';
import {Layout} from 'antd';
import NavMenu from './components/navbar/NavMenu';
import Routes from './Routes';
import { HeaderSection } from './components/header/HeaderSection';
import { FooterSection } from './components/footer/FooterSection';


import {connect} from 'react-redux'
import {noticiasListAll} from './actions'
import {bindActionCreators} from 'redux'



const {Content} = Layout;


class App extends Component {

  
  state = {
    current: 'a',
    noticias:null,
    collapsed: true,
    region:{}
    
  }

  componentWillMount()
  {
    
    this.props.noticiasListAll();
  
  }

  toggleCollapsed = () => {
    this.setState((prevState)=>{
      return {collapsed:!prevState.collapsed}
    })
      
    
  }

  toggleClose = () => {
  this.setState({collapsed:true})
    
  }


  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }



  render() {
 
    let{current, collapsed}=this.state
    return (
      <div>
        <HeaderSection onClick={this.toggleClose}   current={current} handleClick={this.handleClick} region={this.props.noticias.noticiasList} collapsed={collapsed} toggleCollapsed={this.toggleCollapsed} />
        <Layout  onClick={this.toggleClose}  >
       
       <NavMenu  collapsed={collapsed} onClick={this.toggleClose}  />
       <Layout className="layout-videos">
       
        <Content className="content" >
         <Routes />
        </Content>

      <FooterSection />
    
      </Layout>
    </Layout>
  
      </div>
      
    );
  }
}

function mapStateToProps(state){
  return{
      noticias:state.noticias
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({noticiasListAll}, dispatch)
 
}
export default connect(mapStateToProps,mapDispatchToProps)(App);




