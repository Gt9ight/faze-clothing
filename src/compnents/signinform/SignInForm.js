import {useState} from 'react'
import Forminput from '../form-input/Forminput';
import './SignInForm.scss'
import Button from '../button/Button';

import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utilis/firebase';
const defaultFormFields = {
  email:'',
  password:'',
}
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password} = formFields;

  console.log(formFields)


  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }


  const signInWithGoogle= async () => {
    const {user} = await signInWithGooglePopup();
     await createUserDocumentFromAuth(user)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try{
      const response = await signInAuthUserWithEmailAndPassword(email, password)
      console.log(response)
      resetFormFields()


    }catch(error){
      if(error.code === 'auth/invalid-login-credentials' ) {
        alert('incorrect email or password')
      }
     }
  }

  const handleChange = (event) =>{
    const {name, value} = event.target;

    setFormFields({...formFields, [name]: value });
  }
  return (
    <div className='sign-up-container'>
      <h2>Already Have an account?</h2>
        <span>Sign In with your email or passaword</span>

        <form onSubmit={handleSubmit}>     
            <Forminput label='Email' type='email' required onChange={handleChange} name='email' value={email}/>     
            <Forminput label='Password'type='password' required onChange={handleChange} name='password' value={password}/>
           
           <div className='buttons-container'>
            <Button type='submit'>Sign In</Button>
            <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
          </div>

        </form>
    </div>
  )
}

export default SignInForm