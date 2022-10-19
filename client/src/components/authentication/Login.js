import React, { useState, useContext } from "react";
import { MemberContext } from "../context/member";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(MemberContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((member) => {
        if (!member.errors) {
          login(member);
          navigate("/");
        } else {
          setUsername("");
          setPassword("");
        }
      });
  }
  return (
    <div>
      <center>
        <h1>Marvel+</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <input type="submit" value="login" />
        </form>
        <h3>Welcome to my Phase 4 Project </h3>
        <p>
          This project has offically proved that there are still infinite things
          I have yet to learn and master.
        </p>
        <p>
          Even though this project caused so much headaches, it has also
          highlighted my weaknesses.
        </p>
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        <p>I have worked very hard on this project</p>
        <h4>\(◕ ◡ ◕)/</h4>
        <p>Enjoy~</p>
      </center>
    </div>
  );
}

export default Login;
