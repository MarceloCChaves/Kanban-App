import { Link } from "react-router-dom";
import type { IAnchorButtonProps } from "../../interfaces/AnchorButton";

const AnchorButton = ({ classname, children, to }: IAnchorButtonProps) => {
  return (
    <Link
      className={classname}
      to={to}
    >
      {children}
    </Link>
  )
}

export default AnchorButton;