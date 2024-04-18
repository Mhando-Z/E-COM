import React from "react";
import { useRouteError } from "react-router-dom";

function PageNotFound() {
  const error = useRouteError();
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-300">
        <div className="bg-gray-200 p-20 flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-7">{error.status}</h1>
          <h1 className="text-2xl font-bold">Page {error.statusText}</h1>
          <div className="flex flex-col md:flex-rol">
            <h1 className="text-2xl font-bold">Reasons:</h1>
            <h1 className="text-xl font-semibold">{error.data}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
