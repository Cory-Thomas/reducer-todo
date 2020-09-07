import React from 'react';
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
    }
`;

export default function Todo({ todo, dispatch }) {
    return(
        <StyledDiv>
            <span 
                style={{ textDecorationLine: todo.complete ? 
                    'line-through' 
                    : null }} 
            >
                { todo.item + ' ' } 
            </span>
            <button onClick={ () => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id }})}> Complete </button>
            {
                todo.complete &&
                <button onClick={ () => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id }})}> Remove Completed </button>
                
            }
        </StyledDiv>
    )
};