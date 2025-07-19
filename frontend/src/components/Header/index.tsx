import { Link } from "react-router-dom";
import Logo from "../../assets/react.svg";
import "./styles.css";

const Header = () => {
  return(
    <header className="header-container">
      <div className="header-content">
        <div className="header-logo">
          <img src={Logo} alt="React-logo" />
        </div>
        <div className="header-button">
           <Link to="/create-task">+ Nova tarefa</Link>
        </div>
      </div>
    </header>
  )
}

export default Header;