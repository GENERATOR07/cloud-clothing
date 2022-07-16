

import { useState } from "react"
import { createAuthWithUserAndPassword,createUserDocumentFromAuth } from "../utility/firebase/firebase"
import { Finput } from "./forminput/finput"
import "./signup.style.scss"
import { Button } from "./button/button"
const formdata={
name:"",
email:"",
pass:"",
cpass:""
}

export const SignUp=()=>{
    const [formfields,setformfields]=useState(formdata)
    const {name,email,pass,cpass}=formfields
    console.log(formfields)

    const handelSubmit=async (e)=>{
      e.preventDefault();
      if(pass!==cpass){
        alert('password do not match')
        return
      }
      try{
        console.log(name)
        const {user}=await createAuthWithUserAndPassword(email,pass)
       console.log(user)
        await createUserDocumentFromAuth(user,name)
      }catch(e){
        console.log(e)
      }
    }

    const handler=(e)=>{
      const  {name,value}=e.target
      setformfields({...formfields,[name]:value})
      console.log(formfields)

    }
return(
    <div className="sign-up-container"> 
    <h2>Don't have an account?</h2>
        <span>signup with Email and Password</span>
        <form onSubmit={handelSubmit} >
            
            <Finput label="Name" type="text" required onChange={handler}  name="name" value={name}></Finput>
            
            <Finput label="Email" type="email" required onChange={handler} name="email" value={email}></Finput>
            
            <Finput label="Password" type="password" required onChange={handler} name="pass" value={pass}></Finput>
            
            <Finput label="Confirm-Password" type="password" required onChange={handler} name="cpass" value={cpass}></Finput>
            <Button buttonType="" type="submit">SignUp</Button>
        </form>
    </div>
)
}