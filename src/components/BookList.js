import React, {useContext} from 'react'
import { BookContext } from '../contexts/BookContext'
import BookDetail from './BookDetail'

const BookList =()=>{
    const {books} = useContext(BookContext)

return books.length?(
    <div className="nabar">
        <h1>Book list</h1>
        <h1>{books.length}</h1>
        {
            books.map(book=>{
                return <BookDetail book={book} key={book.id}/>
            })
        }
    </div>
): (
    <div> Empty{books.length} book</div>
)
}

export default BookList;