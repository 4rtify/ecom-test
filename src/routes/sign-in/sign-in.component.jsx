/********************
 * Required Imports for the use of sign in with redirect
 * ***************
 */

// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";


import { 
  // auth, 
  signInWithGooglePopup, 
  createUserDocumentFromAuth,
  // signInWithGoogleRedirect 
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-from/sign-up-form.component";

const SignIn = () => {

  /***************************************************
   *  Redirect Sign in, Code bellow is to get the state of the sign in from the previous window to get the userDocRef
   * ******************************************/
  // useEffect(() => {
  //   async function getRedirectUserData() {
  //     const response = await getRedirectResult(auth);

  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user)
  //     }
  //   }
  //   getRedirectUserData();
  // }, []);
  

  /******
   * Bellow Code creates a pop up using google Firebase Popup Authentication then sends the tokent to our created createUserDocutmentFromAuth
   */
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();

    const userDocRef = await createUserDocumentFromAuth(user)
  }


  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>
        Sign in with Google Popup
      </button>
      <SignUpForm />
    </div>
  )
}

export default SignIn;