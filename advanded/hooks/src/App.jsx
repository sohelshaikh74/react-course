// import { useState } from "react";

import { useState } from "react";

// const App = () => {
//   // let counter = useState(0);
//   // const [counter, setCounter] = useState(0);
//   // console.log(counter);

//   // let color = "red";
//   const [color, setColor] = useState("Red");

//   // const [colors, setColors] = useState("Red");
//   const changeColor = () => {
//     // color = "blue";
//     setColor("Blue");
//     console.log(color);
//   };
//   return (
//     <div>
//       <h1>My fav color is {color}</h1>
//       <button onClick={changeColor}>Blue</button>
//     </div>
//   );
// };

// export default App;

// we can create multiple state variable wtiht same components
// const App = () => {
//   // const [brand, setBrand] = useState("Ferrari");
//   // const [model, setModel] = useState("Roma");
//   // const [year, setYear] = useState(2023);
//   // const [color, setColor] = useState("Red");

//   // instaed of creating multiple state variables we can create state object

//   const [car, setCar] = useState({
//     brand: "Ferrari",
//     model: "Roma",
//     year: 2023,
//     color: "Red",
//   });
//   const changeColor = () => {
//     // setCar({ car: "Blue " }); //this is not way to updat object using setter function

//     setCar((prev) => ({ ...prev, color: "Blue" }));
//   };
//   return (
//     <div>
//       {/* <h1>My Ferrari</h1> */}
//       {/* <h2>it is a red Roma from 2023</h2> */}

//       {/* <h1>My {brand}</h1> */}
//       {/* <h2>It is a {color} {model} from {year}</h2> */}

//       <h1>My {car.brand}</h1>
//       <h2>
//         It is a {car.color} {car.model} from {car.year}
//       </h2>
//       <button onClick={changeColor}>Blue</button>
//     </div>
//   );
// };

// export default App;

// updating state based on previous state

const App = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    setCount((prev) => prev + 4);
    setCount((prev) => prev + 4);
    setCount((prev) => prev + 4);
    setCount((prev) => prev + 4);
  };
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increaseCount}>Increase By 4</button>
    </div>
  );
};

export default App;
