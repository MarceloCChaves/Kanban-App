import type { ChangeEvent } from "react";

export interface ITextareaProps {
  classname: string;
  rows: number;
  value?: string;
  required?: boolean;
  id?: string;
  placeholder: string;
  onchange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}