import classNames from "classnames";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const links = [
    { label: "Dropdown", path: "dropdown" },
    { label: "Accordion", path: "accordion" },
    { label: "Button", path: "button" },
  ];

  const customClass = (isActive: boolean) =>
    classNames("text-blue-500 ps-2 h-9 flex items-center", {
      "font-bold": isActive,
      "border-l-4 border-l-blue-500": isActive,
    });

  const renderedLinks = links.map(({ label, path }) => (
    <NavLink
      key={label}
      to={path}
      className={({ isActive }) => customClass(isActive)}
    >
      {label}{" "}
    </NavLink>
  ));

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col gap-2 bg-slate-200 h-screen col-span-1 p-3 items-start">
      {renderedLinks}
    </div>
  );
}

export default Sidebar;
