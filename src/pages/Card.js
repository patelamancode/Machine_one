import React from 'react';
import "./card.css";

const Card = ({image, title, author}) => {
  return (
    <div className='card'>
      <img src={image} alt={title} />
      <div className='card-des'>
        <p>{title}</p>
        <p>{author}</p>
      </div>
    </div>
  )
}

export default Card
