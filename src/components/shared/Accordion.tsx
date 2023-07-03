import useExpanded from 'hooks/useExpanded';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';

export interface AccordionProps {
  items: any[];
}

function Accordion({ items }: AccordionProps) {
  const { expanded, isExpanded, handleExpand } = useExpanded();

  const renderedItems = items.map(({ label, content }, index) => (
    <div key={`${label}_${index}`}>
      <div
        onClick={() => handleExpand(index)}
        className='p-3 bg-gray-200 border-b cursor-pointer justify-between'
      >
        {label}
        <span>{isExpanded(index) ? <MdExpandLess /> : <MdExpandMore />}</span>
      </div>
      {isExpanded(index) && <div className='p-3 transition-all'>{content}</div>}
    </div>
  ));

  return <div>{renderedItems}</div>;
}

export default Accordion;
