import { IconSearch } from "@tabler/icons-react";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const nameRef = useRef("");
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${nameRef.current.value}`);
    nameRef.current.value = "";
  };

  return (
    <form className="flex gap-x-1 sm:gap-x-2">
      <input ref={nameRef} type="text" className="border border-prymary text-sm rounded-lg block pl-5 p-2.5 bg-gray-500/25 w-36 lg:w-96 focus:ring-prymary text-huruf focus:ring-2 focus:outline-none" />
      <button className="p-2.5 text-sm font-medium text-white rounded-lg bg-prymary focus:ring-2 focus:outline-none focus:ring-prymary flex justify-center items-center" onClick={onSubmit}>
        <IconSearch />
      </button>
    </form>
  );
};

export default Searchbar;
