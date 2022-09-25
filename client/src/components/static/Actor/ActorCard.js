import React from "react";
import ActorMovie from "./ActorMovie";

function ActorCard({ actor }) {
  const movieData = actor.movies.map((eachMovie) => {
    return <ActorMovie key={eachMovie.id} movie={eachMovie} />;
  });
  return (
    <center>
      <div className="actor">
        <img src={actor.image_url} alt={actor.name} height="300px" />
        <strong>{actor.name}</strong>
        <br />
        {movieData}
      </div>
    </center>
  );
}

export default ActorCard;
