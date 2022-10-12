import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import SignIn from "./components/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />}>
           {/* <Route path="tasks" element={<Inicio />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
