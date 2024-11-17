const Pract = ({ timeOfDay }) => {
  return timeOfDay === "morning" ? (
    <h1>Hello {timeOfDay}</h1>
  ) : (
    <h1>hey, {timeOfDay}</h1>
  );
};

export default Pract;
