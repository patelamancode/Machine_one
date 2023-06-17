import React from 'react'
import "./card.css";

const Card2 = ({image, author, title}) => {
  return (
    <div className='card'>
      <div className='card-img'>
        <img src={image} alt={title} />
        <select>
        <option>select</option>
            <option value="Currently Reading">Currently Reading</option>
            <option name="Want to Read">Want to Read</option>
            <option name="Read">Read</option>
            <option>none</option>
        </select>
      </div>
      <div className='card-des'>
        <p>{title}</p>
        <p>{author}</p>
      </div>
    </div>
  )
}

export default Card2
