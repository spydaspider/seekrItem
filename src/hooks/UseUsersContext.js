import { useContext } from 'react';
import { UsersContext } from '../context/UsersContext';
export const useUsersContext = () =>{
    const context = useContext(UsersContext);
    if(!context)
    {
        throw Error('UsersContext must be used inside UsersContextProvider');
    }
    return context;
}