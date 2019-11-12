import React, {useState, useEffect} from 'react';
import uuid from 'uuid/v1'
import FormSong from './FormSong';

const SongList = () =>{
    const [songs, setSongs] = useState([
        {id: 1, name: 'Hello'},
        {id: 2, name: 'Reality'},
        {id: 3, name: 'Send it'},
    ])
    const addSong = (name) =>{
        setSongs([...songs,{id:uuid(), name: name}])
    }

    useEffect(()=>{
        console.log("a song", songs);
        
    },[songs])

    return (
        <div className="song-list">
            <ul>
                {songs.map(song=>{
                    return (
                        <li key={song.id}>{song.name}</li>
                    )
                })}
            </ul>
           <FormSong addSong={addSong}/>
        </div>
    );
}
export default SongList;