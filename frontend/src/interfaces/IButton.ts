import type { MouseEvent } from "react";

export interface IButtonProps {
  classname: string;
  type: "button" | "submit";
  text: string;
  onclick?: (e: MouseEvent<HTMLButtonElement>) => void;
}