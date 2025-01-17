import React, { Component } from 'react';
import './App.css';
import {Layout} from 'antd';
import NavMenu from './components/navbar/NavMenu';
import Routes from './Routes';
import { HeaderSection } from './components/header/HeaderSection';
import { FooterSection } from './components/footer/FooterSection';
import { BackDrop } from './components/header/BackDrop';
//import { SharePage } from './components/header/SharePage';



const {Content} = Layout;
const URL='https://www.mxplanb.xyz';
class App extends Component {


  state = {
    current: 'a',
    noticias:[],
    categories:[],
    collapsed: true,
    region:{}
    
    
  }
  componentWillMount(){
    this.getNoticias()
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

  getNoticias=()=>{
  //const userToken = JSON.parse(localStorage.getItem('userToken'));
  let url =`${URL}/article/articulofiltro/`;
  var request = new Request(url, {
      method: 'GET',
      headers:new Headers({
          'Content-Type': 'application/json'
      }) 
  });
  fetch(request)
      .then(r => r.json())
      .then(data => {    
          this.setState({noticias: data})

      })
      .catch(e => {

      })
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
   
    let{current, collapsed, noticias,categories}=this.state
    let sideDrawer;
    let bacdrop;

    if(!this.state.collapsed)
    {
      sideDrawer=  <NavMenu  collapsed={collapsed}  toggleClose={this.toggleClose} categories={categories} />
      bacdrop = <BackDrop click={this.toggleClose}/>
    }

    return (
      <div>

        <HeaderSection  current={current} handleClick={this.handleClick}  collapsed={collapsed} toggleCollapsed={this.toggleCollapsed} />
        {sideDrawer}
        {bacdrop}
        <Layout className="layout-videos">
          <Content className="content" >
            <Routes noticias={noticias} />
          </Content>
        </Layout>
        {/* <SharePage/> */}
        <FooterSection />
      </div>
      
    );
  }
}


export default App;




