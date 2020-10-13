import React from 'react';
import './App.css';
import Form from './components/Form.js';
import TodoList from './components/TodoList.js';


function App() {
  return (
    <div className="App">
       <h1>Something interesting happening here!</h1>
       <Form />
       <TodoList />
    </div>
  );
}

export default App;
