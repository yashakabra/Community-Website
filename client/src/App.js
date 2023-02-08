import React from "react";
// import SignUp from "../components/SIgnUp/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddUserDetailForm } from "./components/AddUserDetailForm";
import { EditUserDetailForm } from "./components/EditUserDetailForm";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Messenger />} />
        <Route path="/chat" element={<ChatDialogComplete />} /> */}
        <Route path="/profile/create" element={<AddUserDetailForm />} />
        <Route path="/profile/edit" element={<EditUserDetailForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
