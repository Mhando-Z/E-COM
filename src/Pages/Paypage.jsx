import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import ProductsContext from "../Context/ProductsContext";

///DRAWER COMPONENT

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Paypage() {
  const { id } = useParams();
  const { data } = useContext(ProductsContext);
  const datax = data.find((dt) => dt.id === id);
  console.log(datax);
  const [open, setOpen] = React.useState(false);
  //dataLoading logic
  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center">
        <h1>Loading...</h1>
      </div>
    );
  }

  //buttons logic
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="bg-gray-300 shadow-xl rounded-xl container mx-auto">
      <div className=" flex md:flex-row p-10 flex-col gap-y-5 justify-center space-x-10 md:justify-evenly">
        <div className="flex flex-col gap-y-5 max-w-md">
          {/* Address */}
          <div className="max-w-md">
            <div className="flex flex-col">
              <h1 className="text-2xl font-semibold">Address infomation</h1>
              <h1 className="text-lg mb-3 tracking-tighter text-justify max-w-md">
                Click, button below to fill out your actual location details, so
                it becomes easy to send you purchased product
              </h1>
              <div className="">
                <Dialog
                  open={open}
                  fullWidth={true}
                  maxWidth={"lg"}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={handleClose}
                  aria-describedby="alert-dialog-slide-description"
                >
                  <div>
                    <h1 className="text-2xl p-2 font-semibold text-center">
                      Add new Address
                    </h1>
                  </div>
                  <DialogContent>
                    <div className="flex flex-col p-10">
                      <div className="flex flex-col gap-y-2 mb-4">
                        <h1 className="text-2xl font-semibold">
                          Country/Region
                        </h1>
                        <select
                          // value={""}
                          // onChange={""}
                          className="bg-gray-200 bg-opacity-85 border border-gray-300 text-black text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option value={""}>Tanzania</option>
                          <option value={""}>Kenya</option>
                          <option value={""}>Uganda</option>
                          <option value={""}>Rwanda</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-y-3 mb-4">
                        <h1 className="text-2xl font-semibold">
                          Personal information
                        </h1>
                        <div className="flex gap-y-3 md:flex-row flex-col items-center gap-x-10 justify-between">
                          <input
                            type="text"
                            className="w-full ring-2 ring-pink-500 p-2 rounded-md"
                            placeholder="Name"
                          />
                          <input
                            type="number"
                            className="w-full ring-2 ring-pink-500 p-2 rounded-md"
                            placeholder="Phone"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-3 mb-4">
                        <h1 className="text-2xl font-semibold">Address</h1>
                        <div className="flex gap-y-3 md:flex-row flex-col items-center gap-x-10 justify-between">
                          <input
                            type="text"
                            className="w-full ring-2 ring-pink-500 p-2 rounded-md"
                            placeholder="Street,House"
                          />
                          <input
                            type="text"
                            className="w-full ring-2 ring-pink-500 p-2 rounded-md"
                            placeholder="Unit(optional)"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-3 mb-4 mt-3">
                        <div className="flex md:flex-row flex-col gap-y-3 gap-x-10 items-center justify-between">
                          <input
                            type="text"
                            className="w-full ring-2 ring-pink-500 p-2 rounded-md"
                            placeholder="Province"
                          />
                          <input
                            type="text"
                            className="w-full ring-2 ring-pink-500 p-2 rounded-md"
                            placeholder="City"
                          />
                          <input
                            type="text"
                            className="w-full ring-2 ring-pink-500 p-2 rounded-md"
                            placeholder="Zip code"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-3 mb-4 ">
                        <div className="flex md:flex-row flex-col items-center gap-x-5">
                          <input
                            type="checkbox"
                            className="ring-2 ring-pink-500 rounded-sm"
                            placeholder="Province"
                          />
                          <h1 className="text-2xl font-semibold">
                            Set as Default Address
                          </h1>
                        </div>
                      </div>
                      <div>
                        <div className="flex md:flex-row flex-col gap-4 items-center justify-normal">
                          <button
                            onClick={handleClose}
                            className="text-xl w-full py-2 px-8 rounded-lg text-white bg-pink-500"
                          >
                            Confirm
                          </button>
                          <button
                            onClick={handleClose}
                            className="text-xl font-semibold w-full py-2 px-8 rounded-lg bg-slate-200 "
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <button
                onClick={handleClickOpen}
                className="text-xl py-2 px-8 bg-pink-500 text-white rounded-lg"
              >
                Adrress
              </button>
            </div>
          </div>
          {/* Payment method */}
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold">Choose Payment methode</h1>
            <div className="mt-2">
              <p className="text-lg ring-2 ring-red-600 rounded-xl p-3 text-red-700 ">
                Sorry at the moment we havent integrated payment method{" "}
              </p>
            </div>
          </div>
          {/* item display */}
          <div className="flex gap-2 md:flex-row items-center flex-col">
            <img src={datax.image.url} alt="postermage" className="h-36" />
            <div className="flex flex-col">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <h1 className="text-2xl font-semibold">{datax.name}</h1>
                <h1 className="text-2xl font-semibold">
                  {datax.price.formatted_with_code}
                </h1>
              </div>
              <h1 className="text-xl line-clamp-4 text-justify tracking-tighter">
                {datax.description}
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex felx-col">
            <div className="flex flex-col gap-y-1">
              <h1 className="text-2xl font-semibold">Summary</h1>
              <h1 className="text-xl font-semibold">Transport-fees: 25,000</h1>
              <h1 className="text-xl font-semibold">
                Item-price: {datax.price.formatted_with_code}
              </h1>
              <h1 className="text-xl font-semibold">
                Total-price: {(datax.price.raw + 25000).toLocaleString()} TZS
              </h1>
              <Link className="py-2 mt-4 font-semibold text-xl px-8 rounded-lg text-center bg-pink-500 text-white font-extralight">
                Buy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Paypage;
