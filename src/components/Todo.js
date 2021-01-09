import React from "react"

function Todo(props){
    function remove(){
        props.setTodoList(props.todoList.filter((item) => item.id !== props.todo.id));
    }

    function completed(){
        props.setTodoList(props.todoList.map((item)=>{
            if(item === props.todo){
               return {
                   ...item, completed: !item.completed
               }
            }
            return item;
        }))
    }
    
    return(
        <div className="todo">
            <li className={props.todo.completed ? "todo-completed" : ""}>{props.todo.name}</li>
            <button className="check" onClick={completed}>&#x2713;</button>
            <button className="remove" onClick={remove}>X</button>
        </div>
    )

}

export default Todo