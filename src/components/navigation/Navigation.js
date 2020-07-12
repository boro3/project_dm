import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './assets/css/style.css'
import logo from './assets/logo/logo.png'

const Navigation = () => {


    const [open, setOpen] = useState(false);
    return (
        <div id='header'>
            <div id='logo'>
                <img src={logo} alt={'123'}></img>
            </div>
            <div id='menu' onClick={()=>setOpen(!open)} >
                <div />
                <div />
                <div />
            </div>

            <div id='navbar' className={open ? 'display' : ''}>
                <ul>
                    <li><Link onClick={()=>setOpen(false)} to={`/`} >Home</Link></li>
                    <li><Link onClick={()=>setOpen(false)} to={`/posts`}>Posts</Link></li>
                    <li><Link onClick={()=>setOpen(false)} to={`/users`}>Users</Link></li>
                    <li><Link onClick={()=>setOpen(false)} to={`/todo`}>TODO</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default Navigation;