import { useState } from "react";

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import {
  // auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithAuthUserWithEmailAndPassword,
  // signInWithGoogleRedirect
} from "../../utils/firebase/firebase.utils";

import './sing-in-form.style.scss'

const defaultFormFields = {
  email: "",
  password: "",
};

const logGoogleUser = async () => {
  const { user } = await signInWithGooglePopup();

  const userDocRef = await createUserDocumentFromAuth(user);
};

const SignInForm = () => {
  const [formFeilds, setFormFeilds] = useState(defaultFormFields);
  const { email, password } = formFeilds;

  const resetFormFields = () => {
    setFormFeilds(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFeilds({ ...formFeilds, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInWithAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      resetFormFields();
    } catch (error) {
      switch(error.code) {
        case 'auth/user-not-found':
        case 'auth/wrong-password':
          alert('Incorrect email or password');
          break
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Have and account?</h2>
      <span>Login with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button  type="button" buttonType="google" onClick={logGoogleUser}>
            Sign In Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
