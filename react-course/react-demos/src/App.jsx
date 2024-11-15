import Expression from "./components/expression/Expression";
import Greeting from "./components/expression/Greeting";
import ProductInfo from "./components/expression/ProductInfo";
import List from "./components/lists/List";
import ProductList from "./components/lists/ProductList";
import UserList from "./components/lists/UserList";

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
      <UserList />
      <ProductList />
    </section>
  );
};

export default App;
