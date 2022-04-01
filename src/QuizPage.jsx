import React from "react";
import { Link } from "react-router-dom";

function QuizPage() {
  return (
    <div class="bg-gray-600 flex  w-full  h-20 items-center ">
      <Link to="/lectures" class="text-white ml-8">
        CodeYogi
      </Link>
      <span class="text-white font-bold ml-2 ">| Welcome Vinayak </span>
      <div class=" fixed top-0 right-0 p-4 flex items-center ">
        <span class="bg-indigo-500 rounded-md p-4">00:00</span>
        <Link
          to="/logout"
          class="bg-indigo-500 text-white rounded-md p-4 mr-4 ml-2"
        >
          Logout
        </Link>
      </div>
    </div>
  );
}
export default QuizPage;
