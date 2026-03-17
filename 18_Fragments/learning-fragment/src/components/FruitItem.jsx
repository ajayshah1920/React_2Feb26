import Item2 from "./Item2";

function FruitItem() {
  const fruitItemsDetail = [
    { id: 1, name: "Apple", price: 100 },
    { id: 2, name: "Banana", price: 40 },
    { id: 3, name: "Mango", price: 150 }
  ];

  const handleBuyClick = (id, name, price) => {
    console.log('--------');
    console.log("From child:");
    console.log("ID:", id);
    console.log("Name:", name);
    console.log("Price:", price);
  };

  const handleCheckClick = (itms)=>{
    console.log('--------');
    console.log("Received in Parent:");
    console.log(itms.id, itms.foodItem, itms.price);
  }

  const handleCheckEvent = (event, fruitItem) =>{
    console.log('--------');
    console.log(event.target.innerText);
    console.log("Fruit:-"+ fruitItem);
  }

  return (
    <ul className="list-group">
      {fruitItemsDetail.map((item) => (
        <Item2 
          key={item.id}
          id={item.id}
          foodItem={item.name}
          price={item.price}
          onBuy={handleBuyClick} onCheck={handleCheckClick} onGetEvent={handleCheckEvent}/>
      ))}
    </ul>
  );
}

export default FruitItem;
