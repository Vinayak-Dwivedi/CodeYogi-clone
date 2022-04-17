import { Link, useParams } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import { useEffect, useState } from "react";

function AssignmentDetails() {
  const data = useParams();

  return (
    <div className="rounded-md shadow-md bg-white flex flex-col    h-auto   mt-4 mb-4 ml-36">
      <h1 className="font-semibold ">Assignment Details</h1>
      <div class="flex items-start justify-start mt-3 flex-col space-y-2 ml-4">
        <div class="flex">
          <h1 class="ml-2 mr-2 font-bold text-xl">
            Assignment Number : {data.id}
          </h1>
          <h1 class="font-semibold">Title: {data.title}</h1>
        </div>
        <MDEditor.Markdown source={data.description} />
      </div>
    </div>
  );
}
export default AssignmentDetails;
