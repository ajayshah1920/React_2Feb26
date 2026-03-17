import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Display  from './components/Display'
import './App.css'
import styles from './App.module.css'
import ButtonContainer from './components/ButtonContainer'

function App() {
  
  return (
    <>
      <div className={styles.calculator}>
        <Display></Display>
        <ButtonContainer/>
      </div>
    </>
  )
}

export default App
