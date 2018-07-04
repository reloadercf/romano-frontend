import React from 'react'
import {Card, Icon, Avatar} from 'antd';
const {Meta} = Card;


export const CardComponent = ({title, subtitle, imagen}) => {
  return (

    <div className="recipe-card">

      <aside>
        <img src={imagen} alt="Chai Oatmeal"/>
        <a href="#" className="button"><span className="icon icon-play"></span></a>
      </aside>

      <article>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>

        <ul>
          <li>
            <span className="icon icon-users"></span>
          
    
          </li>
          <li>
            <span className="icon icon-clock"></span>
            
          </li>
          <li>
            <span className="icon icon-level"></span>
            <span>Beginner level</span>
          </li>
          <li>
            <span className="icon icon-calories"></span>
            <span>248</span>
          </li>
        </ul>

        <p>For an extra thick and creamy bowl, add oat bran. It'll make for a hearty
          helping and also add more fiber to your meal. If you love the taste of chai,
          you'll enjoy this spiced version with coriander, cinnamon, and turmeric.</p>

        <p className="ingredients">
          <span>Ingredients:&nbsp;</span>Milk, salt, coriander, cardamom, cinnamon,
          turmeric, honey, vanilla extract, regular oats, oat bran.
        </p>

      </article>

    </div>
  )
}