import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage, Aboutuspage, Productspage } from "./Pages/Collection";
import { Contactus, Cartpage, Paypage } from "./Pages/Collection";
import { SearchResults } from "./Pages/Collection";
import { Navbar, Footer } from "./Components/collect";
import { ProductsProvider } from "./Context/ProductsContext";
import { CartProvider } from "./Context/CartsContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <div className="flex dark:bg-gray-900 flex-col gap-y-5 min-h-screen justify-between">
      <ProductsProvider>
        <CartProvider>
          <ThemeProvider theme={darkTheme}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Navbar />}>
                  <Route index element={<Homepage />} />
                  <Route path="/Cartpage" element={<Cartpage />} />
                  <Route path="/Productspage/:id" element={<Productspage />} />
                  <Route
                    path="/SearchResults/:id"
                    element={<SearchResults />}
                  />
                  <Route path="/AboutUs" element={<Aboutuspage />} />
                  <Route path="/ContactUs" element={<Contactus />} />
                  <Route path="/Paypage/:id" element={<Paypage />} />
                </Route>
              </Routes>
              <div>
                <Footer />
              </div>
            </BrowserRouter>
          </ThemeProvider>
        </CartProvider>
      </ProductsProvider>
    </div>
  );
}

export default App;
