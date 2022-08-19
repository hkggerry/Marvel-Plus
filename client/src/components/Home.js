import React, { useContext } from "react";
import { MemberContext } from "./context/member";

function Home() {
  const { member, loggedIn } = useContext(MemberContext);

  if (loggedIn) {
    return (
      <div>
        <center>
          <h3>{member.username}'s Home Page</h3>
          <img
            src="https://www.thedad.com/wp-content/uploads/2020/09/marvel-characters-real-names.jpg"
            alt="timeline"
            height="300px"
          />
        </center>
      </div>
    );
  } else {
    return <h3>Please Login or Signup</h3>;
  }
}

export default Home;
