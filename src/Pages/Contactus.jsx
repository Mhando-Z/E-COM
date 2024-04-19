import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link } from "react-router-dom";

function Contactus() {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center h-auto dark:bg-gray-700 dark:text-gray-200 bg-gray-300 shadow-lg rounded-xl">
        <div className="flex flex-col items-center p-10 gap-y-10">
          <h1 className="text-3xl  font-semibold text-center">
            Click icon below to Reach us
          </h1>
          <Link
            className="animate-bounce duration-700"
            to={"https://wa.me/message/RQ4LDCEJOO2EK1"}
          >
            <WhatsAppIcon sx={{ fontSize: "5rem" }} />
          </Link>
        </div>
        <div className="flex flex-col items-center"></div>
      </div>
    </div>
  );
}

export default Contactus;
