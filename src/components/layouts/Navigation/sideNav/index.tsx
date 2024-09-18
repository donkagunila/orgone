import Link from "next/link";
import React from "react";
import { icons } from "lucide-react";

import { usePathname } from "next/navigation";
import Lucide from "@/components/ui/icons/Lucide";

type MenuItem = {
  title: string;
  icon: keyof typeof icons;
  href: string;
  type: "main" | "admin";
};

const SideNav = () => {
  const pathname = usePathname();

  const menuItems: MenuItem[] = [
    {
      title: "Dashboard",
      icon: "LayoutGrid",
      href: "/shop/dashboard",
      type: "main"
    },
    { title: "Pages", icon: "Layers2", href: "/shop/products", type: "main" },
    { title: "Widgets", icon: "LayoutGrid", href: "/widgets", type: "main" },
    {
      title: "Authentication",
      icon: "User",
      href: "/authentication",
      type: "main"
    }
  ];

  const menuItemsApps: MenuItem[] = [
    {
      title: "Projects",
      icon: "Settings",
      href: "/shop/products",
      type: "admin"
    },
    {
      title: "Contacts",
      icon: "Settings",
      href: "/shop/products",
      type: "admin"
    },
    {
      title: "Customers",
      icon: "Settings",
      href: "/shop/products",
      type: "admin"
    },
    {
      title: "File Manager",
      icon: "Settings",
      href: "/shop/products",
      type: "admin"
    },
    {
      title: "Inbox",
      icon: "Settings",
      href: "/shop/products",
      type: "admin"
    },
    {
      title: "Chat",
      icon: "Settings",
      href: "/shop/products",
      type: "admin"
    },
    {
      title: "Calendar",
      icon: "CalendarDays",
      href: "/apps/calendar",
      type: "admin"
    }
  ];

  const isMenuItemActive = (menuItem: MenuItem) => {
    return pathname?.startsWith(menuItem.href);
  };

  return (
    <aside className="bg-white fixed z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-md transition-transform duration-300 border border-blue-100">
      <div className="h-full  overflow-x-hidden overflow-y-auto p-3">
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={item.title}
              className={`menu-item ${isMenuItemActive(item) ? "active" : ""}`}
            >
              <Link
                href={item.href}
                className="h-full w-full flex items-center"
              >
                <Lucide name={item.icon} className="h-4 w-4 mr-3" />
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="border-b border-slate-200 mx-3 mt-3"></div>
        <div className="capitalize text-xs px-3 mt-2 text-slate-400">Apps</div>

        <ul>
          {menuItemsApps.map((item, index) => (
            <li
              key={item.title}
              className={`menu-item ${isMenuItemActive(item) ? "active" : ""}`}
            >
              <Link
                href={item.href}
                className="h-full w-full flex items-center"
              >
                <Lucide name={item.icon} className="h-4 w-4 mr-3" />
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* <ul>
          <li className="px-4 py-4 overflow-hidden rounded-md bg-primary text-white text-sm font-normal mt-2">
            <Link
              href={"/shop/products"}
              className="h-full w-full flex items-center"
            >
              <Lucide name="Settings" className="h-4 w-4 mr-3" />
              Administration
            </Link>
          </li>
        </ul> */}
      </div>
    </aside>
  );
};

export default SideNav;
