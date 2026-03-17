import AddToDo2 from "./components/AddToDo2"
// import AddToDo from "./components/AddToDo"
import AppName from "./components/AppName"
import './App.css'
import ToDoItems from "./components/ToDoItems"
import 'bootstrap/dist/css/bootstrap.min.css'
import WelcomeMessage from "./components/WelcomeMessage"
import  TodoItemsContextProvider  from "./store/todo-items-store"

function App() {
  
  // passing  object value as props and events from ContextApi provider here
  return <TodoItemsContextProvider>
            <center className="todo-container">
              <AppName></AppName>
              <AddToDo2/>
              <WelcomeMessage></WelcomeMessage>
              <ToDoItems/>
          </center>
        </TodoItemsContextProvider>
}

export default App
