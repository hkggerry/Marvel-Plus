import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import Navbar from "./components/navigation/Navbar";
import Home from "./components/Home";
import { MemberProvider } from "./components/context/member";
import MovieList from "./components/static/MovieList";
import TvShowsList from "./components/static/TvShowsList";
import WatchHistory from "./components/static/WatchHistory";

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
          <Route exact path="/tvshowslist" element={<TvShowsList />} />
          <Route exact path="/watchhistory" element={<WatchHistory />} />
        </Routes>
      </MemberProvider>
    </div>
  );
}

export default App;
