"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./context";
import { _user } from "@/mock/_user";
import { IUserContext } from "./type";
export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<IUserContext>(null);

  useEffect(() => {
    // Fetch user data
    setUser(_user);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
  );
}
