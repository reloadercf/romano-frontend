import React from 'react'
import './header.css'
import logo from './logo.png';
import {Link} from 'react-router-dom' 

export const HeaderSection = () => {
    return (
        <Link to='/' >
            <div className="header">
                <img src={logo} alt="" />
            </div>
        </Link>
    )
}