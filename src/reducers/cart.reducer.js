import { actionTypes } from "../actions/cart.actions";

export const cartInitialState = {
    cartItems: [],
}

export function cartReducer (state, {payload = {} , type}){
    const {idDrink} = payload;
 
    let drinksInCart = state.cartItems.find((item) => item.idDrink === idDrink)
    
    switch (type) {
         case actionTypes.ADD_TO_CART:
             if(drinksInCart){
                let cartItemsUpdated = state.cartItems.map((item) => {
                    
                })
                 state.cartItems.forEach(item => {
                     if(item.idDrink === idDrink){
                         item.quantity = item.quantity +1;
                     }
                 })
                 return state;
             }else {
             payload.quantity = 1
             return {
                 ...state,
                 cartItems: [...state.cartItems, payload]
             }
         }
         case actionTypes.REMOVE_ONE_FROM_CART:
             if(drinksInCart.quantity > 1){
                let cartItemsUpdated= state.cartItems.map((item) =>{
                    if(item.idDrink === idDrink){
                        return{
                            ...state,
                            cartItems: cartItemsUpdated
                        }
                    }
                })
 
         }else {
            let cartItemsUpdated = state.cartItems.filter( (item) =>
                item.idDrink !== idDrink
            )
            return{
                ...state,
                cartItems: cartItemsUpdated
            }
         }
         case actionTypes.REMOVE_ALL_FROM_CART:
            if(drinksInCart){

            }
         
         
         case CLEAR_CART:
             return {
                 ...state,
                 cartItems: []
             }
     }
 } 