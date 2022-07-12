import { Outlet } from "react-router-dom"
import { Fragment } from "react/cjs/react.development"
import {Link} from "react-router-dom"
import { ReactComponent as Clogo} from "../assets/crown.svg"
import "./navigation.styles.scss"
export const Nav=()=>{
  return(
    <Fragment>
    <div className="navigation">
    <Link className="logo-container" to="/">
        <div><Clogo className="logo"/></div>
    </Link> 
      
      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">shop</Link>
        <Link className="nav-link" to="/signIn">signIn</Link>
        
      </div>
      
    </div>
    <Outlet></Outlet>
    </Fragment>
  )
}