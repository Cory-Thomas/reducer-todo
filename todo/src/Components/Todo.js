import React from 'react';
import { ACTIONS } from '../reducers/reducer';

export default function Todo({ todo, dispatch }) {
    return(
        <div>
            <span 
                style={{ textDecorationLine: todo.complete ? 
                    'line-through' 
                    : null }} 
            >
                { todo.item } 
            </span>
            <button onClick={ () => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id }})}> Completed </button>
            <button onClick={ () => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id }})}> Remove Completed </button>
        </div>
    )
};