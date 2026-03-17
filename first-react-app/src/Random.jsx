function Random(){
    let numbr = Math.random() * 100;
    return <h4 style={{'background-color': '#776691'}}>
        Random Number is : { Math.round(numbr) }</h4>
}

export default Random;