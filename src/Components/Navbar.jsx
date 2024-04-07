import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartContext from "../Context/CartsContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <div className="sticky top-0">
      <div className="bg-gray-300 sticky top-0 md:p-5 p-3 md:mb-16 mb-3 shadow-xl mt-5 flex container mx-auto items-center justify-between">
        <div className="">
          <Link className="" to={"/"}>
            <h1 className="uppercase md:text-2xl text-xl font-bold">E-com</h1>
          </Link>
        </div>
        <div className="md:flex hidden items-center gap-x-10 justify-between">
          <Link
            className="text-2xl hover:underline duration-1000 hover:scale-y-110 hover:underline-offset-8 decoration-pink-600"
            to={"/"}
          >
            Home
          </Link>
          <Link
            className="text-2xl hover:underline duration-1000 hover:scale-y-110 hover:underline-offset-8 decoration-pink-600"
            to={`/AboutUs`}
          >
            About Us
          </Link>
          <Link
            className="text-2xl hover:underline duration-1000 hover:scale-y-110 hover:underline-offset-8 decoration-pink-600"
            to={`/ContactUs`}
          >
            Contact Us
          </Link>
        </div>
        <div className="hidden lg:flex">
          <Link to={"/Cartpage"}>
            <IconButton aria-label="cart">
              <Badge badgeContent={cart.total_items} color="primary">
                <ShoppingCartIcon sx={{ fontSize: "2.2rem", mr: "7px" }} />
              </Badge>
            </IconButton>
          </Link>
        </div>
        {/* For smalll screen */}
        <div className="lg:hidden flex">
          <Link to={"/Cartpage"}>
            <IconButton aria-label="cart">
              <Badge badgeContent={cart.total_items} color="primary">
                <ShoppingCartIcon sx={{ fontSize: "1.7rem", mr: "7px" }} />
              </Badge>
            </IconButton>
          </Link>
        </div>
        <div className="md:hidden block">
          <MenuIcon />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
