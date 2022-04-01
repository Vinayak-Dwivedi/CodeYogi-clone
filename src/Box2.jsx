import React from "react";
import { Link } from "react-router-dom";

function Box2(props) {
  return (
    <>
      <Link to="/quiz">
        <div className="rounded-md shadow-md bg-white flex flex-col   w-2/3 mr-2 h-auto   mt-4 mb-4 ml-36">
          <div class="flex items-start justify-start mt-3">
            <h1 class="ml-2 mr-2 font-bold">#{props.number}</h1>
            <h1 class="font-semibold">{props.title}</h1>
            <h1 class="text-gray-400 ml-2">({props.time})</h1>
          </div>
          <h1 class="text-gray-400 mt-4 ml-2">Due Date : {props.dueDate}</h1>
          <div class="flex mt-6 mb-4">
            <Link
              to="/lectures"
              class="text-green-500 font-medium  mt-4 mx-auto grow-1"
            >
              Submit
            </Link>
            <span class="text-gray-400 mt-3 text-2xl">|</span>
            <Link
              to="/lectures"
              class="text-red-500 font-medium  mt-4 mx-auto grow-1"
            >
              Resubmit
            </Link>
          </div>
        </div>
      </Link>
    </>
  );
}
export default Box2;
