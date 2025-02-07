import { createContext, useContext } from "react";
import { IUserContext, IUserContextValue } from "./type";

export const UserContext = createContext<IUserContextValue | null>(null);
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
