import { useState } from 'react';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
/*** Setting A State like this is good practice from when all the states are needed for the given logic, like this sign-up form */

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const [formFeilds, setFormFeilds] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFeilds;

  const resetFormFields = () => {
    setFormFeilds(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if(password !== confirmPassword) {
      alert("passwords do not match")
      return;
    }
    
    try {
      const {user} = await createAuthUserWithEmailAndPassword(email, password);
      
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();

    } catch(error){
      if(error.code === 'auth/email-already-in-use'){
        alert('email is already in use')
      }
      console.log("user creation encounted an error", error)
    }
  }

  // the above state set up allowed for this genralised function to update the state
  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFeilds({...formFeilds, [name]: value});
  }

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        {/***name and value are passed to the genral function so they can be updated */}
        <input type="text" required onChange={handleChange} name="displayName" value={displayName}/>

        <label>Email</label>
        <input type="email" required onChange={handleChange} name="email" value={email}/>

        <label>Password</label>
        <input type="password" required onChange={handleChange} name="password" value={password}/>

        <label>Confirm Password</label>
        <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
};

export default SignUpForm;