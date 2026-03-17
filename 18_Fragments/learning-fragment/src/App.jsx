import React from 'react'
import FoodItem from './components/foodItem'
import './App.css'
import Container from './components/Container'
import { useState } from 'react'

function App() {
  //let mainFoodItem = ['Pulse','Vegetables','Rice','Ragi', 'Mazze','Milk', 'Butter'];
  let mainFoodItem = [];
  let txtToShow="Food Item Entered by user";
  let txtState = useState("Food Item Entered by user");
  // let txtStateVal = txtState[0];
  // let setTextState = txtState[1];
  //  let [txtStateVal,setTextState] = useState("Food Item Entered by user");
   let [mainFItems,setFoodItem] = useState(mainFoodItem);

  console.log(`Current value of Main Food Items: ${mainFItems}`);

  const onKeyDownHandle =(event)=>{
    if(event.key == 'Enter'){
        console.log(`Value entered: ${event.target.value}`);
        let  txtFoodVal = event.target.value;
        let newMainFoodItems =[...mainFItems, txtFoodVal]
        setFoodItem(newMainFoodItems);  
        //setItems(mainFItems => [...mainFItems, "Rice"]);
        event.target.value = "";
    }
      
  }
  
  const [name, setName] = useState("");
  
  return (
      <>
        <Container subTitle="List Items">
          <FoodItem mItems={mainFItems} onKeyDownHandle={ onKeyDownHandle }></FoodItem>   
        </Container>
        <Container subTitle="Description">
           <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
           <p>Hi {name}! This is food items project.</p>
        </Container>
        
      </>
  )
}

export default App
