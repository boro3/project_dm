import React from 'react'
import './assets/css/style.css'

export const SingleUser = (props) => {
    return (
        <div id='single-user-container'>         
            <div className='popup-container flex-direction'>
            <button className='close-single-user-container' onClick={props.closeButtonHandler} >&times;</button>     
                <div><img src='https://www.w3schools.com/howto/img_avatar.png' alt={'123'} /></div>   
                <div id='pdiv'>          
                <p>Name: {props.user.name}</p>
                <p>Works at: {props.user.company.name}</p>
                <p>Email: {props.user.email}</p>
                <p>Phone Number: {props.user.phone}</p>
                <p>Website: {props.user.website}</p>
                <p>Address: {props.user.address.city} {props.user.address.street} {props.user.address.suite}</p>
                </div> 
            </div>
        </div>
    )
}