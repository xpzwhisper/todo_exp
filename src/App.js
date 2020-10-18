import React, {useState} from 'react';
import './App.css';
import Form from './components/Form.js';
import TodoList from './components/TodoList.js';


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>My todo's! {inputText}</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <TodoList setTodos={setTodos} todos={todos} inputText={inputText} />
      <h2>jah nii on</h2>
    </div>
  );
}

export default App;
