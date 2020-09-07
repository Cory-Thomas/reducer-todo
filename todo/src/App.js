import React, { useState, useReducer } from 'react';
import { initialState, reducer, ACTIONS} from "./reducers/reducer";
import Todo from './Components/Todo';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [todo, setTodo] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { item: todo } })
    setTodo('')
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='todo'> Todo: </label>
        <input 
          type='text' 
          id='todo' 
          name='todoText'
          value={todo}
          onChange={event => setTodo(
            event.target.value
          )}
        />
        <button type='submit'> Add </button>
      </form>
      <button onClick={ () => dispatch({ type: ACTIONS.DELETE_ALL, payload: { state }})}> Delete All Completed </button>
      {
        state.map( todo => {
          return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
        })
      }
    </>
  );
}

export default App;