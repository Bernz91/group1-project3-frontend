import React, { useContext, useState } from "react";

// create context
const AdminContext = React.createContext();

// provide context
function AdminContextProvider({ children }) {
  const [admin, setAdmin] = useState();
  const value = { admin, setAdmin };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
}

// use context
function useAdminContext() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error("useAdminContext must be used within AdminContextProvider");
  }
  return context;
}

export { AdminContextProvider, useAdminContext };
