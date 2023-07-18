import classNames from "classnames";
import { PanelProps } from "interfaces/panelProps";

function Panel({ children, ...rest }: PanelProps) {
  const customClassName = classNames(
    rest.className,
    "border rounded p-3 shadow bg-white w-full"
  );

  return (
    <div {...rest} className={customClassName}>
      {children}
    </div>
  );
}

export default Panel;
