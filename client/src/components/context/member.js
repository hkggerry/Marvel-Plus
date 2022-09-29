import React, { useState, useEffect } from "react";
const MemberContext = React.createContext();

function MemberProvider({ children }) {
  const [member, setMember] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    fetch("/me")
      .then((res) => res.json())
      .then((data) => {
        setMember(data);
        data.error ? setLoggedIn(false) : setLoggedIn(true);
      });
  }, []);

  const login = (member) => {
    setMember(member);
    setLoggedIn(true);
  };

  const logout = () => {
    setMember({});
    setLoggedIn(false);
  };
  const signup = (member) => {
    setMember(member);
    setLoggedIn(true);
  };

  return (
    <MemberContext.Provider value={{ member, login, logout, signup, loggedIn }}>
      {children}
    </MemberContext.Provider>
  );
}

export { MemberContext, MemberProvider };
