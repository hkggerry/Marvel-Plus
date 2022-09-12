import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import Home from "./components/Home";
import Navbar from "./components/navigation/Navbar";
import { MemberProvider } from "./components/context/member";
import MovieList from "./components/static/MovieList";
import WatchHistory from "./components/static/WatchHistory";
import RecentlyAdded from "./components/static/RecentlyAdded";

function App() {
  return (
    <div>
      <MemberProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/movielist" element={<MovieList />} />
          <Route exact path="/recentlyadded" element={<RecentlyAdded />} />
          <Route exact path="/watchhistory" element={<WatchHistory />} />
        </Routes>
      </MemberProvider>
    </div>
  );
}

export default App;
