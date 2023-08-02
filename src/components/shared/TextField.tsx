import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";

const INPUTS_VARIANT = {
  standard: {
    label:
      "text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
    input:
      "py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
  },
  filled: {
    label:
      "text-black duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4",
    input:
      "rounded-t px-2.5 pb-2.5 pt-5 text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
  },
  outlined: {
    label:
      "text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1",
    input:
      "px-2.5 pb-2.5 pt-4 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
  },
};

export interface TextFieldProps extends ComponentPropsWithoutRef<"input"> {
  variant?: "standard" | "filled" | "outlined";
  helperText?: string;
  label?: string;
  fullWidth?: boolean;
  endAdornment?: JSX.Element;
}

function TextField({
  variant = "standard",
  fullWidth = false,
  helperText = "",
  label = "",
  endAdornment,
  ...rest
}: TextFieldProps) {
  const inputClasses = classNames(
    rest.className,
    "block",
    INPUTS_VARIANT[variant].input,
    {
      "w-full": fullWidth,
    }
  );
  const labelClasses = classNames(
    "absolute text-sm",
    INPUTS_VARIANT[variant].label
  );

  return (
    <div>
      <div className="relative">
        <input className={inputClasses} {...rest} placeholder=" " />
        <label className={labelClasses}>{label}</label>
      </div>
      <p
        id="floating_helper_text"
        className="mt-2 ml-3 text-xs text-gray-500 dark:text-gray-400"
      >
        {helperText}
      </p>
    </div>
  );
}

export default TextField;
