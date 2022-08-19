import React, { useContext } from "react";
import { MemberContext } from "../context/member";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const { member, logout, loggedIn } = useContext(MemberContext);
  const navigate = useNavigate();

  const logoutMember = () => {
    fetch("/logout", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      logout();
      navigate("/");
    });
  };

  if (loggedIn) {
    return (
      <div>
        <h1>Marvel Movies</h1>
        <h3>Welcome back {member.username}!</h3>
        <button onClick={logoutMember}>Logout</button>
        <hr />
      </div>
    );
  } else {
    return (
      <div>
        <NavLink to="/login">
          <button>Login</button>
        </NavLink>
        <NavLink to="/signup">
          <button>Signup</button>
        </NavLink>
        <hr />
      </div>
    );
  }
}
export default Navbar;
