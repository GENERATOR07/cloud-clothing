// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import{getAuth,signInWithPopup,GoogleAuthProvider} from "firebase/auth"
import{getFirestore,doc,getDoc,setDoc} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGwAX8PlneNsifcav4mxNwsQEPFeqiJ1M",
  authDomain: "cloud-clothing-5dee7.firebaseapp.com",
  projectId: "cloud-clothing-5dee7",
  storageBucket: "cloud-clothing-5dee7.appspot.com",
  messagingSenderId: "756763810322",
  appId: "1:756763810322:web:6362a2109746bcfa9796cb"
};



export const firebaseApp = initializeApp(firebaseConfig);

const provider=new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
})

export const auth=new getAuth()
export const signInWithGooglePopup=()=>signInWithPopup(auth,provider)

const db=getFirestore()
export const createUserDocumentFromAuth=async (user)=>{
    const UserDocRef=doc(db,"users",user.uid)
    const snapShot= await getDoc(UserDocRef)
    console.log(snapShot)
    if(!snapShot.exists()){
        const {displayName,email}=user
        const createdAt= new Date()
        try{
            await setDoc(UserDocRef,{
                displayName,email,createdAt
            })
        }catch(err){
            console.log("err creating user",err)
        }
    }
    return UserDocRef;
}