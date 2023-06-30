import Accordion from "components/shared/Accordion";
import "./index.css";
import ButtonsPage from "components/pages/ButtonsPage";

const ITEMS_ACCORDION = [
  {
    label: "React",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque exercitationem provident quas molestiae eum, est delectus recusandae dolore voluptates explicabo accusantium quibusdam perferendis, repellendus, aperiam saepe culpa libero itaque eius!",
  },
  {
    label: "Angular",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque exercitationem provident quas molestiae eum, est delectus recusandae dolore voluptates explicabo accusantium quibusdam perferendis, repellendus, aperiam saepe culpa libero itaque eius!",
  },
  {
    label: "Vue",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque exercitationem provident quas molestiae eum, est delectus recusandae dolore voluptates explicabo accusantium quibusdam perferendis, repellendus, aperiam saepe culpa libero itaque eius!",
  },
];

function App() {
  return <Accordion items={ITEMS_ACCORDION} />;
}

export default App;
