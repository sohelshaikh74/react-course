// import { useState } from "react";

import { useEffect, useMemo, useRef, useState } from "react";
// import First from "./components/useCallback hook/Home";
import Home from "./components/useCallback hook/Home";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

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

// const App = () => {
//   const [count, setCount] = useState(0);
//   const increaseCount = () => {
//     // setCount(count + 1);
//     // setCount(count + 1);
//     // setCount(count + 1);
//     // setCount(count + 1);
//     setCount((prev) => prev + 4);
//     setCount((prev) => prev + 4);
//     setCount((prev) => prev + 4);
//     setCount((prev) => prev + 4);
//   };
//   return (
//     <div>
//       <h1>Count:{count}</h1>
//       <button onClick={increaseCount}>Increase By 4</button>
//     </div>
//   );
// };

// export default App;

// ================ USEEFFECT HOOK =====================
// import { useEffect } from "react";
// const App = () => {
//   // useEffect(()=>{})
//   // useEffect(() => {}, []);
//   // useEffect(()=>{},[data])

//   const [counter, setCounter] = useState(0);
//   useEffect(() => {
//     setTimeout(() => {
//       setCounter((prev) => prev + 1);
//     }, 2000);
//   }, [counter]); //when we use useEffect() hook without dependency whenever any state change in component it will execute funtion
//   // if we use [] dependency then it will execute only onec
//   return (
//     <div>
//       <h1>I have renderd {counter} times!</h1>
//     </div>
//   );
// };

// export default App;

// ================ USEREF ============

// const App = () => {
//   const [value, setValue] = useState(0);
//   // const [count, setCount] = useState(0);
//   // useEffect(() => {
//   //   // setCount((prev) => prev + 1);
//   // });

//   const count = useRef(0);
//   console.log(count);
//   useEffect(() => {
//     count.current = count.current + 1;
//   });

//   return (
//     <div>
//       <button onClick={() => setValue((prev) => prev - 1)}>-1</button>
//       <h1>{value}</h1>
//       <button onClick={() => setValue((prev) => prev + 1)}>+1</button>
//       <h1>Render Count:{count.current}</h1>
//     </div>
//   );
// };

// export default App;

// another example of useRef() hook

// const App = () => {
//   const inputElem = useRef();
//   // console.log(inputElem);
//   const btnClick = () => {
//     console.log(inputElem.current);
//     inputElem.current.style.background = "red";
//   };
//   return (
//     <div>
//       <input type="text" ref={inputElem} />
//       <button onClick={btnClick}>Click Here</button>
//     </div>
//   );
// };

// export default App;

// ============= useMemo hook ============

// const App = () => {
//   const [number, setNumber] = useState(0);
//   const [counter, setCounter] = useState(0);
//   const cubeNum = (num) => {
//     console.log("Calculation is Done");
//     return Math.pow(num, 3);
//   };
//   const result = useMemo(() => cubeNum(number), [number]);
//   return (
//     <div>
//       <input
//         type="text"
//         onChange={(e) => setNumber(e.target.value)}
//         value={number}
//       />
//       <h1>Cube of the number: {result}</h1>
//       <button onClick={() => setCounter((prev) => prev + 1)}>
//         Increase by +1
//       </button>
//       <h2>{counter}</h2>
//     </div>
//   );
// };

// export default App;

// ===================useCallback in another componetns==========

// const App = () => {
//   return <div>{/* <Home /> */}</div>;
// };

// export default App;

// =============== useContext Hook ==========

const App = () => {
  return (
    <div className="app">
      <h1>App</h1>
      <Profile />
      <Footer />
    </div>
  );
};

export default App;
