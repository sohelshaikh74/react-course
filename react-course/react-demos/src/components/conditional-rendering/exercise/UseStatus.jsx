// eslint-disable-next-line react/prop-types
const UseStatus = ({ loggedIn, isAdmin }) => {
  if (loggedIn && isAdmin) {
    return <h1>Welcome Admin</h1>;
  } else {
    return <h1>Welcome User</h1>;
  }
};

export default UseStatus;
