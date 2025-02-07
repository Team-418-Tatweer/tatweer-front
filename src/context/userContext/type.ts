import { IUser } from "@/types/User";

export type IUserContext = IUser | null;
export interface IUserContextValue {
  user: IUserContext;
  setUser: (user: IUserContext) => void;
}
export type UserContextType = IUserContextValue | undefined;
