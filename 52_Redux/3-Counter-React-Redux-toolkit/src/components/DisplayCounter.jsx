import { useSelector } from 'react-redux'

const DisplayCounter = ()=>{
   const counter =  useSelector(store=> store.counter);   //It is use as subscribe the store and fetch data from store. 
   // if counter value whenever changed then it repaint the UI.
    return (
    <>
        <p className="lead mb-4">Counter Current Value : {counter}</p>
    </>
    )
}

export default DisplayCounter