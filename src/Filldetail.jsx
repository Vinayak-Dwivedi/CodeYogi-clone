import React from "react";

function Filldetail(props) {
  return (
    <div class=" flex flex-row mt-2 mb-2 items-center">
      <div class="font-bold px-10 absolute text-gray-400">{props.children}</div>
      <div class="ml-96 mt-2 ">
        <input
          class="bg-gray-200 rounded-md w-96  py-2"
          placeholder={props.placeholder}
        ></input>
      </div>
    </div>
  );
}

export default Filldetail;
