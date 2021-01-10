import React from 'react'
import './Center.css';
import CreatePost from './CreatePost';
import Post from './Post';
function Center() {
    return (
        <div className="Center">
             <CreatePost/>
             <Post/>
        </div>
    )
}

export default Center
