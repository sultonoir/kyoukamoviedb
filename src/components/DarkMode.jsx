import { Menu, Transition } from "@headlessui/react";
import { IconPalette } from "@tabler/icons-react";
import { Fragment, useEffect, useState } from "react";

export default function DarkMode() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "");

  const menuTheme = [
    { title: "dark", className: "" },
    { title: "light", className: "light" },
    { title: "dracula", className: "dracula" },
    { title: "lemon", className: "lemon" },
    { title: "kawaii", className: "kawaii" },
    { title: "smoke", className: "smoke" },
  ];

  const toggleTheme = (className) => {
    setTheme(className);
    document.body.classList = className;
    localStorage.setItem("theme", className);
  };
  useEffect(() => {
    document.body.classList = theme;
  }, [theme]);

  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-2 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <IconPalette aria-hidden="true" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-24 origin-top-right divide-y divide-gray-100 rounded-md bg-latar-kon shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              {menuTheme.map(({ title, className }) => (
                <Menu.Item key={title}>
                  {({ active }) => (
                    <button className={`${active ? "bg-hvr text-white" : ""} capitalize group flex w-full items-center rounded-md px-2 py-1 mt-1 text-sm ${theme === className ? "ac" : ""}`} onClick={() => toggleTheme(className)}>
                      {title}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
