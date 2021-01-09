import React from "react"
import Todo from "./Todo.js"

function TodoList(props){

    return(
        <div className="todo-container">   
            {
                props.todoList.map((todo) => {
                if(props.filterOpt == "All"){
                    return <Todo key={todo.id} className="todo" todo={todo} todoList={props.todoList} setTodoList={props.setTodoList}/>
                }
                else if(props.filterOpt == "Completed" && todo.completed == true){
                    return <Todo key={todo.id} className="todo" todo={todo} todoList={props.todoList} setTodoList={props.setTodoList}/>
                }
                else if(props.filterOpt == "Uncompleted" && todo.completed == false){
                    return <Todo key={todo.id} className="todo" todo={todo} todoList={props.todoList} setTodoList={props.setTodoList}/>
                } 
                else{
                    return
                }  
                })
            }
        </div>  
    )
}

export default TodoList;