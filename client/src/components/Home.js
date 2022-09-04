import React, { useContext } from "react";
import { MemberContext } from "./context/member";

function Home() {
  const { member, loggedIn } = useContext(MemberContext);

  if (loggedIn) {
    return (
      <div>
        <center>
          <h3>
            WATCH MOVIES&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;LEAVE
            REVIEWS&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;ENJOY
          </h3>
          <img
            src="https://www.thedad.com/wp-content/uploads/2020/09/marvel-characters-real-names.jpg"
            alt="timeline"
            height="300px"
          />
          <p>
            Ever since I have started Flatiron School, I spend majority of my
            time on breaks watching Marvel movies.
          </p>
          <p>
            This project is dedicated to thank Marvel for keeping me sane
            throughout the course!
          </p>
          <h3>
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -{" "}
          </h3>
          <h3>{member.username}'s Home Page</h3>
        </center>
      </div>
    );
  } else {
    return (
      <center>
        <h3>Please Login or Signup</h3>
      </center>
    );
  }
}

export default Home;
