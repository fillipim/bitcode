import { IconType } from "react-icons/lib";
import {
  RiHome8Fill,
  RiBookReadFill,
  RiCalendarEventFill,
  RiArticleFill,
} from "react-icons/ri";

export interface IMenu {
  path: string;
  label: string;
  icon: IconType;
}

export const menus: IMenu[] = [
  {
    path: "/dashboard",
    label: "Home",
    icon: RiHome8Fill,
  },
  {
    path: "/cursos",
    label: "Cursos",
    icon: RiBookReadFill,
  },
  // {
  //   path: "/events",
  //   label: "Eventos",
  //   icon: RiCalendarEventFill,
  // },
  // {
  //   path: "/notifications",
  //   label: "Caixa de Entrada",
  //   icon: RiArticleFill,
  // },
];
