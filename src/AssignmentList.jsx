import React, { useEffect, useState } from "react";
import AssignmentRow from "./AssignmentRow";
import axios from "axios";

function AssignmentList() {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const token = axios.get(`https://api.codeyogi.io/batches/1/assignments`, {
      withCredentials: true,
    });

    token.then((response) => {
      setAssignments(response.data);
      console.log("response");
    });
  }, []);

  return (
    <div>
      <h1 class="font-bold text-2xl ml-4 mb-4">Assignment List</h1>
      <div className=" bg-gray-200 flex  flex-col">
        {assignments.map((a) => (
          <AssignmentRow assignment={a} key={a.id} />
        ))}
      </div>
    </div>
  );
}

export default AssignmentList;
