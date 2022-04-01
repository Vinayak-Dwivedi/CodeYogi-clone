import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="h-screen bg-black flex flex-col justify-center items-center space-y-4">
      <h1 class="text-white text-6xl">ERROR - 404</h1>
      <h1 className="text-7xl text-white">Page Cannot be found</h1>
      <Link to="/lectures" class="text-blue-300 font-medium text-2xl mt-4">
        Go back to lectures
      </Link>
    </div>
  );
}
export default NotFound;
