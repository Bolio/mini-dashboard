import { useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";

function App() {
  const useToken = useSelector((state) => state.token);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        {/* {useToken && <Route path="/dashboard" element={<Dashboard />} />} */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
