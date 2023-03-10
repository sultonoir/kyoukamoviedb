import { UserAuth } from "../context/AuthContext";
import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { IconUser } from "@tabler/icons-react";
import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";

const User = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate(`/`);
      window.location.reload(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {user ? (
        <div className="">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-2 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                <IconUser aria-hidden="true" />
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
              <Menu.Items className="absolute right-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-latar-kon shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 flex flex-col">
                  <Menu.Item>{() => <h1 className={`capitalize group flex w-full items-center rounded-md px-2 py-1 mt-1 text-sm`}>{user.email}</h1>}</Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to={`/user`} className={`${active ? "bg-hvr text-white" : ""} capitalize group flex w-full items-center rounded-md px-2 py-1 mt-1 text-sm`}>
                        favorite
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {() => (
                      <button onClick={handleLogout} className={`text-white hover:bg-hvr justify-center bg-prymary capitalize group flex w-15 tems-center rounded-md px-2 py-1 mt-1 text-sm`}>
                        Logout
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      ) : (
        <Link to="/Login" className="inline-flex w-full justify-center rounded-md bg-prymary px-2 py-2 text-sm font-medium text-white">
          Sign in
        </Link>
      )}
    </div>
  );
};

export default User;
