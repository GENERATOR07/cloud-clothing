// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import{getAuth,signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword} from "firebase/auth"
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
export const createUserDocumentFromAuth=async (user,info)=>{
    console.log("andar wala",info)
    if(!user)return;
    const UserDocRef=doc(db,"users",user.uid)
    const snapShot= await getDoc(UserDocRef)
    console.log(snapShot)
    if(!snapShot.exists()){
        let {displayName,email}=user
        if(displayName==null)displayName=info
        console.log("display wala",displayName)
        const createdAt= new Date()
        try{
            await setDoc(UserDocRef,{
                displayName,email,createdAt
            })
        }catch(err){
            if(err==="auth/email-already-in-use")alert("email already in use")
            else console.log(err)
        }
    }
    return UserDocRef;
}

export const createAuthWithUserAndPassword=async (email,pass)=>{
    if(!email||!pass)return
    return await createUserWithEmailAndPassword(auth,email,pass)

}