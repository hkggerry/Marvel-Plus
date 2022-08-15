import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     const strongParams = {
  //       member: {
  //         username,
  //         password,
  //       },
  //     };
  //     fetch("http://localhost:3000/members", {
  //       method: "POST",
  //       headers: {
  //         // Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(strongParams),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         loginMember(data.mebmer);
  //         localStorage.getItem("token", data.token);
  //       });
  //   };
  return (
    <div>
      <h1>Marvel Movies</h1>
      <form>
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
            type="text"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <input type="submit" value="login" />
      </form>
    </div>
  );
}

export default Login;
