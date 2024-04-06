import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage, Aboutuspage } from "./Pages/Collection";
import { Contactus, Cartpage, Paypage } from "./Pages/Collection";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";
import { commerce } from "./Lib/commerce";

function App() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  //FETCHING DATA FROM COMMERCE API
  async function getProducts() {
    try {
      const { data } = await commerce.products.list();
      setData(data);
    } catch (error) {}
  }

  async function getCart() {
    try {
      setCart(await commerce.cart.retrieve());
    } catch (error) {}
  }
  useEffect(() => {
    getProducts();
    getCart();
  }, []);

  //BUTTONs FUNCTIONALITY
  const handleAddtoCart = async (productId, quantity) => {
    try {
      const { cart } = await commerce.cart.add(productId, quantity);
      setCart(cart);
    } catch (error) {}
  };
  const handleQuantityItem = async (productId, quantity) => {
    try {
      const { cart } = await commerce.cart.update(productId, { quantity });
      setCart(cart);
      window.location.reload();
    } catch (error) {}
  };
  const handleRemoveItem = async (productId) => {
    try {
      const { cart } = await commerce.cart.remove(productId);
      setCart(cart);
      window.location.reload();
    } catch (error) {}
  };
  const handleEmpty = async () => {
    try {
      const { cart } = await commerce.cart.empty();
      setCart(cart);
      window.location.reload();
    } catch (error) {}
  };

  return (
    <div className="flex flex-col gap-y-10 h-screen justify-between">
      <BrowserRouter>
        <Navbar cartval={0} />
        <Routes>
          <Route
            path="/"
            element={<Homepage data={data} handleCart={handleAddtoCart} />}
          />
          <Route
            path="/Cartpage"
            element={
              <Cartpage
                cart={cart}
                handleQuantityItem={handleQuantityItem}
                handleEmpty={handleEmpty}
                handleRemoveItem={handleRemoveItem}
              />
            }
          />
          <Route path="/AboutUs" element={<Aboutuspage />} />
          <Route path="/ContactUs" element={<Contactus />} />
          <Route path="/Paypage/:id" element={<Paypage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
