import React from "react";
import { Onboarding } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Signup } from "./components";
import Protected from "./services/Protected";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Protected />}>
          <Route path="/" element={<Onboarding />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
