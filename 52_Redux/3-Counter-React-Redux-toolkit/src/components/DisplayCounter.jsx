import { useSelector } from 'react-redux'

const DisplayCounter = ()=>{
   const { counterVal } =  useSelector(store=> store.counter);   //It is use as subscribe the store and fetch data from store. 
   // if counter value whenever changed then it repaint the UI. useSelector extracts specific data from the global state and gives it to your component
    return (
    <>
        <p className="lead mb-4">Counter Current Value : { counterVal }</p>
    </>
    )
}

export default DisplayCounter;