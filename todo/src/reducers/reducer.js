const newTodo = item => {
    return { id: Date.now(), item: item, complete: false }
  }

export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo',
    DELETE_ALL: 'delete-all'
  };

export const initialState = [{
    item: 'Learn about reducers',
    complete: false,
    id: Date.now()
}];

export const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
          return [
            ...state, 
            newTodo(action.payload.item)
            ];
        case ACTIONS.TOGGLE_TODO:
            return state.map( todo => {
                if ( todo.id === action.payload.id ){
                    return { ...todo, complete: !todo.complete } // reverses polarity of complete
                }
                return todo;
            })
        case ACTIONS.DELETE_TODO:
            return state.filter( todo => {
                if (todo.complete){
                    return todo.id !== action.payload.id
                }
                return todo;
            })
        case ACTIONS.DELETE_ALL:
            return (
                state.filter( item => item.complete === false)
            )
        default: 
            return state;
    }
}