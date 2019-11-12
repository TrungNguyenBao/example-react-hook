import React, {useContext, useState} from 'react'
import { BookContext } from '../contexts/BookContext'

const FormBook =() =>{
    const {dispatch} = useContext(BookContext)
    const [name, setName] = useState()

    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch({type:'ADD_BOOK', book:{
            name: name
        }})
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} required onChange={(e) =>setName(e.target.value)}/>
            <input type="submit" value="ADD" />
        </form>
    )
}
export default FormBook;