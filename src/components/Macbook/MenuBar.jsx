import { FaApple } from "react-icons/fa";
import "../../css/MenuBar.css";
import { AiOutlineWifi } from "react-icons/ai";

function MenuBar() {
  return (
    <div className="menu-bar">
      <FaApple className="logo-apple" />
      <span className="menu-title">Portfolio</span>
      <span>Fichier</span>
      <span>Édition</span>
      <span>Présentation</span>
      <div className="menu-spacer"></div>
      <AiOutlineWifi className="logo-wifi" />
      <span>11:11</span>
    </div>
  );
}

export default MenuBar;
