import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const TextField = ({
  _id,
  _for,
  _type,
  _placeholder,
  _required,
  _labelText,
  _error,
  _disabled,
  _ref,
  onChange = () => {},
  _value,
  _additionalClasses,
  _icon: Icon,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mt-4 relative">
      <label
        htmlFor={_for != null ? _for : _id}
        className="flex justify-start items-start mb-2 text-sm font-medium text-primary"
      >
        {_labelText}
      </label>
      <div className="relative">
        {_type !== "password" ? (
          <input
            type={_type || "text"}
            id={_id}
            className={`bg-[#F7FAFC] border ${
              _error ? "border-red-500" : "border-secondary"
            } text-primary text-sm rounded-lg 
              focus:ring-primary focus:border-primary  p-2.5 pr-10 ${_additionalClasses}`}
            placeholder={_placeholder}
            required={_required != null ? _required : false}
            disabled={_disabled}
            onChange={onChange}
            value={_value}
            ref={_ref}
          />
        ) : (
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id={_id}
              className={`bg-tertiary border ${
                _error ? "border-red-500" : "border-secondary"
              } text-primary text-sm rounded-lg  
                focus:ring-primary focus:border-primary  p-2.5 pr-10  ${_additionalClasses}`}
              placeholder={_placeholder}
              required={_required != null ? _required : false}
              disabled={_disabled}
              onChange={onChange}
              value={_value}
              ref={_ref}
            />
            <button
              type="button"
              className="absolute    inset-y-0 right-0 top-0 bottom-0 px-3 py-2 focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        )}
        {Icon && ( // Render the icon if provided
          <div className="absolute inset-y-0 right-5 flex items-center pl-3 pointer-events-none">
            <Icon />
          </div>
        )}
      </div>
      {_error && <p className="text-sm text-red-500 mt-1">{_error}</p>}
    </div>
  );
};

export default TextField;
