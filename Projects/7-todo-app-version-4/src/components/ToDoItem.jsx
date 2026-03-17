import {AiFillDelete} from 'react-icons/ai';
import { useContext } from "react"
import { TodoItemsContext } from "../store/todo-items-store"

function ToDoItem({ toDoName, toDoDate })
{
   const { deleteItem } = useContext(TodoItemsContext); 

    return <div className="container">
      <div className="row kg-row">
        <div className="col-6">{toDoName}</div>
        <div className="col-4">{toDoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button" 
                        onClick={()=> deleteItem(toDoName)}>
                          <AiFillDelete/>
                        </button>
        </div>
      </div>
    </div>
}

export default ToDoItem;