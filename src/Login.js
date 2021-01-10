import { Avatar } from '@material-ui/core'
import React from 'react'
import { auth, provider } from './firebase';
import google from './google.png';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';
import './Login.css';
function Login() {
    const [state,dispatch]=useStateValue();
    const handleSubmit=(e)=>{
        e.preventDefault();
        auth.signInWithPopup(provider).then((result)=>{
             dispatch({type:actionTypes.SET_USER,user:result.user})
        }).catch((err)=>{
            console.log(err);
        })
    }
    return (
        <div className="Login">
            <div className="login_header">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png" />
               <h2>Make the most of your professional life</h2>
            </div>
            <div className="header_center">
                <div className="form_group">
                  <label>Email address</label>
                  <input type="text"/>
                </div>
                <div className="form_group">
                  <label>Password (  Minimum 6 characters)</label>
                  <input type="text"/>
                </div>
                <div className="form_group">
                  <button>Agree & Join</button>
                </div>
            
             <div className="form_group">
                  <button className="google" onClick={handleSubmit}> <Avatar src={google}  /> <p>Join with google </p></button>
             </div>
            </div>
        </div>
    )
}

export default Login
