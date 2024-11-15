import InvalidPassword from "./InvalidPassword";
import ValidPassword from "./ValidPassword";

// eslint-disable-next-line react/prop-types
const Password = ({ isValid }) => {
  return <>{isValid ? <ValidPassword /> : <InvalidPassword />}</>;
};

export default Password;
