import Child from "./Child";

const Parent = () => {
  const gettingData = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Child gettingData={gettingData} />
    </div>
  );
};

export default Parent;
