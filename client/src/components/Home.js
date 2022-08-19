import React, { useContext, useEffect, useState } from "react";
import { MemberContext } from "./context/member";
import MovieCards from "./MovieCards";

function Home() {
  const [movie, setMovie] = useState([]);
  const { member, loggedIn } = useContext(MemberContext);

  useEffect(() => {
    fetch("/movies", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((r) => r.json())
      .then((movies) => setMovie(movies));
  }, []);

  const movieData = movie.map((eachMovie) => {
    return <MovieCards key={eachMovie.id} movie={eachMovie} />;
  });

  if (loggedIn) {
    return (
      <div>
        <h3>{member.username}'s Home Page</h3>
        {movieData}
      </div>
    );
  } else {
    return <h3>Please Login or Signup</h3>;
  }
}

export default Home;
