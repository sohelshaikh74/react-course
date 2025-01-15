import { createContext } from "react";

export const AppContent = createContext();

const ContentProvider = ({ children }) => {
  const phone = "91+ 9619497131";
  return <AppContent.Provider value={phone}>{children}</AppContent.Provider>;
};
export default ContentProvider;
