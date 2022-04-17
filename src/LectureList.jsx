import axios from "axios";
import React, { useState, useEffect } from "react";

import LectureRow from "./LectureRow";

function LectureList() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const token = axios.get(`https://api.codeyogi.io/batches/1/sessions`, {
      withCredentials: true,
    });

    token.then((response) => {
      setSessions(response.data);
      console.log("response");
    });
  }, []);

  return (
    <div>
      <h1 class="font-bold text-2xl ml-4 mb-4">Lectures List</h1>
      <div className=" bg-gray-200 flex flex-col p-10  ">
        {sessions.map((s) => (
          <LectureRow lecture={s} key={s.id} />
        ))}
      </div>
    </div>
  );
}

export default LectureList;
