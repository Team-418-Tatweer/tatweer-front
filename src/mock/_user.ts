import { IMAGES_PATHS } from "@/config/images";
import { IUser } from "@/types/User";

export const _user: IUser = {
  name: "John Doe",
  email: "example@example.com",
  image: IMAGES_PATHS.user,
  role: "Business owner",
};
