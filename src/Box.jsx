import React from "react";
import { Link } from "react-router-dom";

function Box(props) {
  return (
    <>
      <Link to="/assignment">
        <div className="rounded-md shadow-md bg-white flex flex-col  w-2/3 mr-2   h-auto inline-flex  mt-4 mb-4 ml-36">
          <div class="flex items-start justify-start">
            <h1 class="ml-2 mr-2 font-bold">#{props.number}</h1>
            <h1>{props.title}</h1>
            <h1 class="text-gray-400 ml-2">({props.time})</h1>
          </div>
          <ul className={"ml-3 mt-2 font-semibold "}>
            <li>{props.topic1}</li>
            <li>{props.topic2}</li>
            <li>{props.topic3}</li>
            <li>{props.topic4}</li>
            <li>{props.topic5}</li>
            <li>{props.topic6}</li>
            <li>{props.topic7}</li>
            <li>{props.topic8}</li>
          </ul>

          <Link
            to="/lectures"
            class="text-gray-500 font-medium flex  mt-4 mb-4 mx-auto justify-center items-center "
          >
            <img
              class="h-4 mr-2"
              src="https://img.icons8.com/external-kmg-design-outline-color-kmg-design/32/000000/external-download-arrows-kmg-design-outline-color-kmg-design.png"
            />
            <h1>Watch/Download Recording</h1>
          </Link>
        </div>
      </Link>
    </>
  );
}
export default Box;
