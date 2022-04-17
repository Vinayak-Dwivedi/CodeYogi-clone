import React from "react";
import LectureList from "./LectureList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AssignmentList from "./AssignmentList";
import MainLayout from "./MainLayout";
import QuizPage from "./QuizPage";
import ProfilePage from "./ProfilePage";
import UpdatedProfile from "./UpdatedProfile";
import LogOut from "./LogOut";

import StudentsList from "./StudentsList";
import AssignmentDetails from "./AssignmentDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="lectures" element={<LectureList />} />
          <Route path="assignments" element={<AssignmentList />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="studentslist" element={<StudentsList />} />
          <Route
            path="assignments/:id/details"
            element={<AssignmentDetails />}
          />
        </Route>

        <Route path="/updated" element={<UpdatedProfile />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="quiz" element={<QuizPage />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
