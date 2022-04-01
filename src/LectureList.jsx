import React from "react";
import Box from "./Box";

function LectureList() {
  return (
    <div>
      <h1 class="font-bold text-2xl ml-4 mb-4">Lectures List</h1>
      <div className=" bg-gray-200 flex flex-col p-10  ">
        <Box
          time="24 thu 2022 "
          number="5"
          topic1="How to use images in React app."
          topic2="A bit about Vite"
          topic3="A bit about just in time (JIT) in Tailwind"
          topic4="Background images with Tailwind"
          topic5="Named and default exports"
        ></Box>
        <Box
          time="23 wed 2022 "
          number="4"
          topic1="Git"
          topic2="How to deploy on Netlify"
        ></Box>
        <Box
          time="22 tues 2022 "
          number="3"
          topic1="How routing works in React app."
          topic2="How websites work on internet. i.e. things like domain, IP address, hosting, servers etc."
          topic3="JavaScript"
        ></Box>
        <Box
          time="21 Mon 2022 "
          number="2"
          topic1="React router"
          topic2="Child routes"
          topic3="Revision of array desctucturing"
        ></Box>
        <Box
          time="19 sat 2022 "
          number="1"
          topic1="one page website vs multi page website vs Single page app (SPA)"
          topic2="JSON.stringify and JSON.parse"
          topic3="localStorage"
          topic4="Absolute path, relative path, dot and double dot in paths"
          topic5="How to setup multiple pages in a SPA using ReactRouter"
        ></Box>
      </div>
    </div>
  );
}

export default LectureList;
