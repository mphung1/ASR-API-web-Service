import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "../components/APIDocs/Layout";

const API_dashboard = () => {
  return (
    <>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </>
  );
};

export default API_dashboard;
