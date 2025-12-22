import { useContext } from 'react';
import { ItemsContext } from '../context/ItemsContext';
export const useItemsContext = () =>{
    const context = useContext(ItemsContext);
    if(!context)
    {
        throw Error('ItemsContext must be used inside ItemsContextProvider');
    }
    return context;
}