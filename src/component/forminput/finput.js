import "./finput.style.scss"

export const Finput=({label,...otherprops})=>{
    
    return(
       <div className="group">
        <input className="form-input" {...otherprops}></input> 
        {label && <label className={`${otherprops.value.length?"shrink":""} form-input-lable`} > {label} :-  </label>}
         
           
       </div>
    )
}