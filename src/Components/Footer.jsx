import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Footer() {
  return (
    <div className=" bg-gray-400 bg-opacity-35  p-10">
      <div className="container mx-auto flex md:flex-row gap-y-5 flex-col justify-between">
        <div className="text-center md:text-left">
          <h1 className="text-lg font-semibold">E-COM</h1>
        </div>
        <div className="flex flex-row items-center justify-evenly">
          <FacebookIcon />
          <InstagramIcon />
          <WhatsAppIcon />
        </div>
      </div>
    </div>
  );
}

export default Footer;
