import React, { useContext } from 'react'
import{NavLink} from "react-router-dom";
import { DataContext } from '../context/dataContext'
import Card2 from './Card2';

const Homepage = () => {

    const {books} = useContext(DataContext);

  return (
    <>
        <section>
            <h1>Currently Reading</h1>
            <div style={{display:'flex', flexDirection:'row', margin:'5px'}}>
                {books.map((item) => item.category === "Currently Reading" && <Card2 {...item}/>)}
            </div>
        </section>
        <section>
            <h1>Want to Read</h1>
            <div style={{display:'flex', flexDirection:'row', margin:'5px'}}>
                {books.map((item) => item.category === "Want to Read" && <Card2 {...item}/> )}
            </div>
        </section>
        <section>
            <h1>Read</h1>
            <div style={{display:'flex', flexDirection:'row', margin:'5px'}}>
                {books.map((item) => item.category === "Read" && <Card2 {...item}/>)}
            </div>
        </section>
        <section>
            <NavLink to="/search">search items..</NavLink>
        </section>
    </>
  )
}

export default Homepage
