import { useContext } from 'react';
import { ClaimsContext } from '../context/ClaimsContext';
export const useClaimsContext = () =>{
    const context = useContext(ClaimsContext);
    if(!context)
    {
        throw Error('ClaimsContext must be used inside ClaimsContextProvider');
    }
    return context;
}