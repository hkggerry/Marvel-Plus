import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/authentication/Login";
import Navbar from "./components/navigation/Navbar";

function App() {
  const [currentMember, setCurrentMember] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const loginMember = (member) => {
    setCurrentMember(member);
    setLoggedIn(true);
  };

  return (
    <div>
      {loggedIn ? <h1>We are logged In!!</h1> : null}
      {/* <Router> */}
      <Navbar />
      {/* <Routes>
          <Route exact path="/login"> */}
      <Login loginMember={loginMember} />
      {/* </Route>
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
