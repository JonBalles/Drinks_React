import PropTypes from "prop-types"
import styles from "./Card.module.css"
import {useCart} from "../../../../hooks/useCart"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

export function ModalCard ({drink}) {
    const {removeAllFromCart, removeOneFromCart, addToCart} = useCart()
    return (
        <article className={styles.card}>
                                <img src={drink.strDrinkThumb}/>
                                <span>Nombre</span>
                                <span>{drink.price}</span>
                                <div className={styles.counter}>
                                    <button onClick={() => removeOneFromCart(drink.idDrink)}>
                                        -
                                    </button>
                                    <span>{drink.quantity}</span>
                                    <button onClick={() => addToCart(drink)}>
                                        +
                                    </button>
                                </div>
                            <FontAwesomeIcon icon={faTrash} onClick={() => removeAllFromCart(drink.idDrink)} className={styles.iconTrash}/>
                            </article>
    )
}

ModalCard.PropTypes = {
    drink: PropTypes.object.isRequired
}