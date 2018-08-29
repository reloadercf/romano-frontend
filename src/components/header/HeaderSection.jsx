import React from 'react'
import {Menu } from 'antd';
import logo from './logo.png';
import {Link} from 'react-router-dom' 

export const HeaderSection = () => {
    return (
       
             <Link to='/' className="div-logo-header">
                 <img src={logo} alt=""/> 
             </Link>
 
    )
}