import { useContext } from "react";
import { Data, Data1 } from "../contextApi/Home";

const ComponentC = () => {
  const userName = useContext(Data);
  const userAge = useContext(Data1);
  return (
    // {
    //     (name)=>{
    //         return (
    //             <Data.Consumer>
    //           {() => {
    //             return (
    //               <h1>
    //                 My name is {name} and {}years old
    //               </h1>
    //             );
    //           }}
    //         </Data.Consumer>)
    //     }
    // }
  );
};

export default ComponentC;
