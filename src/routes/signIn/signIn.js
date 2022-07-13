
import {signInWithGooglePopup,createUserDocumentFromAuth} from "../../utility/firebase/firebase"




export const SignIn=()=>{
    const logGoogleUser=async ()=>{
        const {user}=await signInWithGooglePopup();
        //console.log(user)
        const userDocRef=await createUserDocumentFromAuth(user);
        console.log(userDocRef)
    }
    return(
        <div>
             <h1>sign IN</h1>
             <button onClick={logGoogleUser}>Google signin</button>
        </div>
    )
}