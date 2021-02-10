import React from 'react'

export function Todo({text,todo,todos,setTodos}) {
    
    const deleteHandler = () => {
        // filter all the elements that are not equal to the id of the item being deleted
        setTodos(todos.filter((el) => el.id !== todo.id));
    }

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return {
                    // we are trying just to modify completed to true
                    // ...item leaves all the other properties as they were
                    //!tem reverses false to true and vice versa
                    ...item, completed: !item.completed
                };
            }
            // if it doesn't match just return item as it was
            return item;
        }))
    }

    return (
        <div className="todo">
            {/**if todo is completed add class completed else add nothing 
            */}
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn"> 
                <i className="fas fa-check"></i> </button>
            <button onClick={deleteHandler} className="trash-btn"> 
                <i className="fas fa-trash"></i> </button>
        </div>
    )
}
export default Todo;
