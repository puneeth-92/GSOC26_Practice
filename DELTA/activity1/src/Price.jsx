function Price({oldP,newP}){
    let styles={
        textDecoration:"line-through"
    };
    let style2={
        backgroundColor:"yellow"
    };
    return(
        <h3 style={style2}> <span style={styles}>{oldP}</span> <span>{newP}</span></h3>
    )
}

export default Price;