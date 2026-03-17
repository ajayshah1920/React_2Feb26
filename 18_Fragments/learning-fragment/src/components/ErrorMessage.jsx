const ErrorMessage = ({ items }) =>{          //Called parameters using Refactoring { propName }
    return <>{items.length===0 && <h5>I am still hungry.</h5>}</>
}

// const ErrorMessage = (props) =>{                        ---Called parametyers using props
//     return <>{props.items.length===0 && <h5>I am still hungry.</h5>}</>
// }

export default ErrorMessage