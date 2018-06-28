import React from 'react';
import Message from '../message/Message';
import Input from '../input/Input';
import './dashboard.css';
import { Link } from 'react-router-dom';

export default class Dashboard extends React.Component {
    render(){
    return (
        <div className='dashboard-component'>
        i am the dashboard
        <br/>
        <Link to='/'>Logout</Link>
            </div>
    )}
}