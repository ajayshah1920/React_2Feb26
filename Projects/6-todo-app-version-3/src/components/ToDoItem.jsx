import {AiFillDelete} from 'react-icons/ai';

function ToDoItem({ toDoName, toDoDate, onDeleteClick })
{
    return <div className="container">
      <div className="row kg-row">
        <div className="col-6">{toDoName}</div>
        <div className="col-4">{toDoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button" 
                        onClick={()=>onDeleteClick(toDoName)}>
                          <AiFillDelete/>
                        </button>
        </div>
      </div>
    </div>
}

export default ToDoItem;