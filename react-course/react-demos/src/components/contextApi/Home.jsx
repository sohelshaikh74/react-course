import { createContext } from "react";
import ComponentA from "../propsDriling/ComponentA";
import ComponentC from "../propsDriling/ComponentC";

export const Data = createContext();
export const Data1 = createContext();

const Home = () => {
  const name = "Mark";
  const age = 22;
  return (
    <div>
      {/* this provider allos us to provide our value or our data into multiple components */}
      {/* inside this value attribute we have to pass data which want to pass inside our component */}
      {/* we no need to dril our data into multiple component using props now we can use contectApi */}
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <ComponentA />
        </Data1.Provider>
      </Data.Provider>
    </div>
  );
};

export default Home;
