import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword((prev) => !prev);
  };

  return (
    <div className="w-full flex items-center border border-gray-300 rounded-lg px-4 py-2 mb-5 focus-within:ring-2 focus-within:ring-blue-400 transition">
      <input
        value={value}
        onChange={onChange}
        type={isShowPassword ? "text" : "password"}
        placeholder={placeholder || "Password"}
        className="w-full bg-transparent outline-none"
      />

      {isShowPassword ? (
        <FaRegEye
          size={20}
          className="ml-3 text-slate-500 cursor-pointer hover:text-gray-700"
          onClick={toggleShowPassword}
        />
      ) : (
        <FaRegEyeSlash
          size={22}
          className="ml-3 text-slate-400 cursor-pointer hover:text-gray-600"
          onClick={toggleShowPassword}
        />
      )}
    </div>
  );
};

export default PasswordInput;
