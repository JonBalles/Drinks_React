import { useModal } from "../../hooks/useModal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./CartModal.module.css"
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons"
import { useCart } from "../../hooks/useCart"
import { ModalCard } from "./components/Card"

export function CartModal() {
    const { isOpen, toogleModal } = useModal();
    const { cart, clearCart, sendOrder } = useCart()

    if (isOpen) return (
        <div className={styles.modalBg}>
            <div className={styles.modal}>
                <FontAwesomeIcon icon={faXmarkCircle} className={styles.icon} onClick={toogleModal} />
                <h2>Carrito</h2>
                <section className={styles.modalBody}>
                    <div className={styles.modalDrinksListContainer}>
                        {cart.cartItems.length === 0 && (
                            <h3>No hay productos en el carrito</h3>
                        )}
                        {cart.cartItems.map((item) => {
                            <ModalCard key={drink.idDrink} drink={drink} />
                        })}
                    </div>
                    <aside>
                        
                        <p>${drink.price}</p>
                        <div className={styles.btnContainer}>
                            <button onClick={clearCart} className={styles.clearCart}>Vaciar carrito</button>
                            <button onclick={sendOrder} className={styles.confirmOrder}>Confirmar Compra</button>
                        </div>
                    </aside>
                </section>
            </div>
        </div>
    )


}