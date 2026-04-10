import { useRef } from "react";
import { useDispatch } from "react-redux";
//import { controlActions } from "../store/Index.js";
import { controlActions } from "../store/Counter.js";
import { privacyActions } from "../store/Privacy.js";

const Controls=()=>{
    const dispatch = useDispatch();  //It use to dispatch data to reducer
    const inputElement = useRef();

    const handleIncrement=()=>{
        console.log("Incremented value: "+ controlActions.increment());
        dispatch(controlActions.increment());
    }

    const handleDecrement=()=> {
        console.log("Decremented value: "+ controlActions.decrement());
        dispatch(controlActions.decrement());
    }

    const handleAddition = ()=> {
       const inputVal = inputElement.current.value;
       dispatch(controlActions.add({
            num: inputVal
       }));     
       inputElement.current.value = "";
    }

    const handleSubstract = ()=> {
       const inputVal = inputElement.current.value;
       dispatch(controlActions.substract({
            num: inputVal
       }));
        inputElement.current.value = "";
    }

    const handlePrivacy = () => {
        dispatch(privacyActions.toggle());
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