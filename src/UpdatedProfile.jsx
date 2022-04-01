import React from "react";
import { Link } from "react-router-dom";

function UpdatedProfile() {
  return (
    <div className="h-screen bg-green-200 flex flex-col justify-center items-center">
      <h1 className="text-8xl text-blue-400"> Your Profile has been Updated</h1>
      <Link to="/lectures" class="text-white font-medium text-2xl mt-4">
        Go back to lectures
      </Link>
    </div>
  );
}
export default UpdatedProfile;
