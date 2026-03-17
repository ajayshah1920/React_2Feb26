import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Display  from './components/Display'
import './App.css'
import styles from './App.module.css'
import ButtonContainer from './components/ButtonContainer'

function App() {
  const [calVal, setCalVal] = useState("");
  
  const onButtonClick =(btnName)=>{
    console.log('Button clicked: '+ btnName);
    if(btnName==='C')
    {
      setCalVal("");
    }
    else if(btnName==='=')
    {
      const result = eval(calVal);
      setCalVal(result);
    }
    else{
      const newDisplayVal = calVal + btnName
      setCalVal(newDisplayVal);
    }
  }

  return (
    <>
      <div className={styles.calculator}>
        <Display displayValue={calVal}></Display>
        <ButtonContainer onButtonClick={ onButtonClick }/>
      </div>
    </>
  )
}

export default App
