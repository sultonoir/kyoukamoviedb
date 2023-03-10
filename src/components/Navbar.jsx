import { IconDeviceTv, IconHeartFilled, IconHome, IconMovie, IconUser } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import DarkMode from "./DarkMode";
import Searchbar from "./Searchbar";
import User from "./User";
import { UserAuth } from "../context/AuthContext";

const menu = [
  { title: "Home", path: "/", icon: <IconHome aria-hidden="true" /> },
  { title: "Tv", path: "/Tv", icon: <IconDeviceTv aria-hidden="true" /> },
  { title: "Movies", path: "/Movie", icon: <IconMovie aria-hidden="true" /> },
];

const Navbar = () => {
  const { user } = UserAuth();
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavbar(window.scrollY >= 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`fixed flex justify-between p-2 h-14 w-full z-20 ${navbar ? "bg-navbar backdrop-blur-sm" : ""}`}>
        <NavLink to="/" className="md:hidden text-white px-2 py-1 rounded-lg bg-prymary font-jak text-2xl flex items-center">
          K
        </NavLink>
        <div className="hidden md:flex items-center gap-x-2">
          <NavLink to="/" onClick={() => window.scrollTo(0, 0)} className="text-white px-2 py-1 rounded-lg bg-prymary font-jak text-2xl">
            KyOuka
          </NavLink>
          {menu.map((item) => (
            <NavLink onClick={() => window.scrollTo(0, 0)} key={item.path} to={item.path} className="hover:bg-hvr hover:text-white py-1 px-3 rounded-lg">
              {item.title}
            </NavLink>
          ))}
          {user && (
            <NavLink className={`px-2 py-1 rounded-lg`} to={`/User`}>
              Favorite
            </NavLink>
          )}
        </div>
        <div className="flex gap-x-1">
          <Searchbar />
          <DarkMode />
          <User />
        </div>
      </nav>
      <div className="md:hidden fixed bottom-0 z-20 flex justify-between right-0 left-0 h-14 items-center bg-navbar backdrop-blur-sm pr-2">
        {menu.map((item) => (
          <NavLink key={item.path} to={item.path} className="hover:bg-hvr hover:text-white py-2 px-2 text-lg rounded-lg mx-2" title={item.title}>
            {item.icon}
          </NavLink>
        ))}
        {user && (
          <NavLink to={`/User`} className="px-2 py-2 rounded-lg">
            <IconHeartFilled />
          </NavLink>
        )}
      </div>
    </>
  );
};

export default Navbar;
