import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Contact = () => {
  const { phone, name } = useContext(AppContext);
  console.log("phne", phone);
  console.log("name", name);

  return (
    <div className="contact">
      <h4>Contact</h4>
      <p>phone No.{phone}</p>
      <p>Name: {name}</p>
    </div>
  );
};

export default Contact;
