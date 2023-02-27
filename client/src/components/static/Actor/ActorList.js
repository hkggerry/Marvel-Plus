import React, { useEffect, useState } from "react";
import ActorCard from "./ActorCard";

function ActorList() {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetch("/actors")
      .then((resp) => resp.json())
      .then((actors) => setCast(actors));
  }, []);

  useEffect(() => {
    fetch("/movies")
      .then((res) => res.json())
      .then((movies) => console.log(movies.name));
  }, []);
  const actorData = cast.map((eachActor) => {
    return <ActorCard key={eachActor.id} actor={eachActor} />;
  });

  return <div className="container">{actorData}</div>;
}

export default ActorList;
