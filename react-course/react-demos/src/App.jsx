// import Expression from "./components/expression/Expression";
// import Greeting from "./components/expression/Greeting";
// import ProductInfo from "./components/expression/ProductInfo";
// import List from "./components/lists/List";
// import ProductList from "./components/lists/ProductList";
// import UserList from "./components/lists/UserList";
// import UserStatus from "./components/conditional-rendering/exercise/UserStatus";
// import Password from "./components/conditional-rendering/Password";
// import Card from "./components/props/Card";
// import Parent from "./components/props/Parent";
// import Parent2 from "./components/props/Parent2";

import ComponentA from "./components/propsDriling/ComponentA";

// import Pract from "./components/conditional-rendering/exercise/Pract";
// import Button from "./components/events/Button";
// import Copy from "./components/events/Copy";
// import Move from "./components/events/Move";
// import ArrayWithObjects from "./components/hooks/ArrayWithObjects";
// import FirstUseState from "./components/hooks/FirstUseState";
// import PracticeHooks from "./components/hooks/hooksPractice/PracticeHooks";
// import UseStateWithArray from "./components/hooks/UseStateWithArray";
// import WithArray from "./components/hooks/UseStateWithArray";
// import UseStateWithObject from "./components/hooks/UseStateWithObject";
// import ReactIcons from "./components/react-icons/ReactIcons";
// import ComponentOne from "./components/(Props)sharingState/ComponentOne";
// import ComponentTwo from "./components/(Props)sharingState/ComponentTwo";
// import Demo from "./components/style/Demo";
// import IconComponent from "./components/style/styleExcer/IconComponent";
// import ProfileCard from "./components/style/styleExcer/ProfileCard";
// import StyleCard from "./components/style/styleExcer/StyleCard";
// import { useEffect, useState } from "react";
// import ComponentOne from "./components/stateSharing/ComponentOne";
// import ComponentTwo from "./components/stateSharing/ComponentTwo";
// import Example from "./components/Example";
// import StatePractice from "./components/stateSharing/StatePractice";
// import ExampleThree from "./components/stateSharing/ExampleThree";
// import Counter from "./components/stateSharing/useStateChallange/Counter";
// import TodoList from "./components/stateSharing/useStateChallange/TodoList";
// import TodoListPractice from "./components/stateSharing/useStateChallange/TodoListPractice";
// import Profile from "./components/stateSharing/useStateChallange/Profile";
// import ShoppingList from "./components/stateSharing/useStateChallange/ShoppingList";
// import CopyInput from "./components/portal/CopyInput";
// import UseEffectExample from "./components/hooks/useEffect/UseEffectExample";
// import BasicEffect from "./components/hooks/useEffect/useEffectChallange/BasicEffect";
// import CounterEffet from "./components/hooks/useEffect/useEffectChallange/CounterEffet";
// import FetchDataEffect from "./components/hooks/useEffect/useEffectChallange/FetchDataEffect";

// import Greeting from "./components/conditional-rendering/exercise/Greeting";
// import Pract from "./components/conditional-rendering/exercise/Pract";
// import Practice from "./components/conditional-rendering/exercise/Practice";
// import UseStatus from "./components/conditional-rendering/exercise/UseStatus";
// import Wheather from "./components/conditional-rendering/exercise/Wheather";

// ***conditional rendering

// const ValidPassword = () => <h1>Valid password</h1>;
// const InValidPassword = () => <h1>InValid password</h1>;

// eslint-disable-next-line react/prop-types
// const Password = ({ isValid }) => {
//   //   if (isValid) {
//   //     return <ValidPassword />;
//   //   }
//   //   return <InValidPassword />;

//   //return isValid ? <ValidPassword /> : <InValidPassword />;
// };

// very shortcut
// const Password = ({ isValid }) =>
//   isValid ? <ValidPassword /> : <InValidPassword />;

// const Cart = () => {
//   const items = ["wireless earbuds", "power bank", "new SSd", "hoodie"];
//   return (
//     <div>
//       <h1>Cart 🛒</h1>
//       {items.length > 0 && <h2>{items.length} item in your cart</h2>}
//       <ul>
//         <h4>Products </h4>
//         {items.map((item) => (
//           <li key={Math.random()}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

