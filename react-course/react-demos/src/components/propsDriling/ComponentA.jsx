import ComponentB from "./ComponentB";
import { Data } from "../contextApi/Home";
import { Data1 } from "../contextApi/Home";
// Question: how we can use name

const ComponentA = () => {
  return (
    <Data.Consumer>
      {(name) => {
        // return <h1>{name}</h1>;
        return (
          <Data1.Consumer>
            {(age) => {
              return (
                // <h1>
                //   {/* my Name is {name} and i m {age}years old */}
                // </h1>
                // <ComponentA />
              );
            }}
          </Data1.Consumer>
        );
      }}
    </Data.Consumer>
  );
};

export default ComponentA;
