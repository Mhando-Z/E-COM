import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage, Aboutuspage, Productspage } from "./Pages/Collection";
import { Contactus, Cartpage, Paypage } from "./Pages/Collection";
import { SearchResults } from "./Pages/Collection";
import { Navbar, Footer } from "./Components/collect";
import { ProductsProvider } from "./Context/ProductsContext";
import { CartProvider } from "./Context/CartsContext";
import { SearchProvider } from "./Context/SearchContext";

function App() {
  return (
    <div className="flex flex-col gap-y-10 h-screen justify-between">
      <ProductsProvider>
        <SearchProvider>
          <CartProvider>
            <BrowserRouter>
              <Navbar cartval={0} />
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/Cartpage" element={<Cartpage />} />
                <Route path="/Productspage/:id" element={<Productspage />} />
                <Route path="/SearchResults" element={<SearchResults />} />
                <Route path="/AboutUs" element={<Aboutuspage />} />
                <Route path="/ContactUs" element={<Contactus />} />
                <Route path="/Paypage/:id" element={<Paypage />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          </CartProvider>
        </SearchProvider>
      </ProductsProvider>
    </div>
  );
}

export default App;
