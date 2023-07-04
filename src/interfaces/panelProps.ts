import { ComponentPropsWithoutRef } from "react";

export interface PanelProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}
