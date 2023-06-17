import React, { useContext } from 'react'
import "./card.css";
import { DataContext } from '../context/dataContext';

const Card2 = ({image, author, title}) => {

    const {categoryHandler} = useContext(DataContext);

  return (
    <div className='card'>
      <div className='card-img'>
        <img src={image} alt={title} />
        <select onChange={(value)=>categoryHandler(value)}>
            <option>select</option>
            <option name="Currently Reading">Currently Reading</option>
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
