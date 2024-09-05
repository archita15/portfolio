import logo from "../assets/archita_logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa"; // Corrected icon name

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-1">
      <div className="flex flex-shrink-0 items-center ml-4">
        <img src={logo} alt="logo" style={{ width: '100px', height: 'auto' }} />
      </div>
      <div className="flex items-center justify-between w-full mr-4">
        <ul className="flex gap-4 ml-auto mr-10 text-2xl"> {/* Added ml-auto */}
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div className="flex items-center gap-4 text-2xl">
          <FaLinkedin />
          <FaGithub />
          <FaTwitterSquare />
        </div>
      </div>
    </nav >
  );
};

export default Navbar;