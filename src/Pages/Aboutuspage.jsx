import React from "react";

function Aboutuspage() {
  return (
    <div className="container dark:text-gray-200 mx-auto justify-center">
      <div className="flex flex-col">
        <h1 className="text-4xl p-4 font-semibold mb-4 text-center md:text-left">
          About Us
        </h1>
        <div className="flex flex-col gap-y-5 justify-between">
          <div className="p-5  dark:bg-gray-700 bg-slate-300 shadow-md rounded-xl">
            <h1 className="md:text-3xl dark:text-black mb-2 text-2xl font-semibold uppercase bg-gradient-to-r from-gray-400 p-2 via-transparent to-transparent">
              Introduction
            </h1>
            <h2 className="text-2xl text-justify md:tracking-normal tracking-tighter">
              Welcome to E-COM, your one-stop online shop for affordable goodies
              straight from China! At E-COM, we believe that quality products
              shouldn't break the bank. That's why we've scoured China to bring
              you an exciting range of items at prices that won't leave your
              wallet feeling light.
            </h2>
          </div>
          <div className="p-5  dark:bg-gray-700 bg-slate-300 shadow-md rounded-xl">
            <h1 className="md:text-3xl dark:text-black text-2xl mb-2 uppercase font-semibold bg-gradient-to-r from-gray-400 p-2 via-transparent to-transparent">
              Mission
            </h1>
            <h2 className="text-2xl text-justify md:tracking-normal tracking-tighter ">
              Our mission is simple: to make shopping for the things you love
              easy and accessible. Whether you're after trendy fashion finds,
              cutting-edge gadgets, or practical everyday essentials, we've got
              something for everyone. And the best part? We deliver straight to
              your door, zooming your purchases to you via airplane for speedy
              arrival. With Naima, you can shop with confidence, knowing that
              you're getting great value without compromising on quality.
            </h2>
          </div>
          <div className="p-5  dark:bg-gray-700 bg-slate-300 shadow-md rounded-xl ">
            <h2 className="text-2xl text-justify md:tracking-normal tracking-tighter">
              Our user-friendly website makes browsing and ordering a breeze, so
              you can spend less time shopping and more time enjoying your new
              purchases. Join the Naima family today and experience the joy of
              affordable online shopping, delivered right to your doorstep.
              Happy shopping!
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutuspage;
