import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls=()=>{
    const dispatch = useDispatch();  //It use to dispatch data to reducer
    const inputElement = useRef();

    const handleIncrement=()=>{
        dispatch({type:"INCREMENT"});
    }

    const handleDecrement=()=> {
        dispatch({type:"DECREMENT"});
    }

    const handleAddition = ()=> {
       const inputVal = inputElement.current.value;
       dispatch({type:'ADD', payload:{
            num: inputVal
       }});
       inputElement.current.value = "";
    }

    const handleSubstract = ()=> {
       const inputVal = inputElement.current.value;
       dispatch({type:'MINUS', payload:{
            num: inputVal
       }});
        inputElement.current.value = "";
    }

    const handlePrivacy = () => {
        dispatch({type:"PRIVACY_TOGGLE"})
    }

    return (
        <>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row"> 
                <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={ handleIncrement }>+1</button> 
                <button type="button" className="btn btn-secondary btn-lg px-4" onClick={handleDecrement}>-1</button> 
                <button type="button" className="btn btn-warning btn-lg px-4" onClick={handlePrivacy}>Privacy Toggle</button> 
            </div>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row"> 
                <input type="text" className="number-input" placeholder="Enter number" ref={ inputElement }/>
                <button type="button" className="btn btn-info btn-lg px-4 gap-3" onClick={ handleAddition }>Add</button> 
                <button type="button" className="btn btn-danger btn-lg px-4" onClick={ handleSubstract }>Substract</button> 
            </div>
        </>
    )
}

export default Controls;