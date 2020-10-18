import React, {useState} from 'react';
import './App.css';
import Form from './components/Form.js';
import TodoList from './components/TodoList.js';


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("");
  return (
    <div className="App">
      <header>
        <h1>My todo's! {inputText}</h1>
      </header>
      <Form setStatus={setStatus} inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <TodoList setTodos={setTodos} todos={todos} inputText={inputText} />
    </div>
  );
}

export default App;
