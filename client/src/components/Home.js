import React, { useContext } from "react";
import { MemberContext } from "./context/member";

function Home() {
  const { member, loggedIn } = useContext(MemberContext);

  if (loggedIn) {
    return (
      <div>
        <h3>{member.username}'s Home Page</h3>
      </div>
    );
  } else {
    return <h3>Please Login or Signup</h3>;
  }
}

export default Home;
