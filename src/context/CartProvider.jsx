import { useReducer, createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import { actionTypes } from "../actions/cart.actions"
import { cartInitialState, cartReducer } from "../reducers/cart.reducer";
import totalPrice from '../utils/cart.utils';
const CartContext = createContext()

function CartProvider ({children}) {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState);
    const [orderTotal, setOrderTotal] = useState();
    
    
    useEffect(()=>{
        let total = totalPrice(state.cartItems).reduce((a,b) => a + b, 0);
        setOrderTotal(total)
    },[state])

    function addToCart(drink){
        dispatch({type: actionTypes.ADD_TO_CART, payload: drink})
    }

    function removeOneFromCart(idDrink){
        dispatch({type: actionTypes.REMOVE_ONE_FROM_CART, payload: {idDrink}})
    }

    function removeAllFromCart(idDrink){
        dispatch({type: actionTypes.REMOVE_ALL_FROM_CART, payload: {idDrink}})
    }

    function clearCart(){
        dispatch({type: actionTypes.CLEAR_CART})
    }

    function sendOrder(){
        alert(JSON.stringify(state))
    }

    const cartValues = {
        cart: state,
        addToCart,
        removeAllFromCart,
        removeOneFromCart,
        clearCart,
        sendOrder,
        orderTotal
    }

    return (
        <CartContext.Provider value={cartValues}>
            {children}
        </CartContext.Provider>
    )

}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export { CartContext, CartProvider}
