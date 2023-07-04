import { Link } from "react-router-dom";

function Sidebar() {
  const links = [
    { label: "Dropdown", path: "dropdown" },
    { label: "Accordion", path: "accordion" },
    { label: "Button", path: "button" },
  ];

  const renderedLinks = links.map(({ label, path }) => (
    <Link key={label} to={path}>
      {label}{" "}
    </Link>
  ));

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col gap-2 bg-slate-200 h-screen col-span-1 p-3">
      {renderedLinks}
    </div>
  );
}

export default Sidebar;
