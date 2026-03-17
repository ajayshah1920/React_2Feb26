import AddToDo from "./components/AddToDo"
import AppName from "./components/AppName"
import './App.css'
import ToDoItem from "./components/ToDoItem"
import ToDoItems from "./components/ToDoItems"

function App() {
  const toDoItems =[{name:"Buy Milk",dueDate:"25/02/2025"},{name:"Go to College",dueDate:"15/02/2028"},
    {name:"Course Duration",dueDate:"05/02/2027"}]

  return <center className="todo-container">
    <AppName></AppName>
    <AddToDo/>
    <div className="items-container">
      <ToDoItem toDoName="Course Duration" toDoDate="05/02/2027"></ToDoItem>
      <ToDoItem toDoName="Go to College" toDoDate="15/02/2028"></ToDoItem>
      <ToDoItem toDoName="Buy Milk" toDoDate="25/02/2026"></ToDoItem>
    </div>
    <hr/>
     <div className="items-container">
      {
        toDoItems.map((item)=>{
          return <ToDoItem toDoName={item.name} toDoDate={item.dueDate}></ToDoItem>
        })
      }
    </div>
    <hr/>
    <ToDoItems todoData={toDoItems} />
  </center>
}
export default App
