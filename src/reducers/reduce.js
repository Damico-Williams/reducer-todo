
export const initialState = {
  todo:[
  {
  item: '',
  completed: false,
  id: 3892987589
 }
]}

export const theReducer = (state, action) => {
  switch(action.type){
    case "ADD_TODO":
      return {...state, todo:[...state.todo,{ item: action.payload, completed: false, id: Date.now()}]}
    case "CLEAR_COMPLETED":
      return {...state, todo:state.todo.filter(item => item.completed === false)}
    case "LIST_TOGGLE":
      return {...state, todo:state.todo.map(todo => {
        if(todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })}
      default:
  return state;
  }
}