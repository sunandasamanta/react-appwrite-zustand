import { Switch } from "@headlessui/react";
import { Link, useLocation } from "react-router";
import useThemeStore from "../store/themeStore";

export default function Navbar() {
  const { isDarkModeEnabled, toggleTheme } = useThemeStore();
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Profile", path: "/profile" },
    { name: "Auth", path: "/auth" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
              Logo
            </Link>
          </div>
          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`${location.pathname === item.path
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    } px-3 py-2 rounded-md text-sm font-medium`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          {/* Dark Mode Toggle */}
          <div className="flex items-center">
            <Switch
              checked={isDarkModeEnabled}
              onChange={toggleTheme}
              className="group cursor-pointer relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors duration-200 ease-in-out dark:bg-gray-600"
            >
              <span className="size-4 translate-x-1 transform rounded-full bg-white transition duration-200 ease-in-out group-data-checked:translate-x-6" />
            </Switch>
          </div>
        </div>
      </div>
    </nav>
  );
}
