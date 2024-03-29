import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartCustomProvider from "./components/Context/CartContext";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartCustomProvider>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting="PEDIDOS ÚNICAMENTE VÍA WEB" />}
            />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />{" "}
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </CartCustomProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
