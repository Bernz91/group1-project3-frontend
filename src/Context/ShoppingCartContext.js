import React, { useContext, useState } from "react";

// create context
const ShoppingCartContext = React.createContext();

// provide context
function ShoppingCartContextProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState();
  const value = { shoppingCart, setShoppingCart };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

// use context
function useShoppingCartContext() {
  const context = useContext(ShoppingCartContext);
  if (context === undefined) {
    throw new Error(
      "useShoppingCartContext must be used within ShoppingCartContextProvider"
    );
  }
  return context;
}

export { ShoppingCartContextProvider, useShoppingCartContext };
