// eslint-disable-next-line react/prop-types
const Pract = ({ timeOfDay }) => {
  return timeOfDay === "morning" ? (
    <h1>Good morning</h1>
  ) : (
    <h1>Good after noon</h1>
  );
};

export default Pract;
