const List = () => {
  // why we need key props
  // because here array are mutalble we can change the value then how react can recognize which element add or remove that why we need to use key props
  //   const numbers = [1, 2, 3, 4, 5];

  const userInfo = [
    {
      userName: "jhon",
      email: "jhon@gmail.com",
      location: "usa",
    },
    {
      userName: "jhon",
      email: "jhon@gmail.com",
      location: "usa",
    },
    {
      userName: "mark",
      email: "mark@gmail.com",
      location: "london",
    },
    {
      userName: "steve",
      email: "steve@gmail.com",
      location: "africa",
    },
  ];
  return (
    <div>
      {/* {numbers.map((number, index) => {
        return (
          <ul key={index}>
            <li>{number}</li>
          </ul>
        );
      })} */}
      {userInfo.map(({ userName, email, location }) => (
        <ul key={Math.random()}>
          <li>{userName}</li>
          <li>{email}</li>
          <li>{location}</li>
        </ul>
      ))}
    </div>
  );
};

export default List;
