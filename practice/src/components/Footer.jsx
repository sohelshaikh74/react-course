import { useContext } from "react";
import { AppContent } from "../context/AppContent";

const Footer = () => {
  const phone = useContext(AppContent);
  return (
    <div>
      Footer
      <p>{phone}</p>
    </div>
  );
};

export default Footer;
