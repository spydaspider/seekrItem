import { createContext, useReducer } from 'react';
export const ClaimsContext = createContext();
const claimsReducer = (state,action) =>{
    switch(action.type)
    {
        case 'SET_CLAIMS':
            return{
                claims: action.payload
            }
        case 'CREATE_CLAIMS':
            return{
                claims: [action.payload, ...state.claims]
            }
        case 'EDIT_CLAIMS':
        
            return{
                       ...state,
                       claims: action.payload
            }
    case 'UPDATE_CLAIMS':
        return{
            ...state,
            claims: action.payload
        }
        case 'DELETE_ITEM':
            return{
                claims: state.claims.filter((claim)=>claim._id !== action.payload._id)
            }
        default:
            return state;
        
    }

}
export const ClaimsContextProvider = ({children}) =>{
    const [ state,dispatch ] = useReducer(claimsReducer,{
        claims: []
    });
      return(
        <ClaimsContext.Provider value = {{...state,dispatch}}>
            {children}
        </ClaimsContext.Provider>
      )
}