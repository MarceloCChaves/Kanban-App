import type { InputProps } from "../../interfaces/IInput";

const Input = ({classname, placeholder, required, type, value, onchange}: InputProps) => {
  return (
    <input
      className={classname}
      type={type} 
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onchange}
    />
  )
}

export default Input;