import React from 'react'
import { NavLink } from 'react-router-dom'


const SignedOutLinks = () => {

    return (
        <ul className="right">
            <li><NavLink to='/signin' className="">Login</NavLink></li>
            <li><NavLink to='/signup' className="">Sign up</NavLink></li>
        </ul>
    )
}


export default SignedOutLinks