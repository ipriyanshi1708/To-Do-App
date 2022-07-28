import { initializeApp } from "firebase/app"
import {getAuth, 
    signInWithPopup,
     GoogleAuthProvider, 
     createUserWithEmailAndPassword,
    signInWithEmailAndPassword
    } from "firebase/auth";
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB07_k5KaTL7gzEli5u2OiTyVluCEN8cq8",
    authDomain: "to-do-app-f6798.firebaseapp.com",
    projectId: "to-do-app-f6798",
    storageBucket: "to-do-app-f6798.appspot.com",
    messagingSenderId: "372162671583",
    appId: "1:372162671583:web:8d64767a58fd72fe75ca6a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider);

export const db= getFirestore();

export const createUserDocumentFromAuth = async(userAuth , additionalInformation={})=>{
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef)

    if(!userSnapshot.exists()){
        const {username, email}= userAuth;
        const createdAt= new Date();

        try{
            await setDoc(userDocRef,{
                username,
                email,
                createdAt,
                ...additionalInformation,
            });
        }catch(error){
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword= async(email, password)=>{
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth,email,password);
}
export const signInAuthUserWithEmailAndPassword= async(email, password)=>{
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth,email,password);
}