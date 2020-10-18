import React from 'react';
const Form = ({setInputText, setTodos, todos, inputText}) => {
    const inputTextHandler = (e) =>{
        setInputText(e.target.value);
        //console.log(inputText);
         
    } 
    const submitTodoHandler = (e) => {
        e.preventDefault();

        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
        ]);
        setInputText("");
    }
    return (
        <form>
            <input onChange={inputTextHandler} type="text" className="todo-input" value={inputText} />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo" id="">
                    <option value="all">Alla ööö</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}
export default Form;
