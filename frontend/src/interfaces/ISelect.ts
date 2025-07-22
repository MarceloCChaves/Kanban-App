import type { ChangeEvent, ReactNode } from "react";

export interface ISelectProps {
  classname: string;
  value: string;
  required?: boolean;
  children: ReactNode;
  onchange: (e: ChangeEvent<HTMLSelectElement>) => void;
}