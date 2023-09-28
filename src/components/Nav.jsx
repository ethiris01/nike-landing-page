import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { close } from "../assets/icons";
// import navLinks
import { navLinks } from "../constants";
import { useState } from "react";
const Nav = () => {
  // state variables
  const [open, setOpen] = useState(false);
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="md:flex items-center justify-between ">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <div
          onClick={() => setOpen(!open)}
          className="md:hidden absolute right-8 top-8 cursor-pointer"
        >
          {open ? (
            <img src={close} alt="close" width={25} height={25} />
          ) : (
            <img src={hamburger} alt="hamburger" width={25} height={25} />
          )}
        </div>
        <ul
          className={`md:flex md:flex-center absolute md:static md:z-auto z-[-1] right-7 w-full md:w-auto transition-all duration-500 ease-in ${
            open ? "top-20" : "top-[-490px]"
          } `}
        >
          {navLinks.map((item) => (
            <li
              key={item.label}
              className="flex justify-end md:ml-8 text-xl md:my-0 my-6"
            >
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Nav;
