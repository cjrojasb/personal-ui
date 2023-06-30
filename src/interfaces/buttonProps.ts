import { ComponentPropsWithoutRef } from "react";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  rounded?: boolean;
  outlined?: boolean;
  variation: VariationType;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export type VariationType =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "danger";
