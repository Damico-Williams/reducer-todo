import React, { useState } from 'react';
import '../App.css';

function TodoForm({addToDo, clearCompleted}) {
    
    
    const [newTodo, setNewTodo] = useState("")

    const handleChange = e => {
        e.preventDefault();
        setNewTodo(e.target.value);
    };
    
    const handleSubmit = e => {
            e.preventDefault();
            addToDo(newTodo)
            setNewTodo("")
    }
    

    

    

    
    
        return(
            <form onSubmit={handleSubmit}>
            <input
             type="text"
             name="newTodo"
             value={newTodo}
             onChange={handleChange}
             />
             <button className={"todob"}>Add Todo</button>
             <button onClick={clearCompleted} className={"todob"}>Clear</button>
             </form>
        )
}

export default TodoForm;