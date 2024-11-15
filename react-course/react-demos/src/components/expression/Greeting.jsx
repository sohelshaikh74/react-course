// const Greeting = () => {
//   const greet = "Jhon";
//   const date = new Date().getDate();
//   const month = new Date().getMonth();
//   const year = new Date().getFullYear();
//   return (
//     <div>
//       <h1>Hello, Good Moring {greet}</h1>
//       <p>
//         {date}/{month}/{year}
//       </p>
//     </div>
//   );
// };

// export default Greeting;

const Greeting = () => {
  const greet = "Hello";
  const date = new Date();
  return (
    <div>
      <h1>{greet}</h1>
      <p>{date.getDate()}</p>
    </div>
  );
};

export default Greeting;
