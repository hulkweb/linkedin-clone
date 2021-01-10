import { Avatar } from '@material-ui/core'
import { Bookmark } from '@material-ui/icons';
import React from 'react'
import './Left.css';
import { useStateValue } from './StateProvider';
function Left() {
    const [{user},dispatch]=useStateValue();
    return (
        <div className="Left">
            <div className="left_inner">
            <div className="left_top_one">
            
            </div>
           
            <div className="left_top_two">
               <Avatar src={user?.photoURL}/>
               <h3>{user?.displayName}</h3>
               <p>CEO at hulkweb</p>
            </div>
             <div className="user_info">
                 <div className="info_item">
                   <span>Who viewd your profile</span> <span>256</span>
                   </div>
                   <div className="info_item">
                   <span>Connections </span><span>656</span>
                   </div>
                 
             
            </div>
           
          
          <div className="left_bottom">
              <Bookmark/>
              <span>Items</span>
          </div>
            </div>
             
        </div>
    )
}

export default Left
