import React from 'react'
import FoodItem from './components/foodItem'
import ErrorMessage from './components/ErrorMessage'
import './App.css'
import Container from './components/Container'
import FoodInput from './components/FoodInput'
import FruitItem from './components/FruitItem'

function App() {
  let mainFoodItem = ['Pulse','Vegetables','Rice','Ragi', 'Mazze','Milk', 'Butter'];
   
  //let foodItem=[];
  // if(foodItem.length==0){                //first way
  //   return <h1>I am still hungry.</h1>
  // }

  const handleOnChanges =(event)=>{
        console.log(`Value entered on First parent: ${event.target.value}`);
    }
  return (
    // <div>
    // <React.Fragment>
      <>
        {/* <h1>Items</h1>
        <ul className="list-group">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">and fith item</li>
        </ul> */}
        {/* <h1 className="kg-heading">Healthy Food Items</h1> */}
        {/* {foodItem.length==0 ? <h1>I am still hungry.</h1> : null}  //Second way */}
         {/* {foodItem.length===0 && <h1>I am still hungry.</h1> }  third way */}
        {/* <ul className="list-group">
          {
            mainFoodItem.map(item=><li key={item} className="list-group-item">{item}</li>)
          }
        </ul> */}
        {/* <br/> */}
         <Container subTitle="List Items">
          <h1 className="kg-heading">Fruit Items</h1>
          <FruitItem/>
        </Container>
        <Container subTitle="List Items">
          <h1 className="kg-heading">Healthy Food Items</h1>
          <ErrorMessage items={mainFoodItem} />
          <FoodInput onChangeHandle={handleOnChanges}/>
          <FoodItem mItems={mainFoodItem}></FoodItem>
        </Container>
        <Container subTitle="Description">
           <p>Hi Guys! This is food items project.</p>
        </Container>
      </>
      // </React.Fragment>
    // </div>
  )
}

export default App
