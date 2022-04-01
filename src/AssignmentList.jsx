import React from "react";
import Box2 from "./Box2";

function AssignmentList() {
  return (
    <div>
      <h1 class="font-bold text-2xl ml-4 mb-4">Assignment List</h1>
      <div className=" bg-gray-200 flex  flex-col">
        <Box2
          title="Deploy Code Yogi app clone on Netlify"
          time="24 thu 2022"
          dueDate="wed March 30 2022"
          number="5"
        ></Box2>
        <Box2
          title="Create your First Full responsive webpage"
          time="22 tues 2022"
          dueDate="wed March 30 2022"
          number="4"
        ></Box2>
        <Box2
          title="Create TeamCard using TailwindCSS"
          time="21 Mon 2022"
          dueDate="wed March 30 2022"
          number="3"
        ></Box2>
        <Box2
          title="Create Supoort Card using TailwindCSS"
          time="21 Mon 2022"
          dueDate="wed March 30 2022"
          number="2"
        ></Box2>
        <Box2
          title="Practice responsive design"
          time="20 Sun 2022"
          dueDate="wed March 30 2022"
          number="1"
        ></Box2>
      </div>
    </div>
  );
}

export default AssignmentList;
