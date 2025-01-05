import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Footer = () => {
  const { phone } = useContext(AppContext);
  return (
    <div className="footer">
      <h2>Footer</h2>
      <p>Phone No.{phone}</p>
    </div>
  );
};

export default Footer;
