import './Styles/Navbar.css'
import ItemListContainer from './Components/ItemListContainer'
import NavBar from './Components/Navbar'
import ItemDetailContainer from './Components/ItemDetailContainer'
import Cart from "./Components/Cart"
import CheckoutForm from "./Components/CheckoutForm"
import {BrowserRouter, Routes, Route} from "react-router"


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/checkout" element={<CheckoutForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
