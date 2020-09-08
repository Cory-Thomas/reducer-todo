const newTodo = item => {
    return { id: Date.now(), item: item, complete: false }
  }

export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo',
    DELETE_ALL: 'delete-all',
    UPDATE_EDIT: 'update-edit',
    UPDATE_ITEM: 'update-item'
  };

export const initialState = [
    {
        item: 'Learn about reducers ',
        complete: false,
        id: Date.now(), 
        edit: false
    },
    {
        item: 'Clean room ',
        complete: false,
        id: Date.now() + 1,
        edit: false
    },
];

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
        case ACTIONS.UPDATE_EDIT:
            return state.map( todo => {
                if ( todo.id === action.payload.id ){
                    return { ...todo, edit: !todo.edit } // reverses polarity of complete
                }
                return todo;
            })

        case ACTIONS.UPDATE_ITEM:
            return state.map( todo => {
                if ( todo.id === action.payload.id ){
                    return { ...todo, item: action.textPayload, edit: false } // reverses polarity of complete
                }
                return todo;
            })
        default: 
            return state;
    }
}