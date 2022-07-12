import React from "react";
import { IconType } from "react-icons";
import { FiCompass, FiArrowDownLeft, FiKey } from "react-icons/fi";
import { Link, Outlet } from "react-router-dom";

interface LinkItemProps {
  name: string;
  icon: IconType;
  path: string;
}
const LinkItems: Array<LinkItemProps> = [
  {
    name: "Core Resources",
    icon: FiCompass,
    path: "/API_Dashboard",
  },
  { name: "Plugin", icon: FiKey, path: "/API_Dashboard/Plugin" },
];

function Layout() {
  return (
    <>
      <nav>
        <ul>
          {LinkItems.map((link) => (
            <li>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default Layout;
