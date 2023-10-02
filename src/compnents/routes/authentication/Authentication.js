 import React from 'react'
 import SignupForm from '../../signup/SignupForm';
 import SignInForm from '../../signinform/SignInForm';
 import './authentication.scss'

const Authentication = () => {

  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignupForm />
    </div>
  )
}

export default Authentication;