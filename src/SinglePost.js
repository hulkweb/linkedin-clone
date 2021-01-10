import { Avatar } from '@material-ui/core'
import { ChatBubbleOutline, NearMe, Redo, ThumbUpSharp } from '@material-ui/icons'
import React from 'react'

function SinglePost({username,photoUrl,postUrl,postText,postTime}) {
    return (
        <div className="SinglePost">
            <div className="postHeader">
              <Avatar src={photoUrl} />
              <p>
                  <span className="userName">{username}</span>
                  <span className="time">{postTime}</span> 
              </p>
              
            </div>
            <h3>
                 {postText}
             </h3>
             {postUrl&& <div className="img_container">
             <img height='315' src={postUrl} />
             </div> }
            
            
            <div className="postBottom">
                <div className="postOption">
                     <ThumbUpSharp/>
                     <h4>Like</h4>
                </div>
                <div className="postOption">
                     <ChatBubbleOutline/>
                     <h4>Comment</h4>
                </div>
                <div className="postOption">
                     <Redo/>
                     <h4>Share</h4>
                </div>
                <div className="postOption">
                     <NearMe/>
                     <h4>send</h4>
                </div>
            </div>
        </div>
    )
}

export default SinglePost
