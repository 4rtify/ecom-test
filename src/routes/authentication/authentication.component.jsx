/********************
 * Required Imports for the use of sign in with redirect
 * ***************
 */

// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import SignUpForm from "../../components/sign-up-from/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import './authentication.styles.scss';

const Authentication = () => {

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

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication;