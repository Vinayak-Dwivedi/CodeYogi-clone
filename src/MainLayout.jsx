import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div class="h-screen sticky inset-x-0 top-0 left-0 item-stretch flex">
      <SideBar />
      <div class="bg-gray-300 px-10 py-14 grow">
        <Outlet />
      </div>
    </div>
  );
}
export default MainLayout;
