import React, { useState } from 'react';


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
             <button>Add Todo</button>
             <button onClick={clearCompleted}>Clear</button>
             </form>
        )
}

export default TodoForm;