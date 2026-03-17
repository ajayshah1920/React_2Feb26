import AddToDo2 from "./components/AddToDo2"
// import AddToDo from "./components/AddToDo"
import AppName from "./components/AppName"
import './App.css'
import ToDoItems from "./components/ToDoItems"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import WelcomeMessage from "./components/WelcomeMessage"
import {TodoItemsContext} from "./store/todo-items-store"

function App() {
  const initToDoItems =[]
  const [toDoItemsData,setToDoItem] = useState(initToDoItems);
  const addNewItem = (itemName, itemDueDate) => {
      setToDoItem((currentValue) =>[...currentValue, {"name": itemName, "dueDate": itemDueDate}]);
  }

  const deleteItem=(todoName)=>{
      let newTodoItems = toDoItemsData.filter(item => item.name !== todoName);
      setToDoItem(newTodoItems);
  }

   // passing  object value as props and events from ContextApi provider here
    return <TodoItemsContext.Provider value={{
        todoItems: toDoItemsData,
        addNewItem: addNewItem,
        deleteItem: deleteItem
      }}>
    <center className="todo-container">
      <AppName></AppName>
      <AddToDo2/>
      <WelcomeMessage></WelcomeMessage>
      <ToDoItems/>
    </center>
  </TodoItemsContext.Provider>
}

export default App
