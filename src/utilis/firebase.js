import { initializeApp } from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC_WmA8ogmMp1OHM39-WkZi7Q4rGZ5_R6Q",
    authDomain: "faze-clothing.firebaseapp.com",
    projectId: "faze-clothing",
    storageBucket: "faze-clothing.appspot.com",
    messagingSenderId: "157060124068",
    appId: "1:157060124068:web:1262eefe2df243e2928531"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account'
  });
  

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db= getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) =>{
    const userDocRef= doc(db, 'users', userAuth.uid);
    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

        try {
          await setDoc(userDocRef, {
            displayName,
            email,
            createdAt
          })
        }catch(error){
          console.log('error creating user', error.message)
        }
    }
    return userDocRef;
  }

