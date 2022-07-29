import { useContext,Fragment } from "react"
import { Outlet } from "react-router-dom"
import { CartContext } from "../../contexts/cartcontext"
import {Link} from "react-router-dom"
import { ReactComponent as Clogo} from "../assets/crown.svg"
import { userContext } from "../../contexts/user.context"
import { signOutUser } from "../../utility/firebase/firebase"
import "./navigation.styles.scss"
import { CartIcon } from "../../component/cart-icon/cartIcon"
import { CartDropdown } from "../../component/cartDropdown/cartDropdown"
export const Nav=()=>{
 const {isCartOpen}=useContext(CartContext)
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
        <CartIcon></CartIcon>
      </div>
      {isCartOpen && <CartDropdown/>}
    </div>
    <Outlet></Outlet>
    </Fragment>
  )
}