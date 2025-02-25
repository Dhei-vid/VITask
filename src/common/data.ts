import { IDataCard } from "./types";
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
  ArrowForwardRounded,
} from "@mui/icons-material";

export const plateNumber = [
  {
    id: 1,
    title: "Dashboard",
    Icon: House,
    requests: {
      id: 1,
      title: "Plate Number Requests",
      Icon: FolderCopyRounded,
      dropdown: [
        {
          id: 1,
          title: "Requests",
          Icon: ArrowForwardRounded,
        },
        {
          id: 2,
          title: "Assigned Plate Numbers",
          Icon: ArrowForwardRounded,
        },
      ],
    },
    sales: {
      id: 2,
      title: "Sales",
    },
    reports: {
      id: 3,
      title: "Reports",
    },
  },
];

export const vehiceManagement = [
  {
    id: 1,
    title: "Vehicles",
    Icon: DirectionsCarRounded,
  },
  {
    id: 2,
    title: "Tax Payer",
    Icon: PersonRounded,
  },
  {
    id: 3,
    title: "Renewal",
    Icon: FolderCopyRounded,
  },
  {
    id: 4,
    title: "Reports",
    Icon: ListRounded,
  },
  {
    id: 5,
    title: "Change Request",
    Icon: FolderCopyRounded,
  },
  {
    id: 6,
    title: "Insurance",
    Icon: FolderCopyRounded,
  },
  {
    id: 7,
    title: "Proof of Ownership",
    Icon: FolderCopyRounded,
  },
  {
    id: 8,
    title: "Collections",
    Icon: FolderCopyRounded,
  },
  {
    id: 9,
    title: "Legacy Assessments",
    Icon: RememberMeRounded,
  },
  {
    id: 10,
    title: "Change of Ownership",
    Icon: RememberMeRounded,
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
