import React from "react";

export default function FormField({
  labelName,
  name,
  isSupriseMe,
  placeholder,
  value,
  type,
  handleChange,
  handleSupriseMe,
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gapy-y-2">
        <div className="flex">
          <label className="text-md text-black font-semibold" htmlFor="">{labelName}</label>
          {isSupriseMe && (
            <button 
            className="text-center ml-[15px] w-[150px] rounded cursor-pointer  border-2 border-gray-400 text-gray-700  bg-gray-100 hover:bg-gray-700 hover:text-gray-100  active:bg-gray-100  active:text-gray-700 "
            type="button" onClick={handleSupriseMe}>
              Surpise Me
            </button>
          )}
        </div>
      </div>
      <input
        className="outline-0 border px-4 italic border-gray-300/50 h-[1.75rem] bg-slate-50 text-gray-800 italics"
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}
