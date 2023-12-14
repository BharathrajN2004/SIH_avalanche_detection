import React from "react";

// Admin Imports
import Home from "views/home";
import Alert from "views/alert";
import MonitorAI from "views/monitor_ai";
import Network from "views/network";

import { AiFillHome } from "react-icons/ai";
import { HiMiniHome } from "react-icons/hi2";
import { MdCrisisAlert } from "react-icons/md";
import { BsStars } from "react-icons/bs";
// network
import { FaCircleNodes } from "react-icons/fa6";
import { GiMeshNetwork } from "react-icons/gi";
import { SiFurrynetwork } from "react-icons/si";
import { TbTopologyStarRing3 } from "react-icons/tb";

const routes = [
  {
    name: "Home",
    path: "home",
    icon: <HiMiniHome className="h-6 w-6" />,
    component: <Home />,
  },
  {
    name: "Alert",
    path: "alert",
    icon: <MdCrisisAlert className="h-6 w-6" />,
    component: <Alert />,
    secondary: true,
  },
  {
    name: "Monitor AI",
    icon: <BsStars className="h-6 w-6" />,
    path: "monitor-ai",
    component: <MonitorAI />,
  },
  {
    name: "Network",
    path: "network",
    icon: <GiMeshNetwork className="h-6 w-6" />,
    component: <Network />,
  },
];
export default routes;
