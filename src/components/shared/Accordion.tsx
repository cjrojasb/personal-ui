import useExpanded from "hooks/useExpanded";

export interface AccordionProps {
  items: any[];
}

function Accordion({ items }: AccordionProps) {
  const { expanded, setExpanded } = useExpanded();

  const renderedItems = items.map(({ label, content }, index) => (
    <div key={`${label}_${index}`}>
      <div onClick={() => setExpanded(index)}>{label}</div>
      {expanded === index && <div>{content}</div>}
    </div>
  ));

  return <div>{renderedItems}</div>;
}

export default Accordion;
