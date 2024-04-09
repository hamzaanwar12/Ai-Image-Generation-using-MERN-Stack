import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="mt-[2.3%] flex flex-row items-center w-[100%] justify-between box-border px-[12px] mx-auto">
      <img className="w-[120px]" src={logo} alt="" />
      <Link to="/create-post">
        <button className="text-center w-[125px] rounded h-[40px] bg-blue-700 border-0  border-blue-700 text-white hover:bg-white hover:border-2 hover:text-blue-700 active:bg-blue-700  active:text-white">
          Create
        </button>
      </Link>
    </div>
  );
}
