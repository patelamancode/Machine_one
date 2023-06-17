import { createContext, useState } from "react";
import { bookData } from "../db/data";

export const DataContext = createContext();
export const DataContextProvider = ({children}) =>{

    const [books, setBooks] = useState(bookData);
    const [bookCategory, setBookCategory] = useState("");

    const categoryHandler = (event) =>{
        setBookCategory(event.target.value)
    }
    console.log(bookCategory);

    return(
        <DataContext.Provider value={{books, categoryHandler}}>
            {children}
        </DataContext.Provider>
    )
}