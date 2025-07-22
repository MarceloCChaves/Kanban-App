import type { ITextareaProps } from "../../interfaces/ITextarea";

const Textarea = (
  {
    classname,
    placeholder,
    value,
    rows,
    id,
    required,
    onchange }: ITextareaProps) => {
  return (
    <textarea
      className={classname}
      rows={rows}
      id={id}
      required={required}
      value={value}
      placeholder={placeholder}
      onChange={onchange}
    />
  )
}

export default Textarea;