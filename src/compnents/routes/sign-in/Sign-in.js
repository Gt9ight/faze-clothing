 import React from 'react'
 import { signInWithGooglePopup } from '../../../utilis/firebase';
 import { createUserDocumentFromAuth } from '../../../utilis/firebase';

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
   const userDocRef =  await createUserDocumentFromAuth(user)
  }
  return (
    <div>
      <button onClick={logGoogleUser}>Sign-in wiht google</button>
    </div>
  )
}

export default SignIn;