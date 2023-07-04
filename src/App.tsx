import Accordion from "components/shared/Accordion";
import "./index.css";
import ButtonsPage from "components/pages/ButtonsPage";
import AccordionPage from "components/pages/AccordionPage";
import DropdownPage from "components/pages/DropdownPage";
import Divider from "components/shared/Divider";

function App() {
  return (
    <div className="p-3 flex flex-col gap-5">
      <ButtonsPage />
      <Divider />
      <AccordionPage />
      <Divider />
      <DropdownPage />
    </div>
  );
}

export default App;
