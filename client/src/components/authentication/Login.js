import React, { useState, useContext } from "react";
import { MemberContext } from "../context/member";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorsList2, setErrorsList2] = useState([]);
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
        if (!member.error) {
          login(member);
          navigate("/");
        } else {
          setUsername("");
          setPassword("");
          console.log(member.error);
          const errorLis = member.error;
          setErrorsList2(errorLis);
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
        <ul>{errorsList2}</ul>
      </center>
    </div>
  );
}

export default Login;
