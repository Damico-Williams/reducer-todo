import React,{useReducer, useState} from 'react';
import TodoForm from './components/TodoForm.js'
import TodoList from './components/TodoList.js'
import { initialState, theReducer } from './reducers/reduce.js'
import './App.css';

const App = () => {
  

  const [state, dispatch] = useReducer(theReducer, initialState);
  // console.log(state)

  const addToDo = newTodo => {
    dispatch({ type: "ADD_TODO", payload: newTodo});
}

  const clearCompleted = () => {
   dispatch({type:"CLEAR_COMPLETED"})
}

const listToggle = (id) => {
  console.log(id)
  dispatch({type: "LIST_TOGGLE", payload: id})
}

    
  return (
    <div>
      <h2>Welcom to the Todo Reducer App!</h2>
      <TodoForm  addToDo={addToDo} clearCompleted={clearCompleted}/>
      <TodoList todolist={state.todo} listToggle={listToggle}/>
    </div>
  )

}

export default App;
