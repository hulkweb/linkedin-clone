import React from 'react'
import './Body.css';
import Center from './Center';
import Left from './Left';
import Right from './Right';
function Body() {
    return (
        <div className="Body">
            <div className="body_inner">
               <Left/>
               <Center/>
               <Right/>
            </div>
        </div>
    )
}

export default Body;
