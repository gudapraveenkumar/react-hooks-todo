import React, {useContext} from 'react';
import TodosContext from '../context'

export default function TodoList(){
  const {state,  dispatch} = useContext(TodosContext)

  return(
     <div>
        {state.todos.length} Todos
        <ul>
           {state.todos.map(todo =>(
              <li key={todo.id}>
                 <span className={`${todo.complete && "line-through text-grey-darkest"}`} onDoubleClick={() => dispatch({type: 'TOGGLE_TODO', payload: todo})}>{todo.text}</span>
                 <button className="border p-1 m-1" onClick={() => dispatch({type: "SET_CURRENT_TODO", payload:todo})}>Edit</button>
                  <button className="border p-1 m-1" onClick={() => dispatch({type: "REMOVE_TODO", payload:todo})}>Remove</button>
              </li>
           ))}
        </ul>
     </div>
  )
}
