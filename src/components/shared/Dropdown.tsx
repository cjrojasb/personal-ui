import { DropdownProps } from "interfaces/dropdownProps";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { useState } from "react";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => setIsOpen(!isOpen);

  const handleSelectOption = (value: string) => {
    onChange(value);
    handleOpen();
  };
  return (
    <div className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleOpen}
      >
        {value || "Select..."}
        <span>{isOpen ? <MdExpandLess /> : <MdExpandMore />}</span>
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full">
          {options.map(({ value, label }) => (
            <div
              className="hover:bg-sky-100 rounded cursor-pointer p-2 capitalize"
              onClick={() => handleSelectOption(value)}
              key={value}
            >
              {label}
            </div>
          ))}
        </Panel>
      )}
    </div>
  );
}

export default Dropdown;
