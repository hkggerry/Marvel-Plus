import React, { useContext } from "react";
import { MemberContext } from "./context/member";
import MovieCards from "./MovieCards";

function Home() {
  const { member, loggedIn } = useContext(MemberContext);

  const getMovies = () => {
    fetch("/movies", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((r) => r.json())
      .then((movies) => console.log(movies));
  };

  if (loggedIn) {
    return (
      <div>
        <h3>{member.username}'s Home Page</h3>
        <MovieCards />
      </div>
    );
  } else {
    return <h3>Please Login or Signup</h3>;
  }
}

export default Home;
