import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import ComponentPageLayout from "../pages/component/ComponentPageLayout";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AlertPage from "../pages/component/AlertPage";
import ButtonPage from "../pages/component/ButtonPage";
import Dashboard from "../pages/dashboard/Dashboard";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home",
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Dashboard",
      icon: <DashboardOutlinedIcon />,
    },
  },
  {
    path: "/inputData",
    element: <ComponentPageLayout />,
    state: "inputNode",
    sidebarProps: {
      displayText: "Input Data",
      icon: <AppsOutlinedIcon />,
    },
    child: [
      {
        path: "/inputData/alert",
        element: <AlertPage />,
        state: "inputData.alert",
        sidebarProps: {
          displayText: "Alert",
        },
      },
      {
        path: "/inputData/button",
        element: <ButtonPage />,
        state: "inputData.button",
        sidebarProps: {
          displayText: "Button",
        },
      },
    ],
  },
];

export default appRoutes;
