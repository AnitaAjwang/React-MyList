import React, { useState,useEffect }  from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
 

  const [inputText, setInputText] = useState("");
  // this state will store an array of objects
  const [todos, setTodos] = useState([]);
  const [status,setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [countComplete, setCountComplete] = useState(0);
  const [countPending, setCountPending] = useState(0);
  // run once when the app starts/ is mounted / page is refreshed or loaded the first time

  useEffect ( () => {
    const getLocalTodos = () => {
      if(localStorage.getItem('todos') === null){
        localStorage.setItem('todos', JSON.stringify([]));
      }
      else{
        //get todo from local
        // whatever was disappearing during refresh from state will be saved in local
        let todoLocal = JSON.parse(localStorage.getItem('todos'));
        setTodos(todoLocal);
      }
  }
  getLocalTodos();
  countHandler();
  },[]);

  useEffect( () => {
    countHandler();

  },[todos]);

  useEffect ( () => {
      // this function will filter out the todos according to the state
  const filterHandler = () => {
    switch(status){
      //filter out the todos, Check if completed is true/false
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  //save to local storage
  const saveLocalTodos = () => {
      localStorage.setItem('todos',JSON.stringify(todos));    
  }

  filterHandler();
  saveLocalTodos();


  },[todos,status]); // the function will be executed whenever a new todo is entered or a status changes

 const countHandler = () => {
    const totalAllCount = todos.length;
    const totalCompleteCount = (todos.filter(todo => todo.completed === true)).length;
    const totalPendingCount = (todos.filter(todo => todo.completed === false)).length;
    setCount(totalAllCount);
    setCountComplete(totalCompleteCount);
    setCountPending(totalPendingCount);
 }


  return (
    <div className="App">

      {/**Passing setInputText so that its available in Form.js */}

      <div className="list-todo">
      <Form 
        todos={todos} 
        setTodos={setTodos} 
        inputText={inputText} 
        setInputText={setInputText}
        setStatus={setStatus}
        count ={count}
        countComplete = {countComplete}
        countPending = {countPending}
        
      />
      <TodoList 
      filteredTodos = {filteredTodos}
      todos={todos} 
      setTodos={setTodos}/>
      </div>

    </div>
    
    
  );
}

export default App;
