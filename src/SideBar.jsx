import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div class="bg-gray-700 w-72 flex flex-col py-4  h-screen  p-4">
      <h1 className="text-white font-bold text-2xl mt-3 mb-3">CODE YOGI</h1>
      <Link
        to="/lectures"
        class="text-white font-bold hover:bg-gray-600 flex mt-4"
      >
        <img
          class="h-5 mr-2"
          src="https://img.icons8.com/ios-glyphs/30/000000/podium-with-audience.png"
        />
        <h1>Lectures</h1>
      </Link>
      <Link
        to="/assignments"
        class="text-white font-bold hover:bg-gray-600 mt-4 flex"
      >
        <img
          class="h-5 mr-2"
          src="https://img.icons8.com/ios-filled/50/000000/assignment-return.png"
        />
        <h1> Assignment</h1>
      </Link>
      <Link to="/quiz" class="text-white font-bold hover:bg-gray-600 flex mt-4">
        <img
          class="h-5 mr-2"
          src="https://img.icons8.com/ios-filled/50/000000/quiz.png"
        />
        <h1> Quiz</h1>
      </Link>
      <Link
        to="/studentslist"
        class="text-white font-bold hover:bg-gray-600 flex mt-4"
      >
        <img
          class="h-5 mr-2"
          src="https://img.icons8.com/ios-glyphs/30/000000/student-center.png"
        />
        Students List
      </Link>
      <div class=" mt-4 ">
        <div class="place-content-end">
          <Link
            to="/profile"
            class="text-white font-bold flex  items-end hover:bg-gray-600"
          >
            <img
              class=" h-5 mr-2"
              src="https://img.icons8.com/small/16/000000/user.png"
            />
            <h1> Profile</h1>
          </Link>
        </div>
        <Link
          to="/logout"
          class="text-white font-bold hover:bg-gray-600 flex mt-4"
        >
          <img
            class="h-5 mr-2"
            src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/32/000000/external-log-out-user-interface-kmg-design-glyph-kmg-design.png"
          />

          <h1>Log Out</h1>
        </Link>
      </div>
    </div>
  );
}
export default SideBar;
