import React, {useState} from "react"

function Form(props){
    const [id, setId] = useState(0);
    function inputTextHandler(e){
        props.setInputText(e.target.value);
    }

    function addHandler(e){
        e.preventDefault();
        props.setTodoList([
            ...props.todoList,
            {
                id: id,
                name : props.inputText,
                completed: false
            }
        ]);
        setId(id + 1);
        props.setInputText("");
    }

    function filter(e){
        props.setFilterOpt(e.target.value);
    }

    return(
        <div>
            <form>
                <input value={props.inputText} type="text" name="todoName" onChange={inputTextHandler} placeholder="Input task here"/>
                <button className="add" type="submit" onClick={addHandler}>+</button>
                <select name="filter" className="filter" onChange={filter}>
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Uncompleted">Uncompleted</option>
                </select>
            </form>
        </div>
    )

}

export default Form