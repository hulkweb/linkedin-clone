import { Avatar } from '@material-ui/core'
import { Group, Home, Notifications, Search, Work ,Sms, Dialpad, TextRotateUp, Message} from '@material-ui/icons'
import React from 'react'
import li from './linkedin.png';
import './Header.css'
import { useStateValue } from './StateProvider';
function Header() {
    const [{user},dispatch]=useStateValue();
    return (
        <div className="Header">
            <div className="header_inside">

         
            <div className="left_header">
             <img src={li} />
              <div className="search_option">
                 <Search/>
                 <input placeholder="Search" />
              </div>
            </div>
             <div className="header_Center">
                  <div className="header_option">
                      <Home/>
                     <span>Home</span>
                  </div>
                  <div className="header_option">
                      <Group/>
                     <span>My Network</span>
                  </div>

                  <div className="header_option">
                      <Work/>
                     <span>Jobs</span>
                  </div>

                  <div className="header_option">
                      <Message/>
                     <span>Messaging</span>
                  </div>

                  <div className="header_option">
                      <Notifications/>
                     <span>Notifications</span>
                  </div>

                  <div className="header_option">
                      <Avatar src={user?.photoURL}/>
                     <span>Me</span>
                  </div>
              </div>
              <div className="header_right">
                <Dialpad/>
                <span>Work</span>
              </div>
             </div>
        </div>
    )
}

export default Header
