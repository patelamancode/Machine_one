import React, { useContext, useState } from 'react'
import { DataContext } from '../context/dataContext';
import Card from './Card';
import './card1.css';

const Searchpage = () => {
     const {books} = useContext(DataContext);
     const [item, setItem]  = useState([]);

     const searchHandler = (event) =>{
        const input = event.target.value;
        setItem(books.filter((item => item.title.includes(input))))
     }

  return (
    <div>
      <input 
        placeholder='search here...'
        type='text'
        onChange={(e) => searchHandler(e)}
        />
       {(item.length > 0) ? 
        <div style={{display:"flex", flexDirection:'row', margin:"5px"}}>
            {item.map(item => <Card {...item}/>)}
        </div>
        :
        <p>no item....</p>}
    </div>
  )
}

export default Searchpage
