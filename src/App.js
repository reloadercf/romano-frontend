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
import { BackDrop } from './components/header/BackDrop';




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
    let sideDrawer;
    let bacdrop;

    if(!this.state.collapsed)
    {
      sideDrawer=  <NavMenu  collapsed={collapsed}  />
      bacdrop = <BackDrop click={this.toggleClose}/>
    }

    return (
      <div>

        <HeaderSection  current={current} handleClick={this.handleClick} region={this.props.noticias.noticiasList} collapsed={collapsed} toggleCollapsed={this.toggleCollapsed} />
        {sideDrawer}
        {bacdrop}
        <Layout className="layout-videos">
          <Content className="content" >
            <Routes />
          </Content>
        </Layout>
        <FooterSection />
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




