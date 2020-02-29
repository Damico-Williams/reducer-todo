import React  from 'react';
import Todo from './Todo.js';
import '../App.css'


function TodoList ({todolist, listToggle}) {
    // console.log(props)
    return(
        <div>
            {todolist.map(todo => 
                // <Todo key={todo.id} todo={todo} onClick={() => listToggle(todo.id)} className={todo.underline}/>
            <div onClick={() => listToggle(todo.id)} className={`${todo.completed ? "underline" : "removeunderline"}`}>{todo.item}</div>)}
        </div>
    )
}

export default TodoList;