import { DROPDOWN_OPTIONS } from "constants/dropdowns";
import { useState } from "react";
import Dropdown from "components/shared/Dropdown";

function DropdownPage() {
  const [selection, setSelection] = useState<string | null>(null);

  const handleSelect = (value: string) => setSelection(value);

  return (
    <Dropdown
      options={DROPDOWN_OPTIONS}
      value={selection}
      onChange={handleSelect}
    />
  );
}

export default DropdownPage;
