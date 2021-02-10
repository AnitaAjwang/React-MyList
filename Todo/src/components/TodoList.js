import React from 'react';
import Todo from './Todo';

export function Todolist({todos, setTodos, filteredTodos}) {

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {/**for each todo item render Todo */}

                {filteredTodos.map( (todo)=> (
                    //fetch .text from todos state
                    <Todo 
                    todos={todos} 
                    setTodos={setTodos}
                    key={todo.id}
                    todo={todo}
                    text={todo.text}/>
                ))}
            </ul>           
        </div>
    )
}
export default Todolist;
