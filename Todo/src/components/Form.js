import React from 'react';
import { nanoid } from 'nanoid';



export function Form({inputText, setInputText, todos, setTodos, setStatus, count, countComplete, countPending}) {
    //the event e gives information on the input
    const inputTextHandler = e => {
        //console.log(e);
        //console.log(e.target.value);
        setInputText(e.target.value);
    };

    const submitTodoHandler = e => {
        //prevents page refresh
        e.preventDefault();
        //...todos - if there were any todos already in the list pass it
        setTodos([
            //creating a todos object
            ...todos, {id:nanoid(),text:inputText, completed:false}
        ]);
        setInputText("");

    };

    const statusHandler= e => {
        setStatus(e.target.value);
    }

    return (
        <div>
            <div className="date-div">
        <h1 className="date-today">Today is </h1>
            </div>
         <h1 className="list-title">My List</h1>
            
            <div className="status-div">
            <h1>ALL : {count}</h1>
            <h1>COMPLETED : {countComplete}</h1>
            <h1>PENDING : {countPending}</h1>
            </div>
            <br/>
            <form className="todo-form">
              <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" placeholder="Add New Task"></input>
              <button onClick={submitTodoHandler} className="todo-button" type="submit">
                  <i className="fas fa-plus-square"></i>
              </button>
              <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
              </div>
            </form>
        </div>
    )
}
export default Form;
