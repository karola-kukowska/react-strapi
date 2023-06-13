import { useGlobalContext } from "../context";
import { FaBars } from "react-icons/fa";
import NavLinks from "./Navlinks";

const Navbar = () => {
  const { toggleSidebar } = useGlobalContext();

  return (
    <nav>
      <div className="nav-center">
        <h3 className="logo">Logo</h3>
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};
export default Navbar;
