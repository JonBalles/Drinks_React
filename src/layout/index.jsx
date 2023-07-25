import Header from "../components/Header"
import Footer from "../components/Footer"
import { Container } from "react-bootstrap"
import CartModal from "../components/CartModal"
import PropTypes from "prop-types";

export default function LayOut({children}) {
    return (
        <>
    <Header />
        <Container>
         {children}
        </Container>
        <CartModal />
    <Footer />
        </>
    )
}

LayOut.propTypes = {
    children: PropTypes.node.isRequired,
}