import React from "react";
import { Link } from "react-router-dom";

function LogOut() {
  return (
    <div className="h-screen bg-gray-600 flex flex-col justify-center items-center">
      <h1 className="text-7xl text-white font-bold"> Logged Out</h1>
      <h1 class="text-white font-semibold text-xl mt-10 mb-2">
        Login by clicking the button below
      </h1>
      <Link
        to="/lectures"
        class="text-white bg-indigo-500 px-8 py-4 rounded-md font-medium text-2xl mt-4 font-bold"
      >
        Log In
      </Link>
    </div>
  );
}
export default LogOut;
