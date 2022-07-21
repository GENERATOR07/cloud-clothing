import { useContext } from "react"
import { Outlet } from "react-router-dom"
import { Fragment } from "react/cjs/react.development"
import {Link} from "react-router-dom"
import { ReactComponent as Clogo} from "../assets/crown.svg"
import { userContext } from "../../contexts/user.context"
import { signOutUser } from "../../utility/firebase/firebase"
import "./navigation.styles.scss"
export const Nav=()=>{
  const {user,setUser}=useContext(userContext)
  console.log(user,"from navigation bar")
  const signOutHandler=async()=>{
    await signOutUser();
    setUser(null)

  }
  return(
    <Fragment>
    <div className="navigation">
    <Link className="logo-container" to="/">
        <div><Clogo className="logo"/></div>
    </Link> 
      
      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">shop</Link>
       {user?<span className="nav-link" onClick={signOutHandler}>signout</span>:
        <Link className="nav-link" to="/auth">signIn</Link>
       }
        
      </div>
      
    </div>
    <Outlet></Outlet>
    </Fragment>
  )
}