import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Form from "./pages/Form"
import Edit from "./pages/editUser";
import ViewUser from "./pages/viewUser";

const UserRouter = () => {
  return (
    <BrowserRouter>
      <div className="container p-2 bg-light">
        <Routes>
          <Route path="/" element={<App />} />

          <Route path="/addUser" element={<Form />} />

          <Route path="/viewUser/:id" element={<ViewUser />} />

          <Route path="/editUser/:id" element={<Edit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default UserRouter;
