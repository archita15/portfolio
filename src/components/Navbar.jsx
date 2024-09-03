import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa"; // Corrected icon name

const Navbar = () => {
    return (
      <nav className="bg-red-900 mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
           <img src={logo} alt="logo"/>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <FaLinkedin />
          <FaGithub />
          <FaTwitterSquare /> {/* Updated to the correct icon */}
        </div>
      </nav >
    );
};

export default Navbar;
