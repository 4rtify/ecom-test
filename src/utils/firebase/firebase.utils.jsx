
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  // signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

/*** Config required to connect to crwn-clothing Firebase */

const firebaseConfig = {
  apiKey: "AIzaSyCanCDHhOPmuI5KRE6dRfzR5Qu7XmtVx84",
  authDomain: "crwn-clothing-db-62460.firebaseapp.com",
  projectId: "crwn-clothing-db-62460",
  storageBucket: "crwn-clothing-db-62460.appspot.com",
  messagingSenderId: "620076454727",
  appId: "1:620076454727:web:c26f3900bbeb5bfac5f262"
};

const firebaseApp = initializeApp(firebaseConfig);

/***********
 * Providers used to log in 
 */

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
// export const signInWithGoogleRedirect = () =>  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth, additionalInformation={}) => {
  if (!userAuth) return;
  //create a pointer to the location of the user in firebase regardless of existence
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  
  
  // if user does not exist create user
  if(!userSnapshot.exists()) {
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the us', error.message);
    }
  }

  return userDocRef;

};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInWithAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}