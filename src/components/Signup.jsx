import React from 'react'
import '../scss/Signup.scss'

const Signup = () => {
    return (
        <>
            <h2 className='signup-title'>Create an account</h2>
            <form className='login-form'>
                <input type="text" name='signup_username' placeholder='Username' className='inputs signup-credentials' />
                <input type="email" name='signup_email' placeholder='Email' className='inputs signup-credentials' />
                <input type="password" name="signup_password" placeholder='Password' className='inputs signup-credentials' />
                <button type="submit" placeholder='Log in' className='primary-buttons signup-btn'>Sign up</button>


            </form>
        </>
    )
}

export default Signup