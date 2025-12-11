function Card({title,backcol}){
    let Styles={backgroundColor:backcol};
    return(
        <h1 style={Styles}>{title}</h1>
    )
}

export default Card
