import React, {useEffect, useState} from 'react';
import "./Feed.css";
import StoryReels from './StoryReels';
import MessageSender from './MessageSender';
import Post from './Post';
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"; 
import db from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));

    onSnapshot(q, (snapshot) => {
      const newPosts = snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }));
      
      setPosts(newPosts);
    });
  }, [setPosts]);

 
  
  
  return (
    <div className='feed'>
        <StoryReels />
        <MessageSender />
      
        {posts.map((post) => (
    <Post 
        key={post.id}
        profilePic={post.data.profilePic}
        message={post.data.message}
        timestamp={post.data.timestamp}
        username={post.data.username}
        image={post.data.image}
    />
))}

        
    </div>
  )
}

export default Feed;
