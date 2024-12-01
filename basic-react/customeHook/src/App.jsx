import Descrment from "./components/Descrment";
import Increment from "./components/Increment";

const App = () => {
  return (
    <div className="container">
      <h1>Custome Hook</h1>
      <div className="container">
        <Increment />
        <Descrment />
      </div>
    </div>
  );
};

export default App;
