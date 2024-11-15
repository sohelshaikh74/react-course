const UserList = () => {
  const user = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
  ];
  return (
    <div>
      {user.map(({ id, name, age }) => (
        <div key={id}>
          <h1>{name}</h1>
          <h1>{age}</h1>
        </div>
      ))}
    </div>
  );
};

export default UserList;
