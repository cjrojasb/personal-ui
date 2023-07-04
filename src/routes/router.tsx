import { createBrowserRouter } from "react-router-dom";
import AccordionPage from "components/pages/AccordionPage";
import ButtonsPage from "components/pages/ButtonsPage";
import DropdownPage from "components/pages/DropdownPage";
import ErrorPage from "components/pages/ErrorPage";
import Root from "components/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "button",
        element: <ButtonsPage />,
      },
      {
        path: "accordion",
        element: <AccordionPage />,
      },
      {
        path: "dropdown",
        element: <DropdownPage />,
      },
    ],
  },
]);

export default router;
