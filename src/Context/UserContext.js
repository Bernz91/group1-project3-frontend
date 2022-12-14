import React, { useContext, useState } from "react";

// create context
const UserContext = React.createContext();

// provide context
function UserContextProvider({ children }) {
  const [userDetails, setUserDetails] = useState();
  const value = { userDetails, setUserDetails };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

// use context
function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within UserContextProvider");
  }
  return context;
}

export { UserContextProvider, useUserContext };
