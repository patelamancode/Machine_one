import { createContext, useState } from "react";
import { bookData } from "../db/data";

export const DataContext = createContext();
export const DataContextProvider = ({children}) =>{

    const [books, setBooks] = useState(bookData);

    return(
        <DataContext.Provider value={{books}}>
            {children}
        </DataContext.Provider>
    )
}