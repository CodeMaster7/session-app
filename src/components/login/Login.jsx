import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
    render(){
    return(
        <div className='login-component'>
            i am the login component. 
            <br/>
            <br/>
            <input type='text' placeholder='enter username'/>
            <br/>
            <input type='password' placeholder='enter password'/>
            <br/>
            <Link to='/dashboard'>login</Link>
            <span> | </span><Link to='/dashboard'>register</Link>
        </div>
    )}
}