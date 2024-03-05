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
    path: "/inputNodes",
    element: <ComponentPageLayout />,
    state: "inputNode",
    sidebarProps: {
      displayText: "Input Node",
      icon: <AppsOutlinedIcon />,
    },
    child: [
      {
        path: "/inputNodes/alert",
        element: <AlertPage />,
        state: "inputNodes.alert",
        sidebarProps: {
          displayText: "Alert",
        },
      },
      {
        path: "/inputNodes/button",
        element: <ButtonPage />,
        state: "inputNodes.button",
        sidebarProps: {
          displayText: "Button",
        },
      },
    ],
  },
];

export default appRoutes;
