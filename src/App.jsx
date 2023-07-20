import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartProvider"
import { CategoriesProvider } from "./context/CategoriesProvider"
import { DrinksProvider } from "./context/DrinksProvider"
import { ModalProvider } from "./context/ModalProvider"
import { AuthProvider } from "./context/AuthProvider"
import MainLayout from "./layout"
import AppRoutes from "./routes"

function App() {

  return (
    <Routes>
    <Route>
    <AuthProvider>
    <ModalProvider>
      <CartProvider>
        <MainLayout>
          <DrinksProvider>
            <CategoriesProvider>
              <AppRoutes />
            </CategoriesProvider>
          </DrinksProvider>
        </MainLayout>
      </CartProvider>
    </ModalProvider>
    </AuthProvider>
    </Route>
    </Routes>
  )
}

export default App
