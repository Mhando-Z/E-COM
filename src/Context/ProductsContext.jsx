import { createContext, useEffect, useState } from "react";
import { commerce } from "./../Lib/commerce";

const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [data, setData] = useState([]);

  ///FFETCHING OF DATA FROM COMMERCE API LOGIC
  async function getProducts() {
    try {
      const { data } = await commerce.products.list();
      setData(data);
    } catch (error) {}
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <ProductsContext.Provider value={{ data }}>
      {children}
    </ProductsContext.Provider>
  );
}
export default ProductsContext;
