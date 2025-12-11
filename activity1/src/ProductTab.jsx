import Product from "./Product";
import "./ProductTab.css"
function ProductTab(){
    let des=["Fast","144Hz","OLED"];
    return(
        <div className="Container">
            <Product title="Phone" description={des} oldP={20000} newP={18000}/>
            <Product title="Laptop" description={des} oldP={200000} newP={180000}/>
            <Product title="TV" description={des} oldP={60000} newP={50000}/>
            <Product title="Oven" description={["latest","efficient"]} oldP={10000} newP={8000}/>

        </div>
    )
}

export default ProductTab