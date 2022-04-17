import MDEditor from "@uiw/react-md-editor";
import React from "react";
import { Link } from "react-router-dom";

function LectureRow({ lecture }) {
  return (
    <>
      <Link to="/assignment">
        <div className="rounded-md shadow-md bg-white flex flex-col  w-2/3 mr-2  py-9 h-auto  inline-flex  mt-4 mb-4 ml-36">
          <div class="flex items-start justify-start">
            <h1 class="ml-2 mr-2 font-bold">#{lecture.id}</h1>
            <h1 class="text-gray-400 ml-2">({lecture.start_time})</h1>
          </div>
          <MDEditor.Markdown
            className="markdown font-bold ml-3 mt-2"
            source={lecture.topic}
          />
          <a
            href="recording_url"
            class="text-gray-500 font-medium flex   mt-12 mb-1 mx-auto justify-center items-center "
          >
            <img
              class="h-4 mr-2"
              src="https://img.icons8.com/external-kmg-design-outline-color-kmg-design/32/000000/external-download-arrows-kmg-design-outline-color-kmg-design.png"
            />
            <h1>Watch/Download Recording</h1>
          </a>
        </div>
      </Link>
    </>
  );
}
export default LectureRow;
