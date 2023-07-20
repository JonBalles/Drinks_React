import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

export default function Cart (){
    return useContext(CartContext)
}