const App = () => {
  // %%%%% PORPS ^^^^^

  // const [count, setCount] = useState(0);

  // const [counter, setCounter] = useState(0);

  // ############# IMPORTANT ##########
  // UseEffect Examples
  // const [value, setValue] = useState(0);
  // const [something, setSomething] = useState(0);
  // // if (value > 0) {   //we cannot wrappe hook in any condition
  // useEffect(() => {
  //   if (value > 0) {
  //     console.log("useEffect Called");
  //     document.title = `Increment${value}`;
  //   }
  // }, [value, something]);
  // // }   //you can use condition in side hook

  // ##### PROS DRILING
  const name = "jhon";

  return (
    <section>
      {/* <form>
        <label>Name</label>
        <input type="text" placeholder="enter your name" />
      </form> */}

      {/* ****expression */}
      {/* <JsxRules /> */}
      {/* <Expression /> */}
      {/* <Greeting /> */}

      {/* ***list */}
      {/* <ProductInfo /> */}
      {/* <List /> */}
      {/* <UserList />
      <ProductList /> */}

      {/* ***porps */}
      {/* <Parent /> */}
      {/* <Parent2 /> */}
      {/* <Card>
        <h1>My Card</h1>
        <p>This is contnet for card1</p>
      </Card>
      <Card>
        <h1>My Card</h1>
        <p>This is contnet for card2</p>
      </Card>
      <Card>
        <h1>My Card</h1>
        <p>This is contnet for card3</p>
      </Card> */}

      {/* Conditional rendering */}
      {/* <Password isValid={true} /> */}
      {/* <Cart /> */}
      {/* <Password isValid={true} /> */}
      {/* **expersice */}
      {/* <Wheather /> */}
      {/* <UseStatus loggedIn={true} isAdmin={false} /> */}
      {/* <Greeting timeOfDay="afternoon" /> */}
      {/* <Pract timeOfDay="morning" /> */}

      {/* ***Styling */}
      {/* <Demo /> */}
      {/* exercise  */}
      {/* <StyleCard /> */}
      {/* <ProfileCard /> */}
      {/* <IconComponent /> */}

      {/* **** React-icons */}
      {/* <ReactIcons /> */}

      {/* ****Events */}
      {/* <Button /> */}
      {/* <Copy /> */}
      {/* <Move /> */}

      {/* *** HOOKS */}
      {/* <FirstUseState /> */}
      {/* <UseStateWithArray /> */}
      {/* <UseStateWithObject /> */}
      {/* <ArrayWithObjects /> */}
      {/* Hooks Practice */}
      {/* <PracticeHooks /> */}

      {/* ***PROPS Sharing data to component  */}
      {/* <ComponentOne count={count} onClickHandler={() => setCount(count + 1)} /> */}
      {/* <ComponentTwo count={count} onClickHandler={() => setCount(count - 1)} /> */}
      {/* <Example /> */}
      {/* <StatePractice number={counter} setCounter={setCounter} /> */}
      {/* <ExampleThree /> */}
      {/* Exercise */}
      {/* <Counter /> */}
      {/* <TodoList /> */}
      {/* <TodoListPractice /> */}
      {/* <ShoppingList /> */}
      {/* <Profile /> */}

      {/* ***Portal */}
      {/* <CopyInput /> */}

      {/*  ***useEffect()  */}

      {/* <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>Click me</button>
      <button onClick={() => setSomething(something + 1)}>
      Inrement By Something
      </button> */}
      {/* <UseEffectExample /> */}

      {/* ****UseEffect practice  */}
      {/* <BasicEffect /> */}
      {/* <CounterEffet /> */}
      {/* <FetchDataEffect /> */}

      {/* ### porps driling */}
      {/* name data pass to ComponentA==> ComponentB==> componentC==>(output) */}
      <ComponentA name={name} />
    </section>
  );
};

export default App;
