import {useState} from 'react'

import Forminput from '../form-input/FormInput';
import './Signup.css'
import Button from '../button/Button';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utilis/firebase';
const defaultFormFields = {
  displayName:'',
  email:'',
  password:'',
  confirmPassword:''
}
const SignupForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {displayName, email, password, confirmPassword} = formFields;


  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(password !== confirmPassword){
      alert('passwords do not match')
      return;
    }
    try{
      const {user} = await createAuthUserWithEmailAndPassword(email, password);
      
     
      await createUserDocumentFromAuth(user, {displayName});
      resetFormFields()


    }catch(error){
      if(error.code === 'auth/email-already-in-use'){
      alert('email already in use ');
      }else{
      console.log('user creation encountered error', error);
      }
    }
  }

  const handleChange = (event) =>{
    const {name, value} = event.target;

    setFormFields({...formFields, [name]: value });
  }
  return (
    <div className='sign-up-container'>
      <h2>Dont Have an account?</h2>
        <span>Sign up with your email or password</span>

        <form onSubmit={handleSubmit}>
            
            <Forminput label='Display' Nametype='text' required onChange={handleChange} name='displayName' value={displayName}/>

            
            <Forminput label='Email' type='email' required onChange={handleChange} name='email' value={email}/>

            
            <Forminput label='Password'type='password' required onChange={handleChange} name='password' value={password}/>

            
            <Forminput label='Confirm Password' type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>

            <Button type='submit'>Sign UP</Button>
        </form>
    </div>
  )
}

export default SignupForm