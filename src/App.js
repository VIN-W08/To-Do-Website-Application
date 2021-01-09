import React, {useState, useEffect} from "react"
import './App.css';
import Form from "./components/Form.js";
import TodoList from "./components/TodoList.js";

function App() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [filterOpt, setFilterOpt] = useState("All");
  
  useEffect(()=>{
    getTodoList();
  },[]);

  useEffect(()=>{
    saveTodoList();
  },[todoList]);

  function saveTodoList(){
    if(localStorage.getItem("maintainTodoList") == null){
      localStorage.setItem("maintainTodoList",JSON.stringify([]));
    }
    else{
      localStorage.setItem("maintainTodoList",JSON.stringify(todoList));
    }
  }

  function getTodoList(){
    setTodoList(JSON.parse(localStorage.getItem("maintainTodoList")));
  }

  return (
    <div className="App">
      <h1>My To Do List</h1>
      <p><i>You can do it !!!</i></p>
      <Form inputText={inputText} setInputText={setInputText} todoList={todoList} setTodoList={setTodoList} setFilterOpt={setFilterOpt}/>
      <TodoList todoList={todoList} todoList={todoList} setTodoList={setTodoList} filterOpt={filterOpt}/>
    </div> 
  );
}

export default App;
