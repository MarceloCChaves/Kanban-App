import type { ChangeEvent } from "react";

export interface InputProps {
  classname: string;
  type: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onchange: (value: ChangeEvent<HTMLInputElement>) => void;
}