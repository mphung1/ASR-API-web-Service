import React from "react";
import SideBar from "../components/Fixed/SideBar";
import { BrowserRouter } from "react-router-dom";
import Content from "../components/APIDocs/Content";

const API_dashboard = () => {
  return (
    <>
      <BrowserRouter>
        <Content />
      </BrowserRouter>
    </>
  );
};

export default API_dashboard;
