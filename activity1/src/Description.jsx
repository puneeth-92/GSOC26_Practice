import "./Description.css"
function Description({description}){
    let des = description.map((item,index)=> <li className="LII" key={index} >{item}</li>);
    return(
        <p>{des}</p>
    )
}

export default Description;