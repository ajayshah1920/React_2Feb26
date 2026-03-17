import { createContext } from 'react'
import { useState, useReducer } from 'react'

export const TodoItemsContext = createContext({
    todoItems: [],
    addNewItem: ()=> {},
    deleteItem: ()=> {}
});

const todoItemsReducer = (currentTodoItems, action) => {    ///Pure fuction with current state and action
    let newTodoItems = currentTodoItems;
    if(action.type==="NEW_ITEM") {
        newTodoItems = [...currentTodoItems, { "name": action.payload.itemName,
                                               "dueDate": action.payload.itemDueDate }];
    }
    else if(action.type==="DELETE_ITEM") {
         newTodoItems = currentTodoItems.filter(item => item.name !== action.payload.itemName);
    }
    return newTodoItems;
}

const TodoItemsContextProvider =({children})=>{
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

  return <TodoItemsContext.Provider value={{
        todoItems : toDoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem
      }}>
        {children}
  </TodoItemsContext.Provider>
}

export default TodoItemsContextProvider;