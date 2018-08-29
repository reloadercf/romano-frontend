import React from 'react'
import {Icon} from 'antd'
import {Link} from 'react-router-dom'
import ResponsiveMenu from 'react-responsive-navbar';
export const NavBarDos =()=>{
    return(
        <ResponsiveMenu
        menuOpenButton={<Icon type="bars" />}
        menuCloseButton={<Icon type="close-circle" />}
        changeMenuOn="500px"
        largeMenuClassName="large-menu-classname"
        smallMenuClassName="small-menu-classname"
        menu={
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        }
      />
    )
}