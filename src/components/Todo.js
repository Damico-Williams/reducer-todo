import React from 'react';
import '../App.css';



const Todo = props => {
  console.log(props.todo)
    return(
        <div
        className={`${props.todo.completed ? "underline" : ""}`}
        onClick={() => props.listToggle(props.todo.id)}>
            <p>{props.todo.item}</p>
        </div>
    )
};

export default Todo;