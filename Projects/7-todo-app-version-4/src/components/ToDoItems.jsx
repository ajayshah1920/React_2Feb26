import ToDoItem from "./ToDoItem"
import styles from './ToDoItems.module.css'
import { useContext } from "react"
import { TodoItemsContext } from "../store/todo-items-store"

// const ToDoItems=({todoData, onDeleteClick})=>{
const ToDoItems=()=>{
  //  const contextObj = useContext(TodoItemsContext); 
  //  const todoItems = contextObj.todoItems;
    
   //can use refactor and prefer it
  //  const {todoItems, deleteItem} = useContext(TodoItemsContext); 
  const {todoItems} = useContext(TodoItemsContext); 
   
   return (<div className={styles.itemsContainer}>
      {
        todoItems.map((item)=>{
          return <ToDoItem toDoName={ item.name } toDoDate={ item.dueDate }></ToDoItem>
        })
      }
    </div>)
}

export default ToDoItems

// // const ToDoItems=({todoData, onDeleteClick})=>{
// const ToDoItems=({onDeleteClick})=>{
//    const todoData = useContext(TodoItemsContext); 
//    return (<div className={styles.itemsContainer}>
//       {
//         todoData.map((item)=>{
//           return <ToDoItem toDoName={item.name} toDoDate={item.dueDate} onDeleteClick={onDeleteClick}></ToDoItem>
//         })
//       }
//     </div>)
// }

// export default ToDoItems