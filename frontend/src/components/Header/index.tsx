import { Link } from "react-router-dom";
import Logo from "../../assets/react.svg";
import "./styles.css";

const Header = () => {
  return(
    <header className="header-container">
      <div className="header-content">
        <div className="header-title">
          <h2>Kanban App</h2>
        </div>
        <Link className="header-logo" to="/">
          <img src={Logo} alt="React-logo" />
        </Link>
      </div>
    </header>
  )
}

export default Header;