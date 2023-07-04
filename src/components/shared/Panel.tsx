import classNames from "classnames";
import { PanelProps } from "interfaces/panelProps";

function Panel({ children, ...rest }: PanelProps) {
  const customClassName = classNames(
    "border rounded p-3 shadow bg-white w-full",
    rest.className
  );

  return (
    <div {...rest} className={customClassName}>
      {children}
    </div>
  );
}

export default Panel;
