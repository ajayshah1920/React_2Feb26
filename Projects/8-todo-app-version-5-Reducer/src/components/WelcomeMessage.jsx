import styles from './WelcomeMessage.module.css'
import { useContext } from "react"
import { TodoItemsContext } from "../store/todo-items-store"


const WelcomeMessage = () =>{   
    // const contextObj = useContext(TodoItemsContext); 
    // const todoItems = contextObj.todoItems;

    //can use refactor and prefer it
    const {todoItems} = useContext(TodoItemsContext); 

    return (todoItems.length===0 && <div className={styles.welcome}>Enjoy your day</div>)
}

export default WelcomeMessage;

// // const WelcomeMessage = ({todoData}) =>{
// const WelcomeMessage = () =>{   
//     const todoData = useContext(TodoItemsContext); 
//     return (todoData.length===0 && <div className={styles.welcome}>Enjoy your day</div>)
// }

// export default WelcomeMessage;