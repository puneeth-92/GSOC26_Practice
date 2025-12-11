import Title from "./Title";
import Description from "./Description";
import Price from "./Price";
import "./Product.css";

function Product({title,description,oldP,newP}){
    return(
        <div className="Prod">
            <Title title={title}/><hr />
            <Description description={description}/><hr />
            <Price oldP={oldP} newP={newP}/>
        </div>
    )
}

export default Product;