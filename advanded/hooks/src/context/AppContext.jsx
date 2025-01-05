import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
  const phone = "91+ 9619497131"; // This should be a string
  const name = "globoStack"; // This should also be a string

  return (
    <AppContext.Provider value={{ phone, name }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
