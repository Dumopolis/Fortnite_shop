import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
export const ShopContext = createContext();

const initialState = {
    goods: '',
    loading: true,
    order: JSON.parse(localStorage.getItem('order')) || [],
    isBasketShow: false,
    isThanksShow: false,  
    isBurgerShow: false, 
}
export const ContextProvider = ({ children }) => {
    const [value, dispatch] = useReducer(reducer, initialState)
    
    value.handleBasket = () => {
        dispatch({type:'HANDLE_BASKET'})
    }
    value.addToBasket = (item) => {
        dispatch({type:'ADD_TO_BASKET', payload:item})
    }
    value.decreaseQuantityItem = (item) => {
        dispatch({type:'DECREASE_QUANTITY_ITEM', payload:item})
    }
    value.removeFromBasket = (itemId) => {
        dispatch({type:'REMOVE_FROM_BASKET', payload: itemId})
    }
    value.handleBuyNow = () => {
        dispatch({type:'HANDLE_BUY_NOW'})
    }
    value.setGoods = (data) =>{
        dispatch({type: 'SET_GOODS', payload:data})
    }
    
    return <ShopContext.Provider value={ value }>
        {children}
    </ShopContext.Provider>

}