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
    current: 'mail',
    noticias:null,
    region:{}
    
  }

  componentWillMount()
  {
    this.props.noticiasListAll();
  
  }

 

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }



  render() {
 
    let{current}=this.state
    return (
       <Layout>
         <NavMenu/>
         <Layout className="layout-videos">
          <HeaderSection current={current} handleClick={this.handleClick} region={this.props.noticias.noticiasList} />
          <Content className="content" >
           <Routes />
          </Content>

        <FooterSection/>
      
        </Layout>
      </Layout>
    
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




