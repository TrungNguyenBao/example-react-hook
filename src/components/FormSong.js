import React, { useState } from 'react'
import SongList from './SongList'
import uuid from 'uuid/v1'

const FormSong = ({addSong})=> {
    const [songName, setSongName] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        addSong(songName)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>A Song</label>
            <input required value={songName} type="text" onChange={(e) =>setSongName(e.target.value)}/>
            <input type="submit" value="Add"/>
        </form>
    )
}
export default FormSong;