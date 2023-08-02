import AccordionPage from "components/pages/AccordionPage";
import ButtonsPage from "components/pages/ButtonsPage";
import DropdownPage from "components/pages/DropdownPage";
import ModalPage from "components/pages/ModalPage";
import TablePage from "components/pages/TablePage";
import CounterPage from "components/pages/CounterPage";
import InputPage from "components/pages/InputPage"

export const ROUTES = [
  {
    label: "Button",
    path: "button",
    element: <ButtonsPage />,
  },
  {
    label: "Accordion",
    path: "accordion",
    element: <AccordionPage />,
  },
  {
    label: "Dropdown",
    path: "dropdown",
    element: <DropdownPage />,
  },
  {
    label: "Modal",
    path: "modal",
    element: <ModalPage />,
  },
  {
    label: "Table",
    path: "table",
    element: <TablePage />,
  },
  {
    label: "Counter",
    path: "counter",
    element: <CounterPage initialCount={10} />,
  },
  {
    label: "Input",
    path: "input",
    element: <InputPage />,
  },
];
