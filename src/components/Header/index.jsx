import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./Header.module.css"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import  useModal  from "../../hooks/useModal"
import useAuth from "../../hooks/useAuth"

export default function Header  () {
    const {toogleModal} = useModal()
    const {currentUser, logout} = useAuth();
    
    return (
        <header className={`py-5 ${styles.header}`}>
        <h1>Buscador de Bebidas</h1>
        {currentUser && <>
            <p>{currentUser.name}</p>
            <br/>
            <FontAwesomeIcon icon={faCartShopping} className={styles.icon} onClick={() => toogleModal()}/>
            <br/>
            <button onClick={logout}>Cerrar sesion</button>
            </>
        }
        </header>
    )
}