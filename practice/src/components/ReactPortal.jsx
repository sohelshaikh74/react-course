import RreactDOM from "react";
const ReactPortal = () => {
  return RreactDOM.createPortal(
    <h1>Thsis is portal</h1>,
    document.getElementById("react-portal")
  );
};

export default ReactPortal;
