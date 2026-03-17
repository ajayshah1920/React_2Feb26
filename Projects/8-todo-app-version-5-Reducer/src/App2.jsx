import AddToDo2 from "./components/AddToDo2"
// import AddToDo from "./components/AddToDo"
import AppName from "./components/AppName"
import './App.css'
import ToDoItems from "./components/ToDoItems"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useReducer } from 'react'
import WelcomeMessage from "./components/WelcomeMessage"
import {TodoItemsContext} from "./store/todo-items-store"


const todoItemsReducer = (currentTodoItems, action) =>{    ///Pure fuction with current state and action
    let newTodoItems = currentTodoItems;
    if(action.type==="NEW_ITEM"){
        newTodoItems = [...currentTodoItems, { "name": action.payload.itemName,
                                               "dueDate": action.payload.itemDueDate }];
    }
    else if(action.type==="DELETE_ITEM"){
         newTodoItems = currentTodoItems.filter(item => item.name !== action.payload.itemName);
    }
    return newTodoItems;
}

function App() {
  
  //const [toDoItems,setToDoItem] = useState([]);
  const [toDoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
      const newItemAction = {
        type:"NEW_ITEM",
        payload:{
          itemName,
          itemDueDate
        }
      }
      dispatchTodoItems(newItemAction);
      //setToDoItem((currentValue) =>[...currentValue, {"name": itemName, "dueDate": itemDueDate}]);
  }

  const deleteItem=(todoName)=>{
    const deleteItemAction = {
        type:"DELETE_ITEM",
        payload:{
          itemName : todoName
        }
      }
      dispatchTodoItems(deleteItemAction);
      // let newTodoItems = toDoItemsData.filter(item => item.name !== todoName);
      // setToDoItem(newTodoItems);
  }

   // passing  object value as props and events from ContextApi provider here
    return <TodoItemsContext.Provider value={{
        todoItems : toDoItems,
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
