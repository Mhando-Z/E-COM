import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CartContext from "../Context/CartsContext";

function Cartpage() {
  const { cart } = useContext(CartContext);
  const { handleEmpty } = useContext(CartContext);
  const { handleRemoveItem } = useContext(CartContext);
  const { handleQuantityItem } = useContext(CartContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!cart) {
      window.location.reload();
      setLoading(true); // Set loading state to true if cart is not yet available
    } else {
      setLoading(false); // Set loading state to false when cart is available
    }
  }, [cart]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-auto">
        <h1>Page Loading...</h1>
      </div>
    );
  }

  if (!cart || cart.length === 0) {
    return (
      <div className="flex justify-center items-center h-auto">
        <h1>Cart is empty.</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col container mx-auto ">
        <table className="table-auto w-full">
          <tbody className="gap-12">
            {cart.line_items.map((data, index) => {
              return (
                <tr
                  className="even:bg-gray-300 odd:bg-gray-200 shadow-lg rounded-xl"
                  key={data.id}
                >
                  <td className="hidden md:flex">
                    <img src={data.image.url} alt="" className="h-32 " />
                  </td>
                  <td className="md:text-2xl text-lg text-center">
                    {data.name}
                  </td>
                  <td className="md:text-2xl text-lg text-center">
                    {data.price.formatted_with_code}
                  </td>
                  <td className="md:text-2xl text-lg text-center items-center">
                    <IconButton
                      aria-label="cart"
                      onClick={() =>
                        handleQuantityItem(data.id, data.quantity + 1)
                      }
                    >
                      <AddIcon sx={{ fontSize: "1.7rem", mr: "7px" }} />
                    </IconButton>
                    {data.quantity}
                    <IconButton
                      aria-label="cart"
                      onClick={() =>
                        handleQuantityItem(data.id, data.quantity - 1)
                      }
                    >
                      <RemoveIcon sx={{ fontSize: "1.7rem", mr: "7px" }} />
                    </IconButton>
                  </td>
                  <td className="text-center">
                    <Link
                      onClick={() => handleRemoveItem(data.id)}
                      className=" rounded-lg text-white font-semibold text-lg md:text-2xl"
                    >
                      <HighlightOffIcon
                        sx={{
                          fontSize: {
                            xs: "1.7rem",
                            sm: "2.3rem",
                            md: "2.8rem",
                          },
                        }}
                        color="error"
                      />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className=" mt-10 flex shadow-lg py-3 flex-row justify-between items-center">
          <h1 className="md:text-2xl text-lg text-center font-semibold">
            Total Items: {cart.total_items}
          </h1>
          <h1 className="md:text-2xl text-lg text-center font-semibold">
            Total Unique Items: {cart.total_unique_items}
          </h1>
          <h1 className="md:text-2xl text-lg text-center font-semibold">
            Total price: {cart.subtotal.formatted_with_code}
          </h1>
        </div>
        <div className="flex mt-10 gap-x-5 flex-row items-center justify-between">
          <button
            onClick={handleEmpty}
            className="py-2 md:px-10 px-5 text-lg rounded-lg text-white font-semibold bg-red-500 md:text-2xl"
          >
            Empty Cart
          </button>
          <button className="py-2 md:px-10 px-5 text-lg rounded-lg text-white font-semibold bg-blue-600 md:text-2xl">
            Make Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cartpage;
