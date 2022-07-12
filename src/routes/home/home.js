
import {React,Component} from "react"
import "./categories.styles.scss"

class Home extends Component{
  state={
    data:[]
  }
  componentDidMount(){
    fetch("./data/categories.json")
    .then(res=>res.json())
    .then(res=>{
      console.log(res)
      this.setState({data:res})

    })
  }
  render = () => {
    return (
     <div>
         <div className='categories-container'>
       {
        this.state.data.map(x=>{
            
          return(
            <div key={x.id} className='category-container' style={{backgroundImage:`url(${x.imageUrl})`}}>
            
            <div className='category-body-container'>
              <h2>{x.title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
          )
        })
       }
        
      </div>
      
     </div>
    );
  };
  
}
export default Home;