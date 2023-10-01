 import React from 'react'
 import { signInWithGooglePopup } from '../../../utilis/firebase';
 import { createUserDocumentFromAuth } from '../../../utilis/firebase';
 import SignupForm from '../../signup/SignupForm';

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
   const userDocRef =  await createUserDocumentFromAuth(user)
  }
  return (
    <div>
      <button onClick={logGoogleUser}>Sign-in wiht google</button>
      <SignupForm />
    </div>
  )
}

export default SignIn;