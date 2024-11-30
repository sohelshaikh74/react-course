import { useState } from "react";
import { navItems } from "../../../../basic-react/landingpage/src/constants";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const openToggle = () => {
    setToggleNavbar(!toggleNavbar);
  };
  return (
    <div className="sticky top-0 z-50 border-b border-neutral-700/80 py-4">
      <div className="container relative px-4 mx-auto text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="w-10 h-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>
          <ul className="hidden lg:flex space-x-12 ml-14">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex items-center justify-center space-x-12">
            <a href="#" className="border rounded-md px-2 py-3">
              Sing In
            </a>
            <a
              href=""
              className="px-2 py-3 bg-gradient-to-r from-orange-500 to-orange-800 rounded"
            >
              Create an Account
            </a>
          </div>
          <div className="lg:hidden md:flex-col justify-end">
            <button onClick={openToggle}>
              {toggleNavbar ? <X></X> : <Menu></Menu>}
            </button>
          </div>
        </div>
        {toggleNavbar && (
          <div className="fixed  right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center  lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="" className="border rounded-md px-2 py-3">
                Sing In
              </a>
              <a
                href=""
                className="px-2 py-3 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md"
              >
                Create an Account
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
