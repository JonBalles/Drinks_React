import Header from "../components/Header"
import Footer from "../components/Footer"
import { Container } from "react-bootstrap"

export default function LayOut({children}) {
    return (
        <>
    <Header />
        <Container>
         {children}
        </Container>
    <Footer />
        </>
    )
}