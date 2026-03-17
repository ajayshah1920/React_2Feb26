import { BiMessageAdd } from "react-icons/bi";
import {useState} from "react"

function AddToDo({ onNewItem }){
    const [todoName, setTodoName] = useState("");
    const [todoDueDate, setTodoDueDate] = useState("");
    const onNameChange =(e)=>{
      console.log(e.target.value);
      setTodoName(e.target.value);
    }
    const onDueDateChange =(e)=>{
      console.log(e.target.value);
      setTodoDueDate(e.target.value);
    }
    const onClickHandle = () =>
      {
        if(todoName && todoDueDate){
          onNewItem(todoName,todoDueDate);
        }
        setTodoName(""); setTodoDueDate("");
      } 

    return <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter ToDo here" value={todoName} onChange={onNameChange}></input>
        </div>
        <div className="col-4">
          <input type="date" value={todoDueDate} onChange={onDueDateChange}/>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button" onClick={ onClickHandle}>
            <BiMessageAdd />
          </button>
        </div>
      </div>
    </div>
}

export default AddToDo;