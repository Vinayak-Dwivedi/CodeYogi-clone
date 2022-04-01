import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div class="bg-gray-700 w-72 flex flex-col  h-screen space-y-4 p-4">
      <Link to="/lectures" class="text-white font-bold">
        Lectures
      </Link>
      <Link to="/assignment" class="text-white font-bold">
        Assignment
      </Link>
      <Link to="/quiz" class="text-white font-bold">
        Quiz
      </Link>
      <div class="place-content-end">
        <Link to="/profile" class="text-white font-bold flex  items-end">
          <h1> Profile</h1>
          <img
            class=" h-5 ml-1"
            src="https://img.icons8.com/small/16/000000/user.png"
          />
        </Link>
      </div>
      <Link to="/logout" class="text-white font-bold ">
        Log Out
      </Link>
    </div>
  );
}
export default SideBar;
