

import { useState } from "react"
import { createAuthWithUserAndPassword,createUserDocumentFromAuth } from "../utility/firebase/firebase"
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

    }
return(
    <div > onChange={handler}
        <form onSubmit={handelSubmit} >
            <lable>name</lable>
            <input type="text" required onChange={handler}  name="name" value={name}></input>
            <lable>Email</lable>
            <input type="email" required onChange={handler} name="email" value={email}></input>
            <lable>password</lable>
            <input type="password" required onChange={handler} name="pass" value={pass}></input>
            <lable>confirm-password</lable>
            <input type="password" required onChange={handler} name="cpass" value={cpass}></input>
            <button type="submit">SignUp</button>
        </form>
    </div>
)
}