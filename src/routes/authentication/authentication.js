

import { SignUp } from "../../component/signup";
import { Signin } from "../../component/signin/signin";
import "./authentication.style.scss"


export const Auth=()=>{
   
    return(
        <div className="authentication-container">
             
             
             <Signin></Signin>
             <SignUp></SignUp>
        </div>
    )
}