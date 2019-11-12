import React, {createContext, useEffect, useReducer} from 'react'
import uuid from 'uuid/v1'
import bookReducer from '../reducers/bookReducer'
export const BookContext = createContext()

const BookListProvider =(props)=> {
    const [books, dispatch] = useReducer(bookReducer, [
        {id: 1, name: 'Hello'},
        {id: 2, name: 'Reality'},
        {id: 3, name: 'Send it'},
]
// , ()=>{
//     const localData = localStorage.getItem('books')
//     return localData ? JSON.parse(localData) :[]
// }
)

    // useEffect(()=>{
    //     localStorage.setItem('books',JSON.stringify(books))

    // },[books])

    return (
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookListProvider;
