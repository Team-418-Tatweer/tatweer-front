import { IconType } from "react-icons";

export interface INavItem {
  title: string;
  Icon?: React.ReactElement;
  path?: string;
  childs?: INavItem[];
}
