import { createContext, useEffect, useState } from "react";
import { commerce } from "../Lib/commerce";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  //DATA FETCHING FROM API LOGIC
  async function getCart() {
    try {
      setCart(await commerce.cart.retrieve());
    } catch (error) {}
  }
  useEffect(() => {
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
    <CartContext.Provider
      value={{
        cart,
        handleEmpty,
        handleRemoveItem,
        handleQuantityItem,
        handleAddtoCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export default CartContext;
