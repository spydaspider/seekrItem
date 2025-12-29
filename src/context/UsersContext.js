import { createContext, useReducer } from 'react';
export const UsersContext = createContext();
const usersReducer = (state,action) =>{
    switch(action.type)
    {
        case 'SET_USERS':
            return{
                users: action.payload
            }
        case 'CREATE_USERS':
            return{
                users: [action.payload, ...state.users]
            }
        case 'EDIT_USERS':
        
            return{
                       ...state,
                       users: action.payload
            }
    case 'UPDATE_USERS':
        return{
            ...state,
            users: action.payload
        }
        case 'DELETE_USER':
            return{
                users: state.users.filter((user)=>user._id !== action.payload._id)
            }
        default:
            return state;
        
    }

}
export const UsersContextProvider = ({children}) =>{
    const [ state,dispatch ] = useReducer(usersReducer,{
        users: []
    });
      return(
        <UsersContext.Provider value = {{...state,dispatch}}>
            {children}
        </UsersContext.Provider>
      )
}