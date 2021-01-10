import React ,{Component, useState,useEffect}from 'react'
import SinglePost from './SinglePost'
import './Post.css';
import db from './firebase';
import firebase from 'firebase';
import ln from  './linkedin.png';
import Zoom from 'react-reveal/Zoom';
function Post() {
    const [Posts, setPosts] = useState([]);

    useEffect(() => {
      db.collection("posts").onSnapshot((snapshot)=>setPosts(snapshot.docs.map((doc)=>doc.data())));
   
    }, [])
  
    return (
        <div className="Post">
            {Posts?.map((post)=>(
            <Zoom>
            <SinglePost 
               username ={post.username}
               photoUrl={post.userUrl}
              postUrl={post.postUrl}
              postText={post.postText}
              
            />

            </Zoom>))}  
            
            
        </div>
    )
}

export default Post;