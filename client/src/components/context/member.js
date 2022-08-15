import React, { useState, useEffect } from "react";

const MemberContext = React.createContext();

function MemberProvider({ children }) {
  return <MemberContext.Provider value={{}}>{children}</MemberContext.Provider>;
}

export { MemberContext, MemberProvider };
