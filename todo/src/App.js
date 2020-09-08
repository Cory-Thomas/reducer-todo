import React, { useState, useReducer } from 'react';
import styled from 'styled-components';
import { initialState, reducer, ACTIONS} from "./reducers/reducer";
import Todo from './Components/Todo';

const StyledDiv = styled.div`
  width: 50%;
  margin: 0 auto;
  text-align: center;

  section {
    margin: 4% auto;
    margin-bottom: 8%;
  }

  form {
    margin-bottom: 1%;
  }

  input {
    margin: 0 .75%;
    padding: 1%;
  }

  button{
        margin: 1%;
        padding: 1%;
        width: 200px;
    }
`

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [todo, setTodo] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { item: todo } })
    setTodo('')
  };

  return (
    <StyledDiv>
      <h1>To-do Creator</h1>
      <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor='todo'> Todo:</label>
        <input 
          type='text' 
          id='todo' 
          name='todoText'
          value={todo}
          placeholder='Type a TO-DO here'
          onChange={event => setTodo(
            event.target.value
          )}
        />
        <button type='submit'> Add </button>
      </form>
      <button onClick={ () => dispatch({ type: ACTIONS.DELETE_ALL, payload: { state }})}> Delete All Completed </button>
      </section>
      {
        state.map( todo => {
          return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
        })
      }
    </StyledDiv>
  );
}

export default App;