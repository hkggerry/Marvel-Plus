import React, { useState, useContext } from "react";
import { MemberContext } from "../context/member";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorsList, setErrorsList] = useState([]);
  const { signup } = useContext(MemberContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/signup", {
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
          signup(member);
          navigate("/");
        } else {
          setUsername("");
          setPassword("");
          const errorLis = member.errors.map((e) => <li>{e}</li>);
          setErrorsList(errorLis);
        }
      });
  };
  return (
    <div>
      <h1>Marvel Movies</h1>
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

        <input type="submit" value="create your account" />
      </form>
      <ul>{errorsList}</ul>
    </div>
  );
}

export default Signup;
