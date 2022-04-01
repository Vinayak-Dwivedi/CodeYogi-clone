import React from "react";
import LectureList from "./LectureList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AssignmentList from "./AssignmentList";
import MainLayout from "./MainLayout";
import QuizPage from "./QuizPage";
import ProfilePage from "./ProfilePage";
import UpdatedProfile from "./UpdatedProfile";
import NotFound from "./NotFound";
import LogOut from "./LogOut";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="lectures" element={<LectureList />} />
          <Route path="assignment" element={<AssignmentList />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>

        <Route path="/updated" element={<UpdatedProfile />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="quiz" element={<QuizPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
