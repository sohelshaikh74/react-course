// eslint-disable-next-line react/prop-types
const Wheather = ({ temperature }) => {
  if (temperature > 15) {
    return <h1>It&apos;s cold outside</h1>;
  } else if (temperature > 15 || temperature > 25) {
    return <h1>It&apos;s nice outside</h1>;
  }
  return <h1>it&apos;s hot outside </h1>;
};

export default Wheather;
