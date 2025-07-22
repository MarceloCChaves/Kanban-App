import Logo from "../../assets/react.svg";
import "./styles.css";
import AnchorButton from "../AnchorButton";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <div className="header-title">
          <h2>Kanban App</h2>
        </div>
        <AnchorButton
          classname="header-logo"
          to="/"
        >
          <img src={Logo} alt="React-logo" />
        </AnchorButton>
      </div>
    </header>
  )
}

export default Header;