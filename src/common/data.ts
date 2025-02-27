import { IDataCard, IMenuItems } from "./types";
import {
  ShoppingCart,
  VolunteerActivism,
  BarChart,
  Calculate,
  House,
  DirectionsCarRounded,
  PersonRounded,
  FolderCopyRounded,
  ListRounded,
  RememberMeRounded,
} from "@mui/icons-material";

export const plateNumber = [
  {
    id: 1,
    title: "Dashboard",
    Icon: House,
    dropdown: [
      {
        id: 1,
        title: "Plate Number Requests",
        Icon: FolderCopyRounded,
        dropdown: [
          {
            id: 1,
            title: "Requests",
          },
          {
            id: 2,
            title: "Assigned Plate Numbers",
          },
        ],
      },
      {
        id: 2,
        title: "Sales",
        Icon: FolderCopyRounded,
        dropdown: [
          {
            id: 1,
            title: "Sales Sub",
          },
        ],
      },
      {
        id: 3,
        title: "Reports",
        Icon: ListRounded,
        dropdown: [
          {
            id: 1,
            title: "Reports Sub",
          },
        ],
      },
    ],
  },
];

export const vehiceManagement = [
  {
    id: 1,
    title: "Vehicles",
    Icon: DirectionsCarRounded,
    dropdown: [
      {
        id: 1,
        title: "Vehicles Sub",
        Icon: DirectionsCarRounded,
      },
    ],
  },
  {
    id: 2,
    title: "Tax Payer",
    Icon: PersonRounded,
    dropdown: [
      {
        id: 1,
        title: "Tax Payer Sub",
        Icon: PersonRounded,
      },
    ],
  },
  {
    id: 3,
    title: "Renewal",
    Icon: FolderCopyRounded,
    dropdown: [
      {
        id: 1,
        title: "Renewal Sub",
        Icon: FolderCopyRounded,
      },
    ],
  },
  {
    id: 4,
    title: "Reports",
    Icon: ListRounded,
    dropdown: [
      {
        id: 1,
        title: "Reports Sub",
        Icon: ListRounded,
      },
    ],
  },
  {
    id: 5,
    title: "Change Request",
    Icon: FolderCopyRounded,
    dropdown: [
      {
        id: 1,
        title: "Change Request Sub",
        Icon: FolderCopyRounded,
      },
    ],
  },
  {
    id: 6,
    title: "Insurance",
    Icon: FolderCopyRounded,
    dropdown: [
      {
        id: 1,
        title: "Insurance Sub",
        Icon: FolderCopyRounded,
      },
    ],
  },
  {
    id: 7,
    title: "Proof of Ownership",
    Icon: FolderCopyRounded,
    dropdown: [
      {
        id: 1,
        title: "Proof of Ownership Sub",
        Icon: FolderCopyRounded,
      },
    ],
  },
  {
    id: 8,
    title: "Collections",
    Icon: FolderCopyRounded,
    dropdown: [
      {
        id: 1,
        title: "Collections Sub",
        Icon: FolderCopyRounded,
      },
    ],
  },
  {
    id: 9,
    title: "Legacy Assessments",
    Icon: RememberMeRounded,
    dropdown: [
      {
        id: 1,
        title: "Legacy Assessments Sub",
        Icon: RememberMeRounded,
      },
    ],
  },
  {
    id: 10,
    title: "Change of Ownership",
    Icon: RememberMeRounded,
    dropdown: [
      {
        id: 1,
        title: "Change of Ownership Sub",
        Icon: RememberMeRounded,
      },
    ],
  },
];

export const dataCard: IDataCard[] = [
  {
    id: 1,
    title: "Plate Requests",
    value: 1751,
    Icon: VolunteerActivism,
  },
  {
    id: 2,
    title: "Stock Level",
    value: 1751,
    Icon: ShoppingCart,
  },
  {
    id: 3,
    title: "Plate Number Amount",
    value: 51433750,
    isCurrency: true,
    Icon: ShoppingCart,
  },
  {
    id: 4,
    title: "Total Till  Date",
    value: 83356200,
    isCurrency: true,
    Icon: Calculate,
  },
  {
    id: 5,
    title: "New Plate Sales",
    value: 34943,
    Icon: BarChart,
  },
];

export const menuItems: Array<IMenuItems> = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Login",
    link: "/login",
  },
  {
    id: 3,
    title: "Dashboard",
    link: "/dashboard",
  },
  {
    id: 4,
    title: "Verification",
    link: "/verification",
  },
];
