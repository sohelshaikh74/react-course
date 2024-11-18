// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";

// const FetchDataEffect = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/posts"
//         );
//         const data = await response.json();
//         console.log(data);
//         setData(data); // Optionally update state with the fetched data
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     getData();
//   }, []); // Empty dependency array to run the effect only once when the component mounts

//   return (
//     <div>
//       <h1>Fetched Data</h1>
//       {/* Render data here if needed */}
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// };

// export default FetchDataEffect;

const FetchDataEffect = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.error("Error Fetching data:", error);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <h1>FetchData</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default FetchDataEffect;
