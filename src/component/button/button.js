import "./button.style.scss"
const BTC={
    google:"google-sign-in",
    inverted:"inverted"
}

export const Button=({children,buttonType,...otherprops})=>{
    return(
        <button className={`button-container ${BTC[buttonType]}`}  {...otherprops}>{children}</button>
    )
}