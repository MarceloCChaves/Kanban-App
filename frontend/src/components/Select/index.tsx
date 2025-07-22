import type { ISelectProps } from "../../interfaces/ISelect";

const Select = ({classname, value, required, children, onchange}: ISelectProps) => {
  return (
    <select
      className={classname}
      value={value} 
      required={required}
      onChange={onchange}
    >
      {children}
    </select>
  )
}

export default Select;