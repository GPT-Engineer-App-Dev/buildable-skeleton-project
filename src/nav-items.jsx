import { Home, Info, Zap } from "lucide-react";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Features from "./pages/Features.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Features",
    to: "/features",
    icon: <Zap className="h-4 w-4" />,
    page: <Features />,
  },
  {
    title: "About",
    to: "/about",
    icon: <Info className="h-4 w-4" />,
    page: <About />,
  },
];
