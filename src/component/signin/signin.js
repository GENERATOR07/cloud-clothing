

import { useState } from "react"
import { LoginAuthWithUserAndPassword,signInWithGooglePopup,createUserDocumentFromAuth } from "../../utility/firebase/firebase" 
import {Finput} from "../forminput/finput"
import { Button } from "../button/button"
const formdata={

email:"",
pass:""

}

export const Signin=()=>{
    const [formfields,setformfields]=useState(formdata)
    const {email,pass}=formfields
    console.log(formfields)
    const logGoogleUser=async ()=>{
        const {user}=await signInWithGooglePopup();
        //console.log(user)
        const userDocRef=await createUserDocumentFromAuth(user);
        console.log(userDocRef)
    }
    
    const handelSubmit=async (e)=>{
     try{
        e.preventDefault();
        const res=await LoginAuthWithUserAndPassword(email,pass);
        console.log(res)
       
     }catch(err){
        if(err.code==="auth/wrong-password"){
            alert("Email or password is wrong")
        }
     }
      
    }

    const handler=(e)=>{
      const  {name,value}=e.target
      setformfields({...formfields,[name]:value})
      console.log(formfields)

    }
return(
    <div className="sign-up-container"> 
   
        <span>signin with Email and Password</span>
        <form onSubmit={handelSubmit} >
            <Finput label="Email" type="email" required onChange={handler} name="email" value={email}></Finput>
            
            <Finput label="Password" type="password" required onChange={handler} name="pass" value={pass}></Finput>
            <div className="buttons-container">
            <Button buttonType="" type="submit">Signin</Button>
            <Button  buttonType="google" type="button" onClick={logGoogleUser}>Google signin</Button>
            </div>
            
           
        </form>
    </div>
)
}