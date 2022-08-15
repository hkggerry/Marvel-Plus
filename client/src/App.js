import React from "react";
import { Routes, Route } from "react-router-dom";
// import Login from "./components/authentication/Login";
import Navbar from "./components/navigation/Navbar";
import Home from "./components/Home";
import { MemberProvider } from "./components/context/member";

function App() {
  return (
    <div>
      <MemberProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </MemberProvider>
    </div>
  );
}

export default App;
