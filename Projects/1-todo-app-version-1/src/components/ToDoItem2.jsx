function ToDoItem2()
{
    let toDoName='Go to College';
    let toDoDate='10/02/2026';
    return <div class="container">
      <div class="row kg-row">
        <div class="col-6">{toDoName}</div>
        <div class="col-4">{toDoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button" >Delete</button>
        </div>
      </div>
    </div>
}

export default ToDoItem2;