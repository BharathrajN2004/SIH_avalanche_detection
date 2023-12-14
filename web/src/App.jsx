import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "layouts/basic";
import AuthLayout from "layouts/auth";
const App = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="/*" element={<Layout />} />
    </Routes>
  );
};

export default App;
