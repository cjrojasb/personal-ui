import { BUTTON_VARIATIONS } from "../../../constants/buttons";
import { ButtonProps } from "../../../interfaces/buttonProps";
import classNames from "classnames";

function Button({
  rounded,
  outlined,
  variation,
  fullWidth,
  children,
  ...rest
}: ButtonProps) {
  const customClass = classNames(
    rest.className,
    "px-3 py-1.5 border flex items-center",
    BUTTON_VARIATIONS[variation],
    {
      "w-full": fullWidth,
      "rounded-full": rounded,
      "bg-white": outlined,
      "text-white": !outlined,
      "text-blue-500": outlined && variation === "primary",
      "text-gray-500": outlined && variation === "secondary",
      "text-sky-500": outlined && variation === "info",
      "text-green-500": outlined && variation === "success",
      "text-yellow-500": outlined && variation === "warning",
      "text-red-500": outlined && variation === "danger",
    }
  );

  return (
    <button {...rest} className={customClass}>
      {children}
    </button>
  );
}

export default Button;
