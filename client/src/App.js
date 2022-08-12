import React from "react";

function App() {
  return (
    <div className="App">
      <header>HELLO WORLD</header>
      <form>
        <div>
          <label for="username">Username:</label>
          <input type="text" name="username" id="username" />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="text" name="password" id="password" />
        </div>

        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default App;
