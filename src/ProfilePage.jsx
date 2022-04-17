import React from "react";
import Filldetail from "./Filldetail";
import { Link } from "react-router-dom";

function ProfilePage(props) {
  return (
    <div class="bg-white flex flex-col divide-y divide-blue-200 h-full">
      <div>
        <h1 class=" mb-4 font-medium text-2xl mt-4 ml-8 ">Personal Details</h1>
      </div>
      <div class="flex flex-col divide-y divide-blue-200 py-4 ">
        <Filldetail>First Name</Filldetail>
        <Filldetail>Second Name</Filldetail>
        <Filldetail>institute name</Filldetail>
        <Filldetail>E-Mail address</Filldetail>
        <Filldetail>phone number</Filldetail>
        <Filldetail placeholder="DOB">Date of Birth</Filldetail>

        <Filldetail>Branch</Filldetail>
      </div>
      <Link
        to="/updated"
        class="text-white bg-indigo-500 px-4 py-2 w-32 rounded-md flex items-center ml-4 mt-4 mb-2 "
      >
        Update
      </Link>
    </div>
  );
}

export default ProfilePage;
