import { BiMessageAdd } from "react-icons/bi";
import { useRef } from "react"

function AddToDo2({ onNewItem }){
    const todoNameElement = useRef();
    const todoDueDateElement = useRef();
    const onSubmitHandle = (e) =>
    {      
        e.preventDefault();
        const todoName = todoNameElement.current.value;
        const todoDueDate = todoDueDateElement.current.value;
        console.log(`${todoName} on Due: ${todoDueDate}`);
        if(todoName && todoDueDate){
          onNewItem(todoName,todoDueDate);
        }
        todoNameElement.current.value = "";
        todoDueDateElement.current.value = "";
    } 

    return <div className="container">
      <form className="row kg-row" onSubmit={ onSubmitHandle }>
        <div className="col-6">
          <input type="text" placeholder="Enter ToDo here" ref={todoNameElement} ></input>
        </div>
        <div className="col-4">
          <input type="date" ref={todoDueDateElement} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button" >
            <BiMessageAdd />
          </button>
        </div>
      </form>
    </div>
}

export default AddToDo2;