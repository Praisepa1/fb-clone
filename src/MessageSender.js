import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import "./MessageSender.css";
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useStateValue } from './StateProvider';
import  db from './firebase';
import { serverTimestamp } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 

 

function MessageSender() {
  const [{user}, ] =useStateValue();
const [input, setInput] = useState("");
const [imageUrl, setImageUrl] = useState("");


    const handleSubmit =async (e) => {
        e.preventDefault();

        await addDoc(collection(db, 'posts'), {
          message: input,
          timestamp: serverTimestamp(),
          profile: user.photoURL,
          username: user.displayName,
          image: imageUrl
      });
        
        setInput("")
        setImageUrl("")
    };

    
  return (
    <div className='messageSender'>
      <div className='messageSender__top'>
        <Avatar src={user.photoURL}/>
        <form>
            <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
             className='messageSender__input' 
             placeholder={`What's is on your mind, ${user.displayName}?`}
              />
            <input 
            value={imageUrl}
            onChange = {(e) => setImageUrl(e.target.value)}
            placeholder="image URL [optional]" 
            />
            <button onClick={handleSubmit} type="submit">
                    Hidden submit
            </button>
        </form>
      </div>
        <div className='messageSender__buttom'>
            <div className='MessageSender__option' >
                <VideocamIcon style={{color:"red"}} />
                <h3>Live video</h3>
            </div>
            <div className='MessageSender__option' >
                <PhotoLibraryIcon style={{color:"green"}} />
                <h3>Photo/Video</h3>
            </div>
            <div className='MessageSender__option' >
                <InsertEmoticonIcon style={{color:"orange"}} />
                <h3>feelings/activity</h3>
            </div>
        </div>

    </div>
  )
}

export default MessageSender
