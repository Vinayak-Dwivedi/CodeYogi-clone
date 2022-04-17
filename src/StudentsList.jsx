import React, { useEffect, useState } from "react";
import StudentCard from "./StudentCard";
import axios from "axios";

function StudentsList() {
  let [users, setUser] = useState([]);

  useEffect(() => {
    const token = axios.get(`https://randomuser.me/api/?results=5`);

    token.then((response) => {
      setUser(response.data.results);
      console.log("response");
    });
  }, []);

  return (
    <div class=" bg-slate-400 p-4 max-w-screen-lg mx-auto">
      <div class="flex flex-wrap ">
        {users.map((u) => (
          <StudentCard user={u} />
        ))}

        <span class="w-80 shrink-0"></span>
        <span class="w-80 shrink-0"></span>
      </div>
    </div>
  );
}
export default StudentsList;
