const Wheather = () => {
  const temp = 15;
  if (temp < 15) {
    return <h1>It&apos;s cold outside</h1>;
  } else if (temp >= 15 && temp <= 25) {
    return <h1>It&apos;s nice outside</h1>;
  } else if (temp > 25) {
    return <h1>It&apos;s hot outside</h1>;
  }
};

export default Wheather;
