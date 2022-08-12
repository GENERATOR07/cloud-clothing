
import { Productcard } from "../product-card/product-card"
import "./category-preview.styles.scss"


export const CategoryPreview=({title,product})=>{
    return(
        <div className="category-preview-container">
            <h2><span className="title">{title.toUpperCase()}</span></h2>
            <div className="preview">
                {
                    product.filter((_,id)=>id<4)
                    .map(product=>
                        <Productcard key={product.id} product={product}></Productcard>)
                }

            </div>

        </div>
    )
}