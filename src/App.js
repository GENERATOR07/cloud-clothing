
import {React,Component} from "react"
import {Routes,Route} from "react-router-dom";
import Home from "./routes/home/home";
import{Nav} from "./routes/navigation/navigation"
import {Auth} from "./routes/authentication/authentication"
import {Shop}from "./routes/shop/shop"
class App extends Component{
 render(){
  return(
    <Routes>
      <Route path="/" element={<Nav/>}>
         <Route index element={<Home/>}/>
         <Route path="/shop" element={<Shop/>}/>
         <Route path="/auth" element={<Auth/>}/>
      </Route>
      
    </Routes>
  )
 }
}

export default App;
