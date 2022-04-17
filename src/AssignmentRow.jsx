import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import axios from "axios";

function AssignmentRow({ assignment }) {
  const [showpopup, serPopup] = useState(false);
  const [submissionLink, setSubmissionLink] = useState("");

  const navigate = useNavigate();

  const submitAssignment = () => {
    axios.put(
      ` https://api.codeyogi.io/${assignment.id}/submit`,
      { submissionLink: submissionLink },
      { withCredentials: true }
    );
  };

  const submit = () => {
    serPopup(true);
  };

  return (
    <>
      <div>
        <div className="rounded-md shadow-md bg-white flex flex-col   w-2/3 mr-2 h-auto   mt-4 mb-4 ml-36">
          <div
            onClick={() => navigate(`/assignments/${assignment.id}/details`)}
            class="flex items-start justify-start mt-3 flex-col space-y-2 ml-4 "
          >
            <div class="flex">
              <h1 class="ml-2 mr-2 font-bold">#{assignment.id}</h1>
              <h1 class="font-semibold">{assignment.title}</h1>
              <h1 class="text-gray-400 ml-2">{assignment.created_at}</h1>
            </div>
            <h1 class="text-gray-400 ml-2">{assignment.due_date}</h1>
          </div>

          <div class="flex mt-6 mb-4">
            <button
              onClick={submit}
              class="text-green-500 font-medium  mt-4 mx-auto grow-1"
            >
              Submit
            </button>
            <span class="text-gray-400 mt-3 text-2xl">|</span>
            <Link
              to="/lectures"
              class="text-red-500 font-medium  mt-4 mx-auto grow-1"
            >
              Resubmit
            </Link>
          </div>
        </div>
      </div>
      {showpopup && (
        <div class="bg-white rounded-md  flex flex-col w-1/2 h-48 p-4 space-y-6   ">
          <div class="flex mt-4 border-y items-center py-4">
            <h1 class="text-gray-400 ml-2 mr-2  ">Submission Link</h1>
            <input
              value={submissionLink}
              type="text"
              class="  ml-4 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none form-control
        block
        w-96
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300  rounded-md "
              placeholder="Submission Link "
            />
          </div>
          <button
            onClick={submitAssignment}
            className="text-white bg-indigo-700 rounded-md py-2 px-6 w-40"
          >
            Submit
          </button>
        </div>
      )}
    </>
  );
}
export default AssignmentRow;
