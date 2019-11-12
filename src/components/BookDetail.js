import React, {useContext} from 'react'
import { BookContext } from '../contexts/BookContext'

const BookDetail =({book})=>{
    
    const {dispatch} = useContext(BookContext)
    return(
        <li onClick={() => dispatch({type:'REMOVE_BOOK', id:book.id})}>{book.name}</li>
    )
}

export default BookDetail