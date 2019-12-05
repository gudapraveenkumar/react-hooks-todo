import React, {useContext, useReducer} from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import TodosContext from './context'
import todosReducer from './reducer'

import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"
// export const UserContext = React.createContext()

// const username = "Dave"

// ReactDOM.render(
//    <UserContext.Provider value={username}>
//       <App />
//    </UserContext.Provider>
// , document.getElementById('root'));

// serviceWorker.unregister();

const App = () =>{
  const initialState = useContext(TodosContext)
  const [state, dispatch] = useReducer(todosReducer, initialState)

  return(
     <TodosContext.Provider value={{state, dispatch}}>
        <TodoForm/>
        <TodoList/>
     </TodosContext.Provider>
  )
}

ReactDOM.render(
   <App/>,
   document.getElementById('root')
)
