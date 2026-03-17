import Item from "./Item";
import FoodInput from "./FoodInput";
import ErrorMessage from './ErrorMessage'
import { useState } from "react";

const FoodItem = ({ mItems, onKeyDownHandle }) => {
  //const foodItemOthers = ["Wheat", "Rice", "Bajra", "Kodo"];

  let [activeItems, setActiveItems] = useState([]);
   const handleOnChanges =(event)=>{
        console.log(`Value entered on parent: ${event.target.value}`);
    }

    const onBuyButton = (event, itm) => {
        if(!activeItems.includes(itm))
        {
          let newItems = [...activeItems, itm];
          setActiveItems(newItems);  
        }
        else{
          let newItems = activeItems.filter(item => item !== itm);
          console.log(newItems);
          setActiveItems(newItems);
        }
    }

  return (
    <>
      
      <h2 className="kg-heading">Main Healthy Food Items:</h2>
       <FoodInput onChangeHandle={handleOnChanges} onKeyDownHandle={onKeyDownHandle}/>
       <ErrorMessage items={mItems} />
      <ul className="list-group">
        {
            mItems.map((itm, index) => (
                <Item key={index} foodItem={itm} bought={activeItems.includes(itm)} handleBuyButton={(event)=> onBuyButton(event, itm)} />
            ))
        }
      
      </ul>
      {/* <hr/>
      <ul className="list-group">
        {
            foodItemOthers.map((itm, index) => (
                <Item key={index} foodItem={itm} />
            ))
        }
      </ul> */}
    </>
  );
};

export default FoodItem;
