import ToDoItem from "./ToDoItem"
import styles from './ToDoItems.module.css'

const ToDoItems=({todoData})=>{
   return (<div className={styles.itemsContainer}>
      {
        todoData.map((item)=>{
          return <ToDoItem toDoName={item.name} toDoDate={item.dueDate}></ToDoItem>
        })
      }
    </div>)
}

export default ToDoItems