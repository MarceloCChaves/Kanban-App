import type { IButtonProps } from "../../interfaces/IButton";

const Button = ({ classname, text, type, onclick }: IButtonProps) => {
  return (
    <button
      className={classname}
      type={type}
      onClick={onclick}
    >
      {text}
    </button>
  )
}

export default Button;