import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/authentication/Login";
import Navbar from "./components/navigation/Navbar";

function App() {
  return (
    <div>
      {/* <Router> */}
      <Navbar />
      {/* <Routes>
          <Route exact path="/login"> */}
      <Login />
      {/* </Route>
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
