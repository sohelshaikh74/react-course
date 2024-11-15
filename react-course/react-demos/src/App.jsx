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

import Pract from "./components/conditional-rendering/exercise/Pract";
import Demo from "./components/style/Demo";

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
      {/* <Pract timeOfDay="afternoon" /> */}

      {/* ***Styling */}
      <Demo />
    </section>
  );
};

export default App;
