import AddToDo2 from "./components/AddToDo2"
// import AddToDo from "./components/AddToDo"
import AppName from "./components/AppName"
import './App.css'
import ToDoItem from "./components/ToDoItem"
import ToDoItems from "./components/ToDoItems"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import WelcomeMessage from "./components/WelcomeMessage"

function App() {
  const initToDoItems =[]
  const [toDoItemsData,setToDoItem] = useState(initToDoItems);
  const handleNewItem = (itemName, itemDueDate) => {
      // setToDoItem((currentValue) =>{
      //   const newTodoItems = [...currentValue, {"name": itemName, "dueDate": itemDueDate}]
      //   return newTodoItems;
      // });
      //Or
      setToDoItem((currentValue) =>[...currentValue, {"name": itemName, "dueDate": itemDueDate}]);

      //  console.log(itemName,itemDueDate);
      //  let newTodoItems = [...toDoItemsData, {"name": itemName, "dueDate": itemDueDate}]
      //  setToDoItem(newTodoItems);
  }
  const handleDeleteClick=(todoName)=>{
      console.log(`Item Deleted: ${todoName}`);
      let newTodoItems = toDoItemsData.filter(item => item.name !== todoName);
      setToDoItem(newTodoItems);
  }
  return <center className="todo-container">
    <AppName></AppName>
    <AddToDo2 onNewItem={handleNewItem} />
    {toDoItemsData.length==0 && <WelcomeMessage></WelcomeMessage>}
    <ToDoItems todoData={toDoItemsData} onDeleteClick={handleDeleteClick}/>
    <hr/>
    <div className="items-container">
      <ToDoItem toDoName="Course Duration" toDoDate="05/02/2027"></ToDoItem>
      <ToDoItem toDoName="Go to College" toDoDate="15/02/2028"></ToDoItem>
      <ToDoItem toDoName="Buy Milk" toDoDate="25/02/2026"></ToDoItem>
    </div>
    {/* <hr/>
     <div className="items-container">
      {
        initToDoItems.map((item)=>{
          return <ToDoItem toDoName={item.name} toDoDate={item.dueDate}></ToDoItem>
        })
      }
    </div>
    <hr/> */}
    {/* <ToDoItems todoData={toDoItems} /> */}
  </center>
}

export default App
