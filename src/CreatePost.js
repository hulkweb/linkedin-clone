import { Avatar} from '@material-ui/core';
import { ArtTrack, Assignment, Create,VideoLibrary, EmojiEmotions, LiveTvOutlined, Photo } from '@material-ui/icons';
import React ,{useState} from 'react'
import './CreatePost.css';
import db from './firebase';
import firebase from 'firebase';
import { useStateValue } from './StateProvider';

function CreatePost() {
    const [{user},dispatch]=useStateValue();
     const [post, setpost] = useState("");
     const [postUrl, setpostUrl] = useState("");
    const createPost=(e)=>{
       e.preventDefault();
       db.collection("posts").add({
          username:user.displayName,
          userUrl:user.photoURL,
          postUrl:postUrl,
          postText:post,
         
  
       });
       setpost("");
       setpostUrl("");
    }
    return (
        <div  className="CreatePost">
            <form>
                <Create />
                <input type="text" className="post" placeholder="Start Post" value={post} onChange={(e)=>{setpost(e.target.value)}} />
                <input type="text" className="photo" placeholder="Photo" value={postUrl} onChange={(e)=>{setpostUrl(e.target.value)}} />
                <button type="submit" style={{display:"none"}} onClick={createPost}>none</button>
             </form>
             <div className="CreatePost__option">
             <div className="CreatePost__options">
                   <Photo style={{color:"blue"}} />
                   <h4>Photo </h4>
                 </div>
             <div className="CreatePost__options">
                   <VideoLibrary style={{color:"orange"}} />
                   <h4>video</h4>
            </div>
                
                 <div className="CreatePost__options">
                   <Assignment  style={{color:"yellow"}}/>
                   <h4>Goal</h4>
                 </div>
                 <div className="CreatePost__options">
                   <ArtTrack  style={{color:"orange"}}/>
                   <h4>Write Article</h4>
                 </div>
             </div>
        </div>
    )
}

export default CreatePost
