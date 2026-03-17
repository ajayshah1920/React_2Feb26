import ToDoItem from "./ToDoItem"
import styles from './ToDoItems.module.css'

const ToDoItems=({todoData, onDeleteClick})=>{
   return (<div className={styles.itemsContainer}>
      {
        todoData.map((item)=>{
          return <ToDoItem toDoName={item.name} toDoDate={item.dueDate} onDeleteClick={onDeleteClick}></ToDoItem>
        })
      }
    </div>)
}

export default ToDoItems