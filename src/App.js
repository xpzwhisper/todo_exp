import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form.js';
import TodoList from './components/TodoList.js';


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);
  useEffect(() => {
    getLocalTodos();
  }, [])
  useEffect(() => {
    filterHandler()
    saveLocalTodos()
    
  }, [todos, status])

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true))

        break;
        case "uncompleted":
          setFilteredTodos(todos.filter(todo => todo.completed === false))
      break;
      default:
        case "all":
          setFilteredTodos(todos)
  
        break;
    }
  }

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]))
    } else {
      setTodos(JSON.parse(localStorage.getItem("todos")))
    }
  }
  return (
    <div className="App">
      <header>
        <h1>My todo's! {inputText}</h1>
      </header>
      <Form setStatus={setStatus} inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} inputText={inputText} />
    </div>
  );
}

export default App;
