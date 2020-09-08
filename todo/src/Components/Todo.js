import React, {useState} from 'react';
import styled from 'styled-components';
import { ACTIONS } from '../reducers/reducer';

const StyledDiv = styled.div`
    width: 80%;
    margin: 0 auto;
    margin-bottom: 2%;
    text-align: center;
    padding: 8%;
    background-color: lightskyblue;

    button{
        margin: 1%;
        padding: 1%;
        width: 100px;
    }
`;

export default function Todo({ todo, dispatch }) {
    const [newTitleText, setNewTitleText] = useState('');
    return(
        <StyledDiv>
            <span 
                style={{ textDecorationLine: todo.complete ? 
                    'line-through' 
                    : null }} 
            >
                {
                    !todo.edit ? (
                        <>
                            <p>{ todo.item + ' ' }</p>
                            <button onClick={() => dispatch({ type: ACTIONS.UPDATE_EDIT, payload: todo })}>edit</button>
                        </>
                    ) : (
                        <div>
                            <input
                                type="text"
                                name="newText"
                                value={newTitleText}
                                placeholder={todo.item}
                                onChange={ e => {
                                    setNewTitleText(e.target.value);
                                }}
                            />
                            <button
                                onClick={() =>
                                dispatch({ type: ACTIONS.UPDATE_ITEM, payload: todo, textPayload: newTitleText })
                                
                                }
                            >
                                Update title
                            </button>
                        </div>
                    )
                }


                {/* { todo.item + ' ' }  */}
            </span>
            <button onClick={ () => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id }})}> Complete </button>
            {
                todo.complete &&
                <button onClick={ () => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id }})}> Remove Completed </button>
                
            }
        </StyledDiv>
    )
};